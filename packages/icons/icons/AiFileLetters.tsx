import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFileLetters = forwardRef<SVGSVGElement, IconProps>(function IconAiFileLetters(
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
            d="M15.29 20.5h1.21c2.2 0 4-1.8 4-4V10L14 3.5H7.5c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h5.39"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.82 15.5v-2.64a1.76 1.76 0 0 1 3.52 0v2.64m-3.52-1.85h3.52m1.84-2.55v4.4"
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
            opacity={duotone ? "0.4" : "1"}
            d="M14 3.5H7.5c-2.2 0-4 1.8-4 4v9c0 2.2 1.8 4 4 4h9c2.2 0 4-1.8 4-4V10Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.82 15.5v-2.64a1.76 1.76 0 0 1 3.52 0v2.64m-3.52-1.85h3.52m1.84-2.55v4.4"
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
            d="M21.25 10v6.5a5 5 0 0 1-1.4 3.36 5 5 0 0 1-3.35 1.39h-9a5 5 0 0 1-3.35-1.4 5 5 0 0 1-1.4-3.35v-9a5 5 0 0 1 1.4-3.35 5 5 0 0 1 3.35-1.4H14q.31 0 .53.22l6.5 6.5q.21.22.22.53z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.07 15.5v-2.02c0-.66 0-1.29.33-1.88a2.53 2.53 0 0 1 4.43.15c.27.55.26 1.13.26 1.73v2.02a.75.75 0 0 1-1.5 0v-1.1H9.57v1.1a.75.75 0 0 1-1.5 0zm3.48-2.9c-.23-.88-1.48-1-1.88-.18q-.1.23-.11.48h2.04q0-.15-.05-.3zm2.63-2.25c.42 0 .75.34.75.75v4.4a.75.75 0 0 1-1.5 0v-4.4c0-.41.34-.75.75-.75z"
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
            d="M21.25 10v6.5a5 5 0 0 1-1.4 3.36 5 5 0 0 1-3.35 1.39h-9a5 5 0 0 1-3.35-1.4 5 5 0 0 1-1.4-3.35v-9a5 5 0 0 1 1.4-3.35 5 5 0 0 1 3.35-1.4H14q.31 0 .53.22l6.5 6.5q.21.22.22.53zM8.82 16.25c.41 0 .75-.34.75-.75v-1.1h2.02v1.1a.75.75 0 0 0 1.5 0v-2.02c0-.6.01-1.18-.26-1.73a2.53 2.53 0 0 0-4.43-.15c-.34.6-.33 1.22-.33 1.88v2.02c0 .41.33.75.75.75zm2.78-3.35H9.56q0-.25.1-.49c.41-.82 1.66-.7 1.9.2zm1.83-1.8v4.4a.75.75 0 0 0 1.5 0v-4.4a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiFileLetters;
