/*
 * What shipped, not what was meant to. build.mjs asserts on the markup as it
 * renders; this reads the files back off disk, because the failure worth
 * catching here is a partial or stale write, which a generator cannot see.
 *
 *   node scripts/check.mjs
 */
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STYLES } from "../../icons/scripts/emit-svg.mjs";

const ROOT = fileURLToPath(new URL("../", import.meta.url));

if (!existsSync(path.join(ROOT, "svg"))) {
  console.log("--  not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

const counts = STYLES.map((style) => {
  const dir = path.join(ROOT, "svg", style);
  const files = readdirSync(dir).filter((f) => f.endsWith(".svg"));
  assert.ok(files.length > 0, `${style} emitted nothing`);
  return [style, files, dir];
});

/* Every style draws every symbol, so any disagreement is a lost drawing. */
const [, first] = counts[0];
for (const [style, files] of counts) {
  assert.equal(
    files.length,
    first.length,
    `${style} has ${files.length} files, ${counts[0][0]} has ${first.length}`,
  );
}

for (const [style, files, dir] of counts) {
  const svg = readFileSync(path.join(dir, files[0]), "utf8");
  assert.match(svg, /^<svg[\s>]/, `${style}/${files[0]} is not an <svg>`);
  assert.match(svg, /viewBox="/, `${style}/${files[0]} lost its viewBox`);
  /* The camelCase JSX spellings the old regex extractor shipped. A parser
     ignores them, which is how even-odd holes and stroke joins went missing. */
  assert.doesNotMatch(
    svg,
    /strokeWidth|fillRule|clipRule|strokeLinecap/,
    `${style}/${files[0]} carries JSX attribute names`,
  );

  const sprite = readFileSync(path.join(ROOT, "sprite", `${style}.svg`), "utf8");
  const symbols = sprite.match(/<symbol\b/g)?.length ?? 0;
  assert.equal(
    symbols,
    files.length,
    `${style} sprite holds ${symbols} symbols for ${files.length} files`,
  );
}

console.log(
  `ok  ${first.length} icons x ${STYLES.length} styles on disk, sprites agree`,
);
