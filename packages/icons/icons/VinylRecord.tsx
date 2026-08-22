import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVinylRecord = forwardRef<SVGSVGElement, IconProps>(
  function IconVinylRecord(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.93 19.07A10 10 0 1 0 19.07 4.93 10 10 0 0 0 4.93 19.07"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7.4 16.6a6.5 6.5 0 0 1 0-9.2m9.2 0a6.5 6.5 0 0 1 0 9.2"
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
              d="M4.93 19.07A10 10 0 1 0 19.07 4.93 10 10 0 0 0 4.93 19.07"
              fill="currentColor"
            />
            <path
              d="M17.13 6.87a.75.75 0 1 0-1.06 1.06 5.75 5.75 0 0 1 0 8.14.75.75 0 1 0 1.06 1.06 7.25 7.25 0 0 0 0-10.26"
              fill="currentColor"
            />
            <path
              d="M7.93 7.93a.75.75 0 0 0-1.06-1.06 7.25 7.25 0 0 0 0 10.26.75.75 0 0 0 1.06-1.06 5.75 5.75 0 0 1 0-8.14"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.35 9.35a3.75 3.75 0 1 1 5.3 5.3 3.75 3.75 0 0 1-5.3-5.3m1.06 1.06a2.25 2.25 0 1 1 3.18 3.18 2.25 2.25 0 0 1-3.18-3.18"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.93 19.07A10 10 0 1 0 19.07 4.93 10 10 0 0 0 4.93 19.07m12.2-12.2a.75.75 0 1 0-1.06 1.06 5.75 5.75 0 0 1 0 8.14.75.75 0 1 0 1.06 1.06 7.25 7.25 0 0 0 0-10.26M9.35 9.35a3.75 3.75 0 1 1 5.3 5.3 3.75 3.75 0 0 1-5.3-5.3m1.06 1.06a2.25 2.25 0 1 1 3.18 3.18 2.25 2.25 0 0 1-3.18-3.18M7.93 7.93a.75.75 0 0 0-1.06-1.06 7.25 7.25 0 0 0 0 10.26.75.75 0 0 0 1.06-1.06 5.75 5.75 0 0 1 0-8.14"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVinylRecord;
