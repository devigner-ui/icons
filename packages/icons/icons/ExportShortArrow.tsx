import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconExportShortArrow = forwardRef<SVGSVGElement, IconProps>(function IconExportShortArrow(
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
            d="m9.32 6.5 2.56-2.56 2.56 2.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.88 14.18V4.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12c0 3.57 1.96 6.6 5.35 7.62m3.47.35C17.33 19.6 20 16.17 20 12"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m9.32 6.5 2.56-2.56 2.56 2.56"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.88 14.18V4.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M4 12c0 4.42 3 8 8 8s8-3.58 8-8"
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
            d="M22 10.76a.86.86 0 0 0-.86-.86H2.86a.85.85 0 0 0-.86.86c0 5.89 4.11 10 10 10s10-4.12 10-10"
            fill="currentColor"
          />
          <path
            d="m12.53 3.46 2.85 2.84c.29.29.29.77 0 1.06a.75.75 0 0 1-1.06 0L12.75 5.8v9.57c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V5.8L9.69 7.37a.75.75 0 0 1-1.06 0 .8.8 0 0 1-.23-.53q0-.3.22-.53l2.85-2.84c.29-.3.77-.3 1.06-.01"
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
            d="M21.14 9.9h-8.39v5.48c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9.9H2.86a.85.85 0 0 0-.86.86c0 5.89 4.11 10 10 10s10-4.11 10-10a.85.85 0 0 0-.86-.86"
            fill="currentColor"
          />
          <path
            d="m12.75 5.8 1.56 1.56c.29.29.77.29 1.06 0a.75.75 0 0 0 0-1.06l-2.85-2.84a.75.75 0 0 0-1.06 0L8.62 6.31a.8.8 0 0 0-.22.53q0 .3.22.53c.29.29.77.29 1.06 0l1.56-1.56V9.9h1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconExportShortArrow;
