import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBackgroundEraser = forwardRef<SVGSVGElement, IconProps>(function IconAiBackgroundEraser(
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
            d="M3 7.5V6a3 3 0 0 1 3-3h1.5m0 18H6a3 3 0 0 1-3-3v-1.5m18 0V18c0 .67-.22 1.3-.6 1.8m-2.02 1.18L18 21h-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm-2 8c.7-2.2 2.4-3.5 4.5-3.5s3.8 1.3 4.5 3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 2c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M3 7.5V6a3 3 0 0 1 3-3h1.5M21 16.5V18a3 3 0 0 1-3 3h-1.5m-9 0H6a3 3 0 0 1-3-3v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 10a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0zm-2 8c.7-2.2 2.4-3.5 4.5-3.5s3.8 1.3 4.5 3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 2c.27 1.98 1.02 2.73 3 3-1.98.27-2.73 1.02-3 3-.27-1.98-1.02-2.73-3-3 1.98-.27 2.73-1.02 3-3Z"
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
            d="M3 8.25c.41 0 .75-.34.75-.75 0-1.1-.17-2.29.7-3.12a2.3 2.3 0 0 1 1.16-.6c.61-.1 1.27-.03 1.89-.03a.75.75 0 0 0 0-1.5c-.75 0-1.55-.07-2.29.08a3.8 3.8 0 0 0-2.88 2.88c-.16.74-.08 1.54-.08 2.29 0 .41.34.75.75.75zm18 7.5a.75.75 0 0 0-.75.75c0 1.1.18 2.29-.7 3.12a2.3 2.3 0 0 1-1.16.6c-.61.1-1.27.03-1.89.03a.75.75 0 0 0 0 1.5c.75 0 1.55.07 2.29-.08a3.8 3.8 0 0 0 2.88-2.88c.15-.74.08-1.54.08-2.29a.75.75 0 0 0-.75-.75zM8.25 21a.75.75 0 0 0-.75-.75c-1.1 0-2.29.18-3.12-.7a2.3 2.3 0 0 1-.6-1.16c-.1-.61-.03-1.27-.03-1.89a.75.75 0 0 0-1.5 0c0 .75-.07 1.55.08 2.29a3.8 3.8 0 0 0 2.88 2.88c.74.15 1.54.08 2.29.08.41 0 .75-.34.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.7 7.7a3.5 3.5 0 0 0-.95 2.3c0 .84.4 1.75.95 2.3s1.46.95 2.3.95 1.75-.4 2.3-.95.95-1.46.95-2.3-.4-1.75-.95-2.3a3.5 3.5 0 0 0-2.3-.95c-.84 0-1.75.4-2.3.95zM7.27 18.71c.4.13.82-.09.95-.48a4.5 4.5 0 0 1 1.5-2.24 3.86 3.86 0 0 1 4.93.32c.54.53.9 1.2 1.14 1.92a.75.75 0 1 0 1.42-.46 5.38 5.38 0 0 0-8.39-2.98 6 6 0 0 0-2.04 2.98c-.12.4.1.82.5.95z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.4 1.6c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
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
            d="M3 8.25c.41 0 .75-.34.75-.75 0-1.1-.17-2.29.7-3.12a2.3 2.3 0 0 1 1.16-.6c.61-.1 1.27-.03 1.89-.03a.75.75 0 0 0 0-1.5c-.75 0-1.55-.07-2.29.08a3.8 3.8 0 0 0-2.88 2.88c-.16.74-.08 1.54-.08 2.29 0 .41.34.75.75.75zm18 7.5a.75.75 0 0 0-.75.75c0 1.1.18 2.29-.7 3.12a2.3 2.3 0 0 1-1.16.6c-.61.1-1.27.03-1.89.03a.75.75 0 0 0 0 1.5c.75 0 1.55.07 2.29-.08a3.8 3.8 0 0 0 2.88-2.88c.15-.74.08-1.54.08-2.29a.75.75 0 0 0-.75-.75zM8.25 21a.75.75 0 0 0-.75-.75c-1.1 0-2.29.18-3.12-.7a2.3 2.3 0 0 1-.6-1.16c-.1-.61-.03-1.27-.03-1.89a.75.75 0 0 0-1.5 0c0 .75-.07 1.55.08 2.29a3.8 3.8 0 0 0 2.88 2.88c.74.15 1.54.08 2.29.08.41 0 .75-.34.75-.75zM9.7 7.7a3.5 3.5 0 0 0-.95 2.3c0 .84.4 1.75.95 2.3s1.46.95 2.3.95 1.75-.4 2.3-.95.95-1.46.95-2.3-.4-1.75-.95-2.3a3.5 3.5 0 0 0-2.3-.95c-.84 0-1.75.4-2.3.95zM7.27 18.71c.4.13.82-.09.95-.48a4.5 4.5 0 0 1 1.5-2.24 3.86 3.86 0 0 1 4.93.32c.54.53.9 1.2 1.14 1.92a.75.75 0 1 0 1.42-.46 5.38 5.38 0 0 0-8.39-2.98 6 6 0 0 0-2.04 2.98c-.12.4.1.82.5.95z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.4 1.6c.14 1.06.38 1.7.84 2.16.47.46 1.1.7 2.16.84a.4.4 0 0 1 0 .8c-1.06.13-1.7.38-2.16.84s-.7 1.1-.84 2.16a.4.4 0 0 1-.8 0c-.14-1.06-.38-1.7-.84-2.16-.47-.47-1.1-.7-2.16-.85a.4.4 0 0 1 0-.79c1.06-.14 1.7-.38 2.16-.84.46-.47.7-1.1.84-2.16a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBackgroundEraser;
