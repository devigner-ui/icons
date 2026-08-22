import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBlackHole = forwardRef<SVGSVGElement, IconProps>(
  function IconBlackHole(
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
              d="M12 10c5 0 4.6 12-3 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12.31 14c-5 0-4.6-12 3-12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.63 10.7c3.54-3.54 11.74 5.23 6.37 10.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.68 13.3C10.14 16.84 1.94 8.07 7.32 2.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.85 13.52C7.32 10 16.08 1.8 21.45 7.16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.46 10.48C17 14 8.23 22.2 2.86 16.84"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <path
              d="M10 12.31c0-5 12-4.6 12 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.74 14.65a.75.75 0 0 1-.24-1.44q.35-.13.65-.44a.75.75 0 0 1 1-.05.75.75 0 0 1 .7.95 7 7 0 0 1-1.1 2.15.75.75 0 0 1-1.2-.9z"
                fill="currentColor"
              />
              <path
                d="M10.49 14.7a.75.75 0 0 0 .95-.71.75.75 0 0 0-.06-1q-.3-.3-.44-.64a.75.75 0 0 0-1.44.23l-.26-.19a.75.75 0 0 0-.9 1.2c.67.5 1.4.9 2.15 1.1"
                fill="currentColor"
              />
              <path
                d="M6.68 11.95a.75.75 0 0 0 1.18-.93 8 8 0 0 1-1.01-1.68.75.75 0 1 0-1.38.6q.49 1.1 1.2 2"
                fill="currentColor"
              />
              <path
                d="M4.84 7.67a.75.75 0 0 0 1.49-.18 5 5 0 0 1 .1-1.86.75.75 0 1 0-1.45-.36q-.29 1.2-.14 2.4"
                fill="currentColor"
              />
              <path
                d="M6 3.08a.75.75 0 0 0 1.23.87q.26-.36.62-.72a.75.75 0 0 0-1.06-1.06q-.45.44-.78.9"
                fill="currentColor"
              />
              <path
                d="m11.76 9.09-.18.26a.75.75 0 0 1 .23 1.44q-.34.13-.65.44a.75.75 0 0 1-1 .05.75.75 0 0 1-.7-.95 7 7 0 0 1 1.1-2.15.75.75 0 0 1 1.2.9"
                fill="currentColor"
              />
              <path
                d="M13.82 9.3a.75.75 0 0 0-.95.71c-.23.3-.21.72.06 1q.3.3.44.64a.75.75 0 0 0 1.44-.23l.26.19a.75.75 0 0 0 .9-1.2 7 7 0 0 0-2.15-1.1"
                fill="currentColor"
              />
              <path
                d="M17.64 12.05a.75.75 0 1 0-1.19.93q.61.77 1.01 1.68a.75.75 0 0 0 1.38-.6 9 9 0 0 0-1.2-2"
                fill="currentColor"
              />
              <path
                d="M19.47 16.33a.75.75 0 0 0-1.49.18q.12.94-.1 1.86a.75.75 0 1 0 1.45.36q.3-1.2.14-2.4"
                fill="currentColor"
              />
              <path
                d="M18.3 20.92a.75.75 0 0 0-1.21-.87 6 6 0 0 1-.63.72.75.75 0 1 0 1.07 1.06q.44-.44.77-.9"
                fill="currentColor"
              />
              <path
                d="M12.08 7.57a.75.75 0 0 1 .13-1.05q.91-.72 2-1.2a.75.75 0 0 1 .6 1.37q-.9.4-1.68 1.01c-.32.26-.8.2-1.05-.13"
                fill="currentColor"
              />
              <path
                d="M15.83 5.52a.75.75 0 0 1 .65-.84q1.2-.15 2.4.15a.75.75 0 0 1-.36 1.45 5 5 0 0 0-1.86-.1.75.75 0 0 1-.83-.66"
                fill="currentColor"
              />
              <path
                d="M20.03 6.02a.75.75 0 0 1 1.05-.17q.47.35.9.78a.75.75 0 0 1-1.05 1.06 6 6 0 0 0-.73-.62.75.75 0 0 1-.17-1.05"
                fill="currentColor"
              />
              <path
                d="M12.1 17.48a.75.75 0 1 0-.92-1.18q-.77.61-1.68 1a.75.75 0 1 0 .6 1.38q1.09-.48 2-1.2"
                fill="currentColor"
              />
              <path
                d="M7.83 19.32a.75.75 0 1 0-.18-1.5q-.94.12-1.86-.1a.75.75 0 1 0-.37 1.45q1.21.3 2.4.15"
                fill="currentColor"
              />
              <path
                d="M3.24 18.15a.75.75 0 1 0 .87-1.22 6 6 0 0 1-.73-.62.75.75 0 0 0-1.06 1.06q.45.44.92.78"
                fill="currentColor"
              />
            </g>
            <path
              d="M8.93 12.45a4 4 0 0 0 1.82 1.95c-.79.18-1.7.22-2.64.08-2.8-.4-5.36-2.2-5.36-5.48a.75.75 0 0 0-1.5 0c0 4.32 3.44 6.51 6.64 6.97 1.62.23 3.27.04 4.56-.59a4 4 0 0 0 2-1.92c.13.74.15 1.58.03 2.43-.4 2.8-2.2 5.36-5.48 5.36a.75.75 0 0 0 0 1.5c4.32 0 6.51-3.44 6.97-6.64a8 8 0 0 0-.59-4.56A4.3 4.3 0 0 0 13.9 9.8q.95-.11 2 .03c2.79.4 5.35 2.2 5.35 5.48a.75.75 0 0 0 1.5 0c0-4.31-3.44-6.51-6.64-6.97a8 8 0 0 0-4.56.59c-.7.33-1.3.81-1.71 1.42a8 8 0 0 1-.01-2.24c.4-2.8 2.2-5.36 5.48-5.36a.75.75 0 0 0 0-1.5C11 1.25 8.8 4.69 8.34 7.89a8 8 0 0 0 .59 4.56"
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
              d="M6.68 11.95a.75.75 0 0 0 1.18-.93 8 8 0 0 1-1.01-1.68.75.75 0 1 0-1.38.6q.49 1.1 1.2 2"
              fill="currentColor"
            />
            <path
              d="M4.84 7.67a.75.75 0 0 0 1.49-.18 5 5 0 0 1 .1-1.86.75.75 0 1 0-1.45-.36q-.29 1.2-.14 2.4"
              fill="currentColor"
            />
            <path
              d="M6 3.08a.75.75 0 0 0 1.23.87q.26-.36.62-.72a.75.75 0 0 0-1.06-1.06q-.45.44-.78.9"
              fill="currentColor"
            />
            <path
              d="M17.64 12.05a.75.75 0 0 0-1.18.93q.6.77 1 1.68a.75.75 0 1 0 1.38-.6 9 9 0 0 0-1.2-2"
              fill="currentColor"
            />
            <path
              d="M19.47 16.33a.75.75 0 0 0-1.49.18q.12.94-.1 1.86a.75.75 0 1 0 1.45.36q.3-1.2.14-2.4"
              fill="currentColor"
            />
            <path
              d="M18.3 20.92a.75.75 0 0 0-1.21-.87 6 6 0 0 1-.62.72.75.75 0 0 0 1.06 1.06q.44-.44.77-.9"
              fill="currentColor"
            />
            <path
              d="M12.08 7.57a.75.75 0 0 1 .13-1.05q.91-.72 2-1.2a.75.75 0 0 1 .6 1.37q-.9.4-1.68 1.01c-.32.26-.8.2-1.05-.13"
              fill="currentColor"
            />
            <path
              d="M15.83 5.52a.75.75 0 0 1 .65-.84q1.2-.15 2.4.15a.75.75 0 0 1-.36 1.45 5 5 0 0 0-1.86-.1.75.75 0 0 1-.83-.66"
              fill="currentColor"
            />
            <path
              d="M20.03 6.02a.75.75 0 0 1 1.05-.17q.47.35.9.78a.75.75 0 1 1-1.05 1.06 6 6 0 0 0-.73-.62.75.75 0 0 1-.17-1.05"
              fill="currentColor"
            />
            <path
              d="M12.1 17.48a.75.75 0 1 0-.92-1.18q-.77.61-1.68 1a.75.75 0 0 0 .6 1.38q1.09-.48 2-1.2"
              fill="currentColor"
            />
            <path
              d="M7.83 19.32a.75.75 0 0 0-.18-1.5q-.94.12-1.86-.1a.75.75 0 0 0-.37 1.45q1.21.3 2.4.15"
              fill="currentColor"
            />
            <path
              d="M3.24 18.15a.75.75 0 0 0 .87-1.22 6 6 0 0 1-.73-.62.75.75 0 1 0-1.06 1.06q.45.44.92.78"
              fill="currentColor"
            />
            <path
              d="M13.75 15.82a.75.75 0 0 1-1.35-.41 8 8 0 0 1-4.5.56C4.68 15.5 1.24 13.32 1.24 9a.75.75 0 0 1 1.5 0c0 3.28 2.56 5.09 5.36 5.48q.97.14 1.87.04a7 7 0 0 1-1.64-.93.75.75 0 0 1 .5-1.35 8 8 0 0 1-.5-4.35C8.8 4.7 11 1.25 15.31 1.25a.75.75 0 0 1 0 1.5c-3.28 0-5.09 2.56-5.48 5.36q-.11.73-.07 1.42.31-.7.8-1.35a.75.75 0 0 1 1.34.59 8.3 8.3 0 0 1 4.2-.43c3.21.46 6.65 2.66 6.65 6.97a.75.75 0 0 1-1.5 0c0-3.28-2.56-5.09-5.36-5.48a8 8 0 0 0-.95-.08q.53.28 1.03.66a.75.75 0 0 1-.49 1.35c.55 1.25.7 2.82.49 4.35-.46 3.2-2.65 6.64-6.97 6.64a.75.75 0 0 1 0-1.5c3.28 0 5.09-2.56 5.48-5.36q.1-.73.08-1.42a7 7 0 0 1-.81 1.35"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBlackHole;
