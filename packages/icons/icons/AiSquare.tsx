import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSquare = forwardRef<SVGSVGElement, IconProps>(function IconAiSquare(
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
            d="M8.79 21H7.5A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-5.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.73 15.5v-4.2a2.8 2.8 0 0 1 5.6 0v4.2m-5.6-2.94h5.6m2.94-4.06v7"
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
            d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.73 15.5v-4.2a2.8 2.8 0 0 1 5.6 0v4.2m-5.6-2.94h5.6m2.94-4.06v7"
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
            d="M7.5 2.25h9c1.4.03 2.8.63 3.71 1.54.91.9 1.5 2.31 1.54 3.71v9a5.6 5.6 0 0 1-1.54 3.71c-.9.91-2.31 1.5-3.71 1.54h-9a5.6 5.6 0 0 1-3.71-1.54 5.6 5.6 0 0 1-1.54-3.71v-9c.03-1.4.63-2.8 1.54-3.71.9-.91 2.31-1.5 3.71-1.54z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.98 15.5v-3.22c0-1-.02-1.95.52-2.83a3.59 3.59 0 0 1 6.27.4c.35.78.31 1.6.31 2.43v3.22a.75.75 0 0 1-1.5 0v-2.2h-4.1v2.19a.75.75 0 0 1-1.5 0zm5.49-4.87c-.57-1.65-2.9-1.84-3.74-.32a3 3 0 0 0-.26 1.5h4.12c.01-.4 0-.81-.12-1.18zm3.8-2.88c.41 0 .75.34.75.75v7a.75.75 0 0 1-1.5 0v-7c0-.41.34-.75.75-.75z"
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
            d="M7.5 2.25h9c1.4.03 2.8.63 3.71 1.54.91.9 1.5 2.31 1.54 3.71v9a5.6 5.6 0 0 1-1.54 3.71c-.9.91-2.31 1.5-3.71 1.54h-9a5.6 5.6 0 0 1-3.71-1.54 5.6 5.6 0 0 1-1.54-3.71v-9c.03-1.4.63-2.8 1.54-3.71.9-.91 2.31-1.5 3.71-1.54zm.23 14c.41 0 .75-.34.75-.75v-2.2h4.1v2.19a.75.75 0 0 0 1.5 0v-3.23c0-.83.04-1.64-.3-2.42q-.3-.62-.78-1.1a3.6 3.6 0 0 0-5.5.7c-.54.88-.52 1.83-.52 2.82v3.23c0 .41.34.75.75.75zm4.86-4.44H8.47c0-.52 0-1.04.26-1.5.84-1.52 3.17-1.33 3.74.32.13.37.13.78.12 1.18zm2.93-3.31v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiSquare;
