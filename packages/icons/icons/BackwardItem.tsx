import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBackwardItem = forwardRef<SVGSVGElement, IconProps>(
  function IconBackwardItem(
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
              d="M22.67 5.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7c-2.25 0-3.15-.9-3.15-3.15v-2.7c0-2.25.9-3.15 3.15-3.15h2.7c2.25 0 3.15.9 3.15 3.15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.67 16.15v2.7c0 2.25-.9 3.15-3.15 3.15h-2.7c-2.25 0-3.15-.9-3.15-3.15v-2.7c0-2.25.9-3.15 3.15-3.15h2.7c2.25 0 3.15.9 3.15 3.15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.05 11v2.62c0 2.69-1.07 3.76-3.76 3.76h-2.62v-1.23c0-2.25-.9-3.15-3.15-3.15H7.29v-2.62c0-2.69 1.07-3.76 3.76-3.76h2.62v1.23c0 2.25.9 3.15 3.15 3.15z"
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
              d="M21.92 5.15v2.7c0 1.84-.56 2.4-2.4 2.4h-2.7c-1.84 0-2.4-.56-2.4-2.4v-2.7c0-1.84.56-2.4 2.4-2.4h2.7c1.84 0 2.4.56 2.4 2.4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.92 16.15v2.7c0 1.84-.56 2.4-2.4 2.4h-2.7c-1.84 0-2.4-.56-2.4-2.4v-2.7c0-1.84.56-2.4 2.4-2.4h2.7c1.84 0 2.4.56 2.4 2.4"
              fill="currentColor"
            />
            <path
              d="M17.3 11.75v1.87c0 2.28-.73 3.01-3.01 3.01h-1.87v-.48c0-2.66-1.24-3.9-3.9-3.9h-.48v-1.87c0-2.28.73-3.01 3.01-3.01h1.87v.48c0 2.66 1.24 3.9 3.9 3.9z"
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
              d="M21.92 5.15v2.7c0 1.84-.56 2.4-2.4 2.4h-2.7c-1.84 0-2.4-.56-2.4-2.4v-2.7c0-1.84.56-2.4 2.4-2.4h2.7c1.84 0 2.4.56 2.4 2.4"
              fill="currentColor"
            />
            <path
              d="M10.92 16.15v2.7c0 1.84-.56 2.4-2.4 2.4h-2.7c-1.84 0-2.4-.56-2.4-2.4v-2.7c0-1.84.56-2.4 2.4-2.4h2.7c1.84 0 2.4.56 2.4 2.4"
              fill="currentColor"
            />
            <path
              d="M16.82 11.75c.27 0 .48.21.48.48v1.39c0 2.28-.73 3.01-3.01 3.01H12.9a.5.5 0 0 1-.48-.48c0-2.66-1.24-3.9-3.9-3.9a.5.5 0 0 1-.48-.48v-1.39c0-2.28.73-3.01 3.01-3.01h1.39c.27 0 .48.22.48.48 0 2.66 1.24 3.9 3.9 3.9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBackwardItem;
