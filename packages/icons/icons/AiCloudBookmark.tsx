import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCloudBookmark = forwardRef<SVGSVGElement, IconProps>(function IconAiCloudBookmark(
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
            d="M15.6 20H17a4.51 4.51 0 0 0 .6-9 6 6 0 0 0-11.7 1.4A3.84 3.84 0 1 0 7 20h6.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11.5h4v6l-2-1.4-2 1.4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M7 20h10a4.51 4.51 0 0 0 .6-9 6 6 0 0 0-11.7 1.4A3.84 3.84 0 1 0 7 20z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11.5h4v6l-2-1.4-2 1.4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M1.9 16.86c-.17-1.2.2-2.51.87-3.4a4.5 4.5 0 0 1 2.46-1.67A5.6 5.6 0 0 1 7 8.17a7 7 0 0 1 4.08-2.05 6.7 6.7 0 0 1 7.06 4.2 4.4 4.4 0 0 1 3.12 1.72 5.5 5.5 0 0 1 1.29 3.81 5.4 5.4 0 0 1-1.79 3.6 5.6 5.6 0 0 1-3.77 1.3H7.04a5 5 0 0 1-3.34-.87 4.8 4.8 0 0 1-1.8-3.02z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10 10.75a.75.75 0 0 0-.75.75v6a.7.7 0 0 0 .17.47.8.8 0 0 0 .8.25l.22-.11 1.56-1.1 1.56 1.1a.7.7 0 0 0 .49.14.75.75 0 0 0 .7-.76V11.5a.75.75 0 0 0-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            d="M1.9 16.86c-.17-1.2.2-2.51.87-3.4a4.5 4.5 0 0 1 2.46-1.67A5.6 5.6 0 0 1 7 8.17a7 7 0 0 1 4.08-2.05 6.7 6.7 0 0 1 7.06 4.2 4.4 4.4 0 0 1 3.12 1.72 5.5 5.5 0 0 1 1.29 3.81 5.4 5.4 0 0 1-1.79 3.6 5.6 5.6 0 0 1-3.77 1.3H7.04a5 5 0 0 1-3.34-.87 4.8 4.8 0 0 1-1.8-3.02zm8.1-6.11a.75.75 0 0 0-.75.75v6a.7.7 0 0 0 .17.47.8.8 0 0 0 .8.25l.22-.11 1.56-1.1 1.56 1.1a.7.7 0 0 0 .49.14.75.75 0 0 0 .7-.76V11.5a.75.75 0 0 0-.75-.75z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCloudBookmark;
