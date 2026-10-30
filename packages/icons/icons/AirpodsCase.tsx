import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirpodsCase = forwardRef<SVGSVGElement, IconProps>(function IconAirpodsCase(
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
            d="M2.62 10.97V8.25q0-1.15.1-2.07C3.1 2.89 4.66 2 8.89 2h6.25c4.22 0 5.78.89 6.14 4.18q.12.92.1 2.07v7.5q.01 1.15-.1 2.08C20.9 21.11 19.35 22 15.12 22H8.88c-4.22 0-5.78-.89-6.14-4.17q-.13-.93-.12-2.08v-.74"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.23 8.92h-4.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.87 8.92h-4.1"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.13 8.92c0 1.13-.92 2.05-2.05 2.05H8.92c-.56 0-1.08-.23-1.45-.61a2.05 2.05 0 0 1 1.45-3.49h6.15c.56 0 1.08.23 1.45.61a2 2 0 0 1 .6 1.44Z"
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
            d="M2.62 15.75v-7.5q0-1.15.11-2.07C3.1 2.89 4.65 2 8.88 2h6.25c4.22 0 5.78.89 6.14 4.18q.12.92.11 2.07v7.5q0 1.15-.11 2.08C20.9 21.11 19.35 22 15.12 22H8.88c-4.22 0-5.78-.89-6.14-4.17q-.13-.93-.12-2.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M21.23 8.92h-4.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.87 8.92h-4.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.13 8.92c0 1.13-.92 2.05-2.05 2.05H8.92c-.56 0-1.08-.23-1.45-.61a2.05 2.05 0 0 1 1.45-3.49h6.15c.56 0 1.08.23 1.45.61a2 2 0 0 1 .61 1.44"
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
            d="M21.5 6.5v11A4.5 4.5 0 0 1 17 22H7a4.5 4.5 0 0 1-4.5-4.5v-11A4.5 4.5 0 0 1 7 2h10a4.5 4.5 0 0 1 4.5 4.5"
            fill="currentColor"
          />
          <path
            d="M21.5 8.17v1.5h-4.13a2.4 2.4 0 0 1-2.29 1.67H8.92a2.4 2.4 0 0 1-2.3-1.67H2.5v-1.5h4.13A2.4 2.4 0 0 1 8.92 6.5h6.15a2.4 2.4 0 0 1 2.3 1.67z"
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
            d="M15.08 11.34H8.92a2.4 2.4 0 0 1-2.08-1.18 1 1 0 0 0-.85-.49H3.5a1 1 0 0 0-1 1v6.83A4.5 4.5 0 0 0 7 22h10a4.5 4.5 0 0 0 4.5-4.5v-6.83a1 1 0 0 0-1-1H18a1 1 0 0 0-.86.51 2.4 2.4 0 0 1-2.06 1.16"
            fill="currentColor"
          />
          <path
            d="M17 2H7a4.5 4.5 0 0 0-4.5 4.5v.67a1 1 0 0 0 1 1H6a1 1 0 0 0 .86-.51A2.4 2.4 0 0 1 8.92 6.5h5.99c.61 0 1.49.32 1.91.75q.19.2.33.42c.18.3.5.5.86.5h2.5a1 1 0 0 0 1-1V6.5A4.5 4.5 0 0 0 17 2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAirpodsCase;
