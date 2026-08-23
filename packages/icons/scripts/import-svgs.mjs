/*
 * SVG files in, icon components out.
 *
 * Drop four files per symbol into incoming/ — `<name>-<style>.svg`, one per
 * style — and this writes packages/icons/icons/<Name>.tsx in the shape the rest
 * of the build expects: one three-branch ternary, currentColor, the strokeWidth
 * prop, and the duotone opacity expression that makes TwoTone a variant of the
 * outline drawing rather than a fifth file.
 *
 *   node scripts/import-svgs.mjs [--from <dir>] [--force]
 *
 * Nothing here parses XML by hand. The tokenizer is the React Native package's,
 * which already turns rendered SVG into a tree and is proven against all 8,568
 * drawings; svgo (a devDependency here since optimize-paths) strips the
 * comments and processing instructions a design tool exports, which is the only
 * difference between a Figma file and React's output.
 *
 * Coordinates are left alone: `optimize:paths` runs svgo over icons/ on every
 * build, rounds to two decimals and is idempotent, so rounding here would be a
 * second implementation of a step that is about to run anyway.
 *
 * The category comes from the shipped vectors — see categorize() below.
 */
import assert from "node:assert/strict";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { optimize } from "svgo";
import { parseSvgChildren } from "../../icons-react-native/scripts/parse.mjs";
import {
  cosineSimilarity,
  dequantizeInt8,
} from "./generate-embeddings.mjs";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const ICONS_DIR = path.join(ROOT, "icons");
const SRC_DIR = path.join(ROOT, "src");
const CATEGORIES = path.join(ROOT, "scripts", "icon-categories.json");

export const STYLES = ["outline", "twotone", "bold", "bulk"];

/* `wallet-add-outline.svg` -> base `wallet-add`, style `outline`. Greedy, so a
   hyphen in the name is not mistaken for the separator. */
const FILENAME = new RegExp(`^(.*)-(${STYLES.join("|")})\\.svg$`, "i");

/*
 * Only what a design tool adds and a tokenizer cannot read. No geometry plugin
 * runs: convertShapeToPath would rewrite <circle> into a path, and 242 icons in
 * the set are drawn with circles on purpose.
 */
const CLEAN = [
  "removeDoctype",
  "removeXMLProcInst",
  "removeComments",
  "removeMetadata",
  "removeEditorsNSData",
  "removeTitle",
  "removeDesc",
  "cleanupAttrs",
];

/** `wallet-add` -> `WalletAdd`, `3d-rotate` -> `3dRotate`, `Wallet` -> `Wallet`. */
export function pascalCase(base) {
  return base
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/** SVG attribute spelling to JSX: `stroke-linecap` -> `strokeLinecap`. */
function toJsxName(key) {
  return key.replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
}

/** Root attributes and children of one file, cleaned and tokenized. */
export function readDrawing(file) {
  const { data } = optimize(readFileSync(file, "utf8"), { plugins: CLEAN });

  const open = data.match(/<svg([^>]*)>/);
  assert.ok(open, `${path.basename(file)}: no <svg> element`);

  const attrs = {};
  for (const [, key, value] of open[1].matchAll(/([\w:-]+)="([^"]*)"/g)) {
    attrs[key] = value;
  }
  assert.ok(attrs.viewBox, `${path.basename(file)}: no viewBox`);

  const inner = data
    .slice(open.index + open[0].length)
    .replace(/<\/svg>\s*$/, "");

  return { viewBox: attrs.viewBox, nodes: parseSvgChildren(inner) };
}

/*
 * What makes two nodes the same shape. Colour and opacity are deliberately not
 * in it: matching the outline drawing against the twotone one is exactly the
 * question of which shapes had their opacity dropped, so including opacity
 * would make every secondary shape fail to match.
 */
const GEOMETRY = [
  "d",
  "cx",
  "cy",
  "r",
  "rx",
  "ry",
  "x",
  "y",
  "width",
  "height",
  "points",
];

function signature(node) {
  const geo = GEOMETRY.filter((k) => node.attrs[k] != null)
    .map((k) => `${k}=${node.attrs[k]}`)
    .join(",");
  return `${node.tag}(${geo})[${node.children.map(signature).join("")}]`;
}

function isSecondary(node) {
  return parseFloat(node.attrs.opacity ?? "1") < 1;
}

/*
 * Which of the outline drawing's shapes are the secondary ones.
 *
 * The twotone file is the answer, and it is the whole reason four files are
 * required rather than three: TwoTone is not a drawing in the output, it is the
 * outline drawing with `opacity={duotone ? "0.4" : "1"}` on these shapes. Match
 * by position first, since an export of the same artwork keeps its order, and
 * fall back to matching by shape. A pair that cannot be matched is a genuine
 * disagreement between the two files and is reported rather than guessed at.
 */
function markSecondary(name, outline, twotone, marked = new Set()) {
  assert.equal(
    outline.length,
    twotone.length,
    `${name}: outline has ${outline.length} shapes, twotone has ${twotone.length}`,
  );

  const positional = outline.every(
    (node, i) => signature(node) === signature(twotone[i]),
  );

  let pairs;
  if (positional) {
    pairs = outline.map((node, i) => [node, twotone[i]]);
  } else {
    const byShape = new Map();
    for (const node of twotone) {
      const key = signature(node);
      if (!byShape.has(key)) byShape.set(key, []);
      byShape.get(key).push(node);
    }
    pairs = outline.map((node) => {
      const matches = byShape.get(signature(node));
      assert.ok(
        matches?.length,
        `${name}: a shape in the outline drawing is not in the twotone one`,
      );
      return [node, matches.shift()];
    });
  }

  /* Depth matters: 38 icons keep their artwork inside a <g>, and flagging only
     the top level left every one of them with a TwoTone identical to Outline —
     which renders, and is only wrong to look at. */
  for (const [from, to] of pairs) {
    if (isSecondary(to)) marked.add(from);
    markSecondary(name, from.children, to.children, marked);
  }

  return marked;
}

/** The same set for a drawing that carries its own half tones: bulk. */
function selfSecondary(nodes, marked = new Set()) {
  for (const node of nodes) {
    if (isSecondary(node)) marked.add(node);
    selfSecondary(node.children, marked);
  }
  return marked;
}

const DUOTONE = `opacity={duotone ? "0.4" : "1"}`;

/** One node as JSX. Membership of `marked` swaps its opacity for the expression. */
function emitNode(node, marked, indent) {
  const secondary = marked.has(node);
  const pad = " ".repeat(indent);
  const props = [];

  for (const [key, value] of Object.entries(node.attrs)) {
    if (key === "xmlns" || key.startsWith("xmlns:")) continue;
    if (key === "opacity") continue;
    /* The literal is what the stroke slider overwrites; the prop is what it
       writes into. */
    if (key === "stroke-width") {
      props.push("strokeWidth={strokeWidth}");
      continue;
    }
    const name = toJsxName(key);
    /* A hex here is an icon that ignores `color` and goes black in dark mode. */
    if ((key === "fill" || key === "stroke") && value !== "none") {
      props.push(`${name}="currentColor"`);
      continue;
    }
    props.push(`${name}="${value}"`);
  }

  /* A full-opacity attribute is dropped rather than written out: it is what the
     outline drawing renders the duotone expression to, so keeping it would make
     re-importing an icon this script wrote differ from the original. */
  if (secondary) props.unshift(DUOTONE);
  else if (isSecondary(node)) {
    props.unshift(`opacity="${node.attrs.opacity}"`);
  }

  /* One attribute or none stays on the line, which is how the rest of the set
     is written and how prettier would reformat it anyway. */
  const inline = props.length <= 1;
  const attrs = inline
    ? props.map((p) => ` ${p}`).join("")
    : props.map((p) => `\n${pad}  ${p}`).join("");
  const close = inline ? "" : `\n${pad}`;

  if (!node.children.length) {
    return inline
      ? `${pad}<${node.tag}${attrs} />`
      : `${pad}<${node.tag}${attrs}\n${pad}/>`;
  }

  const children = node.children
    .map((child) => emitNode(child, marked, indent + 2))
    .join("\n");
  return `${pad}<${node.tag}${attrs}${close}>\n${children}\n${pad}</${node.tag}>`;
}

function emitSvg(viewBox, nodes, marked) {
  const body = nodes.map((node) => emitNode(node, marked, 10)).join("\n");

  return `        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="${viewBox}"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
${body}
        </svg>`;
}

/** The component file, in the shape the other 2,142 already have. */
export function emitIcon(name, drawings) {
  const viewBox = drawings.outline.viewBox;
  for (const style of STYLES) {
    assert.equal(
      drawings[style].viewBox,
      viewBox,
      `${name}: ${style} is ${drawings[style].viewBox}, outline is ${viewBox}`,
    );
  }

  const marked = markSecondary(
    name,
    drawings.outline.nodes,
    drawings.twotone.nodes,
  );

  /* Bulk keeps its own half-tone shapes. The expression rather than a literal
     0.4 because `duotone` is always true in this branch and the corpus writes
     it this way; React resolves it to the same attribute. */
  const bulkMarked = selfSecondary(drawings.bulk.nodes);

  return `import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const Icon${name} = forwardRef<SVGSVGElement, IconProps>(function Icon${name}(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

  /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
  const labelled =
    rest["aria-label"] != null || rest["aria-labelledby"] != null;
  const a11y: SVGProps<SVGSVGElement> = labelled
    ? { role: "img" }
    : { "aria-hidden": true };

  return (
    <>
      {!fill ? (
${emitSvg(viewBox, drawings.outline.nodes, marked)}
      ) : duotone ? (
${emitSvg(viewBox, drawings.bulk.nodes, bulkMarked)}
      ) : (
${emitSvg(viewBox, drawings.bold.nodes, new Set())}
      )}
    </>
  );
});

export default Icon${name};
`;
}

/*
 * The category, from the vectors the package already ships.
 *
 * embeddings.json is one 384-dim vector per existing icon, built from its name,
 * category label and keywords. Embedding the new name into the same space and
 * taking the nearest existing icons is asking "what is this next to", which is
 * the question the categories file answers by hand — and it inherits whatever
 * the sheets decided about Pen versus PenTool, which no prefix rule ever got
 * right for long.
 *
 * Confidence is the winning category's share of the neighbourhood, so a name
 * that lands between two families says so instead of looking certain.
 */
const NEIGHBOURS = 8;

export async function categorize(names) {
  const metadata = JSON.parse(
    readFileSync(path.join(SRC_DIR, "metadata.json"), "utf8"),
  );
  const vectors = JSON.parse(
    readFileSync(path.join(SRC_DIR, "embeddings.json"), "utf8"),
  );

  const known = metadata.icons
    .filter((icon) => vectors[icon.name])
    .map((icon) => ({
      name: icon.name,
      category: icon.category,
      vector: dequantizeInt8(vectors[icon.name]),
    }));
  assert.ok(known.length, "embeddings.json is empty. Run the build first.");

  const { pipeline } = await import("@xenova/transformers");
  /* The same model and the same quantization as generate-embeddings.mjs. Two
     models is two vector spaces, and a query in the wrong one ranks noise. */
  const extract = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2",
    { quantized: true },
  );

  const out = new Map();

  for (const name of names) {
    const displayName = name.replace(/([A-Z])/g, " $1").trim();
    const embedded = await extract(
      `${displayName} ${displayName.toLowerCase()} icon`,
      { pooling: "mean", normalize: true },
    );
    const query = Array.from(embedded.data);

    const ranked = known
      .map((icon) => ({ ...icon, score: cosineSimilarity(query, icon.vector) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, NEIGHBOURS);

    const weights = {};
    let total = 0;
    for (const { category, score } of ranked) {
      /* Similarities are all positive and bunched; clamping at zero keeps a
         negative from subtracting a vote. */
      const weight = Math.max(0, score);
      weights[category] = (weights[category] ?? 0) + weight;
      total += weight;
    }

    const [category, weight] = Object.entries(weights).sort(
      (a, b) => b[1] - a[1],
    )[0];

    out.set(name, {
      category,
      confidence: total ? weight / total : 0,
      nearest: ranked.slice(0, 3).map((icon) => icon.name),
    });
  }

  return out;
}

/** Adds the new names to icon-categories.json, in the sort order it already has. */
function fileCategories(assigned) {
  const data = JSON.parse(readFileSync(CATEGORIES, "utf8"));

  for (const [name, { category }] of assigned) {
    assert.ok(
      data.categories[category],
      `${name} was filed under ${category}, which has no label`,
    );
    data.icons[name] = category;
  }

  data.icons = Object.fromEntries(
    Object.entries(data.icons).sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0)),
  );

  writeFileSync(CATEGORIES, `${JSON.stringify(data, null, 2)}\n`);
}

/*
 * The totals in prose. Every published description and README states them, and
 * nothing derives them, so they go stale the moment the set grows — which is
 * this script's own doing.
 *
 * Only the two numbers that moved are replaced, by their old value, and only in
 * these files. The CHANGELOGs say "2,142 symbols / 8,568 drawings, up from
 * 1,963 / 7,852", which is a fact about a past release and has to stay wrong
 * forever; the script comments quoting 2,142 are prose about an old bug. Both
 * would be corrupted by a blanket search and replace.
 */
const COUNTED = [
  "README.md",
  "packages/icons/README.md",
  "packages/icons/package.json",
  "packages/icons-svg/README.md",
  "packages/icons-svg/package.json",
  "packages/icons-vue/README.md",
  "packages/icons-vue/package.json",
  "packages/icons-svelte/README.md",
  "packages/icons-svelte/package.json",
  "packages/icons-react-native/README.md",
  "packages/icons-react-native/package.json",
];

const STYLE_COUNT = STYLES.length;

/** `2,142` and `8,568` as this repo writes them. */
const thousands = (n) => n.toLocaleString("en-US");

/**
 * Both totals, replaced by value. Exported for the check: it is a string
 * rewrite over eleven files, and the failure mode is a silent no-match.
 */
export function retotal(text, before, after) {
  return text
    .replaceAll(thousands(before * STYLE_COUNT), thousands(after * STYLE_COUNT))
    .replaceAll(thousands(before), thousands(after));
}

/*
 * The total the package currently claims, which is not the same as "what it was
 * before this run": an icon added by hand leaves every README a symbol behind,
 * and subtracting what was just imported would then look for a number that
 * appears nowhere and quietly change nothing. Reading the stated figure makes
 * the rewrite self-healing instead.
 */
function statedTotal(repoRoot) {
  const manifest = path.join(repoRoot, "packages", "icons", "package.json");
  const match = /([\d,]+) symbols/.exec(readFileSync(manifest, "utf8"));
  assert.ok(match, "packages/icons/package.json states no symbol total");
  return Number(match[1].replace(/,/g, ""));
}

function updateCounts(repoRoot, before, after) {
  const touched = [];
  for (const file of COUNTED) {
    const full = path.join(repoRoot, file);
    if (!existsSync(full)) continue;
    const text = readFileSync(full, "utf8");
    const next = retotal(text, before, after);
    if (next !== text) {
      writeFileSync(full, next);
      touched.push(file);
    }
  }
  return touched;
}

/*
 * The changeset, so the release workflow has something to version.
 *
 * New icons are additive, which is a minor, and every package that renders the
 * set ships them. The list is read off the workspace rather than hard-coded: a
 * sixth port would otherwise be published without the artwork it just gained.
 */
function writeChangeset(repoRoot, added) {
  const packages = readdirSync(path.join(repoRoot, "packages"))
    .map((dir) => path.join(repoRoot, "packages", dir, "package.json"))
    .filter((file) => existsSync(file))
    .map((file) => JSON.parse(readFileSync(file, "utf8")))
    .filter((manifest) => !manifest.private)
    .map((manifest) => manifest.name)
    .sort();

  const names = added.map((name) => `Icon${name}`);
  const summary =
    names.length <= 3
      ? `Add ${new Intl.ListFormat("en").format(names)}.`
      : `Add ${names.length} icons: ${names.join(", ")}.`;

  const file = path.join(
    repoRoot,
    ".changeset",
    `add-${added[0].toLowerCase()}-${Date.now().toString(36)}.md`,
  );
  writeFileSync(
    file,
    `---\n${packages.map((name) => `"${name}": minor`).join("\n")}\n---\n\n${summary}\n`,
  );

  return path.relative(repoRoot, file);
}

/** Groups the drop folder into `{ Name: { style: file } }`, complete sets only. */
function collect(dir) {
  assert.ok(existsSync(dir), `${dir} does not exist. Nothing to import.`);

  const groups = new Map();
  const ignored = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile()) continue;
    const match = FILENAME.exec(entry.name);
    if (!match) {
      if (entry.name.endsWith(".svg")) ignored.push(entry.name);
      continue;
    }
    const [, base, style] = match;
    const name = pascalCase(base);
    if (!groups.has(name)) groups.set(name, {});
    groups.get(name)[style.toLowerCase()] = path.join(dir, entry.name);
  }

  const incomplete = [...groups]
    .filter(([, files]) => STYLES.some((style) => !files[style]))
    .map(
      ([name, files]) =>
        `  ${name}: missing ${STYLES.filter((s) => !files[s]).join(", ")}`,
    );

  return { groups, ignored, incomplete };
}

async function main() {
  const args = process.argv.slice(2);
  const from = args.indexOf("--from");
  const dir = path.resolve(
    from === -1 ? path.join(ROOT, "incoming") : args[from + 1],
  );
  const force = args.includes("--force");

  const { groups, ignored, incomplete } = collect(dir);

  for (const name of ignored) {
    console.warn(`--  ignored ${name}: not <name>-<style>.svg`);
  }

  /* Importing the complete ones and skipping the rest is how half a symbol
     ships: four styles are the unit, and a missing twotone file is the one
     whose absence nothing downstream can see. */
  if (incomplete.length) {
    console.error(`Incomplete symbols, nothing imported:\n${incomplete.join("\n")}`);
    process.exit(1);
  }

  if (!groups.size) {
    console.log(`Nothing to import from ${dir}`);
    return;
  }

  const existing = [...groups.keys()].filter((name) =>
    existsSync(path.join(ICONS_DIR, `${name}.tsx`)),
  );
  if (existing.length && !force) {
    console.error(
      `Already in the set: ${existing.join(", ")}\n` +
        `Rename the files, or pass --force to overwrite the artwork.`,
    );
    process.exit(1);
  }

  const written = [];
  for (const [name, files] of [...groups].sort()) {
    const drawings = {};
    for (const style of STYLES) drawings[style] = readDrawing(files[style]);
    writeFileSync(path.join(ICONS_DIR, `${name}.tsx`), emitIcon(name, drawings));
    written.push(name);
    console.log(`ok  ${name}`);
  }

  /* Only names new to the set: --force re-imports artwork for an icon that is
     already filed, and re-filing it would overwrite a hand-made correction. */
  const unfiled = written.filter(
    (name) =>
      !JSON.parse(readFileSync(CATEGORIES, "utf8")).icons[name],
  );

  if (unfiled.length) {
    console.log(`\nCategorising ${unfiled.length}...`);
    const assigned = await categorize(unfiled);
    fileCategories(assigned);

    console.log("");
    for (const [name, { category, confidence, nearest }] of assigned) {
      const pct = `${Math.round(confidence * 100)}%`.padStart(4);
      const flag = confidence < 0.5 ? " <- check" : "";
      console.log(
        `${pct}  ${name.padEnd(24)} ${category.padEnd(24)} near ${nearest.join(", ")}${flag}`,
      );
    }
  }

  /* Consumed, so a second run is not 200 collisions. Moved rather than deleted:
     the export is the only copy of the artwork until the .tsx is committed. */
  const done = path.join(dir, "imported");
  mkdirSync(done, { recursive: true });
  for (const files of groups.values()) {
    for (const file of Object.values(files)) {
      renameSync(file, path.join(done, path.basename(file)));
    }
  }

  console.log(
    `\n${written.length} icon${written.length === 1 ? "" : "s"} written to icons/. ` +
      `Sources moved to ${path.relative(ROOT, done)}.`,
  );

  /*
   * Counted off the directory rather than src/metadata.json: this runs before
   * the build, and metadata.json still describes the set as it was a minute
   * ago. The directory is what generate-metadata is about to count anyway.
   */
  const symbols = readdirSync(ICONS_DIR).filter((f) => f.endsWith(".tsx")).length;
  const added = written.filter((name) => !existing.includes(name));

  if (!added.length) {
    console.log(
      "Nothing new in the set, so no counts to move and nothing to version. " +
        "Re-imported artwork needs its own changeset (`pnpm changeset`).",
    );
    return;
  }

  const repoRoot = path.join(ROOT, "..", "..");
  const stated = statedTotal(repoRoot);
  const touched = updateCounts(repoRoot, stated, symbols);
  console.log(
    `\n${thousands(symbols)} symbols / ${thousands(symbols * STYLE_COUNT)} drawings ` +
      `in ${touched.length} file${touched.length === 1 ? "" : "s"}` +
      (stated === symbols - added.length
        ? "."
        : `, up from the ${thousands(stated)} they still claimed.`),
  );
  if (!touched.length) {
    console.warn(
      `--  no file said ${thousands(stated)}; the totals in the READMEs need a look.`,
    );
  }

  console.log(`Changeset: ${writeChangeset(repoRoot, added)}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
