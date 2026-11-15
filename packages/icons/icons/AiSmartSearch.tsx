import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSmartSearch = forwardRef<SVGSVGElement, IconProps>(function IconAiSmartSearch(
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
            d="M3 7.5V6a3 3 0 0 1 3-3h1.5m9 0H18a3 3 0 0 1 3 3v1.5m0 9V18c0 .67-.22 1.3-.6 1.8m-2.02 1.18L18 21h-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm6.93 2.93L17 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M3 7.5V6a3 3 0 0 1 3-3h1.5m9 0H18a3 3 0 0 1 3 3v1.5m0 9V18a3 3 0 0 1-3 3h-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm6.93 2.93L17 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M2.25 7.5c0-.75-.07-1.55.08-2.29a3.8 3.8 0 0 1 2.88-2.88c.74-.16 1.54-.08 2.29-.08a.75.75 0 0 1 0 1.5c-.62 0-1.28-.07-1.89.03a2.2 2.2 0 0 0-1.17.6c-.87.83-.69 2.03-.69 3.12a.75.75 0 0 1-1.5 0zM16.5 2.25c.75 0 1.55-.07 2.29.08a3.8 3.8 0 0 1 2.88 2.88c.15.74.08 1.54.08 2.29a.75.75 0 0 1-1.5 0c0-.62.07-1.28-.03-1.89a2.2 2.2 0 0 0-.6-1.17c-.83-.87-2.03-.69-3.12-.69a.75.75 0 0 1 0-1.5zm5.25 14.25c0 .75.08 1.55-.08 2.29a3.8 3.8 0 0 1-2.88 2.88c-.74.15-1.54.08-2.29.08a.75.75 0 0 1 0-1.5c.62 0 1.28.07 1.89-.03a2.2 2.2 0 0 0 1.17-.6c.87-.83.69-2.03.69-3.12a.75.75 0 0 1 1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m14.85 13.79 2.68 2.68a.75.75 0 0 1-1.06 1.06l-2.68-2.68a4.75 4.75 0 1 1 1.06-1.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="M2.25 7.5c0-.75-.07-1.55.08-2.29a3.8 3.8 0 0 1 2.88-2.88c.74-.16 1.54-.08 2.29-.08a.75.75 0 0 1 0 1.5c-.62 0-1.28-.07-1.89.03a2.2 2.2 0 0 0-1.17.6c-.87.83-.69 2.03-.69 3.12a.75.75 0 0 1-1.5 0zM16.5 2.25c.75 0 1.55-.07 2.29.08a3.8 3.8 0 0 1 2.88 2.88c.15.74.08 1.54.08 2.29a.75.75 0 0 1-1.5 0c0-.62.07-1.28-.03-1.89a2.2 2.2 0 0 0-.6-1.17c-.83-.87-2.03-.69-3.12-.69a.75.75 0 0 1 0-1.5zm5.25 14.25c0 .75.08 1.55-.08 2.29a3.8 3.8 0 0 1-2.88 2.88c-.74.15-1.54.08-2.29.08a.75.75 0 0 1 0-1.5c.62 0 1.28.07 1.89-.03a2.2 2.2 0 0 0 1.17-.6c.87-.83.69-2.03.69-3.12a.75.75 0 0 1 1.5 0zm-6.9-2.71 2.68 2.68a.75.75 0 0 1-1.06 1.06l-2.68-2.68a4.75 4.75 0 1 1 1.06-1.06z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSmartSearch;
