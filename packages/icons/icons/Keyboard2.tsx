import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeyboard2 = forwardRef<SVGSVGElement, IconProps>(
  function IconKeyboard2(
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
              d="M8.17 4h9q.93 0 1.66.09c2.63.29 3.34 1.53 3.34 4.91v6c0 3.38-.71 4.62-3.34 4.91q-.73.1-1.66.09h-9q-.93 0-1.66-.09c-2.63-.29-3.34-1.53-3.34-4.91V9c0-3.38.71-4.62 3.34-4.91q.73-.1 1.66-.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.17 10h3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 15.5h10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.76 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.76 10"
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
              d="M18.94 3.35c-.47-.07-1.01-.1-1.77-.1h-9c-.75 0-1.3.03-1.74.09C3.08 3.71 2.42 5.7 2.42 9v6c0 3.3.66 5.29 3.98 5.65.47.07 1.01.1 1.77.1h9c.75 0 1.3-.03 1.74-.09 3.35-.37 4.01-2.35 4.01-5.66V9c0-3.3-.66-5.29-3.98-5.65"
              fill="currentColor"
            />
            <path
              d="M17.67 10.75h-3.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M10.77 11a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1 1 1 0 0 1-1.01 1"
              fill="currentColor"
            />
            <path
              d="M7.77 11a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M17.67 16.25H7.69a.76.76 0 0 1-.76-.75c0-.41.33-.75.74-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M18.94 3.35c-.47-.07-1.01-.1-1.77-.1h-9c-.75 0-1.3.03-1.74.09C3.08 3.71 2.42 5.7 2.42 9v6c0 3.3.66 5.29 3.98 5.65.47.07 1.01.1 1.77.1h9c.75 0 1.3-.03 1.74-.09 3.35-.37 4.01-2.35 4.01-5.66V9c0-3.3-.66-5.29-3.98-5.65M10.76 9a1 1 0 0 1 1.01 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 .99-1m-3 0a1 1 0 1 1 .02 2 1 1 0 0 1-.02-2m9.91 7.25H7.69a.76.76 0 0 1-.76-.75c0-.41.33-.75.74-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75m0-5.5h-3.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeyboard2;
