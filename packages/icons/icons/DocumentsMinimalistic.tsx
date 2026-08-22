import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDocumentsMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconDocumentsMinimalistic(
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
              d="M5 8c0-2.83 0-4.24.88-5.12S8.18 2 11 2h2c2.83 0 4.24 0 5.12.88S19 5.18 19 8v8c0 2.83 0 4.24-.88 5.12S15.82 22 13 22h-2c-2.83 0-4.24 0-5.12-.88S5 18.82 5 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 13h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9 9h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 17h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 19V5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 19V5"
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
              d="M10.75 2h2c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-2c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8c0-2.83 0-4.24.88-5.12S7.93 2 10.75 2M8 13c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 13m0-4c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9m0 8c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.75 4.25c.41 0 .75.34.75.75v14A.75.75 0 0 1 1 19V5c0-.41.34-.75.75-.75"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.75 4.25c.41 0 .75.34.75.75v14a.75.75 0 0 1-1.5 0V5c0-.41.34-.75.75-.75"
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
              d="M10.75 2h2c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12v8c0 2.83 0 4.24-.88 5.12s-2.3.88-5.12.88h-2c-2.83 0-4.24 0-5.12-.88s-.88-2.3-.88-5.12V8c0-2.83 0-4.24.88-5.12S7.93 2 10.75 2M8 13c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 13m0-4c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-6A.75.75 0 0 1 8 9m0 8c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 8 17"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.75 4.25c.41 0 .75.34.75.75v14A.75.75 0 0 1 1 19V5c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.75 4.25c.41 0 .75.34.75.75v14a.75.75 0 0 1-1.5 0V5c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDocumentsMinimalistic;
