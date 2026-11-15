import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCommentary = forwardRef<SVGSVGElement, IconProps>(function IconAiCommentary(
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
            d="M12 22a10 10 0 0 0 9.42-13.35m-6.07-6.07A10 10 0 0 0 3.04 16.45q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l1.68-.45m2.28.26Q10 21.99 12 22"
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
            d="M12 22a10 10 0 0 0 9.42-13.35m-6.07-6.07A10 10 0 0 0 3.04 16.45q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14C8.93 21.64 10.45 22 12 22"
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
            d="M7.46 3.09a10 10 0 0 0-4.42 13.36q.28.56.14 1.15l-.6 2.23a1.3 1.3 0 0 0 1.6 1.59l2.22-.6c.38-.1.8-.04 1.15.14a10 10 0 0 0 14.28-7.1A9 9 0 0 1 7.46 3.09"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.48 2.63a8.6 8.6 0 0 1 6.01 6.22l.18.6.14.63.1.63.07.64.02.65-.01.48-.04.48-.05.46-.07.45-.3.33-.3.31-.32.3-.34.27-.34.26-.35.24-.36.22-.37.2-.76.36-.79.28-.8.2-.82.13-.83.05-.83-.02-.83-.1-.82-.18-.4-.12-.4-.13-.4-.16-.4-.18-.38-.2-.37-.21-.37-.24-.36-.26-.35-.27-.33-.29-.32-.3-.3-.31-.27-.33-.26-.33-.25-.35-.23-.35-.4-.74-.32-.77-.26-.8-.18-.8-.1-.82-.04-.83.05-.84.13-.83.09-.4.11-.42.13-.4.15-.4.18-.4.19-.39.21-.38.24-.38.58-.27.6-.24.61-.2.62-.15.63-.12.63-.07.63-.04h.63l.63.05.63.09.62.12.61.17z"
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
            d="M15.79 2.75c2.88 1.1 4.52 2.73 5.53 5.64l.26.75.2.77.13.79.07.8.01.8-.06.82-.12.8-.2.82-.26.79-.32.75-.37.72-.43.68-.49.65-.52.6-.58.55-.61.5-.66.45-.68.4-.72.35-.75.29-.78.23-.8.16-.8.1L12 22l-.58-.02-.57-.04-.57-.09-.57-.11-.55-.15-.55-.18-.54-.2-.52-.25-.28-.11-.29-.06-.29-.02-.3.05-2.21.6-.17.04h-.34l-.17-.04-.16-.05-.15-.07-.14-.1-.13-.11-.12-.13-.1-.14-.07-.15-.05-.16-.03-.17-.02-.17.02-.17.03-.17.6-2.23.04-.3v-.28l-.07-.29-.11-.28-.34-.76-.27-.77-.2-.8-.15-.79-.07-.8-.01-.8.05-.79.12-.78.17-.78.24-.76.3-.74.36-.72.42-.69.48-.66.53-.62.6-.58.63-.54.67-.47.7-.42.73-.35.74-.29.77-.23.78-.16.79-.1.79-.05.8.02.79.09.79.15.78.2z"
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

export default IconAiCommentary;
