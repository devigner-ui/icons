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
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  allSvgs,
  STYLES,
  symbolFor,
} from "../../icons/scripts/emit-svg.mjs";

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
    writeFileSync(path.join(dir, `${name}.svg`), drawings[style]);
    symbols.push(symbolFor(name, drawings[style]));
    files++;
  }

  writeFileSync(
    path.join(spriteDir, `${style}.svg`),
    `<svg xmlns="http://www.w3.org/2000/svg"><defs>${symbols.join("")}</defs></svg>`,
  );
}

console.log(
  `ok  ${icons.size} icons -> ${files} files, ${STYLES.length} sprites`,
);
