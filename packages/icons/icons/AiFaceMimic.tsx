import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFaceMimic = forwardRef<SVGSVGElement, IconProps>(function IconAiFaceMimic(
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
            d="M2.5 7V5.5a3 3 0 0 1 3-3H7m10 0h1.5a3 3 0 0 1 3 3V7M7 21.5H5.5a3 3 0 0 1-3-3V17m19 0v1.5c0 .67-.22 1.3-.6 1.8m-2.02 1.18-.38.02H17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9.5V11m-.5 4c1.9 1.7 5.1 1.7 7 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 8.35c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M2.5 7V5.5a3 3 0 0 1 3-3H7m10 0h1.5a3 3 0 0 1 3 3V7m0 10v1.5a3 3 0 0 1-3 3H17m-10 0H5.5a3 3 0 0 1-3-3V17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 9.5V11m-.5 4c1.9 1.7 5.1 1.7 7 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 8.35c.17 1.25.65 1.73 1.9 1.9-1.25.17-1.73.65-1.9 1.9-.17-1.25-.65-1.73-1.9-1.9 1.25-.17 1.73-.65 1.9-1.9Z"
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
            d="M1.75 7c0-.75-.07-1.55.08-2.29a3.8 3.8 0 0 1 2.88-2.88c.74-.16 1.54-.08 2.29-.08a.75.75 0 0 1 0 1.5c-.62 0-1.28-.07-1.89.03a2.2 2.2 0 0 0-1.17.6C3.07 4.7 3.25 5.9 3.25 7a.75.75 0 0 1-1.5 0zM17 1.75c.75 0 1.55-.07 2.29.08a3.8 3.8 0 0 1 2.88 2.88c.15.74.08 1.54.08 2.29a.75.75 0 0 1-1.5 0c0-.62.07-1.28-.03-1.89a2.2 2.2 0 0 0-.6-1.17c-.83-.87-2.03-.69-3.12-.69a.75.75 0 0 1 0-1.5zM22.25 17c0 .75.08 1.55-.08 2.29a3.8 3.8 0 0 1-2.88 2.88c-.74.15-1.54.08-2.29.08a.75.75 0 0 1 0-1.5c.62 0 1.28.07 1.89-.03a2.2 2.2 0 0 0 1.17-.6c.87-.83.69-2.03.69-3.12a.75.75 0 0 1 1.5 0zM7 22.25c-.75 0-1.55.08-2.29-.08a3.8 3.8 0 0 1-2.88-2.88c-.16-.74-.08-1.54-.08-2.29a.75.75 0 0 1 1.5 0c0 .62-.07 1.28.03 1.89a2.2 2.2 0 0 0 .6 1.17c.83.87 2.02.69 3.12.69a.75.75 0 0 1 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9 8.75c.41 0 .75.34.75.75V11a.75.75 0 0 1-1.5 0V9.5c0-.41.34-.75.75-.75zm0 5.7a4.7 4.7 0 0 0 6 0 .75.75 0 1 1 1 1.11 6.2 6.2 0 0 1-8 0 .75.75 0 1 1 1-1.12z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.4 7.95c.09.7.23 1.08.53 1.37.29.3.68.44 1.37.53a.4.4 0 0 1 0 .8c-.7.09-1.08.23-1.37.53-.3.29-.44.68-.53 1.37a.4.4 0 0 1-.8 0c-.09-.7-.23-1.08-.53-1.37-.29-.3-.68-.44-1.37-.53a.4.4 0 0 1 0-.8c.7-.09 1.08-.23 1.37-.53.3-.29.44-.67.53-1.37a.4.4 0 0 1 .8 0z"
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
            d="M1.75 7c0-.75-.07-1.55.08-2.29a3.8 3.8 0 0 1 2.88-2.88c.74-.16 1.54-.08 2.29-.08a.75.75 0 0 1 0 1.5c-.62 0-1.28-.07-1.89.03a2.2 2.2 0 0 0-1.17.6C3.07 4.7 3.25 5.9 3.25 7a.75.75 0 0 1-1.5 0zM17 1.75c.75 0 1.55-.07 2.29.08a3.8 3.8 0 0 1 2.88 2.88c.15.74.08 1.54.08 2.29a.75.75 0 0 1-1.5 0c0-.62.07-1.28-.03-1.89a2.2 2.2 0 0 0-.6-1.17c-.83-.87-2.03-.69-3.12-.69a.75.75 0 0 1 0-1.5zM22.25 17c0 .75.08 1.55-.08 2.29a3.8 3.8 0 0 1-2.88 2.88c-.74.15-1.54.08-2.29.08a.75.75 0 0 1 0-1.5c.62 0 1.28.07 1.89-.03a2.2 2.2 0 0 0 1.17-.6c.87-.83.69-2.03.69-3.12a.75.75 0 0 1 1.5 0zM7 22.25c-.75 0-1.55.08-2.29-.08a3.8 3.8 0 0 1-2.88-2.88c-.16-.74-.08-1.54-.08-2.29a.75.75 0 0 1 1.5 0c0 .62-.07 1.28.03 1.89a2.2 2.2 0 0 0 .6 1.17c.83.87 2.02.69 3.12.69a.75.75 0 0 1 0 1.5zm2-13.5c.41 0 .75.34.75.75V11a.75.75 0 0 1-1.5 0V9.5c0-.41.34-.75.75-.75zm0 5.7a4.7 4.7 0 0 0 6 0 .75.75 0 1 1 1 1.11 6.2 6.2 0 0 1-8 0 .75.75 0 1 1 1-1.12zm6.4-6.5c.09.7.23 1.08.53 1.37.29.3.68.44 1.37.53a.4.4 0 0 1 0 .8c-.7.09-1.08.23-1.37.53-.3.29-.44.68-.53 1.37a.4.4 0 0 1-.8 0c-.09-.7-.23-1.08-.53-1.37-.29-.3-.68-.44-1.37-.53a.4.4 0 0 1 0-.8c.7-.09 1.08-.23 1.37-.53.3-.29.44-.67.53-1.37a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiFaceMimic;
