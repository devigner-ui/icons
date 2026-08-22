import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDoubleAltArrowDown = forwardRef<SVGSVGElement, IconProps>(
  function IconDoubleAltArrowDown(
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
              d="m19 11-7 6-7-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19 7-7 6-7-6"
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
              d="M5 6.25a.75.75 0 0 0-.49 1.32l7 6c.28.24.7.24.98 0l7-6A.75.75 0 0 0 19 6.25z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43 10.51a.75.75 0 0 1 1.06-.08L12 16.01l6.51-5.58a.75.75 0 1 1 .98 1.14l-7 6a.75.75 0 0 1-.98 0l-7-6a.75.75 0 0 1-.08-1.06"
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
              d="M4.43 10.51a.75.75 0 0 1 1.06-.08L12 16.01l6.51-5.58a.75.75 0 1 1 .98 1.14l-7 6a.75.75 0 0 1-.98 0l-7-6a.75.75 0 0 1-.08-1.06"
              fill="currentColor"
            />
            <path
              d="M5 6.25a.75.75 0 0 0-.49 1.32l7 6c.28.24.7.24.98 0l7-6A.75.75 0 0 0 19 6.25z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDoubleAltArrowDown;
