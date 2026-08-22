import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWatchSquareMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconWatchSquareMinimalistic(
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
              d="M5 12c0-2.8 0-4.21.67-5.22a4 4 0 0 1 1.1-1.1C7.8 5 9.2 5 12 5s4.21 0 5.22.67a4 4 0 0 1 1.1 1.1C19 7.8 19 9.2 19 12s0 4.21-.67 5.22a4 4 0 0 1-1.1 1.1C16.2 19 14.8 19 12 19s-4.21 0-5.22-.67a4 4 0 0 1-1.1-1.1C5 16.2 5 14.8 5 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 9v3.08L14 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 2h10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7 22h10"
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
              d="M6.78 18.33c1 .67 2.41.67 5.22.67s4.21 0 5.22-.67a4 4 0 0 0 1.1-1.1C19 16.2 19 14.8 19 12s0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C16.2 5 14.8 5 12 5s-4.21 0-5.22.67a4 4 0 0 0-1.1 1.1C5 7.8 5 9.2 5 12s0 4.21.67 5.22a4 4 0 0 0 1.1 1.1"
              fill="currentColor"
            />
            <path
              d="M12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 1 1-1.04 1.08l-2-1.92a.8.8 0 0 1-.23-.54V9c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m0 20c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
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
              d="M5.67 6.78C5 7.78 5 9.19 5 12s0 4.21.67 5.22a4 4 0 0 0 1.1 1.1C7.8 19 9.2 19 12 19s4.21 0 5.22-.67a4 4 0 0 0 1.1-1.1C19 16.2 19 14.8 19 12s0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C16.2 5 14.8 5 12 5s-4.21 0-5.22.67a4 4 0 0 0-1.1 1.1M12 8.25c.41 0 .75.34.75.75v2.76l1.77 1.7a.75.75 0 0 1-1.04 1.08l-2-1.92a.8.8 0 0 1-.23-.54V9c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.25 2c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 2m0 20c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWatchSquareMinimalistic;
