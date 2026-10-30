/*
 * Adds the optional Broken drawing to icons that already exist in the set.
 *
 * The source directory contains one `<Name>-broken.svg` file per drawing.
 * Only an exact component-name match is imported; every other file is left in
 * place for a later, explicit mapping. The source SVG conversion is shared
 * with import-svgs.mjs so the fifth drawing follows the same JSX, colour, and
 * stroke-width rules as the established four.
 *
 *   node scripts/import-broken.mjs --from C:\\path\\to\\icons
 */
import assert from "node:assert/strict";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { emitSvg, readDrawing } from "./import-svgs.mjs";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const ICONS_DIR = path.join(ROOT, "icons");
const flag = process.argv.indexOf("--from");
const from = flag === -1 ? null : process.argv[flag + 1];

assert.ok(from, "Usage: node scripts/import-broken.mjs --from <directory>");

const existing = new Set(
  readdirSync(ICONS_DIR)
    .filter((file) => file.endsWith(".tsx"))
    .map((file) => path.basename(file, ".tsx")),
);

const matches = [];
const skipped = [];
for (const file of readdirSync(from).filter((file) => file.endsWith("-broken.svg"))) {
  const name = path.basename(file, "-broken.svg");
  if (existing.has(name)) matches.push({ name, file: path.join(from, file) });
  else skipped.push(file);
}

assert.ok(matches.length, "No downloaded Broken SVGs match existing icon names.");

/* Parse and validate the whole batch before changing a component. That keeps
   a malformed downloaded SVG from producing a half-imported library. */
const changes = matches.map(({ name, file }) => {
  const drawing = readDrawing(file);
  const component = path.join(ICONS_DIR, `${name}.tsx`);
  const source = readFileSync(component, "utf8");
  const anchor = "      {!fill ? (";

  assert.ok(!source.includes('variant === "Broken"'), `${name} already has a Broken drawing`);
  assert.equal(
    source.split(anchor).length - 1,
    1,
    `${name}: could not find the standard drawing branch`,
  );

  return {
    component,
    next: source.replace(
      anchor,
      `      {variant === "Broken" ? (\n${emitSvg(drawing.viewBox, drawing.nodes, new Set())}\n      ) : !fill ? (`,
    ),
  };
});

for (const { component, next } of changes) writeFileSync(component, next);

console.log(`ok  imported ${changes.length} Broken drawings; skipped ${skipped.length} unmatched SVGs`);