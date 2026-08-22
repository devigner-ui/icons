import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlarmRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconAlarmRemove(
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
              cy="13.0005"
              r="9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15 13H9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m3.5 4.5 4-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20.5 4.5-4-2.5"
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
              d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
              fill="currentColor"
            />
            <path
              d="M15 12.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.24 2.34c.21.34.11.78-.23 1l-3.9 2.4a.72.72 0 1 1-.77-1.23l3.9-2.4a.74.74 0 0 1 1 .23"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.76 2.34a.73.73 0 0 1 1-.23l3.9 2.41c.34.21.44.66.23 1a.73.73 0 0 1-1 .23l-3.9-2.41a.7.7 0 0 1-.23-1"
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
              d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m3-9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.14 1.6c.22.35.1.82-.24 1.04l-4 2.5a.75.75 0 0 1-.8-1.28l4-2.5a.75.75 0 0 1 1.04.24m7.72 0a.75.75 0 0 1 1.04-.24l4 2.5a.75.75 0 1 1-.8 1.28l-4-2.5a.75.75 0 0 1-.24-1.04"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlarmRemove;
