import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConvert3dCube = forwardRef<SVGSVGElement, IconProps>(
  function IconConvert3dCube(
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
              d="M22.67 15a7 7 0 0 1-7 7l1.05-1.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 9a7 7 0 0 1 7-7L8.62 3.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m14.37 4.45 3.98 2.3 3.94-2.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.35 10.82V6.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m17.41 2.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38 1 1.68l2.4 1.33c.5.29 1.34.29 1.86 0l2.4-1.33c.54-.3 1-1.06 1-1.68V5.22c0-.62-.45-1.38-1-1.68l-2.4-1.33a2.2 2.2 0 0 0-1.87 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.02 15.45 7 17.75l3.95-2.29"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 21.82v-4.08"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m6.06 13.21-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38 1 1.68l2.4 1.33c.5.29 1.34.29 1.86 0l2.4-1.33c.54-.3 1-1.06 1-1.68v-2.54c0-.62-.45-1.38-1-1.68l-2.4-1.33a2.2 2.2 0 0 0-1.87 0"
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
              d="M15.67 22.75a.75.75 0 0 1-.64-1.13l1.05-1.75a.75.75 0 0 1 1.03-.26c.36.21.47.67.26 1.03l-.27.45A6.3 6.3 0 0 0 21.93 15c0-.41.34-.75.75-.75s.75.34.75.75a7.8 7.8 0 0 1-7.76 7.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 9.75A.76.76 0 0 1 1.92 9a7.76 7.76 0 0 1 7.75-7.75.75.75 0 0 1 .64 1.13L9.26 4.13a.75.75 0 0 1-1.03.26.75.75 0 0 1-.26-1.03l.27-.45A6.3 6.3 0 0 0 3.41 9a.74.74 0 0 1-.74.75"
              fill="currentColor"
            />
            <path
              d="M11.34 13.85 8.2 12.16a1.1 1.1 0 0 0-1.06 0L4 13.85a.7.7 0 0 0-.37.64c0 .27.14.52.37.64l3.14 1.69a1.1 1.1 0 0 0 1.06 0l3.14-1.69a.7.7 0 0 0 .37-.64.8.8 0 0 0-.37-.64"
              fill="currentColor"
            />
            <path
              d="M6.62 17.41 3.7 15.95a.72.72 0 0 0-1.04.64v2.76c0 .48.26.91.69 1.12l2.92 1.46q.15.08.32.08.2 0 .38-.11a.7.7 0 0 0 .34-.61v-2.76c.01-.48-.26-.91-.69-1.12"
              fill="currentColor"
            />
            <path
              d="M12.33 15.98a.7.7 0 0 0-.7-.03l-2.92 1.46c-.43.21-.69.64-.69 1.12v2.76a.72.72 0 0 0 1.04.64l2.92-1.46c.43-.21.69-.64.69-1.12v-2.76a.7.7 0 0 0-.34-.61"
              fill="currentColor"
            />
            <path
              d="M21.34 3.83 18.2 2.14a1.1 1.1 0 0 0-1.06 0L14 3.83a.7.7 0 0 0-.37.64c0 .27.14.52.37.64l3.14 1.69a1.1 1.1 0 0 0 1.06 0l3.14-1.69a.7.7 0 0 0 .37-.64.7.7 0 0 0-.37-.64"
              fill="currentColor"
            />
            <path
              d="M16.62 7.38 13.7 5.92a.72.72 0 0 0-1.04.64v2.76c0 .48.26.91.69 1.12l2.92 1.46q.15.08.32.08.2 0 .38-.11a.7.7 0 0 0 .34-.61V8.5c.01-.48-.26-.91-.69-1.12"
              fill="currentColor"
            />
            <path
              d="M22.33 5.95a.7.7 0 0 0-.7-.03l-2.92 1.46c-.43.21-.69.64-.69 1.12v2.76a.72.72 0 0 0 1.04.64l2.92-1.46c.43-.21.69-.64.69-1.12V6.56a.7.7 0 0 0-.34-.61"
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
              d="M15.67 22.75a.75.75 0 0 1-.64-1.13l1.05-1.75a.75.75 0 0 1 1.03-.26c.36.21.47.67.26 1.03l-.27.45A6.3 6.3 0 0 0 21.93 15c0-.41.34-.75.75-.75s.75.34.75.75a7.8 7.8 0 0 1-7.76 7.75"
              fill="currentColor"
            />
            <path
              d="M2.67 9.75A.76.76 0 0 1 1.92 9a7.76 7.76 0 0 1 7.75-7.75.75.75 0 0 1 .64 1.13L9.26 4.14a.75.75 0 0 1-1.03.25.75.75 0 0 1-.25-1.03l.27-.45A6.26 6.26 0 0 0 3.42 9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M11.34 13.85 8.2 12.16a1.1 1.1 0 0 0-1.06 0L4 13.85a.7.7 0 0 0-.37.64c0 .27.14.52.37.64l3.14 1.69a1.1 1.1 0 0 0 1.06 0l3.14-1.69a.7.7 0 0 0 .37-.64.8.8 0 0 0-.37-.64"
              fill="currentColor"
            />
            <path
              d="M6.62 17.41 3.7 15.95a.7.7 0 0 0-.7.03.7.7 0 0 0-.33.61v2.76c0 .48.26.91.7 1.12l2.91 1.46q.15.06.32.07.2 0 .38-.11a.7.7 0 0 0 .34-.61v-2.76c0-.47-.27-.9-.7-1.11"
              fill="currentColor"
            />
            <path
              d="M12.33 15.98a.7.7 0 0 0-.7-.03l-2.92 1.46c-.43.21-.69.64-.69 1.12v2.76q.01.4.34.61.18.1.38.1.17 0 .32-.08l2.92-1.46c.43-.21.7-.64.7-1.12v-2.76a.7.7 0 0 0-.35-.6"
              fill="currentColor"
            />
            <path
              d="M21.34 3.83 18.2 2.14a1.1 1.1 0 0 0-1.06 0L14 3.83a.7.7 0 0 0-.37.64c0 .27.14.52.37.64l3.14 1.69a1.1 1.1 0 0 0 1.06 0l3.14-1.69a.7.7 0 0 0 .37-.64.7.7 0 0 0-.37-.64"
              fill="currentColor"
            />
            <path
              d="M16.62 7.38 13.7 5.92a.7.7 0 0 0-.7.03.7.7 0 0 0-.33.61v2.76c0 .48.26.91.7 1.12l2.91 1.46q.15.08.32.08.2 0 .38-.11a.7.7 0 0 0 .34-.61V8.5c0-.48-.27-.91-.7-1.12"
              fill="currentColor"
            />
            <path
              d="M22.33 5.95a.7.7 0 0 0-.7-.03l-2.92 1.46c-.43.21-.69.64-.69 1.12v2.76a.72.72 0 0 0 1.04.64l2.92-1.46c.43-.22.7-.65.7-1.12V6.56a.7.7 0 0 0-.35-.61"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconConvert3dCube;
