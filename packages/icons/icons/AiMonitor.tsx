import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMonitor = forwardRef<SVGSVGElement, IconProps>(function IconAiMonitor(
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
            d="M11.33 16.5H5.5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.77"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 16.5v4m-4 0h8m-6.56-8.3V9.68a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36M14.56 8v4.2"
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
            d="M5.5 3.5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 16.5v4m-4 0h8m-6.56-8.3V9.68a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36M14.56 8v4.2"
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
            d="M5.5 2.75h13a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v7a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-13a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-7a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.69 12.2v-1.92c0-.68 0-1.32.38-1.91a2.45 2.45 0 0 1 4.26.3c.24.52.22 1.06.22 1.61v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zM12 9.42c-.23-.78-1.32-.9-1.7-.19q-.12.21-.13.46h1.88q-.01-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75zm-3.3 10h1.5v2.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25z"
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
            d="M5.5 2.75h13a4 4 0 0 1 2.65 1.1 4 4 0 0 1 1.1 2.65v7a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-5.75v2.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-2.5H5.5a4 4 0 0 1-2.65-1.1 4 4 0 0 1-1.1-2.65v-7a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1zm3.94 10.2c.41 0 .75-.34.75-.75v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.91c0-.55.01-1.1-.22-1.61a2.45 2.45 0 0 0-4.26-.3c-.38.6-.38 1.23-.38 1.91v1.92c0 .41.33.75.75.75zm2.62-3.26h-1.88q.02-.25.12-.45c.39-.72 1.48-.6 1.71.18q.04.12.05.27zM13.8 8v4.2a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMonitor;
