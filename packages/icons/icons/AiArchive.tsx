import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiArchive = forwardRef<SVGSVGElement, IconProps>(function IconAiArchive(
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
            d="M14.62 20H5c-1.4 0-2.5-1.1-2.5-2.5v-10C2.5 6.1 3.6 5 5 5h3.4c.6 0 1.2.3 1.6.7l1.3 1.6c.4.5 1 .7 1.6.7H19c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5h-1.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.32 16.8v-2.64a1.76 1.76 0 0 1 3.52 0v2.64m-3.52-1.85h3.52m1.84-2.55v4.4"
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
            d="M2.5 7.5C2.5 6.1 3.6 5 5 5h3.4c.6 0 1.2.3 1.6.7l1.3 1.6c.4.5 1 .7 1.6.7H19c1.4 0 2.5 1.1 2.5 2.5v7c0 1.4-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-1.1-2.5-2.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.32 16.8v-2.64a1.76 1.76 0 0 1 3.52 0v2.64m-3.52-1.85h3.52m1.84-2.55v4.4"
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
            d="M1.75 7.5c.03-.85.4-1.76.95-2.3A3.6 3.6 0 0 1 5 4.25h3.4a3.7 3.7 0 0 1 2.18.98l1.3 1.6c.23.38.54.44 1.02.42H19c.85.03 1.76.4 2.3.95.55.54.92 1.45.95 2.3v7a3.6 3.6 0 0 1-.94 2.3 3.6 3.6 0 0 1-2.31.95H5a3.6 3.6 0 0 1-2.3-.94 3.6 3.6 0 0 1-.95-2.31z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.57 16.8v-2.02c0-.66 0-1.29.33-1.88a2.53 2.53 0 0 1 4.43.15c.27.55.26 1.13.26 1.73v2.02a.75.75 0 0 1-1.5 0v-1.1h-2.02v1.1a.75.75 0 0 1-1.5 0zm3.48-2.9c-.23-.88-1.48-1-1.88-.19q-.1.24-.11.5h2.04q0-.15-.05-.3zm2.63-2.25c.42 0 .75.34.75.75v4.4a.75.75 0 0 1-1.5 0v-4.4c0-.41.34-.75.75-.75z"
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
            d="M1.75 7.5c.03-.85.4-1.76.95-2.3A3.6 3.6 0 0 1 5 4.25h3.4a3.7 3.7 0 0 1 2.18.98l1.3 1.6c.23.38.54.44 1.02.42H19c.85.03 1.76.4 2.3.95.55.54.92 1.45.95 2.3v7a3.6 3.6 0 0 1-.94 2.3 3.6 3.6 0 0 1-2.31.95H5a3.6 3.6 0 0 1-2.3-.94 3.6 3.6 0 0 1-.95-2.31zm7.57 10.05c.41 0 .75-.34.75-.75v-1.1h2.02v1.1a.75.75 0 0 0 1.5 0v-2.02c0-.6.01-1.18-.26-1.73a2.53 2.53 0 0 0-4.43-.15c-.34.6-.33 1.22-.33 1.88v2.02c0 .41.33.75.75.75zm2.78-3.35h-2.04q0-.25.1-.49c.41-.82 1.66-.7 1.9.2zm1.83-1.8v4.4a.75.75 0 0 0 1.5 0v-4.4a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiArchive;
