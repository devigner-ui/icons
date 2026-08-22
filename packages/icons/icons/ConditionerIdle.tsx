import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconConditionerIdle = forwardRef<SVGSVGElement, IconProps>(
  function IconConditionerIdle(
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
              d="M2 11c0-2.83 0-4.24.88-5.12S5.18 5 8 5h8c2.83 0 4.24 0 5.12.88S22 8.18 22 11c0 3.77 0 5.66-1.17 6.83S17.77 19 14 19h-4c-3.77 0-5.66 0-6.83-1.17S2 14.77 2 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 18.5c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55c-.5-.34-1.2-.34-2.61-.34h-5c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C6 16.39 6 17.09 6 18.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 11.5h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 9h12"
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
              d="M2.88 5.88C2 6.76 2 8.18 2 11c0 3.77 0 5.66 1.17 6.83.52.52 1.18.8 2.08.97 0-.83 0-1.53.08-2.1.08-.62.27-1.19.73-1.64a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08h4.1c.9 0 1.65 0 2.24.08.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.84.08 2.09c.9-.16 1.56-.45 2.08-.97C22 16.66 22 14.77 22 11c0-2.83 0-4.24-.88-5.12S18.82 5 16 5H8c-2.83 0-4.24 0-5.12.88m2.37 5.62c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M6 8.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.25 18.8c0-.83 0-1.53.08-2.1.08-.62.27-1.19.73-1.64a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08h4.1q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.84.08 2.09z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.88 5.88C2 6.76 2 8.18 2 11c0 3.77 0 5.66 1.17 6.83.52.52 1.18.8 2.08.97 0-.83 0-1.53.08-2.1.08-.62.27-1.19.73-1.64a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08h4.1c.9 0 1.65 0 2.24.08.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.84.08 2.09c.9-.16 1.56-.45 2.08-.97C22 16.66 22 14.77 22 11c0-2.83 0-4.24-.88-5.12S18.82 5 16 5H8c-2.83 0-4.24 0-5.12.88m2.37 5.62c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M6 8.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M17.25 18.95c0-.93 0-1.57-.07-2.04-.06-.47-.17-.66-.3-.8-.13-.12-.32-.23-.79-.3s-1.13-.06-2.09-.06h-4c-.96 0-1.61 0-2.1.07-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.47-.07 1.1-.07 2.04q1.33.06 3.25.05h4q1.92.01 3.25-.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconConditionerIdle;
