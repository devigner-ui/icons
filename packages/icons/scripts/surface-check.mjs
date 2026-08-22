/*
 * Everything the package promises the outside world: the CLI, run the way a
 * user runs it, and the type declarations that leave through the entry point.
 * Every assertion here is a claim the website or the docs make out loud, so a
 * green run is what keeps those from drifting back into fiction.
 *
 * Semantic search is deliberately not exercised: it downloads a model, and the
 * thing worth checking is that --keyword ranks and that the flag plumbing is
 * intact. `icons search "upload progress"` is the manual case.
 */
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync, rmSync, readdirSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CLI = fileURLToPath(new URL("../bin/cli.mjs", import.meta.url));

/*
 * spawnSync rather than execFileSync: exit codes are half of what is being
 * checked here, and it hands back stderr on a success too; the fallback
 * notices this CLI writes there are only visible on an exit of 0.
 */
function run(...args) {
  const { status, stdout, stderr } = spawnSync(process.execPath, [CLI, ...args], {
    encoding: "utf8",
  });
  return { code: status, stdout, stderr };
}

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
  console.log(`ok  ${what}`);
}

check("--version prints the manifest version", () => {
  const version = JSON.parse(
    readFileSync(new URL("../package.json", import.meta.url), "utf8"),
  ).version;
  assert.equal(run("-v").stdout.trim(), version);
});

check("no command is a usage error, not a crash", () => {
  const { code, stdout } = run();
  assert.equal(code, 2);
  assert.match(stdout, /Usage/);
});

check("an unknown command exits 2", () => {
  assert.equal(run("frobnicate").code, 2);
});

check("a missing icon exits 3", () => {
  const { code, stderr } = run("info", "NotAnIconName");
  assert.equal(code, 3);
  assert.match(stderr, /no icon named/);
});

check("categories counts every icon exactly once", () => {
  const counts = JSON.parse(run("categories", "--json").stdout);
  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const metadata = JSON.parse(
    readFileSync(new URL("../src/metadata.json", import.meta.url), "utf8"),
  );
  assert.equal(total, metadata.icons.length);
});

check("list --limit stops where it is told", () => {
  const names = run("list", "--limit", "5", "--format", "names")
    .stdout.trim()
    .split("\n");
  assert.equal(names.length, 5);
});

/* The parser has to tell an option's value from the next option. Before, a
   value-less flag ate the flag after it and --limit read as its value. */
check("a value-less flag does not swallow the next one", () => {
  /* --json takes no value. If the parser reads "--limit" as its value, the
     limit is silently dropped and all 2,142 symbols come back. */
  const out = JSON.parse(run("list", "--json", "--limit", "3").stdout);
  assert.equal(out.length, 3);
});

/* Every style of every icon is free. Bulk was sold on 1,682 of them, so this
   is the assertion that would have caught the old gate coming back by
   accident, and the one that has to change first if anything is sold again. */
check("every icon is free in all four styles", () => {
  const metadata = JSON.parse(
    readFileSync(new URL("../src/metadata.json", import.meta.url), "utf8"),
  );
  for (const icon of metadata.icons) {
    assert.equal(icon.proStyles.length, 0, `${icon.name} has a Pro style`);
    assert.equal(icon.freeStyles.length, 4, `${icon.name} is short a style`);
  }

  const bulk = run("list", "--style", "bulk", "--format", "names")
    .stdout.trim()
    .split("\n");
  assert.equal(bulk.length, metadata.icons.length);
});

check("keyword search ranks the obvious answer first", () => {
  const names = run("search", "shopping cart", "--keyword", "--format", "names")
    .stdout.trim()
    .split("\n");
  assert.ok(names.includes("ShoppingCart"), `got ${names.slice(0, 3)}`);
});

/* A threshold that widens the result set means the comparison is inverted.
   Note the ceiling: a lexical score is capped at 1, so `-t 1` still admits a
   name match; only the semantic path uses the low end of the range. */
check("a higher --threshold only ever narrows the results", () => {
  const at = (t) =>
    run("search", "cart", "--keyword", "-t", t, "-l", "500", "--format", "names")
      .stdout.trim()
      .split("\n")
      .filter(Boolean);

  const loose = at("0.2");
  const tight = at("0.9");
  assert.ok(loose.length > tight.length, `${loose.length} vs ${tight.length}`);
  assert.ok(tight.every((n) => loose.includes(n)));
});

check("search --category never leaves the category", () => {
  const hits = JSON.parse(
    run("search", "cart", "--keyword", "--category", "shopping-ecommerce", "--json")
      .stdout,
  );
  assert.ok(hits.length > 0);
  assert.ok(hits.every((h) => h.category === "shopping-ecommerce"));
});

/* The prop mapping is the whole point of `copy`: a swapped pair prints a
   snippet that renders the wrong style. Outline is the default, so its snippet
   is the one with no variant on it. */
check("copy prints the props each style actually needs", () => {
  assert.match(run("copy", "ShoppingCart").stdout, /<IconShoppingCart className=/);
  assert.match(run("copy", "ShoppingCart", "-s", "bold").stdout, /variant="Bold"/);
  assert.match(run("copy", "ShoppingCart", "-s", "twotone").stdout, /variant="TwoTone"/);
});

/* bulk used to fall back to outline here with a notice. It is free now, so
   asking for it has to hand back bulk and say nothing. */
check("copy hands back bulk without a fallback notice", () => {
  const { stdout, stderr } = run("copy", "ShoppingCart", "-s", "bulk");
  assert.match(stdout, /<IconShoppingCart variant="Bulk" className=/);
  assert.equal(stderr.trim(), "");
});

check("copy --format=svg renders the shipped component", () => {
  const { code, stdout, stderr } = run("copy", "ShoppingCart", "--format", "svg");
  /* dist is what gets rendered, so an unbuilt tree is a skip, not a failure. */
  if (code !== 0 && /not built/.test(stderr)) {
    console.log("--  dist not built, skipping the render");
    return;
  }
  assert.equal(code, 0);
  assert.match(stdout, /^<svg /);
  assert.match(stdout, /<\/svg>$/m);
  /* React prop names would be silently dropped by an SVG parser. */
  assert.doesNotMatch(stdout, /strokeWidth|strokeLinecap|fillRule|className/);
});

check("a glob writes one file per match", () => {
  const out = path.join(tmpdir(), `icons-cli-check-${process.pid}`);
  try {
    run("copy", "Airbuds*", "--out", out);
    const written = readdirSync(out);
    const expected = run("list", "--format", "names")
      .stdout.trim()
      .split("\n")
      .filter((n) => n.startsWith("Airbuds"));
    assert.equal(written.length, expected.length);
    assert.ok(written.every((f) => f.endsWith(".tsx")));
  } finally {
    rmSync(out, { recursive: true, force: true });
  }
});

/* ---------- the published types ---------- */

/*
 * "A literal union covering every icon name" is on the website's install
 * panel. It was false for as long as the union existed: sync.mjs generated it
 * into a types.d.ts that nothing re-exported and no build entry pulled in, so
 * it never reached dist. Nothing failed; the type simply was not there.
 */
const declarations = new URL("../dist/index.d.ts", import.meta.url);

if (!existsSync(declarations)) {
  console.log("--  dist not built, skipping the type checks");
} else {
  const dts = readFileSync(declarations, "utf8");

  check("the icon name union ships, with every icon in it", () => {
    const union = dts.match(/type IconName = ([^;]+);/);
    assert.ok(union, "IconName is not in dist/index.d.ts");

    const named = union[1].split("|").length;
    const metadata = JSON.parse(
      readFileSync(new URL("../src/metadata.json", import.meta.url), "utf8"),
    );
    assert.equal(named, metadata.icons.length);
  });

  check("the other public types ship too", () => {
    for (const name of ["IconStyle", "IconProps", "IconComponentType"]) {
      assert.match(dts, new RegExp(`\\b${name}\\b`), `${name} is missing`);
    }
  });

  /* `size` is a prop the docs described for years. It belonged to a shell
     component no icon used and the exports map never exposed, and describing
     it as the icon API is what made the reference page fiction. `variant` is
     real now; `fill` and `duotone` are not, and neither is `width` as a stroke
     width: extending SVGProps means width is the element's own attribute. */
  check("no icon claims a prop it does not accept", () => {
    const decl = dts.match(/interface IconProps[^{]*\{[^}]*\}/);
    assert.ok(decl, "IconProps is not declared in dist/index.d.ts");
    const props = decl[0];

    assert.match(
      props,
      /extends SVGProps<SVGSVGElement>/,
      "IconProps no longer extends the real <svg> props",
    );
    for (const absent of ["duotone", "size\\?"]) {
      assert.doesNotMatch(props, new RegExp(absent));
    }
    for (const present of ["className", "variant", "strokeWidth"]) {
      assert.match(props, new RegExp(present));
    }
  });

  /* One shared IconProps, not one per icon. The declaration emitter cannot
     tell 2,142 structurally identical interfaces apart, so a per-file copy
     ships 2,142 of them under generated names and costs 260 KB. */
  check("IconProps is declared exactly once", () => {
    const declared = (dts.match(/interface IconProps/g) ?? []).length;
    assert.equal(declared, 1, `${declared} copies of IconProps in the d.ts`);
  });

  check("every icon forwards its ref to the svg", () => {
    assert.match(
      dts,
      /IconComponentType = ForwardRefExoticComponent<[^>]*RefAttributes<SVGSVGElement>/,
      "IconComponentType is not a ref-forwarding component",
    );
    const forwarding = (
      dts.match(/ForwardRefExoticComponent<[^;]*RefAttributes<SVGSVGElement>>/g) ?? []
    ).length;
    const metadata = JSON.parse(
      readFileSync(new URL("../src/metadata.json", import.meta.url), "utf8"),
    );
    // One per icon, plus the exported IconComponentType alias.
    assert.equal(forwarding, metadata.icons.length + 1);
  });
}

/*
 * Every icon is a forwardRef component, so a Next.js App Router page importing
 * one from a server component is an error unless the file says so. The banner
 * is configured in tsup.config.ts and was silently discarded for as long as
 * `treeshake: true` was set: rollup does not recognise the directive and
 * dropped it from the output, which nothing failed on because a banner is not
 * part of the module's exports.
 */
check('the build keeps its "use client" directive', () => {
  if (!existsSync(new URL("../dist/index.js", import.meta.url))) {
    console.log("--  dist not built, skipping the directive check");
    return;
  }
  for (const file of [
    "index.js",
    "index.cjs",
    "icons/ShoppingCart.js",
    "icons/ShoppingCart.cjs",
  ]) {
    const out = readFileSync(new URL(`../dist/${file}`, import.meta.url), "utf8");
    assert.match(
      out.slice(0, 200),
      /^["']use client["']/,
      `dist/${file} does not open with "use client"`,
    );
  }
});

/*
 * `import { IconShoppingCart } from "@devigner-ui/icons/ShoppingCart"`.
 *
 * A wildcard in the exports map promises a file for every name in icons/, so
 * the promise is only as good as the build having emitted all 2,142 of them:
 * a gap resolves fine for the icons anyone tried and throws
 * ERR_MODULE_NOT_FOUND for the rest. The named export is checked too, because
 * the drawings export a default and only a default — the name comes from the
 * stubs sync.mjs generates, and dropping those still builds.
 */
check("every icon resolves as its own subpath", () => {
  const pattern = JSON.parse(
    readFileSync(new URL("../package.json", import.meta.url), "utf8"),
  ).exports["./*"];
  assert.ok(pattern, 'package.json "exports" has no "./*" pattern');
  assert.equal(pattern.import, "./dist/icons/*.js");
  assert.equal(pattern.types, "./dist/icons/*.d.ts");

  const names = readdirSync(new URL("../icons", import.meta.url))
    .filter((f) => f.endsWith(".tsx"))
    .map((f) => f.slice(0, -4));

  if (!existsSync(new URL("../dist/icons", import.meta.url))) {
    console.log("--  dist not built, skipping the subpath files");
    return;
  }

  const missing = names.filter((name) =>
    [".js", ".cjs", ".d.ts"].some(
      (ext) => !existsSync(new URL(`../dist/icons/${name}${ext}`, import.meta.url)),
    ),
  );
  assert.equal(
    missing.length,
    0,
    `${missing.length} icons have no subpath build: ${missing.slice(0, 5).join(", ")}`,
  );

  const sample = readFileSync(
    new URL("../dist/icons/ShoppingCart.js", import.meta.url),
    "utf8",
  );
  assert.match(sample, /\bas IconShoppingCart\b/, "the subpath lost its named export");
  assert.match(sample, /\bas default\b/, "the subpath lost its default export");
});

/* Decorative unless named. An icon next to its own text label is announced
   twice otherwise, and none of these carried any aria at all before. */
check("icons are hidden from screen readers unless labelled", () => {
  const sources = readdirSync(new URL("../icons", import.meta.url))
    .filter((f) => f.endsWith(".tsx"));

  const missing = [];
  for (const file of sources) {
    const src = readFileSync(new URL(`../icons/${file}`, import.meta.url), "utf8");
    const hidden = (src.match(/\{\.\.\.a11y\}/g) ?? []).length;
    const focusable = (src.match(/focusable="false"/g) ?? []).length;
    const spread = (src.match(/\{\.\.\.rest\}/g) ?? []).length;
    const ref = (src.match(/ref=\{ref\}/g) ?? []).length;
    if (hidden !== 3 || focusable !== 3 || spread !== 3 || ref !== 3) {
      missing.push(file);
    }
  }

  assert.equal(
    missing.length,
    0,
    `${missing.length} icons missing a11y/ref/rest on all three drawings: ` +
      missing.slice(0, 5).join(", "),
  );

  /* The rule that decides it, spot-checked on one file so a codemod that
     dropped the condition and hardcoded aria-hidden would still fail. */
  const sample = readFileSync(new URL("../icons/Activity.tsx", import.meta.url), "utf8");
  assert.match(sample, /rest\["aria-label"\]/);
  assert.match(sample, /role: "img"/);
  assert.match(sample, /"aria-hidden": true/);
});

/*
 * The artwork is Solar Icon Set (CC BY 4.0) and Iconsax, not original work, and
 * CC BY is an attribution licence, so the credit is a condition of shipping,
 * not a courtesy. It has to survive `npm pack`, which means being named in
 * `files` and actually existing. The package copies of LICENSE and
 * ATTRIBUTION.md are what a consumer reads; the repo root copies are what gets
 * edited. Nothing keeps those in step except this.
 */
const manifest = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8"),
);

for (const file of ["LICENSE", "ATTRIBUTION.md"]) {
  check(`${file} ships, and matches the repo root`, () => {
    const packaged = new URL(`../${file}`, import.meta.url);
    assert.ok(existsSync(packaged), `packages/icons/${file} is missing`);

    /* npm always includes LICENSE; anything else needs naming in `files`. */
    if (file !== "LICENSE") {
      assert.ok(
        manifest.files.includes(file),
        `${file} exists but is not in package.json "files", so npm drops it`,
      );
    }

    assert.equal(
      readFileSync(packaged, "utf8").trim(),
      readFileSync(new URL(`../../../${file}`, import.meta.url), "utf8").trim(),
      `packages/icons/${file} has drifted from the repo root copy`,
    );
  });
}

check("the credit the artwork licences require is actually in them", () => {
  const notice = readFileSync(
    new URL("../ATTRIBUTION.md", import.meta.url),
    "utf8",
  );
  for (const required of ["Solar Icon Set", "480 Design", "CC BY 4.0", "Iconsax", "Vuesax"]) {
    assert.ok(notice.includes(required), `ATTRIBUTION.md never names ${required}`);
  }

  /* An SPDX expression is what a corporate licence scanner reads. "MIT" alone
     is the claim this whole file exists to stop the package from making. */
  assert.match(
    manifest.license,
    /CC-BY-4\.0/,
    `package.json declares "${manifest.license}", which hides the artwork licence`,
  );
});

console.log(`\nok  ${checked} surface checks passed`);
