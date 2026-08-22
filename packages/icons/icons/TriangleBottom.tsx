import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTriangleBottom = forwardRef<SVGSVGElement, IconProps>(
  function IconTriangleBottom(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    const fill = variant === "Bold" || variant === "Bulk";
    const duotone = variant === "TwoTone" || variant === "Bulk";

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
              d="M12.67 6h2.67c3.31 0 4.67 2.35 3.01 5.22l-1.34 2.31-1.34 2.31c-1.66 2.87-4.37 2.87-6.03 0L8.3 13.53l-1.34-2.31C5.33 8.35 6.68 6 10 6z"
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
              d="M10 6h5.34c3.32 0 4.67 2.35 3.02 5.22l-.74 1.28a1 1 0 0 1-.87.5H8.59a1 1 0 0 1-.87-.5l-.74-1.28C5.33 8.35 6.68 6 10 6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.46 14h6.43a.5.5 0 0 1 .43.75l-.64 1.1c-1.65 2.87-4.37 2.87-6.02 0l-.64-1.1a.5.5 0 0 1 .44-.75"
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
              d="M10 6h5.34c3.32 0 4.67 2.35 3.02 5.22l-.74 1.28a1 1 0 0 1-.87.5H8.59a1 1 0 0 1-.87-.5l-.74-1.28C5.33 8.35 6.68 6 10 6"
              fill="currentColor"
            />
            <path
              d="M9.46 14h6.43a.5.5 0 0 1 .43.75l-.64 1.1c-1.65 2.87-4.37 2.87-6.02 0l-.64-1.1a.5.5 0 0 1 .44-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTriangleBottom;
