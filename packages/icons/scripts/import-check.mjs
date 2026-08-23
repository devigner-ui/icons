/*
 * Proves the importer by running the set through it backwards.
 *
 * emit-svg.mjs renders a built icon to the four SVG files a design tool would
 * export. Feeding those back to import-svgs.mjs has to reproduce the component
 * they came from: same shapes in the same branch, same duotone expression on
 * the same shapes, same stroke prop. Anything the converter drops or misfiles
 * shows up as a difference against artwork that is already known good.
 *
 * The interesting failure is silent: a twotone drawing matched to the wrong
 * outline shape still renders, still passes artwork-check, and is only wrong to
 * look at. That is what the opacity comparison below is for.
 *
 *   node scripts/import-check.mjs        (after a build)
 */
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, writeFileSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { allSvgs, STYLES } from "./emit-svg.mjs";
import { emitIcon, readDrawing, retotal } from "./import-svgs.mjs";

const ROOT = fileURLToPath(new URL("..", import.meta.url));

/* Two stroked icons, one of them drawn with <circle> rather than <path>, and
   one carrying a <g>/clipPath group. Between them they cover every element the
   importer has to put back. */
const SAMPLE = ["Add", "Accessibility", "Additem"];

const bundle = path.join(ROOT, "dist", "index.js");
if (!existsSync(bundle)) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

/** The three `<svg>` branches of a component file, in source order. */
function branches(source) {
  const found = source.match(/<svg[\s\S]*?<\/svg>/g) ?? [];
  assert.equal(found.length, 3, `expected 3 branches, found ${found.length}`);
  return found;
}

/* Every coordinate in one branch, in order. Not just `d`: 242 icons are drawn
   with <circle> and a moved centre has to fail this too. */
const GEOMETRY = /\s(width|height|points|cx|cy|rx|ry|d|r|x|y)="([^"]+)"/g;

function shapes(branch) {
  return [...branch.matchAll(GEOMETRY)].map((m) => `${m[1]}=${m[2]}`);
}

/* Which shapes carry the duotone expression, by position. The whole job of the
   twotone input file is deciding that, so comparing counts would pass a drawing
   that half-toned the wrong half. Greedy up to the tag's `>`: lazy with an
   optional group matches the empty string every time, which is how the first
   version of this check passed a deliberately broken importer. */
function halfToned(branch) {
  return [...branch.matchAll(/<(?:path|circle|rect|ellipse|g)\b[^>]*>/g)].map(
    (m) => m[0].includes("opacity={duotone"),
  );
}

/*
 * The prose totals. A string rewrite that matches nothing fails silently and
 * leaves the READMEs claiming the old number, so the real sentences are the
 * fixture: both totals move, and the release history beside them does not.
 */
{
  const before = `8,568 open-source icons for React: 2,142 symbols, each in
outline, twotone, bold and bulk. Re-imported the whole set from source: 2,142
symbols / 8,568 drawings, up from 1,963 / 7,852. Bulk used to be sold on 1,682.`;
  const after = retotal(before, 2142, 2200);

  assert.match(after, /8,800 open-source icons/, "the drawing total did not move");
  assert.match(after, /2,200 symbols, each in/, "the symbol total did not move");
  assert.match(after, /up from 1,963 \/ 7,852/, "an unrelated number moved");
  assert.match(after, /sold on 1,682/, "an unrelated number moved");
  assert.equal(retotal(before, 2142, 2142), before, "a no-op rewrite changed the text");
  console.log("ok  the prose totals move, and only they do");
}

const drawings = await allSvgs(SAMPLE);
assert.equal(drawings.size, SAMPLE.length, "an icon in SAMPLE is not in the bundle");

const dir = mkdtempSync(path.join(tmpdir(), "icons-import-"));
let checked = 0;

for (const [name, rendered] of drawings) {
  const files = {};
  for (const style of STYLES) {
    const file = path.join(dir, `${name}-${style}.svg`);
    writeFileSync(file, rendered[style]);
    files[style] = readDrawing(file);
  }

  const round = emitIcon(name, files);
  const source = readFileSync(path.join(ROOT, "icons", `${name}.tsx`), "utf8");

  const got = branches(round);
  const want = branches(source);

  for (let i = 0; i < 3; i++) {
    assert.deepEqual(
      shapes(got[i]),
      shapes(want[i]),
      `${name}: branch ${i + 1} has different artwork`,
    );

    assert.deepEqual(
      halfToned(got[i]),
      halfToned(want[i]),
      `${name}: branch ${i + 1} put the duotone opacity on different shapes`,
    );
  }

  const strokes = (source) => (source.match(/strokeWidth=\{strokeWidth\}/g) ?? []).length;
  assert.equal(
    strokes(round),
    strokes(source),
    `${name}: the stroke prop reached a different number of shapes`,
  );
  assert.doesNotMatch(round, /#[0-9a-fA-F]{3,8}"/, `${name}: a hex colour survived`);
  assert.match(round, /const Icon/, `${name}: no component declaration`);

  checked++;
  console.log(`ok  ${name} round-trips`);
}

console.log(`ok  ${checked} icons through the importer unchanged`);
