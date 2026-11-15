import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiElements = forwardRef<SVGSVGElement, IconProps>(function IconAiElements(
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
            d="m7 3.5 4 7H3zm6.5 13.75a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0zm-8.81 3.73A2 2 0 0 1 3 19v-3.5c0-1.1.9-2 2-2h3.5a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H7.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.25 3.25c.32 2.31 1.19 3.18 3.5 3.5-2.31.32-3.18 1.19-3.5 3.5-.32-2.31-1.19-3.18-3.5-3.5 2.31-.32 3.18-1.19 3.5-3.5Z"
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
            d="m7 3.5 4 7H3zm-2 10h3.5a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5c0-1.1.9-2 2-2zm8.5 3.75a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.25 3.25c.32 2.31 1.19 3.18 3.5 3.5-2.31.32-3.18 1.19-3.5 3.5-.32-2.31-1.19-3.18-3.5-3.5 2.31-.32 3.18-1.19 3.5-3.5Z"
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
            d="M11.65 10.12a.75.75 0 0 1-.66 1.13H3a1 1 0 0 1-.45-.14.7.7 0 0 1-.3-.53.7.7 0 0 1 .1-.46l3.98-6.98a.7.7 0 0 1 .35-.33.7.7 0 0 1 .62 0 .7.7 0 0 1 .35.33zM5 12.75h3.5c.7.03 1.49.35 1.95.8s.77 1.24.8 1.95V19c-.03.7-.35 1.49-.8 1.95s-1.24.77-1.95.8H5a3 3 0 0 1-1.94-.8A3 3 0 0 1 2.24 19v-3.5c.03-.7.35-1.49.8-1.94A3 3 0 0 1 5 12.75zm12.25 0c1.19 0 2.4.55 3.18 1.32.77.77 1.32 2 1.32 3.18s-.55 2.4-1.32 3.18c-.77.77-2 1.32-3.18 1.32s-2.4-.55-3.18-1.32-1.32-2-1.32-3.18.55-2.4 1.32-3.18 2-1.32 3.18-1.32z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.65 2.85c.16 1.22.44 1.97.99 2.52.54.54 1.29.82 2.51.98a.4.4 0 0 1 0 .8c-1.22.16-1.97.44-2.51.98-.55.55-.83 1.3-1 2.52a.4.4 0 0 1-.79 0c-.16-1.22-.44-1.97-.98-2.52-.55-.54-1.3-.82-2.52-.98a.4.4 0 0 1 0-.8c1.22-.16 1.97-.44 2.52-.98.54-.55.82-1.3.98-2.52a.4.4 0 0 1 .8 0z"
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
            d="M11.65 10.12a.75.75 0 0 1-.66 1.13H3a1 1 0 0 1-.45-.14.7.7 0 0 1-.3-.53.7.7 0 0 1 .1-.46l3.98-6.98a.7.7 0 0 1 .35-.33.7.7 0 0 1 .62 0 .7.7 0 0 1 .35.33zM5 12.75h3.5c.7.03 1.49.35 1.95.8s.77 1.24.8 1.95V19c-.03.7-.35 1.49-.8 1.95s-1.24.77-1.95.8H5a3 3 0 0 1-1.94-.8A3 3 0 0 1 2.24 19v-3.5c.03-.7.35-1.49.8-1.94A3 3 0 0 1 5 12.75zm12.25 0c1.19 0 2.4.55 3.18 1.32.77.77 1.32 2 1.32 3.18s-.55 2.4-1.32 3.18c-.77.77-2 1.32-3.18 1.32s-2.4-.55-3.18-1.32-1.32-2-1.32-3.18.55-2.4 1.32-3.18 2-1.32 3.18-1.32z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.65 2.85c.16 1.22.44 1.97.99 2.52.54.54 1.29.82 2.51.98a.4.4 0 0 1 0 .8c-1.22.16-1.97.44-2.51.98-.55.55-.83 1.3-1 2.52a.4.4 0 0 1-.79 0c-.16-1.22-.44-1.97-.98-2.52-.55-.54-1.3-.82-2.52-.98a.4.4 0 0 1 0-.8c1.22-.16 1.97-.44 2.52-.98.54-.55.82-1.3.98-2.52a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiElements;
