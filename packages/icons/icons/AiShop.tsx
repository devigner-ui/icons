import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiShop = forwardRef<SVGSVGElement, IconProps>(function IconAiShop(
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
            d="M15.15 8.52a3.17 3.17 0 1 1-6.3 0L9.5 2h5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.9 7.96-.12 1.29a3.06 3.06 0 1 1-6.05-.9l.6-3c.18-.89.27-1.33.45-1.7a3 3 0 0 1 1.89-1.54C6.06 2 6.5 2 7.42 2H9.5l-.35 3.57"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.39 2H14.5l.72 7.25a3.06 3.06 0 0 0 6.1-.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.75 21.5a.75.75 0 0 0 1.5 0zm5 0a.75.75 0 0 0 1.5 0zm0-5.3.38-.65zm.55.55-.65.38zm-4.6 0 .65.38zm.55-.55.38.65zm2.25 5.05h-1v1.5h1zM4.25 14v-3h-1.5v3zm15.5-3v3h1.5v-3zM11.5 21.25c-1.9 0-3.26 0-4.29-.14-1-.13-1.58-.39-2-.81l-1.07 1.06c.75.75 1.7 1.08 2.87 1.24 1.15.15 2.63.15 4.49.15zM2.75 14c0 1.86 0 3.34.15 4.49a4.7 4.7 0 0 0 1.24 2.87L5.2 20.3c-.42-.42-.67-1-.81-2.01A36 36 0 0 1 4.25 14zm9.75 8.75c1.86 0 3.34 0 4.49-.15a4.7 4.7 0 0 0 2.87-1.24L18.8 20.3c-.43.42-1 .68-2.01.81-1.03.14-2.38.14-4.29.14zM19.75 14c0 1.9 0 3.26-.14 4.29-.13 1-.39 1.59-.81 2l1.06 1.07a4.7 4.7 0 0 0 1.24-2.87c.15-1.15.15-2.63.15-4.49zm-9.5 7.5v-3h-1.5v3zm3.5-3v3h1.5v-3zM12 16.75q.7 0 1.03.02c.22.02.3.06.35.08l.74-1.3a2 2 0 0 0-.96-.27q-.47-.04-1.16-.03zm3.25 1.75q0-.68-.03-1.16-.03-.5-.27-.96l-1.3.75c.02.04.06.12.08.34.02.24.02.55.02 1.03zm-1.87-1.65q.16.1.27.28l1.3-.75q-.3-.53-.82-.83zm-3.13 1.65q0-.7.02-1.03c.02-.22.06-.3.08-.34l-1.3-.75c-.18.3-.24.63-.27.96q-.04.48-.03 1.16zM12 15.25q-.68 0-1.16.03-.5.03-.96.27l.74 1.3a1 1 0 0 1 .35-.08c.24-.02.55-.02 1.03-.02zm-1.65 1.88q.1-.18.28-.28l-.76-1.3q-.52.3-.82.83z"
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
            d="M15.15 8.52a3.17 3.17 0 1 1-6.3 0L9.5 2h5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33 5.35c.18-.89.27-1.33.45-1.7a3 3 0 0 1 1.89-1.54C6.06 2 6.5 2 7.42 2H9.5l-.72 7.25a3.06 3.06 0 1 1-6.05-.9z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16.39 2H14.5l.72 7.25a3.06 3.06 0 0 0 6.1-.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.75 21.5a.75.75 0 0 0 1.5 0zm5 0a.75.75 0 0 0 1.5 0zm0-5.3.38-.65zm.55.55-.65.38zm-4.6 0 .65.38zm.55-.55.38.65zm2.25 5.05h-1v1.5h1zM4.25 14v-3h-1.5v3zm15.5-3v3h1.5v-3zM11.5 21.25c-1.9 0-3.26 0-4.29-.14-1-.13-1.58-.39-2-.81l-1.07 1.06c.75.75 1.7 1.08 2.87 1.24 1.15.15 2.63.15 4.49.15zM2.75 14c0 1.86 0 3.34.15 4.49a4.7 4.7 0 0 0 1.24 2.87L5.2 20.3c-.42-.42-.67-1-.81-2.01A36 36 0 0 1 4.25 14zm9.75 8.75c1.86 0 3.34 0 4.49-.15a4.7 4.7 0 0 0 2.87-1.24L18.8 20.3c-.43.42-1 .68-2.01.81-1.03.14-2.38.14-4.29.14zM19.75 14c0 1.9 0 3.26-.14 4.29-.13 1-.39 1.59-.81 2l1.06 1.07a4.7 4.7 0 0 0 1.24-2.87c.15-1.15.15-2.63.15-4.49zm-9.5 7.5v-3h-1.5v3zm3.5-3v3h1.5v-3zM12 16.75q.7 0 1.03.02c.22.02.3.06.35.08l.74-1.3a2 2 0 0 0-.96-.27q-.47-.04-1.16-.03zm3.25 1.75q0-.68-.03-1.16-.03-.5-.27-.96l-1.3.75c.02.04.06.12.08.34.02.24.02.55.02 1.03zm-1.87-1.65q.16.1.27.28l1.3-.75q-.3-.53-.82-.83zm-3.13 1.65q0-.7.02-1.03c.02-.22.06-.3.08-.34l-1.3-.75c-.18.3-.24.63-.27.96q-.04.48-.03 1.16zM12 15.25q-.68 0-1.16.03-.5.03-.96.27l.74 1.3a1 1 0 0 1 .35-.08c.24-.02.55-.02 1.03-.02zm-1.65 1.88q.1-.18.28-.28l-.76-1.3q-.52.3-.82.83z"
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
            d="M17.5 2c3.03 0 3.89 3.73 3.82 6.76l-.01.41-.07.4-.11.4-.17.36-.21.35-.26.31-.3.29-.34.24-.36.19-.39.13-.4.09-.4.03-.4-.02-.4-.07-.4-.13-.37-.19-.34-.22-.3-.27-.27-.3-.22-.35-.18-.36-.13-.4-.07-.4-.07-.73.01.45-.04.44-.11.42-.16.4-.22.38-.27.35-.32.3-.36.27-.4.21-.4.15-.43.1-.44.03-.43-.03-.43-.08-.41-.15-.4-.2-.37-.27-.32-.3-.27-.34-.22-.38-.17-.4-.1-.42L8.82 9v-.45l-.05.68-.08.4-.13.4-.17.36-.23.34-.26.3-.3.28-.34.22-.38.19-.4.13-.4.07-.4.02-.4-.03-.4-.09-.38-.13-.36-.2-.34-.23-.3-.29-.27-.31-.2-.35-.17-.37-.12-.39-.06-.4-.01-.4.05-.42.6-2.98.06-.32.06-.27.05-.25.05-.21.05-.19.06-.17.12-.28.16-.28.18-.26.21-.23.23-.21.25-.19.28-.16.29-.13.3-.1.3-.06.18-.02h.2L6.57 2z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.27 13.5q1.24-.01 2.23-.58V14c0 3.77 0 5.66-1.17 6.83-.94.94-2.35 1.13-4.83 1.16V18.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2s-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75V22c-2.48-.04-3.89-.23-4.83-1.17C3.5 19.66 3.5 17.77 3.5 14v-1.08a4.5 4.5 0 0 0 5.34-.65 4.64 4.64 0 0 0 6.32 0 4.6 4.6 0 0 0 3.1 1.23"
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
            d="M17.5 2c3.03 0 3.89 3.73 3.82 6.76l-.01.41-.07.4-.11.4-.17.36-.21.35-.26.31-.3.29-.34.24-.36.19-.39.13-.4.09-.4.03-.4-.02-.4-.07-.4-.13-.37-.19-.34-.22-.3-.27-.27-.3-.22-.35-.18-.36-.13-.4-.07-.4-.07-.73.01.45-.04.44-.11.42-.16.4-.22.38-.27.35-.32.3-.36.27-.4.21-.4.15-.43.1-.44.03-.43-.03-.43-.08-.41-.15-.4-.2-.37-.27-.32-.3-.27-.34-.22-.38-.17-.4-.1-.42L8.82 9v-.45l-.05.68-.08.4-.13.4-.17.36-.23.34-.26.3-.3.28-.34.22-.38.19-.4.13-.4.07-.4.02-.4-.03-.4-.09-.38-.13-.36-.2-.34-.23-.3-.29-.27-.31-.2-.35-.17-.37-.12-.39-.06-.4-.01-.4.05-.42.6-2.98.06-.32.06-.27.05-.25.05-.21.05-.19.06-.17.12-.28.16-.28.18-.26.21-.23.23-.21.25-.19.28-.16.29-.13.3-.1.3-.06.18-.02h.2L6.57 2z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.27 13.5q1.24-.01 2.23-.58V14c0 3.77 0 5.66-1.17 6.83-.94.94-2.35 1.13-4.83 1.16V18.5c0-.93 0-1.4-.2-1.75a1.5 1.5 0 0 0-.55-.55c-.35-.2-.82-.2-1.75-.2s-1.4 0-1.75.2a1.5 1.5 0 0 0-.55.55c-.2.35-.2.82-.2 1.75V22c-2.48-.04-3.89-.23-4.83-1.17C3.5 19.66 3.5 17.77 3.5 14v-1.08a4.5 4.5 0 0 0 5.34-.65 4.64 4.64 0 0 0 6.32 0 4.6 4.6 0 0 0 3.1 1.23"
            fill="currentColor"
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

export default IconAiShop;
