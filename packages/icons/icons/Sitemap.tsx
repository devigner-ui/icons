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
            d="M7 8H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.8 7h-3.6A1.2 1.2 0 0 1 16 5.8V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.8 14.5h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 5h7"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.5 16.36V18c0 1.1.9 2 2 2H16"
            fill="none"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M12.5 5v7.32"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16 12.5h-3.5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.8 22h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M7 8H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8 7h-3.6A1.2 1.2 0 0 1 16 5.8V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8 14.5h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9 5h7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M12.5 5v13c0 1.1.9 2 2 2H16" fill="none" />
            <path
              d="M12.5 5v13c0 1.1.9 2 2 2H16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 12.5H16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M20.8 22h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
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
            d="M7 8H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"
            fill="currentColor"
          />
          <path
            d="M20.8 7h-3.6A1.2 1.2 0 0 1 16 5.8V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
          <path
            d="M20.8 14.5h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 13.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.75v-6H16c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H9a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.75V18a2.75 2.75 0 0 0 2.75 2.75H16c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-4.75z"
            fill="currentColor"
          />
          <path
            d="M20.8 22h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
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
            d="M7 8H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"
            fill="currentColor"
          />
          <path
            d="M20.8 7h-3.6A1.2 1.2 0 0 1 16 5.8V4.2c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
          <path
            d="M20.8 14.5h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 13.25c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.75v-6H16c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H9a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.75V18a2.75 2.75 0 0 0 2.75 2.75H16c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25v-4.75z"
            fill="currentColor"
          />
          <path
            d="M20.8 22h-3.6a1.2 1.2 0 0 1-1.2-1.2v-1.6c0-.66.54-1.2 1.2-1.2h3.6c.66 0 1.2.54 1.2 1.2v1.6c0 .66-.54 1.2-1.2 1.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSitemap;
