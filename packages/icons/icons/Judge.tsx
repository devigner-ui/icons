import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconJudge = forwardRef<SVGSVGElement, IconProps>(function IconJudge(
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
            d="m20.68 18.51-4.95-4.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m15.73 13.56-3.54 3.54a2 2 0 0 1-2.83 0l-4.24-4.24a2 2 0 0 1 0-2.83l7.07-7.07a2 2 0 0 1 2.83 0l4.24 4.24a2 2 0 0 1 0 2.83z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 21h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7.23 7.92 7.07 7.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M21.21 19.04a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-4.95-4.95.53-.53.53-.53 4.95 4.95c.29.29.29.77 0 1.06"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7.14 9.28 5.8 5.8a1 1 0 0 1 0 1.41l-.9.91c-.81.8-2.09.8-2.89 0l-4.34-4.34a2.05 2.05 0 0 1 0-2.88l.91-.91a1 1 0 0 1 1.42.01"
            fill="currentColor"
          />
          <path
            d="m19.26 10.19-3.81 3.8c-.4.4-1.04.4-1.44 0L8.24 8.22c-.4-.4-.4-1.04 0-1.44l3.81-3.81a2.05 2.05 0 0 1 2.88 0l4.34 4.34c.78.79.78 2.07-.01 2.88"
            fill="currentColor"
          />
          <path
            d="M8.67 21.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M21.21 19.04a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-4.95-4.95.53-.53.53-.53 4.95 4.95c.29.29.29.77 0 1.06"
            fill="currentColor"
          />
          <path
            d="m7.14 9.28 5.8 5.8a1 1 0 0 1 0 1.41l-.9.91c-.81.8-2.09.8-2.89 0l-4.34-4.34a2.05 2.05 0 0 1 0-2.88l.91-.91a1 1 0 0 1 1.42.01"
            fill="currentColor"
          />
          <path
            d="m19.26 10.19-3.81 3.8c-.4.4-1.04.4-1.44 0L8.23 8.21c-.4-.4-.4-1.04 0-1.44l3.81-3.81a2.05 2.05 0 0 1 2.88 0l4.34 4.34c.79.8.79 2.08 0 2.89"
            fill="currentColor"
          />
          <path
            d="M8.67 21.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconJudge;
