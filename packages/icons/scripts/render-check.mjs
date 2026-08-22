/*
 * What actually reaches the DOM. surface-check reads the sources and the type
 * declarations; this renders the built bundle and asserts on the markup, which
 * is the only way to catch a prop that is declared and then dropped.
 *
 * It also pins the React the package builds against. This file first failed
 * with "Objects are not valid as a React child" because pnpm had auto-installed
 * React 19 against the `>=18.0.0` peer range while everything else here is on
 * 18; the two disagree on the element symbol. react and react-dom are
 * devDependencies now so that stays put.
 *
 *   node scripts/render-check.mjs        (after a build)
 */
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { createElement as h } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const bundle = new URL("../dist/index.js", import.meta.url);
if (!existsSync(bundle)) {
  console.log("--  dist not built, skipping the render check");
  process.exit(0);
}

const { IconActivity, IconShoppingCart } = await import(bundle.href);

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
  console.log(`ok  ${what}`);
}

const html = (el) => renderToStaticMarkup(el);

check("an unlabelled icon is hidden from screen readers", () => {
  const out = html(h(IconActivity, { className: "h-6 w-6" }));
  assert.match(out, /aria-hidden="true"/);
  assert.match(out, /focusable="false"/);
  assert.doesNotMatch(out, /role="img"/);
  assert.match(out, /class="h-6 w-6"/, "className did not reach the svg");
});

check("naming an icon promotes it to an image", () => {
  for (const prop of ["aria-label", "aria-labelledby"]) {
    const out = html(h(IconActivity, { [prop]: "Activity" }));
    assert.match(out, /role="img"/, `${prop} did not set role`);
    assert.doesNotMatch(out, /aria-hidden/, `${prop} left the icon hidden`);
  }
});

/* The whole point of the rest spread: before this, an icon took four props and
   silently discarded everything else, so it could not be clicked, labelled,
   tested against or styled inline. */
check("arbitrary svg props reach the element", () => {
  const out = html(
    h(IconShoppingCart, {
      id: "cart",
      "data-testid": "cart-icon",
      style: { color: "red" },
      tabIndex: -1,
    }),
  );
  for (const attr of ['id="cart"', 'data-testid="cart-icon"', "color:red", 'tabindex="-1"']) {
    assert.ok(out.includes(attr), `rest prop dropped: ${attr}`);
  }
});

check("the caller can override the defaults", () => {
  const out = html(h(IconActivity, { "aria-hidden": false }));
  assert.doesNotMatch(out, /aria-hidden="true"/);
});

check("all four variants are distinct, and strokeWidth weighs the linework", () => {
  const drawn = ["Outline", "TwoTone", "Bold", "Bulk"].map((variant) =>
    html(h(IconActivity, { variant })),
  );
  assert.equal(new Set(drawn).size, 4, "two variants render the same markup");
  assert.equal(drawn[0], html(h(IconActivity, {})), "the default is not Outline");
  assert.match(drawn[0], /stroke-width="1.5"/, "default stroke width lost");
  assert.match(html(h(IconActivity, { strokeWidth: 2 })), /stroke-width="2"/);
});

/* The two attribute names the old API had taken over for itself. */
check("width and fill reach the element", () => {
  const out = html(h(IconActivity, { width: 32, height: 32, fill: "red" }));
  assert.match(out, /width="32"/);
  assert.match(out, /fill="red"/);
});

console.log(`\nok  ${checked} render checks passed`);
