import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCreativity = forwardRef<SVGSVGElement, IconProps>(function IconAiCreativity(
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
            d="M10 8.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8 5.5c.12.86.44 1.18 1.3 1.3-.86.12-1.18.44-1.3 1.3-.12-.86-.44-1.18-1.3-1.3.86-.12 1.18-.44 1.3-1.3Z"
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
            d="M10 8.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.8 5.5c.12.86.44 1.18 1.3 1.3-.86.12-1.18.44-1.3 1.3-.12-.86-.44-1.18-1.3-1.3.86-.12 1.18-.44 1.3-1.3Z"
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
            d="M10.4 7.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0zm3.8-2.6c.06.5.16.75.36.95s.44.29.94.35a.4.4 0 0 1 0 .8c-.5.06-.75.16-.95.35-.2.2-.29.45-.35.95a.4.4 0 0 1-.8 0c-.06-.5-.16-.75-.36-.95s-.44-.29-.94-.35a.4.4 0 0 1 0-.8c.5-.06.75-.16.94-.36.2-.2.3-.44.36-.94a.4.4 0 0 1 .8 0z"
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
            d="M6.25 21.5v-3.43A9.2 9.2 0 0 1 2.75 11c0-2.5 1.08-4.91 2.7-6.54A9.4 9.4 0 0 1 12 1.75c2.13 0 4.2.77 5.73 1.97a9.4 9.4 0 0 1 3.19 4.96l1.18 3.34c.12.46.05 1.1-.18 1.41-.23.32-.79.57-1.22.62h-.45v1.65a4 4 0 0 1-1.06 2.54c-.61.6-1.6.98-2.49 1.01h-.95v2.25c0 .41-.34.75-.75.75H7a.75.75 0 0 1-.75-.75zM10 7.35a.4.4 0 0 0-.4.35c-.1.86-.3 1.36-.67 1.73s-.87.56-1.73.67a.4.4 0 0 0 0 .8c.86.1 1.36.3 1.73.67s.56.87.67 1.73a.4.4 0 0 0 .8 0c.1-.86.3-1.36.67-1.73s.87-.56 1.73-.67a.4.4 0 0 0 0-.8c-.86-.1-1.36-.3-1.73-.67s-.56-.87-.67-1.73a.4.4 0 0 0-.4-.35zm3.8-2.6a.4.4 0 0 0-.4.35c-.06.5-.16.75-.36.95s-.44.29-.94.35a.4.4 0 0 0 0 .8c.5.06.75.16.95.35.2.2.29.45.35.95a.4.4 0 0 0 .8 0c.06-.5.16-.75.36-.95s.44-.29.94-.35a.4.4 0 0 0 0-.8c-.5-.06-.75-.16-.94-.36-.2-.2-.3-.44-.36-.94a.4.4 0 0 0-.4-.35z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCreativity;
