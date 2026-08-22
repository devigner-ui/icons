import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconInboxUnreadAlt = forwardRef<SVGSVGElement, IconProps>(
  function IconInboxUnreadAlt(
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
              d="M2.65 13h3.79a2 2 0 0 1 1.79 1.11l.89 1.79a1.9 1.9 0 0 0 1.79 1.1h3.53a2 2 0 0 0 1.79-1.11l.89-1.79a2 2 0 0 1 1.79-1.11h3.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.67 2h-5c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7v-5"
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
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              d="M21.01 12.72H17.7c-.93 0-1.76.52-2.18 1.34l-.8 1.58a1.1 1.1 0 0 1-.99.61h-3.11a1 1 0 0 1-.99-.62l-.79-1.57a2.4 2.4 0 0 0-2.18-1.35H3.33a.7.7 0 0 0-.66.67v3.09C2.67 19.94 4.74 22 8.2 22h7.96c3.26 0 5.27-1.79 5.51-4.96v-3.66c0-.36-.3-.66-.66-.66"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.67 9.5a4.5 4.5 0 0 1-4.5-4.5q.02-1.08.49-2H8.19C4.74 3 2.67 5.06 2.67 8.52v7.95c0 3.47 2.07 5.53 5.52 5.53h7.95c3.46 0 5.52-2.06 5.52-5.52V9.01q-.9.47-1.99.49"
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
              d="M19.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              d="M21.01 12.72H17.7c-.93 0-1.76.52-2.18 1.34l-.8 1.58a1.1 1.1 0 0 1-.99.61h-3.11a1 1 0 0 1-.99-.62l-.79-1.57a2.4 2.4 0 0 0-2.18-1.35H3.33a.7.7 0 0 0-.66.67v3.09C2.67 19.94 4.74 22 8.2 22h7.96c3.26 0 5.27-1.79 5.51-4.96v-3.66c0-.36-.3-.66-.66-.66"
              fill="currentColor"
            />
            <path
              d="M21.67 10.4v.93a2 2 0 0 0-.66-.11H17.7c-1.5 0-2.85.83-3.51 2.17l-.7 1.37h-2.63l-.68-1.36a3.9 3.9 0 0 0-3.52-2.18H3.33q-.35 0-.66.11V8.52A5.5 5.5 0 0 1 8.19 3h6.08a1 1 0 0 1 .98 1.2 4.5 4.5 0 0 0 5.22 5.22 1 1 0 0 1 1.2.98"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconInboxUnreadAlt;
