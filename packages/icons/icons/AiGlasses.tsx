import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGlasses = forwardRef<SVGSVGElement, IconProps>(function IconAiGlasses(
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
            d="M18.56 19.96a4 4 0 1 0-2.33-.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m14 16.21-.66-.23a4 4 0 0 0-2.68 0l-.66.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m2 16 .76-8.4c.12-1.26.18-1.9.55-2.36.37-.47.97-.67 2.17-1.07L6 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m22 16-.66-7.27"
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
            d="M14 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M2 16a4 4 0 1 0 8 0 4 4 0 1 0-8 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14 16.21-.66-.23a4 4 0 0 0-2.68 0l-.66.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2 16 .76-8.4c.12-1.26.18-1.9.55-2.36.37-.47.97-.67 2.17-1.07L6 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m22 16-.66-7.27"
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
            d="M6.71 3.76c.13.4-.08.82-.47.95l-.52.17c-.62.21-1.03.35-1.33.49a1.3 1.3 0 0 0-.5.34c-.08.1-.15.25-.22.56-.06.33-.1.76-.16 1.4l-.37 4.04-.05.53a4.75 4.75 0 0 1 7.59 2.94Q11.33 15 12 15v1.5q-.56 0-1.1.19l-.21.07a4.75 4.75 0 1 1-9.37-1.6l.7-7.66q.07-.9.18-1.52c.1-.44.23-.84.52-1.2q.43-.52 1.05-.78.58-.25 1.44-.53l.55-.18c.4-.13.82.08.95.47"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.57 8.58c-.06-.69 1.35-1.77 1.41-1.08l.7 7.66.06.48v.48l-.03.47-.09.46-.12.44-.17.43-.21.4-.25.39-.28.36-.31.33-.35.3-.38.26-.4.24-.43.19-.45.15-.48.1-.48.06h-.48l-.47-.03-.45-.08-.45-.13-.42-.17-.4-.2-.4-.25-.35-.28-.33-.32-.3-.35-.27-.37-.23-.4-.2-.43-.14-.46-.1-.47-.22-.07-.27-.09-.27-.05-.28-.04-.28-.01V15h.33l.33.04.33.06.32.08.06-.3.09-.3.1-.3.12-.28.28-.53.36-.5.41-.43.47-.4.25-.16.26-.16.28-.14.28-.12.3-.1.3-.08.6-.11.6-.03.6.05.6.13.57.2.55.27.26.16.25.19z"
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
            d="M20.57 8.58c-.06-.69 1.35-1.78 1.41-1.09l.7 7.66.06.48v.48l-.03.47-.09.46-.12.44-.17.43-.21.4-.25.39-.28.35-.31.34-.35.3-.38.26-.4.23-.43.2-.45.15-.48.1-.48.06h-.48l-.47-.03-.45-.08-.45-.13-.42-.17-.4-.2-.4-.25-.35-.29-.33-.31-.3-.35-.27-.37-.23-.4-.2-.44-.14-.45-.11-.47-.22-.07-.27-.09-.27-.06-.27-.04h-.56l-.27.04-.27.06-.27.09-.22.07-.1.45-.13.43-.17.41-.21.4-.24.36-.28.34-.3.31-.33.28-.35.26-.38.21-.4.19-.4.15-.43.1-.44.08-.45.02-.46-.01-.46-.06-.44-.1-.43-.14-.4-.18-.38-.21-.36-.25-.34-.28-.3-.3-.29-.33-.24-.36-.22-.38-.18-.4-.14-.42-.1-.43-.07-.45-.02-.46.02-.42.05-.4.7-7.67.04-.43.04-.4.05-.36.05-.33.08-.32.1-.31.15-.3.2-.27.22-.25.25-.2.27-.18.3-.15.3-.12.35-.13.38-.14.41-.14.55-.18.15-.03h.14l.14.03.13.05.12.08.1.1.09.11.06.14.03.14v.15l-.02.14-.05.13-.07.12-.1.1-.1.1-.14.06-.52.18-.43.14-.35.13-.3.11-.25.11-.18.1-.14.08-.1.08-.08.08-.06.1-.05.1-.06.16-.05.2-.04.27-.04.31-.04.38-.04.44-.37 4.04-.05.53.25-.18.26-.17.55-.27.57-.2.6-.13.6-.04.6.02.6.11.3.08.3.1.28.13.28.14.26.15.25.17.47.4.41.43.36.5.28.53.12.28.1.29.09.3.06.3.33-.08.32-.05.34-.03L12 15h.33l.33.04.33.05.33.08.06-.3.08-.3.1-.29.12-.28.3-.54.35-.49.4-.44.48-.39.25-.17.26-.15.28-.14.28-.12.3-.1.3-.09.6-.1.6-.03.6.04.6.13.57.2.55.27.26.17.25.18z"
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

export default IconAiGlasses;
