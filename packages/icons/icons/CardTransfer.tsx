import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardTransfer = forwardRef<SVGSVGElement, IconProps>(
  function IconCardTransfer(
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
              d="M22 11c-.01-3.11-.1-4.76-1.17-5.83C19.66 4 17.77 4 14 4h-4C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 20v-6m0 0 2 2m-2-2-2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.5 14v6m0 0 2-2m-2 2-2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 16H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 10h20"
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
                d="m22 12.82-.4-.41a2.25 2.25 0 0 0-3.2 0l-.8.8a2.25 2.25 0 0 0-4.35.79v1.76a2.25 2.25 0 0 0-1.34 3.83l.4.41H10c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12v-2h20z"
                fill="currentColor"
              />
            </g>
            <path
              d="M5.25 16c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M10 4h4c3.79 0 5.68 0 6.85 1.12.85.8 1.08 1.96 1.15 3.88v1H2V9c.07-1.92.3-3.08 1.15-3.88C4.32 4 6.2 4 9.99 4"
              fill="currentColor"
            />
            <path
              d="M19.47 13.47c.3-.3.77-.3 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 13.25c.41 0 .75.34.75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14c0-.41.34-.75.75-.75"
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
              d="M10 4h4c3.77 0 5.66 0 6.83 1.17.84.85 1.08 2.06 1.14 4.08H2.03c.06-2.02.3-3.23 1.14-4.08C4.34 4 6.23 4 10 4"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="m22 12.82-.4-.41a2.25 2.25 0 0 0-3.2 0l-.8.8a2.25 2.25 0 0 0-4.35.79v1.76a2.25 2.25 0 0 0-1.34 3.83l.4.41H10c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12v-1.25h20zM6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 13.25c.41 0 .75.34.75.75v4.19l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V14c0-.41.34-.75.75-.75m3.97.22c.3-.3.77-.3 1.06 0l2 2a.75.75 0 1 1-1.06 1.06l-.72-.72V20a.75.75 0 0 1-1.5 0v-4.19l-.72.72a.75.75 0 1 1-1.06-1.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCardTransfer;
