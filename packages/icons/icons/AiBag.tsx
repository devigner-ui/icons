import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBag = forwardRef<SVGSVGElement, IconProps>(function IconAiBag(
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
            d="M15.42 21.48q-1.12.02-2.57.02h-1.7c-3.93 0-5.9 0-7.07-1.14a4 4 0 0 1-.55-.68c-.9-1.37-.5-3.3.26-7.15m.01 0c.53-2.69.8-4.03 1.69-4.9q.24-.24.53-.43c.78-.53 1.75-.66 3.4-.7m2.4 0h1.03c2.74 0 4.11 0 5.13.7q.29.2.53.44c.89.86 1.16 2.2 1.7 4.89q.25 1.24.43 2.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"
            fill="currentColor"
          />
          <path
            d="M8 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"
            fill="currentColor"
          />
          <path
            d="M9 6.5v-1a3 3 0 1 1 6 0v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M3.8 12.53c.53-2.69.8-4.03 1.69-4.9q.24-.24.53-.43c1.02-.7 2.38-.7 5.13-.7h1.7c2.74 0 4.11 0 5.13.7q.29.2.53.44c.89.86 1.16 2.2 1.7 4.89q.25 1.24.43 2.24m-5.22 6.71q-1.12.02-2.57.02h-1.7c-3.93 0-5.9 0-7.07-1.14a4 4 0 0 1-.55-.68c-.9-1.37-.5-3.3.26-7.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 6.5v-1a3 3 0 1 1 6 0v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.56 14.57c.66 3.28-1.35 7.11-4.69 7.17l-.58.01H7.6l-.5-.02-.48-.01-.43-.03-.4-.03-.38-.05-.35-.05-.32-.08-.29-.09-.26-.1-.24-.13-.22-.15-.2-.16-.18-.2-.15-.21-.13-.23-.1-.24-.08-.27-.05-.28-.03-.3v-.68l.03-.37.05-.4.06-.44.08-.46.09-.5.1-.53.11-.57.12-.6.59-3 .08-.42.08-.39.08-.37.08-.34.07-.32.08-.3.07-.28.08-.26.18-.46.2-.39.23-.33.29-.28.33-.22.37-.17.42-.12.49-.09.26-.02.3-.02.3-.02.33-.01h.73l.4-.01h5.8l.35.01.33.01.31.02.29.02.27.02.48.09.42.12.37.17.33.22.29.28.23.33.2.39.18.46.08.26.08.27.07.3.08.32.07.35.08.37.08.39.08.42z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M14 9.75a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"
            fill="currentColor"
          />
          <path
            d="M8 9.75a1 1 0 1 0 2 0 1 1 0 1 0-2 0Z"
            fill="currentColor"
          />
          <path
            d="M9.75 5.75a2.25 2.25 0 0 1 4.5 0v1h1.5v-1a3.75 3.75 0 1 0-7.5 0v1h1.5z"
            fill="currentColor"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M20.56 14.82c.63 3.17-.92 7.17-4.15 7.17h-.54l-.58.01H7.6l-.5-.02-.48-.01-.43-.03-.4-.03-.38-.05-.35-.05-.32-.08-.29-.09-.26-.1-.24-.13-.22-.15-.2-.16-.18-.2-.15-.21-.13-.23-.1-.24-.08-.27-.05-.28-.03-.3v-.68l.03-.37.05-.4.06-.44.08-.46.09-.5.1-.53.11-.57.12-.6.6-3 .08-.42.08-.39.08-.37.08-.34.07-.32.08-.3.07-.28.08-.26.18-.46.2-.39.24-.33.28-.28.24-.17.25-.14.29-.11.3-.09.35-.06.38-.05.42-.03.45-.02V6l.02-.38.06-.38.09-.35.12-.35.16-.33.19-.3.22-.3.24-.26.26-.24.3-.22.3-.19.33-.16.34-.12.36-.1.38-.05.38-.02.38.02.37.06.36.09.35.12.33.16.3.2.3.2.26.25.24.26.22.3.19.3.15.33.13.35.1.36.05.37.02.38v1.01l.46.02.42.03.38.05.35.06.3.09.3.1.25.15.24.17.28.28.23.33.2.39.18.46.08.26.07.27.08.3.07.32.08.35.08.37.08.39.08.42zM9.75 6a2.25 2.25 0 1 1 4.5 0v1h-4.5zM15 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBag;
