import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArmchair = forwardRef<SVGSVGElement, IconProps>(function IconArmchair(
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
            d="M17.79 16.33v.75c.41 0 .75-.33.75-.75zm-11.58 0h-.75c0 .42.34.75.75.75zm-3.46-.47a.75.75 0 0 0-1.5 0zm2.17 5.04.17-.73h0zm-2.83-3.01-.73.16zm17 3.01.17.73zm2.82-3.01-.74-.16zm-9.91-.8a.75.75 0 0 0 0-1.5zm4-1.5a.75.75 0 0 0 0 1.5zM1.25 12a.75.75 0 0 0 1.5 0zm15.79-.75v5.08h1.5v-5.08zm-11.58 0v5.08h1.5v-5.08zm15.79 0v4.6h1.5v-4.6zM4.11 9.75c.7 0 1.35.62 1.35 1.5h1.5c0-1.61-1.23-3-2.85-3zm15.78-1.5a2.93 2.93 0 0 0-2.85 3h1.5c0-.88.65-1.5 1.35-1.5zm0 1.5c.7 0 1.36.62 1.36 1.5h1.5c0-1.61-1.23-3-2.86-3zM6.82 20.25a8 8 0 0 1-1.73-.08l-.35 1.46c.52.13 1.13.12 2.08.12zm-5.57-4.4c0 1.03 0 1.66.11 2.2l1.47-.32c-.08-.34-.08-.77-.08-1.87zm3.84 4.32c-1.1-.27-2-1.2-2.26-2.44l-1.47.32a4.6 4.6 0 0 0 3.38 3.58zM4.11 8.25a2.93 2.93 0 0 0-2.86 3h1.5c0-.88.65-1.5 1.36-1.5zm13.07 13.5c.95 0 1.56 0 2.08-.12l-.35-1.46c-.3.07-.7.08-1.73.08zm4.07-5.9c0 1.1 0 1.54-.08 1.88l1.47.32c.11-.54.11-1.17.11-2.2zm-1.99 5.78c1.7-.42 3-1.82 3.38-3.58l-1.47-.32a3.1 3.1 0 0 1-2.26 2.44zM6.21 17.08H12v-1.5H6.21zm9.79 0h1.79v-1.5H16zm1.18 3.17H12v1.5h5.18zm-5.18 0H6.82v1.5H12zm-10.75-9V12h1.5v-.75z"
            fill="currentColor"
          />
          <path
            d="M6 10V8.15c0-2.3 0-3.45.48-4.3q.49-.86 1.32-1.36C8.64 2 9.76 2 12 2s3.36 0 4.2.5q.83.49 1.32 1.35c.48.85.48 2 .48 4.3V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M19 22v-1M4 22v-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M6.82 21h10.36c1 0 1.5 0 1.9-.1a3.9 3.9 0 0 0 2.83-3.01c.09-.44.09-.97.09-2.03v-4.61C22 10 21.06 9 19.9 9s-2.11 1-2.11 2.25v5.08H6.21v-5.08C6.21 10 5.27 9 4.11 9S2 10 2 11.25v4.6c0 1.07 0 1.6.1 2.04a3.9 3.9 0 0 0 2.82 3.01c.4.1.9.1 1.9.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 10V8.15c0-2.3 0-3.45.48-4.3q.49-.86 1.32-1.36C8.64 2 9.76 2 12 2s3.36 0 4.2.5q.83.49 1.32 1.35c.48.85.48 2 .48 4.3V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.5 22v-1m-15 1v-1"
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
            d="M17.18 20.5H6.82c-.74 0-1.21 0-1.57-.04v1.29a.75.75 0 1 1-1.5 0v-1.87a4 4 0 0 1-1.66-2.49C2 16.95 2 16.42 2 15.36v-4.61C2 9.5 2.94 8.5 4.1 8.5s2.11 1 2.11 2.25v3.08c0 .95 0 1.42.3 1.71.29.3.76.3 1.7.3h7.58c.94 0 1.41 0 1.7-.3s.3-.76.3-1.7v-3.1c0-1.23.94-2.24 2.1-2.24S22 9.5 22 10.75v4.6c0 1.07 0 1.6-.1 2.04a4 4 0 0 1-1.65 2.5v1.86a.75.75 0 0 1-1.5 0v-1.3c-.36.05-.83.05-1.57.05"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 7.65v8.85h12V7.65c0-2.3 0-3.45-.48-4.3a4 4 0 0 0-1.32-1.36c-.84-.49-1.96-.49-4.2-.49s-3.36 0-4.2.5q-.83.49-1.32 1.35C6 4.2 6 5.35 6 7.65"
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
            d="M17.18 20.5H6.82c-.74 0-1.21 0-1.57-.04v1.29a.75.75 0 1 1-1.5 0v-1.87a4 4 0 0 1-1.66-2.49C2 16.95 2 16.42 2 15.36v-4.61C2 9.5 2.94 8.5 4.1 8.5s2.11 1 2.11 2.25v3.08c0 .95 0 1.42.3 1.71.29.3.76.3 1.7.3h7.58c.94 0 1.41 0 1.7-.3s.3-.76.3-1.7v-3.1c0-1.23.94-2.24 2.1-2.24S22 9.5 22 10.75v4.6c0 1.07 0 1.6-.1 2.04a4 4 0 0 1-1.65 2.5v1.86a.75.75 0 0 1-1.5 0v-1.3c-.36.05-.83.05-1.57.05"
            fill="currentColor"
          />
          <path
            d="M6 8.17v-.52c0-2.3 0-3.45.48-4.3q.49-.86 1.32-1.36c.84-.49 1.96-.49 4.2-.49s3.36 0 4.2.5q.83.49 1.32 1.35c.48.85.48 2 .48 4.3v.52a3.3 3.3 0 0 0-1.21 2.58v3.08c0 .47 0 .71-.15.86-.14.14-.38.14-.85.14H8.21c-.47 0-.7 0-.85-.14s-.15-.39-.15-.86v-3.08c0-1.03-.46-1.97-1.21-2.58"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconArmchair;
