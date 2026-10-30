/*
 * Turns the rendered drawings into files. Everything about what the markup
 * contains is decided in ../../icons/scripts/emit-svg.mjs, which renders the
 * built React components; this script only decides where the bytes land.
 *
 *   node scripts/build.mjs                 every icon, every style
 *   node scripts/build.mjs --only Add,Home a subset, for a sprite worth loading
 *
 * Writes:
 *   svg/<style>/<Name>.svg   one drawing per file, which is what a CDN serves
 *   sprite/<style>.svg       every symbol in one file, for <use href="#Name">
 */
import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  allSvgs,
  STYLES,
  symbolFor,
} from "../../icons/scripts/emit-svg.mjs";
import { activeRenames } from "../../icons/scripts/renames.mjs";

/* fileURLToPath, not `.pathname`: a repo checked out under a directory with a
   space in its name hands back `Coding%20Projects` from a raw pathname, and
   mkdir will happily create that as a second, wrong tree. */
const ROOT = fileURLToPath(new URL("../", import.meta.url));

const flag = process.argv.indexOf("--only");
const only =
  flag === -1
    ? null
    : (process.argv[flag + 1] ?? "").split(",").filter(Boolean);

const icons = await allSvgs(only);

/*
 * Old names inside their deprecation window. A file cannot warn, so the old
 * path serves the renamed drawing and renames.json at the package root says
 * where it went; both leave at this package's next major, when activeRenames()
 * stops returning them. Only aliases whose target this run builds: `--only`
 * should not drag the whole rename list in.
 */
const renames = activeRenames(new URL("../package.json", import.meta.url))
  .filter((r) => icons.has(r.to));

/* A stale drawing left behind by an earlier run is indistinguishable from a
   current one once it is a loose file on a CDN. */
for (const dir of ["svg", "sprite"]) {
  rmSync(path.join(ROOT, dir), { recursive: true, force: true });
}

const spriteDir = path.join(ROOT, "sprite");
mkdirSync(spriteDir, { recursive: true });

let files = 0;
for (const style of STYLES) {
  const dir = path.join(ROOT, "svg", style);
  mkdirSync(dir, { recursive: true });

  const symbols = [];
  for (const [name, drawings] of icons) {
    if (!drawings[style]) continue;
    writeFileSync(path.join(dir, `${name}.svg`), drawings[style]);
    symbols.push(symbolFor(name, drawings[style]));
    files++;
  }
  for (const { from, to, dir: home } of renames) {
    const drawing = icons.get(to)[style];
    if (!drawing) continue;
    /* Additem.svg beside AddItem.svg is one file on Windows and macOS, so a
       name that differs only in case keeps its sprite id and no file. */
    if (home === "icons") writeFileSync(path.join(dir, `${from}.svg`), drawing);
    /* A pointer, not a second copy of the artwork in the sprite. */
    symbols.push(`<symbol id="${from}" viewBox="0 0 24 24"><use href="#${to}"/></symbol>`);
  }

  writeFileSync(
    path.join(spriteDir, `${style}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols.join("")}</defs></svg>`,
  );
}

/* The complete list, expired batches included, for anyone's own tooling. */
copyFileSync(
  fileURLToPath(new URL("../../icons/scripts/renames.json", import.meta.url)),
  path.join(ROOT, "renames.json"),
);

console.log(
  `ok  ${icons.size} icons -> ${files} files, ${STYLES.length} sprites, ${renames.length} deprecated names`,
);
