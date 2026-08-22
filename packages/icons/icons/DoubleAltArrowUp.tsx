import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDoubleAltArrowUp = forwardRef<SVGSVGElement, IconProps>(
  function IconDoubleAltArrowUp(
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
              d="m19 13-7-6-7 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m19 17-7-6-7 6"
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
              d="M5 17.75a.75.75 0 0 1-.49-1.32l7-6c.28-.24.7-.24.98 0l7 6a.75.75 0 0 1-.49 1.32z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43 13.49c.27.31.74.35 1.06.08L12 7.99l6.51 5.58a.75.75 0 1 0 .98-1.14l-7-6a.75.75 0 0 0-.98 0l-7 6a.75.75 0 0 0-.08 1.06"
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
              d="M4.43 13.49c.27.31.74.35 1.06.08L12 7.99l6.51 5.58a.75.75 0 1 0 .98-1.14l-7-6a.75.75 0 0 0-.98 0l-7 6a.75.75 0 0 0-.08 1.06"
              fill="currentColor"
            />
            <path
              d="M5 17.75a.75.75 0 0 1-.49-1.32l7-6c.28-.24.7-.24.98 0l7 6a.75.75 0 0 1-.49 1.32z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDoubleAltArrowUp;
