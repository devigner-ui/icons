import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeyboardTwoRows = forwardRef<SVGSVGElement, IconProps>(
  function IconKeyboardTwoRows(
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
        {variant === "Broken" ? (
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
            d="M14.9 20H7.5q-.93 0-1.66-.09C3.21 19.62 2.5 18.38 2.5 15v-4.4m.11-3.5c.29-1.97 1.17-2.78 3.23-3.01q.73-.1 1.66-.09h9q.93 0 1.66.09c2.63.29 3.34 1.53 3.34 4.91v6c0 3.28-.67 4.54-3.11 4.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 10H17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 15.5h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.09 10h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.09 10h.02Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>
        ) : !fill ? (
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
              d="M7.5 4h9q.93 0 1.66.09c2.63.29 3.34 1.53 3.34 4.91v6c0 3.38-.71 4.62-3.34 4.91q-.73.1-1.66.09h-9q-.93 0-1.66-.09C3.21 19.62 2.5 18.38 2.5 15V9c0-3.38.71-4.62 3.34-4.91q.73-.1 1.66-.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.5 10H17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 15.5h10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.09 10h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.09 10h.02"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M18.27 3.35c-.47-.07-1.01-.1-1.77-.1h-9c-.75 0-1.3.03-1.74.09C2.41 3.71 1.75 5.7 1.75 9v6c0 3.3.66 5.29 3.98 5.65.47.07 1.01.1 1.77.1h9c.75 0 1.3-.03 1.74-.09 3.35-.37 4.01-2.35 4.01-5.66V9c0-3.3-.66-5.29-3.98-5.65"
              fill="currentColor"
            />
            <path
              d="M17 10.75h-3.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75H17c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M10.1 11a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1.01 1"
              fill="currentColor"
            />
            <path
              d="M7.1 11a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M17 16.25H7.02a.76.76 0 0 1-.76-.75c0-.41.33-.75.74-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M18.27 3.35c-.47-.07-1.01-.1-1.77-.1h-9c-.75 0-1.3.03-1.74.09C2.41 3.71 1.75 5.7 1.75 9v6c0 3.3.66 5.29 3.98 5.65.47.07 1.01.1 1.77.1h9c.75 0 1.3-.03 1.74-.09 3.35-.37 4.01-2.35 4.01-5.66V9c0-3.3-.66-5.29-3.98-5.65M10.09 9a1 1 0 0 1 1.01 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 .99-1m-3 0a1 1 0 1 1 .02 2 1 1 0 0 1-.02-2M17 16.25H7.02a.76.76 0 0 1-.76-.75c0-.41.33-.75.74-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75m0-5.5h-3.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75H17c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeyboardTwoRows;
