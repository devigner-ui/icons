import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRowVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconRowVertical(
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
              d="M20.57 13.5H4.77c-1.5 0-2.1.64-2.1 2.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23v-4.04c0-1.59-.6-2.23-2.1-2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.57 2H4.77c-1.5 0-2.1.64-2.1 2.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23V4.23c0-1.59-.6-2.23-2.1-2.23"
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
              d="M20.57 13.5H4.77c-1.5 0-2.1.64-2.1 2.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23v-4.04c0-1.59-.6-2.23-2.1-2.23"
              fill="currentColor"
            />
            <path
              d="M20.57 2H4.77c-1.5 0-2.1.64-2.1 2.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23V4.23c0-1.59-.6-2.23-2.1-2.23"
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
              d="M20.57 13.5H4.77c-1.5 0-2.1.64-2.1 2.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23v-4.04c0-1.59-.6-2.23-2.1-2.23"
              fill="currentColor"
            />
            <path
              d="M20.57 2H4.77c-1.5 0-2.1.64-2.1 2.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23V4.23c0-1.59-.6-2.23-2.1-2.23"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRowVertical;
