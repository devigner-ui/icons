import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRunning = forwardRef<SVGSVGElement, IconProps>(function IconRunning(
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
            opacity={duotone ? "0.4" : "1"}
            cx="18.5"
            cy="4.50049"
            r="2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m9 17-1 1.2c-.74.89-1.1 1.33-1.61 1.56-.5.24-1.08.24-2.23.24H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m5.44 8.82-.37-.65zm-1.81.16a.75.75 0 1 0 .74 1.3zm12.12 1.15-.62.41zm.06.09.63-.42zm-4.84-3.57.08-.74zm-.23-.01-.03.75zm-.59.03-.1-.74zM21 12.75a.75.75 0 0 0 0-1.5zM5.07 8.17l-1.44.81.74 1.3 1.44-.8zm10.06 2.37.06.1 1.25-.84-.07-.09zm-4.08-4.63-.28-.02-.06 1.5.18.01zM5.8 9.47c2.31-1.31 3.38-1.9 4.45-2.05l-.2-1.49c-1.43.2-2.79.98-5 2.24zm13.33 3.28H21v-1.5h-1.86zM10.77 5.9q-.39-.01-.72.04l.2 1.49q.27-.04.46-.03zm4.42 4.75a4.8 4.8 0 0 0 3.95 2.11v-1.5c-1.09 0-2.1-.54-2.7-1.45zm1.18-.93c-1.17-1.77-2.94-3.55-5.32-3.8l-.16 1.49c1.7.18 3.14 1.5 4.24 3.14z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14 8.5-2.22 2.78c-.84 1.04-1.26 1.56-1.32 2.13a2 2 0 0 0 .12.95c.2.53.73.94 1.8 1.75.81.61 1.22.92 1.5 1.32a3 3 0 0 1 .37.75c.15.46.15.97.15 1.99V22"
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
            d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.8 5.93a4 4 0 0 1 1-.02c2.38.25 4.15 2.03 5.32 3.8l.07.1c.6.9 1.61 1.44 2.7 1.44h1.86a.75.75 0 0 1 0 1.5h-1.86c-1.59 0-3.07-.8-3.95-2.11l-.06-.1q-.42-.61-.88-1.15l-1.88 2.35c-.43.54-.72.9-.91 1.2-.19.28-.24.44-.26.56q-.04.3.08.6c.04.1.13.25.38.48a18 18 0 0 0 1.27 1c.72.55 1.22.92 1.56 1.43q.3.44.47.93c.19.58.19 1.2.19 2.11V22a.75.75 0 1 1-1.5 0v-1.83c0-1.07 0-1.44-.12-1.76q-.1-.3-.27-.55c-.2-.28-.48-.5-1.33-1.16l-.03-.02q-.77-.56-1.25-1a3 3 0 0 1-.78-1.05 3 3 0 0 1-.16-1.3q.1-.66.5-1.22.35-.54.96-1.27l1.98-2.48a4.5 4.5 0 0 0-2.44-.97q-.19-.01-.45.03c-1.07.14-2.14.74-4.45 2.05l-1.44.82a.75.75 0 1 1-.74-1.3l1.44-.82.15-.09c2.12-1.2 3.45-1.96 4.83-2.15"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.23 16.42c.32.27.36.74.1 1.06l-1 1.2-.1.12a6 6 0 0 1-1.77 1.64c-.66.31-1.4.31-2.4.31H2.75a.75.75 0 0 1 0-1.5h1.16c1.22 0 1.6-.02 1.91-.16.32-.15.57-.43 1.35-1.37l1-1.2a.75.75 0 0 1 1.06-.1"
              fill="currentColor"
            />
          </g>
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
            d="M20.75 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.8 5.93a4 4 0 0 1 1-.02c2.38.25 4.15 2.03 5.32 3.8l.07.1c.6.9 1.61 1.44 2.7 1.44h1.86a.75.75 0 0 1 0 1.5h-1.86c-1.59 0-3.07-.8-3.95-2.11l-.06-.1q-.42-.61-.88-1.15l-1.89 2.35c-.42.54-.7.9-.9 1.2-.19.28-.24.44-.26.56q-.04.3.08.6c.04.1.13.25.38.48a18 18 0 0 0 1.27 1c.72.55 1.22.92 1.56 1.43q.3.44.47.93c.19.58.19 1.2.19 2.11V22a.75.75 0 0 1-1.5 0v-1.83c0-1.07-.01-1.44-.12-1.76q-.1-.3-.27-.55c-.2-.28-.48-.5-1.33-1.16l-.03-.02q-.77-.56-1.25-1a3 3 0 0 1-.78-1.05 3 3 0 0 1-.16-1.3q.1-.66.5-1.22.35-.54.96-1.27l1.98-2.48a4.5 4.5 0 0 0-2.44-.97q-.19-.01-.45.03c-1.07.14-2.14.74-4.45 2.05l-1.44.82a.75.75 0 1 1-.74-1.3l1.44-.82.15-.09c2.12-1.2 3.45-1.96 4.83-2.15m-.57 10.5c.32.26.36.73.1 1.05l-1 1.2-.1.12c-.64.77-1.11 1.34-1.77 1.64-.66.31-1.4.31-2.4.31H2.75a.75.75 0 0 1 0-1.5h1.16c1.22 0 1.6-.02 1.91-.16.32-.15.57-.43 1.35-1.37l1-1.2a.75.75 0 0 1 1.06-.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRunning;
