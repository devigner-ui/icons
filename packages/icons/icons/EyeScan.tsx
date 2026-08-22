import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEyeScan = forwardRef<SVGSVGElement, IconProps>(function IconEyeScan(
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
            opacity={duotone ? "0.4" : "1"}
            d="M10 22c-3.77 0-5.66 0-6.83-1.17S2 18.77 2 15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 15c0 3.77 0 4.66-1.17 5.83S17.77 22 14 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 2c3.77 0 5.66 0 6.83 1.17S22 5.23 22 9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 2C6.23 2 4.34 2 3.17 3.17S2 5.23 2 9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.9 14.06C5.3 13.37 5 13.03 5 12c0-1.02.3-1.37.9-2.06A8 8 0 0 1 12 7a8 8 0 0 1 6.1 2.94c.6.7.9 1.04.9 2.06 0 1.03-.3 1.37-.9 2.06A8 8 0 0 1 12 17a8 8 0 0 1-6.1-2.94"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="12"
            cy="12.0005"
            r="2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M14 2.75a36 36 0 0 1 4.29.14c1 .14 1.58.39 2 .81.5.49.7.87.82 1.54.14.76.14 1.84.14 3.76a.75.75 0 0 0 1.5 0v-.1c0-1.8 0-3.01-.16-3.92a4 4 0 0 0-1.23-2.34 4.7 4.7 0 0 0-2.87-1.24c-1.14-.15-2.6-.15-4.43-.15H14a.75.75 0 0 0 0 1.5"
              fill="currentColor"
            />
            <path
              d="M2 14.25c.41 0 .75.34.75.75 0 1.92 0 3 .14 3.76.11.67.32 1.05.81 1.54.43.42 1 .68 2.01.81 1.03.14 2.38.14 4.29.14a.75.75 0 0 1 0 1.5h-.06c-1.83 0-3.29 0-4.43-.15a4.7 4.7 0 0 1-2.87-1.24 4 4 0 0 1-1.23-2.34 26 26 0 0 1-.16-3.92V15c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M22 14.25c.41 0 .75.34.75.75v.1c0 1.8 0 3.01-.16 3.92a4 4 0 0 1-1.23 2.34 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H14a.75.75 0 0 1 0-1.5c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.5-.49.7-.87.82-1.54.14-.76.14-1.84.14-3.76 0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M9.94 1.25H10a.75.75 0 0 1 0 1.5 36 36 0 0 0-4.29.14c-1 .14-1.58.39-2 .81-.5.49-.7.87-.82 1.54C2.75 6 2.75 7.08 2.75 9a.75.75 0 0 1-1.5 0v-.1c0-1.8 0-3.01.16-3.92a4 4 0 0 1 1.23-2.34A4.7 4.7 0 0 1 5.51 1.4c1.14-.15 2.6-.15 4.43-.15"
              fill="currentColor"
            />
          </g>
          <path
            d="M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.9 14.06C5.3 13.37 5 13.03 5 12c0-1.02.3-1.37.9-2.06A8 8 0 0 1 12 7a8 8 0 0 1 6.1 2.94c.6.7.9 1.04.9 2.06 0 1.03-.3 1.37-.9 2.06A8 8 0 0 1 12 17a8 8 0 0 1-6.1-2.94M9.24 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
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
            d="M14 2.75a36 36 0 0 1 4.29.14c1 .14 1.58.39 2 .81.5.49.7.87.82 1.54.14.76.14 1.84.14 3.76a.75.75 0 0 0 1.5 0v-.1c0-1.8 0-3.01-.16-3.92a4 4 0 0 0-1.23-2.34 4.7 4.7 0 0 0-2.87-1.24c-1.14-.15-2.6-.15-4.43-.15H14a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            d="M2 14.25c.41 0 .75.34.75.75 0 1.92 0 3 .14 3.76.11.67.32 1.05.81 1.54.43.42 1 .68 2.01.81 1.03.14 2.38.14 4.29.14a.75.75 0 0 1 0 1.5h-.06c-1.83 0-3.29 0-4.43-.15a4.7 4.7 0 0 1-2.87-1.24 4 4 0 0 1-1.23-2.34 26 26 0 0 1-.16-3.92V15c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M22 14.25c.41 0 .75.34.75.75v.1c0 1.8 0 3.01-.16 3.92a4 4 0 0 1-1.23 2.34 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H14a.75.75 0 0 1 0-1.5c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.5-.49.7-.87.82-1.54.14-.76.14-1.84.14-3.76 0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M9.94 1.25H10a.75.75 0 0 1 0 1.5 36 36 0 0 0-4.29.14c-1 .14-1.58.39-2 .81-.5.49-.7.87-.82 1.54C2.75 6 2.75 7.08 2.75 9a.75.75 0 0 1-1.5 0v-.1c0-1.8 0-3.01.16-3.92a4 4 0 0 1 1.23-2.34A4.7 4.7 0 0 1 5.51 1.4c1.14-.15 2.6-.15 4.43-.15"
            fill="currentColor"
          />
          <path
            d="M12 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.9 14.06C5.3 13.37 5 13.03 5 12c0-1.02.3-1.37.9-2.06A8 8 0 0 1 12 7a8 8 0 0 1 6.1 2.94c.6.7.9 1.04.9 2.06 0 1.03-.3 1.37-.9 2.06A8 8 0 0 1 12 17a8 8 0 0 1-6.1-2.94M9.24 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEyeScan;
