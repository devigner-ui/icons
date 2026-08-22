import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPasswordCheckAlt = forwardRef<SVGSVGElement, IconProps>(
  function IconUnread(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.02 19.5H7.5q-.93 0-1.66-.09c-2.63-.29-3.34-1.53-3.34-4.91v-5c0-3.38.71-4.62 3.34-4.91q.73-.1 1.66-.09h3.46"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.02 4.5h1.48q.93 0 1.66.09c2.63.29 3.34 1.53 3.34 4.91v5c0 3.38-.71 4.62-3.34 4.91q-.73.1-1.66.09h-1.48M15 2v20"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 8.5v7"
              opacity={duotone ? "0.4" : "1"}
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
              fill="currentColor"
              d="M15 22a.76.76 0 0 1-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75"
            />
            <path
              fill="currentColor"
              d="M6 20h6V4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4m12 0h-3V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              fill="currentColor"
              d="M7 16.25a.76.76 0 0 1-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7c0 .41-.34.75-.75.75"
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
              fill="currentColor"
              d="M15 22a.76.76 0 0 1-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75"
            />
            <path
              fill="currentColor"
              d="M18 20h-3V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4M6 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm1.75 11.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75z"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPasswordCheckAlt;
