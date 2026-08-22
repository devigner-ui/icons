import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalletCheck = forwardRef<SVGSVGElement, IconProps>(
  function IconWalletCheck(
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
              d="M9.67 19q-.01 1.14-.58 2.06a3.97 3.97 0 0 1-6.84 0A4 4 0 1 1 9.67 19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m4.11 19 .99.99 2.13-1.97"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.42 7.05a5 5 0 0 0-.75-.05h-10q-.42 0-.81.06.21-.42.58-.78l3.25-3.26a3.5 3.5 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 12v5c0 3-2 5-5 5H8.3q.47-.4.79-.94.57-.92.58-2.06a4 4 0 0 0-7-2.64V12c0-2.72 1.64-4.62 4.19-4.94Q7.25 7 7.67 7h10q.39 0 .75.05c2.58.3 4.25 2.21 4.25 4.95"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 12.5h-3a2 2 0 0 0-2 2c0 1.1.9 2 2 2h3"
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
              d="M5.67 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.97 3.67-2.13 1.97a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.76.76 0 0 1 1.06.04c.28.3.26.78-.04 1.06"
              fill="currentColor"
            />
            <path
              d="M18.42 7.05a5 5 0 0 0-.75-.05h-10q-.42 0-.81.06.21-.42.58-.78l3.25-3.26a3.5 3.5 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 12v5c0 3-2 5-5 5H8.3q.47-.4.79-.94.57-.92.58-2.06a4 4 0 0 0-7-2.64V12c0-2.72 1.64-4.62 4.19-4.94Q7.25 7 7.67 7h10q.39 0 .75.05c2.58.3 4.25 2.21 4.25 4.95"
              fill="currentColor"
            />
            <path
              d="M22.67 12.5h-3a2 2 0 0 0-2 2c0 1.1.9 2 2 2h3"
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
              d="M5.67 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.97 3.67-2.13 1.97a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.76.76 0 0 1 1.06.04c.28.3.26.78-.04 1.06"
              fill="currentColor"
            />
            <path
              d="M22.17 12.5h-2.5a2 2 0 0 0-2 2c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"
              fill="currentColor"
            />
            <path
              d="M17.2 5.4c.3.29.05.74-.37.74l-8.28-.01a.54.54 0 0 1-.38-.92l1.75-1.76a3.8 3.8 0 0 1 5.35 0l1.89 1.91z"
              fill="currentColor"
            />
            <path
              d="M22.54 18.66c-.61 2.06-2.37 3.34-4.77 3.34h-6.5c-.39 0-.64-.43-.48-.79.3-.7.49-1.49.49-2.21a5.5 5.5 0 0 0-7.68-5.04c-.37.16-.82-.09-.82-.49V12c0-2.72 1.64-4.62 4.19-4.94q.38-.06.8-.06h10q.39 0 .75.05a4.5 4.5 0 0 1 4.02 3.29.5.5 0 0 1-.48.66h-2.29a3.5 3.5 0 1 0 .1 7h2.19a.5.5 0 0 1 .48.66"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWalletCheck;
