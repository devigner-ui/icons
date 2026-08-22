import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProfile2user = forwardRef<SVGSVGElement, IconProps>(
  function IconProfile2user(
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
              d="M9.83 10.87H9.5a4.44 4.44 0 1 1 .33 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.08 4a3.5 3.5 0 1 1-.13 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.83 14.56c-2.42 1.62-2.42 4.26 0 5.87 2.75 1.84 7.26 1.84 10.01 0 2.42-1.62 2.42-4.26 0-5.87-2.74-1.83-7.25-1.83-10.01 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.01 20q1.1-.23 1.96-.87c1.56-1.17 1.56-3.1 0-4.27a5 5 0 0 0-1.93-.86"
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
              d="M9.67 2a4.75 4.75 0 0 0-.12 9.49h.29A4.74 4.74 0 0 0 9.67 2"
              fill="currentColor"
            />
            <path
              d="M14.75 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21A9 9 0 0 0 9.67 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.66 7.34a3.6 3.6 0 0 1-3.13 3.87h-.05q-.1 0-.17.02a3.6 3.6 0 0 1-2.53-.83 4.6 4.6 0 0 0 .73-5.98q.58-.29 1.27-.35a3.6 3.6 0 0 1 3.88 3.27"
              fill="currentColor"
            />
            <path
              d="M22.66 16.59c-.08.97-.7 1.81-1.74 2.38-1 .55-2.26.81-3.51.78a3.6 3.6 0 0 0 1.22-2.32c.1-1.24-.49-2.43-1.67-3.38a8 8 0 0 0-2.3-1.26c2.21-.64 4.99-.21 6.7 1.17.92.74 1.39 1.67 1.3 2.63"
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
              d="M9.67 2a4.75 4.75 0 0 0-.12 9.49h.29A4.74 4.74 0 0 0 9.67 2"
              fill="currentColor"
            />
            <path
              d="M14.75 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21A9 9 0 0 0 9.67 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21"
              fill="currentColor"
            />
            <path
              d="M20.66 7.34a3.6 3.6 0 0 1-3.13 3.87h-.05q-.1 0-.17.02a3.6 3.6 0 0 1-2.53-.83 4.6 4.6 0 0 0 .73-5.98q.58-.29 1.27-.35a3.6 3.6 0 0 1 3.88 3.27"
              fill="currentColor"
            />
            <path
              d="M22.66 16.59c-.08.97-.7 1.81-1.74 2.38-1 .55-2.26.81-3.51.78a3.6 3.6 0 0 0 1.22-2.32c.1-1.24-.49-2.43-1.67-3.38a8 8 0 0 0-2.3-1.26c2.21-.64 4.99-.21 6.7 1.17.92.74 1.39 1.67 1.3 2.63"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconProfile2user;
