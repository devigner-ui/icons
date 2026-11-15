import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDialogue = forwardRef<SVGSVGElement, IconProps>(function IconAiDialogue(
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
            d="M21.99 9.04v4.01l-.01.32-.01.31-.03.56-.05.49-.07.44-.1.4-.12.35-.21.45-.26.42-.29.39-.32.36-.36.33-.4.29-.42.25-.44.21-.66.2-.67.12-.69.06h-1.24l-.23.02-.2.02-.19.02-.16.04-.14.05-.13.06-.12.09-.12.1-.1.12-.12.14-.11.16-.12.19-.13.22-.15.24-.54.92-.08.14-.12.12-.13.1-.13.1-.15.06-.15.05-.32.03-.31-.03-.15-.05-.15-.07-.14-.08-.12-.1-.12-.13-.1-.14-.54-.92-.15-.25-.13-.22-.12-.19-.12-.16-.1-.14-.12-.12-.23-.18-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.23-.01-.27-.01H7.1l-.68-.06-.68-.13-.66-.19-.45-.21-.42-.26-.39-.29-.36-.33-.33-.36-.29-.39-.25-.42-.21-.45-.12-.35-.1-.4-.07-.43-.04-.5-.03-.55v-.3L2 13.04V8.33l.01-.45.02-.43.02-.4.03-.38.04-.35.05-.33.06-.3.07-.3.09-.27.1-.25.11-.25.13-.23.34-.48.39-.44.44-.39.48-.34.23-.13.24-.11.26-.1.27-.08.29-.08.3-.06.34-.05.35-.03.37-.04.4-.02.44-.01.45-.02h6.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 9h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 12.5h5.5"
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
            d="M21.99 9.04v4.01l-.01.32-.01.31-.03.56-.05.49-.07.44-.1.4-.12.35-.21.45-.26.42-.29.39-.32.36-.36.33-.4.29-.42.25-.44.21-.66.2-.67.12-.69.06h-1.24l-.23.02-.2.02-.19.02-.16.04-.14.05-.13.06-.12.09-.12.1-.1.12-.12.14-.11.16-.12.19-.13.22-.15.24-.54.92-.08.14-.12.12-.13.1-.13.1-.15.06-.15.05-.32.03-.31-.03-.15-.05-.15-.07-.14-.08-.12-.1-.12-.13-.1-.14-.54-.92-.15-.25-.13-.22-.12-.19-.12-.16-.1-.14-.12-.12-.23-.18-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.23-.01-.27-.01H7.1l-.68-.06-.68-.13-.66-.19-.45-.21-.42-.26-.39-.29-.36-.33-.33-.36-.29-.39-.25-.42-.21-.45-.12-.35-.1-.4-.07-.43-.04-.5-.03-.55v-.3L2 13.04V8.33l.01-.45.02-.43.02-.4.03-.38.04-.35.05-.33.06-.3.07-.3.09-.27.1-.25.11-.25.13-.23.34-.48.39-.44.44-.39.48-.34.23-.13.24-.11.26-.1.27-.08.29-.08.3-.06.34-.05.35-.03.37-.04.4-.02.44-.01.45-.02h6.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 9h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 12.5h5.5"
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
            d="M16.54 2.03a5.74 5.74 0 0 1 5.43 5.84v.46l.01.49v4.54l-.01.31-.03.56-.04.49-.07.44-.1.39-.12.35-.21.45-.25.42-.3.4-.32.35-.36.33-.4.3-.42.25-.44.21-.66.2-.68.12-.68.06-.7-.01h-.3l-.26.02h-.23l-.2.02-.18.03-.16.03-.14.05-.13.07-.23.18-.11.12-.11.14-.12.16-.12.2-.13.2-.14.27-.54.92-.1.14-.11.12-.13.1-.14.1-.15.06-.15.05-.31.03-.32-.03-.15-.05-.14-.07-.14-.08-.13-.1-.11-.13-.1-.14-.54-.92-.15-.25-.13-.21-.12-.2-.11-.16-.11-.14-.11-.12-.12-.1-.12-.08-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.24-.01L8.1 19l-.3-.01h-.68l-.69-.05-.67-.13-.66-.2-.44-.2-.42-.26-.4-.29-.36-.32-.32-.36-.3-.4-.25-.41-.2-.45-.14-.37-.1-.4-.06-.43-.05-.5-.03-.55v-.3L2 13.03v-.72l-.01-.4v-3.1L2 8.32l.01-.46.02-.42.02-.4.03-.38.04-.35.05-.33.06-.31.07-.29.09-.27.1-.26.11-.24.13-.23.34-.48.39-.44.44-.4.48-.33.23-.13.24-.11.26-.1.27-.09.29-.07.3-.06.34-.05.35-.04.37-.03.4-.02.43-.02h.46l.5-.02h6.34l.5.01.45.01z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.25 9c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9"
            fill="currentColor"
          />
          <path
            d="M7.25 12.5c0-.41.34-.75.75-.75h5.5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
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
            d="M16.54 2.03a5.74 5.74 0 0 1 5.43 5.84v.46l.01.49v4.54l-.01.31-.03.56-.04.49-.07.44-.1.39-.12.35-.21.45-.25.42-.3.4-.32.35-.36.33-.4.3-.42.25-.44.21-.66.2-.68.12-.68.06-.7-.01h-.3l-.26.02h-.23l-.2.02-.18.03-.16.03-.14.05-.13.07-.23.18-.11.12-.11.14-.12.16-.12.2-.13.2-.14.27-.54.92-.1.14-.11.12-.13.1-.14.1-.15.06-.15.05-.31.03-.32-.03-.15-.05-.14-.07-.14-.08-.13-.1-.11-.13-.1-.14-.54-.92-.15-.25-.13-.21-.12-.2-.11-.16-.11-.14-.11-.12-.12-.1-.12-.08-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.24-.01L8.1 19l-.3-.01h-.68l-.69-.05-.67-.13-.66-.2-.44-.2-.42-.26-.4-.29-.36-.32-.32-.36-.3-.4-.25-.41-.2-.45-.14-.37-.1-.4-.06-.43-.05-.5-.03-.55v-.3L2 13.03v-.72l-.01-.4v-3.1L2 8.32l.01-.46.02-.42.02-.4.03-.38.04-.35.05-.33.06-.31.07-.29.09-.27.1-.26.11-.24.13-.23.34-.48.39-.44.44-.4.48-.33.23-.13.24-.11.26-.1.27-.09.29-.07.3-.06.34-.05.35-.04.37-.03.4-.02.43-.02h.46l.5-.02h6.34l.5.01.45.01zM8 11.75a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zM7.25 9c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9"
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

export default IconAiDialogue;
