import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSearch = forwardRef<SVGSVGElement, IconProps>(function IconAiSearch(
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
            d="m16 16.5 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 11.5a7 7 0 1 1-7-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.31 6.35q.37.16.99.39L19 7l-.7.26c-.91.34-1.37.5-1.7.84s-.5.79-.84 1.7l-.26.7-.26-.7c-.34-.91-.5-1.37-.84-1.7s-.79-.5-1.7-.84L12 7l.7-.26c.91-.34 1.37-.5 1.7-.84s.5-.79.84-1.7l.26-.7"
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
            d="m16 16.5 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 11.5a7 7 0 1 1-7-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m15.5 3.5.26.7c.34.91.5 1.37.84 1.7s.79.5 1.7.84L19 7l-.7.26c-.91.34-1.37.5-1.7.84s-.5.79-.84 1.7l-.26.7-.26-.7c-.34-.91-.5-1.37-.84-1.7s-.79-.5-1.7-.84L12 7l.7-.26c.91-.34 1.37-.5 1.7-.84s.5-.79.84-1.7z"
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
            d="M11.2 19.3a8.12 8.12 0 1 0 .26-16.25 8.12 8.12 0 0 0-.26 16.24"
            fill="currentColor"
          />
          <path
            d="M11.19 7.34c.18-.53.84-.53 1.02 0a6 6 0 0 0 1.22 2.23c.58.59 1.4.93 2.23 1.22.53.18.53.84 0 1.02-.83.29-1.65.63-2.23 1.22a6 6 0 0 0-1.23 2.23c-.18.53-.84.53-1.02 0a6 6 0 0 0-1.22-2.23 6 6 0 0 0-2.22-1.23c-.53-.18-.53-.84 0-1.02a6 6 0 0 0 2.23-1.22 6 6 0 0 0 1.23-2.22"
            fill="currentColor"
          />
          <path
            d="M16.51 17.43q.5-.4.92-.9l3.2 3.3a.64.64 0 1 1-.92.9z"
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
            d="M11.41 3.05a8.12 8.12 0 1 1-.26 16.24 8.12 8.12 0 0 1 .25-16.24m.75 4.29c-.18-.53-.84-.53-1.02 0a6 6 0 0 1-1.22 2.23 6 6 0 0 1-2.22 1.23c-.53.18-.53.84 0 1.02a6 6 0 0 1 2.23 1.22c.59.58.93 1.4 1.22 2.23.18.53.84.53 1.02 0a6 6 0 0 1 1.22-2.23 6 6 0 0 1 2.23-1.24c.53-.18.53-.84 0-1.02a6 6 0 0 1-2.23-1.22 6 6 0 0 1-1.23-2.22"
            fill="currentColor"
          />
          <path
            d="M20.59 19.84a.64.64 0 0 1-.93.9l-3.2-3.31q.5-.4.92-.9z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSearch;
