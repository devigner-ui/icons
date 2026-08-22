import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserSpeak = forwardRef<SVGSVGElement, IconProps>(
  function IconUserSpeak(
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
              cx="10"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 17.5c0 2.49 0 4.5-8 4.5s-8-2.01-8-4.5c0-2.48 3.58-4.5 8-4.5s8 2.02 8 4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M19 2s2 1.2 2 4-2 4-2 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17 4s1 .6 1 2-1 2-1 2"
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
              d="M18.36 1.36a.75.75 0 0 1 1.03-.25l-.39.64.39-.64h.01l.12.08.27.22a5.7 5.7 0 0 1 1.96 4.34 5.7 5.7 0 0 1-2.23 4.56l-.1.07h-.02v.01h-.01L19 9.75l.39.64a.75.75 0 0 1-.78-1.28l.05-.03.17-.14q.24-.18.58-.6c.41-.54.84-1.38.84-2.59a4.2 4.2 0 0 0-1.6-3.33l-.03-.03h-.01a.75.75 0 0 1-.25-1.03"
              fill="currentColor"
            />
            <path
              d="M10 9.75a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
              fill="currentColor"
            />
            <path
              d="M17.39 3.1a.75.75 0 0 0-1.03.26l.25 1.03.07.05q.1.07.23.24c.16.22.34.56.34 1.07a1.7 1.7 0 0 1-.57 1.3l-.07.06a.75.75 0 0 0 .78 1.28L17 7.75l.39.64.03-.02.22-.16q.2-.15.45-.48a3.2 3.2 0 0 0 .66-1.98 3.2 3.2 0 0 0-1.33-2.62l-.02-.01zl-.39.64z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 17.25c0 2.49 0 4.5 8 4.5s8-2.01 8-4.5c0-2.48-3.58-4.5-8-4.5s-8 2.02-8 4.5"
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
              d="M18.36 1.61a.75.75 0 0 1 1.03-.25L19 2l.39-.64h.01l.12.08.27.22A5.7 5.7 0 0 1 21.75 6a5.7 5.7 0 0 1-2.23 4.56l-.1.07h-.02v.01h-.01L19 10l.39.64a.75.75 0 0 1-.78-1.28l.05-.03.17-.14q.24-.18.58-.6c.41-.54.84-1.38.84-2.59a4.2 4.2 0 0 0-1.6-3.33l-.03-.03h-.01a.75.75 0 0 1-.25-1.03"
              fill="currentColor"
            />
            <path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" fill="currentColor" />
            <path
              d="M2 17.5C2 20 2 22 10 22s8-2.01 8-4.5c0-2.48-3.58-4.5-8-4.5s-8 2.02-8 4.5"
              fill="currentColor"
            />
            <path
              d="M17.39 3.36a.75.75 0 0 0-1.03.25l.25 1.03.07.05q.1.07.23.24c.16.22.34.56.34 1.07a1.7 1.7 0 0 1-.57 1.3l-.07.06a.75.75 0 0 0 .78 1.28L17 8l.39.64.03-.02.22-.16q.2-.15.45-.48A3.2 3.2 0 0 0 18.75 6a3.2 3.2 0 0 0-1.33-2.62zL17 4z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUserSpeak;
