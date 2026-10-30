import { h } from "vue";

/*
 * The one component behind all 1,963 exports. Each generated module hands this
 * its own drawings and gets a Vue component back, so the per-icon modules
 * carry artwork and nothing else, which is what keeps them tree-shakeable and
 * what stops 1,963 copies of this logic existing.
 *
 * The children arrive as markup rather than vnodes. Building vnodes would mean
 * parsing SVG at build time into a second representation of the same drawing;
 * `innerHTML` hands Vue exactly the string the React package renders, and the
 * string is generated from that package rather than authored here, so there is
 * nothing for a user to inject into.
 */
export function icon(drawings) {
  function Icon(props, { attrs }) {
    const { attrs: root, inner } = drawings[props.variant] ?? drawings.outline;

    /*
     * Stroke width is the one prop that has to reach inside the drawing, and
     * only the linework styles take it. Some Bold drawings are strokes too, at
     * a fixed weight the React package does not let strokeWidth move, so the
     * style decides, not the presence of a stroke-width. Replaced only when
     * asked for: the default is already baked in at 1.5.
     */
    const html =
      props.strokeWidth == null || !WEIGHED.has(props.variant)
        ? inner
        : inner.replace(
            /stroke-width="[^"]*"/g,
            `stroke-width="${props.strokeWidth}"`,
          );

    /*
     * Decorative by default, the same rule the React components follow: an icon
     * beside its own text label is read out twice otherwise. Naming it with
     * aria-label or aria-labelledby promotes it to an image.
     */
    const labelled =
      attrs["aria-label"] != null || attrs["aria-labelledby"] != null;

    return h("svg", {
      ...root,
      focusable: "false",
      ...(labelled ? { role: "img" } : { "aria-hidden": "true" }),
      innerHTML: html,
    });
  }

  /* Declared, so Vue keeps them out of the attrs that fall through to the
     <svg>. An undeclared `variant` would land on the element as an attribute. */
  Icon.props = PROPS;

  return Icon;
}

/** The styles strokeWidth reaches, as in @devigner-ui/icons. */
const WEIGHED = new Set(["outline", "twotone", "broken"]);

const PROPS = {
  variant: { type: String, default: "outline" },
  strokeWidth: { type: [String, Number], default: null },
};

/*
 * An old icon name, kept working after a rename: the new component under the
 * old name, plus one console warning in development. scripts/build.mjs writes
 * one per entry in @devigner-ui/icons' scripts/renames.json.
 *
 * Silent in production: bundlers replace process.env.NODE_ENV with a literal
 * and the warning drops out. Where nothing replaces it, `process` does not
 * exist and the catch keeps the alias rendering instead of throwing.
 */
const warned = new Set();

export function renamed(component, from, message) {
  function Alias(props) {
    let development = false;
    try {
      development = process.env.NODE_ENV !== "production";
    } catch {}
    if (development && !warned.has(from)) {
      warned.add(from);
      console.warn(`[@devigner-ui/icons-vue] ${message}`);
    }
    /* Only the declared props are passed on: everything else falls through
       to the root on its own, and passing attrs again would double classes. */
    return h(component, { variant: props.variant, strokeWidth: props.strokeWidth });
  }
  Alias.props = PROPS;
  return Alias;
}
