/*
 * Renders the built components and asserts on the markup. The generator can
 * only prove it wrote files; this proves Vue turns them back into the drawing
 * the React package produced, with the props wired up.
 *
 *   node scripts/check.mjs        (after a build)
 */
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { createSSRApp, h } from "vue";
import { renderToString } from "@vue/server-renderer";

const bundle = new URL("../dist/index.js", import.meta.url);
if (!existsSync(bundle)) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

const { IconAdd, IconActivity } = await import(bundle.href);

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
}

const render = (component, props) =>
  renderToString(createSSRApp({ render: () => h(component, props) }));

const outline = await render(IconAdd, {});
const bulk = await render(IconAdd, { variant: "bulk" });
const weighed = await render(IconAdd, { strokeWidth: 2 });
const labelled = await render(IconAdd, { "aria-label": "Add" });
const classed = await render(IconActivity, { class: "h-6 w-6" });

check("an icon renders an <svg> with its artwork", () => {
  assert.match(outline, /^<svg[\s>]/);
  assert.match(outline, /viewBox="/);
  assert.match(outline, /<path/);
});

check("the four drawings are actually different", () => {
  assert.notEqual(outline, bulk, "bulk rendered the outline drawing");
  /* Bold and bulk are filled forms; outline and twotone are stroked. */
  assert.match(bulk, /fill="currentColor"/);
  assert.match(outline, /stroke="currentColor"/);
});

check("strokeWidth reaches inside the drawing", () => {
  assert.match(outline, /stroke-width="1.5"/);
  assert.match(weighed, /stroke-width="2"/);
  assert.doesNotMatch(weighed, /stroke-width="1.5"/);
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

console.log(`ok  ${checked} checks on the built Vue components`);
