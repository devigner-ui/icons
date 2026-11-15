import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSmartHouse = forwardRef<SVGSVGElement, IconProps>(function IconAiSmartHouse(
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
            d="M13.27 21H7c-1.7 0-3-1.3-3-3v-7.7c0-.9.4-1.7 1.1-2.3l5-4.2c1.1-.9 2.7-.9 3.8 0l5 4.2c.7.6 1.1 1.4 1.1 2.3V18c0 1.7-1.3 3-3 3h-1.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.44 17.2v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36M14.56 13v4.2"
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
            d="M4 10.3c0-.9.4-1.7 1.1-2.3l5-4.2c1.1-.9 2.7-.9 3.8 0l5 4.2c.7.6 1.1 1.4 1.1 2.3V18c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.44 17.2v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36M14.56 13v4.2"
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
            d="M3.25 10.3a4.2 4.2 0 0 1 1.37-2.87l5-4.21A4 4 0 0 1 12 2.37c.8 0 1.71.34 2.38.86l5 4.2c.8.72 1.33 1.8 1.37 2.87V18a4 4 0 0 1-1.08 2.67A4 4 0 0 1 17 21.75H7a4 4 0 0 1-2.67-1.08A4 4 0 0 1 3.25 18z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.69 17.2v-1.92c0-.68 0-1.32.38-1.91a2.45 2.45 0 0 1 4.26.3c.24.52.22 1.06.22 1.61v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zM12 14.42c-.23-.78-1.32-.9-1.7-.19q-.12.22-.13.46h1.88q-.01-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0V13c0-.41.34-.75.75-.75z"
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
            d="M3.25 10.3a4.2 4.2 0 0 1 1.37-2.87l5-4.21A4 4 0 0 1 12 2.37c.8 0 1.71.34 2.38.86l5 4.2c.8.72 1.33 1.8 1.37 2.87V18a4 4 0 0 1-1.08 2.67A4 4 0 0 1 17 21.75H7a4 4 0 0 1-2.67-1.08A4 4 0 0 1 3.25 18zm6.19 7.65c.41 0 .75-.34.75-.75v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.91c0-.55.01-1.1-.22-1.61a2.45 2.45 0 0 0-4.26-.3c-.38.6-.38 1.23-.38 1.91v1.92c0 .41.33.75.75.75zm2.62-3.26h-1.88q.02-.25.12-.45c.39-.72 1.48-.6 1.71.18q.04.12.05.27zM13.8 13v4.2a.75.75 0 0 0 1.5 0V13a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSmartHouse;
