/*
 * Renders the built components on Solid's server renderer and asserts on the
 * markup, the same checks the Vue and Svelte packages run.
 *
 *   node scripts/check.mjs        (after a build)
 */
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { createComponent } from "solid-js";
import { renderToString } from "solid-js/web";

const bundle = new URL("../dist/index.js", import.meta.url);
if (!existsSync(bundle)) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

const { IconAdd, IconAddCircle, IconActivity } = await import(bundle.href);

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
}

const render = (component, props = {}) => renderToString(() => createComponent(component, props));

const outline = render(IconAddCircle);
const bulk = render(IconAddCircle, { variant: "bulk" });
const weighed = render(IconAddCircle, { strokeWidth: 2 });
const labelled = render(IconAddCircle, { "aria-label": "Add" });
const classed = render(IconActivity, { class: "h-6 w-6" });

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

check("strokeWidth reaches inside the drawing", () => {
  assert.match(weighed, /stroke-width="2"/);
  assert.doesNotMatch(weighed, /stroke-width="1.5"/);
});

check("strokeWidth leaves Bold alone, as in the React package", () => {
  assert.equal(render(IconAdd, { variant: "bold", strokeWidth: 3 }), render(IconAdd, { variant: "bold" }));
});

check("decorative by default, an image once named", () => {
  assert.match(outline, /aria-hidden="true"/);
  assert.match(outline, /focusable="false"/);
  assert.match(labelled, /role="img"/);
  assert.doesNotMatch(labelled, /aria-hidden/);
});

check("variant and strokeWidth do not leak onto the element", () => {
  assert.doesNotMatch(bulk, /variant=/);
  assert.doesNotMatch(weighed.match(/^<svg[^>]*>/)[0], /strokeWidth|stroke-width/);
});

check("class and other attributes fall through", () => {
  /* Solid's server renderer leaves a space after the last class. */
  assert.match(classed, /class="h-6 w-6 ?"/);
});

console.log(`ok  ${checked} checks on the Solid package`);
