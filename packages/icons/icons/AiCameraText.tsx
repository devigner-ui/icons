import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCameraText = forwardRef<SVGSVGElement, IconProps>(function IconAiCameraText(
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
            d="M14.28 20H6c-1.7 0-3-1.3-3-3v-7c0-1.7 1.3-3 3-3h1.3l1.4-2.1c.3-.6.9-.9 1.5-.9h3.6c.6 0 1.2.3 1.5.9L16.7 7H18c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3h-1.32"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.44 15.5v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
            d="M3 10c0-1.7 1.3-3 3-3h1.3l1.4-2.1c.3-.6.9-.9 1.5-.9h3.6c.6 0 1.2.3 1.5.9L16.7 7H18c1.7 0 3 1.3 3 3v7c0 1.7-1.3 3-3 3H6c-1.7 0-3-1.3-3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.44 15.5v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
            d="M2.25 10a4 4 0 0 1 1.08-2.67A4 4 0 0 1 6 6.25h.9l1.18-1.77-.05.08a2.9 2.9 0 0 1 2.17-1.31h3.6a3 3 0 0 1 2.12 1.23l1.18 1.77h.9c1 .03 2.03.45 2.67 1.08A4 4 0 0 1 21.75 10v7a4 4 0 0 1-1.08 2.67A4 4 0 0 1 18 20.75H6a4 4 0 0 1-2.67-1.08A4 4 0 0 1 2.25 17z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.69 15.5v-1.92c0-.68 0-1.32.38-1.91a2.45 2.45 0 0 1 4.26.3c.24.52.22 1.06.22 1.61v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zM12 12.72c-.23-.78-1.32-.9-1.7-.19q-.12.22-.13.46h1.88q-.01-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0v-4.2c0-.41.34-.75.75-.75z"
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
            d="M2.25 10a4 4 0 0 1 1.08-2.67A4 4 0 0 1 6 6.25h.9l1.18-1.77-.05.08a2.9 2.9 0 0 1 2.17-1.31h3.6a3 3 0 0 1 2.12 1.23l1.18 1.77h.9c1 .03 2.03.45 2.67 1.08A4 4 0 0 1 21.75 10v7a4 4 0 0 1-1.08 2.67A4 4 0 0 1 18 20.75H6a4 4 0 0 1-2.67-1.08A4 4 0 0 1 2.25 17zm7.19 6.25c.41 0 .75-.34.75-.75v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.91c0-.55.01-1.1-.22-1.61a2.45 2.45 0 0 0-4.26-.3c-.38.6-.38 1.23-.38 1.91v1.92c0 .41.33.75.75.75zm2.62-3.26h-1.88q.02-.25.12-.45c.39-.72 1.48-.6 1.71.18q.04.12.05.27zm1.75-1.69v4.2a.75.75 0 0 0 1.5 0v-4.2a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCameraText;
