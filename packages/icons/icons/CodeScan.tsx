import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCodeScan = forwardRef<SVGSVGElement, IconProps>(function IconCodeScan(
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
            d="M5.5 15.5c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h1c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v1c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5.5 8.5c0-1.41 0-2.12.44-2.56S7.09 5.5 8.5 5.5c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v1c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-1c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M13.5 15.5c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h1c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7 0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M13.5 7.5c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3 1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3h-1c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 22c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 2C6.23 2 4.34 2 3.17 3.17S2 6.23 2 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 2c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M14 2.75a36 36 0 0 1 4.29.14c1 .14 1.58.39 2 .81.43.43.69 1 .82 2.01.14 1.03.14 2.38.14 4.3a.75.75 0 0 0 1.5 0v-.07c0-1.83 0-3.29-.15-4.43a4.7 4.7 0 0 0-1.24-2.87 4.7 4.7 0 0 0-2.87-1.24c-1.14-.15-2.6-.15-4.43-.15H14a.75.75 0 0 0 0 1.5"
              fill="currentColor"
            />
            <path
              d="M9.94 1.25H10a.75.75 0 0 1 0 1.5 36 36 0 0 0-4.29.14c-1 .14-1.58.39-2 .81-.43.43-.68 1-.82 2.01a36 36 0 0 0-.14 4.3.75.75 0 0 1-1.5 0v-.07c0-1.83 0-3.29.15-4.43a4.7 4.7 0 0 1 1.24-2.87A4.7 4.7 0 0 1 5.51 1.4c1.14-.15 2.6-.15 4.43-.15"
              fill="currentColor"
            />
            <path
              d="M22 13.25c.41 0 .75.34.75.75v.06c0 1.83 0 3.29-.15 4.43a4.7 4.7 0 0 1-1.24 2.87 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H14a.75.75 0 0 1 0-1.5c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.43-.42.69-1 .82-2.01.14-1.03.14-2.38.14-4.29 0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M2.75 14a.75.75 0 0 0-1.5 0v.06c0 1.83 0 3.29.15 4.43a4.7 4.7 0 0 0 1.24 2.87c.75.75 1.7 1.08 2.87 1.24 1.14.15 2.6.15 4.43.15H10a.75.75 0 0 0 0-1.5c-1.9 0-3.26 0-4.29-.14-1-.13-1.58-.39-2-.81-.43-.42-.68-1-.82-2.01A36 36 0 0 1 2.75 14"
              fill="currentColor"
            />
          </g>
          <path
            d="M5.53 5.53C5 6.05 5 6.9 5 8.6c0 1.13 0 1.7.35 2.05s.92.35 2.05.35h1.2c1.13 0 1.7 0 2.05-.35S11 9.73 11 8.6V7.4c0-1.13 0-1.7-.35-2.05S9.73 5 8.6 5c-1.7 0-2.55 0-3.07.53"
            fill="currentColor"
          />
          <path
            d="M5.53 18.47C5 17.95 5 17.1 5 15.4c0-1.13 0-1.7.35-2.05S6.27 13 7.4 13h1.2c1.13 0 1.7 0 2.05.35s.35.92.35 2.05v1.2c0 1.13 0 1.7-.35 2.05S9.73 19 8.6 19c-1.7 0-2.55 0-3.07-.53"
            fill="currentColor"
          />
          <path
            d="M13 7.4c0-1.13 0-1.7.35-2.05S14.27 5 15.4 5c1.7 0 2.55 0 3.07.53.53.52.53 1.37.53 3.07 0 1.13 0 1.7-.35 2.05s-.92.35-2.05.35h-1.2c-1.13 0-1.7 0-2.05-.35S13 9.73 13 8.6z"
            fill="currentColor"
          />
          <path
            d="M13.35 18.65C13 18.3 13 17.73 13 16.6v-1.2c0-1.13 0-1.7.35-2.05s.92-.35 2.05-.35h1.2c1.13 0 1.7 0 2.05.35s.35.92.35 2.05c0 1.7 0 2.55-.53 3.07-.52.53-1.37.53-3.07.53-1.13 0-1.7 0-2.05-.35"
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
            d="M14 2.75a36 36 0 0 1 4.29.14c1 .14 1.58.39 2 .81.43.43.69 1 .82 2.01.14 1.03.14 2.38.14 4.3a.75.75 0 0 0 1.5 0v-.07c0-1.83 0-3.29-.15-4.43a4.7 4.7 0 0 0-1.24-2.87 4.7 4.7 0 0 0-2.87-1.24c-1.14-.15-2.6-.15-4.43-.15H14a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            d="M9.94 1.25H10a.75.75 0 0 1 0 1.5 36 36 0 0 0-4.29.14c-1 .14-1.58.39-2 .81-.43.43-.68 1-.82 2.01a36 36 0 0 0-.14 4.3.75.75 0 0 1-1.5 0v-.07c0-1.83 0-3.29.15-4.43a4.7 4.7 0 0 1 1.24-2.87A4.7 4.7 0 0 1 5.51 1.4c1.14-.15 2.6-.15 4.43-.15"
            fill="currentColor"
          />
          <path
            d="M5.53 5.53C5 6.05 5 6.9 5 8.6c0 1.13 0 1.7.35 2.05s.92.35 2.05.35h1.2c1.13 0 1.7 0 2.05-.35S11 9.73 11 8.6V7.4c0-1.13 0-1.7-.35-2.05S9.73 5 8.6 5c-1.7 0-2.55 0-3.07.53"
            fill="currentColor"
          />
          <path
            d="M5.53 18.47C5 17.95 5 17.1 5 15.4c0-1.13 0-1.7.35-2.05S6.27 13 7.4 13h1.2c1.13 0 1.7 0 2.05.35s.35.92.35 2.05v1.2c0 1.13 0 1.7-.35 2.05S9.73 19 8.6 19c-1.7 0-2.55 0-3.07-.53"
            fill="currentColor"
          />
          <path
            d="M13 7.4c0-1.13 0-1.7.35-2.05S14.27 5 15.4 5c1.7 0 2.55 0 3.07.53.53.52.53 1.37.53 3.07 0 1.13 0 1.7-.35 2.05s-.92.35-2.05.35h-1.2c-1.13 0-1.7 0-2.05-.35S13 9.73 13 8.6z"
            fill="currentColor"
          />
          <path
            d="M13.35 18.65C13 18.3 13 17.73 13 16.6v-1.2c0-1.13 0-1.7.35-2.05s.92-.35 2.05-.35h1.2c1.13 0 1.7 0 2.05.35s.35.92.35 2.05c0 1.7 0 2.55-.53 3.07-.52.53-1.37.53-3.07.53-1.13 0-1.7 0-2.05-.35"
            fill="currentColor"
          />
          <path
            d="M22 13.25c.41 0 .75.34.75.75v.06c0 1.83 0 3.29-.15 4.43a4.7 4.7 0 0 1-1.24 2.87 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H14a.75.75 0 0 1 0-1.5c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.43-.42.69-1 .82-2.01.14-1.03.14-2.38.14-4.29 0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M2.75 14a.75.75 0 0 0-1.5 0v.06c0 1.83 0 3.29.15 4.43a4.7 4.7 0 0 0 1.24 2.87c.75.75 1.7 1.08 2.87 1.24 1.14.15 2.6.15 4.43.15H10a.75.75 0 0 0 0-1.5c-1.9 0-3.26 0-4.29-.14-1-.13-1.58-.39-2-.81-.43-.42-.68-1-.82-2.01A36 36 0 0 1 2.75 14"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCodeScan;
