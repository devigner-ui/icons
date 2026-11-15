import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiPhoto = forwardRef<SVGSVGElement, IconProps>(function IconAiPhoto(
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
            d="M18.46 21.53C20.95 20.68 22 18.63 22 15V9c0-5-2-7-7-7H9.05m-7 5.78Q1.98 8.37 2 9v6c0 5 2 7 7 7h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 10a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m2.67 18.95 4.93-3.31a2.25 2.25 0 0 1 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.82-.68 2-.68 2.82 0L22 13.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M2.04 7.78Q2 8.37 2 9v6c0 5 2 7 7 7m0 0h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9q-.64 0-1.22.04"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.67 18.95 4.93-3.31a2.25 2.25 0 0 1 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0L22 13.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7.59 15.65-4.92 3.3-.11.08A7 7 0 0 1 2 16.19V7.81q0-.7.1-1.31c.39-2.39 2.03-3.93 4.41-4.39q.62-.12 1.31-.11h8.38C19.83 2 22 4.17 22 7.81v6.09l-1.63-1.4a2.2 2.2 0 0 0-2.82 0l-4.16 3.57c-.78.67-2.04.67-2.82 0l-.34-.28a2.2 2.2 0 0 0-2.64-.14"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            d="M15 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
            fill="currentColor"
          />
          <path
            d="M22 13.9v2.29c0 3.64-2.17 5.81-5.81 5.81H7.81c-2.55 0-4.4-1.07-5.25-2.97l.1-.08 4.93-3.3c.8-.54 1.93-.48 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57a2.2 2.2 0 0 1 2.82 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
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
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="m2.58 19.01-.02.02a6 6 0 0 1-.51-2q.11 1.1.53 1.98"
            fill="currentColor"
          />
          <path
            d="M15 10.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
            fill="currentColor"
          />
          <path
            d="M2.56 19.03A7 7 0 0 1 2 16.19V7.81q0-.7.1-1.31c.16-.98 1.4 1.13 1.4 2.12v7.57a5 5 0 0 0 .35 1.97l3.74-2.51a2.2 2.2 0 0 1 2.64.14l.34.28c.78.67 2.04.67 2.82 0l4.16-3.57c.82-.68 2-.68 2.82 0l.13.11v-4.8c0-2.82-1.49-4.31-4.31-4.31H8.62c-.99 0-3.09-1.2-2.12-1.39q.62-.12 1.31-.11h8.38C19.83 2 22 4.17 22 7.81v8.38c0 3.64-2.17 5.81-5.81 5.81H7.81c-2.55 0-4.39-1.07-5.25-2.97"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiPhoto;
