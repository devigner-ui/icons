import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiRobotic = forwardRef<SVGSVGElement, IconProps>(function IconAiRobotic(
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
            d="M9.79 19H8.5A4.5 4.5 0 0 1 4 14.5v-5A4.5 4.5 0 0 1 8.5 5h7A4.5 4.5 0 0 1 20 9.5v5a4.5 4.5 0 0 1-4.5 4.5h-3.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 10.5V12m6-1.5V12m-5 3.5h4M2 10v4m20-4v4"
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
            d="M8.5 5h7A4.5 4.5 0 0 1 20 9.5v5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 14.5v-5A4.5 4.5 0 0 1 8.5 5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 10.5V12m6-1.5V12m-5 3.5h4M2 10v4m20-4v4"
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
            d="M8.5 4.25h7c1.4.03 2.8.63 3.71 1.54.91.9 1.5 2.31 1.54 3.71v5a5.6 5.6 0 0 1-1.54 3.71c-.9.91-2.31 1.5-3.71 1.54h-7a5.6 5.6 0 0 1-3.71-1.54 5.6 5.6 0 0 1-1.54-3.71v-5c.03-1.4.63-2.8 1.54-3.71.9-.91 2.31-1.5 3.71-1.54z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9 9.75c.41 0 .75.34.75.75V12a.75.75 0 0 1-1.5 0v-1.5c0-.41.34-.75.75-.75zm6 0c.41 0 .75.34.75.75V12a.75.75 0 0 1-1.5 0v-1.5c0-.41.34-.75.75-.75zM9.25 15.5c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75zM2 9.25c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm20 0c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75z"
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
            d="M8.5 4.25h7c1.4.03 2.8.63 3.71 1.54.91.9 1.5 2.31 1.54 3.71v5a5.6 5.6 0 0 1-1.54 3.71c-.9.91-2.31 1.5-3.71 1.54h-7a5.6 5.6 0 0 1-3.71-1.54 5.6 5.6 0 0 1-1.54-3.71v-5c.03-1.4.63-2.8 1.54-3.71.9-.91 2.31-1.5 3.71-1.54zm-6.5 5c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zm20 0c.41 0 .75.34.75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75zM8.25 10.5V12a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zm6 0V12a.75.75 0 0 0 1.5 0v-1.5a.75.75 0 0 0-1.5 0zM10 16.25h4a.75.75 0 0 0 0-1.5h-4a.75.75 0 0 0 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiRobotic;
