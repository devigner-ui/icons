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
        {variant === "Broken" ? (
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
            d="M17.82 6.53A6 6 0 0 0 6 8v5c0 1.46.52 2.8 1.39 3.84"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 9.98V13a6 6 0 0 1-8.08 5.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.86 19.58A8.99 8.99 0 0 0 21 13v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m21.5 2.99-6.28 6.28m-2.47 2.47L2.5 21.99"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.55 5.5V2.26"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 3.5v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>
        ) : !fill ? (
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
              d="M17.82 6.53A6 6 0 0 0 6 8v5c0 1.46.52 2.8 1.39 3.84"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 9.98V13a6 6 0 0 1-8.08 5.63"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.86 19.58A8.98 8.98 0 0 0 21 13v-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m21.5 2.99-19 19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.55 5.5V2.26"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.5 3.5v4"
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
              d="M17.62 5.32 7.01 15.93a6 6 0 0 1-1.13-3.51V7.71c0-1.84.82-3.49 2.12-4.61v4.14c0 .39.32.71.7.71.39 0 .71-.32.71-.71V2.17q.7-.35 1.46-.48v3.66c0 .4.32.71.71.71a.7.7 0 0 0 .71-.71V1.6a6.1 6.1 0 0 1 5.33 3.72"
              fill="currentColor"
            />
            <path
              d="M18.12 8.48v3.94a6.13 6.13 0 0 1-7.27 6.01l-.15-.03-.41-.11a6 6 0 0 1-1-.39l-.08-.04q-.15-.07-.3-.17z"
              fill="currentColor"
            />
            <path
              d="M21.75 10.6v2a9.76 9.76 0 0 1-15.57 7.82l1.08-1.08a8.26 8.26 0 0 0 12.99-6.74v-2c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M21.77 1.83a.77.77 0 0 0-1.09 0L2.23 20.29c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 2.91a.74.74 0 0 0 0-1.08"
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
              d="M17.62 5.32 7.01 15.93a6 6 0 0 1-1.13-3.51V7.71c0-1.84.82-3.49 2.12-4.61v4.14c0 .39.32.71.7.71.39 0 .71-.32.71-.71V2.17q.7-.35 1.46-.48v3.66c0 .4.32.71.71.71a.7.7 0 0 0 .71-.71V1.6a6.1 6.1 0 0 1 5.33 3.72"
              fill="currentColor"
            />
            <path
              d="M18.12 8.48v3.94a6.13 6.13 0 0 1-7.27 6.01l-.15-.03-.41-.11a6 6 0 0 1-1-.39l-.08-.04q-.15-.07-.3-.17z"
              fill="currentColor"
            />
            <path
              d="M21.75 10.6v2a9.76 9.76 0 0 1-15.57 7.82l1.08-1.08a8.26 8.26 0 0 0 12.99-6.74v-2c0-.41.34-.75.75-.75s.75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M21.77 1.83a.77.77 0 0 0-1.09 0L2.23 20.29c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 2.91a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMicrophoneSlash;
