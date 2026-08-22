import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextSelection = forwardRef<SVGSVGElement, IconProps>(
  function IconTextSelection(
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
              d="M9 9h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 15V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M6 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 20h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 4H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 18V6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 6v12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M8.25 9c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9"
              fill="currentColor"
            />
            <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
            <path d="M4 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
            <path d="M22 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path d="M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M4.75 5.86a2 2 0 0 1-1.5 0v12.29a2 2 0 0 1 1.5 0z"
                fill="currentColor"
              />
              <path
                d="M5.85 4.75h12.3a2 2 0 0 1 0-1.5H5.85a2 2 0 0 1 0 1.5"
                fill="currentColor"
              />
              <path
                d="M19.25 5.86a2 2 0 0 0 1.5 0v12.29a2 2 0 0 0-1.5 0z"
                fill="currentColor"
              />
              <path
                d="M18.15 19.25H5.85a2 2 0 0 1 0 1.5h12.3a2 2 0 0 1 0-1.5"
                fill="currentColor"
              />
            </g>
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
              d="M8.25 9c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-2.25V15a.75.75 0 0 1-1.5 0V9.75H9A.75.75 0 0 1 8.25 9"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.86 3.26a2 2 0 1 0-2.6 2.6L3.25 6v12l.01.14a2 2 0 1 0 2.6 2.6l.14.01h12l.14-.01a2 2 0 1 0 2.6-2.6l.01-.14V6l-.01-.14a2 2 0 1 0-2.6-2.6L18 3.25H6zm-1.12 2.6.01.14v12l-.01.14a2 2 0 0 1 1.12 1.12l.14-.01h12l.14.01a2 2 0 0 1 1.12-1.12l-.01-.14V6l.01-.14a2 2 0 0 1-1.12-1.12l-.14.01H6l-.14-.01a2 2 0 0 1-1.12 1.12"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextSelection;
