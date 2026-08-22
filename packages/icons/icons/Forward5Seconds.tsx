import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconForward5Seconds = forwardRef<SVGSVGElement, IconProps>(
  function IconForward5Seconds(
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
              d="M14.65 4.47 12.67 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.76 7.8a9 9 0 0 1 1.8 5.31 8.89 8.89 0 1 1-6.91-8.65"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.58 10.83h-3.06l-.76 2.29h2.29a1.53 1.53 0 1 1 0 3.06h-2.29"
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
              d="M20.15 7.09a.75.75 0 1 0-1.16.94 8 8 0 0 1 1.82 4.8 8.13 8.13 0 1 1-6.59-7.69h.12q.16.08.33.08A.76.76 0 0 0 15.26 4l-1.98-2.47a.75.75 0 0 0-1.05-.12.76.76 0 0 0-.12 1.05l.83 1.03-.58-.01a9.64 9.64 0 1 0 9.97 9.29 9.7 9.7 0 0 0-2.18-5.68"
              fill="currentColor"
            />
            <path
              d="M13.05 16.92h-2.29a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.29a.78.78 0 0 0 0-1.56h-2.29a.75.75 0 0 1-.71-.99l.76-2.29c.1-.31.39-.51.71-.51h3.06c.4 0 .75.34.75.75s-.34.75-.75.75h-2.52l-.26.79h1.25a2.28 2.28 0 1 1 0 4.56"
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
              d="M20.15 7.09a.75.75 0 1 0-1.16.94 8 8 0 0 1 1.82 4.8 8.13 8.13 0 1 1-8.42-7.84q.85-.03 1.82.16h.12q.16.08.33.08a.76.76 0 0 0 .59-1.22l-1.98-2.47a.75.75 0 0 0-1.05-.12.76.76 0 0 0-.12 1.05l.83 1.03-.58-.01a9.64 9.64 0 1 0 9.97 9.29 9.6 9.6 0 0 0-2.17-5.69"
              fill="currentColor"
            />
            <path
              d="M13.05 16.92h-2.29a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.29a.78.78 0 0 0 0-1.56h-2.29a.75.75 0 0 1-.71-.99l.76-2.29c.1-.31.39-.51.71-.51h3.06c.41 0 .75.34.75.75s-.34.75-.75.75h-2.52l-.26.79h1.25a2.28 2.28 0 1 1 0 4.56"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconForward5Seconds;
