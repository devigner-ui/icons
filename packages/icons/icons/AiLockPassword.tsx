import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLockPassword = forwardRef<SVGSVGElement, IconProps>(function IconAiLockPassword(
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
            d="M2 16c0-2.83 0-4.24.88-5.12S5.18 10 8 10h8c2.83 0 4.24 0 5.12.88S22 13.18 22 16s0 4.24-.88 5.12-2.3.88-5.12.88H9.7m-2.4 0c-2.37 0-3.61-.08-4.42-.88C2 20.24 2 18.82 2 16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 10V8a6 6 0 0 1 9.27-5.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M18.5 3.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M2 16c0-2.83 0-4.24.88-5.12S5.18 10 8 10h8c2.83 0 4.24 0 5.12.88S22 13.18 22 16s0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 10V8a6 6 0 0 1 9.27-5.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M18.5 3.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M2 16.4c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88h8c2.83 0 4.24 0 5.12.88s.88 2.3.88 5.12 0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 19.22 2 16.4"
            fill="currentColor"
          />
          <path
            d="M8 17.4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            d="M12 17.4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
          />
          <path
            d="M17 16.4a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M5.25 10.46V8.4a6.75 6.75 0 0 1 9.81-6.01.75.75 0 0 1-.68 1.33A5.25 5.25 0 0 0 6.75 8.4v2q-.65 0-1.5.06"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.9 2.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="M6.75 8.4a5.25 5.25 0 0 1 7.63-4.68.75.75 0 0 0 .68-1.33A6.75 6.75 0 0 0 5.25 8.4v2.06c-1.11.08-1.84.29-2.37.82C2 12.16 2 13.58 2 16.4s0 4.24.88 5.12 2.3.88 5.12.88h8c2.83 0 4.24 0 5.12-.88s.88-2.3.88-5.12 0-4.24-.88-5.12-2.3-.88-5.12-.88H6.75zm1.25 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.9 2.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiLockPassword;
