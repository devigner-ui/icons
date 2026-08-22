import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDesignTools = forwardRef<SVGSVGElement, IconProps>(
  function IconDesignTools(
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
            <g clipPath="url(#clip0_12_78613)">
              <path
                d="M11.1 17.62c0 1.1-.42 2.15-1.21 2.95a4 4 0 0 1-2.43 1.16L5 22a2.1 2.1 0 0 1-2.33-2.35l.27-2.46a4.1 4.1 0 0 1 4.01-3.63q.3-.01.6.01c.85.11 1.68.5 2.36 1.19a4 4 0 0 1 1.16 2.29z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g opacity={duotone ? "0.4" : "1"}>
                <path
                  d="M22.48 3.94a34 34 0 0 1-8.63 11.65l-1.97 1.58q-.37.28-.78.45 0-.28-.04-.57a4 4 0 0 0-1.16-2.29 4 4 0 0 0-2.36-1.19q-.3-.03-.6-.01.16-.47.49-.84l1.56-1.97c2.58-3.23 7.82-7.11 11.65-8.64a1.4 1.4 0 0 1 1.52.31c.38.37.56.94.32 1.52"
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.91 14.47a4.73 4.73 0 0 0-4.73-4.73"
                  stroke="currentColor"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <path
                d="m20.79 12.73.74.73q2.23 2.23 0 4.45l-2.96 2.96q-2.21 2.2-4.43 0"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                d="M3.78 10.51q-2.2-2.22 0-4.45L6.74 3.1q2.22-2.2 4.43 0l.74.74"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="m11.92 3.85-3.7 3.7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="m20.79 12.73-2.96 2.95"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
              />
            </g>
            <defs>
              <clipPath>
                <rect
                  width="24"
                  height="24"
                  fill="none"
                  transform="translate(0.669922)"
                />
              </clipPath>
            </defs>
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
              d="m21.71 13.28-.92-.9-7.75 7.74.93.93q1.18 1.17 2.39 1.17t2.39-1.17l2.96-2.96q2.39-2.4 0-4.81"
              fill="currentColor"
            />
            <path
              d="M11.36 2.93c-1.57-1.57-3.22-1.57-4.79 0L3.6 5.89c-1.56 1.57-1.56 3.22 0 4.79l.92.92 7.75-7.75z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.48 3.94c-1.31 3.27-4.3 7.54-7.15 10.33a6 6 0 0 0-5.07-4.96c2.8-2.86 7.1-5.89 10.38-7.21a1.42 1.42 0 0 1 1.84 1.84"
              fill="currentColor"
            />
            <path
              d="M15.33 14.27q-.75.74-1.48 1.32l-1.97 1.58q-.37.27-.78.45 0-.28-.04-.58a4 4 0 0 0-1.16-2.29 4 4 0 0 0-2.96-1.2q.16-.47.49-.84l1.56-1.97q.56-.7 1.27-1.43a6 6 0 0 1 5.07 4.96"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.1 17.62a4.1 4.1 0 0 1-3.65 4.1L5 21.99c-1.34.15-2.49-1-2.34-2.35l.27-2.46a4.1 4.1 0 0 1 4.61-3.61c.85.11 1.67.5 2.36 1.18a4 4 0 0 1 1.16 2.29z"
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
              d="m21.71 13.28-.92-.9-7.75 7.74.93.93q1.18 1.17 2.39 1.17t2.39-1.17l2.96-2.96q2.39-2.4 0-4.81"
              fill="currentColor"
            />
            <path
              d="M11.36 2.93c-1.57-1.57-3.22-1.57-4.79 0L3.6 5.89c-1.56 1.57-1.56 3.22 0 4.79l.92.92 7.75-7.75z"
              fill="currentColor"
            />
            <path
              d="M22.48 3.94c-1.31 3.27-4.3 7.54-7.15 10.33a6 6 0 0 0-5.07-4.96c2.8-2.86 7.1-5.89 10.38-7.21a1.42 1.42 0 0 1 1.84 1.84"
              fill="currentColor"
            />
            <path
              d="m14.45 15.09-.6.5-1.79 1.43-.01-.11a5 5 0 0 0-1.45-2.87 5 5 0 0 0-2.96-1.46l-.1-.01 1.45-1.83.45-.53.68.09a5 5 0 0 1 4.22 4.13z"
              fill="currentColor"
            />
            <path
              d="M11.1 17.62a4.1 4.1 0 0 1-3.65 4.1L5 21.99c-1.34.15-2.49-1-2.34-2.35l.27-2.46a4.1 4.1 0 0 1 4.61-3.61c.85.11 1.67.5 2.36 1.18a4 4 0 0 1 1.16 2.29z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDesignTools;
