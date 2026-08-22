import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSitemap = forwardRef<SVGSVGElement, IconProps>(function IconSitemap(
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
            d="M7.67 8h-3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.47 7h-3.6a1.2 1.2 0 0 1-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.47 14.5h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.67 5h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M13.17 5v13c0 1.1.9 2 2 2h1.5" fill="none" />
            <path
              d="M13.17 5v13c0 1.1.9 2 2 2h1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.17 12.5h3.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M21.47 22h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
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
            d="M7.67 8h-3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"
            fill="currentColor"
          />
          <path
            d="M21.47 7h-3.6a1.2 1.2 0 0 1-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
          <path
            d="M21.47 14.5h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 13.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.75v-6h2.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-7a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.75V18a2.75 2.75 0 0 0 2.75 2.75h1.5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-4.75z"
            fill="currentColor"
          />
          <path
            d="M21.47 22h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
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
            d="M7.67 8h-3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"
            fill="currentColor"
          />
          <path
            d="M21.47 7h-3.6a1.2 1.2 0 0 1-1.2-1.2V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
          <path
            d="M21.47 14.5h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.67 13.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.75v-6h2.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-7a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.75V18a2.75 2.75 0 0 0 2.75 2.75h1.5c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-4.75z"
            fill="currentColor"
          />
          <path
            d="M21.47 22h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSitemap;
