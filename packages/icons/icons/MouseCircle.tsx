import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMouseCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconMouseCircle(
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
              d="M8 10a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8.5 10h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 10V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10.01 2.03-.15-.73zm6.68.14a.75.75 0 0 0-.66 1.35zM9.86 1.3c-4.91 1-8.61 5.37-8.61 10.62h1.5a9.3 9.3 0 0 1 7.41-9.15zM1.25 11.92A10.8 10.8 0 0 0 12 22.75v-1.5a9.3 9.3 0 0 1-9.25-9.33zM12 22.75a10.8 10.8 0 0 0 10.75-10.83h-1.5A9.3 9.3 0 0 1 12 21.25zm-.75-18.9v5.04h1.5V3.85zm11.5 8.07c0-4.29-2.47-8-6.06-9.75l-.66 1.35a9.3 9.3 0 0 1 5.22 8.4zM10.16 2.77c.51-.1 1.09.32 1.09 1.08h1.5c0-1.47-1.23-2.89-2.89-2.55z"
              fill="currentColor"
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
              d="M2.53 11.92A9.5 9.5 0 0 0 12 21.45a9.5 9.5 0 0 0 9.47-9.53 9.5 9.5 0 0 0-5.34-8.59.8.8 0 0 1-.35-1.03.76.76 0 0 1 1.02-.36 11.1 11.1 0 0 1 6.2 9.98C23 18.04 18.08 23 12 23S1 18.04 1 11.92C1 6.55 4.79 2.07 9.81 1.05c1.7-.34 2.96 1.1 2.96 2.62V5.8a4.14 4.14 0 0 1 3.32 4.08V14c0 2.3-1.83 4.15-4.09 4.15A4.1 4.1 0 0 1 7.9 14V9.88a4.14 4.14 0 0 1 3.33-4.08V3.67c0-.77-.58-1.21-1.11-1.1a9.5 9.5 0 0 0-7.59 9.35"
              fill="currentColor"
            />
            <path
              d="M7.9 13.95c0 2.3 1.84 4.15 4.1 4.15s4.1-1.86 4.1-4.15v-3.37H7.9z"
              fill="currentColor"
            />
            <path
              d="M12.77 9.34h3.25c-.31-1.67-1.6-3.3-3.25-3.61z"
              fill="currentColor"
            />
            <path
              d="M11.23 9.34V5.73c-1.64.32-2.94 1.94-3.25 3.6z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 21.45a9.5 9.5 0 0 1-9.47-9.53 9.5 9.5 0 0 1 7.59-9.35c.53-.11 1.11.33 1.11 1.1v2.06h1.54V3.67c0-1.51-1.27-2.96-2.96-2.62A11.1 11.1 0 0 0 1 11.92C1 18.04 5.92 23 12 23s11-4.96 11-11.08a11.1 11.1 0 0 0-6.2-9.98.76.76 0 0 0-1.02.36.8.8 0 0 0 .35 1.03 9.5 9.5 0 0 1 5.34 8.59A9.5 9.5 0 0 1 12 21.45"
              fill="currentColor"
            />
            <path
              d="M7.9 13.95c0 2.3 1.84 4.15 4.1 4.15s4.1-1.85 4.1-4.15v-3.37H7.9z"
              fill="currentColor"
            />
            <path
              d="M12.77 9.34h3.25c-.31-1.67-1.6-3.3-3.25-3.61z"
              fill="currentColor"
            />
            <path
              d="M11.23 9.34V5.73c-1.64.32-2.94 1.94-3.25 3.6z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMouseCircle;
