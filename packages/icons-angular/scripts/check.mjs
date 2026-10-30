/*
 * Renders DvIcon on Angular's server platform and asserts on the markup, the
 * same checks the other packages run. The partial-compiled component is
 * linked at runtime by @angular/compiler, as it would be in a JIT test.
 *
 *   node scripts/check.mjs        (after a build)
 */
import "@angular/compiler";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { Component, provideZonelessChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideServerRendering, renderApplication } from "@angular/platform-server";

const bundle = new URL("../dist/index.js", import.meta.url);
if (!existsSync(bundle)) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

const { DvIcon, IconAdd, IconAddCircle, IconActivity } = await import(bundle.href);

let checked = 0;
function check(what, fn) {
  fn();
  checked++;
}

/* One app, one icon per case, each in its own <i> so the cases can be read
   back out of the page apart from each other. */
const Host = Component({
  selector: "app-root",
  standalone: true,
  imports: [DvIcon],
  template: `
    <i id="outline"><svg [dvIcon]="add"></svg></i>
    <i id="bulk"><svg [dvIcon]="add" variant="bulk"></svg></i>
    <i id="weighed"><svg [dvIcon]="add" [strokeWidth]="2"></svg></i>
    <i id="labelled"><svg [dvIcon]="add" aria-label="Add"></svg></i>
    <i id="classed"><svg [dvIcon]="activity" class="h-6 w-6"></svg></i>
    <i id="bold"><svg [dvIcon]="plus" variant="bold"></svg></i>
    <i id="boldWeighed"><svg [dvIcon]="plus" variant="bold" [strokeWidth]="3"></svg></i>
  `,
})(
  class {
    add = IconAddCircle;
    activity = IconActivity;
    plus = IconAdd;
  },
);

const html = await renderApplication(
  (context) =>
    bootstrapApplication(
      Host,
      { providers: [provideZonelessChangeDetection(), provideServerRendering()] },
      context,
    ),
  { document: "<html><body><app-root></app-root></body></html>", url: "/" },
);

const at = (id) => html.match(new RegExp(`<i id="${id}">(<svg.*?</svg>)</i>`, "s"))?.[1] ?? "";
const [outline, bulk, weighed, labelled, classed, bold, boldWeighed] =
  ["outline", "bulk", "weighed", "labelled", "classed", "bold", "boldWeighed"].map(at);

check("an icon renders an <svg> with its artwork", () => {
  assert.match(outline, /viewBox="0 0 24 24"/);
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
  assert.equal(boldWeighed, bold);
});

check("decorative by default, an image once named", () => {
  assert.match(outline, /aria-hidden="true"/);
  assert.match(outline, /focusable="false"/);
  assert.match(labelled, /role="img"/);
  assert.doesNotMatch(labelled, /aria-hidden/);
});

check("variant does not stay on the element", () => {
  assert.doesNotMatch(bulk, /variant=/);
});

check("class falls through to the <svg>", () => {
  assert.match(classed, /class="h-6 w-6"/);
});

console.log(`ok  ${checked} checks on the Angular package`);
