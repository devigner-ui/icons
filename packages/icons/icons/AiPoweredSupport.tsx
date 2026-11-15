import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiPoweredSupport = forwardRef<SVGSVGElement, IconProps>(function IconAiPoweredSupport(
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
            d="M2.5 14h2.3c.6 0 1.2.2 1.6.6L7.8 16H11a1.3 1.3 0 1 1 0 2.6H8.3M5 21h7.5l2.74-1.65m2.06-1.23 1.2-.72c.6-.4.8-1.2.4-1.8s-1.1-.8-1.7-.5l-3 1.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.82 10V7.36a1.76 1.76 0 0 1 3.52 0V10m-3.52-1.85h3.52m1.84-2.55V10"
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
            d="M2.5 14h2.3c.6 0 1.2.2 1.6.6L7.8 16H11a1.3 1.3 0 0 1 0 2.6H8.3M5 21h7.5l6-3.6c.6-.4.8-1.2.4-1.8s-1.1-.8-1.7-.5l-3 1.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.82 10V7.36a1.76 1.76 0 0 1 3.52 0V10m-3.52-1.85h3.52m1.84-2.55V10"
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
            d="M2.5 13.25h1.77c.68 0 1.33.01 1.95.32.73.36 1.33 1.08 1.9 1.68h2.3c.58 0 1.14-.01 1.66.3a2.07 2.07 0 0 1-.13 3.57c-.48.25-.99.23-1.51.23H8.3a.75.75 0 0 1 0-1.5h2.38c.19 0 .4.03.57-.06.43-.23.37-.88-.1-1.02-.33-.1-.75-.02-1.1-.02H7.8a1 1 0 0 1-.29-.06 1 1 0 0 1-.24-.16l-1-1c-.22-.22-.43-.47-.7-.61-.41-.2-.86-.17-1.3-.17H2.5a.75.75 0 0 1 0-1.5zm2.5 7h7.3l3.93-2.36 1.23-.74c.23-.14.5-.25.7-.43.38-.35.13-1.02-.4-1-.2 0-.39.14-.56.23l-1.17.62-1.48.8a.75.75 0 1 1-.7-1.33l2.32-1.24c.5-.26.97-.57 1.54-.59a2.1 2.1 0 0 1 1.8 3.2c-.45.7-1.4 1.1-2.1 1.52l-4.52 2.71a1 1 0 0 1-.4.1H5a.75.75 0 0 1 0-1.5zM11.07 10V7.98c0-.66 0-1.29.33-1.88a2.53 2.53 0 0 1 4.43.15c.27.55.26 1.13.26 1.73V10a.75.75 0 0 1-1.5 0V8.9h-2.02V10a.75.75 0 0 1-1.5 0zm3.48-2.9c-.23-.88-1.48-1-1.88-.18q-.1.22-.11.48h2.04q0-.15-.05-.3zm2.63-2.25c.42 0 .75.34.75.75V10a.75.75 0 0 1-1.5 0V5.6c0-.41.34-.75.75-.75z"
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
            d="M2.5 13.25h1.77c.68 0 1.33.01 1.95.32.73.36 1.33 1.08 1.9 1.68h2.3c.58 0 1.14-.01 1.66.3a2.07 2.07 0 0 1-.13 3.57c-.48.25-.99.23-1.51.23H8.3a.75.75 0 0 1 0-1.5h2.38c.19 0 .4.03.57-.06.43-.23.37-.88-.1-1.02-.33-.1-.75-.02-1.1-.02H7.8a1 1 0 0 1-.29-.06 1 1 0 0 1-.24-.16l-1-1c-.22-.22-.43-.47-.7-.61-.41-.2-.86-.17-1.3-.17H2.5a.75.75 0 0 1 0-1.5zm2.5 7h7.3l3.93-2.36 1.23-.74c.23-.14.5-.25.7-.43.38-.35.13-1.02-.4-1-.2 0-.39.14-.56.23l-1.17.62-1.48.8a.75.75 0 1 1-.7-1.33l2.32-1.24c.5-.26.97-.57 1.54-.59a2.1 2.1 0 0 1 1.8 3.2c-.45.7-1.4 1.1-2.1 1.52l-4.52 2.71a1 1 0 0 1-.4.1H5a.75.75 0 0 1 0-1.5zM11.07 10V7.98c0-.66 0-1.29.33-1.88a2.53 2.53 0 0 1 4.43.15c.27.55.26 1.13.26 1.73V10a.75.75 0 0 1-1.5 0V8.9h-2.02V10a.75.75 0 0 1-1.5 0zm3.48-2.9c-.23-.88-1.48-1-1.88-.18q-.1.22-.11.48h2.04q0-.15-.05-.3zm2.63-2.25c.42 0 .75.34.75.75V10a.75.75 0 0 1-1.5 0V5.6c0-.41.34-.75.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiPoweredSupport;
