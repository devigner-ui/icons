import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStethoscope = forwardRef<SVGSVGElement, IconProps>(
  function IconStethoscope(
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
              d="M9 14.24V17a5 5 0 0 0 5 5h.88a4.1 4.1 0 0 0 3.97-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M5.43 3h-.1l-.6.01a3 3 0 0 0-2.72 2.73l-.01.6v.9a7 7 0 0 0 7 7c3.7 0 6.71-3.01 6.71-6.72V5.74A3 3 0 0 0 12.97 3l-.6-.01h-.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="19"
              cy="16.0002"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 2v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 2v2"
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
            <circle cx="19" cy="16.0002" r="3" fill="currentColor" />
            <path
              d="M12 1.25c.41 0 .75.34.75.75v.25l.3.01a3.75 3.75 0 0 1 3.41 4.04v1.22A7.46 7.46 0 0 1 9 15a7.75 7.75 0 0 1-7.75-7.75V6.3l.01-.63a3.75 3.75 0 0 1 3.99-3.42V2a.75.75 0 1 1 1.5 0v2a.75.75 0 1 1-1.5 0v-.25H4.8c-1.08.1-1.95.97-2.04 2.05l-.01.54v.9c0 3.45 2.8 6.25 6.25 6.25 3.3 0 5.96-2.67 5.96-5.97V5.8a2.25 2.25 0 0 0-2.21-2.05V4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.25 14.95V17A5.75 5.75 0 0 0 14 22.75h.88c1.82 0 3.4-1 4.23-2.46q.36-.66.43-1.34a3 3 0 0 1-1.5-.1q-.05.4-.23.7a3.4 3.4 0 0 1-2.93 1.7H14A4.25 4.25 0 0 1 9.75 17v-2.05a8 8 0 0 1-1.5 0"
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
              d="M12 1.25c.41 0 .75.34.75.75v.25l.3.01a3.75 3.75 0 0 1 3.4 3.41l.01.63v1.22a7.47 7.47 0 0 1-6.71 7.43V17c0 2.35 1.9 4.25 4.25 4.25h.88c1.4 0 2.6-.85 3.11-2.07q.06-.14.09-.33a3 3 0 1 1 1.5.1q-.05.4-.2.81a4.9 4.9 0 0 1-4.5 2.99H14A5.75 5.75 0 0 1 8.25 17v-2.05a7.75 7.75 0 0 1-7-7.71V6.3l.01-.63a3.75 3.75 0 0 1 3.99-3.42V2a.75.75 0 1 1 1.5 0v2a.75.75 0 1 1-1.5 0v-.25H4.8c-1.08.1-1.95.97-2.04 2.05l-.01.54v.9c0 3.45 2.8 6.25 6.25 6.25 3.3 0 5.96-2.67 5.96-5.97V5.8a2.25 2.25 0 0 0-2.21-2.05V4a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStethoscope;
