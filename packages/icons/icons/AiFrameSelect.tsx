import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFrameSelect = forwardRef<SVGSVGElement, IconProps>(function IconAiFrameSelect(
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
            d="M11 5v3H9a1 1 0 0 0-1 1v2H5V9a4 4 0 0 1 4-4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M13 19v-3h2a1 1 0 0 0 1-1v-2h3v2a4 4 0 0 1-4 4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M21.95 7.76Q22 8.35 22 9v6c0 5-2 7-7 7m0 0H9c-5 0-7-2-7-7v-1.42m0-2.4V9c0-5 2-7 7-7h6q.66 0 1.24.05"
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
            opacity={duotone ? "0.4" : "1"}
            d="M11 5v3H9a1 1 0 0 0-1 1v2H5V9a4 4 0 0 1 4-4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 19v-3h2a1 1 0 0 0 1-1v-2h3v2a4 4 0 0 1-4 4z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6q.66 0 1.24.05m5.71 5.71Q22 8.35 22 9v6c0 5-2 7-7 7"
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
            d="M16.86 2.03a5.3 5.3 0 0 1 5.12 5.12l.02.66v8.37l-.02.67-.08.63-.12.59-.17.56-.22.51-.27.48-.3.44-.36.4-.4.34-.43.31-.48.27-.51.22-.56.17-.6.12-.62.08-.67.02H7.82l-.66-.02-.63-.08-.6-.12-.55-.17-.52-.22-.48-.27-.43-.3-.4-.36-.35-.4-.31-.43-.26-.48-.22-.51-.17-.56-.13-.6-.07-.62-.03-.67V7.81l.03-.66.07-.63.13-.6.17-.55.22-.52.26-.48.3-.43.36-.4.4-.35.43-.31.48-.26.52-.22.55-.17.6-.13.63-.07.66-.03h8.37z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11 5.5v2a.5.5 0 0 1-.5.5H9a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V9a4 4 0 0 1 4-4h1.5c.28 0 .5.22.5.5"
            fill="currentColor"
          />
          <path
            d="M13 18.5v-2c0-.28.22-.5.5-.5H15a1 1 0 0 0 1-1v-1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V15a4 4 0 0 1-4 4h-1.5a.5.5 0 0 1-.5-.5"
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
            d="M16.86 2.03a5.3 5.3 0 0 1 5.12 5.12l.02.66v8.37l-.02.67-.08.63-.12.59-.17.56-.22.51-.27.48-.3.44-.36.4-.4.34-.43.31-.48.27-.51.22-.56.17-.6.12-.62.08-.67.02H7.82l-.66-.02-.63-.08-.6-.12-.55-.17-.52-.22-.48-.27-.43-.3-.4-.36-.35-.4-.31-.43-.26-.48-.22-.51-.17-.56-.13-.6-.07-.62-.03-.67V7.81l.03-.66.07-.63.13-.6.17-.55.22-.52.26-.48.3-.43.36-.4.4-.35.43-.31.48-.26.52-.22.55-.17.6-.13.63-.07.66-.03h8.37zM11 7.5a.5.5 0 0 1-.5.5H9a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V9a4 4 0 0 1 4-4h1.5c.28 0 .5.22.5.5zm8 7.5a4 4 0 0 1-4 4h-1.5a.5.5 0 0 1-.5-.5v-2c0-.28.22-.5.5-.5H15a1 1 0 0 0 1-1v-1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5z"
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

export default IconAiFrameSelect;
