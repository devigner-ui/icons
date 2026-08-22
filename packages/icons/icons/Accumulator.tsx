import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAccumulator = forwardRef<SVGSVGElement, IconProps>(
  function IconAccumulator(
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
              d="M22 14v-2.02c0-1.85 0-2.77-.4-3.46a3 3 0 0 0-1.12-1.13C19.8 7 18.88 7 17.02 7h-.52a1 1 0 0 1-.72-.45l-.11-.22-.23-.42a2 2 0 0 0-1.45-.9L13.51 5h-3.02l-.48.01a2 2 0 0 0-1.45.9l-.23.42-.11.22a1 1 0 0 1-.72.44L7.25 7h-.27c-1.85 0-2.77 0-3.46.4a3 3 0 0 0-1.13 1.12C2 9.2 2 10.13 2 11.98V14c0 2.83 0 4.24.88 5.12S5.18 20 8 20h8c2.83 0 4.24 0 5.12-.88S22 16.82 22 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 7V6c0-.94 0-1.41-.3-1.7C6.42 4 5.95 4 5 4s-1.41 0-1.7.3C3 4.58 3 5.05 3 6v1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 8V6c0-.94 0-1.41-.3-1.7-.29-.3-.76-.3-1.7-.3s-1.41 0-1.7.3c-.3.29-.3.76-.3 1.7v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 13.5H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 13.5h-1.5m0 0H15m1.5 0V12m0 1.5V15"
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
              opacity={duotone ? "0.4" : "1"}
              d="M22 11.98V14c0 2.83 0 4.24-.88 5.12S18.82 20 16 20H8c-2.83 0-4.24 0-5.12-.88S2 16.82 2 14v-2.02c0-1.85 0-2.77.4-3.46a3 3 0 0 1 1.12-1.13C4.2 7 5.12 7 6.98 7h.52a1 1 0 0 0 .72-.45l.11-.22.23-.42a2 2 0 0 1 1.45-.9l.48-.01h3.02l.48.01a2 2 0 0 1 1.45.9l.23.42.11.22a1 1 0 0 0 .72.44l.25.01h.27c1.85 0 2.77 0 3.46.4a3 3 0 0 1 1.13 1.12c.39.69.39 1.61.39 3.46"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5 11.25c.41 0 .75.34.75.75v.75H18a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H15a.75.75 0 0 1 0-1.5h.75V12c0-.41.34-.75.75-.75M5.25 13.5c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M19.04 3.25q.66-.01 1.16.04c.35.05.73.16 1.04.47.3.31.42.69.47 1.04.04.33.04 2.72.04 3.16v.86l-.14-.3a3 3 0 0 0-1.13-1.13C19.8 7 18.88 7 17.02 7h-.52l-.22-.06V4.87l.01-.07c.05-.35.16-.73.47-1.04.31-.3.69-.42 1.04-.47q.5-.05 1.15-.04z"
              fill="currentColor"
            />
            <path
              d="M4.99 3.25q-.66-.01-1.15.04c-.36.05-.73.16-1.04.47s-.43.69-.47 1.04c-.05.33-.05 2.72-.05 3.16v.78l.11-.22a3 3 0 0 1 1.13-1.13C4.2 7 5.12 7 6.98 7h.52l.25-.07V4.8a1.7 1.7 0 0 0-.48-1.04c-.3-.3-.68-.42-1.04-.47q-.5-.05-1.15-.04z"
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
              d="M5.04 3.25q.66-.01 1.16.04c.35.05.73.16 1.04.47a1.7 1.7 0 0 1 .47 1.11q.04.46-.2.86a.5.5 0 0 1-.43.27h-.15q-1.32-.01-2.2.05c-.62.06-1.19.18-1.7.47a4 4 0 0 0-.78.58V5.96q-.01-.66.04-1.16c.05-.35.16-.73.47-1.04.31-.3.69-.42 1.04-.47q.5-.05 1.16-.04z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 14v-2.02c0-1.85 0-2.77-.4-3.46a3 3 0 0 0-1.12-1.13C19.8 7 18.88 7 17.02 7h-.52a1 1 0 0 1-.72-.45l-.11-.22-.23-.42a2 2 0 0 0-1.45-.9L13.51 5h-3.02l-.48.01a2 2 0 0 0-1.45.9l-.23.42-.11.22a1 1 0 0 1-.72.44L7.25 7h-.27c-1.85 0-2.77 0-3.46.4a3 3 0 0 0-1.13 1.12C2 9.2 2 10.13 2 11.98V14c0 2.83 0 4.24.88 5.12S5.18 20 8 20h8c2.83 0 4.24 0 5.12-.88S22 16.82 22 14m-4.75-2a.75.75 0 0 0-1.5 0v.75H15a.75.75 0 0 0 0 1.5h.75V15a.75.75 0 0 0 1.5 0v-.75H18a.75.75 0 0 0 0-1.5h-.75zM6 12.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M20.2 3.3q-.5-.06-1.16-.05h-.08q-.66-.01-1.16.04c-.35.05-.73.16-1.04.47a1.7 1.7 0 0 0-.48 1.11q-.03.46.2.86a.5.5 0 0 0 .44.27h.15q1.32-.01 2.2.05c.62.06 1.19.18 1.7.47a4 4 0 0 1 .78.58V5.96q.01-.66-.04-1.16a1.7 1.7 0 0 0-.47-1.04c-.31-.3-.69-.42-1.04-.47"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAccumulator;
