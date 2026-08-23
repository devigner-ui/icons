import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiAudio = forwardRef<SVGSVGElement, IconProps>(function IconAiAudio(
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

  return (
    <>
      {!fill ? (
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
            d="M11.5 6C7.02 6 4.78 6 3.4 7.17 2 8.34 2 10.23 2 14s0 5.66 1.4 6.83C4.77 22 7.01 22 11.5 22s6.72 0 8.1-1.17C21 19.66 21 17.77 21 14q.01-1.75-.04-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m18.5 2 .26.7c.34.91.5 1.37.84 1.7s.79.5 1.7.84l.7.26-.7.26c-.91.34-1.37.5-1.7.84s-.5.79-.84 1.7l-.26.7-.26-.7c-.34-.91-.5-1.37-.84-1.7s-.79-.5-1.7-.84L15 5.5l.7-.26c.91-.34 1.37-.5 1.7-.84s.5-.79.84-1.7z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
          />
          <path
            d="M12 10v8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 12v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 13v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 13v2"
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
          <path
            d="M18.98 1.55c.25.22.32.67.43.97.38 1.06.47 1.47 1.58 1.89.4.15 1.24.33 1.48.64.26.33.2.9-.11 1.17-.29.25-1.25.45-1.66.64-1.1.5-1.1 1.48-1.52 2.45-.28.66-1.27.68-1.55.05-.33-.76-.42-1.79-1.15-2.3-.51-.35-1.24-.46-1.81-.7-.62-.27-.68-1.2-.1-1.5.54-.3 1.3-.37 1.86-.71.8-.5.85-1.57 1.2-2.33a.86.86 0 0 1 1.35-.27"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.6 11.12a10 10 0 0 0-.46-2.8c-.01-.07-.07-.38-.11-.39a.6.6 0 0 0-.29.27c-.34.68-.46 1.7-1.02 2.25-.7.66-1.94.65-2.64.02-.59-.52-.72-1.57-1.04-2.26-.12-.27-.44-.35-.7-.45-.81-.31-1.83-.46-2.15-1.4-.02-.06-.1-.29-.1-.33V5.3H8.56c-2.21.07-4.88.12-6.27 2.13-.69 1-.85 2.17-.9 3.35l-.02.15v6.32c.06 1.73.43 3.32 1.9 4.36 1.08.77 2.42.93 3.72 1.01 2.94-.02 5.9.1 8.84 0 1.87-.07 3.75-.37 4.9-2 .71-1 .83-2.14.87-3.33.07-2.02.07-4.16 0-6.18"
            fill="currentColor"
          />
          <path
            d="M11.89 9.4c.52-.07.8.36.82.84v7.54c-.01.52-.36.95-.92.83-.47-.11-.55-.59-.57-1-.04-.92.01-1.86.02-2.78.04-1.47-.11-3.05-.02-4.52.03-.42.19-.86.67-.92"
            fill="currentColor"
          />
          <path
            d="M14.8 11.36c.56-.08.85.33.88.85.08 1.21-.04 2.54-.02 3.77-.17.93-1.4.86-1.47-.08v-3.84c.03-.33.26-.65.6-.7"
            fill="currentColor"
          />
          <path
            d="M8.86 11.36c.56-.09.87.3.9.83.09 1.16-.06 2.42 0 3.6.01 1.07-1.4 1.16-1.49.1v-3.81c.04-.32.25-.67.6-.72"
            fill="currentColor"
          />
          <path
            d="M5.95 12.34c.48-.07.83.24.87.71s.03 1.21.01 1.7c-.01.55-.32.97-.91.87-.32-.06-.55-.39-.57-.7-.04-.43-.04-.97-.02-1.41.01-.46.03-1.1.62-1.17"
            fill="currentColor"
          />
          <path
            d="M17.72 12.34c.51-.08.85.26.89.75.04.48.04 1.31 0 1.8a.74.74 0 0 1-1.47.02c.03-.6-.05-1.23 0-1.82.02-.34.22-.7.58-.75"
            fill="currentColor"
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
          <path
            d="M13.1 5.3v.73c0 .04.07.27.09.33.32.94 1.34 1.09 2.16 1.4.25.1.57.18.7.45.31.7.44 1.73 1.03 2.26.7.63 1.95.64 2.64-.02.56-.54.68-1.57 1.02-2.25a.6.6 0 0 1 .29-.27c.04.01.1.32.11.38.31 1.04.42 1.73.45 2.8.07 2.03.07 4.17 0 6.19-.04 1.2-.16 2.34-.87 3.34-1.15 1.62-3.03 1.92-4.9 1.99-2.93.1-5.9-.02-8.84 0-1.3-.08-2.64-.24-3.72-1-1.47-1.05-1.84-2.64-1.9-4.37v-6.32l.02-.15c.05-1.18.2-2.36.9-3.35 1.4-2.01 4.06-2.06 6.27-2.13zm-1.21 4.1c-.48.05-.64.49-.67.91-.1 1.47.06 3.05.02 4.52 0 .92-.06 1.86-.02 2.78.02.4.1.89.57 1 .56.12.9-.3.92-.83v-7.54c-.01-.48-.3-.9-.82-.85m-3.03 1.96c-.34.05-.55.4-.58.72v3.8c.09 1.07 1.5.98 1.49-.1-.07-1.17.08-2.43 0-3.6-.04-.51-.34-.9-.9-.82m5.94 0c-.35.05-.58.37-.61.7v3.84c.07.94 1.3 1.01 1.47.08-.02-1.23.1-2.56.02-3.77-.03-.52-.32-.93-.88-.85m-8.85.98c-.59.08-.61.7-.62 1.17-.02.44-.02.98.02 1.42.02.3.25.63.57.69.6.1.9-.33.91-.87.02-.49.03-1.22-.01-1.7s-.39-.78-.87-.71m11.77 0c-.36.05-.56.4-.59.75-.04.59.04 1.22 0 1.82a.74.74 0 0 0 1.48-.02c.04-.49.04-1.32 0-1.8-.04-.49-.38-.83-.89-.75"
            fill="currentColor"
          />
          <path
            d="M18.98 1.55c.25.22.32.67.43.97.38 1.06.47 1.47 1.58 1.89.4.15 1.24.33 1.48.64.26.33.2.9-.11 1.17-.29.25-1.25.45-1.66.64-1.1.5-1.1 1.48-1.52 2.45-.28.66-1.27.68-1.55.05-.33-.76-.42-1.79-1.15-2.3-.51-.35-1.24-.46-1.81-.7-.62-.27-.68-1.2-.1-1.5.54-.3 1.3-.37 1.86-.71.8-.5.85-1.57 1.2-2.33a.86.86 0 0 1 1.35-.27"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiAudio;
