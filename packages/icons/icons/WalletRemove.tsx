import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalletRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconWalletRemove(
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
              d="M22.67 12v5c0 3-2 5-5 5H8.3q.47-.4.79-.94.57-.92.58-2.06a4 4 0 0 0-7-2.64V12c0-2.72 1.64-4.62 4.19-4.94Q7.25 7 7.67 7h10q.39 0 .75.05c2.58.3 4.25 2.21 4.25 4.95"
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
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 12.5h-3a2 2 0 0 0-2 2c0 1.1.9 2 2 2h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 19a4 4 0 0 1-1.37 3 3.97 3.97 0 0 1-6.05-.94A4 4 0 1 1 9.67 19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m6.74 20.04-2.11-2.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.71 17.96 4.6 20.07"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 12v5c0 3-2 5-5 5H8.3q.47-.4.79-.94.57-.92.58-2.06a4 4 0 0 0-7-2.64V12c0-2.72 1.64-4.62 4.19-4.94Q7.25 7 7.67 7h10q.39 0 .75.05c2.58.3 4.25 2.21 4.25 4.95"
              fill="currentColor"
            />
            <path
              d="M18.42 7.05a5 5 0 0 0-.75-.05h-10q-.42 0-.81.06.21-.42.58-.78l3.25-3.26a3.5 3.5 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26"
              fill="currentColor"
            />
            <path
              d="M22.67 12.5h-3a2 2 0 0 0-2 2c0 1.1.9 2 2 2h3"
              fill="currentColor"
            />
            <path
              d="M5.67 15a3.98 3.98 0 0 0-3.42 6.06 3.97 3.97 0 0 0 6.84 0q.57-.92.58-2.06a4 4 0 0 0-4-4m1.6 5.58a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.5-.5a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06"
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
              d="M22.17 12.5h-2.5a2 2 0 0 0-2 2c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"
              fill="currentColor"
            />
            <path
              d="M5.67 15a3.98 3.98 0 0 0-3.42 6.06 3.97 3.97 0 0 0 6.84 0q.57-.92.58-2.06a4 4 0 0 0-4-4m1.6 5.58a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.5-.5a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06l-.5.5.53.53c.3.29.3.76 0 1.06"
              fill="currentColor"
            />
            <path
              d="M17.2 5.4c.3.29.05.74-.37.74l-8.28-.01a.54.54 0 0 1-.38-.92l1.75-1.76a3.8 3.8 0 0 1 5.35 0l1.9 1.91z"
              fill="currentColor"
            />
            <path
              d="M22.54 18.66c-.6 2.06-2.37 3.34-4.77 3.34h-6.5c-.39 0-.64-.43-.48-.79.3-.7.5-1.49.5-2.21a5.5 5.5 0 0 0-7.69-5.04c-.37.16-.82-.09-.82-.49V12c0-2.72 1.64-4.62 4.2-4.94q.36-.06.8-.06h10q.38 0 .74.05a4.5 4.5 0 0 1 4.02 3.29.5.5 0 0 1-.48.66h-2.29a3.5 3.5 0 1 0 .1 7h2.2a.5.5 0 0 1 .47.66"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWalletRemove;
