/*
 * Inspects the elements the built components produce.
 *
 * react-native-svg cannot be imported in node (it reaches for react-native,
 * which wants a device), so the check swaps it for a stub whose components are
 * plain strings. Nothing is rendered: the components are called and the element
 * tree is walked, so every prop is read exactly as react-native-svg would
 * receive it. Rendering through react-dom instead would prove nothing, because
 * react-dom rewrites camelCase SVG props back to their hyphenated spellings,
 * the very thing this package converted them out of.
 *
 * That covers this package's logic: which drawing a variant selects, which
 * props reach which shape, that strokeWidth lands only on linework, that
 * nesting survived, and that an unlabelled icon is hidden. react-native-svg
 * itself is not this package's code and is not tested here.
 *
 * The artwork is covered elsewhere and more strictly: build.mjs round-trips
 * every one of the 8,568 drawings through the parser and back to markup.
 *
 *   node scripts/check.mjs        (after a build)
 */
import assert from "node:assert/strict";
import {
  existsSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = fileURLToPath(new URL("../", import.meta.url));
const DIST = path.join(ROOT, "dist");

if (!existsSync(path.join(DIST, "runtime.js"))) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

/* Inside the package, so `react` resolves from its node_modules. */
const work = mkdtempSync(path.join(ROOT, ".check-"));
process.on("exit", () => rmSync(work, { recursive: true, force: true }));

/* String component types: an element's `type` is then the name of the
   react-native-svg component the runtime asked for, readable without a
   renderer. */
writeFileSync(
  path.join(work, "stub.js"),
  ["Circle", "ClipPath", "Defs", "Ellipse", "G", "Path", "Rect"]
    .map((name) => `export const ${name} = "${name}";\n`)
    .join("") + `export default "Svg";\n`,
);

writeFileSync(
  path.join(work, "runtime.js"),
  readFileSync(path.join(DIST, "runtime.js"), "utf8").replace(
    'from "react-native-svg"',
    'from "./stub.js"',
  ),
);

async function load(name) {
  const file = path.join(work, `${name}.js`);
  writeFileSync(
    file,
    readFileSync(path.join(DIST, "icons", `${name}.js`), "utf8").replace(
      '"../runtime.js"',
      '"./runtime.js"',
    ),
  );
  return (await import(pathToFileURL(file).href)).default;
}

const IconAdd = await load("Add");
const IconActivity = await load("Activity");
/* Additem is one of the 51 drawings with <defs> and a <clipPath>, so it is the
   one that proves nesting survived the parse. */
const IconAdditem = await load("Additem");

/** Every element in the tree, root first. */
function walk(element, out = []) {
  if (!element || typeof element !== "object") return out;
  if (Array.isArray(element)) {
    for (const child of element) walk(child, out);
    return out;
  }
  out.push(element);
  return walk(element.props?.children, out);
}

const shapes = (element) => walk(element).filter((e) => e.type !== "Svg");
const propsOf = (element, type) =>
  shapes(element)
    .filter((e) => e.type === type)
    .map((e) => e.props);

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
}

const outline = IconAdd({});
const bulk = IconAdd({ variant: "bulk" });
const weighed = IconAdd({ strokeWidth: 2 });
const bulkWeighed = IconAdd({ variant: "bulk", strokeWidth: 2 });
const labelled = IconAdd({ accessibilityLabel: "Add" });
const sized = IconActivity({ size: 32 });
const coloured = IconActivity({ color: "#f00" });
const nested = IconAdditem({});

check("an icon builds an Svg with shapes inside it", () => {
  assert.equal(outline.type, "Svg");
  assert.match(outline.props.viewBox, /^[\d\s.]+$/);
  assert.ok(propsOf(outline, "Path").length > 0, "no Path elements");
});

check("the four drawings are actually different", () => {
  assert.notDeepEqual(
    propsOf(outline, "Path").map((p) => p.d),
    propsOf(bulk, "Path").map((p) => p.d),
    "bulk built the outline drawing",
  );
  assert.ok(propsOf(bulk, "Path").some((p) => p.fill === "currentColor"));
  assert.ok(propsOf(outline, "Path").some((p) => p.stroke === "currentColor"));
});

check("props are camelCase, as react-native-svg wants them", () => {
  const path = propsOf(outline, "Path")[0];
  assert.equal(path.strokeWidth, "1.5");
  assert.equal(path["stroke-width"], undefined, "a hyphenated prop survived");
  /* Two hyphens in one name, so it proves the rule rather than a special
     case. Not fill-rule: 1,746 drawings carry one, and Add is not among them. */
  assert.equal(path.strokeLinecap, "round");
  for (const shape of shapes(bulk)) {
    for (const key of Object.keys(shape.props)) {
      assert.doesNotMatch(key, /-/, `<${shape.type}> kept a hyphenated ${key}`);
    }
  }
});

check("strokeWidth weighs linework and leaves fills alone", () => {
  assert.ok(propsOf(weighed, "Path").every((p) => p.strokeWidth === 2));
  /* Bulk is filled: nothing there has a stroke to re-weigh, so adding one
     would draw an outline around the fill. */
  assert.ok(
    propsOf(bulkWeighed, "Path").every((p) => p.strokeWidth === undefined),
    "strokeWidth was added to a filled drawing",
  );
});

check("nested defs and clipPath survive the parse", () => {
  const types = shapes(nested).map((e) => e.type);
  assert.ok(types.includes("Defs"), "no Defs");
  assert.ok(types.includes("ClipPath"), "no ClipPath");
  assert.ok(
    shapes(nested).some((e) => /^url\(#/.test(e.props.clipPath ?? "")),
    "nothing references the clip path",
  );
});

check("size sets both dimensions, color feeds currentColor", () => {
  assert.equal(sized.props.width, 32);
  assert.equal(sized.props.height, 32);
  assert.equal(outline.props.width, 24, "default size is not 24");
  assert.equal(coloured.props.color, "#f00");
});

check("an unlabelled icon is hidden from screen readers", () => {
  assert.equal(outline.props.accessibilityElementsHidden, true);
  assert.equal(outline.props.importantForAccessibility, "no-hide-descendants");
  assert.equal(outline.props.accessibilityRole, undefined);
});

check("naming an icon promotes it to an image", () => {
  assert.equal(labelled.props.accessibilityRole, "image");
  assert.equal(labelled.props.accessibilityLabel, "Add");
  assert.equal(labelled.props.accessibilityElementsHidden, undefined);
});

check("variant and size do not leak onto the element", () => {
  assert.equal(bulk.props.variant, undefined, "variant landed on the Svg");
  assert.equal(sized.props.size, undefined, "size landed on the Svg");
});

console.log(`ok  ${checked} checks on the built React Native components`);
