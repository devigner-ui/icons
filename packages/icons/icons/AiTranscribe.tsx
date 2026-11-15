import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTranscribe = forwardRef<SVGSVGElement, IconProps>(function IconAiTranscribe(
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
            d="M12.9 2.5H14L19.5 8v9c0 3.3-1.2 4.5-4.5 4.5H9.47M4.5 13.84V7c0-3.3 1.2-4.5 4.5-4.5h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 2.5V6c0 1.1.9 2 2 2h3.5M9 13v2m2-3.5v5m2-6v7m2-5.5v4m2-3v2"
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
            d="M8.14 21.47q.4.03.86.03h6c3.3 0 4.5-1.2 4.5-4.5V8L14 2.5H9C5.7 2.5 4.5 3.7 4.5 7v6.84m4.97 7.66H15c3.3 0 4.5-1.2 4.5-4.5V8L14 2.5H9C5.7 2.5 4.5 3.7 4.5 7v5.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 2.5V6c0 1.1.9 2 2 2h3.5M9 13v2m2-3.5v5m2-6v7m2-5.5v4m2-3v2"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M3 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.45 22.13c-3.32-.55-3.7-4.43-3.7-7.8V7c.01-1.75.39-3.17 1.23-4.02.85-.85 2.27-1.22 4.02-1.23h5q.3 0 .53.22l.22.22v2.88c0 .62-.12 1.33.37 1.81.48.49 1.19.37 1.81.37h2.88l.22.22q.2.22.22.53v9c-.01 1.75-.39 3.17-1.23 4.02-.85.84-2.27 1.22-4.02 1.23H9q-.83 0-1.55-.12"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.93 7.25c-.62 0-1.33.12-1.81-.37-.49-.48-.37-1.19-.37-1.81V2.19l5.06 5.06zM8.25 13v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0m2-1.5v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m2-1v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0m2 1.5v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0m2 1v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M3 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M7.45 22.13c-3.32-.55-3.7-4.43-3.7-7.8V7c.01-1.75.39-3.17 1.23-4.02.85-.85 2.27-1.22 4.02-1.23h4.25v3.32c0 1.06 0 2.06.8 2.87.82.81 1.82.8 2.88.8h3.32V17c-.01 1.75-.39 3.17-1.23 4.02-.85.84-2.27 1.22-4.02 1.23H9q-.83 0-1.55-.12m9.48-14.88c-.62 0-1.33.12-1.81-.37-.49-.48-.37-1.19-.37-1.81V2.19l5.06 5.06zM8.25 13v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0m2-1.5v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m2-1v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0m2 1.5v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0m2 1v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0"
            mask={`url(#${cut})`}
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

export default IconAiTranscribe;
