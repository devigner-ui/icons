import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiThinking = forwardRef<SVGSVGElement, IconProps>(function IconAiThinking(
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
            d="M17 21.5v-3.8c2.1-1.5 3.5-4 3.5-6.7A8.5 8.5 0 0 0 4.1 7.92m-.76 2.28-.74 2.1c-.2.5.2 1 .7 1h1.2v2.4c0 1.6 1.3 2.8 2.8 2.8H9v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.24 12.8v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
            d="M17 21.5v-3.8c2.1-1.5 3.5-4 3.5-6.7A8.5 8.5 0 0 0 3.8 8.9l-1.2 3.4c-.2.5.2 1 .7 1h1.2v2.4c0 1.6 1.3 2.8 2.8 2.8H9v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.24 12.8v-2.52a1.68 1.68 0 0 1 3.36 0v2.52m-3.36-1.76h3.36m1.76-2.44v4.2"
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
            d="M8.25 21.5v-2.25H7.3a4 4 0 0 1-2.49-1.01 4 4 0 0 1-1.06-2.54v-1.65H3.3c-.43-.05-.99-.3-1.22-.62-.23-.31-.3-.92-.19-1.38l1.2-3.37a9.4 9.4 0 0 1 3.18-4.96A9.4 9.4 0 0 1 12 1.75c2.5 0 4.91 1.08 6.54 2.7A9.4 9.4 0 0 1 21.25 11a9.2 9.2 0 0 1-3.5 7.07v3.43c0 .42-.34.75-.75.75H9a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.49 12.8v-1.92c0-.55-.02-1.1.22-1.61a2.45 2.45 0 0 1 4.25-.3c.38.6.39 1.23.39 1.91v1.92a.75.75 0 0 1-1.5 0v-1.01h-1.86v1a.75.75 0 0 1-1.5 0zm3.32-2.78c-.23-.78-1.32-.9-1.7-.18q-.12.2-.13.45h1.88q-.01-.15-.05-.27zm2.55-2.17c.42 0 .75.34.75.75v4.2a.75.75 0 0 1-1.5 0V8.6c0-.41.34-.75.75-.75z"
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
            d="M8.25 21.5v-2.25H7.3a4 4 0 0 1-2.49-1.01 4 4 0 0 1-1.06-2.54v-1.65H3.3c-.43-.05-.99-.3-1.22-.62-.23-.31-.3-.92-.19-1.38l1.2-3.37a9.4 9.4 0 0 1 3.18-4.96A9.4 9.4 0 0 1 12 1.75c2.5 0 4.91 1.08 6.54 2.7A9.4 9.4 0 0 1 21.25 11a9.2 9.2 0 0 1-3.5 7.07v3.43c0 .42-.34.75-.75.75H9a.75.75 0 0 1-.75-.75zm1.99-7.95c.41 0 .75-.34.75-.75v-1.01h1.86v1a.75.75 0 0 0 1.5 0v-1.91c0-.68 0-1.32-.39-1.91a2.45 2.45 0 0 0-4.25.3c-.24.52-.22 1.06-.22 1.61v1.92c0 .41.33.75.75.75zm2.62-3.26h-1.88q0-.25.12-.45c.39-.72 1.48-.6 1.71.18q.04.12.05.27zM14.6 8.6v4.2a.75.75 0 0 0 1.5 0V8.6a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiThinking;
