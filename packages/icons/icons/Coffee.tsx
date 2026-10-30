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
            d="M2 13.4v-3.08a4.2 4.2 0 0 1 4.21-4.21h7.37a4.2 4.2 0 0 1 4.21 4.21v7.32a4.2 4.2 0 0 1-4.21 4.21H6.21A4.2 4.2 0 0 1 2 17.64"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.5 3.85V2.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.5 3.85V2.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13.5 3.85V2.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 13.01a4.2 4.2 0 0 1-4.21 4.21V8.8a4.2 4.2 0 0 1 4.2 4.21Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 11.85h15.51"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M17.79 10.32v7.32a4.2 4.2 0 0 1-4.21 4.21H6.21A4.2 4.2 0 0 1 2 17.64v-7.32a4.2 4.2 0 0 1 4.21-4.21h7.37a4.2 4.2 0 0 1 4.21 4.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.5 3.85V2.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 3.85V2.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.5 3.85V2.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 13.01a4.2 4.2 0 0 1-4.21 4.21V8.8A4.2 4.2 0 0 1 22 13.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 11.85h15.51"
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
            d="M17.96 10.47V12H2.17v-1.53a4.2 4.2 0 0 1 4.21-4.21h7.37a4.2 4.2 0 0 1 4.21 4.21"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.96 12v5.79A4.2 4.2 0 0 1 13.75 22H6.38a4.2 4.2 0 0 1-4.21-4.21V12z"
            fill="currentColor"
          />
          <path
            d="M5.67 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M9.67 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M13.67 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M21.82 14.32a3.9 3.9 0 0 1-3.89 3.89v-7.79a3.9 3.9 0 0 1 3.89 3.9"
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
            d="M5.62 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M9.62 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M13.62 5.12a.76.76 0 0 1-.75-.75V2.62c0-.41.34-.75.75-.75s.75.34.75.75v1.75c0 .42-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M21.87 13.25a5 5 0 0 0-4.59-4.96 4.2 4.2 0 0 0-3.58-2.03H6.33a4.2 4.2 0 0 0-4.21 4.21V11h15.79v-.53q0-.29-.06-.56a3.48 3.48 0 0 1 .06 6.66V12H2.12v5.79A4.2 4.2 0 0 0 6.33 22h7.37a4.2 4.2 0 0 0 4.17-3.86 5 5 0 0 0 4-4.89"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCoffee;
