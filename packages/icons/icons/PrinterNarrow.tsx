import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPrinterNarrow = forwardRef<SVGSVGElement, IconProps>(function IconPrinterNarrow(
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
            d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 15v4q0 3-3 3h-2q-3 0-3-3v-4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.99 15.25Q20.87 18 18 18h-2v-3H8v3H6q-3 0-3-3v-1.76m.01-3.5Q3.13 7 6 7h12q3 0 3 3v1.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 15H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="M7.25 7h9.5V5c0-2-.75-3-3-3h-3.5c-2.25 0-3 1-3 3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 15v4q0 3-3 3h-2q-3 0-3-3v-4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 10v5q0 3-3 3h-2v-3H8v3H6q-3 0-3-3v-5q0-3 3-3h12q3 0 3 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 15H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 11h3"
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
            d="M16 15v4a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-4z"
            fill="currentColor"
          />
          <path
            d="M7 7V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 7H6q-3 0-3 3v5q0 3 3 3h2v-3h8v3h2q3 0 3-3v-5q0-3-3-3m-8 4.75H7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M10.75 11c0 .41-.34.75-.75.75H7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M17 15.75H7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M7 5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3 1 1 0 0 1-1 1H8a1 1 0 0 1-1-1"
            fill="currentColor"
          />
          <path
            d="M17.75 15c0 .41-.34.75-.75.75h-1V19a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-3.25H7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M18 7H6q-3 0-3 3v5q0 3 3 3h.37c.35 0 .63-.28.63-.62 0-.35-.29-.62-.61-.74A1.8 1.8 0 0 1 5.25 15c0-.96.79-1.75 1.75-1.75h10c.96 0 1.75.79 1.75 1.75 0 .75-.48 1.39-1.14 1.64-.32.12-.61.39-.61.73 0 .35.28.63.62.63H18q3 0 3-3v-5q0-3-3-3m-8 4.75H7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPrinterNarrow;
