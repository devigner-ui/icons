import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPasswordCheck = forwardRef<SVGSVGElement, IconProps>(
  function IconPasswordCheck(
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
            d="M11.02 19.5H7.5q-.93 0-1.66-.09c-2.62-.29-3.33-1.52-3.34-4.86m0-3.5V9.5c0-3.38.71-4.62 3.34-4.91q.73-.1 1.66-.09h3.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.02 4.5h1.48q.93 0 1.66.09c2.63.29 3.34 1.53 3.34 4.91v5c0 3.38-.71 4.62-3.34 4.91q-.73.1-1.66.09h-1.48M15 2v20"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.1 12h.02Zm3.5-.01h.02Z"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 1.2}
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.02 19.5H7.5q-.93 0-1.66-.09c-2.63-.29-3.34-1.53-3.34-4.91v-5c0-3.38.71-4.62 3.34-4.91q.73-.1 1.66-.09h3.46"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.02 4.5h1.48q.93 0 1.66.09c2.63.29 3.34 1.53 3.34 4.91v5c0 3.38-.71 4.62-3.34 4.91q-.73.1-1.66.09h-1.48M15 2v20"
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.1 12h.02m3.48-.01h.02"
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
              d="M14.75 22a.76.76 0 0 1-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.25 20h6V4h-6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.75 20h-3V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4"
              fill="currentColor"
            />
            <path
              d="M5.5 13a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.13-.15-.22-.33a1 1 0 0 1 .22-1.09l.15-.12.18-.09.18-.06a1 1 0 0 1 .91.27q.28.3.29.71a1 1 0 0 1-.08.38q-.08.18-.21.33-.15.13-.33.21a1 1 0 0 1-.38.08"
              fill="currentColor"
            />
            <path
              d="M9 13a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.21-1.09q.07-.19.21-.33a1.05 1.05 0 0 1 1.42 0q.28.3.29.71a1 1 0 0 1-.08.38q-.08.18-.21.33-.15.13-.33.21A1 1 0 0 1 9 13"
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
              d="M17.75 4H15.5V2.75a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75V20h2.25a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4"
              fill="currentColor"
            />
            <path
              d="M6.25 4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm.17 8.38q-.08.18-.21.33-.15.13-.33.21a1 1 0 0 1-.38.08 1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21q-.13-.15-.22-.33a1 1 0 0 1 .22-1.09l.15-.12.18-.09.18-.06a1 1 0 0 1 .91.27q.28.3.29.71a1 1 0 0 1-.08.38m3.5 0q-.08.18-.21.33-.15.13-.33.21A1 1 0 0 1 9 13a1 1 0 0 1-.38-.08 1 1 0 0 1-.33-.21 1 1 0 0 1-.21-1.09q.07-.19.21-.33a1.05 1.05 0 0 1 1.42 0q.28.3.29.71a1 1 0 0 1-.08.38"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPasswordCheck;
