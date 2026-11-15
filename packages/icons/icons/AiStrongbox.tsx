import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiStrongbox = forwardRef<SVGSVGElement, IconProps>(function IconAiStrongbox(
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
            d="M9 22h6c5 0 7-2 7-7V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v2.19m0 2.4V15c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.35 10.91c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.4 2.4 0 0 1-1.13-2.02 2.38 2.38 0 1 1 4.73.35"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M22 10.91h-7.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M9.65 10.91H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M9 22h6c5 0 7-2 7-7V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.35 10.91c-.1.71-.52 1.31-1.1 1.67v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.4 2.4 0 0 1-1.13-2.02 2.38 2.38 0 1 1 4.73.35m7.65 0h-7.65m-4.7 0H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M16.86 2.03a5.3 5.3 0 0 1 5.12 5.12l.02.66v8.37l-.02.67-.08.63-.12.59-.17.56-.22.51-.27.48-.3.44-.36.4-.4.34-.43.31-.48.27-.51.22-.56.17-.6.12-.62.08-.67.02H7.82l-.66-.02-.63-.08-.6-.12-.55-.17-.52-.22-.48-.27-.43-.3-.4-.36-.35-.4-.31-.43-.26-.48-.22-.51-.17-.56-.13-.6-.07-.62-.03-.67V7.81l.03-.66.07-.63.13-.6.17-.55.22-.52.26-.48.3-.43.36-.4.4-.35.43-.31.48-.26.52-.22.55-.17.6-.13.63-.07.66-.03h8.37z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M22 10.16h-7.67q0-.11-.03-.22a2.4 2.4 0 0 0-1.66-1.66 2.36 2.36 0 0 0-2.97 1.88H2v1.5h7.91q.3.58.84.92v1.98a1.25 1.25 0 0 0 2.5 0v-1.98q.54-.34.84-.92H22z"
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
            d="M13.25 12.58v1.98a1.25 1.25 0 0 1-2.5 0v-1.98a2.3 2.3 0 0 1-.84-.92h-6.9a1 1 0 0 0-1 1v3.53A5.8 5.8 0 0 0 7.8 22h8.37c3.22 0 5.82-2.6 5.82-5.81v-3.53a1 1 0 0 0-1-1h-6.9q-.3.58-.85.92"
            fill="currentColor"
          />
          <path
            d="M16.2 2c3.04 0 5.61 2.2 5.77 5.24l.03.57v1.35l-.02.2-.06.19-.09.17-.12.15-.15.12-.17.1-.19.05-.2.02h-6.67l-.03-.22-.14-.39-.2-.35-.25-.3-.3-.27-.34-.2-.37-.15-.4-.09-.4-.01-.41.05-.39.12-.35.19-.32.23-.27.3-.22.32-.17.37-.1.4H3l-.2-.02-.2-.06-.16-.09-.15-.12-.12-.15-.1-.17-.05-.19-.02-.2V7.81l.03-.57.08-.57.14-.55.19-.53.24-.51.29-.5.34-.45.38-.43.43-.38.46-.34.48-.3.52-.24.53-.19.55-.14.56-.08L7.8 2z"
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

export default IconAiStrongbox;
