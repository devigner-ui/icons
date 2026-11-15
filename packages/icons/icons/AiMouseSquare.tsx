import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMouseSquare = forwardRef<SVGSVGElement, IconProps>(function IconAiMouseSquare(
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
            d="M22 12V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v2.19m0 2.4V15c0 5 2 7 7 7h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L13.08 15a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
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
            d="M22 12V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03L13.08 15a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
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
            d="M17.32 1.86c2.78.89 3.2 3.84 3.2 6.76v6.33l-.02.63-.07.6-.12.57-.17.52-.2.5-.25.45-.3.41-.33.38-.38.33-.41.3-.46.25-.49.2-.52.17-.57.11-.6.08-.63.02H7.05l-.63-.02-.6-.07-.56-.12-.53-.17-.49-.2-.45-.25-.42-.3-.37-.33-.34-.38-.3-.41-.24-.46-.21-.49-.17-.52-.11-.57-.08-.6-.02-.63V7l.02-.63.08-.6.11-.56.17-.53.2-.5.25-.45.3-.41.33-.38.38-.33.41-.3.46-.24.49-.21.52-.16.57-.12.6-.07.63-.03H15l.63.02.6.08.56.11z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m21.48 18.32-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03l-1.85-5.95a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
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
            d="M17.32 1.86c2.78.89 3.2 3.84 3.2 6.76v4.26l-.01.12-.04.1-.07.1-.08.09-.1.05-.12.04H20l-.12-.02-3.93-1.22-.4-.1-.42-.04-.4.02-.4.07-.4.12-.36.18-.34.23-.32.27-.27.32-.23.34-.17.37-.12.39-.07.4-.02.4.04.41.1.41 1.21 3.9.02.12v.11l-.03.11-.06.1-.08.1-.1.06-.11.04-.12.01H7.04l-.63-.02-.6-.08-.56-.11-.53-.17-.49-.2-.45-.25-.42-.3-.37-.33-.34-.38-.3-.41-.24-.46-.21-.49-.16-.53-.12-.56-.07-.6-.03-.63V7l.03-.63.07-.6.12-.56.16-.53.2-.5.26-.45.3-.41.33-.38.37-.33.42-.3.45-.25.5-.2.52-.17.56-.11.6-.07.63-.03H15l.63.03.6.07.56.11z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m21.48 18.32-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63a1.52 1.52 0 0 1-2.89-.03l-1.85-5.95a1.52 1.52 0 0 1 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
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

export default IconAiMouseSquare;
