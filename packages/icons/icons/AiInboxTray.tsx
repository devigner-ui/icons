import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiInboxTray = forwardRef<SVGSVGElement, IconProps>(function IconAiInboxTray(
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
            d="M12 2v6l2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m12 8-2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h1.26m2.4 0H16c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a3 3 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 12V8c0-2.01 0-3.67 3-3.96"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M19 12V9.45"
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
            opacity={duotone ? "0.4" : "1"}
            d="m10 6 2 2 2-2m-2-4v6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4-1 0-1.28.21-1.8.6l-1.02 1.08a3 3 0 0 1-4.37 0L8.8 12.6C8.28 12.21 8 12 7 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 12V8c0-2.01 0-3.67 3-3.96"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 12V9.45"
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
            d="M15.16 3.99c2.48 0 4.07 2.4 4.07 4.88v3.34l-.02.16-.05.15-.09.13-.11.1-.14.1-.15.04-.16.01-.16-.02-.36-.08-.4-.06-.44-.03-.48-.01h-.23l-.19.02-.15.02-.14.04-.24.11-.12.09-.14.1-.91.96-.26.25-.28.21-.3.19-.32.16-.33.12-.34.09-.35.05-.36.02-.36-.02-.35-.05-.34-.1-.33-.11-.32-.16-.3-.19-.28-.21-.26-.25-.91-.96-.14-.1-.12-.09-.24-.11-.14-.04-.15-.02-.2-.02h-.64l-.43.04-.41.06-.42.08-.16.02-.16-.01-.15-.05-.14-.08-.12-.12-.08-.13-.05-.14-.02-.16V8.4l.01-.78.02-.39.04-.39.07-.37.1-.37.13-.35.18-.33.24-.3.29-.28.36-.24.2-.11.23-.1.24-.1.26-.07.29-.07.3-.06.33-.04.35-.03.38-.02.4-.01z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M14.28 6.8a.7.7 0 0 0-.95 0l-.65.65V2.67A.7.7 0 0 0 12 2c-.37 0-.68.3-.68.67v4.77l-.64-.64a.7.7 0 0 0-.95 0 .7.7 0 0 0 0 .95l1.8 1.8.02.01q.09.08.2.13t.26.05l.26-.05.22-.15 1.8-1.8a.67.67 0 0 0-.01-.94"
            fill="currentColor"
          />
          <path
            d="M18.69 11.53a8 8 0 0 0-2.04-.23c-1.11 0-1.52.27-2.09.7l-.09.08-.95 1.01c-.8.84-2.24.85-3.04-.01l-.95-1-.09-.08c-.57-.43-.98-.7-2.09-.7q-1.2 0-2.04.23c-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44q5.34-.01 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19m-4.36 6.87H9.67a.7.7 0 0 1-.69-.7c0-.39.31-.7.69-.7h4.66a.7.7 0 0 1 .69.7.7.7 0 0 1-.69.7"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.02 17.7a.7.7 0 0 1-.69.7H9.67a.7.7 0 0 1-.69-.7c0-.39.31-.7.69-.7h4.66a.7.7 0 0 1 .69.7"
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
            d="M18.69 11.53a8 8 0 0 0-2.04-.23c-1.11 0-1.52.27-2.09.7l-.09.08-.95 1.01c-.8.84-2.24.85-3.04-.01l-.95-1-.09-.08c-.57-.43-.98-.7-2.09-.7q-1.2 0-2.04.23c-2.38.64-2.38 2.53-2.38 4.19v.93c0 2.51 0 5.35 5.35 5.35h7.44q5.34-.01 5.35-5.35v-.93c0-1.66 0-3.55-2.38-4.19m-4.36 6.87H9.67a.7.7 0 0 1-.69-.7c0-.39.31-.7.69-.7h4.66a.7.7 0 0 1 .69.7.7.7 0 0 1-.69.7"
            fill="currentColor"
          />
          <path
            d="M12.67 2.67a.67.67 0 0 0-1.34 0V4h1.35z"
            fill="currentColor"
          />
          <path
            d="M15.16 4c2.48 0 4.08 2.4 4.06 4.88l-.01 1.24-.13-.04h-.01l-.6-.13-.6-.1-.6-.04-.62-.01h-.45l-.45.05-.44.09-.43.14-.4.18-.4.22-.36.26-.34.3-.95 1.02-.09.07-.1.05-.11.03h-.25l-.11-.03-.1-.06-.1-.07-.98-1.03-.34-.3-.36-.26-.39-.21-.4-.18-.42-.14-.44-.09-.44-.04h-.45l-.66.02-.63.05-.59.09-.55.12-.13.04v-1.7l.01-.79.02-.39.04-.38.07-.38.1-.37.13-.35.19-.33.23-.3.3-.28.35-.24.2-.11.23-.1.24-.1.26-.07.29-.07.3-.05.33-.05.35-.03.38-.02.4-.01h2.12v3.45l-.65-.65-.1-.07-.12-.05-.12-.02h-.24l-.11.05-.11.06-.1.08-.08.1-.06.1-.04.12-.02.12v.12l.03.12.04.11.07.11 1.82 1.82.2.13.26.05.26-.05.22-.15 1.8-1.8.07-.1.05-.12.02-.12v-.12l-.01-.12-.04-.12-.07-.1-.08-.1-.1-.08-.1-.06-.12-.04-.12-.02h-.12l-.12.03-.11.05-.11.07-.65.65V4z"
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

export default IconAiInboxTray;
