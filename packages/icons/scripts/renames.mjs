/*
 * Reads scripts/renames.json, the one list of icons that changed name.
 *
 * A batch is a set of renames that shipped together. `since` records the
 * @devigner-ui/icons version that introduced the new names. `removeIn` is per
 * package, because the packages are versioned independently: the React
 * package drops old names at its 4.0.0, the Vue package at its 3.0.0, each at
 * its own next major. Until then every package keeps the old name as a
 * deprecated alias of the new component, so no upgrade inside a major breaks
 * a build.
 *
 * Removal is not a chore anyone has to remember. Each build asks
 * activeRenames() for the aliases to emit, and once that package's version
 * reaches its `removeIn` the batch stops producing any. The list itself stays:
 * `npx @devigner-ui/icons migrate` still knows every old name long after the
 * aliases are gone, which is when someone upgrading late needs it.
 *
 * Adding a batch: append { since, removeIn, renames } with a removeIn entry for
 * every published package, and build. A later batch may rename an icon an
 * earlier one already renamed; resolver() follows the chain, so an old import
 * is pointed straight at the current name.
 */
import { readFileSync, readdirSync } from "node:fs";

const FILE = new URL("./renames.json", import.meta.url);
const OWN_PACKAGE = new URL("../package.json", import.meta.url);
const ICONS = new URL("../icons/", import.meta.url);

export function loadRenames() {
  return JSON.parse(readFileSync(FILE, "utf8")).batches;
}

/* Plain x.y.z. Pre-release tags compare as their release, which is the safe
   side: 4.0.0-beta.1 already drops the aliases 4.0.0 drops. */
export function compareVersions(a, b) {
  const pa = a.split(/[.-]/).slice(0, 3).map(Number);
  const pb = b.split(/[.-]/).slice(0, 3).map(Number);
  for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] - pb[i];
  return 0;
}

/* Old name -> the name it has today, following later renames of the new name. */
export function resolver(batches = loadRenames()) {
  const next = new Map();
  for (const batch of batches) {
    for (const [from, to] of Object.entries(batch.renames)) next.set(from, to);
  }
  return (name) => {
    const seen = new Set();
    while (next.has(name)) {
      if (seen.has(name)) throw new Error(`renames.json loops through ${name}`);
      seen.add(name);
      name = next.get(name);
    }
    return name;
  };
}

/* What a deprecated alias says, in the editor and in the console. */
export function renameMessage({ from, to, pkg, removeIn }) {
  return (
    `Icon${from} was renamed to Icon${to} and will be removed in ${pkg} ${removeIn}. ` +
    `Update the import, or run: npx @devigner-ui/icons migrate`
  );
}

/*
 * Every old name that still ships as an alias in one package. `packageJson` is
 * the URL of that package's package.json; it defaults to this one.
 *
 * `dir` is where the alias's module goes. Usually beside the icons, so the
 * package's existing subpath pattern finds it. But Windows and macOS file
 * systems ignore case, so Additem.js written beside AddItem.js would replace
 * it, on the build machine and again on every install. An old name that
 * differs from a current one only in case lives in aliases/ instead, and the
 * package's exports map points its subpath there.
 */
export function activeRenames(packageJson = OWN_PACKAGE, batches = loadRenames()) {
  const { name: pkg, version } = JSON.parse(readFileSync(packageJson, "utf8"));
  const resolve = resolver(batches);
  const current = new Set(
    readdirSync(ICONS).filter((f) => f.endsWith(".tsx")).map((f) => f.slice(0, -4).toLowerCase()),
  );
  return batches.flatMap((batch) => {
    const removeIn = batch.removeIn[pkg];
    if (!removeIn) throw new Error(`renames.json: a batch has no removeIn for ${pkg}`);
    if (compareVersions(version, removeIn) >= 0) return [];
    return Object.keys(batch.renames).map((from) => {
      const rename = { from, to: resolve(from), pkg, removeIn };
      const dir = current.has(from.toLowerCase()) ? "aliases" : "icons";
      return { ...rename, dir, message: renameMessage(rename) };
    });
  });
}
