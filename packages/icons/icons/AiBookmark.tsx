import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBookmark = forwardRef<SVGSVGElement, IconProps>(function IconAiBookmark(
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
            d="M16.39 2H7.18a3.87 3.87 0 0 0-3.86 3.86v10.43m0 2.4v1.26c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V9.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9.59 11 1.5 1.5 4-4"
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
            d="M16.39 2H7.18a3.87 3.87 0 0 0-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71a2.1 2.1 0 0 1 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V9.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9.59 11 1.5 1.5 4-4"
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
            d="M16.82 1.91c2.98 0 3.87 3.62 3.87 6.6v11.35l-.01.33-.05.3-.07.28-.1.24-.12.22-.14.2-.17.15-.18.14-.2.1-.23.06-.23.03h-.26l-.26-.03-.27-.08-.29-.1-.29-.15-4.88-2.7-.22-.1-.24-.07-.23-.05h-.48l-.24.05-.23.06-.23.1-4.88 2.71-.3.14-.28.11-.27.07-.26.04h-.26l-.23-.04-.22-.06-.2-.1-.2-.13-.16-.16-.14-.2-.12-.21-.1-.25-.07-.27-.05-.3-.01-.33V5.77l.02-.4L3.4 5l.1-.37.13-.36.17-.33.19-.32.22-.3.25-.27.27-.25.3-.22.32-.2.33-.16.36-.13.36-.1.39-.06.39-.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.09 13.25a.7.7 0 0 1-.53-.22l-1.5-1.5a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.97.97 3.47-3.47a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-4 4a.7.7 0 0 1-.53.22"
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
            d="M16.82 1.91c2.98 0 3.87 3.62 3.87 6.6v11.35l-.01.33-.05.3-.07.28-.1.24-.12.22-.14.2-.17.15-.18.14-.2.1-.23.06-.23.03h-.26l-.26-.03-.27-.08-.29-.1-.29-.15-4.88-2.7-.22-.1-.24-.07-.23-.05h-.48l-.24.05-.23.06-.23.1-4.88 2.71-.3.14-.28.11-.27.07-.26.04h-.26l-.23-.04-.22-.06-.2-.1-.2-.13-.16-.16-.14-.2-.12-.21-.1-.25-.07-.27-.05-.3-.01-.33V5.77l.02-.4L3.4 5l.1-.37.13-.36.17-.33.19-.32.22-.3.25-.27.27-.25.3-.22.32-.2.33-.16.36-.13.36-.1.39-.06.39-.02zm-1.2 7.12-4 4a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-1.5-1.5a.75.75 0 0 1 1.06-1.06l.97.97 3.47-3.47a.75.75 0 0 1 1.06 1.06"
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

export default IconAiBookmark;
