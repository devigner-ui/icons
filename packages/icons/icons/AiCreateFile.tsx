import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCreateFile = forwardRef<SVGSVGElement, IconProps>(function IconAiCreateFile(
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
            d="M9.79 21H8.5A4.5 4.5 0 0 1 4 16.5v-9A4.5 4.5 0 0 1 8.5 3h7A4.5 4.5 0 0 1 20 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-3.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 11V8.48a1.68 1.68 0 0 1 3.36 0V11M7.5 9.24h3.36m1.76-2.44V11M8 15h8m-8 3h5"
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
            d="M8.5 3h7A4.5 4.5 0 0 1 20 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 16.5v-9A4.5 4.5 0 0 1 8.5 3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 11V8.48a1.68 1.68 0 0 1 3.36 0V11M7.5 9.24h3.36m1.76-2.44V11M8 15h8m-8 3h5"
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
            d="M8.5 2.25h7c1.4.03 2.8.63 3.71 1.54.91.9 1.5 2.31 1.54 3.71v9a5.6 5.6 0 0 1-1.54 3.71c-.9.91-2.31 1.5-3.71 1.54h-7a5.6 5.6 0 0 1-3.71-1.54 5.6 5.6 0 0 1-1.54-3.71v-9c.03-1.4.63-2.8 1.54-3.71.9-.91 2.31-1.5 3.71-1.54z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.75 11V9.08c0-.68 0-1.32.39-1.91a2.45 2.45 0 0 1 4.25.3c.24.52.22 1.06.22 1.61V11a.75.75 0 0 1-1.5 0V9.99H8.25v1a.75.75 0 0 1-1.5 0zm3.32-2.78c-.23-.78-1.32-.9-1.7-.19q-.11.21-.12.46h1.87q0-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75V11a.75.75 0 0 1-1.5 0V6.8c0-.41.34-.75.75-.75zM7.25 15c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75zm0 3c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75z"
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
            d="M8.5 2.25h7c1.4.03 2.8.63 3.71 1.54.91.9 1.5 2.31 1.54 3.71v9a5.6 5.6 0 0 1-1.54 3.71c-.9.91-2.31 1.5-3.71 1.54h-7a5.6 5.6 0 0 1-3.71-1.54 5.6 5.6 0 0 1-1.54-3.71v-9c.03-1.4.63-2.8 1.54-3.71.9-.91 2.31-1.5 3.71-1.54zm-1 9.5c.41 0 .75-.34.75-.75V9.99h1.86v1a.75.75 0 0 0 1.5 0v-1.9c0-.55.02-1.1-.22-1.61a2.45 2.45 0 0 0-4.25-.3c-.39.6-.39 1.23-.39 1.91V11c0 .41.34.75.75.75zm2.62-3.26H8.25q0-.25.11-.45c.4-.72 1.48-.6 1.71.18q.04.12.05.27zm1.75-1.69V11a.75.75 0 0 0 1.5 0V6.8a.75.75 0 0 0-1.5 0zM8 15.75h8a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5zm0 3h5a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCreateFile;
