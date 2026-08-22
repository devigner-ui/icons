import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSquareAcademicCap = forwardRef<SVGSVGElement, IconProps>(
  function IconSquareAcademicCap(
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
              d="M9.78 3.5a5.2 5.2 0 0 1 4.44 0l6.69 3.14c1.45.68 1.45 3.04 0 3.72l-6.7 3.14a5.2 5.2 0 0 1-4.43 0L3.1 10.36c-1.45-.68-1.45-3.04 0-3.72z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 8.5V14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 11.5v5.13c0 1-.5 1.95-1.39 2.44C16.15 19.87 13.8 21 12 21s-4.15-1.12-5.61-1.93A2.8 2.8 0 0 1 5 16.63V11.5"
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
              d="M14.22 3.5a5.2 5.2 0 0 0-4.44 0L3.1 6.64c-1.07.5-1.35 1.92-.84 2.9v4.96a.75.75 0 0 0 1.5 0v-3.83l6.03 2.83c1.42.67 3.02.67 4.44 0l6.69-3.14c1.45-.68 1.45-3.04 0-3.72z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 11.26 4.78 2.24c1.42.67 3.02.67 4.44 0L19 11.26v5.37c0 1-.5 1.95-1.39 2.44C16.15 19.87 13.8 21 12 21s-4.15-1.12-5.61-1.93A2.8 2.8 0 0 1 5 16.63z"
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
              d="M14.22 3.5a5.2 5.2 0 0 0-4.44 0L3.1 6.64c-1.07.5-1.35 1.92-.84 2.9v4.96a.75.75 0 0 0 1.5 0v-3.83l6.03 2.83c1.42.67 3.02.67 4.44 0l6.69-3.14c1.45-.68 1.45-3.04 0-3.72z"
              fill="currentColor"
            />
            <path
              d="M5 12.92v3.7c0 1.01.5 1.96 1.39 2.45C7.85 19.87 10.2 21 12 21s4.15-1.12 5.61-1.93A2.8 2.8 0 0 0 19 16.63v-3.71l-4.15 1.94a6.7 6.7 0 0 1-5.7 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSquareAcademicCap;
