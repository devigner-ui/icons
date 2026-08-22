import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextItalic2 = forwardRef<SVGSVGElement, IconProps>(
  function IconTextItalic2(
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
              d="M10.3 3h9.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.8 21h9.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14.92 3-4.5 18"
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
              d="M22.67 7.81v8.38c0 3.64-2.17 5.81-5.8 5.81h-8.4l-.59-.02a6 6 0 0 1-3.09-1.03 4 4 0 0 1-1.08-1.08 6 6 0 0 1-1.05-3.68V7.81c0-3.44 1.94-5.57 5.22-5.78L8.5 2h8.37q2.25 0 3.68 1.05.65.44 1.08 1.08a6 6 0 0 1 1.05 3.68"
              fill="currentColor"
            />
            <path
              d="M16.54 6.01h-5.38a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h1.9l-2.25 8.97h-2a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h5.38c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-1.84l2.24-8.97h1.95c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
              d="M21.62 4.13a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.86 2H8.48q-.3 0-.59.03c-3.28.21-5.22 2.34-5.22 5.78v8.38q0 2.24 1.05 3.68.45.64 1.08 1.08 1.24.9 3.1 1.03l.58.02h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81q0-2.25-1.05-3.68m-5.08 3.38H14.6l-2.24 8.97h1.84c.41 0 .75.34.75.75s-.34.75-.75.75H8.8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2l2.24-8.97h-1.89a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.38c.41 0 .75.34.75.75s-.33.75-.74.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextItalic2;
