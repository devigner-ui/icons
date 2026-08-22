#!/usr/bin/env node
/*
 * The CLI. Reads the two data files the package already publishes,
 * dist/metadata.json and dist/embeddings.json, so `list`, `info`,
 * `categories` and `search` cost nothing beyond this file.
 *
 * No dependencies. Two things are reached for lazily and only when a command
 * actually needs them, so neither is a cost anyone pays to install icons:
 *
 *   @xenova/transformers  embeds the search query, the one thing the shipped
 *                         vectors cannot do for themselves. Absent, search
 *                         falls back to keywords and says so on stderr.
 *   react + react-dom     render an icon to SVG. Peers of this package, so
 *                         present in any project that installed it. Rendering
 *                         the shipped component is what keeps `copy --svg`
 *                         honest: there is no second copy of the artwork here
 *                         to drift away from the one in dist/index.js.
 */
import { existsSync, readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";

const PKG = new URL("../", import.meta.url);

const EXIT = { OK: 0, ERROR: 1, USAGE: 2, NOT_FOUND: 3 };

/** dist is what ships; src is what exists in the repo before a build. */
function readJson(name) {
  for (const dir of ["dist/", "src/"]) {
    const url = new URL(dir + name, PKG);
    if (existsSync(url)) return JSON.parse(readFileSync(url, "utf8"));
  }
  fail(`${name} is missing. Run \`pnpm build\` in packages/icons.`);
}

function fail(message, code = EXIT.ERROR) {
  process.stderr.write(`error: ${message}\n`);
  process.exit(code);
}

/** Notes and warnings go to stderr so --format=json stays pipeable. */
function note(message) {
  process.stderr.write(`${message}\n`);
}

/* ---------- arguments ---------- */

/*
 * Handles `--key=value`, `--key value`, `--no-key` and clustered short flags.
 * Everything else is positional. Small enough to read in one sitting, which is
 * the whole reason there is no argument parser in the dependency list.
 */
function parseArgs(argv) {
  const flags = Object.create(null);
  const positional = [];

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];

    if (!arg.startsWith("-") || arg === "-") {
      positional.push(arg);
      continue;
    }

    const [key, inline] = arg.replace(/^-+/, "").split(/=(.*)/s);

    if (arg.startsWith("--no-")) {
      flags[key.slice(3)] = false;
      continue;
    }

    if (inline !== undefined) {
      flags[key] = inline;
      continue;
    }

    /* A value only follows if the next token is not itself a flag. Keeps
       `list --free-only --limit 5` from reading "--limit" as the value. */
    const next = argv[i + 1];
    if (next !== undefined && !next.startsWith("-")) {
      flags[key] = next;
      i++;
    } else {
      flags[key] = true;
    }
  }

  return { flags, positional };
}

/** First of the aliases that was actually passed, else the fallback. */
function opt(flags, aliases, fallback) {
  for (const a of aliases) if (flags[a] !== undefined) return flags[a];
  return fallback;
}

function intOpt(flags, aliases, fallback) {
  const raw = opt(flags, aliases, undefined);
  if (raw === undefined || raw === true) return fallback;
  const n = Number(raw);
  if (!Number.isFinite(n)) fail(`not a number: ${raw}`, EXIT.USAGE);
  return n;
}

/* ---------- output ---------- */

const STYLES = ["outline", "twotone", "bold", "bulk"];

/* The lowercase style names this CLI takes, as the component's `variant`. */
const STYLE_PROPS = {
  outline: { variant: "Outline" },
  twotone: { variant: "TwoTone" },
  bold: { variant: "Bold" },
  bulk: { variant: "Bulk" },
};

/** Columns padded to the widest cell. No box drawing, no colour, no NO_COLOR. */
function table(rows, headers) {
  if (rows.length === 0) return "";
  const all = [headers, ...rows];
  const widths = headers.map((_, i) =>
    Math.max(...all.map((r) => String(r[i] ?? "").length)),
  );
  const line = (r) =>
    r
      .map((cell, i) =>
        i === r.length - 1
          ? String(cell ?? "")
          : String(cell ?? "").padEnd(widths[i]),
      )
      .join("  ")
      .trimEnd();

  return [line(headers), line(widths.map((w) => "-".repeat(w))), ...rows.map(line)].join(
    "\n",
  );
}

/** table | json | names, with --json as a shorthand for the middle one. */
function formatOf(flags, fallback = "table") {
  if (flags.json === true) return "json";
  const fmt = opt(flags, ["format", "f"], fallback);
  if (!["table", "json", "names"].includes(fmt)) {
    fail(`unknown format: ${fmt}`, EXIT.USAGE);
  }
  return fmt;
}

function emit(text) {
  if (text) process.stdout.write(`${text}\n`);
}

/* ---------- icon lookup ---------- */

/** `Arrow*` matches by shell glob; anything else is an exact, case-insensitive name. */
function matchIcons(icons, pattern) {
  if (!pattern.includes("*")) {
    const lower = pattern.toLowerCase();
    return icons.filter((i) => i.name.toLowerCase() === lower);
  }
  const re = new RegExp(
    `^${pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")}$`,
    "i",
  );
  return icons.filter((i) => re.test(i.name));
}

/* ---------- search ---------- */

/**
 * The query as a vector, or null when the model is not installed. Must stay the
 * model that produced embeddings.json (scripts/generate-embeddings.mjs): both
 * it and bge-small emit 384 dimensions, so a mismatch throws nothing and simply
 * scores in the wrong space.
 */
async function embedQuery(query) {
  let pipeline;
  try {
    ({ pipeline } = await import("@xenova/transformers"));
  } catch {
    return null;
  }
  const extract = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2", {
    quantized: true,
  });
  const out = await extract(query, { pooling: "mean", normalize: true });
  return Array.from(out.data);
}

/*
 * The stored vectors are int8, scaled by 127 from unit-length floats
 * (generate-embeddings.mjs). The query side is unit length, so the dot product
 * comes back as cosine * 127 and dividing puts it in [-1, 1], which is what
 * --threshold is quoted against.
 */
function semanticScores(icons, embeddings, query) {
  return icons.map((icon) => {
    const vec = embeddings[icon.name];
    if (!vec) return { icon, score: 0 };
    let dot = 0;
    for (let i = 0; i < query.length; i++) dot += query[i] * (vec[i] ?? 0);
    return { icon, score: dot / 127 };
  });
}

/*
 * The fallback. Not a second search engine, just a word count, so that a bare
 * `npx` still ranks something rather than erroring out. Weighted the way the
 * website's Fuse config is: the name matters most, the category least.
 */
function lexicalScores(icons, query) {
  const terms = query.toLowerCase().match(/[a-z0-9]+/g) ?? [];
  if (terms.length === 0) return icons.map((icon) => ({ icon, score: 0 }));

  return icons.map((icon) => {
    const fields = [
      [icon.name.toLowerCase(), 3],
      [icon.displayName.toLowerCase(), 2],
      [icon.keywords.join(" ").toLowerCase(), 2],
      [String(icon.usage ?? "").toLowerCase(), 1],
      [icon.category.toLowerCase(), 1],
    ];
    let hit = 0;
    for (const term of terms) {
      let best = 0;
      for (const [text, weight] of fields) {
        if (text.includes(term)) best = Math.max(best, weight);
      }
      hit += best;
    }
    return { icon, score: hit / (terms.length * 3) };
  });
}

async function cmdSearch(icons, positional, flags) {
  const query = positional.join(" ").trim();
  if (!query) fail("search needs something to search for", EXIT.USAGE);

  const limit = intOpt(flags, ["limit", "l"], 10);
  const threshold = intOpt(flags, ["threshold", "t"], 0.15);
  const category = opt(flags, ["category", "c"], null);

  const pool = category
    ? icons.filter((i) => i.category === category)
    : icons;

  /* --keyword is the same path the missing-model case takes. Worth a flag of
     its own: loading the model costs a few seconds, and a name you already
     half-know does not need a vector to find. */
  const vector = flags.keyword === true ? null : await embedQuery(query);
  let ranked;

  if (vector) {
    ranked = semanticScores(pool, readJson("embeddings.json"), vector);
  } else {
    if (flags.keyword !== true) {
      note(
        "note: semantic ranking needs @xenova/transformers. Ranked by keyword instead.\n" +
          "      npm install @xenova/transformers",
      );
    }
    ranked = lexicalScores(pool, query);
  }

  const hits = ranked
    .filter((h) => h.score >= threshold)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);

  const format = formatOf(flags);

  if (format === "json") {
    emit(
      JSON.stringify(
        hits.map((h) => ({ ...h.icon, score: Number(h.score.toFixed(4)) })),
        null,
        2,
      ),
    );
  } else if (format === "names") {
    emit(hits.map((h) => h.icon.name).join("\n"));
  } else if (hits.length === 0) {
    note(`No icon scored above ${threshold}.`);
  } else {
    emit(
      table(
        hits.map((h) => [
          h.icon.name,
          `${Math.round(h.score * 100)}%`,
          h.icon.category,
        ]),
        ["Name", "Score", "Category"],
      ),
    );
  }
}

/* ---------- list, categories, info ---------- */

function cmdList(icons, flags) {
  const category = opt(flags, ["category", "c"], null);
  const style = opt(flags, ["style", "s"], null);
  const limit = intOpt(flags, ["limit", "l"], Infinity);

  if (style && !STYLES.includes(style)) {
    fail(`unknown style: ${style}. One of ${STYLES.join(", ")}.`, EXIT.USAGE);
  }

  /* No --free-only or --pro-only: every style of every icon is free, so one
     would return the whole set and the other nothing. They come back if
     anything is ever sold again, since the metadata still carries the shape. */
  let out = icons;
  if (category) out = out.filter((i) => i.category === category);
  if (style) out = out.filter((i) => i.freeStyles.includes(style));
  out = out.slice(0, limit);

  const format = formatOf(flags);

  if (format === "json") {
    emit(JSON.stringify(out, null, 2));
  } else if (format === "names") {
    emit(out.map((i) => i.name).join("\n"));
  } else if (out.length === 0) {
    note("No icons matched.");
  } else {
    emit(
      table(
        out.map((i) => [i.name, i.category, i.freeStyles.join(", ")]),
        ["Name", "Category", "Styles"],
      ),
    );
  }
}

function cmdCategories(icons, flags) {
  const counts = new Map();
  for (const icon of icons) {
    counts.set(icon.category, (counts.get(icon.category) ?? 0) + 1);
  }
  const rows = [...counts].sort((a, b) => b[1] - a[1]);

  if (formatOf(flags) === "json") {
    emit(JSON.stringify(Object.fromEntries(rows), null, 2));
  } else {
    emit(rows.map(([name, n]) => `${name} (${n})`).join("\n"));
  }
}

function cmdInfo(icons, positional, flags) {
  const name = positional[0];
  if (!name) fail("info needs an icon name", EXIT.USAGE);

  const icon = matchIcons(icons, name)[0];
  if (!icon) fail(`no icon named ${name}`, EXIT.NOT_FOUND);

  if (formatOf(flags) === "json") {
    emit(JSON.stringify(icon, null, 2));
    return;
  }

  emit(
    [
      `Icon: ${icon.name}`,
      `Display name: ${icon.displayName}`,
      `Category: ${icon.category}`,
      `Keywords: ${icon.keywords.join(", ")}`,
      `Paths: ${icon.pathCount ?? "-"}`,
      "Styles:",
      ...Object.entries(icon.styles).map(([s, tier]) => `  ${s}: ${tier}`),
      `Usage: ${icon.usage}`,
    ].join("\n"),
  );
}

/* ---------- copy ---------- */

/** The snippet the website prints for the same icon and style. */
function tsxSnippet(name, style) {
  const { variant } = STYLE_PROPS[style];
  const props = variant === "Outline" ? "" : ` variant="${variant}"`;
  return `import { Icon${name} } from "@devigner-ui/icons";\n\n<Icon${name}${props} className="h-6 w-6" />`;
}

/**
 * Renders the shipped component rather than keeping a second copy of the
 * drawings. React and react-dom are peers of this package, so this works inside
 * any project that installed it and only fails under a bare `npx`.
 */
async function renderSvg(name, style) {
  let React, renderToStaticMarkup, icons;
  try {
    React = (await import("react")).default;
    ({ renderToStaticMarkup } = await import("react-dom/server"));
  } catch {
    fail(
      "--format=svg renders the React component, so it needs react and react-dom.\n" +
        "       Run it inside a project that has them, or use --format=tsx.",
    );
  }

  const bundle = new URL("dist/index.js", PKG);
  if (!existsSync(bundle)) fail("dist is not built. Run `pnpm build`.");
  icons = await import(bundle.href);

  const Component = icons[`Icon${name}`];
  if (!Component) fail(`Icon${name} is not in the bundle`, EXIT.NOT_FOUND);

  return renderToStaticMarkup(React.createElement(Component, STYLE_PROPS[style]));
}

/** Best-effort, through whatever the platform already has. */
function toClipboard(text) {
  const tools =
    process.platform === "win32"
      ? [["clip", []]]
      : process.platform === "darwin"
        ? [["pbcopy", []]]
        : [
            ["wl-copy", []],
            ["xclip", ["-selection", "clipboard"]],
          ];

  for (const [bin, args] of tools) {
    try {
      execFileSync(bin, args, { input: text });
      return true;
    } catch {
      /* Try the next one; report once at the end. */
    }
  }
  return false;
}

async function cmdCopy(icons, positional, flags) {
  const pattern = positional[0];
  if (!pattern) fail("copy needs an icon name", EXIT.USAGE);

  const style = opt(flags, ["style", "s"], "outline");
  if (!STYLES.includes(style)) {
    fail(`unknown style: ${style}. One of ${STYLES.join(", ")}.`, EXIT.USAGE);
  }

  const format = opt(flags, ["format", "f"], "tsx");
  if (!["tsx", "svg"].includes(format)) {
    fail(`copy writes tsx or svg, not ${format}`, EXIT.USAGE);
  }

  const matches = matchIcons(icons, pattern);
  if (matches.length === 0) fail(`no icon matching ${pattern}`, EXIT.NOT_FOUND);

  const outDir = opt(flags, ["out", "o"], null);
  if (outDir) mkdirSync(outDir, { recursive: true });

  const pieces = [];

  for (const icon of matches) {
    const body =
      format === "svg"
        ? await renderSvg(icon.name, style)
        : tsxSnippet(icon.name, style);

    if (outDir) {
      const file = path.join(outDir, `${icon.name}.${format}`);
      writeFileSync(file, `${body}\n`);
      note(`wrote ${file}`);
    } else {
      pieces.push(body);
    }
  }

  if (pieces.length === 0) return;

  const text = pieces.join("\n\n");
  emit(text);

  if (flags.clipboard === true) {
    if (!toClipboard(text)) note("note: no clipboard tool found, printed instead");
  }
}

/* ---------- entry ---------- */

const HELP = `devigner icons

Usage
  icons <command> [arguments] [options]

Commands
  search <query>      rank every icon against a description
  list                list icons, with filters
  info <name>         show one icon's metadata
  categories          list categories and their counts
  copy <name>         print an icon as a React snippet or as SVG

Options
  -h, --help          show this
  -v, --version       show the package version
      --format <fmt>  table (default), json or names
      --json          shorthand for --format=json

search
  -l, --limit <n>     results to show, default 10
  -t, --threshold <n> lowest score to keep, 0 to 1, default 0.15
  -c, --category <c>  restrict to one category
      --keyword       match words instead of loading the model

list
  -c, --category <c>  filter by category
  -s, --style <s>     outline, twotone, bold or bulk
  -l, --limit <n>     stop after n

copy
  -s, --style <s>     outline (default), twotone, bold or bulk
  -f, --format <fmt>  tsx (default) or svg
  -o, --out <dir>     write files there instead of printing
      --clipboard     also put it on the clipboard

  A name may be a glob: icons copy "Arrow*" --format=svg --out=./arrows

Search ranks against the vectors in embeddings.json. Embedding your query needs
@xenova/transformers; without it, search falls back to keyword matching.
`;

async function main() {
  const { flags, positional } = parseArgs(process.argv.slice(2));
  const [command, ...rest] = positional;

  if (flags.version === true || flags.v === true) {
    emit(JSON.parse(readFileSync(new URL("package.json", PKG), "utf8")).version);
    return;
  }

  if (!command || flags.help === true || flags.h === true) {
    process.stdout.write(HELP);
    process.exit(command ? EXIT.OK : EXIT.USAGE);
  }

  const metadata = readJson("metadata.json");
  const icons = metadata.icons;

  switch (command) {
    case "search":
      return cmdSearch(icons, rest, flags);
    case "list":
      return cmdList(icons, flags);
    case "categories":
      return cmdCategories(icons, flags);
    case "info":
      return cmdInfo(icons, rest, flags);
    case "copy":
      return cmdCopy(icons, rest, flags);
    default:
      fail(`unknown command: ${command}. Try \`icons --help\`.`, EXIT.USAGE);
  }
}

main().catch((err) => fail(err.message));
