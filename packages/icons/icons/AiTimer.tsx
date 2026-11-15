import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTimer = forwardRef<SVGSVGElement, IconProps>(function IconAiTimer(
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
            d="M12 8v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.9 9.47c.54 1.14.85 2.43.85 3.78M12 22a8.7 8.7 0 0 1-4.69-1.36m-1.82-1.55a8.75 8.75 0 0 1 9.04-14.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 2h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M14.9 18.5v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
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
            d="M12 8v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22a8.75 8.75 0 1 1 2.53-17.13m5.36 4.6a9 9 0 0 1 .86 3.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 2h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.9 18.5v-1.16c0-1.43 1.02-2.02 2.26-1.3l1 .58 1 .58c1.24.72 1.24 1.89 0 2.61l-1 .58-1 .58c-1.24.72-2.26.13-2.26-1.3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
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
            d="M11.32 13.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M14.21 3.45H8.43a.73.73 0 0 1 0-1.45h5.78a.73.73 0 0 1 0 1.45"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.33 20.33.08.34.13.33.2.3-.52.2-.51.16-.52.13-.52.1-.53.07-.53.03h-.53l-.53-.03-.53-.07-.52-.1-.51-.12-.51-.16-.5-.19-.49-.22-.47-.26-.47-.28-.44-.31-.42-.34-.4-.36-.37-.39-.35-.4-.32-.43-.3-.44-.26-.46-.23-.47-.21-.49-.18-.5-.15-.5-.11-.53-.09-.53-.05-.54-.02-.54.03-.43.06-.42.07-.42.09-.41.1-.4.14-.4.3-.76.39-.73.44-.68.5-.63.56-.59.61-.53.66-.47.7-.4.74-.35.78-.28.4-.1.4-.1.42-.07.42-.05.43-.03.43-.01h.43l.43.04.42.05.41.07.41.1.4.1.78.28.74.34.7.41.66.47.6.53.55.57q.08.13.2.25l.32.4.44.68.38.73.32.76.12.4.11.4.1.4.07.43.05.42.03.43-.01.44-.03.44-.06.43-.07.42-.26-.04-.27-.02h-3.17l-.22.04-.21.04-.2.06-.18.07-.16.1-.16.1-.13.13-.13.14-.1.15-.1.17-.07.18-.06.19-.05.2-.02.23-.01.23v2.94z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.29 15h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m-.28 4.46-1.18.68a1.4 1.4 0 0 1-.7.21 1 1 0 0 1-.46-.12q-.49-.3-.5-1.05v-1.36q.01-.75.5-1.05.5-.28 1.16.09l1.18.68q.65.39.66.96 0 .57-.66.96"
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
            d="M14.11 3.45H8.33a.73.73 0 0 1 0-1.45h5.78a.73.73 0 0 1 0 1.45"
            fill="currentColor"
          />
          <path
            d="M19.19 15h-2.94c-1.27 0-2.03.76-2.03 2.03v2.94c0 1.27.76 2.03 2.03 2.03h2.94c1.27 0 2.03-.76 2.03-2.03v-2.94c0-1.27-.76-2.03-2.03-2.03m-.28 4.46-1.18.68a1.4 1.4 0 0 1-.7.21 1 1 0 0 1-.46-.12q-.49-.3-.5-1.05v-1.36q.01-.75.5-1.05.5-.28 1.16.09l1.18.68q.65.39.66.96 0 .57-.66.96"
            fill="currentColor"
          />
          <path
            d="M14.59 5.34a7.3 7.3 0 0 1 4.44 4.23l.17.39.16.39.14.4.11.41.1.42.08.43.05.43.04.44v.45l-.03.73-.33-.05-.33-.01h-3.24l-.3.03-.3.06-.29.1-.27.11-.26.15-.25.18-.23.2-.2.23-.18.25-.15.26-.12.27-.09.29-.06.3-.03.3v3.24l.02.43.08.44.14.41.2.39-.6.15-.6.12-.61.06-.63.03-.43-.03-.43-.04-.43-.07-.41-.09-.41-.1-.4-.13-.4-.14-.37-.17-.74-.37-.69-.44-.64-.5-.6-.56-.53-.61-.48-.67-.42-.7-.35-.75-.15-.38-.13-.4-.11-.4-.1-.42-.07-.41-.05-.43-.03-.43-.02-.44.02-.43.03-.43.05-.43.07-.42.1-.4.1-.41.14-.4.15-.38.35-.75.42-.7.48-.67.53-.6.6-.57.64-.5.7-.44.73-.38.38-.16.39-.14.4-.13.4-.1.42-.1.43-.06.43-.05.43-.02.45.01.44.04.43.05.43.08.42.1.4.12.4.13zM11.97 13c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75z"
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

export default IconAiTimer;
