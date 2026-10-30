import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLockSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconLockSlash(
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
            d="M10.02 17.52a2.5 2.5 0 0 0 3.97-3.04"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.69 21.26c-.76.55-1.94.74-3.69.74H7q-.54 0-1-.03"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.82 20.8C2.21 20.04 2 18.83 2 17v-2c0-4 1-5 5-5h10q.54 0 1 .03c3.17.18 4 1.33 4 4.97v2"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6 10V8c0-3.31 1-6 6-6 4.15 0 5.54 1.38 5.9 3.56"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 2 2 22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              opacity={duotone ? "0.4" : "1"}
              d="M10.02 17.52a2.5 2.5 0 0 0 3.97-3.04"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.82 20.8C2.21 20.04 2 18.83 2 17v-2c0-4 1-5 5-5h10q.54 0 1 .03c3.17.18 4 1.33 4 4.97v2c0 4-1 5-5 5H7q-.54 0-1-.03"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 10V8c0-3.31 1-6 6-6 4.15 0 5.54 1.38 5.9 3.56"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2 2 22"
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
              d="M13.63 15.72a1.63 1.63 0 0 1-3.08.73l2.18-2.18c.53.26.9.81.9 1.45"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.35 9.44C3.25 9.44 2 10.69 2 14.79v1.86c0 2.05.31 3.39 1.14 4.21L9.1 14.9a3 3 0 0 1 2.08-2.08l3.38-3.38z"
              fill="currentColor"
            />
            <path
              d="m18.13 5.87-1.26 1.26C16.83 5.35 16.16 3.4 12 3.4c-4.05 0-4.88 1.95-4.88 4.88v1.17q-.77 0-1.4.08V8.28C5.72 5.58 6.37 2 12 2q5.32 0 6.13 3.87"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 14.79v1.86c0 4.1-1.25 5.35-5.35 5.35h-9.3q-1.26 0-2.18-.17l4.36-4.36a3.02 3.02 0 1 0 4.22-4.22l3.79-3.79C20.93 9.65 22 11 22 14.79"
              fill="currentColor"
            />
            <path
              d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
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
              d="M13.63 15.72a1.63 1.63 0 0 1-3.08.73l2.18-2.18c.53.26.9.81.9 1.45"
              fill="currentColor"
            />
            <path
              d="M21.77 2.23a.77.77 0 0 0-1.09 0l-2.81 2.81Q16.71 2.01 12 2C6.37 2 5.72 5.58 5.72 8.28v1.25h.03C2.92 9.87 2 11.28 2 14.79v1.86c0 1.6.19 2.76.67 3.59l-.45.45c-.3.3-.3.79 0 1.09q.25.21.55.22.3 0 .54-.23L21.77 3.31a.74.74 0 0 0 0-1.08M7.35 9.44h-.23V8.28c0-2.93.83-4.88 4.88-4.88 3.4 0 4.47 1.3 4.77 2.75l-3.29 3.29z"
              fill="currentColor"
            />
            <path
              d="M22 14.79v1.86c0 4.1-1.25 5.35-5.35 5.35H7.41a1 1 0 0 1-.7-1.71l2.82-2.82.23.28c.7.76 1.74 1.16 2.89.92q.14-.02.27-.08.13-.03.25-.09a2 2 0 0 0 .75-.45 3 3 0 0 0 .55-.59q.2-.27.31-.57.06-.12.09-.25.05-.13.08-.27a3 3 0 0 0-1.2-3.12l3.12-3.12.14-.13c.4-.33.91-.49 1.42-.45l.28.04a7 7 0 0 1 .96.25q.43.16.77.39a3 3 0 0 1 1.04 1.26 5 5 0 0 1 .31.97l.09.45.06.48q.06.63.06 1.4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLockSlash;
