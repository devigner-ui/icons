import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirbudsCase = forwardRef<SVGSVGElement, IconProps>(
  function IconAirbudsCase(
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
              d="M3 11c0-3.75 0-5.62.95-6.94a5 5 0 0 1 1.11-1.1C6.38 2 8.25 2 12 2s5.62 0 6.94.95a5 5 0 0 1 1.1 1.11C21 5.38 21 7.25 21 11v2c0 3.75 0 5.62-.95 6.94a5 5 0 0 1-1.11 1.1C17.62 22 15.75 22 12 22s-5.62 0-6.94-.95a5 5 0 0 1-1.1-1.11C3 18.62 3 16.75 3 13z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7 9c0-1.1.9-2 2-2h6a2 2 0 1 1 0 4H9a2 2 0 0 1-2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 9h-3.5M7 9H3"
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
            <path
              d="M3 9.75V13c0 3.75 0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C6.38 22 8.25 22 12 22s5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C21 18.62 21 16.75 21 13V9.75h-3.35a2.75 2.75 0 0 1-2.65 2H9a2.75 2.75 0 0 1-2.65-2z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.02 8.25h3.33c.33-1.15 1.4-2 2.65-2h6c1.26 0 2.32.85 2.65 2h3.33c-.06-2.01-.25-3.24-.93-4.19a5 5 0 0 0-1.11-1.1C17.62 2 15.75 2 12 2s-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11c-.7.95-.88 2.18-.94 4.19"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.75 9c0-.69.56-1.25 1.25-1.25h6a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25"
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
              d="M3 9.75V13c0 3.75 0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C6.38 22 8.25 22 12 22s5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C21 18.62 21 16.75 21 13V9.75h-3.35a2.75 2.75 0 0 1-2.65 2H9a2.75 2.75 0 0 1-2.65-2z"
              fill="currentColor"
            />
            <path
              d="M3.02 8.25h3.33c.33-1.15 1.4-2 2.65-2h6c1.26 0 2.32.85 2.65 2h3.33c-.06-2.01-.25-3.24-.93-4.19a5 5 0 0 0-1.11-1.1C17.62 2 15.75 2 12 2s-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11c-.7.95-.88 2.18-.94 4.19"
              fill="currentColor"
            />
            <path
              d="M7.75 9c0-.69.56-1.25 1.25-1.25h6a1.25 1.25 0 1 1 0 2.5H9c-.69 0-1.25-.56-1.25-1.25"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAirbudsCase;
