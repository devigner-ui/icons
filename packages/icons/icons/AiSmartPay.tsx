import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSmartPay = forwardRef<SVGSVGElement, IconProps>(function IconAiSmartPay(
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
            d="M11.33 19H5.5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4.77"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 12V9.48a1.68 1.68 0 0 1 3.36 0V12m-3.36-1.76h3.36m1.76-2.44V12M6 15h4"
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
            d="M5.5 5h13a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-13a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 12V9.48a1.68 1.68 0 0 1 3.36 0V12m-3.36-1.76h3.36m1.76-2.44V12M6 15h4"
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
            d="M5.5 4.25h13a4 4 0 0 1 2.65 1.1A4 4 0 0 1 22.25 8v8a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-13a4 4 0 0 1-2.65-1.1A4 4 0 0 1 1.75 16V8a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.75 12v-1.92c0-.68 0-1.32.39-1.91a2.45 2.45 0 0 1 4.25.3c.24.52.22 1.06.22 1.61V12a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zm3.32-2.78c-.23-.78-1.32-.9-1.7-.19q-.11.21-.12.46h1.87q0-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75V12a.75.75 0 0 1-1.5 0V7.8c0-.41.34-.75.75-.75zM5.25 15c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75z"
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
            d="M5.5 4.25h13a4 4 0 0 1 2.65 1.1A4 4 0 0 1 22.25 8v8a4 4 0 0 1-1.1 2.65 4 4 0 0 1-2.65 1.1h-13a4 4 0 0 1-2.65-1.1A4 4 0 0 1 1.75 16V8a4 4 0 0 1 1.1-2.65 4 4 0 0 1 2.65-1.1zm8 8.5c.41 0 .75-.34.75-.75v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.91c0-.55.02-1.1-.22-1.61a2.45 2.45 0 0 0-4.25-.3c-.39.6-.39 1.23-.39 1.91V12c0 .41.34.75.75.75zm2.62-3.26h-1.88q.02-.25.12-.45c.4-.72 1.48-.6 1.71.18q.04.12.05.27zm1.75-1.69V12a.75.75 0 0 0 1.5 0V7.8a.75.75 0 0 0-1.5 0zM6 15.75h4a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSmartPay;
