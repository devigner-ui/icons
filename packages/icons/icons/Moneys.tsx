import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoneys = forwardRef<SVGSVGElement, IconProps>(function IconMoneys(
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
            d="M19.97 7.92v5.15c0 3.08-1.76 4.4-4.4 4.4H6.78a6 6 0 0 1-1.99-.32c-1.5-.56-2.41-1.86-2.41-4.08V7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12q.11.59.12 1.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.97 10.92v5.15c0 3.08-1.76 4.4-4.4 4.4H9.78q-1.12 0-1.99-.32a3.5 3.5 0 0 1-2.29-2.81q.6.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92q0-.7-.12-1.28c1.9.4 3.12 1.74 3.12 4.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.17 13.14a2.64 2.64 0 1 0 0-5.28 2.64 2.64 0 0 0 0 5.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.45 8.3v4.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.89 8.3v4.4"
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
            opacity={duotone ? "0.4" : "1"}
            d="M19.97 7.92v5.15c0 3.08-1.76 4.4-4.4 4.4H6.78a6 6 0 0 1-1.99-.32c-1.5-.56-2.41-1.86-2.41-4.08V7.92c0-3.08 1.76-4.4 4.4-4.4h8.79c2.24 0 3.85.95 4.28 3.12q.11.59.12 1.28"
            fill="currentColor"
          />
          <path
            d="M22.97 10.92v5.15c0 3.08-1.76 4.4-4.4 4.4H9.78q-1.12 0-1.99-.32a3.5 3.5 0 0 1-2.29-2.81q.6.13 1.28.13h8.79c2.64 0 4.4-1.32 4.4-4.4V7.92q0-.7-.12-1.28c1.9.4 3.12 1.74 3.12 4.28"
            fill="currentColor"
          />
          <path
            d="M11.17 13.14a2.64 2.64 0 1 0 0-5.28 2.64 2.64 0 0 0 0 5.28"
            fill="currentColor"
          />
          <path
            d="M5.45 8.25A.76.76 0 0 0 4.7 9v3c0 .41.34.75.75.75s.75-.34.75-.75V9a.75.75 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M16.88 8.25a.76.76 0 0 0-.75.75v3c0 .41.34.75.75.75s.75-.34.75-.75V9a.75.75 0 0 0-.75-.75"
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
            d="M19.84 6.64c-.43-2.17-2.04-3.12-4.28-3.12H6.78c-2.64 0-4.4 1.32-4.4 4.4v5.15c0 2.22.91 3.52 2.41 4.08q.33.12.71.19.6.13 1.28.13h8.8c2.63 0 4.4-1.32 4.4-4.4V7.92q0-.7-.14-1.28M6.2 12c0 .41-.34.75-.75.75A.76.76 0 0 1 4.7 12V9c0-.41.34-.75.75-.75s.75.34.75.75zm4.97 1.14a2.64 2.64 0 1 1 0-5.27 2.64 2.64 0 0 1 0 5.27M17.63 12c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9c0-.41.34-.75.75-.75s.75.34.75.75z"
            fill="currentColor"
          />
          <path
            d="M22.97 10.92v5.15c0 3.08-1.76 4.41-4.4 4.41h-8.8q-1.13 0-2-.33a3 3 0 0 1-1.2-.74c-.19-.17-.05-.44.2-.44h8.78c3.7 0 5.9-2.2 5.9-5.89V7.92c0-.24.27-.39.44-.21.68.72 1.07 1.77 1.07 3.21"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMoneys;
