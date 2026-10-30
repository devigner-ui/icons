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
import { activeRenames } from "../../icons/scripts/renames.mjs";

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

/* The four core styles draw every symbol. Broken is intentionally selective:
   it must be a non-empty subset of outline, never an outline fallback copied
   into a misleading fifth directory. */
const [, outline] = counts.find(([style]) => style === "outline");
for (const [style, files] of counts.filter(([style]) => style !== "broken")) {
  assert.equal(
    files.length,
    outline.length,
    `${style} has ${files.length} files, outline has ${outline.length}`,
  );
}
const [, broken] = counts.find(([style]) => style === "broken");
const outlineNames = new Set(outline.map((file) => file.toLowerCase()));
assert.ok(
  broken.every((file) => outlineNames.has(file.toLowerCase())),
  "Broken emitted an icon that has no outline counterpart",
);

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

  /* One symbol per file, plus the old names that differ from a current one
     only in case: those keep a sprite id but no file, since the two files
     would be one on Windows and macOS. */
  const idOnly = activeRenames(new URL("../package.json", import.meta.url)).filter(
    (r) => r.dir === "aliases" && existsSync(path.join(dir, `${r.to}.svg`)),
  ).length;
  const sprite = readFileSync(path.join(ROOT, "sprite", `${style}.svg`), "utf8");
  const symbols = sprite.match(/<symbol\b/g)?.length ?? 0;
  assert.equal(
    symbols,
    files.length + idOnly,
    `${style} sprite holds ${symbols} symbols for ${files.length} files and ${idOnly} id-only old names`,
  );
}

const oldNameFiles = activeRenames(new URL("../package.json", import.meta.url)).filter(
  (r) => r.dir === "icons",
).length;
console.log(
  `ok  ${outline.length - oldNameFiles} icons in four core styles (plus ${oldNameFiles} old-name files), ` +
    `${broken.length - oldNameFiles} Broken drawings; sprites agree`,
);
