import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiClock = forwardRef<SVGSVGElement, IconProps>(function IconAiClock(
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
            d="M21.42 8.65Q22 10.23 22 12m0 0a10 10 0 0 1-16.24 7.81m-1.68-1.7A10 10 0 0 1 15.35 2.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m15.71 15.18-3.1-1.85a2.2 2.2 0 0 1-.98-1.72v-4.1"
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
            d="M22 12a10 10 0 1 1-6.65-9.42m6.07 6.07Q22 10.23 22 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.71 15.18-3.1-1.85a2.2 2.2 0 0 1-.98-1.72v-4.1"
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
            d="M15.44 2.6a8.4 8.4 0 0 1 5.96 5.96l.15.47.14.47.11.48.09.5.06.5.04.5.01.52v.51l-.05.51-.06.5-.09.5-.11.48-.14.47-.15.47-.18.45-.2.45-.22.43-.25.42-.26.4-.27.4-.3.37-.32.36-.33.35-.34.33-.37.32-.37.3-.4.27-.4.26-.42.24-.43.23-.45.2-.45.17-.46.16-.48.14-.48.1-.5.1-.5.06-.5.04L12 22l-.51-.01-.51-.04-.5-.07-.5-.08-.48-.12-.47-.13-.47-.16-.45-.18-.45-.2-.43-.22-.42-.24-.4-.26-.4-.28-.37-.3-.36-.3-.35-.34-.33-.35-.32-.36-.3-.38-.27-.39-.26-.4-.24-.43-.22-.43-.2-.44-.18-.45-.16-.47-.14-.47-.1-.49-.1-.49-.06-.5-.04-.5L2 12l.01-.52.04-.5.06-.5.1-.5.1-.48.14-.48.16-.46.18-.46.2-.44.22-.43.24-.42.26-.4.28-.4.3-.37.3-.37.34-.34.35-.34.36-.3.38-.3.39-.29.4-.26.42-.24.43-.22.45-.2.45-.18.47-.15.47-.14.48-.11.5-.09.5-.06.5-.04L12 2h.52l.5.05.5.06.5.09.48.11.47.14z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.71 15.93a1 1 0 0 1-.38-.11l-3.1-1.85a3 3 0 0 1-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.8.8 0 0 1-.65.37"
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
            d="M15.43 2.61a8.8 8.8 0 0 1 5.96 5.96l.16.46.13.48.12.48.08.49.07.5.04.5.01.52-.01.51-.04.51-.07.5-.08.5-.12.48-.13.47-.16.46-.18.46-.2.44-.22.43-.24.42-.26.4-.28.4-.3.38-.31.36-.33.35-.35.33-.36.31-.38.3-.4.28-.4.26-.42.24-.43.22-.44.2-.46.18-.46.16-.48.14-.48.1-.5.1-.5.06-.5.04L12 22l-.51-.01-.51-.04-.5-.06-.5-.1-.48-.1-.47-.14-.46-.16-.46-.18-.44-.2-.43-.22-.42-.24-.4-.26-.4-.28-.38-.3-.36-.31-.35-.33-.33-.35-.31-.36-.3-.38-.28-.4-.26-.4-.24-.42-.22-.43-.2-.44-.18-.46-.16-.46-.14-.47-.1-.49-.1-.49-.06-.5-.04-.5L2 12l.01-.51.04-.51.06-.5.1-.5.1-.48.14-.47.16-.46.18-.46.2-.44.22-.43.24-.42.26-.4.28-.4.3-.38.31-.36.33-.35.35-.33.36-.31.38-.3.4-.28.4-.26.42-.24.43-.22.44-.2.46-.18.46-.16.47-.14.49-.1.49-.1.5-.06.5-.04L12 2l.51.01.51.04.5.07.5.08.48.12.47.13zm.92 12.96a.75.75 0 0 1-1.03.26l-3.1-1.85a3 3 0 0 1-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03"
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

export default IconAiClock;
