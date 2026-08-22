import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirpod = forwardRef<SVGSVGElement, IconProps>(function IconAirpod(
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
            d="M3.29 15.75v-7.5q0-1.15.11-2.07C3.77 2.89 5.32 2 9.55 2h6.25c4.22 0 5.78.89 6.14 4.18q.12.92.11 2.07v7.5q0 1.15-.11 2.08c-.37 3.28-1.92 4.17-6.15 4.17H9.55c-4.22 0-5.78-.89-6.14-4.17q-.13-.93-.12-2.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M21.9 8.92h-4.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.54 8.92h-4.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.8 8.92c0 1.13-.92 2.05-2.05 2.05H9.59c-.56 0-1.08-.23-1.45-.61a2.05 2.05 0 0 1 1.45-3.49h6.15c.56 0 1.08.23 1.45.61a2 2 0 0 1 .61 1.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
            d="M22.17 6.5v11a4.5 4.5 0 0 1-4.5 4.5h-10a4.5 4.5 0 0 1-4.5-4.5v-11A4.5 4.5 0 0 1 7.67 2h10a4.5 4.5 0 0 1 4.5 4.5"
            fill="currentColor"
          />
          <path
            d="M22.17 8.17v1.5h-4.13a2.4 2.4 0 0 1-2.29 1.67H9.59a2.4 2.4 0 0 1-2.3-1.67H3.17v-1.5H7.3A2.4 2.4 0 0 1 9.59 6.5h6.15a2.4 2.4 0 0 1 2.3 1.67z"
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
            d="M15.75 11.34H9.59a2.4 2.4 0 0 1-2.08-1.18 1 1 0 0 0-.85-.49H4.17a1 1 0 0 0-1 1v6.83a4.5 4.5 0 0 0 4.5 4.5h10a4.5 4.5 0 0 0 4.5-4.5v-6.83a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-.86.51 2.4 2.4 0 0 1-2.06 1.16"
            fill="currentColor"
          />
          <path
            d="M17.67 2h-10a4.5 4.5 0 0 0-4.5 4.5v.67a1 1 0 0 0 1 1h2.5a1 1 0 0 0 .86-.51A2.4 2.4 0 0 1 9.59 6.5h5.99c.61 0 1.49.32 1.91.75q.19.2.33.42c.18.3.5.5.86.5h2.5a1 1 0 0 0 1-1V6.5A4.5 4.5 0 0 0 17.67 2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAirpod;
