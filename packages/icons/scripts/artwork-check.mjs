/*
 * Every icon carries all four drawings, and the build has to keep all of them.
 *
 * Each file in icons/ is one three-branch ternary:
 *
 *   {!fill ? (<svg/>)          outline and twotone, split by `duotone`
 *     : duotone ? (<svg/>)     bulk
 *     : (<svg/>)}              bold
 *
 * This used to be a paywall check. Bulk was sold on all but 282 icons, and the
 * free build deleted that middle branch at load time so the artwork was absent
 * rather than merely hidden. Nothing is sold now (every style of every icon is
 * free), so the stripping is gone and what is left is the half that was always
 * the useful one: proving the drawings survived the build.
 *
 * The exception is a glyph that is one stroked drawing in every core style,
 * with Bold and Bulk at a fixed weight (`strokeWidth={fill ? ...}`): one
 * branch serves all four.
 *
 *   node scripts/artwork-check.mjs
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const ICONS_DIR = path.join(ROOT, "icons");

const STANDARD_BRANCHES = 3;

function expectedBranches(source) {
  const core = source.includes("strokeWidth={fill ? ") ? 1 : STANDARD_BRANCHES;
  return source.includes('variant === "Broken"') ? core + 1 : core;
}

function check() {
  const sources = readdirSync(ICONS_DIR).filter((f) => f.endsWith(".tsx"));
  if (sources.length === 0) throw new Error("no icons in icons/");

  let broken = 0;
  for (const file of sources) {
    const source = readFileSync(path.join(ICONS_DIR, file), "utf8");
    const svgs = source.match(/<svg/g);
    const found = svgs?.length ?? 0;
    const expected = expectedBranches(source);
    if (source.includes('variant === "Broken"')) broken++;
    if (found !== expected) {
      throw new Error(`${file}: expected ${expected} svgs, found ${found}`);
    }
  }

  console.log(`ok  ${sources.length} sources carry 4 drawings, plus Broken on ${broken}`);

  /* The sources being right and the build having kept them are different
     facts. Each published icon module must still contain every branch. */
  const dist = path.join(ROOT, "dist", "icons");
  if (!existsSync(dist)) {
    console.log("--  dist/icons not built, skipping the output check");
    return;
  }

  const wrong = [];
  for (const file of sources) {
    const name = file.slice(0, -4);
    const out = path.join(dist, `${name}.js`);
    if (!existsSync(out)) {
      wrong.push(`${name} is missing from dist/icons`);
      continue;
    }
    const component = readFileSync(out, "utf8");
    const branches = (component.match(/viewBox:/g) ?? []).length;
    const expected = expectedBranches(readFileSync(path.join(ICONS_DIR, file), "utf8"));
    if (!new RegExp(`var Icon${name}\\s*=\\s*forwardRef\\(`).test(component)) {
      wrong.push(`${name} is missing its forwardRef component`);
    } else if (branches !== expected) {
      wrong.push(`${name} has ${branches} branches, expected ${expected}`);
    }
  }

  if (wrong.length) {
    throw new Error(
      `${wrong.length} components lost artwork: ` +
        `${wrong.slice(0, 5).join("; ")}${wrong.length > 5 ? "; ..." : ""}`,
    );
  }

  console.log(`ok  dist/icons: all ${sources.length} components complete`);
}

try {
  check();
} catch (err) {
  console.error(`FAIL  ${err.message}`);
  process.exit(1);
}
