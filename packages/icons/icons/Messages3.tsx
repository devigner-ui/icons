import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMessages3 = forwardRef<SVGSVGElement, IconProps>(
  function IconMessages3(
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
              d="M22.67 6.25v5.1c0 1.27-.42 2.34-1.17 3.08a4.2 4.2 0 0 1-3.08 1.17v1.81a.85.85 0 0 1-1.32.71l-.97-.64q.13-.47.13-1.01V12.4c0-2.04-1.36-3.4-3.4-3.4H6.07l-.4.02V6.25C5.67 3.7 7.37 2 9.92 2h8.5c2.55 0 4.25 1.7 4.25 4.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.26 12.4v4.07q0 .54-.13 1.01c-.37 1.47-1.59 2.39-3.27 2.39h-2.72l-3.02 2.01a.67.67 0 0 1-1.05-.56v-1.45a3.4 3.4 0 0 1-2.46-.93 3.4 3.4 0 0 1-.94-2.47V12.4c0-1.9 1.18-3.21 3-3.38l.4-.02h6.79c2.04 0 3.4 1.36 3.4 3.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M22.67 6.25v5.1c0 1.27-.42 2.34-1.17 3.08a4.2 4.2 0 0 1-3.08 1.17v1.81a.85.85 0 0 1-1.32.71l-.97-.64q.13-.47.13-1.01V12.4c0-2.04-1.36-3.4-3.4-3.4H6.07l-.4.02V6.25C5.67 3.7 7.37 2 9.92 2h8.5c2.55 0 4.25 1.7 4.25 4.25"
              fill="currentColor"
            />
            <path
              d="M16.26 12.4v4.07q0 .54-.13 1.01c-.37 1.47-1.59 2.39-3.27 2.39h-2.72l-3.02 2.01a.67.67 0 0 1-1.05-.56v-1.45a3.4 3.4 0 0 1-2.46-.93 3.4 3.4 0 0 1-.94-2.47V12.4c0-1.9 1.18-3.21 3-3.38l.4-.02h6.79c2.04 0 3.4 1.36 3.4 3.4"
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
              d="M16.26 12.4v4.07q0 .54-.13 1.01c-.37 1.47-1.59 2.39-3.27 2.39h-2.72l-3.02 2.01a.67.67 0 0 1-1.05-.56v-1.45a3.4 3.4 0 0 1-2.46-.93 3.4 3.4 0 0 1-.94-2.47V12.4c0-1.9 1.18-3.21 3-3.38l.4-.02h6.79c2.04 0 3.4 1.36 3.4 3.4"
              fill="currentColor"
            />
            <path
              d="M18.42 15.6c1.27 0 2.34-.42 3.08-1.17a4.2 4.2 0 0 0 1.17-3.08v-5.1c0-2.35-1.9-4.25-4.25-4.25h-8.5a4.25 4.25 0 0 0-4.25 4.25V7c0 .28.22.5.5.5h6.69a4.9 4.9 0 0 1 4.9 4.9v2.7c0 .28.22.5.5.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMessages3;
