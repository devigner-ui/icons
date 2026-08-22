import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWalletSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconWalletSearch(
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
              d="M12.67 22h5c3 0 5-2 5-5v-5c0-2.7-1.7-4.7-4.2-5H7.67c-.3 0-.5 0-.8.1-2.6.3-4.2 2.2-4.2 4.9v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.47 7H7.67c-.3 0-.5 0-.8.1.1-.3.3-.5.6-.8l3.2-3.3a3.5 3.5 0 0 1 5 0l1.8 1.8c.6.6.9 1.4 1 2.2"
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
              d="M6.47 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m2.67 22 1-1"
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
              d="M18.42 7.05a5 5 0 0 0-.75-.05h-10q-.42 0-.81.06.21-.42.58-.78l3.25-3.26a3.53 3.53 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 16.36V12c0-2.72 1.64-4.62 4.19-4.94Q7.25 7 7.67 7h10q.39 0 .75.05c2.58.3 4.25 2.21 4.25 4.95v5a5 5 0 0 1-5 5h-10a5 5 0 0 1-5-5z"
              fill="currentColor"
            />
            <path
              d="M22.67 12.5h-3a2 2 0 0 0-2 2c0 1.1.9 2 2 2h3"
              fill="currentColor"
            />
            <path
              d="m1.9 21.68.76-.76q-.61-.92-.63-2.09a3.82 3.82 0 1 1 1.73 3.19l-.76.76a.8.8 0 0 1-.55.23q-.31 0-.55-.23a.77.77 0 0 1 0-1.1"
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
              d="m1.9 21.68.76-.76q-.61-.92-.63-2.09a3.82 3.82 0 1 1 1.73 3.18l-.76.76a.8.8 0 0 1-1.11 0c-.3-.3-.3-.79.01-1.09"
              fill="currentColor"
            />
            <path
              d="M22.17 12.5h-2.5a2 2 0 0 0-2 2c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"
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

export default IconWalletSearch;
