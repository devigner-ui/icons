import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFileText = forwardRef<SVGSVGElement, IconProps>(function IconFileText(
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
            d="m15.4 4.05-.5.56zm3.95 3.57-.5.55zm2.3 2.53-.68.3v.01zM3.17 20.83l.53-.53zm17.66 0-.53-.53zm-6.83.42h-4v1.5h4zM2.75 14v-4h-1.5v4zm18.5-.44V14h1.5v-.44zm-6.36-8.95 3.96 3.56 1-1.11L15.9 3.5zm7.86 8.95c0-1.69.02-2.75-.41-3.71l-1.37.61c.26.6.28 1.28.28 3.1zm-3.9-5.39c1.35 1.22 1.85 1.7 2.12 2.29l1.37-.61c-.43-.96-1.23-1.66-2.49-2.8zm-8.82-5.42c1.58 0 2.18.01 2.71.22l.54-1.4c-.85-.33-1.78-.32-3.25-.32zm5.86.75c-1.08-.98-1.76-1.6-2.61-1.93l-.54 1.4c.53.2.98.59 2.15 1.64zM10 21.25c-1.9 0-3.26 0-4.29-.14-1-.13-1.58-.39-2-.81l-1.07 1.06c.75.75 1.7 1.08 2.87 1.24 1.15.15 2.63.15 4.49.15zM1.25 14c0 1.86 0 3.34.15 4.49a4.7 4.7 0 0 0 1.24 2.87L3.7 20.3c-.42-.42-.67-1-.81-2.01A36 36 0 0 1 2.75 14zM14 22.75c1.86 0 3.34 0 4.49-.15a4.7 4.7 0 0 0 2.87-1.24L20.3 20.3c-.43.42-1 .68-2.01.81-1.03.14-2.38.14-4.29.14zM21.25 14c0 1.9 0 3.26-.14 4.29-.13 1-.39 1.59-.81 2l1.06 1.07a4.7 4.7 0 0 0 1.24-2.87c.15-1.15.15-2.63.15-4.49zm-18.5-4c0-1.9 0-3.26.14-4.29.14-1 .39-1.58.81-2L2.64 2.63A4.7 4.7 0 0 0 1.4 5.51c-.15 1.15-.15 2.63-.15 4.49zm7.28-8.75c-1.87 0-3.36 0-4.51.15a4.7 4.7 0 0 0-2.88 1.24L3.7 3.7c.42-.42 1-.67 2.02-.81 1.03-.14 2.4-.14 4.31-.14z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 14.5h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 18h5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 2.5V5c0 2.36 0 3.54.73 4.27S15.64 10 18 10h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14v-4c0-3.77 0-5.66 1.17-6.83S6.24 2 10.03 2q.9 0 1.5.02l-.02.24-.01 2.84c0 1.1 0 2.06.1 2.84.12.85.38 1.7 1.07 2.39s1.54.95 2.39 1.07c.78.1 1.75.1 2.85.1h4.05q.05.78.04 2.06V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22"
              fill="currentColor"
            />
          </g>
          <path
            d="M6 13.75a.75.75 0 0 0 0 1.5h8a.75.75 0 1 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M6 17.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 1 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M11.5 2.26v2.83c0 1.1 0 2.07.1 2.85.12.85.38 1.7 1.07 2.39s1.54.95 2.39 1.06c.78.11 1.75.11 2.85.11h4.05l.02.5H22l-.01-.56a5.3 5.3 0 0 0-.96-2.64l-.28-.36A33 33 0 0 0 18 5.5a28 28 0 0 0-2.89-2.16 8 8 0 0 0-1.82-1.04l-.5-.16a6 6 0 0 0-1.29-.13z"
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
            d="M14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14v-4c0-3.77 0-5.66 1.17-6.83S6.24 2 10.03 2q.9 0 1.5.02l-.02.24-.01 2.84c0 1.1 0 2.06.1 2.84.12.85.38 1.7 1.07 2.39s1.54.95 2.39 1.07c.78.1 1.75.1 2.85.1h4.05q.05.78.04 2.06V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22m-8.75-7.5c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M19.35 7.62 15.4 4.05c-1.12-1.01-1.69-1.52-2.38-1.78L13 5c0 2.36 0 3.54.73 4.27S15.64 10 18 10h3.58c-.36-.7-1.01-1.29-2.23-2.38"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFileText;
