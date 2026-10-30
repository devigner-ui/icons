/*
 * Renders icons through the built package and asserts on the markup, the way
 * the Vue and Svelte checks do. createIcons needs a DOM, so it runs against a
 * small stand-in rather than a browser.
 *
 *   node scripts/check.mjs        (after a build)
 */
import assert from "node:assert/strict";
import { existsSync } from "node:fs";

const bundle = new URL("../dist/index.js", import.meta.url);
if (!existsSync(bundle)) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

const { toSvg, createIcons, IconAdd, IconAddCircle } = await import(bundle.href);
const { default: single } = await import(new URL("../dist/icons/AddCircle.js", import.meta.url).href);

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
}

const outline = toSvg(IconAddCircle);
const bulk = toSvg(IconAddCircle, { variant: "bulk" });
const weighed = toSvg(IconAddCircle, { strokeWidth: 2 });
const labelled = toSvg(IconAddCircle, { attrs: { "aria-label": "Add" } });

check("an icon renders an <svg> with its artwork", () => {
  assert.match(outline, /^<svg[\s>]/);
  assert.match(outline, /viewBox="/);
  assert.match(outline, /<path/);
});

check("the drawings are actually different", () => {
  assert.notEqual(outline, bulk);
  assert.match(bulk, /fill="currentColor"/);
  assert.match(outline, /stroke="currentColor"/);
});

check("strokeWidth reaches outline and leaves Bold alone", () => {
  assert.match(weighed, /stroke-width="2"/);
  assert.doesNotMatch(weighed, /stroke-width="1.5"/);
  assert.equal(toSvg(IconAdd, { variant: "bold", strokeWidth: 3 }), toSvg(IconAdd, { variant: "bold" }));
});

check("decorative by default, an image once named", () => {
  assert.match(outline, /aria-hidden="true"/);
  assert.match(labelled, /role="img"/);
  assert.doesNotMatch(labelled, /aria-hidden/);
});

check("caller attributes are escaped", () => {
  assert.match(toSvg(IconAdd, { attrs: { class: '"><script>' } }), /class="&quot;>&lt;script>"/);
});

check("the per-icon subpath is the same data", () => {
  assert.deepEqual(single, IconAddCircle);
});

/* Just enough DOM for createIcons: querySelectorAll, attributes, replaceWith. */
class El {
  constructor(tag, attrs = {}) {
    this.tag = tag;
    this.map = new Map(Object.entries(attrs));
    this.innerHTML = "";
  }
  get attributes() {
    return [...this.map].map(([name, value]) => ({ name, value }));
  }
  getAttribute(k) {
    return this.map.has(k) ? this.map.get(k) : null;
  }
  setAttribute(k, v) {
    this.map.set(k, v);
  }
  replaceWith(next) {
    this.replaced = next;
  }
}
globalThis.document = { createElementNS: (_ns, tag) => new El(tag) };
const placeholder = new El("i", { "data-icon": "AddCircle", "data-variant": "bold", class: "size-6" });
const missing = new El("i", { "data-icon": "Nope" });
const warn = console.warn;
console.warn = () => {};
const count = createIcons({ icons: { IconAddCircle }, root: { querySelectorAll: () => [placeholder, missing] } });
console.warn = warn;

check("createIcons swaps placeholders and keeps their attributes", () => {
  assert.equal(count, 1);
  const svg = placeholder.replaced;
  assert.equal(svg.tag, "svg");
  assert.equal(svg.getAttribute("class"), "size-6");
  assert.equal(svg.getAttribute("data-variant"), null);
  assert.equal(svg.innerHTML, IconAddCircle.bold.inner);
});

console.log(`ok  ${checked} checks on the JS package`);
