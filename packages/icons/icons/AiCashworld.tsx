import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCashworld = forwardRef<SVGSVGElement, IconProps>(function IconAiCashworld(
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

  /* Bold and Bulk cut the body around the sparkle with the same rounded
     shape as AiClipboard: a 1.5 circle round each tip, joined by small
     curves, so the gap matches across the AI icons. */
  const cut = useId();

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
            d="M2.9 9.42A8.5 8.5 0 0 1 19.5 12q0 .82-.15 1.6l-.05.25M13.88 20A8.5 8.5 0 0 1 2.5 12v-.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 12c0 4.7 1.57 8.5 3.5 8.5s3.5-3.8 3.5-8.5-1.57-8.5-3.5-8.5S7.5 7.3 7.5 12zm-5 0h17"
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
            d="M19.35 13.6q.15-.78.15-1.6a8.5 8.5 0 1 0-5.62 8m5.42-6.15.05-.25q.15-.78.15-1.6a8.5 8.5 0 1 0-5.25 7.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 12c0 4.7 1.57 8.5 3.5 8.5s3.5-3.8 3.5-8.5-1.57-8.5-3.5-8.5S7.5 7.3 7.5 12zm-5 0h17"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.96 14.25a8.6 8.6 0 0 1-4.82 6.01 9 9 0 0 1-4.14 1c-2.5 0-4.9-1.09-6.54-2.72A9.4 9.4 0 0 1 1.75 12c0-2.5 1.08-4.9 2.7-6.54A9.4 9.4 0 0 1 11 2.76v-.01c2.5 0 4.9 1.08 6.54 2.7A9.4 9.4 0 0 1 20.25 12q0 1.16-.29 2.25"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <clipPath id={`${cut}c`}>
            <circle cx="11" cy="12" r="9.25" />
          </clipPath>
          <path
            clipPath={`url(#${cut}c)`}
            d="M11 2.75c.66 0 1.4.38 1.9.9.48.49.93 1.23 1.27 2.05.6 1.45 1 3.42 1.07 5.55H21v1.5h-5.76c-.08 2.13-.48 4.1-1.07 5.55a7 7 0 0 1-1.27 2.05c-.5.52-1.24.9-1.9.9s-1.4-.38-1.9-.9a7 7 0 0 1-1.27-2.05c-.6-1.45-1-3.42-1.07-5.55H1v-1.5h5.76c.08-2.13.48-4.1 1.07-5.55A7 7 0 0 1 9.1 3.64c.5-.51 1.24-.89 1.9-.89zm-.82 1.94c-.36.37-.67.87-.96 1.58a15 15 0 0 0-.96 4.98h5.48a15 15 0 0 0-.96-4.97c-.3-.72-.6-1.22-.95-1.59-.34-.34-.52-.44-.83-.44s-.49.1-.82.44zm-.96 13.04c.3.71.6 1.2.95 1.58.34.34.52.44.83.44s.49-.1.82-.44q.53-.54.96-1.58c.54-1.3.88-3.02.96-4.98H8.26c.07 1.96.42 3.67.96 4.98z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M11 2.75c2.5 0 4.9 1.08 6.54 2.7a9.5 9.5 0 0 1 2.68 5.8h-4.98c-.08-2.13-.48-4.1-1.07-5.55a7 7 0 0 0-1.27-2.06 3 3 0 0 0-1.9-.89c-.66 0-1.4.38-1.9.9A7 7 0 0 0 7.83 5.7c-.6 1.45-1 3.42-1.07 5.55H1.78a9.5 9.5 0 0 1 2.68-5.8A9.4 9.4 0 0 1 11 2.76zm8.96 11.5a8.5 8.5 0 0 1-4.82 6.01 9 9 0 0 1-4.14 1v-.01c-2.5 0-4.9-1.08-6.54-2.7a9.5 9.5 0 0 1-2.68-5.8h4.98c.08 2.13.48 4.1 1.07 5.55.34.82.8 1.56 1.27 2.05.5.52 1.24.9 1.9.9s1.4-.38 1.9-.9a7 7 0 0 0 1.27-2.05c.6-1.45 1-3.42 1.07-5.55h4.98a9 9 0 0 1-.26 1.5M11 4.25c.31 0 .49.1.83.44.35.37.66.87.95 1.58.54 1.3.88 3.02.96 4.98H8.26c.07-1.96.42-3.67.96-4.97.3-.72.6-1.22.95-1.59.34-.34.52-.44.83-.44m-2.74 8.5h5.48a15 15 0 0 1-.96 4.97c-.3.72-.6 1.22-.95 1.59-.34.34-.52.44-.83.44s-.49-.1-.82-.44a5 5 0 0 1-.96-1.58 15 15 0 0 1-.96-4.98"
            mask={`url(#${cut})`}
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

export default IconAiCashworld;
