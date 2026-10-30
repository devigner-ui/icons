import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReceiptDiscount = forwardRef<SVGSVGElement, IconProps>(
  function IconReceiptDiscount(
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
            d="M22 5.7v2.42c0 1.58-1 2.58-2.58 2.58H16V3.71c0-1.11.91-2.01 2.02-2.01a4 4 0 0 1 3.98 4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 17.08V3.7c0-1.1.9-2 2-2H8.52m-3.5.07C2.78 2.13 2 3.75 2 5.7v15c0 .38.21.73.55.89a1 1 0 0 0 1.05-.09l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 .71.3 1 1 0 0 0 .71-.3l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.05.09 1 1 0 0 0 .55-.89v-.12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6.27 13.43 5.46-5.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.18 8.2h.02Zm4.86 4.05h.02Z"
            stroke="currentColor"
            strokeWidth={Number(strokeWidth) * 1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M22 5.7v2.42c0 1.58-1 2.58-2.58 2.58H16V3.71c0-1.11.91-2.01 2.02-2.01a4 4 0 0 1 3.98 4"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M2 6.7v14a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8v-17c0-1.1.9-2 2-2H6c-3 0-4 1.79-4 4z"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.27 13.43 5.46-5.46"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.18 8.2h.02m4.84 4.05h.02"
              opacity={duotone ? "0.4" : "1"}
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
              fill="currentColor"
              d="M22 5.7v2.42c0 1.58-1 2.58-2.58 2.58H16V3.71c0-1.11.91-2.02 2.02-2.01a4 4 0 0 1 3.98 4"
            />
            <path
              fill="currentColor"
              d="M2 6.7v14a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8v-17c0-1.1.9-2 2-2H6c-3 0-4 1.79-4 4z"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              fill="currentColor"
              d="M11.43 11.78c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M6.57 9.73c.56 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1m5.69-2.29a.75.75 0 0 0-1.06 0L5.74 12.9a.75.75 0 0 0 0 1.06q.24.22.53.22c.29 0 .38-.07.53-.22l5.46-5.46a.75.75 0 0 0 0-1.06"
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
              fill="currentColor"
              d="M7 1.7H6c-3 0-4 1.79-4 4v15a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8v-17c0-1.1.9-2 2-2zm-.43 6.03c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m4.86 6.05c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m.83-5.28L6.8 13.96q-.24.22-.53.22c-.29 0-.38-.07-.53-.22a.75.75 0 0 1 0-1.06l5.46-5.46c.29-.29.77-.29 1.06 0s.29.77 0 1.06"
            />
            <path
              fill="currentColor"
              d="M18.01 1.7v1.5c.66 0 1.29.27 1.75.72.48.49.74 1.12.74 1.78v2.42c0 .74-.33 1.08-1.08 1.08H17.5V3.71c0-.28.23-.51.51-.51zm0 0C16.9 1.7 16 2.6 16 3.71v6.99h3.42C21 10.7 22 9.7 22 8.12V5.7c0-1.1-.45-2.1-1.17-2.83a4 4 0 0 0-2.82-1.17"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconReceiptDiscount;
