import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignRight2 = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignRight2(
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
              d="M19.57 19.25H7.77c-1.5 0-2.1-.64-2.1-2.23v-1.04c0-1.59.6-2.23 2.1-2.23h11.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.57 5.25h-6.8c-1.5 0-2.1.64-2.1 2.23v1.04c0 1.59.6 2.23 2.1 2.23h6.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.67 1.99v20"
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
              d="M5.29 15.98v1.04c0 1.59.6 2.23 2.12 2.23h11.88v-5.5H7.41c-1.52 0-2.12.64-2.12 2.23"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.29 7.48v1.04c0 1.59.61 2.23 2.12 2.23h6.88v-5.5h-6.88c-1.51 0-2.12.64-2.12 2.23"
              fill="currentColor"
            />
            <path
              d="M19.29 22a.76.76 0 0 1-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5a.74.74 0 0 1-.75.75"
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
              d="M5.29 15.98v1.04c0 1.59.6 2.23 2.12 2.23h11.88v-5.5H7.41c-1.52 0-2.12.64-2.12 2.23"
              fill="currentColor"
            />
            <path
              d="M10.29 7.48v1.04c0 1.59.61 2.23 2.12 2.23h6.88v-5.5h-6.88c-1.51 0-2.12.64-2.12 2.23"
              fill="currentColor"
            />
            <path
              d="M19.29 22a.76.76 0 0 1-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5a.74.74 0 0 1-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignRight2;
