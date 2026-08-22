import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStretching = forwardRef<SVGSVGElement, IconProps>(
  function IconStretching(
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
              cx="14.5"
              cy="4.50049"
              r="2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 22 3.85-1.37a2 2 0 0 0 1.07-.91l2.71-4.85a2 2 0 0 0 .26-.97v-2.62a1.5 1.5 0 0 0-2.1-1.38l-2.45 1.05a1.5 1.5 0 0 0-.45 2.45l.61.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 22v-5.23a2 2 0 0 0-2.32-1.98l-1.01.17"
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
              d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.56 14.05a2.75 2.75 0 0 1 3.19 2.72V22a.75.75 0 0 1-1.5 0v-5.23c0-.77-.69-1.36-1.45-1.24l-1.01.17a.75.75 0 1 1-.24-1.48z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.5 9.2a2.25 2.25 0 0 1 3.14 2.08v2.62q0 .71-.35 1.34l-2.71 4.85a2.8 2.8 0 0 1-1.48 1.24l-3.85 1.38a.75.75 0 0 1-.5-1.42l3.85-1.37q.43-.16.67-.57l2.71-4.84q.16-.29.16-.61v-2.62c0-.54-.55-.9-1.05-.7l-2.45 1.06a.75.75 0 0 0-.23 1.22l.61.6a.75.75 0 1 1-1.04 1.08l-.62-.6a2.25 2.25 0 0 1 .69-3.68z"
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
              d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.5 9.2a2.25 2.25 0 0 1 3.14 2.08v2.62q0 .71-.35 1.34l-2.71 4.85a2.8 2.8 0 0 1-1.48 1.24l-3.85 1.38a.75.75 0 1 1-.5-1.42l3.85-1.37q.43-.16.67-.57l2.71-4.84q.15-.3.16-.61v-2.62c0-.54-.55-.9-1.05-.7l-2.45 1.06a.75.75 0 0 0-.23 1.22l.61.6a.75.75 0 0 1-1.04 1.08l-.62-.6a2.25 2.25 0 0 1 .69-3.68zm6.06 4.85a2.75 2.75 0 0 1 3.19 2.72V22a.75.75 0 0 1-1.5 0v-5.23c0-.77-.69-1.36-1.45-1.24l-1.01.17a.75.75 0 0 1-.24-1.48z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStretching;
