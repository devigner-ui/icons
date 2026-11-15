import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLockLetters = forwardRef<SVGSVGElement, IconProps>(function IconAiLockLetters(
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
            d="M10.4 21H7.5A3.5 3.5 0 0 1 4 17.5v-4A3.5 3.5 0 0 1 7.5 10h9a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5h-3.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10V7.5a4.5 4.5 0 0 1 9 0V10m-7.06 7.8v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
            d="M7.5 10h9a3.5 3.5 0 0 1 3.5 3.5v4a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 17.5v-4A3.5 3.5 0 0 1 7.5 10Zm0 0V7.5a4.5 4.5 0 0 1 9 0V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.44 17.8v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
            d="M7.5 9.25h9a4.6 4.6 0 0 1 3 1.25 4.6 4.6 0 0 1 1.25 3v4a4.6 4.6 0 0 1-1.25 3 4.6 4.6 0 0 1-3 1.25h-9a4.6 4.6 0 0 1-3-1.25 4.6 4.6 0 0 1-1.25-3v-4a4.6 4.6 0 0 1 1.25-3 4.6 4.6 0 0 1 3-1.25zm-.75.75c0-1.66-.2-3.41.6-4.93a5.3 5.3 0 0 1 8.86-.7c.5.66.84 1.46.97 2.28.18 1.09.07 2.25.07 3.35a.75.75 0 0 1-1.5 0c0-1.56.27-3.31-.68-4.66q-.41-.58-1-.97a3.8 3.8 0 0 0-5.44 1.48 5 5 0 0 0-.38 2.36V10a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
          <path
            d="M8.69 17.8v-1.92c0-.68 0-1.32.38-1.91a2.45 2.45 0 0 1 4.26.3c.24.52.22 1.06.22 1.61v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zM12 15.02c-.23-.78-1.32-.9-1.7-.18q-.12.2-.13.45h1.88q-.01-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0v-4.2c0-.41.34-.75.75-.75z"
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
            d="M19.5 10.5a4.6 4.6 0 0 1 1.25 3v4a4.6 4.6 0 0 1-1.25 3 4.6 4.6 0 0 1-3 1.25h-9a4.6 4.6 0 0 1-3-1.25 4.6 4.6 0 0 1-1.25-3v-4a4.6 4.6 0 0 1 1.25-3 4.5 4.5 0 0 1 2.24-1.16c-.02-1.46-.08-2.95.6-4.27a5.3 5.3 0 0 1 8.87-.7c.5.66.84 1.46.97 2.28.14.87.1 1.8.08 2.69.86.17 1.68.6 2.25 1.16zm-4.43-5.16q-.41-.58-1-.97a3.8 3.8 0 0 0-5.44 1.48 5 5 0 0 0-.38 2.36v1.04h7.51c.04-1.35.1-2.77-.7-3.91zm-5.63 13.2c.41 0 .75-.33.75-.74v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.91c0-.55.01-1.1-.22-1.61a2.45 2.45 0 0 0-4.26-.3c-.38.6-.38 1.23-.38 1.91v1.92c0 .41.33.75.75.75zm2.62-3.25h-1.88q.02-.25.12-.45c.39-.72 1.48-.6 1.71.18q.04.12.05.27zm1.75-1.69v4.2a.75.75 0 0 0 1.5 0v-4.2a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiLockLetters;
