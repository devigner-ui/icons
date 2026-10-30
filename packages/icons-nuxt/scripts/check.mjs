/*
 * Runs the module against a stand-in Nuxt and asserts on what it registers.
 * Booting a real Nuxt app would test Nuxt; what this package owns is the
 * list of components and where they point.
 *
 *   node scripts/check.mjs        (after a build)
 */
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { runWithNuxtContext } from "@nuxt/kit";

const bundle = new URL("../dist/module.mjs", import.meta.url);
if (!existsSync(bundle)) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

const { default: module } = await import(bundle.href);
const vue = await import("@devigner-ui/icons-vue");

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
}

async function register(config = {}) {
  const hooks = [];
  const nuxt = { options: { ...config }, hook: (name, fn) => name === "components:extend" && hooks.push(fn) };
  await runWithNuxtContext(nuxt, () => module({}, nuxt));
  const components = [];
  for (const fn of hooks) fn(components);
  return components;
}

const components = await register();
const byName = new Map(components.map((c) => [c.pascalName, c]));

check("every icon is registered, with the Icon prefix", () => {
  assert.ok(components.length > 2000, `only ${components.length} components`);
  assert.ok(byName.has("IconBagStraps"));
  assert.ok(byName.has("IconAdd"));
});

check("each one points at a real export of the Vue package", () => {
  for (const c of components) {
    assert.equal(c.filePath, "@devigner-ui/icons-vue");
    assert.equal(typeof vue[c.export], "function", `${c.export} is not exported by icons-vue`);
  }
});

check("no old names: the module starts after the renames", () => {
  assert.ok(!byName.has("IconBag2"));
});

const prefixed = await register({ devignerIcons: { prefix: "Dv" } });
check("the prefix is configurable", () => {
  assert.ok(prefixed.some((c) => c.pascalName === "DvBagStraps"));
  assert.ok(!prefixed.some((c) => c.pascalName === "IconBagStraps"));
});

console.log(`ok  ${checked} checks on the Nuxt module`);
