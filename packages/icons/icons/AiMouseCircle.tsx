import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMouseCircle = forwardRef<SVGSVGElement, IconProps>(function IconAiMouseCircle(
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
            d="M8 11.54V10a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0v-.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 10h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 10V6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
<path
  d="M12 6V3.84c0-1.11-.9-2.04-1.99-1.82a10.07 10.07 0 0 0-5.08 16.96A10 10 0 0 0 12 21.89 9.97 9.97 0 0 0 21.06 7.7"
  stroke="currentColor"
  strokeWidth={strokeWidth}
  strokeLinecap="round"
  strokeLinejoin="round"
/>
          <path
            d="M18.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M8 10a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M8.5 10h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 10V6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
<path
  opacity={duotone ? "0.4" : "1"}
  d="M12 6V3.84c0-1.11-.9-2.04-1.99-1.82a10.07 10.07 0 0 0-5.08 16.96A10 10 0 0 0 12 21.89 9.97 9.97 0 0 0 21.06 7.7"
  stroke="currentColor"
  strokeWidth={strokeWidth}
  strokeLinecap="round"
  strokeLinejoin="round"
/>
          <path
            d="M18.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            opacity={duotone ? "0.4" : "1"}
            d="m2.53 11.92.01.47.03.47.06.46.08.46.1.46.12.44.15.45.16.43.19.42.2.42.23.4.25.4.26.38.3.37.3.35.32.35.34.32.35.3.37.3.38.27.4.25.4.23.41.2.42.2.44.16.44.15.44.13.46.1.45.08.47.06.47.04.47.01.47-.01.47-.04.46-.06.46-.08.45-.1.45-.13.44-.15.43-.16.84-.4.4-.23.4-.25.37-.27.37-.3.36-.3.34-.32.32-.35.3-.35.3-.37.26-.38.24-.4.23-.4.4-.84.16-.43.14-.45.13-.44.1-.46.08-.46.05-.46.04-.47v-.47l-.02-.68-.06-.67-.12-.66-.16-.65-.09-.27a9 9 0 0 0-.43-1.07.76.76 0 1 1 1.39-.65l.07.13.29.7.24.74.18.75.14.76.08.78.03.8-.02.56-.04.56-.07.56-.1.55-.12.53-.15.53-.17.51-.2.5-.22.5-.24.47-.26.47-.29.45-.3.43-.33.42-.35.4-.36.39-.38.37-.4.34-.42.33-.43.31-.45.29-.46.27-.47.24-.49.22-.5.2-.5.18-.53.14-.53.13-.54.1-.56.07-.55.04L12 23l-.57-.01-.56-.04-.55-.07-.54-.1-.53-.13-.52-.14-.51-.18-.5-.2-.5-.22-.46-.24-.47-.27-.44-.29-.43-.3-.42-.34-.4-.34-.38-.37-.36-.39-.35-.4-.32-.42-.31-.43-.29-.45-.26-.47-.25-.47-.22-.5-.2-.5-.17-.51-.14-.53-.13-.54-.1-.54-.06-.56L1 12.5v-.58l.01-.5.03-.5.06-.48.07-.49.1-.47.11-.47.14-.46.15-.45.17-.44.2-.44.2-.42.22-.41.5-.8.56-.74.62-.69.68-.64.72-.58.77-.52.4-.23.42-.22.43-.2.43-.18.44-.16.45-.15.46-.12.47-.1.31-.05h.3l.3.03.27.06.26.1.24.13.23.16.2.18.2.2.16.22.14.23.13.25.1.27.06.27.04.28.02.28V5.8l.36.1.34.1.33.16.3.17.3.2.28.21.25.25.23.26.21.28.19.3.16.3.13.34.1.33.08.35.05.36V14l-.01.43-.06.41-.1.4-.14.38-.17.36-.2.35-.24.32-.27.29-.29.27-.31.23-.34.21-.36.18-.37.13-.4.1-.4.07-.42.02-.4-.02-.4-.06-.4-.1-.38-.14-.36-.17-.35-.2-.32-.25-.3-.28-.28-.3-.24-.33-.2-.35-.17-.36-.13-.38-.1-.4-.05-.4-.02-.4V9.87l.02-.37.04-.36.08-.35.1-.34.14-.32.16-.32.18-.3.21-.28.24-.26.25-.24.28-.22.29-.2.31-.17.33-.14.34-.12.36-.09V3.67l-.02-.27-.08-.24-.11-.2-.14-.17-.17-.12-.2-.08-.19-.03-.2.01-.81.2-.79.28-.75.33-.7.4-.68.45-.62.5-.58.56-.53.6-.48.64-.43.68-.36.72-.3.75-.25.78-.17.8-.1.82z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.9 13.95c0 2.3 1.84 4.15 4.1 4.15s4.1-1.86 4.1-4.15v-3.37H7.9z"
            fill="currentColor"
          />
          <path
            d="M12.77 9.34h3.25c-.31-1.67-1.6-3.3-3.25-3.61z"
            fill="currentColor"
          />
          <path
            d="M11.23 9.34V5.73c-1.64.32-2.94 1.94-3.25 3.6z"
            fill="currentColor"
          />
          <path
            d="M18.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
          <path
            d="m12.47 21.44.47-.04.46-.06.46-.08.46-.1.44-.13.44-.15.43-.16.43-.2.41-.2.4-.23.4-.25.38-.27.72-.6.34-.32.32-.35.3-.35.3-.37.26-.38.25-.4.22-.4.21-.42.19-.42.16-.44.15-.44.12-.44.1-.46.08-.46.05-.46.04-.47v-.47l-.01-.68-.07-.67-.12-.66-.16-.65-.09-.27a10 10 0 0 0-.43-1.07.76.76 0 1 1 1.39-.65l.07.13.3.7.23.74.19.75.13.76.08.78.03.8-.01.56-.05.56-.07.56-.1.54-.12.54-.14.53-.18.51-.2.5-.21.5-.25.47-.26.47-.29.45-.3.43-.33.42-.35.4-.36.39-.38.36-.4.35-.42.33-.43.31-.44.29-.46.27-.48.24-.49.22-.5.2-.5.18-.53.14-.53.13-.54.1-.55.07-.56.04L12 23l-.56-.01-.56-.04-.55-.07-.55-.1-.53-.13-.52-.14-.51-.18-.5-.2-.49-.22-.47-.24-.46-.27-.45-.29-.43-.3-.42-.34-.4-.34-.38-.37-.36-.39-.35-.4-.32-.42-.31-.43-.29-.45-.26-.47-.24-.47-.22-.5-.2-.5-.17-.51-.15-.53-.12-.54-.1-.54-.07-.56-.04-.56-.02-.57.01-.49.03-.48.06-.48.07-.48.1-.47.1-.46.13-.45.15-.45.17-.44.19-.43.42-.83.5-.8.55-.74.61-.7.68-.64.72-.59.38-.27.4-.25.4-.24L7.1 2l.43-.2.44-.2.45-.16.46-.16.46-.13.48-.1.31-.05h.3l.3.03.27.06.26.1.24.13.23.16.2.18.2.2.16.22.15.24.12.25.1.26.06.27.05.28.01.28v2.06h-1.54V3.67l-.02-.27-.08-.24-.11-.2-.15-.17-.17-.12-.18-.08-.2-.03-.2.01-.82.2-.78.28-.75.34-.71.4-.67.44-.63.5-.58.56-.53.6-.47.64-.43.68-.36.72-.3.75-.25.78-.17.8-.1.82-.04.84.01.47.03.47.06.47.08.45.1.46.12.45.15.44.16.43.19.42.2.42.23.4.25.4.27.38.28.37.3.36.33.34.34.33.36.3.36.29.38.27.4.25.4.23.41.2.43.2.43.17.44.14.44.13.46.1.46.08.46.06.47.04.47.01z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.9 13.95c0 2.3 1.84 4.15 4.1 4.15s4.1-1.85 4.1-4.15v-3.37H7.9z"
            fill="currentColor"
          />
          <path
            d="M12.77 9.34h3.25c-.31-1.67-1.6-3.3-3.25-3.61z"
            fill="currentColor"
          />
          <path
            d="M11.23 9.34V5.73c-1.64.32-2.94 1.94-3.25 3.6z"
            fill="currentColor"
          />
          <path
            d="M18.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiMouseCircle;
