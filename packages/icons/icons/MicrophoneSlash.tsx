import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMicrophoneSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconMicrophoneSlash(
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
              d="M18.49 6.53A6 6 0 0 0 6.67 8v5c0 1.46.52 2.8 1.39 3.84"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 9.98V13a6 6 0 0 1-8.08 5.63"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.53 19.58A8.98 8.98 0 0 0 21.67 13v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.17 2.99-19 19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.22 5.5V2.26"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.17 3.5v4"
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
              d="M18.29 5.72 7.68 16.33a6 6 0 0 1-1.13-3.51V8.11c0-1.84.82-3.49 2.12-4.61v4.14c0 .39.32.71.7.71.39 0 .71-.32.71-.71V2.57q.7-.35 1.46-.48v3.66c0 .4.32.71.71.71a.7.7 0 0 0 .71-.71V2a6.1 6.1 0 0 1 5.33 3.72"
              fill="currentColor"
            />
            <path
              d="M18.79 8.88v3.94a6.13 6.13 0 0 1-7.27 6.01l-.15-.03-.41-.11a6 6 0 0 1-1-.39l-.08-.04q-.15-.07-.3-.17z"
              fill="currentColor"
            />
            <path
              d="M22.42 11v2a9.76 9.76 0 0 1-15.57 7.82l1.08-1.08A8.26 8.26 0 0 0 20.92 13v-2c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
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
              d="M18.29 5.72 7.68 16.33a6 6 0 0 1-1.13-3.51V8.11c0-1.84.82-3.49 2.12-4.61v4.14c0 .39.32.71.7.71.39 0 .71-.32.71-.71V2.57q.7-.35 1.46-.48v3.66c0 .4.32.71.71.71a.7.7 0 0 0 .71-.71V2a6.1 6.1 0 0 1 5.33 3.72"
              fill="currentColor"
            />
            <path
              d="M18.79 8.88v3.94a6.13 6.13 0 0 1-7.27 6.01l-.15-.03-.41-.11a6 6 0 0 1-1-.39l-.08-.04q-.15-.07-.3-.17z"
              fill="currentColor"
            />
            <path
              d="M22.42 11v2a9.76 9.76 0 0 1-15.57 7.82l1.08-1.08A8.26 8.26 0 0 0 20.92 13v-2c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMicrophoneSlash;
