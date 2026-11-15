import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDocumentLines = forwardRef<SVGSVGElement, IconProps>(function IconAiDocumentLines(
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
            d="M21 9.02V14c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-1.29m-2.4 0c-2.67-.03-4.16-.19-5.14-1.17C3 19.66 3 17.77 3 14v-4c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2q1.91-.01 3.24.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 8h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 16h5"
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
            opacity={duotone ? "0.4" : "1"}
            d="M21 9.02V14c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14v-4c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2q1.91-.01 3.24.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 12h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 8h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 16h5"
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
            d="M16.51 2.06c2.97.12 4.48 3.2 4.48 6.17v7.7l-.01.57-.02.52-.02.5-.04.45-.05.42-.06.4-.08.36-.1.34-.1.31-.14.29-.15.27-.18.24-.21.23-.23.2-.25.19-.26.15-.3.14-.3.11-.34.1-.37.07-.4.06-.42.05-.45.04-.5.02-.52.02-.56.01h-.6l-.65.01H9.07l-.56-.02-.53-.02-.49-.02-.46-.04-.42-.05-.4-.06-.36-.07-.34-.1-.31-.11-.29-.14-.27-.15-.24-.18-.23-.2-.2-.24-.19-.24-.15-.27-.14-.29-.11-.31-.1-.34-.07-.37-.06-.39-.05-.42-.04-.46-.02-.49-.02-.52-.01-.57V14L3 10V8.07l.02-.56.01-.53.03-.49.04-.46.04-.42.07-.4.07-.36.1-.34.11-.3.14-.3.15-.27.18-.24.2-.23.24-.2.24-.19.27-.15.29-.14.31-.1.34-.1.37-.08.39-.06.42-.05.46-.04.49-.02.53-.02.56-.01h5.86l.56.01.53.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.25 12c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.25 8c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.25 16c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
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
            d="M16.51 2.06c2.97.12 4.48 3.2 4.48 6.17v8.27l-.03.52-.02.5-.04.45-.05.42-.06.4-.07.36-.1.34-.11.31-.14.29-.15.27-.18.24-.2.23-.24.2-.24.19-.27.15-.29.14-.31.11-.34.1-.37.07-.39.07-.42.04-.46.04-.49.02-.53.02-.56.01h-.6l-.64.01H9.07l-.56-.02-.53-.02-.49-.02-.45-.04-.43-.04-.4-.07-.36-.07-.33-.1-.32-.11-.29-.14-.26-.15-.25-.18-.23-.2-.2-.24-.18-.24-.16-.27-.13-.29-.12-.31-.1-.34-.07-.36-.06-.4-.05-.42-.04-.46-.02-.49-.02-.52-.01-.57V8.07l.01-.56.02-.53.02-.49.04-.45.05-.43.06-.4.08-.36.1-.33.1-.32.14-.29.16-.26.18-.25.2-.23.23-.21.24-.18.27-.15.3-.14.3-.1.34-.1.37-.08.4-.06.41-.05.46-.04.5-.02.52-.02.56-.01h5.86l.56.01.53.02zM7.25 8c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 8m0 4c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M8 15.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
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

export default IconAiDocumentLines;
