import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCheck = forwardRef<SVGSVGElement, IconProps>(function IconCheck(
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
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5 13.26 2.59 2.7c.66.7 1 1.04 1.41 1.04s.75-.35 1.41-1.04L19 7"
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
            d="M10.1 16.77a1 1 0 0 1-.7-.29l-3.77-3.77a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l3.07 3.07 6.85-6.85a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41l-7.56 7.56a1 1 0 0 1-.7.3"
            fill="currentColor"
          />
          <path
            d="M9.4 16.48a1 1 0 0 0 1.41 0l7.56-7.56a1 1 0 0 0 0-1.41 1 1 0 0 0-1.41 0l-6.85 6.85-1.42 1.41z"
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
            d="M10.1 16.77a1 1 0 0 1-.7-.29l-3.77-3.77a1 1 0 0 1 0-1.42 1 1 0 0 1 1.41 0l3.07 3.07 6.85-6.85a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41l-7.56 7.56a1 1 0 0 1-.7.3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCheck;
