import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiRulerPencil = forwardRef<SVGSVGElement, IconProps>(function IconAiRulerPencil(
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
            d="M22 7.62V18c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-2c-1.89 0-2.83 0-3.41-.59C12 20.83 12 19.9 12 18v-.14m0-2.4V6c0-1.89 0-2.83.59-3.41C13.17 2 14.1 2 16 2h.39"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m6.01 21.03-.29.55A.8.8 0 0 1 5 22a.8.8 0 0 1-.72-.42l-.3-.55m2.03 0H4m2.02 0 1.18-2.25c.28-.52.42-.79.52-1.06q.18-.5.25-1c.04-.3.04-.6.04-1.19V4.85A2.93 2.93 0 0 0 5 2C3.34 2 2 3.28 2 4.85v10.68c0 .6 0 .9.04 1.18q.06.52.25 1a8 8 0 0 0 .52 1.07l1.18 2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2 5.8s1.13.95 3 .95 3-.95 3-.95"
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
            d="M22 7.62V18c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59h-2c-1.89 0-2.83 0-3.41-.59C12 20.83 12 19.9 12 18V6c0-1.89 0-2.83.59-3.41C13.17 2 14.1 2 16 2h.39"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 12h2m-2-6h2m-2 12h2m-2-3h3m-3-6h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m6.01 21.03-.29.55A.8.8 0 0 1 5 22a.8.8 0 0 1-.72-.42l-.3-.55m2.03 0H4m2.02 0 1.18-2.25c.28-.52.42-.79.52-1.06q.18-.5.25-1c.04-.3.04-.6.04-1.19V4.85A2.93 2.93 0 0 0 5 2C3.34 2 2 3.28 2 4.85v10.68c0 .6 0 .9.04 1.18q.06.52.25 1a8 8 0 0 0 .52 1.07l1.18 2.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 5.8s1.13.95 3 .95 3-.95 3-.95"
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
            d="M17.5 2.01a4.5 4.5 0 0 1 4.5 4.5v12.74l-.03.51-.04.44-.07.38-.1.32-.15.28-.2.23-.24.2-.27.15-.33.1-.37.07-.44.04-.51.03h-4.5l-.5-.03-.45-.04-.37-.07-.33-.1-.27-.16-.24-.19-.17-.2-.13-.23-.1-.26-.08-.3-.05-.34-.03-.4-.02-.43-.01-.5v-14l.02-.43.04-.4.05-.34.07-.3.1-.26.14-.23.17-.2.23-.2.28-.14.32-.1.38-.07.44-.05.5-.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5"
            fill="currentColor"
          />
          <path
            d="M14 5.25h-2v1.5h2a.75.75 0 0 0 0-1.5"
            fill="currentColor"
          />
          <path
            d="M14 11.25h-2v1.5h2a.75.75 0 0 0 0-1.5"
            fill="currentColor"
          />
          <path
            d="M15 14.25h-3v1.5h3a.75.75 0 0 0 0-1.5"
            fill="currentColor"
          />
          <path
            d="M14 17.25h-2v1.5h2a.75.75 0 0 0 0-1.5"
            fill="currentColor"
          />
          <path
            d="M8 14.98V7a8 8 0 0 1-6 0v7.98c0 .62 0 .93.04 1.24a5 5 0 0 0 .25 1.06c.1.29.24.56.52 1.12l1.47 2.94a.8.8 0 0 0 1.44 0L7.2 18.4c.28-.55.42-.83.52-1.12a5 5 0 0 0 .25-1.06c.04-.3.04-.62.04-1.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 2a3 3 0 0 1 3 3v2a8 8 0 0 1-6 0V5a3 3 0 0 1 3-3"
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
            d="m14.75 6-.01-.15-.05-.14-.07-.13-.09-.1-.11-.1-.13-.07-.14-.04-.15-.02h-2v-.5l.03-.44.03-.38.05-.35.08-.3.1-.26.13-.23.17-.2.24-.2.27-.14.33-.1.38-.07.44-.05.5-.02h2.75A4.5 4.5 0 0 1 22 6.5v12.75l-.03.51-.04.44-.07.38-.1.32-.15.28-.2.23-.23.2-.28.14-.32.11-.38.07-.44.04-.5.02-.3.01h-4.2l-.51-.03-.44-.04-.38-.07-.32-.1-.28-.15-.24-.2-.17-.2-.14-.23-.1-.26-.07-.3-.05-.34-.04-.4-.01-.43v-.5h2l.14-.01.14-.05.13-.07.11-.09.1-.11.06-.13.05-.14.01-.15-.01-.15-.05-.14-.07-.13-.09-.1-.11-.1-.13-.07-.14-.04-.15-.02h-2v-1.5h3l.15-.01.14-.05.13-.07.11-.09.1-.11.06-.13.05-.14.01-.15-.01-.15-.05-.14-.07-.13-.09-.1-.11-.1-.13-.07-.14-.04-.15-.02h-3v-1.5h2l.15-.01.14-.05.13-.07.11-.09.1-.11.06-.13.05-.14.01-.15-.01-.15-.05-.14-.07-.13-.09-.1-.11-.1-.13-.07-.14-.04-.15-.02h-2v-1.5h3l.15-.01.14-.05.13-.07.11-.09.1-.11.06-.13.05-.14.01-.15-.01-.15-.05-.14-.07-.13-.09-.1-.11-.1-.13-.07-.14-.04-.15-.02h-3v-1.5h2l.15-.01.14-.05.13-.07.11-.09.1-.11.06-.13.05-.14z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8 15.2v-8a8 8 0 0 1-6 0v7.98c0 .63 0 .94.04 1.24a5 5 0 0 0 .25 1.06c.1.29.24.57.52 1.13l1.47 2.93a.8.8 0 0 0 1.44 0l1.47-2.93c.28-.56.42-.84.52-1.13a5 5 0 0 0 .25-1.06c.04-.3.04-.61.04-1.24"
            fill="currentColor"
          />
          <path
            d="M8 5a3 3 0 0 0-6 0v.96a6.4 6.4 0 0 0 3 .7 7 7 0 0 0 3-.7z"
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

export default IconAiRulerPencil;
