import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiNotepad = forwardRef<SVGSVGElement, IconProps>(function IconAiNotepad(
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
            d="m21.66 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77q-.75-.06-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19q.3-1.28.74-2.2c1.13-2.34 3.03-3.03 6.18-2.35m6.78 4.98q.06 1.18-.3 2.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.06 19.39q-.93.62-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76l-.02-.08m-.74-2.28-.52-1.59c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52q.62-.2 1.17-.31-.45.92-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4q.87.21 1.62.27"
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
            d="m21.66 10.44-.98 4.18c-.84 3.61-2.5 5.07-5.62 4.77q-.75-.06-1.62-.27l-1.68-.4c-4.17-.99-5.46-3.05-4.48-7.23l.98-4.19q.3-1.28.74-2.2c1.13-2.34 3.03-3.03 6.18-2.35m6.78 4.98q.06 1.18-.3 2.71"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.06 19.39q-.93.62-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52q.62-.2 1.17-.31-.45.92-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4q.87.21 1.62.27"
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
            d="M15.5 2.82c3.08.66 6.41 1.71 6.46 4.86l.01.62-.05.67-.1.71-.16.76-.98 4.18-.17.65-.18.6-.21.56-.23.5-.26.46-.28.4-.3.37-.33.31-.35.27-.38.22-.41.18-.44.14-.48.09-.5.05h-.53l-.57-.03-.38-.04-.4-.06-.41-.08-.43-.1-1.68-.4-.75-.19-.68-.22-.62-.26-.55-.28-.48-.31-.43-.35-.36-.38-.3-.42-.24-.45-.18-.5-.12-.53-.07-.58v-.62l.04-.66.1-.71.16-.76.98-4.19.16-.62.18-.57.19-.53L9 5.1l.23-.43.25-.4.27-.35.29-.3.31-.28.34-.23.36-.2.39-.15.4-.12.44-.08.47-.05h.5l.51.02.55.06.58.1z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.06 19.39q-.93.62-2.35 1.08l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.58-.52q.62-.2 1.17-.31-.45.92-.74 2.2l-.98 4.19c-.98 4.18.31 6.24 4.48 7.23l1.68.4q.87.21 1.62.27"
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
            d="M13.55 20.16q-.39.16-.84.31l-1.58.52c-3.97 1.28-6.06.21-7.35-3.76L2.5 13.28c-1.28-3.97-.22-6.07 3.75-7.35l1.54-.51q-.28.72-.5 1.65l-.98 4.19c-1.1 4.71.51 7.31 5.22 8.43l1.68.4z"
            fill="currentColor"
          />
          <path
            d="M15.5 2.82c3.08.66 6.46 1.71 6.46 4.86v.62l-.04.67-.1.71-.16.76-.98 4.18-.17.65-.18.6-.21.56-.23.5-.26.46-.27.4-.3.37-.33.31-.36.27-.38.22-.41.18-.44.14-.47.09-.5.05h-.54l-.57-.03-.38-.04-.4-.06-.41-.08-.43-.1-1.68-.4-.75-.19-.68-.23-.62-.25-.55-.28-.48-.32-.43-.34-.36-.38-.3-.42-.24-.45-.18-.5-.12-.53-.07-.58v-.62l.04-.66.1-.71.16-.76.98-4.19.16-.62.17-.57.2-.53L9 5.1l.23-.43.25-.4.27-.35.3-.3.3-.28.34-.23.36-.2.39-.15.4-.12.45-.08.46-.05h.5l.51.02.55.06.58.1z"
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

export default IconAiNotepad;
