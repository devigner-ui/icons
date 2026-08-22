import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserBlockRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconUserBlockRounded(
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
            <circle
              cx="12"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m19.95 16.05-3.9 3.9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="18"
              cy="18.0005"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 20.96q-.5.04-1 .04c-3.87 0-7-1.79-7-4s3.13-4 7-4q1.33.01 2.5.26"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
            <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3q-.45-.22-.97-.22m2.03 1.28-3 3q.45.21.97.22a2.25 2.25 0 0 0 2.03-3.22m-5.78.97a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.22 14.33a3.75 3.75 0 0 0-1.97 6.22q-1.48.44-3.25.45c-3.87 0-7-1.79-7-4s3.13-4 7-4a10 10 0 0 1 5.22 1.33"
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
            <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 15.75a2.25 2.25 0 0 0-2.03 3.22l3-3q-.45-.22-.97-.22m2.03 1.28-3 3q.45.21.97.22a2.25 2.25 0 0 0 2.03-3.22m-5.78.97a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
              fill="currentColor"
            />
            <path
              d="M15.33 13.48a5.25 5.25 0 0 0-1.71 7.41q-.78.1-1.62.11c-3.87 0-7-1.79-7-4s3.13-4 7-4c1.2 0 2.34.18 3.33.48"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserBlockRounded;
