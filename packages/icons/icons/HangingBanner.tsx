import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHangingBanner = forwardRef<SVGSVGElement, IconProps>(
  function IconHangingBanner(
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
              d="M2 2h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 2h16v10.28c0 1.34 0 2-.27 2.6-.27.59-.77 1.03-1.78 1.91l-2 1.75c-1.88 1.65-2.82 2.47-3.95 2.47s-2.07-.82-3.95-2.47l-2-1.75c-1.01-.88-1.51-1.32-1.78-1.91-.27-.6-.27-1.26-.27-2.6z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8.5 13h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8.5 8h7"
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
              d="M1.25 3c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 3.75v9.53c0 1.34 0 2 .27 2.6.27.59.77 1.03 1.78 1.91l2 1.75c1.88 1.65 2.82 2.47 3.95 2.47s2.07-.82 3.95-2.47l2-1.75c1-.88 1.51-1.32 1.78-1.91.27-.6.27-1.26.27-2.6V3.75z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.75 14c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.75 9c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 9"
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
              d="M2 1.25a.75.75 0 0 0 0 1.5h2v9.53c0 1.34 0 2 .27 2.6.27.59.77 1.03 1.78 1.91l2 1.75c1.88 1.65 2.82 2.47 3.95 2.47s2.07-.82 3.95-2.47l2-1.75c1-.88 1.51-1.32 1.78-1.91.27-.6.27-1.26.27-2.6V2.75h2a.75.75 0 0 0 0-1.5zm6.5 11a.75.75 0 0 0 0 1.5h7a.75.75 0 1 0 0-1.5zM7.75 8c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5h-7A.75.75 0 0 1 7.75 8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHangingBanner;
