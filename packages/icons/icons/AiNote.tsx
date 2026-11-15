import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiNote = forwardRef<SVGSVGElement, IconProps>(function IconAiNote(
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
            d="M9.22 21H8a4 4 0 0 1-4-4V8.5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4V17a4 4 0 0 1-4 4h-4.38"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 3v3m7-3v3M8 10.5h8M9.44 18v-2.52a1.68 1.68 0 0 1 3.36 0V18m-3.36-1.76h3.36m1.76-2.44V18"
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
            d="M8 4.5h8a4 4 0 0 1 4 4V17a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8.5a4 4 0 0 1 4-4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 3v3m7-3v3M8 10.5h8M9.44 18v-2.52a1.68 1.68 0 0 1 3.36 0V18m-3.36-1.76h3.36m1.76-2.44V18"
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
            d="M8 3.75h8a5 5 0 0 1 3.36 1.4 5 5 0 0 1 1.39 3.35V17a5 5 0 0 1-1.4 3.36A5 5 0 0 1 16 21.75H8a5 5 0 0 1-3.36-1.4A5 5 0 0 1 3.25 17V8.5a5 5 0 0 1 1.4-3.36A5 5 0 0 1 8 3.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.25 10.5c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75zM8.69 18v-1.92c0-.55-.02-1.1.22-1.61a2.45 2.45 0 0 1 4.25-.3c.38.6.39 1.23.39 1.91V18a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zM12 15.22c-.23-.78-1.32-.9-1.7-.19q-.12.22-.13.46h1.88q-.01-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75V18a.75.75 0 0 1-1.5 0v-4.2c0-.41.34-.75.75-.75zM8.5 2.25c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75zm7 0c.41 0 .75.34.75.75v3a.75.75 0 0 1-1.5 0V3c0-.41.34-.75.75-.75z"
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
            d="M19.36 5.14a5 5 0 0 1 1.39 3.36V17a5 5 0 0 1-1.4 3.36A5 5 0 0 1 16 21.75H8a5 5 0 0 1-3.36-1.4A5 5 0 0 1 3.25 17V8.5a5 5 0 0 1 1.4-3.36 5 5 0 0 1 3.1-1.38V3a.75.75 0 0 1 1.5 0v.75h5.5V3a.75.75 0 0 1 1.5 0v.76c1.18.1 2.35.62 3.1 1.38zM8 11.25h8a.75.75 0 0 0 0-1.5H8a.75.75 0 0 0 0 1.5zm1.44 7.5c.41 0 .75-.34.75-.75v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.91c0-.68 0-1.32-.39-1.91a2.45 2.45 0 0 0-4.25.3c-.24.52-.22 1.06-.22 1.61V18c0 .41.33.75.75.75zm2.62-3.26h-1.88q.02-.25.12-.45c.39-.72 1.48-.6 1.71.18q.04.12.05.27zm1.75-1.69V18a.75.75 0 0 0 1.5 0v-4.2a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiNote;
