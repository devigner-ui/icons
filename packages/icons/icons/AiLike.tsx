import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLike = forwardRef<SVGSVGElement, IconProps>(function IconAiLike(
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
            d="M21 9.02V16a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-1.26m0-2.4V8a5 5 0 0 1 5-5h6.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 17.5v-5.3m0 0 2.2-3.6c.3-.5 1.1-.6 1.5-.1.2.3.3.6.2 1l-.6 1.8h3c.8 0 1.4.8 1.2 1.6l-1 3.6c-.2.6-.7 1-1.3 1H8.5"
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
            d="M21 9.02V16a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h6.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 17.5v-5.3m0 0 2.2-3.6c.3-.5 1.1-.6 1.5-.1.2.3.3.6.2 1l-.6 1.8h3c.8 0 1.4.8 1.2 1.6l-1 3.6c-.2.6-.7 1-1.3 1H8.5"
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
            d="M8 2.25h8A5.77 5.77 0 0 1 21.76 8v8a6 6 0 0 1-1.7 4.07c-1 1-2.52 1.65-4.06 1.68H8a6 6 0 0 1-4.06-1.68c-1-1-1.66-2.53-1.69-4.07V8a6 6 0 0 1 1.69-4.06c1-1 2.53-1.66 4.06-1.69"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.5 18.25a.75.75 0 0 1-.75-.75v-5.3q0-.22.12-.4L9.6 8.97c.28-.47.53-1.02 1.01-1.3 1.13-.69 2.5.16 2.58 1.43.02.38-.1.73-.23 1.08l-.12.37h1.35c.66 0 1.29 0 1.84.44.44.36.71.9.75 1.46.04.52-.16 1.03-.3 1.53l-.58 2.06c-.2.73-.4 1.42-1.06 1.86-.65.44-1.42.35-2.16.35zq0 0 0 0t0 0zm3.82-1.5h1.07c.2 0 .4.03.57-.07.36-.2.4-.69.5-1.04l.67-2.41c.1-.36.3-.8-.05-1.08-.23-.18-.62-.1-.9-.1H11.8a1 1 0 0 1-.3-.07 1 1 0 0 1-.3-.24 1 1 0 0 1-.15-.36 1 1 0 0 1 .04-.32l.3-.9c.1-.3.28-.63.3-.94.01-.18-.14-.4-.33-.26-.1.08-.17.27-.24.38l-.24.41-1.63 2.66v4.34z"
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
            d="M8 2.25h8A5.77 5.77 0 0 1 21.76 8v8a6 6 0 0 1-1.7 4.07c-1 1-2.52 1.65-4.06 1.68H8a6 6 0 0 1-4.06-1.68c-1-1-1.66-2.53-1.69-4.07V8a6 6 0 0 1 1.69-4.06c1-1 2.53-1.66 4.06-1.69m.5 16h4.18c.74 0 1.51.09 2.16-.35.67-.44.86-1.13 1.07-1.86l.57-2.06c.14-.5.34-1.01.3-1.53a2 2 0 0 0-.75-1.46c-.55-.45-1.18-.44-1.84-.44h-1.35l.12-.37c.12-.35.25-.7.23-1.08-.07-1.28-1.44-2.12-2.58-1.44-.48.3-.73.84-1.01 1.3L7.87 11.8a1 1 0 0 0-.12.4v5.3c0 .41.34.75.75.75m.75-1.5v-4.34l1.63-2.66.24-.4c.07-.12.14-.3.24-.39.2-.14.34.08.33.26-.02.3-.2.65-.3.94l-.33 1a1 1 0 0 0 .05.43.7.7 0 0 0 .38.4 1 1 0 0 0 .31.06h2.38c.28 0 .67-.08.9.1.35.29.15.72.05 1.08l-.67 2.41c-.1.35-.14.85-.5 1.04-.17.1-.38.07-.57.07z"
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

export default IconAiLike;
