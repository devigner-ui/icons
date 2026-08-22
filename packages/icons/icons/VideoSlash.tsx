import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoSlash(
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
              d="M17.3 7.58s.03-.95 0-1.26c-.17-2.04-1.5-2.74-4.11-2.74H6.88c-3.16 0-4.21 1.05-4.21 4.21v8.42a4.2 4.2 0 0 0 1.37 3.34l.63.45"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.41 10.95v5.26c0 3.16-1.05 4.21-4.21 4.21H7.93"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 6.74v9.07c0 1.67-1.12 2.25-2.48 1.29l-2.78-1.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.69 2.19-20 20"
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
              d="M18.32 6.56 4.87 20.01c-1.4-.89-1.95-2.48-1.95-4.01V8c0-3.42 1.33-4.75 4.75-4.75h6c2.89 0 4.29.95 4.65 3.31"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.42 9.25V16l-.01.21-.01.21h.01c-.11 3.11-1.46 4.33-4.74 4.33h-6q-.37 0-.71-.04z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m18.4 16.42.01-.21v.21z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.41 7.57v.22z"
              fill="currentColor"
            />
            <path
              d="M23.42 8.38v7.24c0 1.43-.69 2-1.1 2.21-.19.1-.48.21-.85.21-.43 0-.97-.14-1.59-.58l-1.47-1.04h-.01l.01-.21.01-.21V9.25l3.27-3.27q.4.04.63.19c.41.21 1.1.78 1.1 2.21"
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
              opacity={duotone ? "0.4" : "1"}
              d="M18.41 7.57v.22l-.01-.21z"
              fill="currentColor"
            />
            <path
              d="M17.95 6.56 4.5 20.01c-1.4-.89-1.95-2.48-1.95-4.01V8c0-3.42 1.33-4.75 4.75-4.75h6c2.89 0 4.28.95 4.65 3.31"
              fill="currentColor"
            />
            <path
              d="M22.07 2.23a.77.77 0 0 0-1.09 0L2.52 20.69c-.3.3-.3.79 0 1.09q.24.21.54.22.3 0 .54-.23L22.07 3.31c.3-.3.3-.78 0-1.08"
              fill="currentColor"
            />
            <path
              d="M23.05 8.38v7.24c0 1.43-.7 2-1.1 2.21-.19.1-.49.21-.86.21-.43 0-.96-.14-1.58-.58l-1.48-1.04c-.07 2.21-.77 3.47-2.36 4q-.96.34-2.38.33h-6q-.36 0-.71-.04l9.09-9.08 5.65-5.65q.39.04.63.19c.4.21 1.1.78 1.1 2.21"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoSlash;
