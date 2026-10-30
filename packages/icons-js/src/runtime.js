/*
 * No framework: an icon is data, and these two functions turn it into markup.
 * Each generated module exports one icon as `{ [style]: { attrs, inner } }`,
 * the same split the Vue and Svelte packages are built from, so the artwork is
 * still the React package's, rendered once at build time.
 *
 * The inner markup is generated from our own components, never from input, so
 * writing it with innerHTML has nothing to inject. Attributes a caller passes
 * are escaped.
 */

/** The styles strokeWidth reaches, as in @devigner-ui/icons. */
const WEIGHED = new Set(["outline", "twotone", "broken"]);

const escape = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");

function parts(icon, { variant = "outline", strokeWidth } = {}) {
  const { attrs, inner } = icon[variant] ?? icon.outline;
  const html =
    strokeWidth == null || !WEIGHED.has(variant)
      ? inner
      : inner.replace(/stroke-width="[^"]*"/g, `stroke-width="${escape(strokeWidth)}"`);
  return { attrs, html };
}

/*
 * Decorative by default, the rule every package follows: an icon beside its
 * own label is otherwise read out twice. An aria-label or aria-labelledby
 * promotes it to an image.
 */
function a11y(attrs) {
  return attrs["aria-label"] != null || attrs["aria-labelledby"] != null
    ? { role: "img" }
    : { "aria-hidden": "true" };
}

/**
 * An icon as an `<svg>` string, for templates, server output and innerHTML.
 * Anything in `attrs` (class, id, aria-label...) lands on the `<svg>`.
 */
export function toSvg(icon, { variant, strokeWidth, attrs = {} } = {}) {
  const { attrs: root, html } = parts(icon, { variant, strokeWidth });
  const all = { ...root, focusable: "false", ...a11y(attrs), ...attrs };
  const list = Object.entries(all)
    .filter(([, value]) => value != null && value !== false)
    .map(([key, value]) => ` ${key}="${escape(value)}"`)
    .join("");
  return `<svg${list}>${html}</svg>`;
}

/**
 * An icon as an SVGElement, for code that builds the DOM itself.
 */
export function toElement(icon, { variant, strokeWidth, attrs = {} } = {}) {
  const { attrs: root, html } = parts(icon, { variant, strokeWidth });
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const all = { ...root, focusable: "false", ...a11y(attrs), ...attrs };
  for (const [key, value] of Object.entries(all)) {
    if (value != null && value !== false) svg.setAttribute(key, String(value));
  }
  svg.innerHTML = html;
  return svg;
}

/**
 * Swaps every `<i data-icon="Name">` under `root` for its `<svg>`. Only the
 * icons passed in `icons` can be drawn, so a page ships the ones it uses:
 *
 *   createIcons({ icons: { IconAdd, IconBagStraps } });
 *
 * `data-variant` and `data-stroke-width` pick the drawing; every other
 * attribute on the placeholder (class, style, aria-label...) moves onto the
 * `<svg>`. Returns how many were replaced.
 */
export function createIcons({ icons, root = document, attribute = "data-icon" } = {}) {
  if (!icons) throw new Error("createIcons needs { icons }: the icons the page uses");
  let count = 0;
  for (const el of root.querySelectorAll(`[${attribute}]`)) {
    const name = el.getAttribute(attribute);
    const icon = icons[`Icon${name}`] ?? icons[name];
    if (!icon) {
      console.warn(`[@devigner-ui/icons-js] ${name} is not in the icons passed to createIcons`);
      continue;
    }
    const attrs = {};
    for (const { name: key, value } of el.attributes) {
      if (key !== attribute && key !== "data-variant" && key !== "data-stroke-width") {
        attrs[key] = value;
      }
    }
    el.replaceWith(
      toElement(icon, {
        variant: el.getAttribute("data-variant") ?? undefined,
        strokeWidth: el.getAttribute("data-stroke-width") ?? undefined,
        attrs,
      }),
    );
    count++;
  }
  return count;
}
