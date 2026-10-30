import { createComponent, splitProps, mergeProps } from "solid-js";
import { Dynamic } from "solid-js/web";

/*
 * The one component behind every export. Each generated module hands this its
 * own drawings and gets a Solid component back, so the per-icon modules carry
 * artwork and nothing else.
 *
 * No JSX, so there is no compile step to ship or to configure: <Dynamic>
 * builds the <svg> (in the SVG namespace in the browser, as a string on the
 * server), and the getters below keep variant and strokeWidth reactive.
 *
 * The children arrive as markup. It is generated from the React package, not
 * from input, so innerHTML has nothing to inject.
 */
export function icon(drawings) {
  const keys = [...new Set(Object.values(drawings).flatMap((d) => Object.keys(d.attrs)))];

  return function Icon(props) {
    const [local, rest] = splitProps(props, ["variant", "strokeWidth"]);
    const drawing = () => drawings[local.variant] ?? drawings.outline;

    const root = {};
    for (const key of keys) {
      Object.defineProperty(root, key, { enumerable: true, get: () => drawing().attrs[key] });
    }

    return createComponent(
      Dynamic,
      mergeProps(
        root,
        {
          component: "svg",
          focusable: "false",
          /* Decorative by default, as in every package: an icon beside its own
             label is otherwise read out twice. Naming it makes it an image. */
          get role() {
            return labelled(rest) ? "img" : undefined;
          },
          get "aria-hidden"() {
            return labelled(rest) ? undefined : "true";
          },
        },
        rest,
        {
          /* Stroke width is the one prop that reaches inside the drawing, and
             only the linework styles take it, as in @devigner-ui/icons. */
          get innerHTML() {
            const { inner } = drawing();
            return local.strokeWidth == null || !WEIGHED.has(local.variant ?? "outline")
              ? inner
              : inner.replace(/stroke-width="[^"]*"/g, `stroke-width="${local.strokeWidth}"`);
          },
        },
      ),
    );
  };
}

const WEIGHED = new Set(["outline", "twotone", "broken"]);

const labelled = (props) => props["aria-label"] != null || props["aria-labelledby"] != null;
