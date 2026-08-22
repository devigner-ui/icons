import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCrownLine = forwardRef<SVGSVGElement, IconProps>(
  function IconCrownLine(
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
              d="m21.6 13.56.24-2.43c.18-1.92.27-2.87-.06-3.27a1 1 0 0 0-.67-.37c-.48-.04-1.08.64-2.27 2-.62.7-.93 1.06-1.27 1.11q-.3.04-.57-.09c-.31-.16-.53-.6-.95-1.46l-2.24-4.59C13.01 2.82 12.61 2 12 2s-1.01.82-1.81 2.46L7.95 9.05c-.42.87-.64 1.3-.95 1.46a1 1 0 0 1-.57.1c-.34-.06-.65-.41-1.27-1.12-1.2-1.36-1.79-2.04-2.27-2a1 1 0 0 0-.67.37c-.33.4-.24 1.35-.06 3.27l.23 2.43c.38 4.01.57 6.02 1.75 7.23S7.1 22 10.64 22h2.72c3.54 0 5.32 0 6.5-1.21 1.18-1.2 1.37-3.22 1.75-7.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 18h6"
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
              d="m21.84 11.13-.23 2.43c-.38 4.01-.57 6.02-1.75 7.23S16.9 22 13.36 22h-2.72c-3.54 0-5.32 0-6.5-1.21-1.18-1.2-1.37-3.22-1.75-7.23l-.23-2.43c-.18-1.92-.27-2.87.06-3.27a1 1 0 0 1 .67-.37c.48-.04 1.08.64 2.27 2 .62.7.93 1.06 1.27 1.11q.3.04.57-.09c.31-.16.53-.6.95-1.46l2.24-4.59C10.99 2.82 11.39 2 12 2s1.01.82 1.81 2.46l2.24 4.59c.42.87.64 1.3.95 1.46q.28.14.57.1c.34-.06.65-.41 1.27-1.12 1.2-1.36 1.79-2.04 2.27-2a1 1 0 0 1 .67.37c.33.4.24 1.35.06 3.27"
              fill="currentColor"
            />
            <path
              d="M8.25 18c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
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
              d="m21.84 11.13-.23 2.43c-.38 4.01-.57 6.02-1.75 7.23S16.9 22 13.36 22h-2.72c-3.54 0-5.32 0-6.5-1.21-1.18-1.2-1.37-3.22-1.75-7.23l-.23-2.43c-.18-1.92-.27-2.87.06-3.27a1 1 0 0 1 .67-.37c.48-.04 1.08.64 2.27 2 .62.7.93 1.06 1.27 1.11q.3.04.57-.09c.31-.16.53-.6.95-1.46l2.24-4.59C10.99 2.82 11.39 2 12 2s1.01.82 1.81 2.46l2.24 4.59c.42.87.64 1.3.95 1.46q.28.14.57.1c.34-.06.65-.41 1.27-1.12 1.2-1.36 1.79-2.04 2.27-2a1 1 0 0 1 .67.37c.33.4.24 1.35.06 3.27M8.25 18c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCrownLine;
