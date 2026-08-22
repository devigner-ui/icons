import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconToggleOffCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconToggleOffCircle(
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
              d="M10.67 4h4a8 8 0 1 1 0 16h-4a8 8 0 1 1 0-16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.67 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M14.53 3.86h-3.72a8.15 8.15 0 0 0 0 16.28h3.72a8.15 8.15 0 0 0 0-16.28"
              fill="currentColor"
            />
            <path
              d="M10.81 16.42a4.42 4.42 0 1 0 0-8.84 4.42 4.42 0 0 0 0 8.84"
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
              d="M14.53 3.86h-3.72a8.15 8.15 0 0 0 0 16.28h3.72a8.15 8.15 0 0 0 0-16.28m-3.72 12.56a4.42 4.42 0 1 1 0-8.84 4.42 4.42 0 0 1 0 8.84"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconToggleOffCircle;
