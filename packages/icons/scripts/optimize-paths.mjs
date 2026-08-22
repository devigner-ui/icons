/*
 * Path data is half the bundle and it arrived from Solar/Iconsax at five
 * decimal places on a 24-unit viewBox: "9.66992" where "9.67" draws the same
 * pixels. Two decimals is 0.01/24 = 0.04% of the box, well under a device
 * pixel at any size an icon is rendered at.
 *
 * svgo's convertPathData does the rounding plus the usual path wins (relative
 * coordinates, shorthand curves, dropped redundant commands). It is idempotent,
 * so the build can run it every time and it is a no-op once the tree is clean.
 *
 *   node scripts/optimize-paths.mjs [--check]
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { optimize } from "svgo";

const ICONS_DIR = path.resolve(fileURLToPath(new URL("../icons", import.meta.url)));
const CHECK = process.argv.includes("--check");

const NS = 'xmlns="http://www.w3.org/2000/svg"';

function optimizePath(d) {
  const { data } = optimize(`<svg ${NS}><path d="${d}"/></svg>`, {
    floatPrecision: 2,
    plugins: ["convertPathData"],
  });
  // convertPathData can decide a path is empty; keep the original if so rather
  // than silently deleting artwork.
  const match = / d="([^"]*)"/.exec(data);
  return match && match[1] ? match[1] : d;
}

let before = 0;
let after = 0;
let changed = 0;

for (const file of readdirSync(ICONS_DIR).filter((f) => f.endsWith(".tsx"))) {
  const full = path.join(ICONS_DIR, file);
  const source = readFileSync(full, "utf8");
  const next = source.replace(/d="([^"]+)"/g, (_, d) => `d="${optimizePath(d)}"`);

  before += source.length;
  after += next.length;
  if (next !== source) {
    changed++;
    if (!CHECK) writeFileSync(full, next);
  }
}

const saved = ((1 - after / before) * 100).toFixed(1);
console.log(
  `${changed} icon${changed === 1 ? "" : "s"} ${CHECK ? "would shrink" : "optimized"}: ` +
    `${(before / 1048576).toFixed(2)}MB -> ${(after / 1048576).toFixed(2)}MB (-${saved}%)`,
);

if (CHECK && changed > 0) {
  console.error("Run `pnpm optimize:paths` and commit the result.");
  process.exit(1);
}
