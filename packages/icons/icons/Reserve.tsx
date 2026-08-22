import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReserve = forwardRef<SVGSVGElement, IconProps>(function IconReserve(
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
            d="M19.64 22h-14c-3 0-3-1.35-3-3v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1c0 1.65 0 3-3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.39 13v4H3.94v-4a8 8 0 0 1 8-8h1.45q.88 0 1.69.18A8 8 0 0 1 21.39 13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.17 4.5q0 .36-.09.68A8 8 0 0 0 13.39 5h-1.45q-.87 0-1.68.18a2.5 2.5 0 1 1 4.91-.68"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.67 11h-6"
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
            d="M22.64 18v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.39 13v4H3.94v-4a8 8 0 0 1 8-8h1.45q.88 0 1.69.18A8 8 0 0 1 21.39 13"
            fill="currentColor"
          />
          <path
            d="M15.17 4.5q0 .36-.09.68A8 8 0 0 0 13.39 5h-1.45q-.87 0-1.68.18a2.5 2.5 0 1 1 4.91-.68"
            fill="currentColor"
          />
          <path
            d="M15.67 11.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M22.64 18v1c0 1.65 0 3-3 3h-14c-3 0-3-1.35-3-3v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M15.08 5.18a3 3 0 0 0 .09-.6 2.5 2.5 0 1 0-4.91.6A8 8 0 0 0 3.94 13v1.5a1 1 0 0 0 1 1h15.45a1 1 0 0 0 1-1V13a8 8 0 0 0-6.31-7.82m.59 6.57h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.4 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconReserve;
