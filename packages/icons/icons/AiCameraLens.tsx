import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCameraLens = forwardRef<SVGSVGElement, IconProps>(function IconAiCameraLens(
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
     shape as AiClipboard: a 1.5 circle round each tip, joined by small
     curves, so the gap matches across the AI icons. */
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
            d="M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.46 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-2.43 0-3.9-.38-4.96m-6.84-5.07A2 2 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.5-1.23 1.2C2 8.77 2 10.3 2 13.37v.07m.02 2.4c.05 1.52.22 2.48.73 3.23q.5.73 1.23 1.2c1.12.74 2.68.74 5.8.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 10h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M9 13a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.74q.73-.46 1.23-1.2c.75-1.1.75-2.63.75-5.7 0-2.43 0-3.9-.38-4.96m-6.84-5.07A2 2 0 0 0 13.63 3h-3.26c-1 0-1.84.68-2.04 1.64a1.4 1.4 0 0 1-1.35 1.12c-1.38.06-2.28.23-3 .7q-.73.5-1.23 1.2C2 8.77 2 10.3 2 13.37s0 4.6.75 5.7q.5.73 1.23 1.2c1.12.74 2.68.74 5.8.74"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 10h-1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M14.66 3.26c3.11 1.46 6.17 1.99 7.03 5.32l.07.27.06.29.05.3.04.34.03.35.02.37.02.4.01.43v.46l.01.5v3.1l-.02.43-.02.4-.02.38-.03.35-.04.33-.05.3-.06.29-.07.27-.1.25-.1.24-.1.22-.14.21-.26.35-.3.32-.32.28-.35.25-.21.13-.23.12-.24.1-.26.08-.27.07-.3.06-.3.05-.34.04-.36.03-.38.02-.4.02-.44.01h-.47l-.5.01H9.78v.01h-1.6L7.71 21l-.43-.01-.41-.02-.38-.02-.36-.03-.33-.04-.32-.05-.29-.06-.27-.07-.26-.09-.24-.1-.23-.11-.21-.13-.35-.25-.33-.28-.29-.32-.26-.35-.13-.21-.12-.22-.1-.24-.08-.25-.08-.27-.06-.29-.05-.3-.04-.33-.03-.35-.02-.38-.02-.4-.01-.43v-.46L2 14.45v-2.66l.01-.45.01-.43.02-.4.02-.38.03-.35.04-.33.05-.3.06-.3.08-.26.08-.25.1-.24.12-.23.13-.21.26-.34.3-.32.32-.28.35-.26.28-.16.3-.14.32-.11.35-.1.38-.07.42-.05.45-.04.5-.03.24-.03.23-.06.21-.1.2-.13.16-.17.14-.19.1-.2.07-.24.1-.35.16-.31.2-.28.26-.24.29-.2.32-.14.34-.1.37-.02h3.26l.36.03.35.08z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.56 9.27a.83.83 0 0 0-.84.82c0 .45.38.82.84.82h1.1c.47 0 .84-.37.84-.82a.83.83 0 0 0-.83-.82z"
            fill="currentColor"
          />
          <path
            d="M12 9.27a4.13 4.13 0 0 0-4.17 4.1c0 2.25 1.87 4.08 4.17 4.08s4.17-1.83 4.17-4.09S14.3 9.27 12 9.27m0 1.64c-1.38 0-2.5 1.1-2.5 2.45a2.5 2.5 0 0 0 2.5 2.46c1.38 0 2.5-1.1 2.5-2.46a2.5 2.5 0 0 0-2.5-2.45"
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
            d="M14.66 3.27c3.15 1.38 6.17 1.99 7.03 5.32l.07.27.06.28.05.31.04.33.03.35.02.38.02.4.01.43v.46l.01.49v3.1l-.02.43-.02.4-.02.38-.03.35-.04.33-.05.3-.06.3-.07.26-.09.25-.1.24-.12.23-.13.2-.25.36-.3.31-.32.29-.36.25-.21.13-.23.11-.24.1-.26.09-.27.07-.3.06-.3.05-.34.04-.36.03-.38.02-.4.02h-.44l-.47.01H8.18l-.46-.01-.44-.01-.41-.02-.38-.02-.36-.03-.33-.04-.32-.05-.29-.06-.27-.07-.26-.09-.24-.1-.22-.11-.22-.13-.35-.25-.33-.28-.3-.32-.25-.35-.13-.21-.12-.23-.1-.23-.08-.25-.08-.27-.06-.29-.05-.3-.04-.33-.03-.35-.02-.38-.02-.4-.01-.43v-.46l-.01-.5V11.8l.01-.46.01-.43.02-.4.02-.38.03-.35.04-.33.05-.3.06-.29.08-.27.08-.25.1-.24.12-.22.13-.21.26-.35L3.3 7l.33-.29.35-.24.28-.17.3-.13.32-.12.35-.09.38-.07.42-.06.45-.04.5-.03.24-.02.23-.06.21-.1.2-.14.16-.16.14-.19.1-.21.07-.24.1-.34.17-.32.2-.28.26-.24.29-.2.31-.14.35-.09.36-.03h3.26l.37.03.34.1zM7.83 13.36A4.13 4.13 0 0 1 12 9.27c2.3 0 4.17 1.83 4.17 4.1A4.13 4.13 0 0 1 12 17.45a4.13 4.13 0 0 1-4.17-4.09m1.67 0a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0m7.22-3.27c0-.45.38-.82.84-.82h1.1c.47 0 .84.37.84.82s-.37.82-.83.82h-1.11a.83.83 0 0 1-.84-.82"
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

export default IconAiCameraLens;
