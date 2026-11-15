import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHd = forwardRef<SVGSVGElement, IconProps>(function IconAiHd(
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
            d="M21.38 8.09q.12.44.12.91v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 15v-1.28m0-2.4V9A3.5 3.5 0 0 1 6 5.5h8.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 9.5v5m3.5-5v5M5.5 12H9m2.5-2.5v5h1a2.5 2.5 0 1 0 0-5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3 2.2c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M21.38 8.09q.12.44.12.91v6a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 15V9A3.5 3.5 0 0 1 6 5.5h8.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 9.5v5m3.5-5v5M5.5 12H9m2.5-2.5v5h1a2.5 2.5 0 1 0 0-5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.3 2.2c.25 1.85.95 2.55 2.8 2.8-1.85.25-2.55.95-2.8 2.8-.25-1.85-.95-2.55-2.8-2.8 1.85-.25 2.55-.95 2.8-2.8Z"
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
            d="M6 4.75h9.02L15 5c0 .75.55 1.39 1.3 1.49.76.08.92.15 1.14.37s.29.38.37 1.14a1.5 1.5 0 0 0 2.98 0c.08-.76.15-.92.37-1.14q.14-.15.35-.23c.44.68.72 1.54.74 2.37v6A4.6 4.6 0 0 1 21 18a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 18a4.6 4.6 0 0 1-1.25-3V9a4.6 4.6 0 0 1 1.24-3 4.6 4.6 0 0 1 3-1.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.75 9.5v5a.75.75 0 0 0 1.5 0v-1.75h2v1.75a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0v1.75h-2V9.5a.75.75 0 0 0-1.5 0zm6.75-.75a.75.75 0 0 0-.75.75v5c0 .41.34.75.75.75h1c.84-.03 1.75-.4 2.3-.95s.95-1.46.95-2.3-.4-1.75-.95-2.3a3.6 3.6 0 0 0-2.3-.95zm1 1.5c.54-.03.88.16 1.24.51.35.36.51.7.51 1.24s-.15.88-.51 1.24c-.36.35-.7.54-1.24.51h-.25v-3.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.7 1.8c.13 1 .35 1.58.78 2.02s1.03.65 2.02.78a.4.4 0 0 1 0 .8c-1 .13-1.58.35-2.02.78s-.65 1.03-.78 2.02a.4.4 0 0 1-.8 0c-.13-1-.35-1.58-.78-2.02s-1.03-.65-2.02-.78a.4.4 0 0 1 0-.8c1-.13 1.58-.35 2.02-.78s.65-1.03.78-2.02a.4.4 0 0 1 .8 0z"
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
            d="M6 4.75h9.02L15 5c0 .75.55 1.39 1.3 1.49.76.08.92.15 1.14.37s.29.38.37 1.14a1.5 1.5 0 0 0 2.98 0c.08-.76.15-.92.37-1.14q.14-.15.35-.23c.44.68.72 1.54.74 2.37v6A4.6 4.6 0 0 1 21 18a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 18a4.6 4.6 0 0 1-1.25-3V9a4.6 4.6 0 0 1 1.24-3 4.6 4.6 0 0 1 3-1.25zM4.75 9.5v5a.75.75 0 0 0 1.5 0v-1.75h2v1.75a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0v1.75h-2V9.5a.75.75 0 0 0-1.5 0zm6.75-.75a.75.75 0 0 0-.75.75v5c0 .41.34.75.75.75h1c.84-.03 1.75-.4 2.3-.95s.95-1.46.95-2.3-.4-1.75-.95-2.3a3.6 3.6 0 0 0-2.3-.95zm1 1.5c.54-.03.88.16 1.24.51.35.36.51.7.51 1.24s-.15.88-.51 1.24c-.36.35-.7.54-1.24.51h-.25v-3.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.7 1.8c.13 1 .35 1.58.78 2.02s1.03.65 2.02.78a.4.4 0 0 1 0 .8c-1 .13-1.58.35-2.02.78s-.65 1.03-.78 2.02a.4.4 0 0 1-.8 0c-.13-1-.35-1.58-.78-2.02s-1.03-.65-2.02-.78a.4.4 0 0 1 0-.8c1-.13 1.58-.35 2.02-.78s.65-1.03.78-2.02a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiHd;
