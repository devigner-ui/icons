import { h } from "vue";

/*
 * The one component behind all 1,963 exports. Each generated module hands this
 * its own four drawings and gets a Vue component back, so the per-icon modules
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
     * only outline and twotone have strokes to weigh. Replaced only when asked
     * for: the default is already baked in at 1.5.
     */
    const html =
      props.strokeWidth == null
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
  Icon.props = {
    variant: { type: String, default: "outline" },
    strokeWidth: { type: [String, Number], default: null },
  };

  return Icon;
}
