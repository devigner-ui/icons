import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHeadphone = forwardRef<SVGSVGElement, IconProps>(function IconAiHeadphone(
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
            d="M21.4 8.68q.6 1.62.6 3.43v6.16a3.6 3.6 0 0 1-3.57 3.57 3.6 3.6 0 0 1-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03m-13.08 0v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81a3.6 3.6 0 0 1-3.57 3.57A3.6 3.6 0 0 1 2 18.38v-1.24m0-2.4v-2.52a9.9 9.9 0 0 1 9.95-10.17q1.77 0 3.36.57"
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
            d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81a3.6 3.6 0 0 1-3.57 3.57A3.6 3.6 0 0 1 2 18.38v-6.16a9.9 9.9 0 0 1 9.95-10.17q1.77 0 3.36.57m6.09 6.06q.6 1.62.6 3.43v6.16a3.6 3.6 0 0 1-3.57 3.57 3.6 3.6 0 0 1-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03"
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
            d="M15.4 2.66c.58.2-.21 1.51-.8 1.34l-.6-.17-.62-.13-.62-.09-.62-.03h-.63l-.61.06-.62.1-.6.14-.6.18-.57.23-.56.27-.55.32-.52.35-.5.4-.47.43-.3.31-.27.33-.25.33-.24.35-.22.36-.2.37-.19.38-.16.38-.14.4-.13.4-.1.4-.09.42-.06.42-.04.42-.02.42v6.14l-.02.15-.04.15-.07.12-.09.12-.11.09-.13.07-.14.04-.15.02-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14L2 17.9v-6.2l.03-.5.05-.5.08-.48.1-.48.12-.48.15-.47.17-.46.19-.45.21-.45.24-.43.26-.42.28-.4.3-.4.32-.38.34-.37.36-.35.37-.33.4-.3.4-.3.4-.26.44-.24.43-.23.45-.2.46-.18.47-.15.47-.13.48-.11.49-.09.5-.06.49-.04h1.02l.5.04.5.07.5.09.49.1.47.14zm4.72 6.94c-.16-.6 1.07-1.54 1.27-.95l.16.47.13.47.12.49.08.5.07.5.04.5.01.52v5.7l-.01.15-.05.14-.07.13-.1.1-.1.1-.13.07-.14.05-.15.01-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15v-5.7l-.03-.64-.07-.64-.12-.61z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.94 12.45h-.13A3.8 3.8 0 0 0 2 16.26v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
            fill="currentColor"
          />
          <path
            d="M18.19 12.45h-.13a3.8 3.8 0 0 0-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
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
            d="M15.4 2.66c.58.2-.21 1.51-.8 1.34l-.6-.17-.62-.13-.62-.09-.62-.03h-.63l-.61.06-.62.1-.6.14-.6.18-.57.23-.56.27-.55.32-.52.35-.5.4-.47.43-.3.31-.27.33-.25.33-.24.35-.22.36-.2.37-.19.38-.16.38-.14.4-.13.4-.1.4-.09.42-.06.42-.04.42-.02.42v6.14l-.02.15-.04.15-.07.12-.09.12-.11.09-.13.07-.14.04-.15.02-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14L2 17.9v-6.2l.03-.5.05-.5.08-.48.1-.48.12-.48.15-.47.17-.46.19-.45.21-.45.24-.43.26-.42.28-.4.3-.4.32-.38.34-.37.36-.35.37-.33.4-.3.4-.3.4-.26.44-.24.43-.23.45-.2.46-.18.47-.15.47-.13.48-.11.49-.09.5-.06.49-.04h1.02l.5.04.5.07.5.09.49.1.47.14zm4.72 6.94c-.16-.6 1.07-1.54 1.27-.95l.16.47.13.47.12.49.08.5.07.5.04.5.01.52v5.7l-.01.15-.05.14-.07.13-.1.1-.1.1-.13.07-.14.05-.15.01-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15v-5.7l-.03-.64-.07-.64-.12-.61z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.94 12.45h-.13A3.8 3.8 0 0 0 2 16.26v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
            fill="currentColor"
          />
          <path
            d="M18.19 12.45h-.13a3.8 3.8 0 0 0-3.81 3.81v1.88c0 2.1 1.71 3.81 3.81 3.81h.13c2.1 0 3.81-1.71 3.81-3.81v-1.88c0-2.1-1.71-3.81-3.81-3.81"
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

export default IconAiHeadphone;
