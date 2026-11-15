import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiPlayVideo = forwardRef<SVGSVGElement, IconProps>(function IconAiPlayVideo(
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
            d="M17.14 8H2.5M7 8l3.5-5.5m3 5.5 1.37-2.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 14.5c0-.63-.66-1.06-1.99-1.91-1.34-.87-2-1.3-2.51-.99s-.5 1.18-.5 2.9 0 2.58.5 2.9 1.17-.12 2.51-.99c1.33-.85 1.99-1.28 1.99-1.91"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M17.14 8H2.5M7 8l3.5-5.5m3 5.5 1.37-2.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 14.5c0-.63-.66-1.06-1.99-1.91-1.34-.87-2-1.3-2.51-.99s-.5 1.18-.5 2.9 0 2.58.5 2.9 1.17-.12 2.51-.99c1.33-.85 1.99-1.28 1.99-1.91"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M18.73 8.75h3.24l.02.73v.78l.01.84v2.56l-.01.75-.01.7-.03.66-.03.62-.04.57-.06.53-.08.49-.1.45-.11.43-.15.39-.16.36-.2.33-.22.31-.26.29-.29.26-.3.22-.34.2-.36.16-.4.15-.42.11-.46.1-.49.08-.53.06-.57.04-.61.03-.66.03h-.7l-.76.02h-3.31l-.75-.01-.7-.01-.66-.03-.61-.03-.57-.04-.53-.06-.5-.08-.45-.1-.43-.11-.39-.15-.36-.16-.33-.2-.31-.22-.3-.26-.25-.29-.22-.3-.2-.34-.17-.36-.14-.4-.12-.42-.1-.46-.07-.49-.06-.53-.04-.57-.04-.61-.02-.66-.01-.7v-.76l-.01-.8v-2.59l.02-.78.01-.73z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15 14.5c0-.63-.66-1.06-1.99-1.91-1.34-.87-2-1.3-2.51-.99s-.5 1.18-.5 2.9 0 2.58.5 2.9 1.17-.12 2.51-.99c1.33-.85 1.99-1.28 1.99-1.91"
            fill="currentColor"
          />
          <path
            d="M16.08 2.06c.92.04-.45 1.39-.96 2.16L13.1 7.25H8.4L11.9 2h2.03l.58.01.55.01.52.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M3.46 3.46C4.72 2.21 6.62 2.03 10.1 2L6.6 7.25H2.1c.15-1.76.5-2.93 1.36-3.79"
            fill="currentColor"
          />
          <path
            d="M15.75 5.98c.47-.71 2.63 1.27 1.78 1.27H14.9z"
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
            d="M16.08 2.06c.92.04-.45 1.39-.96 2.16L13.1 7.25H8.4L11.9 2h2.03l.58.01.55.01.52.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M3.46 3.46C4.72 2.21 6.62 2.03 10.1 2L6.6 7.25H2.1c.15-1.76.5-2.93 1.36-3.79"
            fill="currentColor"
          />
          <path
            d="M18.73 8.75h3.24l.02.73v.78l.01.84v2.56l-.01.75-.01.7-.03.66-.03.62-.04.57-.06.53-.08.49-.1.45-.11.43-.15.39-.16.36-.2.33-.22.31-.26.29-.29.26-.3.22-.34.2-.36.16-.4.15-.42.11-.46.1-.49.08-.53.06-.57.04-.61.03-.66.03h-.7l-.76.02h-3.31l-.75-.01-.7-.01-.66-.03-.61-.03-.57-.04-.53-.06-.5-.08-.45-.1-.43-.11-.39-.15-.36-.16-.33-.2-.31-.22-.3-.26-.25-.29-.22-.3-.2-.34-.17-.36-.14-.4-.12-.42-.1-.46-.07-.49-.06-.53-.04-.57-.04-.61-.02-.66-.01-.7v-.76l-.01-.8v-2.59l.02-.78.01-.73zm-5.72 3.84c1.33.85 1.99 1.28 1.99 1.91s-.66 1.06-1.99 1.91c-1.34.87-2 1.3-2.51.99s-.5-1.18-.5-2.9 0-2.58.5-2.9 1.17.12 2.51.99"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.75 5.98c.47-.71 2.63 1.27 1.78 1.27H14.9z"
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

export default IconAiPlayVideo;
