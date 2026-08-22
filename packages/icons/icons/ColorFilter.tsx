import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconColorFilter = forwardRef<SVGSVGElement, IconProps>(
  function IconColorFilter(
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
              d="M14.67 16c0 1.77-.77 3.37-2 4.46a6 6 0 1 1-5.58-10.25 6 6 0 0 0 7.16 3.58 6 6 0 0 1 .42 2.21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.67 8a6 6 0 1 1-11.99.01A6 6 0 0 1 18.67 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 16a6 6 0 0 1-10 4.46 5.95 5.95 0 0 0 1.58-6.67 6 6 0 0 0 4-3.58A6 6 0 0 1 22.67 16"
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
              opacity={duotone ? "0.6" : "1"}
              d="M14.67 16c0 1.77-.77 3.37-2 4.46a6 6 0 1 1-5.58-10.25 6 6 0 0 0 7.16 3.58 6 6 0 0 1 .42 2.21"
              fill="currentColor"
            />
            <path
              d="M18.67 8a6 6 0 1 1-11.99.01A6 6 0 0 1 18.67 8"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.3" : "1"}
              d="M22.67 16a6 6 0 0 1-10 4.46 5.95 5.95 0 0 0 1.58-6.67 6 6 0 0 0 4-3.58A6 6 0 0 1 22.67 16"
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
              d="M14.67 16c0 1.77-.77 3.37-2 4.46a6 6 0 1 1-7.44-9.36c.24-.18.58-.06.71.21a7.5 7.5 0 0 0 8.14 4.06c.29-.06.57.13.59.42z"
              fill="currentColor"
            />
            <path
              d="M18.67 8a6 6 0 1 1-11.99.01A6 6 0 0 1 18.67 8"
              fill="currentColor"
            />
            <path
              d="M22.67 16a6 6 0 0 1-8.12 5.61c-.32-.12-.38-.52-.16-.78A7.4 7.4 0 0 0 16.1 15a.44.44 0 0 1 .23-.46 7.5 7.5 0 0 0 3.08-3.22c.13-.28.47-.4.72-.22a6 6 0 0 1 2.55 4.9"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconColorFilter;
