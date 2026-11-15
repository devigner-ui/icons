import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVideoText = forwardRef<SVGSVGElement, IconProps>(function IconAiVideoText(
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
            d="M2.5 14.59V16A3.5 3.5 0 0 0 6 19.5h12a3.5 3.5 0 0 0 3.5-3.5V9.47M13.84 4.5H6A3.5 3.5 0 0 0 2.5 8v4.19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.95 14.6v-3a2 2 0 1 1 4 0v3m-4-2.1h4m2.1-2.9v5"
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
            d="M21.5 8.2V16a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5h7.84m7.66 4.97V16a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 16V8A3.5 3.5 0 0 1 6 4.5h6.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.95 14.6v-3a2 2 0 1 1 4 0v3m-4-2.1h4m2.1-2.9v5"
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
            opacity={duotone ? "0.4" : "1"}
            d="M6 3.75h8.03c3.61 0 8.22.64 8.22 4.25v8a4.6 4.6 0 0 1-1.24 3A4.6 4.6 0 0 1 18 20.26H6A4.6 4.6 0 0 1 3 19a4.6 4.6 0 0 1-1.25-3V8A4.6 4.6 0 0 1 3 5a4.6 4.6 0 0 1 3-1.25"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.95 15.35c.41 0 .75-.34.75-.75v-1.35h2.5v1.35a.75.75 0 0 0 1.5 0v-2.27c0-.62.03-1.24-.23-1.82a2.78 2.78 0 0 0-4.81-.43c-.47.7-.46 1.45-.46 2.25v2.27c0 .41.33.75.75.75zm3.27-3.6H9.69q-.01-.38.14-.71c.5-.99 2-.86 2.32.2q.06.25.07.51zM14.3 9.6v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0z"
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
            d="M6 3.75h8.03c3.61 0 8.22.64 8.22 4.25v8a4.6 4.6 0 0 1-1.24 3A4.6 4.6 0 0 1 18 20.26H6A4.6 4.6 0 0 1 3 19a4.6 4.6 0 0 1-1.25-3V8A4.6 4.6 0 0 1 3 5a4.6 4.6 0 0 1 3-1.25m2.95 11.6c.41 0 .75-.34.75-.75v-1.35h2.5v1.35a.75.75 0 0 0 1.5 0v-2.27c0-.62.03-1.24-.23-1.82a2.78 2.78 0 0 0-4.81-.43c-.47.7-.46 1.45-.46 2.25v2.27c0 .41.33.75.75.75m3.27-3.6H9.69q-.01-.38.14-.71c.5-.99 2-.86 2.32.2q.06.26.07.51M14.3 9.6v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0"
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

export default IconAiVideoText;
