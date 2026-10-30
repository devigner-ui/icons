/*
 * Keeps renames safe for everyone who imports an icon by name.
 *
 * scripts/renames.json is the only place a rename may happen. From it every
 * package builds deprecated aliases until its own next major, then drops them.
 * This checks the list against the sources, the built aliases against the
 * icons they point at, and the expiry against the package version, so a
 * rename can neither break an import early nor linger past its major.
 *
 *   node scripts/rename-check.mjs        (the dist checks need a build)
 */
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { activeRenames, loadRenames, resolver } from "./renames.mjs";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const PACKAGES = path.join(ROOT, "..");

function check(label, fn) {
  return Promise.resolve(fn()).then(() => console.log(`ok  ${label}`));
}

const batches = loadRenames();
const resolve = resolver(batches);
/* Case-sensitive on every platform: a case-only rename that git did not
   record leaves the old casing on a Linux checkout, and this is where that
   shows up instead of as a missing export. */
const icons = new Set(
  readdirSync(path.join(ROOT, "icons")).filter((f) => f.endsWith(".tsx")).map((f) => f.slice(0, -4)),
);
const published = readdirSync(PACKAGES)
  .map((dir) => path.join(PACKAGES, dir, "package.json"))
  .filter(existsSync)
  .map((file) => JSON.parse(readFileSync(file, "utf8")))
  .filter((pkg) => !pkg.private && pkg.name !== "@devigner-ui/icons-pro");

/* A package that ships old names and has no removeIn already fails its own
   build (activeRenames throws). What is left to check is that each removeIn
   is a major and names a package that exists: one released after a batch,
   like icons-solid after 3.5.0, has no old names and no entry. */
await check("every batch says when each package drops its old names", () => {
  const names = new Set(published.map((pkg) => pkg.name));
  for (const batch of batches) {
    assert.ok(batch.since?.["@devigner-ui/icons"], "a batch has no since version");
    for (const [pkg, removeIn] of Object.entries(batch.removeIn)) {
      assert.ok(names.has(pkg), `removeIn names ${pkg}, which is not a published package`);
      assert.match(removeIn, /^\d+\.0\.0$/, `removeIn for ${pkg} is not a major`);
    }
  }
});

await check("old names are gone from the sources and new names exist", () => {
  for (const batch of batches) {
    for (const from of Object.keys(batch.renames)) {
      const to = resolve(from);
      assert.ok(!icons.has(from), `${from}.tsx still exists; it was renamed to ${to}`);
      assert.ok(icons.has(to), `${from} was renamed to ${to}, but icons/${to}.tsx does not exist (check its letter case)`);
      assert.ok(!(from in readCategories()), `icon-categories.json still files ${from}`);
    }
    /* A merge points an exact duplicate at the icon it copied, which may be
       older than the batch; the site reads this to keep that icon's date. */
    for (const from of batch.merged ?? []) {
      assert.ok(from in batch.renames, `merged lists ${from}, which this batch does not rename`);
    }
  }
});

/* The convention renames.json exists to enforce: a variant is named for what
   it draws. These six are names in their own right, not variant numbers. */
await check("no icon is named with a number, Alt or Minimalistic", () => {
  const allowed = new Set(["Grid2x2", "Grid3x2", "Grid3x3", "Html3", "Html5", "Ui8"]);
  const bad = [...icons].filter(
    (n) => !allowed.has(n) && /[a-z]\d+$|Alt(?=[A-Z0-9]|$)|Minimalistic/.test(n),
  );
  assert.deepEqual(bad, [], "name these for what they draw");
});

/* Old names differing only in case live in aliases/, reachable by subpath only
   through these hand-kept exports entries. They must exist exactly while the
   alias does, which is also what reminds whoever ships the next major. */
await check("case-only old names have exports entries, and only while they ship", () => {
  for (const [dir, prefix] of [["icons", "./"], ["icons-react-native", "./icons/"]]) {
    const pkgJson = path.join(PACKAGES, dir, "package.json");
    const expected = activeRenames(pathToFileURL(pkgJson))
      .filter((r) => r.dir === "aliases")
      .map((r) => prefix + r.from)
      .sort();
    const actual = Object.entries(JSON.parse(readFileSync(pkgJson, "utf8")).exports)
      .filter(([, target]) => JSON.stringify(target).includes("/aliases/"))
      .map(([key]) => key)
      .sort();
    assert.deepEqual(actual, expected, `${dir}/package.json exports for aliases/ are out of step with renames.json`);
  }
});

await check("aliases stop at each package's removeIn", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "renames-"));
  const at = (version) => {
    const file = path.join(dir, `${version}.json`);
    writeFileSync(file, JSON.stringify({ name: "@devigner-ui/icons", version }));
    return activeRenames(pathToFileURL(file), batches).length;
  };
  const total = batches.reduce((n, b) => n + Object.keys(b.renames).length, 0);
  const removeIn = batches[0].removeIn["@devigner-ui/icons"];
  const [major] = removeIn.split(".").map(Number);
  assert.equal(at(`${major - 1}.99.99`), total, "aliases missing before removeIn");
  assert.equal(at(removeIn), 0, `aliases still built at ${removeIn}`);
  assert.equal(at(`${removeIn}-beta.1`), 0, `aliases still built in a ${removeIn} prerelease`);
});

const dist = path.join(ROOT, "dist");
if (!existsSync(path.join(dist, "index.js"))) {
  console.log("--  dist not built, skipping the alias checks. Run `pnpm build`.");
  process.exit(0);
}

const active = activeRenames();

await check("every live old name is exported, typed as deprecated, and nothing else is", () => {
  const index = readFileSync(path.join(dist, "index.js"), "utf8");
  const types = readFileSync(path.join(dist, "index.d.ts"), "utf8");
  const live = new Set(active.map((r) => r.from));
  for (const { from, to, dir } of active) {
    assert.match(index, new RegExp(`export \\{ Icon${from} \\} from './${dir}/${from}.js'`), `${from} not in dist/index.js`);
    const sub = readFileSync(path.join(dist, dir, `${from}.d.ts`), "utf8");
    assert.match(sub, /@deprecated/, `${from}.d.ts is not marked deprecated`);
    assert.match(sub, new RegExp(`Icon${to}\\b`), `${from}.d.ts does not name Icon${to}`);
    assert.match(types, new RegExp(`@deprecated Icon${from} was renamed to Icon${to}\\b`), `root types lack ${from}'s note`);
  }
  for (const batch of batches) {
    for (const from of Object.keys(batch.renames)) {
      if (live.has(from)) continue;
      for (const dir of ["icons", "aliases"]) {
        assert.ok(!existsSync(path.join(dist, dir, `${from}.js`)), `expired alias ${from} still built`);
      }
    }
  }
  assert.doesNotMatch(
    readFileSync(path.join(ROOT, "src", "types.ts"), "utf8").match(/export type IconName = [^;]*/)[0],
    new RegExp(`'(${[...live].join("|")})'`),
    "IconName lists an old name",
  );
});

await check("an alias renders its new icon and warns once, in development only", async () => {
  const { createElement: h } = await import("react");
  const { renderToStaticMarkup } = await import("react-dom/server");
  const mod = await import(pathToFileURL(path.join(dist, "index.js")).href);
  const { from, to } = active[0];

  const warnings = [];
  const warn = console.warn;
  console.warn = (...args) => warnings.push(args.join(" "));
  const env = process.env.NODE_ENV;
  try {
    process.env.NODE_ENV = "production";
    const quiet = renderToStaticMarkup(h(mod[`Icon${from}`], { variant: "Bold" }));
    assert.equal(warnings.length, 0, "an alias warned in production");

    process.env.NODE_ENV = "development";
    const markup = renderToStaticMarkup(h(mod[`Icon${from}`], { variant: "Bold" }));
    renderToStaticMarkup(h(mod[`Icon${from}`]));
    assert.equal(markup, renderToStaticMarkup(h(mod[`Icon${to}`], { variant: "Bold" })), `Icon${from} draws differently from Icon${to}`);
    assert.equal(quiet, markup);
    assert.equal(warnings.length, 1, "expected exactly one warning for repeated renders");
    assert.match(warnings[0], new RegExp(`Icon${from} was renamed to Icon${to}`));
    assert.match(warnings[0], /npx @devigner-ui\/icons migrate/);
  } finally {
    console.warn = warn;
    process.env.NODE_ENV = env;
  }
});

/* The platform packages build from this one; check whichever have been built. */
await check("the platform packages ship the same aliases", () => {
  const targets = [
    ["icons-vue", "dist/index.js", "dist/index.d.ts"],
    ["icons-svelte", "dist/index.js", "dist/index.d.ts"],
    ["icons-react-native", "dist/index.js", "dist/index.d.ts"],
  ];
  for (const [dir, js, dts] of targets) {
    const pkgJson = pathToFileURL(path.join(PACKAGES, dir, "package.json"));
    if (!existsSync(path.join(PACKAGES, dir, js))) {
      console.log(`--  ${dir} not built, skipping`);
      continue;
    }
    const index = readFileSync(path.join(PACKAGES, dir, js), "utf8");
    const types = readFileSync(path.join(PACKAGES, dir, dts), "utf8");
    for (const { from, to } of activeRenames(pkgJson)) {
      assert.match(index, new RegExp(`as Icon${from} }`), `${dir}: Icon${from} not exported`);
      assert.match(types, new RegExp(`@deprecated Icon${from} was renamed to Icon${to}\\b`), `${dir}: Icon${from} not deprecated in types`);
    }
  }
  const svg = path.join(PACKAGES, "icons-svg");
  if (existsSync(path.join(svg, "svg", "outline"))) {
    for (const { from, to, dir } of activeRenames(pathToFileURL(path.join(svg, "package.json")))) {
      if (dir === "aliases") continue; // one file on case-insensitive disks; sprite id only
      assert.equal(
        readFileSync(path.join(svg, "svg", "outline", `${from}.svg`), "utf8"),
        readFileSync(path.join(svg, "svg", "outline", `${to}.svg`), "utf8"),
        `icons-svg: ${from}.svg is not ${to}.svg`,
      );
    }
  }
});

function readCategories() {
  return JSON.parse(readFileSync(path.join(ROOT, "scripts", "icon-categories.json"), "utf8")).icons;
}
