/*
 * The one renderer every compiled icon shares.
 *
 * The drawings in this directory are written as full components, which is the
 * right shape to edit and the wrong one to ship: each carried its own copy of
 * the <svg> wrapper four times over and rebuilt every <path> element on every
 * render. scripts/compile-icons.mjs turns a built component into plain data,
 * and these factories put it back on screen:
 *
 *   icon([outline, bold, bulk, broken], ids, dims)
 *                              the `variant` prop, as always
 *   one(drawing, ids, dims)    a single style, for /outline, /bold…
 *   fixed(Icon, variant)       a single style of an icon that could not be
 *                              compiled, by pinning its prop
 *
 * Each ESM module passes its drawings inline; the CommonJS ones share
 * dist/data/<Name>.cjs. compile-icons.mjs says why.
 *
 * A drawing is a list of [tag, attributes, children?]. Two values in it are
 * not literal:
 *
 *   strokeWidth: 0    where the source said strokeWidth={strokeWidth}
 *   "~"               where it used the id from useId(), for a mask or clip
 *
 * A drawing with a "~" in it is passed with `ids` set, and the component then
 * calls useId() once, as the source did.
 *
 * TwoTone is the outline with some shapes at 0.4, so it is not a drawing of
 * its own but `dims`: the indexes of those shapes. Kept apart from the outline
 * so /outline does not carry it. A fifth drawing in icon()'s list is a TwoTone
 * that is more than that (a dimmed shape inside a group, another opacity).
 *
 * The elements are built once per stroke width and reused, so a re-render
 * hands React the same objects and it skips the paths entirely.
 *
 * The markup is what the hand-written components produce, attribute for
 * attribute. compile-icons.mjs renders both and refuses any icon that differs.
 *
 * This is a .ts, not a .tsx: sync.mjs treats every .tsx in here as an icon.
 */
import { createElement, forwardRef, useId } from "react";
import type {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
} from "react";
import type { IconProps } from "./types";

type IconComponentType = ForwardRefExoticComponent<
  IconProps & RefAttributes<SVGSVGElement>
>;

type Attrs = Record<string, string | number>;
type Shape = [tag: string, attrs: Attrs, children?: Shape[]];
type Built = [
  strokeWidth: IconProps["strokeWidth"],
  shapes: ReactElement[],
  id?: string,
];

function build(
  shapes: Shape[],
  strokeWidth: Built[0],
  dims: number[] | undefined,
  id?: string,
): ReactElement[] {
  return shapes.map(([tag, source, children], index) => {
    const attrs: Record<string, unknown> = {};
    /* First: that is where the sources write it. */
    if (dims && dims.includes(index)) attrs.opacity = "0.4";
    for (const key in source) {
      const value = source[key];
      if (key === "strokeWidth" && value === 0) {
        attrs[key] = strokeWidth;
      } else {
        attrs[key] =
          id && typeof value === "string" ? value.split("~").join(id) : value;
      }
    }
    return children
      ? createElement(tag, attrs, ...build(children, strokeWidth, undefined, id))
      : createElement(tag, attrs);
  });
}

function svg(
  rest: Record<string, unknown>,
  ref: unknown,
  shapes: ReactElement[],
): ReactElement {
  /* className is declared up front so it keeps its place ahead of width when
     the caller passes one: attribute order is part of the markup. */
  const attrs: Record<string, unknown> = {
    ref,
    className: undefined,
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
  };
  /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
  if (rest["aria-label"] != null || rest["aria-labelledby"] != null) {
    attrs.role = "img";
  } else {
    attrs["aria-hidden"] = true;
  }
  return createElement("svg", Object.assign(attrs, rest), ...shapes);
}

export function icon(
  drawings: Shape[][],
  ids?: boolean | number,
  dims?: number[],
): IconComponentType {
  const built: Built[] = [];
  return forwardRef<SVGSVGElement, IconProps>(function (
    { variant, strokeWidth = "1.5", ...rest },
    ref,
  ) {
    /* Outline 0, TwoTone 1, Bold 2, Bulk 3, Broken 4. Anything else draws
       Outline, which is what the ternary in the sources always did. */
    const slot =
      variant === "Broken" ? 4
      : variant === "Bold" ? 2
      : variant === "Bulk" ? 3
      : variant === "TwoTone" ? 1
      : 0;
    /* `ids` never changes for a component, so the hook order holds. */
    const id = ids ? useId() : undefined;
    let hit = built[slot];
    if (!hit || hit[0] !== strokeWidth || hit[2] !== id) {
      /* TwoTone is the outline dimmed, unless the icon brought a drawing of
         its own for it. */
      const own = slot === 1 && drawings[4];
      hit = built[slot] = [
        strokeWidth,
        build(
          own || drawings[slot ? slot - 1 : 0],
          strokeWidth,
          slot === 1 && !own ? dims : undefined,
          id,
        ),
        id,
      ];
    }
    return svg(rest, ref, hit[1]);
  });
}

export function one(
  drawing: Shape[],
  ids?: boolean | number,
  dims?: number[],
): IconComponentType {
  let hit: Built | undefined;
  return forwardRef<SVGSVGElement, IconProps>(function (
    /* variant is taken out so a stray one cannot reach the <svg>. */
    { variant, strokeWidth = "1.5", ...rest },
    ref,
  ) {
    const id = ids ? useId() : undefined;
    if (!hit || hit[0] !== strokeWidth || hit[2] !== id) {
      hit = [strokeWidth, build(drawing, strokeWidth, dims, id), id];
    }
    return svg(rest, ref, hit[1]);
  });
}

export function fixed(
  Icon: IconComponentType,
  variant: IconProps["variant"],
): IconComponentType {
  return forwardRef<SVGSVGElement, IconProps>(function (props, ref) {
    return createElement(Icon, { ...props, variant, ref });
  });
}
