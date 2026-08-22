import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDoubleAltArrowLeft = forwardRef<SVGSVGElement, IconProps>(
  function IconDoubleAltArrowLeft(
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
              d="m13 19-6-7 6-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17 19-6-7 6-7"
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
              d="M17.75 19a.75.75 0 0 1-1.32.49l-6-7a.75.75 0 0 1 0-.98l6-7a.75.75 0 0 1 1.32.49z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.49 19.57a.75.75 0 0 0 .08-1.06L7.99 12l5.58-6.51a.75.75 0 1 0-1.14-.98l-6 7a.75.75 0 0 0 0 .98l6 7c.27.31.74.35 1.06.08"
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
              d="M13.49 4.43c.31.27.35.74.08 1.06L7.99 12l5.58 6.51a.75.75 0 1 1-1.14.98l-6-7a.75.75 0 0 1 0-.98l6-7a.75.75 0 0 1 1.06-.08"
              fill="currentColor"
            />
            <path
              d="M17.75 5a.75.75 0 0 0-1.32-.49l-6 7a.75.75 0 0 0 0 .98l6 7a.75.75 0 0 0 1.32-.49z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDoubleAltArrowLeft;
