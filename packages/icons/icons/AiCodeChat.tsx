import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCodeChat = forwardRef<SVGSVGElement, IconProps>(function IconAiCodeChat(
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
            d="M21.97 7.88v.46l.02.49v4.22l-.01.32-.01.31-.03.56-.05.49-.07.44-.1.4-.12.35-.21.45-.26.42-.29.39-.32.36-.36.33-.4.29-.42.25-.44.21-.66.2-.67.12-.69.06h-1.24l-.23.02-.2.02-.19.02-.16.04-.14.05-.13.06-.12.09-.12.1-.1.12-.12.14-.11.16-.12.19-.13.22-.15.24-.54.92-.08.14-.12.12-.13.1-.13.1-.15.06-.15.05-.32.03-.31-.03-.15-.05-.15-.07-.14-.08-.12-.1-.12-.13-.1-.14-.54-.92-.15-.25-.13-.22-.12-.19-.12-.16-.1-.14-.12-.12-.23-.18-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.23-.01-.27-.01H7.1l-.68-.06-.68-.13-.66-.19-.45-.21-.42-.26-.39-.29-.36-.33-.33-.36-.29-.39-.25-.42-.21-.45-.12-.35-.1-.4-.07-.43-.04-.5-.03-.55v-.3L2 13.04V8.33l.01-.45.02-.43.02-.4.03-.38.04-.35.05-.33.06-.3.07-.3.09-.27.1-.25.11-.25.13-.23.34-.48.39-.44.44-.39.48-.34.23-.13.24-.11.26-.1.27-.08.29-.08.3-.06.34-.05.35-.03.37-.04.4-.02.44-.01.45-.02h7.34l.45.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m15.5 7.83.17.17c1.33 1.33 2 2 2 2.83s-.67 1.5-2 2.83l-.17.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m13.3 6-.96 3.57m-.62 2.32-1.02 3.77"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 7.83 8.33 8c-1.33 1.33-2 2-2 2.83s.67 1.5 2 2.83l.17.17"
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
            d="M21.97 7.88v.46l.02.49v4.22l-.01.32-.01.31-.03.56-.05.49-.07.44-.1.4-.12.35-.21.45-.26.42-.29.39-.32.36-.36.33-.4.29-.42.25-.44.21-.66.2-.67.12-.69.06h-1.24l-.23.02-.2.02-.19.02-.16.04-.14.05-.13.06-.12.09-.12.1-.1.12-.12.14-.11.16-.12.19-.13.22-.15.24-.54.92-.08.14-.12.12-.13.1-.13.1-.15.06-.15.05-.32.03-.31-.03-.15-.05-.15-.07-.14-.08-.12-.1-.12-.13-.1-.14-.54-.92-.15-.25-.13-.22-.12-.19-.12-.16-.1-.14-.12-.12-.23-.18-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.23-.01-.27-.01H7.1l-.68-.06-.68-.13-.66-.19-.45-.21-.42-.26-.39-.29-.36-.33-.33-.36-.29-.39-.25-.42-.21-.45-.12-.35-.1-.4-.07-.43-.04-.5-.03-.55v-.3L2 13.04V8.33l.01-.45.02-.43.02-.4.03-.38.04-.35.05-.33.06-.3.07-.3.09-.27.1-.25.11-.25.13-.23.34-.48.39-.44.44-.39.48-.34.23-.13.24-.11.26-.1.27-.08.29-.08.3-.06.34-.05.35-.03.37-.04.4-.02.44-.01.45-.02h7.34l.45.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.5 7.83.17.17c1.33 1.33 2 2 2 2.83s-.67 1.5-2 2.83l-.17.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.3 6 12 10.83l-1.3 4.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.5 7.83 8.33 8c-1.33 1.33-2 2-2 2.83s.67 1.5 2 2.83l.17.17"
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
            d="M16.11 2.03c3.23.14 5.86 2.62 5.86 5.85v.46l.02.49v4.22l-.01.32-.01.31-.03.56-.05.49-.07.44-.1.4-.12.35-.21.45-.26.42-.29.39-.32.36-.36.33-.4.29-.42.25-.44.21-.66.2-.67.12-.69.06h-1.24l-.23.02-.2.02-.19.02-.16.04-.14.05-.13.06-.12.09-.12.1-.1.12-.12.14-.11.16-.12.19-.13.22-.15.24-.54.92-.08.14-.12.12-.13.1-.13.1-.15.06-.15.05-.32.03-.31-.03-.15-.05-.15-.07-.14-.08-.12-.1-.12-.13-.1-.14-.54-.92-.15-.25-.13-.22-.12-.19-.12-.16-.1-.14-.12-.12-.23-.18-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.23-.01-.27-.01H7.1l-.68-.06-.68-.13-.66-.19-.45-.21-.42-.26-.39-.29-.36-.33-.33-.36-.29-.39-.25-.42-.21-.45-.12-.35-.1-.4-.07-.43-.04-.5-.03-.55v-.3L2 13.04V8.33l.01-.45.02-.43.02-.4.03-.38.04-.35.05-.33.06-.3.07-.3.09-.27.1-.25.11-.25.13-.23.34-.48.39-.44.44-.39.48-.34.23-.13.24-.11.26-.1.27-.08.29-.08.3-.06.34-.05.35-.03.37-.04.4-.02.44-.01.45-.02h7.34z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.27 6.83a.83.83 0 0 1 1.16 0l.2.19.03.04q1.07 1.04 1.68 1.8a3 3 0 0 1 .72 1.85 3 3 0 0 1-.72 1.85c-.4.53-.98 1.1-1.68 1.8l-.23.24a.83.83 0 0 1-1.16-1.17l.19-.19a18 18 0 0 0 1.57-1.68c.31-.4.38-.64.38-.85s-.07-.44-.38-.84a18 18 0 0 0-1.57-1.68l-.2-.2a.83.83 0 0 1 0-1.16"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13.64 4.6c.44.12.7.57.58 1.01l-2.85 10.63a.83.83 0 0 1-1.59-.43L12.63 5.2a.8.8 0 0 1 1-.59"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.73 6.83a.83.83 0 0 0-1.16 0l-.2.19-.03.04Q6.27 8.1 5.66 8.86a3 3 0 0 0-.72 1.85 3 3 0 0 0 .72 1.85c.4.53.98 1.1 1.68 1.8l.23.24a.82.82 0 1 0 1.16-1.17l-.19-.19a20 20 0 0 1-1.57-1.68c-.31-.4-.38-.64-.38-.85s.07-.44.38-.84c.32-.43.82-.93 1.57-1.68l.2-.2a.83.83 0 0 0 0-1.16"
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
            d="M16.11 2.03c3.23.14 5.86 2.62 5.86 5.85v.46l.02.49v4.22l-.01.32-.01.31-.03.56-.05.49-.07.44-.1.4-.12.35-.21.45-.26.42-.29.39-.32.36-.36.33-.4.29-.42.25-.44.21-.66.2-.67.12-.69.06h-1.24l-.23.02-.2.02-.19.02-.16.04-.14.05-.13.06-.12.09-.12.1-.1.12-.12.14-.11.16-.12.19-.13.22-.15.24-.54.92-.08.14-.12.12-.13.1-.13.1-.15.06-.15.05-.32.03-.31-.03-.15-.05-.15-.07-.14-.08-.12-.1-.12-.13-.1-.14-.54-.92-.15-.25-.13-.22-.12-.19-.12-.16-.1-.14-.12-.12-.23-.18-.13-.07-.14-.05-.16-.03-.18-.03-.2-.01-.23-.01-.27-.01H7.1l-.68-.06-.68-.13-.66-.19-.45-.21-.42-.26-.39-.29-.36-.33-.33-.36-.29-.39-.25-.42-.21-.45-.12-.35-.1-.4-.07-.43-.04-.5-.03-.55v-.3L2 13.04V8.33l.01-.45.02-.43.02-.4.03-.38.04-.35.05-.33.06-.3.07-.3.09-.27.1-.25.11-.25.13-.23.34-.48.39-.44.44-.39.48-.34.23-.13.24-.11.26-.1.27-.08.29-.08.3-.06.34-.05.35-.03.37-.04.4-.02.44-.01.45-.02h7.34zM14.96 7.3a.76.76 0 0 1 1.06.01l.2.2q.97.95 1.54 1.65c.38.5.65 1.04.65 1.68s-.27 1.18-.65 1.68q-.57.7-1.53 1.64l-.21.21a.75.75 0 1 1-1.06-1.06l.17-.17c.68-.68 1.14-1.14 1.44-1.53.28-.37.34-.59.34-.77s-.06-.4-.34-.77c-.3-.39-.76-.85-1.44-1.53l-.17-.17a.75.75 0 0 1 0-1.06m-.95-1.1a.75.75 0 1 0-1.45-.38l-2.59 9.66a.75.75 0 1 0 1.45.38zM9.03 7.3c.3.3.3.78 0 1.07l-.17.17c-.68.68-1.14 1.14-1.44 1.53-.28.37-.34.59-.34.77s.06.4.34.77c.3.39.76.85 1.44 1.53l.17.17a.75.75 0 0 1-1.06 1.06l-.17-.17-.04-.04a19 19 0 0 1-1.53-1.64 2.7 2.7 0 0 1-.65-1.68c0-.64.27-1.18.65-1.68.37-.48.9-1 1.53-1.64l.04-.04.17-.17c.3-.3.77-.3 1.06 0"
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

export default IconAiCodeChat;
