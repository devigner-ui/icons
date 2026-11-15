import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBox = forwardRef<SVGSVGElement, IconProps>(function IconAiBox(
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
            d="M21.8 8.13c.2.88.2 2.04.2 3.81v.12c0 2.52 0 3.79-.6 4.8s-1.67 1.58-3.82 2.7l-2 1.06C13.82 21.54 12.94 22 12 22s-1.82-.46-3.58-1.38l-1-.52M5.3 18.98c-1.42-.77-2.22-1.3-2.7-2.12-.6-1.01-.6-2.28-.6-4.8v-.12c0-2.52 0-3.79.6-4.8s1.67-1.58 3.82-2.7l2-1.06C10.18 2.46 11.06 2 12 2c.82 0 1.6.35 2.94 1.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12 3 7.5m9 4.5v9.5m0-9.5 4.5-2.25.5-.25m0 0V13m0-3.5-9.5-5"
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
            d="M21.8 8.13c.2.88.2 2.04.2 3.81v.12c0 2.52 0 3.79-.6 4.8s-1.67 1.58-3.82 2.7l-2 1.06C13.82 21.54 12.94 22 12 22s-1.82-.46-3.58-1.38l-2-1.05c-2.15-1.13-3.23-1.7-3.82-2.71-.6-1.01-.6-2.28-.6-4.8v-.12c0-2.52 0-3.79.6-4.8s1.67-1.58 3.82-2.7l2-1.06C10.18 2.46 11.06 2 12 2c.82 0 1.6.35 2.94 1.05"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 12 3 7.5m9 4.5v9.5m0-9.5 4.5-2.25.5-.25m0 0V13m0-3.5-9.5-5"
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
            d="M8.42 20.62C10.18 21.54 11.06 22 12 22V12L2.64 7.07l-.04.07C2 8.15 2 9.42 2 11.94v.12c0 2.52 0 3.79.6 4.8s1.67 1.58 3.82 2.7z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.96 3.06c2.25 1.21 5.75 4.35 3.49 5.54L12 12 2.64 7.07l.25-.35.3-.32.36-.3.42-.3.5-.3.27-.17.29-.16.31-.17.34-.18.36-.2.38-.2 2-1.04.32-.17.3-.15.29-.15.26-.13.49-.24.44-.2.4-.15.37-.1.36-.07L12 2l.35.02.36.07.37.1.4.15.44.2.5.24.26.13z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.45 8.6c1.16-.61 3.03-1.92 3.3-.64l.1.48.07.53.03.3.02.31.01.33.01.36v.78l.01.43v2.25l-.02.36-.01.33-.02.31-.02.3-.08.53-.1.48-.15.43-.2.39-.24.36-.3.33-.36.31-.43.31-.5.31-.27.16-.3.17-.32.18-.34.18-.37.2-.39.2-2 1.05-.32.17-.3.15-.28.15-.27.14-.49.23-.44.2-.4.15-.37.1-.36.07L12 22V12z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M17.96 8.18c.74-.37 2.76.29 2.02.66l-2.23 1.12V13l-.01.15-.05.14-.07.13-.09.11-.11.1-.13.06-.14.05-.15.01-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.04-.14-.02-.15v-2.29l-3.5 1.75v9.44l-.37.07L12 22l-.38-.03-.37-.07v-9.44l-9-4.5.12-.36.16-.34.2-.32.23-.3L12 11.16l3.39-1.7-9.07-4.98.1-.05 1.5-.78 9.1 5z"
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
            d="M14.96 3.06c2.04 1.09 5.09 4.09 3.01 5.12l-.95.47-8.92-5.1.32-.17.32-.17.3-.15.28-.15.27-.13.49-.24.44-.2.4-.15.37-.1.36-.07L12 2l.35.02.36.07.37.1.4.16.44.19.5.24.26.13z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m21.83 8.31.07.39.04.42.03.46.02.5v4.01l-.02.33-.02.31-.03.3-.07.53-.1.48-.15.43-.2.39-.25.36-.3.33-.35.31-.43.31-.5.31-.27.16-.3.17-.32.18-.34.18-.37.2-.4.2-2 1.05-.46.24-.42.22-.39.2-.35.17-.33.15-.3.12-.3.1-.27.08v-9.44l3.5-1.75v2.3l.01.14.05.14.07.13.09.11.11.1.13.06.14.05.15.01.15-.01.14-.05.13-.07.1-.09.1-.11.07-.13.04-.14.02-.15V9.96l2.24-1.12q.43-.1.76-.38l1-.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.25 21.9v-9.44l-9-4.5C2 8.86 2 10.05 2 11.94v.12c0 2.52 0 3.79.6 4.8s1.67 1.58 3.82 2.7l2 1.06c1.3.68 2.11 1.1 2.83 1.28"
            fill="currentColor"
          />
          <path
            d="M2.96 6.64 12 11.16l3.41-1.7-8.89-5.08-.1.05c-1.77.93-2.81 1.48-3.46 2.21"
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

export default IconAiBox;
