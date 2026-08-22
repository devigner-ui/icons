import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmallcaps = forwardRef<SVGSVGElement, IconProps>(
  function IconSmallcaps(
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
              d="M2.66 5.93V4.42c0-1.02.83-1.85 1.85-1.85h12.92c1.02 0 1.85.83 1.85 1.85v1.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.97 18.1V3.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.57 18.1h5.58"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M14.35 10.34h7.01c.73 0 1.32.59 1.32 1.32v.8"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.75 21.43V10.87"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.61 21.43h4.28"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 7.81v8.38c0 3.64-2.17 5.81-5.8 5.81h-8.4l-.59-.02a6 6 0 0 1-3.09-1.03 4 4 0 0 1-1.08-1.08 6 6 0 0 1-1.05-3.68V7.81c0-3.44 1.94-5.57 5.22-5.78L8.5 2h8.37q2.25 0 3.68 1.05.65.44 1.08 1.08a6 6 0 0 1 1.05 3.68"
              fill="currentColor"
            />
            <path
              d="M12.06 14.38h-.37V7.91h2.57q.18.02.2.2v.78c0 .41.34.75.75.75s.75-.34.75-.75V8.1c0-.94-.76-1.7-1.7-1.7H7.62c-.94 0-1.7.76-1.7 1.7v.78a.75.75 0 1 0 1.5 0V8.1c0-.11.1-.2.2-.2h2.57v6.48h-1a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.86c.41 0 .75-.34.75-.75a.75.75 0 0 0-.74-.75"
              fill="currentColor"
            />
            <path
              d="M18 10.4h-3.6a.76.76 0 0 0-.76.75c0 .41.34.75.75.75h.48v4.2h-.35a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.2c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-.35v-4.2h1.55v.34c0 .41.34.75.75.75s.75-.34.75-.75v-.41c0-.79-.64-1.43-1.43-1.43"
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
              d="M21.62 4.13a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.86 2H8.48q-.3 0-.59.03c-3.28.21-5.22 2.34-5.22 5.78v8.38q0 2.24 1.05 3.68.45.64 1.08 1.08 1.24.9 3.1 1.03l.58.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81q0-2.25-1.05-3.68m-9.56 11.75H9.2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1V7.91H7.62a.2.2 0 0 0-.2.2v.78c0 .41-.34.74-.75.74a.75.75 0 0 1-.75-.75V8.1c0-.94.76-1.7 1.7-1.7h6.64c.94 0 1.7.76 1.7 1.7v.78c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8.1a.2.2 0 0 0-.2-.2H11.7v6.48h.37c.41 0 .75.34.75.75s-.34.75-.75.75m7.36-3.65c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-.33h-1.55v4.2h.35c.41 0 .75.34.75.75s-.34.75-.75.75h-2.2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.35v-4.2h-.48a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75H18c.8 0 1.43.64 1.43 1.43z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmallcaps;
