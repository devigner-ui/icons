import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiUx = forwardRef<SVGSVGElement, IconProps>(function IconAiUx(
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
            d="M21 9.02V16a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-1.26m0-2.4V8a5 5 0 0 1 5-5h6.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 9v3.5a2 2 0 1 0 4 0V9m3 0 3.5 6m0-6-3.5 6"
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
            d="M21 9.02V16a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h6.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 9v3.5a2 2 0 1 0 4 0V9m3 0 3.5 6m0-6-3.5 6"
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
            d="M8 2.25h8A5.77 5.77 0 0 1 21.76 8v8a6 6 0 0 1-1.7 4.07c-1 1-2.52 1.65-4.06 1.68H8a6 6 0 0 1-4.06-1.68c-1-1-1.66-2.53-1.69-4.07V8a6 6 0 0 1 1.69-4.06c1-1 2.53-1.66 4.06-1.69"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.5 8.25a.75.75 0 0 0-.75.75v2.75c0 .75-.02 1.46.37 2.13a2.78 2.78 0 0 0 4.37.52q.35-.36.54-.82c.25-.58.22-1.2.22-1.83V9a.75.75 0 0 0-1.5 0v2.63c0 .47.08 1-.13 1.43-.48.96-1.93.88-2.3-.14-.14-.4-.07-.87-.07-1.29V9a.75.75 0 0 0-.75-.75zm6.35 1.13L14.38 12l-1.53 2.62a.75.75 0 1 0 1.3.76l1.1-1.9 1.1 1.9a.75.75 0 1 0 1.3-.76L16.12 12l1.53-2.62a.75.75 0 1 0-1.3-.76l-1.1 1.9-1.1-1.9a.75.75 0 1 0-1.3.76z"
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
            d="M8 2.25h8A5.77 5.77 0 0 1 21.76 8v8a6 6 0 0 1-1.7 4.07c-1 1-2.52 1.65-4.06 1.68H8a6 6 0 0 1-4.06-1.68c-1-1-1.66-2.53-1.69-4.07V8a6 6 0 0 1 1.69-4.06c1-1 2.53-1.66 4.06-1.69m-1.5 6a.75.75 0 0 0-.75.75v2.75c0 .75-.02 1.46.37 2.13a2.78 2.78 0 0 0 4.37.52q.35-.36.54-.82c.25-.58.22-1.2.22-1.83V9a.75.75 0 0 0-1.5 0v2.63c0 .47.08 1-.13 1.43-.48.96-1.93.88-2.3-.14-.14-.4-.07-.87-.07-1.29V9a.75.75 0 0 0-.75-.75m6.35 1.13L14.38 12l-1.53 2.62a.75.75 0 1 0 1.3.76l1.1-1.9 1.1 1.9a.75.75 0 1 0 1.3-.76L16.12 12l1.53-2.62a.75.75 0 1 0-1.3-.76l-1.1 1.9-1.1-1.9a.75.75 0 1 0-1.3.76"
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

export default IconAiUx;
