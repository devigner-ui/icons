import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserId = forwardRef<SVGSVGElement, IconProps>(function IconUserId(
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
            cx="9"
            cy="9.00049"
            r="2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M13 15c0 1.1 0 2-4 2s-4-.9-4-2 1.8-2 4-2 4 .9 4 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12c0-3.77 0-5.66 1.17-6.83S6.23 4 10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M19 12h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19 9h-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 15h-3"
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
            d="M14 4h-4C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4c3.77 0 5.66 0 6.83-1.17S22 15.77 22 12s0-5.66-1.17-6.83S17.77 4 14 4"
            fill="currentColor"
          />
          <path
            d="M13.25 9c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M14.25 12c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M15.25 15c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
          <path
            d="M9 17c4 0 4-.9 4-2s-1.8-2-4-2-4 .9-4 2 0 2 4 2"
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
            d="M10 4h4c3.77 0 5.66 0 6.83 1.17S22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12s0-5.66 1.17-6.83S6.23 4 10 4m3.25 5c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m1 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m1 3c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M11 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 8c4 0 4-.9 4-2s-1.8-2-4-2-4 .9-4 2 0 2 4 2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUserId;
