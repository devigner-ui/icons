import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStationMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconStationMinimalistic(
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
              d="M13.25 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 14a7.06 7.06 0 0 1 5-12c3.87 0 7 3.16 7 7.06a7 7 0 0 1-1.98 4.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.99 12A4.24 4.24 0 0 1 12 4.82a4.24 4.24 0 0 1 3.04 7.15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m16 22-4-12-4 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.5 17.5h-5"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.28 9.78a1.25 1.25 0 1 1 1.44 0l2.49 7.47v.03l1.5 4.48a.75.75 0 1 1-1.42.48l-1.33-3.99h-3.92l-1.33 3.99a.75.75 0 1 1-1.42-.48l1.5-4.48v-.03zm.72 2.6 1.46 4.37h-2.92z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2.75a6.31 6.31 0 0 0-4.46 10.73.75.75 0 1 1-1.07 1.04A7.81 7.81 0 0 1 12 1.25a7.81 7.81 0 0 1 5.56 13.24.75.75 0 1 1-1.08-1.04A6.31 6.31 0 0 0 12 2.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 5.57a3.49 3.49 0 0 0-2.47 5.91.75.75 0 0 1-1.08 1.05A4.99 4.99 0 0 1 12 4.07a4.97 4.97 0 0 1 3.59 8.42.75.75 0 0 1-1.1-1.03A3.49 3.49 0 0 0 12 5.57"
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
              d="M12 2.75a6.31 6.31 0 0 0-4.46 10.73.75.75 0 1 1-1.07 1.04A7.81 7.81 0 0 1 12 1.25a7.81 7.81 0 0 1 5.56 13.24.75.75 0 1 1-1.08-1.04A6.31 6.31 0 0 0 12 2.75"
              fill="currentColor"
            />
            <path
              d="M12 5.57a3.49 3.49 0 0 0-2.47 5.91.75.75 0 1 1-1.08 1.05A4.99 4.99 0 0 1 12 4.07a4.97 4.97 0 0 1 3.59 8.42.75.75 0 0 1-1.1-1.03A3.49 3.49 0 0 0 12 5.57"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.28 9.78a1.25 1.25 0 1 1 1.44 0l2.49 7.47v.03l1.5 4.48a.75.75 0 1 1-1.42.48l-1.33-3.99h-3.92l-1.33 3.99a.75.75 0 1 1-1.42-.48l1.5-4.48v-.03zm.72 2.6 1.46 4.37h-2.92z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStationMinimalistic;
