import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRadioMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconRadioMinimalistic(
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
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="8"
              cy="14"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13.5 11H19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 14H19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M13.5 17H19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6.5 6 15 2"
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
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 11.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M4.25 14a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 11c0-.41.34-.75.75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 14c0-.41.34-.75.75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.75 17c0-.41.34-.75.75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M15.38 2.65a.75.75 0 1 0-.76-1.3l-7.99 4.7A56 56 0 0 1 9.68 6z"
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
              d="M5.75 14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.32 3.68a.75.75 0 1 0-.64-1.36L6.77 6.05c-1.74.08-2.82.35-3.6 1.12C2 8.34 2 10.23 2 14s0 5.66 1.17 6.83S6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14s0-5.66-1.17-6.83S17.77 6 14 6h-3.61zM8 10.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m4.75.75c0-.41.34-.75.75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 0-1.5zM12.75 17c0-.41.34-.75.75-.75H19a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRadioMinimalistic;
