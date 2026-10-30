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
      {variant === "Broken" ? (
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
            d="M12.92 3.75h-2.64c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.05 4.05 0 0 0 0 5.46l3.53 3.88a5 5 0 0 0 3.7 1.64H17a5 5 0 0 0 5-5v-6.5a5 5 0 0 0-5-5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16 14.47-4.94-4.94"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="m15.21 10.32.8-.79"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
          />
          <path
            d="m11.06 14.47 2.28-2.29"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
            d="M10.28 20.25H17a5 5 0 0 0 5-5v-6.5a5 5 0 0 0-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.05 4.05 0 0 0 0 5.46l3.53 3.88a5 5 0 0 0 3.7 1.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m16 14.47-4.94-4.94"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M11.06 14.47 16 9.53"
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
            d="M10.28 20.25H17a5 5 0 0 0 5-5v-6.5a5 5 0 0 0-5-5h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.05 4.05 0 0 0 0 5.46l3.53 3.88a5 5 0 0 0 3.7 1.64"
            fill="currentColor"
          />
          <path
            d="m14.59 12 1.94-1.94a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-1.94 1.94L11.59 9a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06L12.47 12l-1.94 1.94a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l1.94-1.94L15.47 15q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06z"
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
            d="M17 3.75h-6.72c-1.41 0-2.75.59-3.7 1.64L3.05 9.27a4.05 4.05 0 0 0 0 5.46l3.53 3.88a5 5 0 0 0 3.7 1.64H17a5 5 0 0 0 5-5v-6.5a5 5 0 0 0-5-5m-.47 10.19c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.94-1.94L11.59 15a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06L12.47 12l-1.94-1.94a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l1.94 1.94L15.47 9a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L14.59 12z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTagCross;
