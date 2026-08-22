import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClipboardList = forwardRef<SVGSVGElement, IconProps>(
  function IconClipboardList(
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
              opacity={duotone ? "0.4" : "1"}
              d="M16 4c2.18.01 3.35.11 4.12.88.88.88.88 2.3.88 5.12v6c0 2.83 0 4.24-.88 5.12S17.82 22 15 22H9c-2.83 0-4.24 0-5.12-.88S3 18.82 3 16v-6c0-2.83 0-4.24.88-5.12C4.65 4.1 5.82 4 8 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10.5 14H17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7 14h.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7 10.5h.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M7 17.5h.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10.5 10.5H17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10.5 17.5H17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 3.5C8 2.67 8.67 2 9.5 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 4.5z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M21 16v-6c0-2.83 0-4.24-.88-5.12C19.35 4.1 18.17 4 16 4H8c-2.18.01-3.35.1-4.12.88C3 5.76 3 7.17 3 10v6c0 2.83 0 4.24.88 5.12S6.18 22 9 22h6c2.83 0 4.24 0 5.12-.88S21 18.82 21 16"
              fill="currentColor"
            />
            <path
              d="M8 3.5C8 2.67 8.67 2 9.5 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 0 1 8 4.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.25 10.5c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0c0-.41.34-.75.75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 14c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0c0-.41.34-.75.75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0c0-.41.34-.75.75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75"
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
              d="M9.5 2C8.67 2 8 2.67 8 3.5v1C8 5.33 8.67 6 9.5 6h5c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 4.04c-1.26.07-2.05.27-2.62.84C3 5.76 3 7.17 3 10v6c0 2.83 0 4.24.88 5.12S6.18 22 9 22h6c2.83 0 4.24 0 5.12-.88S21 18.82 21 16v-6c0-2.83 0-4.24-.88-5.12-.57-.57-1.36-.77-2.62-.84v.46a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3zM7 9.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 13.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5zM7 16.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm3.5 0a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClipboardList;
