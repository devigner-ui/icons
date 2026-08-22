import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShuffle2 = forwardRef<SVGSVGElement, IconProps>(function IconShuffle2(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  /* The four drawings are two booleans: filled or stroked, and whether the
     secondary shapes drop to half tone. */
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

  /* Decorative by default: an icon sitting beside its own text label is read
     out twice otherwise. Naming it with aria-label or aria-labelledby promotes
     it to an image instead. */
  const labelled =
    rest["aria-label"] != null || rest["aria-labelledby"] != null;
  const a11y: SVGProps<SVGSVGElement> = labelled
    ? { role: "img" }
    : { "aria-hidden": true };

  return (
    <>
      {!fill ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="m3.67 17.98 2.55.01c.91 0 1.76-.45 2.26-1.2l6.39-9.58a2.7 2.7 0 0 1 2.26-1.2l4.55.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.56 8.62-1.08-1.5A2.7 2.7 0 0 0 6.28 6l-2.61.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m19.67 19.98 2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m13.64 15.38 1.22 1.57A2.7 2.7 0 0 0 17.01 18l4.67-.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="m21.67 6.02-2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : duotone ? (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m22.42 17.98-.01-.06q-.01-.12-.05-.23l-.15-.23-.01-.01a.8.8 0 0 0-.53-.22l-4.67.02h-.01c-.6 0-1.18-.28-1.54-.76l-1.22-1.57a.74.74 0 0 0-1.05-.13.74.74 0 0 0-.13 1.05l1.22 1.57A3.5 3.5 0 0 0 17 18.75h.01l2.85-.01-.71.71a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l2-2a1 1 0 0 0 .16-.24q.05-.15.05-.29"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.09 6.69a3.5 3.5 0 0 0-2.8-1.43h-.02l-2.61.01a.76.76 0 0 0-.75.75c0 .41.34.75.75.75l2.61-.01h.01c.63 0 1.22.3 1.58.81l1.08 1.5c.15.2.38.31.61.31a.75.75 0 0 0 .61-1.19z"
            fill="currentColor"
          />
          <path
            d="m22.41 6.08.01-.05q0-.15-.06-.29a1 1 0 0 0-.16-.24l-2-2a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.71.71-2.73-.01h-.02c-1.15 0-2.23.57-2.87 1.54l-6.39 9.58c-.36.54-.97.87-1.62.87h-.01l-2.55-.01a.75.75 0 1 0 0 1.5l2.55.01h.02c1.16 0 2.23-.57 2.87-1.54l6.39-9.58c.36-.54.97-.87 1.62-.87h.01l4.55.02a.8.8 0 0 0 .53-.22l.01-.01q.1-.1.15-.23.04-.12.05-.24"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg
          ref={ref}
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
          {...a11y}
          {...rest}
        >
          <path
            d="m22.42 17.98-.01-.06q-.01-.12-.05-.23l-.15-.23-.01-.01a.8.8 0 0 0-.53-.22l-4.67.02h-.01c-.6 0-1.18-.28-1.54-.76l-1.22-1.57a.74.74 0 0 0-1.05-.13.74.74 0 0 0-.13 1.05l1.22 1.57A3.5 3.5 0 0 0 17 18.75h.01l2.85-.01-.71.71a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l2-2a1 1 0 0 0 .16-.24q.05-.15.05-.29"
            fill="currentColor"
          />
          <path
            d="M9.09 6.69a3.5 3.5 0 0 0-2.8-1.43h-.02l-2.6.01a.76.76 0 0 0-.75.75c0 .41.34.75.75.75l2.61-.01h.01c.63 0 1.22.3 1.58.81l1.08 1.5c.15.2.38.31.61.31a.75.75 0 0 0 .61-1.19z"
            fill="currentColor"
          />
          <path
            d="m22.41 6.08.01-.05q0-.15-.06-.29a1 1 0 0 0-.16-.24l-2-2a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.71.71-2.73-.01h-.02c-1.15 0-2.23.57-2.87 1.54l-6.39 9.58c-.36.54-.97.87-1.62.87h-.01l-2.54-.02a.75.75 0 1 0 0 1.5l2.55.01h.02c1.16 0 2.23-.57 2.87-1.54l6.39-9.58c.36-.54.97-.87 1.62-.87h.01l4.54.02a.8.8 0 0 0 .53-.22l.01-.01q.1-.1.15-.23.04-.1.05-.23"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShuffle2;
