import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMusic = forwardRef<SVGSVGElement, IconProps>(function IconAiMusic(
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
            d="M22 15V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h1.41m2.4 0H15c5 0 7-2 7-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.42 17.11a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.75 14.49V8.35c0-1.31-.82-1.49-1.65-1.26l-3.14.86c-.57.16-.96.61-.96 1.26v6.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.18 16.06a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9.99 11.04 5.76-1.57"
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
            d="M22 15V9q0-.66-.05-1.24m-5.71-5.71Q15.65 2 15 2H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.42 17.11a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14m7.33-2.62V8.35c0-1.31-.82-1.49-1.65-1.26l-3.14.86c-.57.16-.96.61-.96 1.26v6.34m4.18.51a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14m-4.19-5.02 5.76-1.57"
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
            d="M16.14 6.71c-.34-.26-.94-.51-1.9-.25l-2.99.82a2.04 2.04 0 0 0-1.54 2.01v3.78q-.31-.1-.65-.1a2.34 2.34 0 1 0 2.34 2.37l.01-.03v-3.62l3.78-1.03v1.42q-.31-.1-.65-.1a2.34 2.34 0 1 0 2.34 2.34V8.49c0-1-.41-1.52-.74-1.78m-7.08 9.25a.65.65 0 1 1 0-1.3.65.65 0 1 1 0 1.3m5.48-1a.65.65 0 1 1 0-1.3c.36 0 .65.29.65.65a.66.66 0 0 1-.65.65"
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
            d="M14.54 13.67a.65.65 0 1 0 0 1.3c.36 0 .65-.29.65-.65a.66.66 0 0 0-.65-.65"
            fill="currentColor"
          />
          <path
            d="M9.06 14.66a.65.65 0 1 0 0 1.3.65.65 0 1 0 0-1.3"
            fill="currentColor"
          />
          <path
            d="M16.86 2.03c3.01.13 5.13 2.77 5.13 5.78v8.38l-.02.67-.08.63-.12.59-.17.56-.22.51-.26.48-.31.44-.36.4-.4.35-.43.3-.48.27-.51.22-.56.17-.6.12-.62.08-.67.02H7.81l-.66-.02-.63-.08-.6-.12-.55-.17-.52-.22-.47-.27-.44-.3-.4-.36-.35-.4-.3-.43-.27-.48-.22-.52-.17-.56-.13-.59-.07-.63-.03-.67V7.81l.03-.66.07-.63.13-.6.17-.55.22-.52.26-.48.31-.43.35-.4.4-.35.44-.31.47-.26.52-.22.56-.17.59-.13.63-.07L7.8 2h8.38zm.02 7.52v4.76a2.34 2.34 0 1 1-1.69-2.24v-1.42l-3.78 1.03v3.62l-.01.03a2.34 2.34 0 1 1-1.69-2.27V9.3a2 2 0 0 1 1.54-2l2.99-.83c.96-.26 1.56 0 1.9.25.34.26.74.77.74 1.77z"
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

export default IconAiMusic;
