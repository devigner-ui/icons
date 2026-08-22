import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSortByTime = forwardRef<SVGSVGElement, IconProps>(
  function IconSortByTime(
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
              d="M10 7H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 12H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 17H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="17"
              cy="12.0002"
              r="5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M17 10v1.85L18 13"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10m.75-7a.75.75 0 0 0-1.5 0v1.85q0 .28.18.49l1 1.15a.75.75 0 1 0 1.14-.98l-.82-.94z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.25 7c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7m0 5c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
                fill="currentColor"
              />
            </g>
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
              d="M1.25 7c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7m0 5c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10m.75-7a.75.75 0 0 0-1.5 0v1.85q0 .28.18.49l1 1.15a.75.75 0 1 0 1.14-.98l-.82-.94z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSortByTime;
