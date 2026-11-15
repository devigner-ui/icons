import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCreateDocument = forwardRef<SVGSVGElement, IconProps>(function IconAiCreateDocument(
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
            d="M13.7 21.5H15c3.3 0 4.5-1.2 4.5-4.5V8L14 2.5H9C5.7 2.5 4.5 3.7 4.5 7v10c0 3.3 1.2 4.5 4.5 4.5h2.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2.5V6c0 1.1.9 2 2 2h3.5M9.32 18v-2.64a1.76 1.76 0 0 1 3.52 0V18m-3.52-1.85h3.52m1.84-2.55V18"
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
            d="M14 2.5H9C5.7 2.5 4.5 3.7 4.5 7v10c0 3.3 1.2 4.5 4.5 4.5h6c3.3 0 4.5-1.2 4.5-4.5V8Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 2.5V6c0 1.1.9 2 2 2h3.5M9.32 18v-2.64a1.76 1.76 0 0 1 3.52 0V18m-3.52-1.85h3.52m1.84-2.55V18"
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
            d="M20.25 17c-.01 1.75-.39 3.17-1.23 4.02-.85.84-2.27 1.22-4.02 1.23H9c-1.75-.01-3.17-.39-4.02-1.23-.84-.85-1.22-2.27-1.23-4.02V7c.01-1.75.39-3.17 1.23-4.02.85-.84 2.27-1.22 4.02-1.23h5q.3 0 .53.22l.22.22v2.88c0 .62-.12 1.33.37 1.81.48.49 1.19.37 1.81.37h2.88l.22.22q.2.22.22.53z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.93 7.25c-.62 0-1.33.12-1.81-.37-.49-.48-.37-1.19-.37-1.81V2.19l5.06 5.06zM8.57 18v-2.02c0-.66 0-1.29.33-1.88a2.53 2.53 0 0 1 4.43.15c.27.55.26 1.13.26 1.73V18a.75.75 0 0 1-1.5 0v-1.1h-2.02V18a.75.75 0 0 1-1.5 0m3.48-2.9c-.23-.88-1.48-1-1.88-.18q-.1.22-.11.48h2.04q0-.15-.05-.3m2.63-2.25c.42 0 .75.34.75.75V18a.75.75 0 0 1-1.5 0v-4.4c0-.41.34-.75.75-.75"
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
            d="M20.25 17c-.01 1.75-.39 3.17-1.23 4.02-.85.84-2.27 1.22-4.02 1.23H9c-1.75-.01-3.17-.39-4.02-1.23-.84-.85-1.22-2.27-1.23-4.02V7c.01-1.75.39-3.17 1.23-4.02.85-.84 2.27-1.22 4.02-1.23h4.25v3.32c0 1.06 0 2.06.8 2.87.82.81 1.82.81 2.88.81h3.32zm-3.32-9.75c-.62 0-1.33.12-1.81-.37-.49-.48-.37-1.19-.37-1.81V2.19l5.06 5.06zm-7.61 11.5c.41 0 .75-.34.75-.75v-1.1h2.02V18a.75.75 0 0 0 1.5 0v-2.02c0-.6.01-1.18-.26-1.73a2.53 2.53 0 0 0-4.43-.15c-.34.6-.33 1.22-.33 1.88V18c0 .41.33.75.75.75zm2.78-3.35h-2.04q0-.25.1-.49c.41-.82 1.66-.7 1.9.2zm1.83-1.8V18a.75.75 0 0 0 1.5 0v-4.4a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCreateDocument;
