import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartphoneRotateOrientation = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartphoneRotateOrientation(
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
              d="M2 8c0-2.83 0-4.24.88-5.12S5.18 2 8 2h1c2.83 0 4.24 0 5.12.88S15 5.18 15 8v8c0 2.83 0 4.24-.88 5.12S11.82 22 9 22H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M17.5 10c1.86.03 2.91.17 3.62.88.88.88.88 2.3.88 5.12s0 4.24-.88 5.12c-.7.7-1.76.85-3.62.87"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11 5H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 18v-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.5 6.99 22 8a6.06 6.06 0 0 0-5-6"
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
              opacity={duotone ? "0.4" : "1"}
              d="M20.43 21.15c.85-.84.85-2.2.85-4.93s0-4.1-.85-4.94c-.45-.45-1.68-.66-2.98-.76-.9-.06-1.34-.1-1.65.2-.3.28-.3.75-.3 1.68v7.64c0 .94 0 1.4.3 1.7.31.28.76.25 1.65.18 1.3-.1 2.53-.32 2.98-.77"
              fill="currentColor"
            />
            <path
              d="M19.1 14.29a.72.72 0 0 0-1.44 0v3.85a.72.72 0 1 0 1.45 0z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M2 8.5c0-2.72 0-4.08.85-4.93.84-.85 2.2-.85 4.93-.85h.97c2.72 0 4.09 0 4.93.85.85.85.85 2.21.85 4.94v7.7c0 2.73 0 4.1-.85 4.94-.84.85-2.2.85-4.93.85h-.97c-2.72 0-4.09 0-4.93-.85C2 20.31 2 18.95 2 16.22z"
                fill="currentColor"
              />
            </g>
            <path
              d="M5.86 4.9a.72.72 0 0 0 0 1.44h4.82a.72.72 0 0 0 0-1.45z"
              fill="currentColor"
            />
            <path
              d="M8.27 19.1a1.45 1.45 0 1 0 0-2.88 1.45 1.45 0 0 0 0 2.89"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.74 2.6c.07-.4.44-.66.84-.59A6.6 6.6 0 0 1 22 8.51a.72.72 0 0 1-1.13.6l-1.44-.98a.72.72 0 0 1 .8-1.2l.1.06a5.1 5.1 0 0 0-4-3.55.7.7 0 0 1-.59-.84"
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
              d="M2.85 3.57C2 4.42 2 5.78 2 8.51v7.7c0 2.73 0 4.1.85 4.94.84.85 2.2.85 4.93.85h.97c2.72 0 4.09 0 4.93-.85.85-.84.85-2.2.85-4.93V8.5c0-2.73 0-4.1-.85-4.94-.84-.85-2.2-.85-4.93-.85h-.97c-2.72 0-4.09 0-4.93.85m3 1.32a.72.72 0 1 0 0 1.45h4.82a.72.72 0 0 0 0-1.45zM8.27 19.1a1.45 1.45 0 1 0 0-2.9 1.45 1.45 0 0 0 0 2.9"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.28 16.22c0 2.72 0 4.09-.85 4.93-.45.45-1.68.67-2.98.77-.9.07-1.34.1-1.65-.19-.3-.28-.3-.75-.3-1.69V12.4c0-.93 0-1.4.3-1.69.31-.29.76-.25 1.65-.19 1.3.1 2.53.3 2.98.76.85.85.85 2.21.85 4.94m-2.17-1.93a.72.72 0 1 0-1.45 0v3.85a.72.72 0 1 0 1.45 0z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.75 2.6c.06-.4.44-.66.83-.59A6.6 6.6 0 0 1 22 8.51a.72.72 0 0 1-1.13.6l-1.44-.98a.72.72 0 1 1 .8-1.2l.1.06a5.1 5.1 0 0 0-4-3.55.7.7 0 0 1-.58-.84"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartphoneRotateOrientation;
