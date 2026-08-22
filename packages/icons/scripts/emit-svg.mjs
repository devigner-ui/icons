/*
 * The one place JSX becomes SVG.
 *
 * There were two before this, both regex-parsing the component sources for
 * `<svg>…</svg>` and both wrong in their own way: generate-copy-paste.mjs wrote
 * files still carrying `strokeWidth` and `fillRule` in camelCase, attribute
 * names no SVG parser knows, so even-odd holes and stroke joins quietly went
 * missing, and it mapped the three JSX branches onto four styles by position,
 * which had already once shipped bulk artwork labelled twotone.
 *
 * Nothing here reads the sources. It renders the built components the same way
 * render-check.mjs and `icons copy --svg` do, so React does the attribute
 * casing, resolves the duotone opacity and picks the branch, and there is no
 * second copy of the artwork to drift away from dist/index.js.
 *
 * A library, not a writer: @devigner-ui/icons-svg is what turns this into files
 * on disk, because 8,568 drawings are 5.6MB that every React consumer would
 * otherwise install to never open. Run directly, it renders the whole set and
 * asserts on it, the check that the build did not lose artwork.
 *
 *   node scripts/emit-svg.mjs
 */
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { createElement as h } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const DIST = new URL("dist/", new URL("../", import.meta.url));

export const STYLES = ["outline", "twotone", "bold", "bulk"];

/** The lowercase names the data files and URLs use, as the component's prop. */
const VARIANT = {
  outline: "Outline",
  twotone: "TwoTone",
  bold: "Bold",
  bulk: "Bulk",
};

/*
 * The components are decorative by default, which is right for an icon sitting
 * beside its own label inside an app and wrong for a file on a CDN: whoever
 * embeds it decides whether it is an image or a decoration. Two fixed
 * attributes, removed by name, not a parser.
 */
function forFile(markup) {
  return markup
    .replace(' aria-hidden="true"', "")
    .replace(' focusable="false"', "");
}

/** Every drawing, keyed by icon name then style. Renders, never parses. */
export async function allSvgs(only) {
  const bundle = new URL("index.js", DIST);
  if (!existsSync(bundle)) {
    throw new Error("dist/index.js is missing. Run `pnpm build` first.");
  }

  const mod = await import(bundle.href);
  const wanted = only && new Set(only);
  const out = new Map();

  for (const [exportName, Icon] of Object.entries(mod)) {
    if (!exportName.startsWith("Icon") || typeof Icon !== "object") continue;
    const name = exportName.slice(4);
    if (wanted && !wanted.has(name)) continue;

    const drawings = {};
    for (const style of STYLES) {
      const markup = forFile(
        renderToStaticMarkup(h(Icon, { variant: VARIANT[style] })),
      );
      /* A style that renders to nothing is a build that lost artwork, which is
         the failure this whole file exists to make impossible to ship. */
      assert.match(markup, /^<svg[\s>]/, `${name} ${style} is not an <svg>`);
      /* Shapes, not paths: MenuDots and its neighbours are drawn with
         <circle>, and a `d="` check calls those empty. */
      assert.match(
        markup,
        /<(path|circle|rect|ellipse|line|polyline|polygon)\b/,
        `${name} ${style} has no artwork`,
      );
      assert.doesNotMatch(
        markup,
        /aria-hidden|strokeWidth|fillRule/,
        `${name} ${style} kept a JSX-only attribute`,
      );
      drawings[style] = markup;
    }
    out.set(name, drawings);
  }

  assert.ok(out.size > 0, "the bundle exported no icons");
  return out;
}

/**
 * Root attributes and children, so a framework that builds its own element can
 * take the drawing without the `<svg>` React chose to wrap it in. The attribute
 * names are already SVG spellings; that happened in the render.
 */
export function splitSvg(svg) {
  const open = svg.match(/^<svg([^>]*)>/);
  assert.ok(open, "not an <svg> element");

  const attrs = {};
  for (const [, key, value] of open[1].matchAll(/([\w:-]+)="([^"]*)"/g)) {
    attrs[key] = value;
  }

  return {
    attrs,
    inner: svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, ""),
  };
}

/** `<symbol>` keeps the viewBox and drops the outer width/height. */
export function symbolFor(name, svg) {
  const viewBox = svg.match(/viewBox="([^"]*)"/)?.[1] ?? "0 0 24 24";
  const inner = svg.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "");
  return `<symbol id="${name}" viewBox="${viewBox}">${inner}</symbol>`;
}

/* Every assertion above runs on every drawing, so rendering the set is the
   check. Metadata is the second opinion: it is generated from the same sources
   by a different script, and a disagreement means one of them is stale. */
async function main() {
  const icons = await allSvgs();
  const meta = JSON.parse(
    readFileSync(new URL("metadata.json", DIST), "utf8"),
  );

  assert.equal(
    icons.size,
    meta.icons.length,
    `rendered ${icons.size} icons, metadata.json lists ${meta.icons.length}`,
  );

  console.log(`ok  ${icons.size} icons x ${STYLES.length} styles render clean`);
}

/* Importable by the Vue and Svelte generators; runnable on its own. String
   comparison against argv[1] fails on Windows: the path arrives back-slashed
   and unencoded, the URL does not, so let node do the conversion. */
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main();
}
