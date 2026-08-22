import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCoffee = forwardRef<SVGSVGElement, IconProps>(function IconCoffee(
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
            d="M18.46 10.47v7.32A4.2 4.2 0 0 1 14.25 22H6.88a4.2 4.2 0 0 1-4.21-4.21v-7.32a4.2 4.2 0 0 1 4.21-4.21h7.37a4.2 4.2 0 0 1 4.21 4.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.17 4V2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.17 4V2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.17 4V2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 13.16a4.2 4.2 0 0 1-4.21 4.21V8.95a4.2 4.2 0 0 1 4.21 4.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 12h15.51"
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
            d="M18.46 10.47V12H2.67v-1.53a4.2 4.2 0 0 1 4.21-4.21h7.37a4.2 4.2 0 0 1 4.21 4.21"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.46 12v5.79A4.2 4.2 0 0 1 14.25 22H6.88a4.2 4.2 0 0 1-4.21-4.21V12z"
            fill="currentColor"
          />
          <path
            d="M6.17 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M10.17 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M14.17 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M22.32 14.32a3.9 3.9 0 0 1-3.89 3.89v-7.79a3.9 3.9 0 0 1 3.89 3.9"
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
            d="M6.67 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M10.67 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M14.67 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M22.92 13.25a5 5 0 0 0-4.59-4.96 4.2 4.2 0 0 0-3.58-2.03H7.38a4.2 4.2 0 0 0-4.21 4.21V11h15.79v-.53q0-.29-.06-.56a3.48 3.48 0 0 1 .06 6.66V12H3.17v5.79A4.2 4.2 0 0 0 7.38 22h7.37a4.2 4.2 0 0 0 4.17-3.86 5 5 0 0 0 4-4.89"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCoffee;
