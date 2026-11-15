import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFuelTank = forwardRef<SVGSVGElement, IconProps>(function IconAiFuelTank(
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
            d="M16 22v-7M3 22v-4m0-4V8c0-2.83 0-4.24.88-5.12S6.18 2 9 2h1c2.83 0 4.24 0 5.12.88S16 5.18 16 8v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 6H8c-.94 0-1.41 0-1.7.3C6 6.58 6 7.05 6 8s0 1.41.3 1.7c.29.3.76.3 1.7.3h3c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7s0-1.41-.3-1.7C12.42 6 11.95 6 11 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M7 17h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M21.91 6.67a3 3 0 0 1 .09.95V18.5a1.5 1.5 0 0 1-3 0v-.07c0-.79-.64-1.43-1.43-1.43H16m6-9h-1.5c-.83 0-1.5.67-1.5 1.5v2.42c0 .64.41 1.22 1.03 1.42L22 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M16 22V8c0-2.83 0-4.24-.88-5.12S12.82 2 10 2H9c-2.83 0-4.24 0-5.12.88S3 5.18 3 8v14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 6H8c-.94 0-1.41 0-1.7.3C6 6.58 6 7.05 6 8s0 1.41.3 1.7c.29.3.76.3 1.7.3h3c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7s0-1.41-.3-1.7C12.42 6 11.95 6 11 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 17h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.91 6.67a3 3 0 0 1 .09.95V18.5a1.5 1.5 0 0 1-3 0v-.07c0-.79-.64-1.43-1.43-1.43H16m6-9h-1.5c-.83 0-1.5.67-1.5 1.5v2.42c0 .64.41 1.22 1.03 1.42L22 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M10 1.6H9c-2.83 0-4.24 0-5.12.88S3 4.78 3 7.6v13.25h13V7.6c0-2.83 0-4.24-.88-5.12S12.82 1.6 10 1.6"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M3 20.85H2a.75.75 0 0 0 0 1.5h15.12a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M8.25 5.6h3c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7s0 1.41-.3 1.7c-.29.3-.76.3-1.7.3h-3c-.94 0-1.41 0-1.7-.3-.3-.28-.3-.75-.3-1.7s0-1.41.3-1.7c.28-.3.75-.3 1.7-.3"
            fill="currentColor"
          />
          <path
            d="M7.25 15.85a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M16 17.35h1.57c.38 0 .68.3.68.68v.07a2.25 2.25 0 1 0 4.5 0V6.83l-.12-.35a.75.75 0 0 0-1.45.39l.07.35v.38h-.75c-.83 0-1.5.67-1.5 1.5v2.42c0 .64.41 1.22 1.03 1.42l1.22.41v4.75a.75.75 0 0 1-1.5 0v-.07c0-1.2-.98-2.18-2.18-2.18H16z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
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
            d="M9 1.6h1c2.83 0 4.24 0 5.12.88S16 4.78 16 7.6v8.25h1.57c1.2 0 2.18.98 2.18 2.18v.07a.75.75 0 0 0 1.5 0v-4.75l-1.22-.4A1.5 1.5 0 0 1 19 11.52V9.1c0-.83.67-1.5 1.5-1.5h.75v-.68l-.07-.05a.75.75 0 0 1 1.45-.39 4 4 0 0 1 .12.72v10.9a2.25 2.25 0 1 1-4.5 0v-.07c0-.38-.3-.68-.68-.68H16v3.5h1.12a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V7.6c0-2.83 0-4.24.88-5.12S6.18 1.6 9 1.6M7.25 15.85a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm4-10.25h-3c-.94 0-1.41 0-1.7.3-.3.28-.3.75-.3 1.7s0 1.41.3 1.7c.29.3.76.3 1.7.3h3c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7s0-1.41-.3-1.7c-.28-.3-.75-.3-1.7-.3"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiFuelTank;
