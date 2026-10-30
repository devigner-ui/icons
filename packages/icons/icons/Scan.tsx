import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScan = forwardRef<SVGSVGElement, IconProps>(function IconScan(
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
            d="M2 9V6.5A4.5 4.5 0 0 1 6.5 2H9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 2h2.5A4.5 4.5 0 0 1 22 6.5V9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 16v1.5a4.5 4.5 0 0 1-4.5 4.5H16"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 22H6.5A4.5 4.5 0 0 1 2 17.5V15"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17 9.5v5q0 3-3 3h-4q-3 0-3-3v-5q0-3 3-3h4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M19 12H5"
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
            d="M2 9V6.5A4.5 4.5 0 0 1 6.5 2H9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 2h2.5A4.5 4.5 0 0 1 22 6.5V9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 16v1.5a4.5 4.5 0 0 1-4.5 4.5H16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22H6.5A4.5 4.5 0 0 1 2 17.5V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17 9.5v5q0 3-3 3h-4q-3 0-3-3v-5q0-3 3-3h4q3 0 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 12H5"
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
            d="M2.77 10A.76.76 0 0 1 2 9.23V6.92A4.93 4.93 0 0 1 6.92 2h2.31c.43 0 .77.34.77.77s-.34.77-.77.77H6.92a3.4 3.4 0 0 0-3.38 3.38v2.31c0 .43-.35.77-.77.77"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.23 10a.77.77 0 0 1-.77-.77V6.92a3.4 3.4 0 0 0-3.38-3.38h-2.31a.77.77 0 0 1 0-1.54h2.31A4.93 4.93 0 0 1 22 6.92v2.31c0 .43-.34.77-.77.77"
            fill="currentColor"
          />
          <path
            d="M17.08 22h-1.39a.77.77 0 0 1 0-1.54h1.39a3.4 3.4 0 0 0 3.38-3.38V15.7a.77.77 0 0 1 1.54 0v1.38A4.93 4.93 0 0 1 17.08 22"
            fill="currentColor"
          />
          <path
            d="M9.23 22H6.92A4.93 4.93 0 0 1 2 17.08v-2.31c0-.43.34-.77.77-.77s.77.34.77.77v2.31a3.4 3.4 0 0 0 3.38 3.38h2.31a.77.77 0 0 1 0 1.54"
            fill="currentColor"
          />
          <path
            d="M18.46 11.23H5.54a.77.77 0 0 0 0 1.54h12.92a.77.77 0 0 0 0-1.54"
            fill="currentColor"
          />
          <path
            d="M6.9 13.94v.33a3 3 0 0 0 3 3h4.2a3 3 0 0 0 3-3v-.33a.2.2 0 0 0-.21-.21H7.11a.2.2 0 0 0-.21.21"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.9 10.06v-.33a3 3 0 0 1 3-3h4.2a3 3 0 0 1 3 3v.33a.2.2 0 0 1-.21.21H7.11a.2.2 0 0 1-.21-.21"
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
            d="M2.77 10A.76.76 0 0 1 2 9.23V6.92A4.93 4.93 0 0 1 6.92 2h2.31c.43 0 .77.34.77.77s-.34.77-.77.77H6.92a3.4 3.4 0 0 0-3.38 3.38v2.31c0 .43-.35.77-.77.77"
            fill="currentColor"
          />
          <path
            d="M21.23 10a.77.77 0 0 1-.77-.77V6.92a3.4 3.4 0 0 0-3.38-3.38h-2.31a.77.77 0 0 1 0-1.54h2.31A4.93 4.93 0 0 1 22 6.92v2.31c0 .43-.34.77-.77.77"
            fill="currentColor"
          />
          <path
            d="M17.08 22h-1.39a.77.77 0 0 1 0-1.54h1.39a3.4 3.4 0 0 0 3.38-3.38V15.7a.77.77 0 0 1 1.54 0v1.38A4.93 4.93 0 0 1 17.08 22"
            fill="currentColor"
          />
          <path
            d="M9.23 22H6.92A4.93 4.93 0 0 1 2 17.08v-2.31c0-.43.34-.77.77-.77s.77.34.77.77v2.31a3.4 3.4 0 0 0 3.38 3.38h2.31a.77.77 0 0 1 0 1.54"
            fill="currentColor"
          />
          <path
            d="M18.46 11.23H5.54a.77.77 0 0 0 0 1.54h12.92a.77.77 0 0 0 0-1.54"
            fill="currentColor"
          />
          <path
            d="M6.9 13.94v.33a3 3 0 0 0 3 3h4.2a3 3 0 0 0 3-3v-.33a.2.2 0 0 0-.21-.21H7.11a.2.2 0 0 0-.21.21"
            fill="currentColor"
          />
          <path
            d="M6.9 10.06v-.33a3 3 0 0 1 3-3h4.2a3 3 0 0 1 3 3v.33a.2.2 0 0 1-.21.21H7.11a.2.2 0 0 1-.21-.21"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScan;
