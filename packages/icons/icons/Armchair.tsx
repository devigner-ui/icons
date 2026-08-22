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
            d="M17.18 21H6.82c-.74 0-1.21 0-1.57-.04v1.29a.75.75 0 1 1-1.5 0v-1.87a4 4 0 0 1-1.66-2.49C2 17.45 2 16.92 2 15.86v-4.61C2 10 2.94 9 4.1 9s2.11 1 2.11 2.25v3.08c0 .95 0 1.42.3 1.71.29.3.76.3 1.7.3h7.58c.94 0 1.41 0 1.7-.3s.3-.76.3-1.7v-3.1c0-1.23.94-2.24 2.1-2.24S22 10 22 11.25v4.6c0 1.07 0 1.6-.1 2.04a4 4 0 0 1-1.65 2.5v1.86a.75.75 0 0 1-1.5 0v-1.3c-.36.05-.83.05-1.57.05"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 8.15V17h12V8.15c0-2.3 0-3.45-.48-4.3a4 4 0 0 0-1.32-1.36C15.36 2 14.24 2 12 2s-3.36 0-4.2.5q-.83.49-1.32 1.35C6 4.7 6 5.85 6 8.15"
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
            d="M17.18 21H6.82c-.74 0-1.21 0-1.57-.04v1.29a.75.75 0 1 1-1.5 0v-1.87a4 4 0 0 1-1.66-2.49C2 17.45 2 16.92 2 15.86v-4.61C2 10 2.94 9 4.1 9s2.11 1 2.11 2.25v3.08c0 .95 0 1.42.3 1.71.29.3.76.3 1.7.3h7.58c.94 0 1.41 0 1.7-.3s.3-.76.3-1.7v-3.1c0-1.23.94-2.24 2.1-2.24S22 10 22 11.25v4.6c0 1.07 0 1.6-.1 2.04a4 4 0 0 1-1.65 2.5v1.86a.75.75 0 0 1-1.5 0v-1.3c-.36.05-.83.05-1.57.05"
            fill="currentColor"
          />
          <path
            d="M6 8.67v-.52c0-2.3 0-3.45.48-4.3q.49-.86 1.32-1.36C8.64 2 9.76 2 12 2s3.36 0 4.2.5q.83.49 1.32 1.35c.48.85.48 2 .48 4.3v.52a3.3 3.3 0 0 0-1.21 2.58v3.08c0 .47 0 .71-.15.86-.14.14-.38.14-.85.14H8.21c-.47 0-.7 0-.85-.14s-.15-.39-.15-.86v-3.08c0-1.03-.46-1.97-1.21-2.58"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconArmchair;
