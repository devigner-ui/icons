import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWallet = forwardRef<SVGSVGElement, IconProps>(function IconAiWallet(
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
            d="M20.3 9.37q.65.93.67 2.14v1.44h-2.02a2 2 0 0 0-1.44.6m0 0a2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19A3.77 3.77 0 0 1 17.21 22H9.43m-2.4 0h-1.3a3.77 3.77 0 0 1-3.76-3.76v-6.73a3.77 3.77 0 0 1 3.76-3.76h11.31"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.97 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.03 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.47 12h7"
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
            d="M17.51 13.55a2 2 0 0 0-.6 1.63c.09 1.08 1.08 1.87 2.16 1.87h1.9v1.19A3.77 3.77 0 0 1 17.21 22H5.73a3.77 3.77 0 0 1-3.76-3.76v-6.73a3.77 3.77 0 0 1 3.76-3.76h11.31m3.26 1.62q.65.93.67 2.14v1.44h-2.02a2 2 0 0 0-1.44.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M1.97 12.41V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78v3.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.03 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.47 12h7"
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
            d="M17.21 7.74c1.38 0 2.41.48 3.12 1.66l.18.3.16.34.13.34.1.36.05.38.02.38v1.44h-2.22l-.2.04-.2.05-.18.06-.18.09-.17.1-.16.12-.15.15-.15.17-.14.18-.1.2-.1.2-.06.2-.04.23-.02.22.01.23.03.2.05.19.06.18.08.18.22.32.27.27.32.22.35.17.38.1.4.04h1.9v1.19l-.02.38-.06.38-.09.36-.13.34-.16.33-.18.3-.22.3-.24.27-.27.24-.29.21-.3.2-.34.15-.34.13-.36.1-.37.05-.39.02H5.73l-.38-.02-.38-.06-.36-.1-.34-.12-.33-.16-.3-.19-.3-.21-.26-.24-.25-.27-.21-.3-.2-.3-.15-.33-.13-.34-.1-.36-.05-.38-.02-.38V11.5l.02-.38.06-.38.1-.36.12-.34.16-.33.19-.31.21-.29.25-.27.26-.24.3-.22.3-.18.33-.16.34-.13.36-.1.38-.05.38-.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M14.32 3.95v3.8H5.73a3.77 3.77 0 0 0-3.76 3.76V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3a1.9 1.9 0 0 1 2.57 1.78"
            fill="currentColor"
          />
          <path
            d="M22.03 13.97v2.06c0 .55-.44 1-1 1.02h-1.96c-1.08 0-2.07-.79-2.16-1.87a2 2 0 0 1 .6-1.63 2 2 0 0 1 1.44-.6h2.08c.56.02 1 .47 1 1.02"
            fill="currentColor"
          />
          <path
            d="M13.47 12.75h-7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
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
            d="M14.85 3.95v3.8h-1.5v-3.8c0-.27-.24-.4-.4-.4l-.15.03-7.93 2.99c-.53.2-.87.7-.87 1.27v.67a3.7 3.7 0 0 0-1.5 3V7.84c0-1.19.73-2.25 1.84-2.67l7.94-3q.33-.12.67-.12c1 0 1.9.81 1.9 1.9"
            fill="currentColor"
          />
          <path
            d="M21.5 14.5v1a.5.5 0 0 1-.49.5h-1.46c-.53 0-1.01-.39-1.05-.91a1 1 0 0 1 .99-1.09H21c.29.01.5.23.5.5"
            fill="currentColor"
          />
          <path
            d="M17.69 7.75c1.39 0 2.41.49 3.16 1.67l.19.3.16.33.13.34.09.36.06.38.02.38v.44l-.02.2-.06.2-.1.16-.12.15-.14.12-.17.1-.2.05-.2.02h-1.01l-.2.01-.2.03-.2.05-.18.06-.18.09-.17.1-.16.12-.15.14-.18.2-.16.22-.12.24-.08.25-.06.27-.01.26.01.27.06.27.12.33.18.3.23.26.27.22.3.18.32.12.35.08.36.03h.87l.2.02.19.06.17.1.15.11.12.15.09.17.06.19.02.2v.2l-.02.38-.06.37-.1.36-.12.34-.16.33-.19.31-.21.29-.25.27-.26.24-.3.22-.3.18-.33.16-.34.13-.36.1-.38.05-.38.02H6.26l-.39-.02-.37-.06-.36-.09-.34-.13-.33-.16-.31-.18-.3-.22-.26-.24-.24-.27-.22-.29-.19-.3-.15-.34-.13-.34-.1-.36-.05-.37-.02-.39v-6.73l.01-.37.06-.37.09-.35.12-.35.15-.33.2-.32.21-.3.25-.27.28-.25.3-.22.31-.2.34-.15.34-.12.36-.09.36-.05.38-.02zm-3.69 5H7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75"
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

export default IconAiWallet;
