import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSheet = forwardRef<SVGSVGElement, IconProps>(function IconAiSheet(
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
            d="M6 14.5h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6 18h5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 2.5V5c0 2.36 0 3.54.73 4.27S15.64 10 18 10h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M10.03 2c1.53 0 2.29 0 2.98.27s1.25.77 2.39 1.78l3.95 3.57c1.3 1.18 1.96 1.76 2.3 2.53.35.77.35 1.65.35 3.41V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-.8m-2.4 0H10c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14v-4l.01-1.67m6.32-6.32 1.7-.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M10.03 2c1.53 0 2.29 0 2.98.27s1.25.77 2.39 1.78l3.95 3.57c1.3 1.18 1.96 1.76 2.3 2.53.35.77.35 1.65.35 3.41V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14v-4l.01-1.67m6.32-6.32 1.7-.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 14.5h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 18h5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 2.5V5c0 2.36 0 3.54.73 4.27S15.64 10 18 10h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.34 2C5.47 2 2 4.8 2 8.67V14l.01 1.93.03 1.09.06.95.05.42.06.39.08.37.09.34.11.31.14.29.15.27.18.24.21.23.23.21.24.18.27.15.29.14.31.11.34.09.37.08.39.06.42.05.46.04 1.02.04 1.8.02h5.38l1.8-.02 1.02-.04.88-.09.39-.06.37-.08.34-.09.31-.11.29-.14.27-.15.24-.18.23-.21.21-.23.18-.24.15-.27.14-.29.11-.31.09-.34.08-.37.06-.39.05-.42.06-.95.04-1.69v-2.57l-.01-.68-.03-.58h-5.04l-.73-.02-.67-.03-.62-.07-.32-.06-.31-.08-.31-.1-.31-.13-.29-.15-.15-.09-.27-.2-.27-.24-.24-.27-.2-.27-.17-.3-.2-.45-.1-.31-.11-.47-.05-.32-.05-.46-.04-1.02-.01-1.36.01-2.84.02-.24L10.6 2z"
              mask={`url(#${cut})`}
              fill="currentColor"
            />
          </g>
          <path
            d="M6 13.75a.75.75 0 0 0 0 1.5h8a.75.75 0 1 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M6 17.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 1 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M11.5 2.26v2.83c0 1.1 0 2.07.1 2.85.12.85.38 1.7 1.07 2.39s1.54.95 2.39 1.06c.78.11 1.75.11 2.85.11h4.05l.02.5H22l-.01-.56a5.3 5.3 0 0 0-.96-2.64l-.28-.36A33 33 0 0 0 18 5.5a28 28 0 0 0-2.89-2.16 8 8 0 0 0-1.82-1.04l-.5-.16a6 6 0 0 0-1.29-.13z"
            fill="currentColor"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.34 2C5.47 2 2 4.8 2 8.67V14l.01 1.93.03 1.09.06.95.05.42.06.39.08.37.09.34.11.31.14.29.15.27.18.24.21.23.23.21.24.18.27.15.29.14.31.11.34.09.37.08.39.06.88.09.49.02 1.09.03h7.86l1.09-.03.95-.06.42-.05.39-.06.37-.08.34-.09.31-.11.29-.14.27-.15.24-.18.23-.21.21-.23.18-.24.15-.27.14-.29.11-.31.09-.34.08-.37.06-.39.09-.88.04-1.02.02-1.16v-2.57l-.01-.68-.03-.58h-5.04l-.73-.02-.67-.03-.62-.07-.32-.06-.31-.08-.31-.1-.31-.13-.29-.15-.15-.09-.27-.2-.27-.24-.24-.27-.2-.27-.17-.3-.2-.45-.1-.31-.11-.47-.05-.32-.05-.46-.04-1.02-.01-1.36.01-2.84.02-.24L10.6 2zM5.28 14.28l.1-.2.14-.16.19-.11.21-.06H14l.15.02.14.04.13.07.11.09.09.11.07.13.04.14.02.15-.03.22-.06.14-.08.12-.1.1-.12.08-.14.06-.14.03H6l-.15-.02-.21-.07-.12-.08-.14-.16-.1-.2-.03-.14v-.16zm-.01 3.57.07-.21.08-.12.1-.1.19-.11.21-.06h5.58l.15.02.14.04.13.07.11.09.09.11.07.13.04.14.02.15-.03.22-.06.14-.08.12-.1.1-.12.08-.14.06-.14.03H6l-.15-.02-.14-.04-.13-.07-.16-.14-.11-.19-.04-.14-.02-.15z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            d="M19.35 7.62 15.4 4.05c-1.12-1.01-1.69-1.52-2.38-1.78L13 5c0 2.36 0 3.54.73 4.27S15.64 10 18 10h3.58c-.36-.7-1.01-1.29-2.23-2.38"
            fill="currentColor"
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

export default IconAiSheet;
