import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiGraphic = forwardRef<SVGSVGElement, IconProps>(function IconAiGraphic(
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
            d="M8.64 2.57c1.06-.44 1.7-.6 2.47-.08.9.59.89 1.57.89 3.51v2c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h.48m2.4 0c1.37.02 2.13.15 2.62.9.6.89.3 1.6-.29 3A10 10 0 0 1 2.58 8.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 2.31c3.51.9 6.28 3.68 7.18 7.19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M8.64 2.57c1.06-.44 1.7-.6 2.47-.08.9.59.89 1.57.89 3.51v2c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h2c1.94 0 2.91 0 3.5.9.6.89.3 1.6-.29 3A10 10 0 0 1 2.58 8.65"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.5 2.31c3.51.9 6.28 3.68 7.18 7.19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M2.4 8.7c1.08-3.25 3.13-4.98 6.39-6.04l.4-.13.36-.09.33-.02.33.03.32.1.16.09.17.1.16.12.14.12.12.14.1.14.08.16.08.18.1.39.06.45.04.53v3.95l.01.3v.28l.03.5.04.45.07.37.1.33.15.27.2.24.23.2.28.14.32.1.38.08.44.04.51.02h.58l.32.01h3.34l.3.01.51.04.46.06.38.1.18.08.16.09.14.1.14.12.12.14.12.16.1.16.08.17.11.32.04.32-.03.34-.08.36-.13.4-.17.43-.2.5-.35.72-.39.68-.44.64-.48.6-.53.57-.57.51-.6.48-.64.42-.66.37-.7.32-.71.27-.74.21-.76.16-.77.1-.79.04-.8-.03-.78-.09-.78-.15-.75-.2L8 21.5l-.7-.32-.67-.37-.64-.41-.6-.47-.57-.5-.53-.56-.5-.59-.43-.63-.4-.67-.34-.7-.3-.73-.23-.76-.17-.77-.11-.78-.05-.78.01-.77.07-.77.13-.75.19-.75z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.52 2.38c.1-.4.52-.64.92-.54 3.78.97 6.75 3.94 7.72 7.72a.75.75 0 1 1-1.45.38 9.3 9.3 0 0 0-6.65-6.65.75.75 0 0 1-.54-.91"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M2.4 8.7c1.08-3.25 3.13-4.98 6.39-6.04l.4-.13.36-.09.33-.02.33.03.32.1.16.09.17.1.16.12.14.12.12.14.1.14.08.16.08.18.1.39.06.45.04.53v3.95l.01.3v.28l.03.5.04.45.07.37.1.33.15.27.2.24.23.2.28.14.32.1.38.08.44.04.51.02h.58l.32.01h3.34l.3.01.51.04.46.06.38.1.18.08.16.09.14.1.14.12.12.14.12.16.1.16.08.17.11.32.04.32-.03.34-.08.36-.13.4-.17.43-.2.5-.35.72-.39.68-.44.64-.48.6-.53.57-.57.51-.6.48-.64.42-.66.37-.7.32-.71.27-.74.21-.76.16-.77.1-.79.04-.8-.03-.78-.09-.78-.15-.75-.2L8 21.5l-.7-.32-.67-.37-.64-.41-.6-.47-.57-.5-.53-.56-.5-.59-.43-.63-.4-.67-.34-.7-.3-.73-.23-.76-.17-.77-.11-.78-.05-.78.01-.77.07-.77.13-.75.19-.75z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13.52 2.38c.1-.4.52-.64.92-.54 3.78.97 6.75 3.94 7.72 7.72a.75.75 0 1 1-1.45.38 9.3 9.3 0 0 0-6.65-6.65.75.75 0 0 1-.54-.91"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiGraphic;
