import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiChatbox = forwardRef<SVGSVGElement, IconProps>(function IconAiChatbox(
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
            d="M22 10.5v1c0 2.33 0 3.5-.38 4.41a5 5 0 0 1-2.7 2.71 7 7 0 0 1-2.71.37c-.85.02-1.28.02-1.61.22s-.55.55-.97 1.26l-.54.92c-.49.81-1.7.81-2.18 0l-.54-.92c-.42-.7-.63-1.06-.97-1.26s-.76-.2-1.61-.22a7 7 0 0 1-2.7-.37 5 5 0 0 1-2.7-2.7C2 14.98 2 13.82 2 11.5v-1c0-3.27 0-4.91.74-6.11a5 5 0 0 1 1.65-1.65C5.59 2 7.23 2 10.5 2H15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M17 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
            d="M22 10.5v1c0 2.33 0 3.5-.38 4.41a5 5 0 0 1-2.7 2.71 7 7 0 0 1-2.71.37c-.85.02-1.28.02-1.61.22s-.55.55-.97 1.26l-.54.92c-.49.81-1.7.81-2.18 0l-.54-.92c-.42-.7-.63-1.06-.97-1.26s-.76-.2-1.61-.22a7 7 0 0 1-2.7-.37 5 5 0 0 1-2.7-2.7C2 14.98 2 13.82 2 11.5v-1c0-3.27 0-4.91.74-6.11a5 5 0 0 1 1.65-1.65C5.59 2 7.23 2 10.5 2H15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
            d="m13 21.53-.12.12-.13.1-.13.1-.15.06-.15.05-.32.03-.31-.03-.15-.05-.15-.07-.14-.08-.12-.1-.12-.13-.1-.14-.54-.92-.15-.25-.13-.22-.12-.19-.12-.16-.1-.14-.12-.12-.23-.18-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.23-.01-.27-.01H7.1l-.68-.06-.68-.13-.66-.19-.45-.21-.42-.26-.39-.29-.36-.33-.33-.36-.29-.39-.25-.42-.21-.45-.12-.35-.1-.4-.07-.43-.04-.5-.03-.55v-.3L2 13.04V8.33l.01-.45.02-.43.02-.4.03-.38.04-.35.05-.33.06-.3.07-.3.09-.27.1-.25.11-.25.13-.23.34-.48.39-.44.44-.39.48-.34.23-.13.24-.11.26-.1.27-.08.29-.08.3-.06.34-.05.35-.03.37-.04.4-.02.44-.01.45-.02h7.36l.45.02.44.01.4.02.37.04.35.03.34.05.3.06.29.08.27.08.26.1.24.11.23.13.48.34.44.39.39.44.34.48.13.23.11.25.1.25.09.27.07.3.06.3.05.33.04.35.03.38.02.4.02.43.01.45v.01l-.01.49v4.22l-.01.32-.01.31-.03.56-.05.49-.07.44-.1.4-.12.35-.21.45-.26.42-.29.39-.32.36-.36.33-.4.29-.42.25-.44.21-.66.2-.67.12-.69.06h-1.24l-.23.02-.2.02-.19.02-.16.04-.14.05-.13.06-.12.09-.12.1-.1.12-.12.14-.11.16-.12.19-.13.22-.15.24-.54.92z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M13 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M9 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
            d="m13 21.53-.12.12-.13.1-.13.1-.15.06-.15.05-.32.03-.31-.03-.15-.05-.15-.07-.14-.08-.12-.1-.12-.13-.1-.14-.54-.92-.15-.25-.13-.22-.12-.19-.12-.16-.1-.14-.12-.12-.23-.18-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.23-.01-.27-.01H7.1l-.68-.06-.68-.13-.66-.19-.45-.21-.42-.26-.39-.29-.36-.33-.33-.36-.29-.39-.25-.42-.21-.45-.12-.35-.1-.4-.07-.43-.04-.5-.03-.55v-.3L2 13.04V8.33l.01-.45.02-.43.02-.4.03-.38.04-.35.05-.33.06-.3.07-.3.09-.27.1-.25.11-.25.13-.23.34-.48.39-.44.44-.39.48-.34.23-.13.24-.11.26-.1.27-.08.29-.08.3-.06.34-.05.35-.03.37-.04.4-.02.44-.01.45-.02h7.36l.45.02.44.01.4.02.37.04.35.03.34.05.3.06.29.08.27.08.26.1.24.11.23.13.48.34.44.39.39.44.34.48.13.23.11.25.1.25.09.27.07.3.06.3.05.33.04.35.03.38.02.4.02.43.01.45v.01l-.01.49v4.22l-.01.32-.01.31-.03.56-.05.49-.07.44-.1.4-.12.35-.21.45-.26.42-.29.39-.32.36-.36.33-.4.29-.42.25-.44.21-.66.2-.67.12-.69.06h-1.24l-.23.02-.2.02-.19.02-.16.04-.14.05-.13.06-.12.09-.12.1-.1.12-.12.14-.11.16-.12.19-.13.22-.15.24-.54.92zM16 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
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

export default IconAiChatbox;
