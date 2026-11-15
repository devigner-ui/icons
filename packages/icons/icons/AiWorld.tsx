import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWorld = forwardRef<SVGSVGElement, IconProps>(function IconAiWorld(
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
            d="M15.35 2.58A10 10 0 0 0 4.08 18.1m1.68 1.7A10 10 0 0 0 21.42 8.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 4.71c.78.71 2.39 2.65 2.57 4.74.18 1.95 1.47 3.53 3.43 3.55.75 0 1.52-.54 1.52-1.3q0-.35-.1-.68c-.09-.3-.1-.66.08-1.02.61-1.26 1.8-1.6 2.76-2.28q.4-.28.68-.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 13c-.33.93-.56 3.38-4.28 3.41 0 0-3.3 0-4.28 1.87a4.2 4.2 0 0 0 0 3.72"
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
            d="M15.35 2.58a10 10 0 1 0 6.07 6.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 4.71c.78.71 2.39 2.65 2.57 4.74.18 1.95 1.47 3.53 3.43 3.55.75 0 1.52-.54 1.52-1.3q0-.35-.1-.68c-.09-.3-.1-.66.08-1.02.61-1.26 1.8-1.6 2.76-2.28q.4-.28.68-.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 13c-.33.93-.56 3.38-4.28 3.41 0 0-3.3 0-4.28 1.87a4.2 4.2 0 0 0 0 3.72"
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
            d="M15.44 2.61c3.1 1.08 4.96 2.82 5.96 5.95l.15.47.14.47.11.49.09.49.06.5.04.5.02.52-.02.52-.04.5-.06.5-.09.5-.11.48-.14.48-.15.46-.18.45-.2.45-.22.43-.24.42-.26.4-.28.4-.3.37-.31.37-.33.34-.35.34-.36.3-.38.3-.4.29-.4.26-.42.24-.43.22-.44.2-.46.18-.46.15-.48.14-.48.11-.5.09-.5.06-.5.04L12 22h-.51l-.5-.05-.5-.06-.5-.09-.49-.11-.47-.14-.47-.15-.45-.18-.44-.2-.43-.22-.42-.24-.4-.26-.4-.28-.38-.3-.36-.31-.35-.34-.33-.34-.31-.37-.3-.37-.28-.4-.26-.4-.24-.42-.22-.43-.2-.44-.18-.46-.16-.46-.13-.48-.11-.48-.1-.5-.06-.5-.04-.5v-1.03l.04-.51.07-.5.08-.5.12-.48.13-.47.16-.47.18-.45.2-.45.22-.43.24-.42.26-.4.28-.4.3-.37.3-.36.34-.35.35-.33.36-.32.38-.3.39-.27.4-.26.43-.24.43-.22.44-.2.45-.18.47-.16.47-.14.49-.1.49-.1.5-.06.5-.04L12 2l.52.01.5.04.5.06.5.1.48.1.48.14z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.71 2.69c1.67.59 2.63 3.08 1.37 4.34l-.23.23-.28.22-.3.23-.37.24-.38.23-.77.45-.36.27-.33.3-.3.36-.14.2-.12.23-.09.27-.04.26v.25l.05.24.08.34.02.35-.03.27-.1.25-.15.22-.2.2-.22.15-.26.11-.27.07L12 13l-.36-.02-.34-.06-.33-.09-.3-.12-.3-.15-.27-.18-.25-.2-.23-.23-.2-.25-.2-.27-.16-.3-.15-.3-.12-.33-.1-.34-.06-.35-.05-.36-.05-.39-.09-.39-.1-.37-.14-.37-.15-.36-.17-.35-.37-.66-.4-.6-.2-.26-.2-.25-.2-.22-.18-.2-.17-.18L6 4.7l-.43-.37.68-.53.71-.46.74-.39.77-.33.78-.26.8-.19.8-.13.83-.06.82.01.81.07.81.15.8.2z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13.44 18.28c.98-1.87 4.28-1.87 4.28-1.87 3.43-.03 3.9-2.12 4.2-3.17a10 10 0 0 1-8.53 8.66c-.32-.67-.7-2.2.05-3.62"
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
            d="M13.44 18.28c.98-1.87 4.28-1.87 4.28-1.87 3.43-.03 3.9-2.12 4.2-3.17a10 10 0 0 1-8.53 8.66c-.32-.67-.7-2.2.05-3.62"
            fill="currentColor"
          />
          <path
            d="M17.47 8.7c1.19-.91 3.31-1.84 3.81-.43l.3.84.21.86.08.44.06.44.05.44.02.45-.25.01-.25.05-.23.1-.21.12-.2.16-.15.18-.14.22-.09.24-.01.07-.12.4-.13.35-.15.3-.2.28-.1.1-.15.12-.18.12-.23.1-.28.1-.34.08-.4.05-.24.02h-.3l-.52.03-.52.06-.51.08-.5.11-.42.12-.46.15-.47.2-.49.25-.47.31-.22.18-.22.2-.2.21-.2.24-.17.25-.16.28-.23.52-.18.54-.12.55-.07.57v.56l.04.57.1.56.16.55-.72-.04-.72-.1-.7-.14-.68-.19-.67-.23-.64-.28-.62-.33-.6-.37-.57-.4-.54-.45-.5-.5-.48-.51-.44-.56-.4-.6-.36-.61-.32-.66-.27-.67-.22-.69-.16-.69-.12-.7-.06-.7-.02-.7.03-.7.09-.7.13-.7.18-.67.22-.67.28-.65.32-.63.37-.61.41-.59.46-.56.1.09.4.35.35.34.32.38.3.39.27.41.3.51.25.55.18.57.11.59.06.46.1.46.12.45.17.44.2.42.22.4.26.4.3.35.32.33.36.3.4.26.41.22.45.18.48.13.51.09.54.03.27-.01.27-.03.27-.06.26-.08.25-.1.24-.12.23-.14.2-.16.24-.2.2-.22.18-.25.15-.26.12-.28.08-.28.06-.3.02-.3-.05-.57-.1-.52.14-.21.16-.2.19-.16.2-.15.29-.17.32-.19.09-.05.2-.11.22-.13.46-.3.16-.12z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.71 2.69c1.67.59 2.63 3.08 1.37 4.34l-.23.23-.28.22-.3.23-.37.24-.38.23-.77.45-.36.27-.33.3-.3.36-.14.2-.12.23-.09.27-.04.26v.25l.05.24.08.34.02.35-.03.27-.1.25-.15.22-.2.2-.22.15-.26.11-.27.07L12 13l-.36-.02-.34-.06-.33-.09-.3-.12-.3-.15-.27-.18-.25-.2-.23-.23-.2-.25-.2-.27-.16-.3-.15-.3-.12-.33-.1-.34-.06-.35-.05-.36-.05-.39-.09-.39-.1-.37-.14-.37-.15-.36-.17-.35-.37-.66-.4-.6-.2-.26-.2-.25-.2-.22-.18-.2-.17-.18L6 4.7l-.43-.37.68-.53.71-.46.74-.39.77-.33.78-.26.8-.19.8-.13.83-.06.82.01.81.07.81.15.8.2z"
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

export default IconAiWorld;
