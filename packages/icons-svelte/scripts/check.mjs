/*
 * Compiles the generated components and renders them. The generator can only
 * prove it wrote files; a `.svelte` file that does not compile is a file that
 * fails in someone else's build, which is the one failure worth catching here.
 *
 * Compiles by hand rather than through a bundler: the package ships source, so
 * there is no build output to import, and standing up Vite to render two icons
 * would be a toolchain to maintain for a check that is four lines without it.
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
import { compile } from "svelte/compiler";

const DIST = new URL("../dist/", import.meta.url);
if (!existsSync(new URL("Icon.svelte", DIST))) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

/*
 * Svelte emits ESM that imports "svelte/internal" by bare specifier, so the
 * compiled modules have to sit somewhere node can resolve that from: this
 * package, not the system temp directory.
 *
 * fileURLToPath, not `.pathname`: this repo lives under a directory with a
 * space in it, and a raw pathname hands back `Coding%20Projects`, which is a
 * path that does not exist.
 */
const work = mkdtempSync(
  path.join(fileURLToPath(new URL("../", import.meta.url)), ".check-"),
);
process.on("exit", () => rmSync(work, { recursive: true, force: true }));

/** Compiles one .svelte file to SSR JavaScript and writes it beside its peers. */
function build(name, source) {
  const { js } = compile(source, {
    generate: "ssr",
    filename: `${name}.svelte`,
  });
  const file = path.join(work, `${name}.js`);
  writeFileSync(file, js.code.replace(/\.svelte"/g, '.js"'));
  return file;
}

build("Icon", readFileSync(new URL("Icon.svelte", DIST), "utf8"));

async function render(iconName, props) {
  const source = readFileSync(
    new URL(`icons/${iconName}.svelte`, DIST),
    "utf8",
  ).replace('from "../Icon.svelte"', 'from "./Icon.js"');
  const file = build(iconName, source);
  const { default: Component } = await import(pathToFileURL(file).href);
  return Component.render(props).html;
}

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
}

const outline = await render("AddCircle", {});
const bulk = await render("AddCircle", { variant: "bulk" });
const weighed = await render("AddCircle", { strokeWidth: 2 });
const labelled = await render("AddCircle", { "aria-label": "Add" });
const classed = await render("Activity", { class: "h-6 w-6" });
/* Add draws its Bold with strokes, at a fixed weight. */
const bold = await render("Add", { variant: "bold" });
const boldWeighed = await render("Add", { variant: "bold", strokeWidth: 3 });

check("an icon renders an <svg> with its artwork", () => {
  assert.match(outline, /<svg/);
  assert.match(outline, /viewBox="/);
  assert.match(outline, /<path/);
});

check("the four drawings are actually different", () => {
  assert.notEqual(outline, bulk, "bulk rendered the outline drawing");
  assert.match(bulk, /fill="currentColor"/);
  assert.match(outline, /stroke="currentColor"/);
});

check("strokeWidth reaches inside the drawing", () => {
  assert.match(outline, /stroke-width="1.5"/);
  assert.match(weighed, /stroke-width="2"/);
  assert.doesNotMatch(weighed, /stroke-width="1.5"/);
});

check("strokeWidth leaves Bold alone, as in the React package", () => {
  assert.equal(boldWeighed, bold);
});

check("an unlabelled icon is hidden from screen readers", () => {
  assert.match(outline, /aria-hidden="true"/);
  assert.match(outline, /focusable="false"/);
  assert.doesNotMatch(outline, /role="img"/);
});

check("naming an icon promotes it to an image", () => {
  assert.match(labelled, /role="img"/);
  assert.doesNotMatch(labelled, /aria-hidden/);
});

check("variant and strokeWidth do not leak onto the element", () => {
  assert.doesNotMatch(bulk, /variant=/, "variant landed on the <svg>");
  assert.doesNotMatch(weighed, /strokeWidth=/, "strokeWidth landed on the <svg>");
});

check("class and other attributes fall through", () => {
  assert.match(classed, /class="h-6 w-6"/);
});

/* Bag2 was renamed to BagStraps; the old name is a wrapper until the next
   major. It must compile, render the new icon with the same props, and warn
   once in development. */
const aliasProps = { variant: "bold", strokeWidth: 2, class: "h-6" };
const target = await render("BagStraps", aliasProps);
writeFileSync(path.join(work, "renamed.js"), readFileSync(new URL("renamed.js", DIST), "utf8"));
build(
  "Bag2",
  readFileSync(new URL("icons/Bag2.svelte", DIST), "utf8")
    .replace('from "../icons/BagStraps.svelte"', 'from "./BagStraps.svelte"')
    .replace('from "../renamed.js"', 'from "./renamed.js"'),
);
const { default: IconBag2 } = await import(pathToFileURL(path.join(work, "Bag2.js")).href);
const warnings = [];
const warn = console.warn;
console.warn = (message) => warnings.push(message);
const alias = IconBag2.render(aliasProps).html;
IconBag2.render({});
console.warn = warn;

check("a renamed icon's old name renders the new icon and warns once", () => {
  assert.equal(alias.trim(), target.trim()); // SSR indents a wrapped component
  assert.equal(warnings.length, 1, "expected one warning across two renders");
  assert.match(warnings[0], /IconBag2 was renamed to IconBagStraps/);
});

console.log(`ok  ${checked} checks on the built Svelte components`);
