import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReceiptAdd = forwardRef<SVGSVGElement, IconProps>(
  function IconReceiptAdd(
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
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11.16 9.7h.59"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M6.25 9.7h2.4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 12.45v-5.5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 10.7v10a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8v-17c0-1.1.9-2 2-2H6c-3 0-4 1.79-4 4v1"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="M22 5.7v2.42c0 1.58-1 2.58-2.58 2.58H16V3.71c0-1.11.91-2.01 2.02-2.01a4 4 0 0 1 3.98 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 6.7v14a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8v-17c0-1.1.9-2 2-2H6c-3 0-4 1.79-4 4z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.25 9.7h5.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 12.45v-5.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M22 5.7v2.42c0 1.58-1 2.58-2.58 2.58H16V3.71c0-1.11.91-2.01 2.02-2.01a4 4 0 0 1 3.98 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 6.7v14a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8v-17c0-1.1.9-2 2-2H6c-3 0-4 1.79-4 4z"
              fill="currentColor"
            />
            <path
              d="M11.75 8.95h-2v-2A.76.76 0 0 0 9 6.2a.76.76 0 0 0-.75.75v2h-2a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2v2c0 .41.34.75.75.75s.75-.34.75-.75v-2h2c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
              d="M18.01 1.7v1.5a2.5 2.5 0 0 1 2.49 2.5v2.42c0 .74-.33 1.08-1.08 1.08H17.5V3.71c0-.28.23-.51.51-.51zm0 0a2 2 0 0 0-2 2.01v6.99h3.41C21 10.7 22 9.7 22 8.12V5.7a4.03 4.03 0 0 0-3.99-4"
              fill="currentColor"
            />
            <path
              d="M7 1.7H6c-3 0-4 1.79-4 4v15a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8v-17c0-1.1.9-2 2-2zm4.75 8.75h-2v2c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2h-2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2v-2c0-.41.34-.75.75-.75s.75.34.75.75v2h2c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconReceiptAdd;
