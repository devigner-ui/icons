import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceFile = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceFile(
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
            d="M4.98 19.74C5.6 20.99 6.86 21.5 9 21.5h6c3.3 0 4.5-1.2 4.5-4.5V8L14 2.5H9C5.7 2.5 4.5 3.7 4.5 7v10.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2.5V6c0 1.1.9 2 2 2h3.5m-6.95 5.56c-.65-.86-2.94-.86-3.26.39-.26.86 3.26 1.05 3.26 2.3-.32 1.25-2.6 1.25-3.26.39m5.42-3.94v4.8"
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
            d="M14 2.5V6c0 1.1.9 2 2 2h3.5m-6.95 5.56c-.65-.86-2.94-.86-3.26.39-.26.86 3.26 1.05 3.26 2.3-.32 1.25-2.6 1.25-3.26.39m5.42-3.94v4.8"
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
            d="M16.93 7.25c-.62 0-1.33.12-1.81-.37-.49-.48-.37-1.19-.37-1.81V2.19l5.06 5.06zm-4.98 6.77c-.3-.36-1-.36-1.42-.26q-.16.04-.31.13.21.12.44.2c1.02.39 2.36.76 2.61 1.94a1 1 0 0 1-.03.52c-.67 1.77-3.4 1.9-4.55.54a.75.75 0 0 1 1.2-.9c.31.36 1.04.36 1.46.24q.22-.05.38-.2c-.08-.06-.2-.16-.26-.19a6 6 0 0 0-.78-.33c-.69-.26-1.83-.51-2.1-1.3-.27-.82.4-1.61 1.11-1.94 1.11-.5 2.64-.3 3.45.64a.75.75 0 0 1-1.2.9zm2.76-2.07c.42 0 .75.34.75.75v4.8a.75.75 0 0 1-1.5 0v-4.8c0-.41.34-.75.75-.75z"
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
            d="M20.25 17c-.01 1.75-.39 3.17-1.23 4.02-.85.84-2.27 1.22-4.02 1.23H9c-1.75-.01-3.17-.39-4.02-1.23-.84-.85-1.22-2.27-1.23-4.02V7c.01-1.75.39-3.17 1.23-4.02.85-.84 2.27-1.22 4.02-1.23h4.25v3.32c0 1.06 0 2.06.8 2.87.82.81 1.82.81 2.88.81h3.32zm-3.32-9.75c-.62 0-1.33.12-1.81-.37-.49-.48-.37-1.19-.37-1.81V2.19l5.06 5.06zM13 14.16c.33-.25.4-.72.15-1.05-.81-.95-2.34-1.15-3.45-.64-.7.32-1.39 1.11-1.1 1.94.26.79 1.4 1.04 2.09 1.3q.4.14.78.33l.26.18q-.17.15-.38.2c-.42.13-1.15.13-1.46-.24a.75.75 0 0 0-1.2.9c1.15 1.36 3.88 1.24 4.55-.53a.7.7 0 0 0 .03-.52c-.25-1.19-1.59-1.55-2.62-1.94q-.23-.09-.44-.2.15-.09.32-.13c.42-.1 1.11-.1 1.42.25.25.33.72.4 1.05.15zm.96-1.46v4.8a.75.75 0 0 0 1.5 0v-4.8a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceFile;
