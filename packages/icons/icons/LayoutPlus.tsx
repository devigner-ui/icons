import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLayoutPlus = forwardRef<SVGSVGElement, IconProps>(
  function IconLayoutPlus(
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
              d="M22.67 8.27V4.23c0-1.59-.64-2.23-2.23-2.23H16.4c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.17 8.52V3.98c0-1.41-.64-1.98-2.23-1.98H4.9c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.17 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.9c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M15.17 17.5h6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d="M18.17 20.5v-6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            </g>
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
              d="M21.17 16.75h-2.25V14.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v2.25h-2.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.25v2.25c0 .41.34.75.75.75s.75-.34.75-.75v-2.25h2.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 8.52V3.98c0-1.41-.64-1.98-2.23-1.98H16.4c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97"
              fill="currentColor"
            />
            <path
              d="M11.17 8.52V3.98c0-1.41-.64-1.98-2.23-1.98H4.9c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.17 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.9c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23"
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
              d="M21.17 16.75h-2.25V14.5a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v2.25h-2.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.25v2.25c0 .41.34.75.75.75s.75-.34.75-.75v-2.25h2.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="M22.67 8.52V3.98c0-1.41-.64-1.98-2.23-1.98H16.4c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97"
              fill="currentColor"
            />
            <path
              d="M11.17 8.52V3.98c0-1.41-.64-1.98-2.23-1.98H4.9c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97"
              fill="currentColor"
            />
            <path
              d="M11.17 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H4.9c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLayoutPlus;
