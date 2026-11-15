import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSendMessage = forwardRef<SVGSVGElement, IconProps>(function IconAiSendMessage(
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
            d="M16.21 8.85a.75.75 0 0 0-1.05-1.07zm-5.55 5.49 5.55-5.5-1.05-1.06-5.55 5.49z"
            fill="currentColor"
          />
          <path
            d="M18.64 15.67c-1.21 3.63-1.82 5.45-2.7 5.96-.85.5-1.9.5-2.74 0-.89-.51-1.49-2.33-2.7-5.96-.2-.58-.3-.87-.46-1.12a2 2 0 0 0-.6-.6 5 5 0 0 0-1.11-.45c-3.63-1.2-5.45-1.8-5.96-2.7a2.7 2.7 0 0 1-.18-2.36m17.84 3.06.32-.98c1.5-4.5 2.25-6.75 1.06-7.93-1.18-1.2-3.43-.44-7.93 1.06L12.42 4"
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
            d="m18.64 15.67 1.71-5.15c1.5-4.5 2.25-6.75 1.06-7.93-1.18-1.2-3.43-.44-7.93 1.06L9.03 5.13M2.18 8.44a2.7 2.7 0 0 0 .19 2.36c.51.89 2.33 1.49 5.96 2.7.58.2.87.3 1.12.46q.34.22.6.6c.16.24.26.53.45 1.11 1.21 3.63 1.81 5.45 2.7 5.96.85.5 1.89.5 2.73 0 .89-.51 1.5-2.33 2.7-5.96"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.21 8.85a.75.75 0 0 0-1.05-1.07zm-5.55 5.49 5.55-5.5-1.05-1.06-5.55 5.49z"
            fill="currentColor"
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
            d="M9.66 4.92C6.4 6.01 2 5.83 2 9.26v.35l.05.35.09.35.07.17.16.32.11.16.14.16.18.16.21.15.24.15.27.15.66.3.8.32.96.34 2.48.84.17.03h.26l.26-.05.16-.06.22-.13.14-.11 5.56-5.5.13-.09.14-.06.15-.03h.16l.15.03.14.06.19.14 5.17-5.17-.24-.2-.26-.16-.29-.12-.32-.07-.36-.04h-.38l-.42.04-.46.07-.5.1-.54.13-1.2.34-1.39.44z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.64 15.67 1.71-5.15c1.5-4.5 2.25-6.74 1.07-7.93l-5.18 5.17c.31.3.3.8 0 1.12l-5.42 5.36a1.4 1.4 0 0 0-.32 1.43c1.21 3.63 1.81 5.45 2.7 5.96.85.5 1.89.5 2.73 0 .89-.51 1.5-2.33 2.7-5.96"
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
            d="M9.66 4.92C6.4 6.01 2 5.83 2 9.26v.35l.05.35.09.35.07.17.16.32.11.16.14.16.18.16.21.15.24.15.58.3.73.31.88.33 1.04.36 1.85.62.26.06h.26l.26-.05.16-.06.22-.13.14-.11 5.54-5.49.08-.07.14-.08.15-.05.16-.02h.1l.11.02.16.05.09.06.12.1.1.12.05.1.06.15.02.11v.11l-.02.15-.06.15-.08.14-.07.08-5.46 5.4-.13.15-.1.16-.08.18-.07.27-.01.29.04.29.84 2.48.34.96.32.8.3.66.15.27.15.24.15.21.16.18.16.14.16.11.16.09.34.14.34.09.35.05h.36l.17-.02.35-.07.34-.12.32-.16.16-.11.16-.14.16-.18.15-.21.15-.24.15-.27.15-.31.31-.73.51-1.38.81-2.39 2.47-7.45.39-1.3.16-.58.13-.53.1-.5.07-.46.03-.42v-.38l-.03-.36-.08-.32-.11-.29-.16-.26-.2-.23-.23-.2-.26-.16-.29-.12-.32-.07-.36-.04h-.38l-.42.04-.46.07-.5.1-.53.13-.58.16-.63.18-1.39.44z"
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

export default IconAiSendMessage;
