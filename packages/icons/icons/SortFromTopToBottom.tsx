import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSortFromTopToBottom = forwardRef<SVGSVGElement, IconProps>(
  function IconSortFromTopToBottom(
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
              d="M4 16h9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 11h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 6h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17 4v16l3-4"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 3.25c.41 0 .75.34.75.75v13.75l1.65-2.2a.75.75 0 0 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              d="M3.25 16c0-.41.34-.75.75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.25 11c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.25 6c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 3.25c.41 0 .75.34.75.75v13.75l1.65-2.2a.75.75 0 0 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4c0-.41.34-.75.75-.75M7.25 6c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6m-2 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m-2 5c0-.41.34-.75.75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSortFromTopToBottom;
