import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTagCross = forwardRef<SVGSVGElement, IconProps>(function IconTagCross(
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
            d="M10.95 20.25h6.72a5 5 0 0 0 5-5v-6.5a5 5 0 0 0-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.72 9.27a4.05 4.05 0 0 0 0 5.46l3.53 3.88a5 5 0 0 0 3.7 1.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m16.67 14.47-4.94-4.94"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m11.73 14.47 4.94-4.94"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          </g>
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
            d="M10.95 20.25h6.72a5 5 0 0 0 5-5v-6.5a5 5 0 0 0-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.72 9.27a4.05 4.05 0 0 0 0 5.46l3.53 3.88a5 5 0 0 0 3.7 1.64"
            fill="currentColor"
          />
          <path
            d="m15.26 12 1.94-1.94a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.94 1.94L12.26 9a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06L13.14 12l-1.94 1.94a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l1.94-1.94L16.14 15q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06z"
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
            d="M17.67 3.75h-6.72c-1.41 0-2.75.59-3.7 1.64L3.72 9.27a4.05 4.05 0 0 0 0 5.46l3.53 3.88a5 5 0 0 0 3.7 1.64h6.72a5 5 0 0 0 5-5v-6.5a5 5 0 0 0-5-5m-.47 10.19c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.94-1.94L12.26 15a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L13.14 12l-1.94-1.94a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.94 1.94L16.14 9a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L15.26 12z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTagCross;
