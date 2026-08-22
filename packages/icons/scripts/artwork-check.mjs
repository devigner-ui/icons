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
 *   node scripts/artwork-check.mjs
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const ICONS_DIR = path.join(ROOT, "icons");

const BRANCHES = 3;

function check() {
  const sources = readdirSync(ICONS_DIR).filter((f) => f.endsWith(".tsx"));
  if (sources.length === 0) throw new Error("no icons in icons/");

  for (const file of sources) {
    const svgs = readFileSync(path.join(ICONS_DIR, file), "utf8").match(/<svg/g);
    const found = svgs?.length ?? 0;
    if (found !== BRANCHES) {
      throw new Error(`${file}: expected ${BRANCHES} svgs, found ${found}`);
    }
  }

  console.log(`ok  ${sources.length} sources carry all ${BRANCHES} drawings`);

  /* The sources being right and the build having kept them are different
     facts, and it was the second that used to be false. */
  const dist = path.join(ROOT, "dist", "index.js");
  if (!existsSync(dist)) {
    console.log("--  dist/index.js not built, skipping the bundle check");
    return;
  }

  const bundle = readFileSync(dist, "utf8");
  /* `var IconFoo = forwardRef(function IconFoo2(...))`. This used to look for
     `var IconFoo = ({`, the shape of a plain arrow component, and matched
     nothing the moment the icons started forwarding refs, which reads as
     "0 components in the bundle" rather than as a stale pattern, so keep the
     name anchored to the declaration and not to how the function is written.
     The whitespace is optional because the build minifies it away; the names
     survive, which is why tsup.config.ts leaves minifyIdentifiers off. */
  const found = [...bundle.matchAll(/var (Icon\w+)\s*=\s*forwardRef\(/g)];

  if (found.length !== sources.length) {
    throw new Error(
      `${found.length} components in the bundle, ${sources.length} in icons/`,
    );
  }

  /*
   * Count rendering branches per component rather than hunt for path data.
   * The set reuses drawings heavily and esbuild concatenates subpaths, so one
   * icon's bulk `d` turns up as a substring of another icon's outline, and every
   * artwork-matching version of this check drowned in false positives.
   */
  const wrong = [];
  for (let i = 0; i < found.length; i++) {
    const end = i + 1 < found.length ? found[i + 1].index : bundle.length;
    const branches = (
      bundle.slice(found[i].index, end).match(/viewBox:/g) ?? []
    ).length;
    if (branches !== BRANCHES) {
      wrong.push(`${found[i][1]} has ${branches} branches`);
    }
  }

  if (wrong.length) {
    throw new Error(
      `${wrong.length} components lost artwork: ` +
        `${wrong.slice(0, 5).join("; ")}${wrong.length > 5 ? "; ..." : ""}`,
    );
  }

  console.log(`ok  dist/index.js: all ${found.length} components complete`);
}

try {
  check();
} catch (err) {
  console.error(`FAIL  ${err.message}`);
  process.exit(1);
}
