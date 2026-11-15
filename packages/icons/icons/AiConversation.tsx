import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiConversation = forwardRef<SVGSVGElement, IconProps>(function IconAiConversation(
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
            d="M22 10.5v1c0 2.33 0 3.5-.38 4.41a5 5 0 0 1-2.7 2.71 7 7 0 0 1-2.71.37c-.85.02-1.28.02-1.61.22s-.55.55-.97 1.26l-.54.92c-.49.81-1.7.81-2.18 0l-.54-.92c-.42-.7-.63-1.06-.97-1.26s-.76-.2-1.61-.22a7 7 0 0 1-2.7-.37 5 5 0 0 1-2.7-2.7C2 14.98 2 13.82 2 11.5v-1c0-3.27 0-4.91.74-6.11a5 5 0 0 1 1.65-1.65C5.59 2 7.23 2 10.5 2H15"
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
            d="M22 10.5v1c0 2.33 0 3.5-.38 4.41a5 5 0 0 1-2.7 2.71 7 7 0 0 1-2.71.37c-.85.02-1.28.02-1.61.22s-.55.55-.97 1.26l-.54.92c-.49.81-1.7.81-2.18 0l-.54-.92c-.42-.7-.63-1.06-.97-1.26s-.76-.2-1.61-.22a7 7 0 0 1-2.7-.37 5 5 0 0 1-2.7-2.7C2 14.98 2 13.82 2 11.5v-1c0-3.27 0-4.91.74-6.11a5 5 0 0 1 1.65-1.65C5.59 2 7.23 2 10.5 2H15"
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
            d="M21.97 13.81A11 11 0 0 1 6.15 2.15 4.6 4.6 0 0 0 2.74 4.4C2 5.59 2 7.23 2 10.5v1c0 2.33 0 3.5.38 4.41a5 5 0 0 0 2.7 2.71 7 7 0 0 0 2.71.37c.85.02 1.28.02 1.61.22s.55.55.97 1.26l.54.92c.49.81 1.7.81 2.18 0l.54-.92c.42-.7.63-1.06.97-1.26s.76-.2 1.61-.22a7 7 0 0 0 2.7-.37 5 5 0 0 0 2.7-2.7c.24-.55.33-1.19.36-2.1"
            fill="currentColor"
          />
          <path
            d="m13.09 21.39.54-.92c.42-.7.63-1.06.97-1.26s.76-.2 1.61-.22a7 7 0 0 0 2.7-.37 5 5 0 0 0 2.7-2.7c.24-.55.33-1.19.36-2.1A11 11 0 0 1 6.15 2.15a4.6 4.6 0 0 0-3.41 2.23C2 5.59 2 7.23 2 10.5v1c0 2.33 0 3.5.38 4.41a5 5 0 0 0 2.7 2.71 7 7 0 0 0 2.71.37c.85.02 1.28.02 1.61.22s.55.55.97 1.26l.54.92c.49.81 1.7.81 2.18 0"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.12 2.02a5.9 5.9 0 0 1 5.86 5.86v.45l.02.5v3.94l-.01.55-.02.49-.65.3-.66.26-.67.21-.68.17-.68.13-.7.08-.69.03h-.7l-.68-.05-.7-.1-.67-.13-.68-.19-.66-.22-.65-.27-.64-.3-.62-.36-.6-.4-.56-.42-.53-.46-.5-.5-.47-.51-.43-.55-.4-.57-.35-.6-.32-.6-.28-.64-.24-.66-.2-.67-.16-.68-.11-.7-.07-.7L6 4l.03-.94.12-.91.4-.05.45-.04.47-.03.52-.01.56-.01.6-.01h6.02l.5.01z"
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
            d="M16.54 2.03a5.74 5.74 0 0 1 5.43 5.84v.46l.01.49v4.54l-.01.31-.03.56-.04.49-.07.44-.1.39-.12.35-.21.45-.25.42-.3.4-.32.35-.36.33-.4.3-.42.25-.44.21-.66.2-.68.12-.68.06-.7-.01h-.3l-.26.02h-.23l-.2.02-.18.03-.16.03-.14.05-.13.07-.23.18-.11.12-.11.14-.12.16-.12.2-.13.2-.14.27-.54.92-.1.14-.11.12-.13.1-.14.1-.15.06-.15.05-.31.03-.32-.03-.15-.05-.14-.07-.14-.08-.13-.1-.11-.13-.1-.14-.54-.92-.15-.25-.13-.21-.12-.2-.11-.16-.11-.14-.11-.12-.12-.1-.12-.08-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.24-.01L8.1 19l-.3-.01h-.68l-.69-.05-.67-.13-.66-.2-.44-.2-.42-.26-.4-.29-.36-.32-.32-.36-.3-.4-.25-.41-.2-.45-.14-.37-.1-.4-.06-.43-.05-.5-.03-.55v-.3L2 13.03v-.72l-.01-.4v-3.1L2 8.32l.01-.46.02-.42.02-.4.03-.38.04-.35.05-.33.06-.31.07-.29.09-.27.1-.26.11-.24.13-.23.34-.48.39-.44.44-.4.48-.33.23-.13.24-.11.26-.1.27-.09.29-.07.3-.06.34-.05.35-.04.37-.03.4-.02.43-.02h.46l.5-.02h6.34l.5.01.45.01z"
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

export default IconAiConversation;
