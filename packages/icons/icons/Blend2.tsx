import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBlend2 = forwardRef<SVGSVGElement, IconProps>(function IconBlend2(
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
            d="M16.67 9a7 7 0 1 1-13.99.01A7 7 0 0 1 16.67 9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 15a7 7 0 0 1-13.93.93q.45.07.93.07a7 7 0 0 0 6.93-7.93A7 7 0 0 1 22.67 15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.82 14.12 1.31 1.29"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.67 12-1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m12.67 17-1-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M13.17 17.53a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.59-1.59a6 6 0 0 0 1.69-.43l.96.96c.3.29.3.77 0 1.06"
            fill="currentColor"
          />
          <path
            d="M16.63 15.93a.74.74 0 0 1-1.06.01l-1.53-1.5q.59-.47 1.06-1.07l1.52 1.5c.3.29.3.77.01 1.06"
            fill="currentColor"
          />
          <path
            d="M18.17 12.53a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.96-.96q.33-.8.43-1.69l1.59 1.59c.3.29.3.77 0 1.06"
            fill="currentColor"
          />
          <path
            d="M16.57 8.07a6.99 6.99 0 1 0-7.86 7.86 6 6 0 0 0 1.81.01l-.38-.38a.75.75 0 0 1 0-1.06c.29-.3.77-.3 1.06 0l1.01 1.01a7 7 0 0 0 1.83-1.07l-.9-.89a.75.75 0 0 1 1.06-1.07l.9.89q.67-.81 1.05-1.8l-1.01-1.01a.75.75 0 0 1 0-1.06c.29-.3.77-.3 1.06 0l.38.38a6 6 0 0 0-.01-1.81"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.64 15a7 7 0 0 1-13.93.93 6 6 0 0 0 1.81.01l1.59 1.59q.23.22.53.22t.53-.22c.3-.29.3-.77 0-1.06l-.96-.96a7 7 0 0 0 1.83-1.07l1.53 1.5q.24.21.53.22.3 0 .53-.23a.75.75 0 0 0-.01-1.06l-1.52-1.5q.67-.81 1.05-1.8l.96.96q.23.22.53.22t.53-.22c.3-.29.3-.77 0-1.06l-1.59-1.59a6 6 0 0 0-.01-1.81A7 7 0 0 1 22.64 15"
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
            d="M16.57 8.07a6.99 6.99 0 1 0-7.86 7.86 6 6 0 0 0 1.27.06c.23-.01.32-.27.16-.43a.75.75 0 0 1 0-1.06c.29-.3.77-.3 1.06 0l.78.78c.14.14.35.19.53.1q.57-.26 1.09-.6a.47.47 0 0 0 .04-.73l-.5-.5a.75.75 0 0 1 1.06-1.07l.5.5c.22.21.56.2.73-.05q.35-.5.6-1.06a.5.5 0 0 0-.1-.53l-.79-.78a.75.75 0 0 1 0-1.06c.29-.3.77-.3 1.06 0 .16.16.42.07.43-.15a7 7 0 0 0-.06-1.28"
            fill="currentColor"
          />
          <path
            d="M22.64 15a7 7 0 0 1-13.48 2.63c-.12-.3.14-.63.48-.63q.52 0 1.02-.07l.5-.07a.5.5 0 0 1 .42.14l.53.53q.23.22.53.22t.53-.22c.3-.29.3-.77 0-1.06a.2.2 0 0 1 .06-.32 8 8 0 0 0 1.17-.73c.2-.15.5-.14.69.04l.48.48q.23.22.53.22t.53-.23a.75.75 0 0 0-.01-1.06l-.48-.47a.5.5 0 0 1-.04-.68q.4-.55.7-1.14a.2.2 0 0 1 .31-.05q.23.22.53.22t.53-.22c.3-.29.3-.77 0-1.06l-.53-.53a.5.5 0 0 1-.14-.41l.07-.51q.07-.5.07-1.02c0-.33.32-.6.63-.48A7 7 0 0 1 22.64 15"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBlend2;
