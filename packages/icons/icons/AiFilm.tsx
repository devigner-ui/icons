import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFilm = forwardRef<SVGSVGElement, IconProps>(function IconAiFilm(
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
     shape as AiClipboard, so the gap matches across the AI icons. */
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22h-1.03m-2.4-.03c-2.53-.08-4.05-.38-5.11-1.43C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 7.62V21.5M7 2.5v19M2.5 7H7m10 10h4.5m-19 0H7m-5-5h20"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 7.62V21.5M7 2.5v19M2.5 7H7m10 10h4.5m-19 0H7m-5-5h20"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M6.25 2.22c-1.22.2-2.1.56-2.79 1.24a4.8 4.8 0 0 0-1.24 2.79h4.03z"
            fill="currentColor"
          />
          <path
            d="M2.07 7.75q-.08 1.46-.07 3.5h4.25v-3.5z"
            fill="currentColor"
          />
          <path
            d="M2 12.75q-.01 2.04.07 3.5h4.18v-3.5z"
            fill="currentColor"
          />
          <path
            d="M2.22 17.75c.2 1.22.56 2.1 1.24 2.79a4.8 4.8 0 0 0 2.79 1.24v-4.03z"
            fill="currentColor"
          />
          <path
            d="M17.75 21.78c1.22-.2 2.1-.56 2.79-1.24a4.8 4.8 0 0 0 1.24-2.79h-4.03z"
            fill="currentColor"
          />
          <path
            d="M21.93 16.25q.08-1.46.07-3.5h-4.25v3.5z"
            fill="currentColor"
          />
          <path
            d="M19 8.84c1.18.3 2.88-2.31 2.93-1.09l.03.77.03.84v.9l.01.99h-4.25V9.81A1 1 0 0 1 19 8.84"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.75 21.93q1.72.09 4.25.07 2.54.02 4.25-.07v-9.18h-8.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.25 2.07c1.87.08 0 2.92 0 4.79v4.39h-8.5V2.07l.44-.02.47-.02.49-.01.52-.01h.54l.57-.01h3.55l.52.02.49.01.47.02z"
            mask={`url(#${cut})`}
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M6.25 2.22c-1.22.2-2.1.56-2.79 1.24a4.8 4.8 0 0 0-1.24 2.79h4.03z"
            fill="currentColor"
          />
          <path
            d="M2.07 7.75q-.08 1.46-.07 3.5h4.25v-3.5z"
            fill="currentColor"
          />
          <path
            d="M2 12.75q-.01 2.04.07 3.5h4.18v-3.5z"
            fill="currentColor"
          />
          <path
            d="M2.22 17.75c.2 1.22.56 2.1 1.24 2.79a4.8 4.8 0 0 0 2.79 1.24v-4.03z"
            fill="currentColor"
          />
          <path
            d="M7.75 21.93q1.72.09 4.25.07 2.54.02 4.25-.07v-9.18h-8.5z"
            fill="currentColor"
          />
          <path
            d="M17.75 21.78c1.22-.2 2.1-.56 2.79-1.24a4.8 4.8 0 0 0 1.24-2.79h-4.03z"
            fill="currentColor"
          />
          <path
            d="M21.93 16.25a63 63 0 0 0 .07-3.5h-4.25v3.5z"
            fill="currentColor"
          />
          <path
            d="M19 8.84c1.18.3 2.89-2.31 2.93-1.09l.06 1.75.01 1.75h-4.25V9.81A1 1 0 0 1 19 8.84"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.25 2.07c1.87.08 0 2.92 0 4.79v4.39h-8.5V2.07l.44-.02.47-.02.49-.01.52-.01h.54l.57-.01h3.55l.52.02.49.01.47.02z"
            mask={`url(#${cut})`}
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

export default IconAiFilm;
