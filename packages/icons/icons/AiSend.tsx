import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSend = forwardRef<SVGSVGElement, IconProps>(function IconAiSend(
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
            d="M20.63 9.1c1.25-3.75 1.87-5.62.88-6.61s-2.86-.37-6.6.88l-4.67 1.56M2.1 8.38q-.06.2-.1.47c-.06.82.72 1.6 2.27 3.15l.28.28c.26.26.39.39.48.53q.3.42.31.94c.01.17-.02.35-.07.7-.2 1.31-.3 1.96-.18 2.46.23 1 1 1.79 2 2.03.5.13 1.16.04 2.46-.14l.07-.01c.37-.05.56-.07.73-.06q.5.03.9.3c.15.1.28.23.54.5l.25.24c1.51 1.51 2.27 2.27 3.07 2.23q.33-.02.64-.15c.73-.33 1.07-1.34 1.75-3.36l1.56-4.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m6 18 3.75-3.75M21 3l-8.5 8.5"
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
            d="m17.5 18.49 3.13-9.4c1.25-3.74 1.87-5.61.88-6.6s-2.86-.37-6.6.88L8.99 5.35M2.1 8.38q-.06.2-.1.47c-.06.82.72 1.6 2.27 3.15l.28.28c.26.26.39.39.48.53q.3.42.31.94c.01.17-.02.35-.07.7-.2 1.31-.3 1.96-.18 2.47.23 1 1 1.78 2 2.02.5.13 1.16.04 2.46-.14l.07-.01c.37-.05.56-.07.73-.06q.5.03.9.3c.15.1.28.23.54.5l.25.24c1.51 1.51 2.27 2.27 3.07 2.23q.33-.02.64-.15c.73-.33 1.07-1.34 1.75-3.36"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 18 21 3"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.61 5.14C6.4 6.21.31 7.04 2.28 9.8l.25.35.51.6.44.45 1.43 1.45.08.11.13.19.08.15.06.16.04.15.03.17.01.34-.27 1.91-.03.55.02.34.06.32.08.24.1.23.19.31.14.2.16.18L21.5 2.5l-.2-.17-.21-.13-.25-.09-.26-.07-.3-.03h-.32l-.35.03-.38.06-.41.08-.93.24-1.08.33z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.5 18.49 3.13-9.4c1.25-3.74 1.87-5.61.88-6.6L5.8 18.2q.52.55 1.3.74c.5.13 1.15.04 2.45-.14h.07c.37-.06.56-.08.73-.07q.49.03.9.3c.15.1.28.23.54.5l.25.24c1.51 1.51 2.27 2.27 3.07 2.23q.33-.02.64-.15c.73-.32 1.07-1.34 1.75-3.36"
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
            d="m17.5 18.49 3.13-9.4c.79-2.37 1.33-3.99 1.37-5.11.01-.38-.42-.5-.68-.24L6.86 18.2c-.23.24-.18.63.14.72l.1.02c.5.13 1.15.04 2.45-.14l.07-.01c.37-.05.56-.07.73-.06q.49.03.9.3c.15.1.28.23.54.5l.25.24c1.51 1.51 2.27 2.27 3.07 2.23q.33-.02.64-.15c.73-.33 1.07-1.34 1.75-3.36"
            fill="currentColor"
          />
          <path
            d="M9.61 5.13C6.4 6.2.32 7.04 2.29 9.8l.25.35.51.6.44.45 1.43 1.45.17.23.08.15.07.15.05.15.04.17.02.16v.22l-.03.29-.24 1.66-.03.43v.24l.03.32.05.21.03.05.07.08.14.08.15.02.11-.02.11-.05.09-.07L20.26 2.68l.08-.1.05-.12.01-.11-.02-.12-.05-.09-.08-.08-.1-.05-.13-.01-.22.01-.46.06-.52.11-.58.14-.97.28-1.1.35z"
            mask={`url(#${cut})`}
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

export default IconAiSend;
