import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSuperIntelligenceHead = forwardRef<SVGSVGElement, IconProps>(function IconSuperIntelligenceHead(
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
            d="M7 21.5v-3.8c-2.1-1.5-3.5-4-3.5-6.7a8.5 8.5 0 0 1 16.4-3.08m.76 2.28.74 2.1c.2.5-.2 1-.7 1h-1.2v2.4c0 1.6-1.3 2.8-2.8 2.8H15v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9 8.94C11.2 8 8.72 8 8.36 9.35c-.28.94 3.54 1.15 3.54 2.5-.36 1.35-2.83 1.35-3.54.41M14.24 8v5.2"
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
            d="M7 21.5v-3.8c-2.1-1.5-3.5-4-3.5-6.7a8.5 8.5 0 0 1 16.7-2.1l1.2 3.4c.2.5-.2 1-.7 1h-1.2v2.4c0 1.6-1.3 2.8-2.8 2.8H15v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.9 8.94C11.2 8 8.72 8 8.36 9.35c-.28.94 3.54 1.15 3.54 2.5-.36 1.35-2.83 1.35-3.54.41M14.24 8v5.2"
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
            d="M6.25 21.5v-3.43A9.2 9.2 0 0 1 2.75 11c0-2.5 1.08-4.91 2.7-6.54A9.4 9.4 0 0 1 12 1.75c2.13 0 4.2.77 5.73 1.97a9.4 9.4 0 0 1 3.19 4.96l1.18 3.34c.12.46.05 1.1-.18 1.41-.23.32-.79.57-1.22.62h-.45v1.65a4 4 0 0 1-1.06 2.54c-.61.6-1.6.98-2.49 1.01h-.95v2.25c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.3 9.39c-.35-.42-1.15-.42-1.62-.3q-.25.06-.44.22 0 0 0 0 .22.13.48.22c1.1.42 2.65.8 2.9 2.12a1 1 0 0 1-.03.5c-.7 1.87-3.62 2-4.83.57a.75.75 0 0 1 1.2-.9c.35.4 1.15.41 1.63.28a1 1 0 0 0 .5-.3l-.01-.02-.25-.17a6 6 0 0 0-.86-.39c-.56-.2-1.15-.38-1.66-.69a1.4 1.4 0 0 1-.64-.7c-.3-.86.44-1.7 1.17-2.02 1.17-.54 2.8-.34 3.66.67a.75.75 0 0 1-1.2.9zm2.94-2.14c.41 0 .75.34.75.75v5.2a.75.75 0 0 1-1.5 0V8c0-.41.33-.75.75-.75z"
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
            d="M6.25 21.5v-3.43A9.2 9.2 0 0 1 2.75 11c0-2.5 1.08-4.91 2.7-6.54A9.4 9.4 0 0 1 12 1.75c2.13 0 4.2.77 5.73 1.97a9.4 9.4 0 0 1 3.19 4.96l1.18 3.34c.12.46.05 1.1-.18 1.41-.23.32-.79.57-1.22.62h-.45v1.65a4 4 0 0 1-1.06 2.54c-.61.6-1.6.98-2.49 1.01h-.95v2.25c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75zm6.1-11.97c.33-.25.4-.72.14-1.05-.85-1-2.48-1.2-3.65-.67-.74.33-1.47 1.16-1.17 2.02.1.3.37.54.64.7.5.31 1.1.48 1.66.7q.44.15.86.37.13.08.25.18l.02.03a1 1 0 0 1-.5.3c-.49.12-1.29.12-1.64-.3a.75.75 0 0 0-1.2.9c1.21 1.44 4.14 1.3 4.83-.57a1 1 0 0 0 .03-.49c-.25-1.32-1.8-1.7-2.9-2.12l-.48-.22q0 0 0 0 .19-.15.44-.21c.47-.13 1.27-.13 1.62.29.25.33.72.4 1.05.14zM13.49 8v5.2a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconSuperIntelligenceHead;
