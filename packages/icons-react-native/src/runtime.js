import { createElement as h } from "react";
import Svg, {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  G,
  Path,
  Rect,
} from "react-native-svg";

/*
 * The one component behind all 1,963 exports. Each generated module hands this
 * its own drawings as trees of shapes and gets a component back, so the
 * per-icon modules carry artwork and nothing else.
 *
 * The web packages pass the drawing to the platform as markup and let the
 * browser parse it. There is no parser here, so scripts/parse.mjs did that work
 * at build time and this rebuilds it as react-native-svg elements.
 */
const TAGS = {
  path: Path,
  g: G,
  circle: Circle,
  ellipse: Ellipse,
  rect: Rect,
  defs: Defs,
  clipPath: ClipPath,
};

/** The styles strokeWidth reaches. */
const WEIGHED = new Set(["outline", "twotone", "broken"]);

function element(node, key, strokeWidth) {
  /*
   * Weighed only where there is linework to weigh. Setting strokeWidth on a
   * filled shape that never had one would draw an outline around the fill,
   * which is why this looks at the node rather than at the style name.
   */
  const props =
    strokeWidth != null && node.props.strokeWidth != null
      ? { ...node.props, strokeWidth }
      : node.props;

  return h(
    TAGS[node.tag],
    { key, ...props },
    node.children?.map((child, i) => element(child, i, strokeWidth)),
  );
}

/*
 * An old icon name, kept working after a rename: the new component under the
 * old name, plus one console warning in development. scripts/build.mjs writes
 * one per entry in @devigner-ui/icons' scripts/renames.json.
 *
 * __DEV__ is React Native's own flag, defined by Metro; it is false in a
 * release bundle, so the warning never reaches a shipped app.
 */
const warned = new Set();

export function renamed(Component, from, message) {
  return function Alias(props) {
    if (typeof __DEV__ !== "undefined" && __DEV__ && !warned.has(from)) {
      warned.add(from);
      console.warn(`[@devigner-ui/icons-react-native] ${message}`);
    }
    return h(Component, props);
  };
}

export function icon(drawings) {
  return function Icon({
    variant = "outline",
    size = 24,
    color,
    strokeWidth,
    accessibilityLabel,
    ...rest
  }) {
    const drawing = drawings[variant] ?? drawings.outline;

    /*
     * There is no cascade in React Native, so `currentColor` has nothing to
     * inherit from. react-native-svg resolves it against the `color` prop on
     * the root, which is what this prop is: the CSS `color` an app would have
     * set on an ancestor on the web.
     */
    return h(
      Svg,
      {
        width: size,
        height: size,
        viewBox: drawing.viewBox,
        fill: "none",
        color,
        /*
         * Decorative by default, the same rule the React components follow,
         * spelled the way the platform spells it. An icon beside its own text
         * label is read out twice otherwise.
         */
        ...(accessibilityLabel != null
          ? { accessible: true, accessibilityRole: "image", accessibilityLabel }
          : {
              accessibilityElementsHidden: true,
              importantForAccessibility: "no-hide-descendants",
            }),
        ...rest,
      },
      /* Only the linework styles take strokeWidth, as in @devigner-ui/icons:
         some Bold drawings are strokes too, at a fixed weight. */
      drawing.tree.map((node, i) =>
        element(node, i, WEIGHED.has(variant) ? strokeWidth : undefined),
      ),
    );
  };
}
