import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMonitor = forwardRef<SVGSVGElement, IconProps>(function IconMonitor(
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
            d="M2 10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v1c0 2.83 0 4.24-.88 5.12S18.82 17 16 17H8c-2.83 0-4.24 0-5.12-.88S2 13.82 2 11z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 22H8m4-5v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 13H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v3H2v-3c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2"
            fill="currentColor"
          />
          <path
            d="M7.98 17.5c-2.83 0-4.25 0-5.14-.88-.57-.57-.77-1.36-.84-2.62v-1h20v1c-.07 1.26-.27 2.05-.84 2.62-.89.88-2.3.88-5.14.88h-3.27v4h3.27a.75.75 0 1 1 0 1.5H7.98a.75.75 0 1 1 0-1.5h3.27v-4z"
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
            d="M8 17c-2.83 0-4.24 0-5.12-.88-.57-.57-.77-1.36-.84-2.62h19.92c-.07 1.26-.27 2.05-.84 2.62-.88.88-2.3.88-5.12.88h-3.25v4H16a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 8 21h3.25v-4z"
            fill="currentColor"
          />
          <path
            d="M10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v2.5H2V10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMonitor;
