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

const { IconAdd, IconAddCircle, IconActivity, IconBag2, IconBagStraps } = await import(bundle.href);

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
}

const render = (component, props) =>
  renderToString(createSSRApp({ render: () => h(component, props) }));

const outline = await render(IconAddCircle, {});
const bulk = await render(IconAddCircle, { variant: "bulk" });
const weighed = await render(IconAddCircle, { strokeWidth: 2 });
const labelled = await render(IconAddCircle, { "aria-label": "Add" });
const classed = await render(IconActivity, { class: "h-6 w-6" });
/* Add draws its Bold with strokes, at a fixed weight. */
const bold = await render(IconAdd, { variant: "bold" });
const boldWeighed = await render(IconAdd, { variant: "bold", strokeWidth: 3 });

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
   major. It has to be the same icon in every respect, warn once in
   development, and pass attributes through without doubling them. */
const warnings = [];
const warn = console.warn;
console.warn = (message) => warnings.push(message);
const aliasProps = { variant: "bold", strokeWidth: 2, class: "h-6", "aria-label": "Bag" };
const alias = await render(IconBag2, aliasProps);
await render(IconBag2, {});
console.warn = warn;
const target = await render(IconBagStraps, aliasProps);

check("a renamed icon's old name renders the new icon and warns once", () => {
  assert.equal(alias, target);
  assert.match(alias, /class="h-6"/);
  assert.equal(warnings.length, 1, "expected one warning across two renders");
  assert.match(warnings[0], /IconBag2 was renamed to IconBagStraps/);
});

console.log(`ok  ${checked} checks on the built Vue components`);
