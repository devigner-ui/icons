import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGaming = forwardRef<SVGSVGElement, IconProps>(function IconAiGaming(
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
            d="m10.16 5.28.5.35c.8.57 1.87.57 2.67 0l.5-.35q.34-.23.7-.4m6.77 3.9c.49 1.67.75 3.9.7 6.82-.03 1.41-.36 2.97-1.63 3.58q-.6.3-1.4.32c-.63 0-1.14-.18-1.53-.44-.91-.6-1.58-1.6-2.55-2.1a4 4 0 0 0-1.9-.46H11q-1 0-1.89.46c-.97.5-1.64 1.5-2.55 2.1-.4.26-.9.44-1.53.44q-.8-.02-1.4-.32c-1.27-.6-1.6-2.17-1.62-3.58v-.1m.04-2.4c.27-5.25 1.78-7.7 3.85-8.44q.58-.18 1.2-.16h.6c.88 0 1.74.27 2.45.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 9.5v3M6 11h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
            fill="currentColor"
          />
          <path
            d="M16 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
            fill="currentColor"
          />
          <path
            d="M16.75 8.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
            fill="currentColor"
          />
          <path
            d="M16.75 11.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
            fill="currentColor"
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
            d="m10.16 5.28.5.35c.8.57 1.87.57 2.67 0l.5-.35q.34-.23.7-.4m6.77 3.9c.49 1.67.75 3.9.7 6.82-.03 1.41-.36 2.97-1.63 3.58q-.6.3-1.4.32c-.63 0-1.14-.18-1.53-.44-.91-.6-1.58-1.6-2.55-2.1a4 4 0 0 0-1.9-.46H11q-1 0-1.89.46c-.97.5-1.64 1.5-2.55 2.1-.4.26-.9.44-1.53.44q-.8-.02-1.4-.32c-1.27-.6-1.6-2.17-1.62-3.58-.12-7 1.52-10.1 3.89-10.94q.59-.18 1.2-.16h.6c.88 0 1.74.27 2.45.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 9.5v3M6 11h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.75 8.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.75 11.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
            fill="currentColor"
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
            d="M14.42 4.94c2.74-1.46 6.16.94 6.91 3.95l.1.4.1.4.09.44.08.45.07.48.06.49.05.51.04.54.04.56.02.57.01.6v1.27l-.02.53-.06.54-.1.52-.16.5-.21.47-.13.2-.15.2-.17.19-.19.16-.2.15-.23.12-.31.13-.34.1-.36.06-.39.03h-.23l-.22-.03-.4-.09-.36-.14-.32-.18-.3-.2-.28-.24-.55-.52-.33-.32-.34-.3-.36-.28-.39-.24-.45-.2-.47-.14-.47-.09-.5-.03h-1.99l-.5.03-.48.09-.47.14-.45.2-.38.24-.36.28-.35.3-.33.32-.55.52-.29.23-.29.21-.31.18-.36.14-.4.1-.46.02-.39-.02-.36-.06-.34-.1-.31-.14-.23-.12-.2-.15-.19-.16-.17-.19-.14-.2-.14-.2-.21-.47-.16-.5-.1-.52-.06-.53L2 15.6v-1.26l.02-.6.02-.58.04-.56.04-.53.06-.52.06-.49.07-.47.08-.45.08-.44.1-.41.1-.4.11-.37.25-.7.27-.62.3-.55.33-.48.35-.42.38-.36.4-.3.4-.24.44-.19.3-.07.3-.05.3-.03h1.24l.33.04.32.06.31.1.3.1.3.14.3.15.27.19.51.34.31.19.33.13.34.08.35.03.35-.03.35-.08.33-.13.31-.19.5-.35.27-.18z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.75 8.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
            fill="currentColor"
          />
          <path
            d="M7.5 8.75c.41 0 .75.34.75.75v.75H9a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9.5c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M19 10.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
            fill="currentColor"
          />
          <path
            d="M15.25 11.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            d="M17.5 12.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"
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
            d="M14.42 4.94c2.74-1.46 6.16.94 6.91 3.95l.1.4.1.4.09.44.08.45.07.48.06.49.05.51.04.54.04.56.02.57.01.6v1.27l-.02.53-.06.54-.1.52-.16.5-.21.47-.13.2-.15.2-.17.19-.19.16-.2.15-.23.12-.31.13-.34.1-.36.06-.39.03h-.23l-.22-.03-.4-.09-.36-.14-.32-.18-.3-.2-.28-.24-.55-.52-.33-.32-.34-.3-.36-.28-.39-.24-.45-.2-.47-.14-.47-.09-.5-.03h-1.99l-.5.03-.48.09-.47.14-.45.2-.38.24-.36.28-.35.3-.33.32-.55.52-.29.23-.29.21-.31.18-.36.14-.4.1-.46.02-.39-.02-.36-.06-.34-.1-.31-.14-.23-.12-.2-.15-.19-.16-.17-.19-.14-.2-.14-.2-.21-.47-.16-.5-.1-.52-.06-.53L2 15.6v-1.26l.02-.6.02-.58.04-.56.04-.53.06-.52.06-.49.07-.47.08-.45.08-.44.1-.41.1-.4.11-.37.25-.7.27-.62.3-.55.33-.48.35-.42.38-.36.4-.3.4-.24.44-.19.3-.07.3-.05.3-.03h1.24l.33.04.32.06.31.1.3.1.3.14.3.15.27.19.51.34.31.19.33.13.34.08.35.03.35-.03.35-.08.33-.13.31-.19.5-.35.27-.18zm2.33 3.56a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-9.25.25c.41 0 .75.34.75.75v.75H9a.75.75 0 0 1 0 1.5h-.75v.75a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V9.5c0-.41.34-.75.75-.75m11.5 2a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"
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

export default IconAiGaming;
