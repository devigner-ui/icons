import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBlackHole3 = forwardRef<SVGSVGElement, IconProps>(
  function IconBlackHole3(
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
              cx="12"
              cy="12"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 10c5 0 4.6 12-3 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.31 14c-5 0-4.6-12 3-12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 12.31c0-5 12-4.6 12 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 12c0 5-12 4.6-12-3"
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
              d="m9.1 12.78-.17-.33a8 8 0 0 1-.59-4.56C8.8 4.7 11 1.25 15.31 1.25a.75.75 0 0 1 0 1.5c-3.28 0-5.09 2.56-5.48 5.36q-.14.97-.04 1.86a3 3 0 0 1 4.58.2q.63.58 1.01 1.38c.63 1.29.82 2.94.59 4.56-.46 3.2-2.65 6.64-6.97 6.64a.75.75 0 0 1 0-1.5c3.28 0 5.09-2.56 5.48-5.36.11-.76.1-1.52 0-2.2a3 3 0 0 1-5.38-.9"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M13.25 12c0 .89-.51 1.58-1.45 2.03a6.6 6.6 0 0 1-3.7.45c-2.79-.4-5.35-2.2-5.35-5.48a.75.75 0 0 0-1.5 0c0 4.32 3.44 6.51 6.64 6.97 1.62.23 3.27.04 4.56-.59 1.31-.63 2.3-1.77 2.3-3.38a.75.75 0 0 0-1.5 0"
                fill="currentColor"
              />
              <path
                d="M10.75 12.31c0-.89.51-1.58 1.45-2.03a6.6 6.6 0 0 1 3.7-.45c2.79.4 5.35 2.2 5.35 5.48a.75.75 0 0 0 1.5 0c0-4.31-3.44-6.51-6.64-6.97a8 8 0 0 0-4.56.59c-1.31.63-2.3 1.77-2.3 3.38a.75.75 0 0 0 1.5 0"
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
              d="M8.93 12.45a4 4 0 0 0 1.82 1.95c-.79.18-1.7.22-2.64.08-2.8-.4-5.36-2.2-5.36-5.48a.75.75 0 0 0-1.5 0c0 4.32 3.44 6.51 6.64 6.97 1.62.23 3.27.04 4.56-.59a4 4 0 0 0 2-1.92c.13.74.15 1.58.03 2.43-.4 2.8-2.2 5.36-5.48 5.36a.75.75 0 0 0 0 1.5c4.32 0 6.51-3.44 6.97-6.64a8 8 0 0 0-.59-4.56A4.3 4.3 0 0 0 13.9 9.8q.95-.11 2 .03c2.79.4 5.35 2.2 5.35 5.48a.75.75 0 0 0 1.5 0c0-4.31-3.44-6.51-6.64-6.97a8 8 0 0 0-4.56.59c-.7.33-1.3.81-1.71 1.42a8 8 0 0 1-.01-2.24c.4-2.8 2.2-5.36 5.48-5.36a.75.75 0 0 0 0-1.5C11 1.25 8.8 4.69 8.34 7.89a8 8 0 0 0 .59 4.56"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBlackHole3;
