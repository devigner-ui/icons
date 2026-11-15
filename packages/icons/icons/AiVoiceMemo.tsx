import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVoiceMemo = forwardRef<SVGSVGElement, IconProps>(function IconAiVoiceMemo(
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
            d="M3 7.5V6a3 3 0 0 1 3-3h1.5m9 0H18a3 3 0 0 1 3 3v1.5M7.5 21H6c-.67 0-1.3-.22-1.8-.6m-1.18-2.02L3 18v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10.5v3m2.25-5v7M12 7v10m2.25-8.5v7m2.25-5v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M3 7.5V6a3 3 0 0 1 3-3h1.5m9 0H18a3 3 0 0 1 3 3v1.5M7.5 21H6a3 3 0 0 1-3-3v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10.5v3m2.25-5v7M12 7v10m2.25-8.5v7m2.25-5v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M3 8.25c.41 0 .75-.34.75-.75 0-1.1-.17-2.29.7-3.12a2.3 2.3 0 0 1 1.16-.6c.61-.1 1.27-.03 1.89-.03a.75.75 0 0 0 0-1.5c-.75 0-1.55-.07-2.29.08a3.8 3.8 0 0 0-2.88 2.88c-.16.74-.08 1.54-.08 2.29 0 .41.34.75.75.75zM15.75 3c0 .41.34.75.75.75 1.1 0 2.29-.17 3.12.7a2.3 2.3 0 0 1 .6 1.16c.1.61.03 1.27.03 1.89a.75.75 0 0 0 1.5 0c0-.75.07-1.55-.08-2.29a3.8 3.8 0 0 0-2.88-2.88c-.74-.16-1.54-.08-2.29-.08a.75.75 0 0 0-.75.75zm-7.5 18a.75.75 0 0 0-.75-.75c-1.1 0-2.29.18-3.12-.7a2.3 2.3 0 0 1-.6-1.16c-.1-.61-.03-1.27-.03-1.89a.75.75 0 0 0-1.5 0c0 .75-.07 1.55.08 2.29a3.8 3.8 0 0 0 2.88 2.88c.74.15 1.54.08 2.29.08.41 0 .75-.34.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.75 10.5v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zM9 8.5v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0zM11.25 7v10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0zm2.25 1.5v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0zm2.25 2v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="M3 8.25c.41 0 .75-.34.75-.75 0-1.1-.17-2.29.7-3.12a2.3 2.3 0 0 1 1.16-.6c.61-.1 1.27-.03 1.89-.03a.75.75 0 0 0 0-1.5c-.75 0-1.55-.07-2.29.08a3.8 3.8 0 0 0-2.88 2.88c-.16.74-.08 1.54-.08 2.29 0 .41.34.75.75.75zM15.75 3c0 .41.34.75.75.75 1.1 0 2.29-.17 3.12.7a2.3 2.3 0 0 1 .6 1.16c.1.61.03 1.27.03 1.89a.75.75 0 0 0 1.5 0c0-.75.07-1.55-.08-2.29a3.8 3.8 0 0 0-2.88-2.88c-.74-.16-1.54-.08-2.29-.08a.75.75 0 0 0-.75.75zm-7.5 18a.75.75 0 0 0-.75-.75c-1.1 0-2.29.18-3.12-.7a2.3 2.3 0 0 1-.6-1.16c-.1-.61-.03-1.27-.03-1.89a.75.75 0 0 0-1.5 0c0 .75-.07 1.55.08 2.29a3.8 3.8 0 0 0 2.88 2.88c.74.15 1.54.08 2.29.08.41 0 .75-.34.75-.75zm-1.5-10.5v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zM9 8.5v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0zM11.25 7v10a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0zm2.25 1.5v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0zm2.25 2v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiVoiceMemo;
