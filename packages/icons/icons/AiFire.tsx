import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFire = forwardRef<SVGSVGElement, IconProps>(function IconAiFire(
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
            d="M20.07 9.44q.42 1.38.43 2.99m0 .01c0 7.11-6.04 8.89-9.07 8.89a8 8 0 0 1-4.22-1.26m-1.8-1.57C4.3 17.14 3.5 15.19 3.5 12.44a7 7 0 0 1 2.86-5.71c.78-.59 1.77 0 1.87.98l.09.83c.1 1.02 1.03 1.86 1.89 1.3 1.68-1.11 2.29-3.73 2.29-5.18v-.32c0-1.43 1.44-2.35 2.6-1.51q0 0 0 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 17.77c0 2.86 2.49 3.56 3.73 3.56 1.1 0 3.27-.71 3.27-3.56a2.8 2.8 0 0 0-1.16-2.27c-.4-.3-.96-.03-1.1.45-.17.62-.82 1.02-1.15.46-.3-.52-.3-1.28-.3-1.75 0-.63-.64-1.04-1.15-.67a4.8 4.8 0 0 0-2.14 3.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M20.5 12.44c0 7.11-6.04 8.89-9.07 8.89-2.63 0-7.93-1.78-7.93-8.89a7 7 0 0 1 2.86-5.71c.78-.59 1.77 0 1.87.98l.09.83c.1 1.02 1.03 1.86 1.89 1.3 1.68-1.11 2.29-3.73 2.29-5.18v-.32c0-1.43 1.44-2.35 2.6-1.51q0 0 0 0m4.97 6.6q.42 1.4.43 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.5 17.77c0 2.86 2.49 3.56 3.73 3.56 1.1 0 3.27-.71 3.27-3.56a2.8 2.8 0 0 0-1.16-2.27c-.4-.3-.96-.03-1.1.45-.17.62-.82 1.02-1.15.46-.3-.52-.3-1.28-.3-1.75 0-.63-.64-1.04-1.15-.67a4.8 4.8 0 0 0-2.14 3.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M14.92 3.13c2.54 1.71 3.98 3.2 4.92 6.11l.27.84.11.44.1.45.07.46.05.47.04.48v1.03l-.04.51-.05.5-.08.47-.1.46-.11.43-.14.42-.15.4-.17.38-.18.36-.2.35-.21.33-.23.3-.24.3-.5.55-.54.48-.58.43-.59.37-.6.31-.63.27-.61.22-.61.18-.6.13-.23.04-.2.04-.18.03-.13.02-.11.02-.09.01-.12.01h-.21l-.13.01-.5.01-.52-.02-.57-.07-.61-.12-.64-.18-.66-.24-.66-.3-.65-.39-.32-.22-.32-.24-.3-.26-.3-.28-.29-.3-.27-.33-.26-.35-.24-.38-.23-.4-.21-.42-.2-.45-.17-.48-.15-.5-.12-.54-.1-.56-.07-.59-.05-.62-.01-.65v-.42l.04-.42.06-.41.08-.4.1-.4.13-.4.15-.38.17-.38.2-.36.22-.35.23-.34.26-.32.27-.31.3-.3.31-.27.34-.26.14-.1.15-.07.16-.04.15-.02h.15l.15.02.14.05.14.06.13.09.12.1.11.11.1.13.08.15.07.15.05.17.03.18.09.83.07.37.14.35.2.29.12.13.12.1.14.1.14.07.15.04.16.03h.15l.16-.03.17-.06.16-.09.3-.22.28-.25.26-.29.23-.3.21-.33.2-.34.16-.36.14-.36.24-.73.08-.37.08-.35.05-.35.04-.32.02-.31V3.26l.04-.26.09-.22.14-.2.17-.14.2-.1.23-.03.24.02.24.1.53.33z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.5 18.19c0 2.62 2.11 3.43 3.42 3.55.44-.06 0 .1 1.41-.19 1.04-.37 2.17-1.3 2.17-3.36 0-1.3-.82-2.1-1.46-2.47-.2-.11-.42.03-.44.26-.06.72-.75 1.29-1.22.74a2.7 2.7 0 0 1-.59-1.64v-.59c0-.35-.35-.59-.66-.4-1.13.66-2.63 2.06-2.63 4.1"
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
            d="M14.93 3.14c2.54 1.71 3.95 3.2 4.92 6.1l.28.84.1.44.1.45.08.46.05.47.03.48.01.49v.54l-.04.51-.06.5-.08.47-.1.45-.1.44-.14.42-.16.4-.16.38-.19.36-.2.35-.2.33-.23.3-.24.3-.5.55-.55.48-.57.43-.6.36-.6.32-.62.27-.62.22-.6.18-.6.13.38-.17.39-.23.36-.3.17-.16.16-.2.15-.2.14-.24.12-.26.1-.27.08-.3.06-.32.04-.35.01-.37-.03-.38-.08-.37-.12-.35-.17-.33-.21-.3-.25-.29-.28-.24-.32-.21-.07-.03h-.08l-.14.03-.1.1-.06.16-.04.26-.1.24-.14.2-.16.15-.19.09-.2.02-.09-.02-.1-.05-.09-.06-.09-.09-.14-.19-.13-.2-.1-.22-.09-.22-.06-.22-.04-.2-.03-.2v-.78l-.02-.13-.05-.1-.07-.1-.09-.07-.1-.05-.1-.02-.12.02-.12.05-.43.28-.45.36-.45.41-.4.49-.2.26-.16.28-.16.3-.13.31-.1.33-.08.34-.05.36-.02.38.03.47.07.43.1.39.15.35.18.32.21.28.23.25.26.22.26.2.28.15.28.14.3.11.27.1.28.06.27.05.25.03h-.49l-.52-.01-.58-.07-.6-.12-.65-.18-.66-.24-.66-.31-.65-.38-.32-.22-.31-.24-.3-.26-.3-.28-.29-.3-.27-.33-.26-.35-.25-.38-.23-.4-.2-.42-.2-.45-.17-.48-.15-.5-.13-.54-.1-.56-.07-.6-.04-.61-.02-.65.01-.42.03-.42.06-.41.08-.41.1-.4.14-.4.15-.37.17-.38.2-.36.21-.35.24-.34.25-.32.28-.31.3-.3.3-.27.34-.26.15-.1.15-.07.15-.04.15-.02h.16l.15.02.14.05.14.06.13.08.12.1.1.12.1.13.09.15.06.15.05.17.03.18.1.83.07.37.14.34.2.3.11.12.13.11.14.1.14.06.15.05.15.03h.16l.16-.03.16-.06.16-.1.3-.21.29-.26.25-.28.24-.3.2-.33.2-.34.16-.36.15-.36.23-.73.09-.37.07-.35.05-.35.04-.33.02-.3.01-.3v-1.8l.03-.26.1-.22.13-.2.18-.14.2-.1.23-.03.23.02.24.1.54.33z"
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

export default IconAiFire;
