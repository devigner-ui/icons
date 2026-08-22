import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReceiptItem = forwardRef<SVGSVGElement, IconProps>(
  function IconReceiptItem(
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
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M22 6v2.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2A4 4 0 0 1 22 6"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              d="M2 7v14a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28A1 1 0 0 0 16 21V4c0-1.1.9-2 2-2H6C3 2 2 3.79 2 6z"
            />
            <path
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 13.01h3m-3-4h3"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              stroke="currentColor"
              strokeWidth={Number(strokeWidth) * 1.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9"
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
              d="M22.67 6v2.42c0 1.58-1 2.58-2.58 2.58h-3.42V4.01c0-1.11.91-2.02 2.02-2.01a4 4 0 0 1 3.98 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 7v14a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28a1 1 0 0 0 1.6-.8V4c0-1.1.9-2 2-2h-12c-3 0-4 1.79-4 4z"
              fill="currentColor"
            />
            <path
              d="M12.67 12.26h-3a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
            <path
              d="M9.67 9.76h3c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-3a.76.76 0 0 0-.75.75c0 .41.34.75.75.75"
              fill="currentColor"
            />
            <path
              d="M6.64 8.01a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1"
              fill="currentColor"
            />
            <path
              d="M6.64 12.01a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1"
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
              fill="currentColor"
              d="M7 2H6C3 2 2 3.79 2 6v15a1 1 0 0 0 1.6.8l1.71-1.28a1 1 0 0 1 1.32.1l1.66 1.67a1 1 0 0 0 1.42 0l1.68-1.68a1 1 0 0 1 1.3-.09l1.71 1.28A1 1 0 0 0 16 21V4c0-1.1.9-2 2-2zM5.97 14.01c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M12 13.76H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75m0-4H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            />
            <path
              fill="currentColor"
              d="M18.01 2v1.5c.66 0 1.29.27 1.75.72.48.49.74 1.12.74 1.78v2.42c0 .74-.33 1.08-1.08 1.08H17.5V4.01c0-.28.23-.51.51-.51zm0 0C16.9 2 16 2.9 16 4.01V11h3.42C21 11 22 10 22 8.42V6c0-1.1-.45-2.1-1.17-2.83A4 4 0 0 0 18.01 2"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconReceiptItem;
