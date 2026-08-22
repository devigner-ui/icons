import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWind2 = forwardRef<SVGSVGElement, IconProps>(function IconWind2(
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
            opacity={duotone ? "0.4" : "1"}
            d="m2.67 13.1 2.5-1.5a4.9 4.9 0 0 1 5 0c1.54.92 3.46.92 5 0a4.9 4.9 0 0 1 5 0l2.5 1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m2.67 3.9 2.5 1.5c1.54.92 3.46.92 5 0a4.9 4.9 0 0 1 5 0c1.54.92 3.46.92 5 0l2.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m2.67 20.1 2.5-1.5a4.9 4.9 0 0 1 5 0c1.54.92 3.46.92 5 0a4.9 4.9 0 0 1 5 0l2.5 1.5"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M22.67 13.85a1 1 0 0 1-.38-.11l-2.5-1.5a4.1 4.1 0 0 0-4.23 0 5.6 5.6 0 0 1-5.77 0 4.1 4.1 0 0 0-4.23 0l-2.5 1.5a.75.75 0 1 1-.77-1.29l2.5-1.5a5.6 5.6 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.6 5.6 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.8.8 0 0 1-.65.37"
              fill="currentColor"
            />
          </g>
          <path
            d="M7.67 6.85c-1 0-2-.27-2.89-.8l-2.5-1.5a.75.75 0 0 1-.26-1.03.75.75 0 0 1 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.6 5.6 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.75.75 0 1 1 .77 1.29l-2.5 1.5a5.6 5.6 0 0 1-5.77 0 4.1 4.1 0 0 0-4.23 0c-.88.53-1.88.8-2.88.8"
            fill="currentColor"
          />
          <path
            d="M22.67 20.85a1 1 0 0 1-.38-.11l-2.5-1.5a4.1 4.1 0 0 0-4.23 0 5.6 5.6 0 0 1-5.77 0 4.1 4.1 0 0 0-4.23 0l-2.5 1.5a.75.75 0 1 1-.77-1.29l2.5-1.5a5.6 5.6 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.6 5.6 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.8.8 0 0 1-.65.37"
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
            d="M22.67 13.85a1 1 0 0 1-.38-.11l-2.5-1.5a4.1 4.1 0 0 0-4.23 0 5.6 5.6 0 0 1-5.77 0 4.1 4.1 0 0 0-4.23 0l-2.5 1.5a.75.75 0 1 1-.77-1.29l2.5-1.5a5.6 5.6 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.6 5.6 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.8.8 0 0 1-.65.37"
            fill="currentColor"
          />
          <path
            d="M7.67 6.85c-1 0-2-.27-2.89-.8l-2.5-1.5a.75.75 0 0 1-.25-1.03.75.75 0 0 1 1.03-.26l2.5 1.5c1.3.78 2.92.78 4.23 0a5.6 5.6 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0l2.5-1.5a.75.75 0 1 1 .77 1.29l-2.5 1.5a5.6 5.6 0 0 1-5.77 0 4.1 4.1 0 0 0-4.23 0c-.89.53-1.89.8-2.89.8"
            fill="currentColor"
          />
          <path
            d="M22.67 20.85a1 1 0 0 1-.38-.11l-2.5-1.5a4.1 4.1 0 0 0-4.23 0 5.6 5.6 0 0 1-5.77 0 4.1 4.1 0 0 0-4.23 0l-2.5 1.5a.75.75 0 1 1-.77-1.29l2.5-1.5a5.6 5.6 0 0 1 5.77 0c1.3.78 2.92.78 4.23 0a5.6 5.6 0 0 1 5.77 0l2.5 1.5c.36.21.47.67.26 1.03a.8.8 0 0 1-.65.37"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWind2;
