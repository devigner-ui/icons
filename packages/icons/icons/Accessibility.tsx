import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAccessibility = forwardRef<SVGSVGElement, IconProps>(
  function IconAccessibility(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18 10s-3.54 1.5-6 1.5S6 10 6 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 12v1.45a3 3 0 0 0 .48 1.62L15 19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 12v1.45a3 3 0 0 1-.48 1.62L9 19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              fill="currentColor"
            />
            <path d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
            <path
              d="M6.3 9.3a.75.75 0 0 0-.6 1.39h.02l.03.02.57.23q.6.22 1.53.53c.99.3 2.24.63 3.4.74v1.24q0 .66-.36 1.22l-2.52 3.92a.75.75 0 0 0 1.26.82L12 15.72l2.37 3.69a.75.75 0 0 0 1.26-.82l-2.52-3.92a2.3 2.3 0 0 1-.36-1.22v-1.24c1.16-.1 2.41-.43 3.4-.74a28 28 0 0 0 2.1-.76l.03-.01h.01a.75.75 0 0 0-.58-1.39h-.01l-.03.01-.53.21q-.55.22-1.44.5c-1.18.38-2.59.72-3.7.72s-2.52-.34-3.7-.72a27 27 0 0 1-1.97-.7z"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m0-13a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-5.7.3a.75.75 0 0 0-.6 1.39h.02l.03.02.57.23q.6.22 1.53.53c.99.3 2.24.63 3.4.74v1.24q0 .66-.36 1.22l-2.52 3.92a.75.75 0 0 0 1.26.82L12 15.72l2.37 3.69a.75.75 0 0 0 1.26-.82l-2.52-3.92a2.3 2.3 0 0 1-.36-1.22v-1.24c1.16-.1 2.41-.43 3.4-.74a28 28 0 0 0 2.1-.76l.03-.01h.01a.75.75 0 0 0-.58-1.39h-.01l-.03.01-.53.21q-.55.22-1.44.5c-1.18.38-2.59.72-3.7.72s-2.52-.34-3.7-.72a27 27 0 0 1-1.97-.7z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAccessibility;
