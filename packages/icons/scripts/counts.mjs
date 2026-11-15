/*
 * The totals in prose. Every published description and README states them, so
 * they are derived here from the set itself and never typed by hand:
 * generate-metadata.mjs calls syncCounts() on every build, and import-svgs.mjs
 * after an import. Add a file to COUNTED and its numbers follow too.
 *
 * Only the two totals are replaced, by their old value, and only in these files.
 * The CHANGELOGs say "2,142 symbols / 8,568 drawings, up from 1,963 / 7,852",
 * which is a fact about a past release and has to stay wrong forever; the script
 * comments quoting 2,142 are prose about an old bug. Both would be corrupted by
 * a blanket search and replace.
 */
import assert from "node:assert/strict";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { STYLES } from "./emit-svg.mjs";

const REPO_ROOT = fileURLToPath(new URL("../../../", import.meta.url));

const COUNTED = [
  "README.md",
  "PRODUCT.md",
  "DESIGN.md",
  ".github/assets/features-light.svg",
  ".github/assets/features-dark.svg",
  "packages/icons/README.md",
  "packages/icons/package.json",
  "packages/icons-svg/README.md",
  "packages/icons-svg/package.json",
  "packages/icons-vue/README.md",
  "packages/icons-vue/package.json",
  "packages/icons-svelte/README.md",
  "packages/icons-svelte/package.json",
  "packages/icons-react-native/README.md",
  "packages/icons-react-native/package.json",
  "packages/icons-solid/README.md",
  "packages/icons-solid/package.json",
  "packages/icons-angular/README.md",
  "packages/icons-angular/package.json",
  "packages/icons-nuxt/README.md",
  "packages/icons-nuxt/package.json",
  "packages/icons-js/README.md",
  "packages/icons-js/package.json",
  "packages/icons-mcp/README.md",
  "packages/icons-mcp/package.json",
  "packages/icons-rails/README.md",
  "packages/icons-rails/devigner_icons.gemspec",
  "packages/icons-flutter/README.md",
  "packages/icons-flutter/pubspec.yaml",
  "packages/icons-blazor/README.md",
  "packages/icons-blazor/src/Devigner.Icons.Blazor/Devigner.Icons.Blazor.csproj",
];

/* Every symbol ships every style, so drawings = symbols × styles. emit-svg's
   list is the one the packages render, broken included. */
export const STYLE_COUNT = STYLES.length;

/** `2,496` and `12,480` as this repo writes them. */
export const thousands = (n) => n.toLocaleString("en-US");

/**
 * Both totals, replaced by value. Exported for the check: it is a string
 * rewrite over the files above, and the failure mode is a silent no-match.
 */
export function retotal(text, before, after) {
  return text
    .replaceAll(thousands(before * STYLE_COUNT), thousands(after * STYLE_COUNT))
    .replaceAll(thousands(before), thousands(after));
}

/*
 * The total the package currently claims, which is not the same as "what it was
 * before this run": an icon added by hand leaves every README a symbol behind,
 * and subtracting what was just imported would then look for a number that
 * appears nowhere and quietly change nothing. Reading the stated figure makes
 * the rewrite self-healing instead.
 */
function statedTotal() {
  const manifest = path.join(REPO_ROOT, "packages", "icons", "package.json");
  const match = /([\d,]+) symbols/.exec(readFileSync(manifest, "utf8"));
  assert.ok(match, "packages/icons/package.json states no symbol total");
  return Number(match[1].replace(/,/g, ""));
}

/** Moves every stated total to `symbols`. Returns the old total and the files it changed. */
export function syncCounts(symbols) {
  const stated = statedTotal();
  const touched = [];
  if (stated === symbols) return { stated, touched };
  for (const file of COUNTED) {
    const full = path.join(REPO_ROOT, file);
    if (!existsSync(full)) continue;
    const text = readFileSync(full, "utf8");
    const next = retotal(text, stated, symbols);
    if (next !== text) {
      writeFileSync(full, next);
      touched.push(file);
    }
  }
  return { stated, touched };
}
