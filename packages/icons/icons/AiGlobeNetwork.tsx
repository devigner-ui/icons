import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGlobeNetwork = forwardRef<SVGSVGElement, IconProps>(function IconAiGlobeNetwork(
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
            d="M21 9.69c0-3.06-1.33-5.8-3.44-7.69M3 16.56A10.3 10.3 0 0 0 20.06 14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.84 7.62q.06.31.09.62c.13 1.51 1.1 2.74 2.57 2.76.57 0 1.14-.42 1.14-1q0-.29-.08-.54c-.06-.24-.07-.51.06-.8.46-.97 1.36-1.23 2.07-1.77.32-.23.61-.48.74-.68.23-.36.45-.95.54-1.47"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.77 11.71c-.26.71-.85 1.55-2.62 1.57 0 0-2.2 0-2.86 1.24a2.8 2.8 0 0 0-.23 1.77"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 22v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11 22H9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 22h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.94 13.5a7 7 0 0 1-.88-4.43m4.85-5.75A7 7 0 1 1 7.5 16.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M11 22v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3 16.56A10.31 10.31 0 1 0 17.56 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.84 7.62q.06.31.09.62c.13 1.51 1.1 2.74 2.57 2.76.57 0 1.14-.42 1.14-1q0-.29-.08-.54c-.06-.24-.07-.51.06-.8.46-.97 1.36-1.23 2.07-1.77.32-.23.61-.48.74-.68.23-.36.45-.95.54-1.47m-2.91 11.55a2.8 2.8 0 0 1 .24-1.77c.66-1.24 2.86-1.24 2.86-1.24 1.16-.01 1.81-.38 2.2-.83M8.91 3.32a7 7 0 1 1-4.85 5.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.26 3.03a6.84 6.84 0 0 0-6.29 7.48l.03.35.05.34.07.33.08.34.1.33.12.32.13.32.15.31.16.3.18.29.19.29.2.28.22.26.23.26.24.24.26.23.26.22.28.2.29.19.29.18.3.16.31.15.32.13.32.12.33.1.34.08.33.07.34.05.35.03.34.02h.34l.34-.02.35-.03.34-.05.33-.07.34-.08.33-.1.32-.12.32-.13.31-.15.3-.16.29-.18.29-.19.28-.2.26-.22.26-.23.24-.24.23-.26.22-.26.2-.28.19-.29.18-.29.16-.3.15-.31.13-.32.12-.32.1-.33.08-.34.07-.33.05-.34.03-.35.02-.34v-.34l-.02-.34-.03-.35-.05-.34-.07-.33-.08-.34-.1-.33-.12-.32-.13-.32-.15-.31-.16-.3-.18-.29-.19-.29-.2-.28-.22-.26-.23-.26-.24-.24-.26-.23-.26-.22-.28-.2-.29-.19-.29-.18-.3-.16-.31-.15-.32-.13-.32-.12-.33-.1-.34-.08-.33-.07-.34-.05-.35-.03-.34-.02h-.34z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            d="M10.15 3.05c-1.87.13-2.24 2.65-1.77 4.46l.12.46.13.74.07.24.08.23.1.21.12.21.13.19.15.18.16.16.18.14.19.12.2.11.22.08.23.07.24.04.25.01h.1l.19-.04.1-.03.18-.08.16-.1.13-.14.06-.07.09-.16.04-.18.01-.14-.02-.25-.08-.38-.01-.14.02-.13.03-.13.05-.13.09-.16.19-.27.23-.23.24-.2.26-.17.79-.47.35-.25.19-.16.16-.16.09-.11.08-.13.12-.23.11-.26.09-.28.08-.29.05-.28.01-.26-.02-.23-.02-.1-.5-.33-.52-.29-.53-.24-.55-.19-.56-.15-.56-.1-.58-.05h-.57z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            d="M11.95 14.4c.7-1.31 3-1.31 3-1.31 2.4-.02 2.73-1.48 2.95-2.22a7 7 0 0 1-5.98 6.06c-.22-.47-.5-1.54.04-2.54"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.95 1.5a.75.75 0 0 1 1.06-.06A11.06 11.06 0 0 1 11.7 20.7v.55h1.25a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.5a11 11 0 0 1-7.8-3.69.75.75 0 0 1 1.1-1A9.56 9.56 0 1 0 17 2.56a.75.75 0 0 1-.05-1.06"
            fill="currentColor"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M10.14 3.05c-1.78.14-2.24 2.39-1.93 4.14l.1.57.06.45.05.25.06.24.08.22.09.2.11.19.11.18.14.16.14.14.15.13.16.1.17.09.18.07.19.06.19.03.2.01.15-.02.1-.05.07-.05.08-.08.02-.05-.02-.26-.08-.34-.02-.19-.02-.19.02-.27.06-.28.05-.18.15-.3.14-.25.15-.23.16-.2.18-.19.27-.24.18-.15.29-.2.58-.35.56-.36.37-.3.18-.17.05-.06.09-.16.17-.36.12-.35.11-.45-.46-.25-.47-.22-.48-.18-.49-.14-.5-.1-.5-.07-.5-.04-.5.01z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            d="M15.6 14.5q.4 0 .75-.04a7 7 0 0 1-3.42 2.26c-.05-.38-.02-.84.2-1.27.2-.36.69-.63 1.34-.8a6 6 0 0 1 1.11-.14z"
            fill="currentColor"
          />
          <path
            d="M7.02 9.53c-.5-1.1-3.14-.74-3.07.47l.04.72.1.69.17.67.24.64.29.62.36.57.4.54.45.5.5.45.54.4.57.36.62.29.64.24.67.17.69.1.72.04.32-.01-.04-.45.02-.44.04-.3.05-.29.13-.43.18-.41.11-.19.12-.17.27-.31.31-.26.32-.21.34-.18.33-.13.47-.15.55-.12.5-.08.15-.02.67-.03.38-.03.33-.06.14-.04.24-.1.2-.1.17-.12.13-.11.13-.17.12-.2.12-.25.03-.1.08-.43.06-.43.03-.44v-.43l-.02-.43-.05-.43-.08-.42-.1-.41-.13-.41-.15-.4-.18-.4-.2-.38-.22-.37-.25-.35-.28-.34-.29-.33-.17.43-.23.46-.2.31-.23.27-.28.26-.42.33-1.42.91-.27.24-.19.2-.15.24-.05.11-.02.08.01.12.05.21.04.26.03.42-.01.23-.04.22-.06.2-.08.19-.1.18-.12.16-.14.15-.15.13-.16.12-.16.1-.18.09-.18.07-.19.06-.18.04-.19.02-.18.01-.41-.03-.38-.06-.36-.11-.34-.14-.32-.17-.29-.21-.27-.23-.25-.25-.22-.28-.2-.3-.17-.32z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.95 1.5a.75.75 0 0 1 1.06-.06A11.06 11.06 0 0 1 11.7 20.7v.55h1.25a.75.75 0 1 1 0 1.5h-4a.75.75 0 0 1 0-1.5h1.25v-.5a11 11 0 0 1-7.8-3.69.75.75 0 0 1 1.1-1A9.56 9.56 0 1 0 17 2.56a.75.75 0 0 1-.05-1.06"
            fill="currentColor"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiGlobeNetwork;
