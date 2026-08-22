import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirbudsCaseMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconAirbudsCaseMinimalistic(
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
              d="M3 11c0-3.75 0-5.62.95-6.94a5 5 0 0 1 1.11-1.1C6.38 2 8.25 2 12 2s5.62 0 6.94.95a5 5 0 0 1 1.1 1.11C21 5.38 21 7.25 21 11v2c0 3.75 0 5.62-.95 6.94a5 5 0 0 1-1.11 1.1C17.62 22 15.75 22 12 22s-5.62 0-6.94-.95a5 5 0 0 1-1.1-1.11C3 18.62 3 16.75 3 13z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7 9h10"
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
              d="M3 11c0-3.75 0-5.62.95-6.94a5 5 0 0 1 1.11-1.1C6.38 2 8.25 2 12 2s5.62 0 6.94.95a5 5 0 0 1 1.1 1.11C21 5.38 21 7.25 21 11v2c0 3.75 0 5.62-.95 6.94a5 5 0 0 1-1.11 1.1C17.62 22 15.75 22 12 22s-5.62 0-6.94-.95a5 5 0 0 1-1.1-1.11C3 18.62 3 16.75 3 13z"
              fill="currentColor"
            />
            <path
              d="M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"
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
              d="M3.95 4.06C3 5.38 3 7.25 3 11v2c0 3.75 0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C6.38 22 8.25 22 12 22s5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C21 18.62 21 16.75 21 13v-2c0-3.75 0-5.62-.95-6.94a5 5 0 0 0-1.11-1.1C17.62 2 15.75 2 12 2s-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11M7 8.25a.75.75 0 0 0 0 1.5h10a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAirbudsCaseMinimalistic;
