import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCategory = forwardRef<SVGSVGElement, IconProps>(function IconCategory(
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
            d="M5.67 10h2q3 0 3-3V5q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.67 10h2q3 0 3-3V5q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.67 22h2q3 0 3-3v-2q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.67 22h2q3 0 3-3v-2q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3"
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
            d="M7.91 2h-1.9C3.82 2 2.67 3.15 2.67 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C11.24 3.15 10.09 2 7.91 2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.34 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33"
            fill="currentColor"
          />
          <path
            d="M19.34 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.91 13.43h-1.9c-2.19 0-3.34 1.15-3.34 3.33v1.9C2.67 20.85 3.82 22 6 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34"
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
            d="M7.91 2h-1.9C3.82 2 2.67 3.15 2.67 5.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9C11.24 3.15 10.09 2 7.91 2"
            fill="currentColor"
          />
          <path
            d="M19.34 2h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33"
            fill="currentColor"
          />
          <path
            d="M19.34 13.43h-1.9c-2.18 0-3.33 1.15-3.33 3.33v1.9c0 2.18 1.15 3.33 3.33 3.33h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c0-2.18-1.15-3.33-3.33-3.33"
            fill="currentColor"
          />
          <path
            d="M7.91 13.43h-1.9c-2.19 0-3.34 1.15-3.34 3.33v1.9C2.67 20.85 3.82 22 6 22h1.9c2.18 0 3.33-1.15 3.33-3.33v-1.9c.01-2.19-1.14-3.34-3.32-3.34"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCategory;
