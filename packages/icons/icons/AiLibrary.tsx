import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLibrary = forwardRef<SVGSVGElement, IconProps>(function IconAiLibrary(
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
            d="M21.28 8.8c.35 1.03.14 2.52-.19 4.99l-.4 3c-.33 2.48-.5 3.72-1.34 4.47s-2.1.74-4.6.74h-3.63m-2.4 0c-2.15 0-3.28-.05-4.07-.74-.85-.75-1.01-1.99-1.34-4.47L2.9 13.8c-.42-3.17-.63-4.75.27-5.78C4.07 7 5.67 7 8.85 7h7.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 4.5H6.54A2.13 2.13 0 0 0 4.44 7m11.7-4.91L15.75 2l-.5-.01H8.74l-.5.01a2 2 0 0 0-1.78 2l.04.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 18H9"
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
            d="M21.28 8.8c.35 1.03.14 2.52-.19 4.99l-.4 3c-.33 2.48-.5 3.72-1.34 4.47s-2.1.74-4.6.74h-5.5c-2.5 0-3.75 0-4.6-.74-.85-.75-1.01-1.99-1.34-4.47L2.9 13.8c-.42-3.17-.63-4.75.27-5.78C4.07 7 5.67 7 8.85 7h7.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.5 4.5H6.54A2.13 2.13 0 0 0 4.44 7m11.7-4.91L15.75 2l-.5-.01H8.74l-.5.01a2 2 0 0 0-1.78 2l.04.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 18H9"
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
            d="M17 7.56c1.66.07 3.4.23 3.85 1.83l.07.25.04.28.03.3v.66l-.02.37-.03.4-.04.42-.05.46-.06.48-.07.52-.07.56-.38 2.9-.06.43-.05.4-.05.39-.06.35-.05.34-.06.3-.06.3-.06.26-.07.25-.08.23-.18.4-.23.35-.27.3-.32.23-.37.18-.42.13-.24.04-.25.04-.27.03-.3.02-.3.02h-.33l-.36.01H7.8l-.33-.01-.32-.02-.29-.02-.27-.03-.25-.04-.24-.05-.42-.12-.37-.18-.32-.24-.27-.3-.23-.34-.18-.4-.08-.23-.07-.25-.06-.27-.06-.28-.06-.31-.05-.34-.06-.35-.05-.39-.05-.4-.06-.44-.38-2.9-.07-.55L3.2 13l-.06-.49-.05-.45-.04-.42-.03-.4-.02-.37v-.66l.03-.3.05-.28.06-.25.08-.24.1-.22.12-.2.15-.2.17-.17.18-.16.2-.13.23-.11.24-.1.26-.08.3-.06.3-.06.34-.04.36-.03.4-.02.42-.01.45-.01h.48l.52-.01h.55l6.01.01h1.55zM8.26 18c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.12 4.73c.76 0 1.85 1.63 1.09 1.63H7.45L7 6.39l-.45.01-.42.02-.4.04-.38.04-.56.1-.54.16.15-.43.22-.4.28-.34.33-.3.37-.23.4-.18.43-.11.46-.04z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.02 2.08c.68.11-.06 1.61-.75 1.61H6.2l.19-.4.24-.34.29-.3.33-.26.37-.2.4-.12.42-.07h6.98l.23.02z"
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
            d="M16.02 2.08c.68.11-.06 1.61-.75 1.61H6.2l.19-.4.24-.34.29-.3.33-.26.37-.2.4-.12.42-.07h6.98l.23.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.12 4.73c.64 0 .7 1.63.06 1.63H7.45L7 6.39l-.45.01-.42.02-.4.04-.38.04-.56.1-.54.16.15-.43.22-.4.28-.34.33-.3.37-.23.4-.18.43-.11.46-.04z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17 7.56c1.66.07 3.4.23 3.85 1.83l.07.25.04.28.03.3v.66l-.02.37-.03.4-.04.42-.05.46-.06.48-.07.52-.07.56-.38 2.9-.06.43-.05.4-.05.39-.06.35-.05.34-.06.3-.06.3-.06.26-.07.25-.08.23-.18.4-.23.35-.27.3-.32.23-.37.18-.42.13-.24.04-.25.04-.27.03-.3.02-.3.02h-.33l-.36.01H7.8l-.33-.01-.32-.02-.29-.02-.27-.03-.25-.04-.24-.05-.42-.12-.37-.18-.32-.24-.27-.3-.23-.34-.18-.4-.08-.23-.07-.25-.06-.27-.06-.28-.06-.31-.05-.34-.06-.35-.05-.39-.05-.4-.06-.44-.38-2.9-.07-.55L3.2 13l-.06-.49-.05-.45-.04-.42-.03-.4-.02-.37v-.66l.03-.3.05-.28.06-.25.08-.24.1-.22.12-.2.15-.2.17-.17.18-.16.2-.13.23-.11.24-.1.26-.08.3-.06.3-.06.34-.04.36-.03.4-.02.42-.01.45-.01h.48l.52-.01h.55l6.01.01h1.55zM8.26 18c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
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

export default IconAiLibrary;
