import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBedsideTable3 = forwardRef<SVGSVGElement, IconProps>(
  function IconBedsideTable3(
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
              d="M19 22v-1.5M5 22v-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M2 10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v2c0 3.77 0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9 15.5h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 6.5h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 11h20"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 11h20v1c0 3.77 0 5.66-1.17 6.83q-.45.45-1.08.7V22a.75.75 0 0 1-1.5 0v-2.13C17.18 20 15.81 20 14 20h-4c-1.8 0-3.18 0-4.25-.13V22a.75.75 0 0 1-1.5 0v-2.47a3 3 0 0 1-1.08-.7C2 17.66 2 15.77 2 12zm6.25 4.5c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.17 3.17C2 4.34 2 6.23 2 10v1h20v-1c0-3.77 0-5.66-1.17-6.83S17.77 2 14 2h-4C6.23 2 4.34 2 3.17 3.17"
              fill="currentColor"
            />
            <path
              d="M9 5.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
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
              d="M2 10c0-3.77 0-5.66 1.17-6.83S6.23 2 10 2h4c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10v.25H2zm6.25-3.5c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 11.75h20V12c0 3.77 0 5.66-1.17 6.83q-.45.45-1.08.7V22a.75.75 0 0 1-1.5 0v-2.13C17.18 20 15.81 20 14 20h-4c-1.8 0-3.18 0-4.25-.13V22a.75.75 0 0 1-1.5 0v-2.47a3 3 0 0 1-1.08-.7C2 17.66 2 15.77 2 12zm6.25 3.75c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBedsideTable3;
