import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiNoteGenerator = forwardRef<SVGSVGElement, IconProps>(function IconAiNoteGenerator(
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
            d="M8 2v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M7 11h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M7 15h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="m20.99 9.03.01.62V16m-6 6H9c-5 0-6-2.06-6-6.18v-.8m0-2.4V9.64c0-4.7 1.67-5.96 5-6.15h6.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m21 16-6 6v-3q0-3 3-3z"
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
            d="M8 2v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 11h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 15h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M15 22H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15h6.7m6.29 5.53.01.62V16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m21 16-6 6v-3q0-3 3-3z"
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
            d="M15.37 3.5c3.05 0 6.13 1.82 6.13 4.87v7.45l-.01.11-.03.11-.06.1-.08.11-5.51 5.55-.1.09-.12.06-.12.04-.13.01H7.37l-.5-.02-.48-.08-.47-.12-.45-.16-.42-.2-.4-.25-.38-.28-.34-.32-.32-.34-.28-.38-.24-.4-.2-.42-.17-.45-.12-.47-.08-.48-.02-.5V8.37l.02-.5.08-.48.12-.47.16-.45.2-.42.25-.4.28-.38.32-.35.34-.31.38-.28.4-.24.42-.2.45-.17.47-.12.48-.08.5-.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.29 6.29a.75.75 0 0 1-.75-.75V2.75a.75.75 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76"
            fill="currentColor"
          />
          <path
            d="M14.78 12.71H7.36a.75.75 0 1 1 0-1.5h7.42a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
          <path
            d="M12 16.42H7.36a.75.75 0 1 1 0-1.5H12a.75.75 0 1 1 0 1.5"
            fill="currentColor"
          />
          <path
            d="M21.5 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
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
            d="M8.29 6.29a.75.75 0 0 1-.75-.75V2.75a.75.75 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76"
            fill="currentColor"
          />
          <path
            d="M21.5 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
            fill="currentColor"
          />
          <path
            d="M21.5 15.82q0 .23-.18.43l-5.51 5.55q-.2.2-.47.2a.65.65 0 0 1-.65-.64v-3.5a2.73 2.73 0 0 1 2.76-2.67l3.4-.01c.39 0 .65.31.65.64"
            fill="currentColor"
          />
          <path
            d="M17.1 7.28c1.37-1.11 4.4-.68 4.4 1.09v4.31l-.02.2-.06.19-.09.17-.12.15-.15.12-.17.1-.19.05-.2.02-3.05.01-.43.02-.43.06-.4.1-.4.15-.37.17-.35.21-.33.24-.3.27-.28.3-.24.32-.21.34-.19.37-.14.38-.1.4-.07.41-.02.43V21l-.02.2-.06.19-.09.17-.12.15-.15.12-.17.1-.19.05-.2.02H7.37l-.5-.03-.48-.07-.47-.12-.45-.16-.42-.2-.4-.25-.38-.28-.35-.32-.3-.34-.29-.38-.24-.4-.2-.43-.17-.44-.12-.47-.08-.48-.02-.5V8.37l.02-.42.04-.34.18-.76.05-.13.06-.14.07-.19.09-.18.27-.47.03-.04.13-.2.15-.18.2-.24.22-.22.32-.28.2-.15.04-.02.25-.09.25-.02.25.04.23.1.2.16.15.2.1.23.03.14v.37l.03.33.07.31.11.3.15.28.2.25.22.22.26.2.3.15.33.13.35.07h.01l.23.01.23-.01h.01l.2-.03.2-.05.05-.02.22-.1h.02l.12-.07.26-.17.24-.2.2-.24.17-.26.14-.29.1-.3.07-.32.02-.32V4.5l.02-.2.06-.2.1-.16.11-.15.15-.12.17-.1.19-.05.2-.02h.92l.2.02.2.06.16.09.15.12.12.15.1.17.05.19.02.2v1.04l.01.24.04.23.06.23.08.22.11.2.13.2.15.19.17.16.18.15.2.13.2.1.23.1.22.05.24.04.23.01.24-.01.22-.04.2-.05.2-.08.19-.09.18-.11zm-5.97 8.63a.7.7 0 0 1-.7.51H6.79l-.13-.02a.73.73 0 0 1-.62-.73c0-.42.33-.76.75-.76h3.64c.41 0 .75.34.75.76zm2.78-3.71a.7.7 0 0 1-.7.51H6.79l-.13-.02a.73.73 0 0 1-.62-.73c0-.42.33-.76.75-.76h6.42c.42 0 .75.34.75.76z"
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

export default IconAiNoteGenerator;
