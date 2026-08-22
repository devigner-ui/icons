import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignLeft2 = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignLeft2(
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
              d="M5.77 19.25h11.8c1.5 0 2.1-.64 2.1-2.23v-1.04c0-1.59-.6-2.23-2.1-2.23H5.77"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.77 5.25h6.8c1.5 0 2.1.64 2.1 2.23v1.04c0 1.59-.6 2.23-2.1 2.23h-6.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.67 1.99v20"
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
              d="M20.05 15.98v1.04c0 1.59-.6 2.23-2.12 2.23H6.05v-5.5h11.88c1.52 0 2.12.64 2.12 2.23"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.05 7.48v1.04c0 1.59-.61 2.23-2.12 2.23H6.05v-5.5h6.88c1.51 0 2.12.64 2.12 2.23"
              fill="currentColor"
            />
            <path
              d="M6.05 22a.76.76 0 0 1-.75-.75V2.75A.74.74 0 0 1 6.05 2c.42 0 .75.34.75.75v18.5a.76.76 0 0 1-.75.75"
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
              d="M20.05 15.98v1.04c0 1.59-.6 2.23-2.12 2.23H6.05v-5.5h11.88c1.52 0 2.12.64 2.12 2.23"
              fill="currentColor"
            />
            <path
              d="M15.05 7.48v1.04c0 1.59-.61 2.23-2.12 2.23H6.05v-5.5h6.88c1.51 0 2.12.64 2.12 2.23"
              fill="currentColor"
            />
            <path
              d="M6.05 22a.76.76 0 0 1-.75-.75V2.75A.74.74 0 0 1 6.05 2c.42 0 .75.34.75.75v18.5a.76.76 0 0 1-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignLeft2;
