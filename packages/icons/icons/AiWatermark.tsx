import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWatermark = forwardRef<SVGSVGElement, IconProps>(function IconAiWatermark(
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
            d="M8 13.5V12c0-1-.5-1.9-1.2-2.6a3.8 3.8 0 0 1 3.7-6.2q.75-.16 1.48-.04m2.08 1.1a3.8 3.8 0 0 1 .14 5.14c-.7.7-1.2 1.6-1.2 2.6v1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 13.5h12c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-12A1.5 1.5 0 0 1 3 16v-1c0-.83.67-1.5 1.5-1.5zm0 7.25h12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.5c.23 1.65.85 2.28 2.5 2.5-1.65.22-2.27.85-2.5 2.5-.23-1.65-.85-2.28-2.5-2.5 1.65-.22 2.27-.85 2.5-2.5Z"
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
            d="M8 13.5V12c0-1-.5-1.9-1.2-2.6a3.8 3.8 0 0 1 3.7-6.2 3.8 3.8 0 0 1 3.7 6.2c-.7.7-1.2 1.6-1.2 2.6v1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 13.5h12c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-12A1.5 1.5 0 0 1 3 16v-1c0-.83.67-1.5 1.5-1.5zm0 7.25h12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.5c.23 1.65.85 2.28 2.5 2.5-1.65.22-2.27.85-2.5 2.5-.23-1.65-.85-2.28-2.5-2.5 1.65-.22 2.27-.85 2.5-2.5Z"
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
            d="M7.25 13.5V12c.05-.82-.38-1.5-1.02-2.1a5 5 0 0 1-1.1-2.59c-.07-.89.15-1.92.63-2.73.49-.81 1.3-1.5 2.11-1.85a5 5 0 0 1 2.63-.3 5 5 0 0 1 2.63.3 5 5 0 0 1 2.1 1.85c.5.8.71 1.84.63 2.73s-.53 1.9-1.13 2.62c-.64.62-1.03 1.25-.98 2.07v1.5c0 .42-.34.75-.75.75H8a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.5 12.75h12c.57.03 1.23.3 1.6.66.36.37.62 1.02.65 1.59v1c-.03.57-.3 1.23-.66 1.6-.36.36-1.02.62-1.59.65h-12a2.6 2.6 0 0 1-1.6-.66A2.6 2.6 0 0 1 2.26 16v-1c.03-.57.3-1.23.66-1.6a2.6 2.6 0 0 1 1.59-.65zm-.75 8c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 2.1c.11.9.31 1.42.7 1.8s.9.59 1.8.7a.4.4 0 0 1 0 .8c-.9.11-1.42.31-1.8.7s-.59.9-.7 1.8a.4.4 0 0 1-.8 0c-.11-.9-.31-1.42-.7-1.8s-.9-.59-1.8-.7a.4.4 0 0 1 0-.8c.9-.11 1.42-.31 1.8-.7s.59-.9.7-1.8a.4.4 0 0 1 .8 0z"
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
            d="M7.25 12c.05-.82-.38-1.5-1.02-2.1a5 5 0 0 1-1.1-2.59c-.07-.89.15-1.92.63-2.73.49-.81 1.3-1.5 2.11-1.85a5 5 0 0 1 2.63-.3 5 5 0 0 1 2.63.3 5 5 0 0 1 2.1 1.85c.5.8.71 1.84.63 2.73s-.53 1.9-1.13 2.62c-.64.62-1.03 1.25-.98 2.07v.75h2.75c.57.03 1.23.3 1.6.66.36.37.62 1.02.65 1.6v1c-.03.56-.3 1.22-.66 1.58s-1.02.63-1.59.66h-12a2.6 2.6 0 0 1-1.59-.66A2.6 2.6 0 0 1 2.25 16v-1c.03-.57.3-1.22.66-1.59a2.6 2.6 0 0 1 1.6-.66h2.74zm-3.5 8.75c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 2.1c.11.9.31 1.42.7 1.8s.9.59 1.8.7a.4.4 0 0 1 0 .8c-.9.11-1.42.31-1.8.7s-.59.9-.7 1.8a.4.4 0 0 1-.8 0c-.11-.9-.31-1.42-.7-1.8s-.9-.59-1.8-.7a.4.4 0 0 1 0-.8c.9-.11 1.42-.31 1.8-.7s.59-.9.7-1.8a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiWatermark;
