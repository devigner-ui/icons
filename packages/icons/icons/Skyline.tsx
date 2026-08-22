import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSkyline = forwardRef<SVGSVGElement, IconProps>(function IconSkyline(
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
      {!fill ? (
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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 22V6c0-1.89 0-2.83-.59-3.41C19.83 2 18.9 2 17 2h-2c-1.89 0-2.83 0-3.41.59-.48.47-.57 1.17-.59 2.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 22V9c0-1.89 0-2.83-.59-3.41C13.83 5 12.9 5 11 5H7c-1.89 0-2.83 0-3.41.59C3 6.17 3 7.1 3 9v13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 8h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 11h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 14h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 5h4c1.89 0 2.83 0 3.41.59C15 6.17 15 7.1 15 9v12.25h7a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.89 0-2.83.59-3.41C4.17 5 5.1 5 7 5M5.25 8c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25c.41 0 .75.34.75.75v2.25h-1.5V19c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 2h2c1.89 0 2.83 0 3.41.59C21 3.17 21 4.1 21 6v15.25h-6V9c0-1.89 0-2.83-.59-3.41C13.84 5 12.93 5 11.13 5V3.5q.11-.58.46-.91C12.17 2 13.1 2 15 2"
            fill="currentColor"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 2h2c1.89 0 2.83 0 3.41.59C21 3.17 21 4.1 21 6v15.25h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h1V9c0-1.89 0-2.83.59-3.41C4.17 5 5.1 5 7 5h4c1.89 0 2.83 0 3.41.59C15 6.17 15 7.1 15 9v12.25h1.5V8.91c0-.87 0-1.66-.09-2.3a3.5 3.5 0 0 0-.94-2.08 3.5 3.5 0 0 0-2.08-.94c-.63-.09-1.41-.09-2.26-.09q.11-.58.46-.91C12.17 2 13.1 2 15 2M5.25 8c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 8m0 3c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M9 18.25c.41 0 .75.34.75.75v2.25h-1.5V19c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSkyline;
