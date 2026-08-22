import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReceiptMinus = forwardRef<SVGSVGElement, IconProps>(
  function IconReceiptMinus(
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
              d="M22.67 6v2.42c0 1.58-1 2.58-2.58 2.58h-3.42V4.01c0-1.11.91-2.01 2.02-2.01a4 4 0 0 1 3.98 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 7v14a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8V4c0-1.1.9-2 2-2h-12c-3 0-4 1.79-4 4z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.92 10h5.5"
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
              d="M22.67 6v2.42c0 1.58-1 2.58-2.58 2.58h-3.42V4.01c0-1.11.91-2.01 2.02-2.01a4 4 0 0 1 3.98 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 7v14a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8V4c0-1.1.9-2 2-2h-12c-3 0-4 1.79-4 4z"
              fill="currentColor"
            />
            <path
              d="M12.42 10.75h-5.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="M7.67 2h-1c-3 0-4 1.79-4 4v15a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8V4c0-1.1.9-2 2-2zm4.75 8.75h-5.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M18.68 2v1.5A2.5 2.5 0 0 1 21.17 6v2.42c0 .74-.33 1.08-1.08 1.08h-1.92V4.01c0-.28.23-.51.51-.51zm0 0a2 2 0 0 0-2 2.01V11h3.41c1.58 0 2.58-1 2.58-2.58V6a4.03 4.03 0 0 0-3.99-4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconReceiptMinus;
