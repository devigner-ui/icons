import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiServers = forwardRef<SVGSVGElement, IconProps>(function IconAiServers(
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
            d="M2 17.5c0-1.89 0-2.83.59-3.41.58-.59 1.51-.59 3.41-.59h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41c-.58.59-1.51.59-3.41.59H8.56m-2.4 0H6c-1.89 0-2.83 0-3.41-.59C2 20.33 2 19.4 2 17.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 6.5c0-1.89 0-2.83.59-3.41C3.17 2.5 4.1 2.5 6 2.5h9.44m6.55 5.14c-.02 1.16-.12 1.82-.58 2.27-.58.59-1.51.59-3.41.59H6c-1.89 0-2.83 0-3.41-.59C2 9.33 2 8.4 2 6.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 6.5h4.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6.5h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11 17.5h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 17.5h2"
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
            d="M2 17.5c0-1.89 0-2.83.59-3.41.58-.59 1.51-.59 3.41-.59h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41c-.58.59-1.51.59-3.41.59H6c-1.89 0-2.83 0-3.41-.59C2 20.33 2 19.4 2 17.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 6.5c0-1.89 0-2.83.59-3.41C3.17 2.5 4.1 2.5 6 2.5h9.44m6.55 5.14c-.02 1.16-.12 1.82-.58 2.27-.58.59-1.51.59-3.41.59H6c-1.89 0-2.83 0-3.41-.59C2 9.33 2 8.4 2 6.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 6.5h4.44"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6.5h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M11 17.5h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 17.5h2"
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
            d="M6 13h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 21 19.9 21 18 21H6c-1.89 0-2.83 0-3.41-.59C2 19.83 2 18.9 2 17s0-2.83.59-3.41C3.17 13 4.1 13 6 13"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.78 3C18.56 3 22 3.72 22 6.5v1.75l-.03.51-.04.44-.07.38-.1.32-.15.28-.2.23-.23.2-.28.14-.32.1-.38.08-.44.04-.5.02h-.59l-.32.01H4.75l-.5-.03-.44-.04-.38-.07-.33-.1-.27-.15-.24-.2-.2-.23-.14-.28-.1-.32-.07-.38-.05-.44-.02-.5V5.74l.02-.5.05-.45.07-.37.1-.33.15-.27.2-.24.23-.2.27-.14.33-.1.37-.07.44-.05.5-.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.13 6.25c.84 0 2.4 1.5 1.56 1.5H11l-.15-.01-.14-.05-.13-.07-.11-.09-.1-.1-.06-.14-.04-.14-.02-.15.02-.15.04-.14.07-.13.1-.1.1-.1.13-.07.14-.04.15-.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M5.25 7c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 7"
            fill="currentColor"
          />
          <path
            d="M10.25 17c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M5.25 17c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
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
            d="M15.78 3C18.56 3 22 3.72 22 6.5v1.75l-.03.51-.04.44-.07.38-.1.32-.16.28-.19.23-.24.2-.27.14-.32.1-.38.08-.44.04-.5.02h-.59l-.32.01H4.75l-.5-.03-.44-.04-.38-.07-.33-.1-.27-.15-.24-.2-.2-.23-.14-.28-.1-.32-.07-.38-.05-.44-.02-.5v-.91L2 7V5.75l.03-.5.04-.45.07-.37.1-.33.15-.27.2-.24.23-.2.28-.14.32-.1.38-.08.44-.04.5-.02h.59L5.65 3zM6 6.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm10.13 0c.84 0 2.4 1.5 1.56 1.5H11l-.15-.01-.14-.05-.13-.07-.11-.09-.1-.1-.06-.14-.04-.14-.02-.15.02-.15.04-.14.07-.13.1-.1.1-.1.13-.07.14-.04.15-.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M2 17c0-1.89 0-2.83.59-3.41C3.17 13 4.1 13 6 13h12c1.89 0 2.83 0 3.41.59.59.58.59 1.52.59 3.41s0 2.83-.59 3.41C20.83 21 19.9 21 18 21H6c-1.89 0-2.83 0-3.41-.59C2 19.83 2 18.9 2 17m4-.75a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5zm4.25.75c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75"
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

export default IconAiServers;
