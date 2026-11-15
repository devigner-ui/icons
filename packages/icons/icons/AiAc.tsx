import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiAc = forwardRef<SVGSVGElement, IconProps>(function IconAiAc(
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
            d="M2 11c0-2.83 0-4.24.88-5.12S5.18 5 8 5h6.55m7.36 2.88c.09.79.09 1.8.09 3.12 0 3.77 0 5.66-1.17 6.83S17.77 19 14 19h-3.39m-2.4 0c-2.61-.04-4.07-.2-5.04-1.17C2 16.66 2 14.77 2 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 18.5c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55c-.5-.34-1.2-.34-2.61-.34h-5c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C6 16.39 6 17.09 6 18.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 11.5h12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 9h11.97"
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
            d="M2 11c0-2.83 0-4.24.88-5.12S5.18 5 8 5h6.55m7.36 2.88c.09.79.09 1.8.09 3.12 0 3.77 0 5.66-1.17 6.83S17.77 19 14 19h-4c-3.77 0-5.66 0-6.83-1.17S2 14.77 2 11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 18.5c0-1.4 0-2.1-.34-2.61a2 2 0 0 0-.55-.55c-.5-.34-1.2-.34-2.61-.34h-5c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C6 16.39 6 17.09 6 18.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 11.5h12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 9h11.97"
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
            d="M15.16 5c2.89 0 6.6.14 6.77 3.03l.02.34.02.37.02.39V10l.01.49v2.44l-.02.56-.01.53-.03.49-.04.45-.04.43-.07.4-.07.36-.1.34-.11.3-.14.3-.15.26-.18.25-.2.23-.21.18-.22.17-.23.14-.25.13-.26.1-.29.1-.3.08-.33.07v-1.15l-.04-.5-.04-.44-.08-.46-.14-.43-.1-.2-.11-.2-.14-.19-.16-.17-.17-.16-.19-.14-.2-.11-.2-.1-.43-.14-.46-.08-.47-.05-.53-.02h-.6l-.64-.01H9.31l-.6.01-.52.03-.48.04-.23.03-.22.04-.44.15-.4.22-.18.14-.18.15-.16.17-.13.19-.12.2-.1.2-.13.43-.09.45-.04.45-.03.5v1.15l-.33-.07-.3-.08-.3-.1-.26-.1-.25-.13-.23-.14-.21-.17-.2-.18-.21-.23-.18-.24-.16-.27-.13-.29-.12-.31-.1-.34-.07-.37-.06-.39-.05-.42-.03-.46-.03-.49-.02-.53v-.56l-.01-.6v-3.2l.02-.39.02-.37.03-.34.04-.32.04-.3.06-.27.07-.25.09-.24.1-.21.12-.2.13-.19.16-.17.16-.15.19-.14.2-.12.21-.1.24-.09.25-.07.27-.05.3-.05.32-.04.34-.02.36-.02.4-.02H7L7.48 5zm-9.91 6.5c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M18 8.25c.54 0 .93.92.53 1.28l-.11.1-.13.06-.14.05-.15.01H6l-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.04-.14L5.25 9l.02-.15.04-.14.07-.13.09-.11.11-.1.13-.06.14-.05.15-.01z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.25 18.8c0-.83 0-1.53.08-2.1.08-.62.27-1.19.73-1.64a2.7 2.7 0 0 1 1.65-.73q.89-.1 2.24-.08h4.1q1.35-.02 2.24.08c.63.08 1.2.27 1.65.73.46.45.65 1.02.73 1.65q.1.84.08 2.09z"
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
            d="M15.16 5c2.89 0 6.6.14 6.77 3.03l.02.34.02.37.02.39V10l.01.49v2.44l-.02.56-.01.53-.03.49-.04.45-.04.43-.07.4-.07.36-.1.34-.11.3-.14.3-.15.26-.18.25-.2.23-.21.18-.22.17-.23.14-.25.13-.26.1-.29.1-.3.08-.33.07v-1.15l-.04-.5-.04-.44-.08-.46-.14-.43-.1-.2-.11-.2-.14-.19-.16-.17-.17-.16-.19-.14-.2-.11-.2-.1-.43-.14-.46-.08-.47-.05-.53-.02h-.6l-.64-.01H9.31l-.6.01-.52.03-.48.04-.23.03-.22.04-.44.15-.4.22-.18.14-.18.15-.16.17-.13.19-.12.2-.1.2-.13.43-.09.45-.04.45-.03.5v1.15l-.33-.07-.3-.08-.3-.1-.26-.1-.25-.13-.23-.14-.21-.17-.2-.18-.21-.23-.18-.24-.16-.27-.13-.29-.12-.31-.1-.34-.07-.37-.06-.39-.05-.42-.03-.46-.03-.49-.02-.53v-.56l-.01-.6v-3.2l.02-.39.02-.37.03-.34.04-.32.04-.3.06-.27.07-.25.09-.24.1-.21.12-.2.13-.19.16-.17.16-.15.19-.14.2-.12.21-.1.24-.09.25-.07.27-.05.3-.05.32-.04.34-.02.36-.02.4-.02H7L7.48 5zm-9.91 6.5c0-.41.34-.75.75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75M18 8.25c.54 0 .93.92.53 1.28l-.11.1-.13.06-.14.05-.15.01H6l-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.04-.14L5.25 9l.02-.15.04-.14.07-.13.09-.11.11-.1.13-.06.14-.05.15-.01z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.25 18.95c0-.93 0-1.57-.07-2.04-.06-.47-.17-.66-.3-.8-.13-.12-.32-.23-.79-.3s-1.13-.06-2.09-.06h-4c-.96 0-1.61 0-2.1.07-.46.06-.65.17-.78.3s-.24.32-.3.79c-.07.47-.07 1.1-.07 2.04q1.33.06 3.25.05h4q1.92.01 3.25-.05"
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

export default IconAiAc;
