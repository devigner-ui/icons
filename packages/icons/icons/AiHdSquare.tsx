import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHdSquare = forwardRef<SVGSVGElement, IconProps>(function IconAiHdSquare(
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
            d="M6.25 8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm6.31-8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm3.91-.8V8.8h-1.5v6.4zm.22.05a.3.3 0 0 1-.2-.06c-.04-.03-.02-.03-.02.01h-1.5c0 .98.9 1.55 1.72 1.55zm0 1.5c2.93 0 5.56-2 5.56-4.75h-1.5c0 1.67-1.68 3.25-4.06 3.25zm0-8c2.38 0 4.06 1.58 4.06 3.25h1.5c0-2.75-2.63-4.75-5.56-4.75zm0-1.5c-.81 0-1.72.57-1.72 1.55h1.5q-.02.06.01.01.05-.05.2-.06zM4.75 8v4h1.5V8zm0 4v4h1.5v-4zm4.81-4v4h1.5V8zm0 4v4h1.5v-4zm-4.06.75h4.81v-1.5H5.5z"
            fill="currentColor"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c1.67 0 3.04 0 4.19.07m5.74 5.74q.09 1.7.07 4.19c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.25 8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm6.31-8a.75.75 0 0 0-1.5 0zm-1.5 8a.75.75 0 0 0 1.5 0zm3.91-.8V8.8h-1.5v6.4zm.22.05a.3.3 0 0 1-.2-.06c-.04-.03-.02-.03-.02.01h-1.5c0 .98.9 1.55 1.72 1.55zm0 1.5c2.93 0 5.56-2 5.56-4.75h-1.5c0 1.67-1.68 3.25-4.06 3.25zm0-8c2.38 0 4.06 1.58 4.06 3.25h1.5c0-2.75-2.63-4.75-5.56-4.75zm0-1.5c-.81 0-1.72.57-1.72 1.55h1.5q-.02.06.01.01.05-.05.2-.06zM4.75 8v4h1.5V8zm0 4v4h1.5v-4zm4.81-4v4h1.5V8zm0 4v4h1.5v-4zm-4.06.75h4.81v-1.5H5.5z"
            fill="currentColor"
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
            d="M16.38 2.08a5.8 5.8 0 0 1 5.55 5.54l.03.61.02.66.01.7.01.76v4.06l-.02.7-.02.66-.03.61-.05.57-.06.53-.07.5-.1.45-.12.43-.14.39-.17.36-.2.33-.22.31-.26.3-.28.25-.31.22-.34.2-.36.17-.4.14-.41.12-.46.1-.5.07-.52.06-.58.04-.6.04-.67.02-.7.01h-.75l-.8.01h-2.52l-.75-.01-.7-.01-.66-.03-.62-.03-.57-.04-.53-.06-.49-.08-.45-.1-.43-.11-.39-.15-.36-.16-.33-.2-.31-.22-.29-.26-.26-.29-.22-.3-.2-.34-.16-.36-.15-.4-.11-.42-.1-.46-.08-.49-.06-.53-.04-.57-.03-.61-.03-.66v-.7L2 13.65v-3.3l.01-.76.01-.7.03-.66.03-.61.04-.57.06-.53.08-.5.1-.45.11-.43.15-.39.16-.36.2-.33.22-.31.26-.3.29-.25.3-.22.34-.2.36-.17.4-.14.42-.12.46-.1.49-.07.53-.06.57-.04.61-.04.66-.02.7-.01h.76l.8-.01h3.26l.7.02.66.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.5 7.25c.41 0 .75.34.75.75v3.25h3.31V8a.75.75 0 1 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H6.25V16a.75.75 0 0 1-1.5 0V8c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M13.69 7.25c-.81 0-1.72.57-1.72 1.55v6.4c0 .98.9 1.55 1.72 1.55 2.93 0 5.56-2 5.56-4.75s-2.63-4.75-5.56-4.75m-.2 1.56-.02.01v6.36h.01q.05.06.2.07c2.39 0 4.07-1.58 4.07-3.25s-1.68-3.25-4.06-3.25q-.15 0-.2.06"
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
            d="M16.38 2.08a5.77 5.77 0 0 1 5.55 5.54l.03.62.02.65.01.7.01.76v4.06l-.02.7-.02.66-.03.61-.05.57-.06.54-.07.49-.1.46-.12.42-.14.4-.17.35-.2.34-.22.3-.26.3-.28.25-.31.23-.34.2-.36.16-.4.14-.42.12-.45.1-.5.07-.53.06-.57.05-.61.03-.66.02-.7.01-.75.01H9.6l-.7-.02-.66-.02-.62-.03-.57-.05-.53-.06-.5-.07-.45-.1-.42-.12-.4-.14-.36-.17-.33-.2-.31-.22-.29-.26-.25-.28-.23-.31-.2-.34-.16-.36-.14-.4-.12-.41-.1-.46-.08-.5-.06-.53-.04-.57-.03-.6-.02-.67-.02-.7v-1.55L2 12v-1.66l.01-.75.01-.7.03-.66.03-.62.04-.57.06-.53.08-.49.1-.45.11-.43.15-.39.16-.36.2-.33.22-.31.26-.29.29-.26.3-.22.34-.2.36-.16.4-.15.42-.11.46-.1.49-.08.53-.06.57-.04.61-.03.66-.03h.7l.75-.02h3.31l.76.01.7.01.66.03zM6.25 8a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.31V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H6.25zm5.72.8c0-.98.9-1.55 1.72-1.55 2.93 0 5.56 2 5.56 4.75s-2.63 4.75-5.56 4.75c-.81 0-1.72-.57-1.72-1.55zm1.5.02q.05-.07.2-.07c2.39 0 4.07 1.58 4.07 3.25s-1.68 3.25-4.06 3.25a.3.3 0 0 1-.22-.07z"
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

export default IconAiHdSquare;
