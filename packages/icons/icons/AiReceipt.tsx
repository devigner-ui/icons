import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiReceipt = forwardRef<SVGSVGElement, IconProps>(function IconAiReceipt(
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
            d="M6.73 19.7a1.76 1.76 0 0 1 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.79-.15c1.78 1.9 3.23 1.27 3.23-1.39v-9M16.36 2H8.22C4.44 2 3.5 3.01 3.5 7.04v7.57m0 2.4v1.29c0 2.67 1.46 3.29 3.23 1.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 7h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11h6"
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
            d="M6.73 19.7a1.76 1.76 0 0 1 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.79-.15c1.78 1.9 3.23 1.27 3.23-1.39v-9M16.36 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 7h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 11h6"
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
            d="M16.46 2.01c3.03 0 4.03 3.6 4.03 6.63v9.67l-.02.48-.05.43-.08.37-.1.33-.14.28-.16.22-.19.18-.2.12-.24.07-.25.01-.26-.04-.28-.1-.3-.15-.31-.21-.32-.27-.33-.33-.14-.14-.16-.13-.16-.11-.18-.09-.2-.07-.19-.05-.2-.02h-.2l-.2.02-.2.05-.19.06-.18.1-.17.1-.15.13-.15.14-.12.16-1.01 1.35-.16.2-.17.15-.17.14-.19.11-.19.1-.2.06-.19.03-.2.02-.2-.02-.2-.03-.19-.07-.19-.09-.18-.1-.18-.15-.17-.16-.15-.19-1.01-1.35-.13-.16-.14-.14-.15-.13-.17-.1-.18-.1-.2-.06-.19-.05-.2-.02h-.2l-.2.02-.2.05-.19.07-.18.09-.17.1-.15.14-.14.14-.33.32-.32.27-.3.21-.3.15-.28.1-.27.04-.25-.01-.23-.07-.2-.12-.2-.18-.16-.22-.13-.28-.11-.33-.08-.37-.05-.43-.02-.48V7.04l.01-.72.04-.65.06-.6.1-.52.12-.46.17-.41.2-.36.24-.31.29-.26.34-.22.38-.17.44-.14.5-.1.54-.07.61-.04z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16 7.75H8l-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14L7.25 7l.01-.15.05-.14.07-.13.09-.1.11-.1.13-.07.14-.04.15-.02h8l.15.02h.02l.25.11.1.09.1.11.07.13.04.14.02.15-.02.15-.04.14-.07.12-.1.12-.1.09-.13.07-.14.04z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15 11.75H9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M16.46 2.01c3.03.05 4.03 3.6 4.03 6.63v9.65l-.02.48-.05.42-.08.38-.1.33-.14.27-.16.23-.19.17-.2.13-.24.06-.24.02-.27-.04-.28-.1-.3-.15-.3-.21-.32-.27-.33-.33-.14-.15-.16-.13-.17-.1-.18-.1-.18-.07-.2-.04-.2-.03h-.2l-.21.03-.2.04-.19.07-.18.09-.17.1-.15.14-.14.14-.13.16-1.01 1.35-.16.2-.16.16-.18.13-.19.12-.19.08-.19.07-.2.04h-.4l-.2-.04-.19-.07-.19-.08-.18-.12-.18-.13-.16-.17-.16-.19-1.01-1.35-.14-.16-.15-.15-.16-.13-.17-.1-.18-.09-.18-.06-.18-.04-.19-.02h-.19l-.19.02-.19.04-.18.07-.18.09-.17.1-.17.13-.16.16h-.01l-.33.33-.32.27-.3.21-.3.15-.28.1-.27.04-.25-.01-.23-.07-.2-.12-.2-.18-.16-.22-.13-.28-.11-.33-.08-.37-.05-.43-.02-.47V7.05l.01-.73.04-.65.06-.59.1-.52.12-.47.17-.41.2-.36.24-.3.3-.27.33-.21.38-.18.44-.13.5-.1.55-.07.61-.04.68-.02h7.56zm-1.45 9.74h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75m.99-5.5.15.02h.02l.25.11.1.1.1.1.07.13.04.14.02.15-.02.15-.04.14-.07.13-.1.1-.1.1-.13.07-.14.04-.15.02H8.01l-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.07-.13-.04-.14L7.25 7l.01-.15.05-.14.07-.13.1-.1.1-.1.13-.07.14-.04.15-.02z"
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

export default IconAiReceipt;
