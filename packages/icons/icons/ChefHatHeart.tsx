import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChefHatHeart = forwardRef<SVGSVGElement, IconProps>(
  function IconChefHatHeart(
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
              d="M19 18h.75zM5 14.58h.75c0-.3-.18-.56-.45-.68zm14 0-.3-.68a.8.8 0 0 0-.45.68zM15.75 7a.75.75 0 0 0 1.5 0zm-9 0a.75.75 0 1 0 1.5 0zM7 4.25A5.75 5.75 0 0 0 1.25 10h1.5c0-2.35 1.9-4.25 4.25-4.25zm10 1.5c2.35 0 4.25 1.9 4.25 4.25h1.5A5.75 5.75 0 0 0 17 4.25zm-2 15.5H9v1.5h6zm-6 0c-.96 0-1.61 0-2.1-.07-.46-.06-.65-.17-.78-.3l-1.06 1.06c.45.46 1.02.65 1.65.73q.9.1 2.29.08zM4.25 18c0 .92 0 1.69.08 2.3.08.62.27 1.19.73 1.64l1.06-1.06c-.13-.13-.24-.32-.3-.79-.07-.48-.07-1.13-.07-2.09zm14 0c0 .96 0 1.61-.07 2.1-.06.46-.17.65-.3.78l1.06 1.06c.46-.45.65-1.02.73-1.65q.1-.9.08-2.29zM15 22.75q1.38.02 2.3-.08a2.7 2.7 0 0 0 1.64-.73l-1.06-1.06c-.13.13-.32.24-.79.3-.48.07-1.13.07-2.09.07zm-8-17q.31 0 .63.05l.22-1.49A6 6 0 0 0 7 4.25zm5-4.5a5.25 5.25 0 0 0-4.97 3.56l1.42.48A3.75 3.75 0 0 1 12 2.75zM7.03 4.81q-.28.8-.28 1.69h1.5q0-.64.2-1.2zM17 4.25q-.43 0-.85.06l.22 1.49q.3-.05.63-.05zm-5-1.5a3.75 3.75 0 0 1 3.55 2.54l1.42-.48A5.25 5.25 0 0 0 12 1.25zm3.55 2.54q.2.58.2 1.21h1.5q0-.89-.28-1.69zM5.75 18v-3.42h-1.5V18zm-.45-4.1A4.3 4.3 0 0 1 2.75 10h-1.5a5.8 5.8 0 0 0 3.45 5.27zm12.95.68V18h1.5v-3.42zm3-4.58a4.3 4.3 0 0 1-2.55 3.9l.6 1.37A5.8 5.8 0 0 0 22.75 10zm-5.5-3.5V7h1.5v-.5zm-9 0V7h1.5v-.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11.04 13.67-.44.6zM12 9.99l-.52.55c.3.27.75.27 1.04 0zm.96 3.68-.45-.6zm-.96.46v-.75zm-.51-1.07c-.42-.3-.88-.69-1.23-1.09-.37-.42-.51-.76-.51-.97h-1.5c0 .77.44 1.45.87 1.95a9 9 0 0 0 1.48 1.32zM9.75 11c0-.58.26-.83.5-.9.24-.1.7-.07 1.23.44l1.04-1.09c-.83-.79-1.86-1.1-2.77-.77C8.8 9 8.25 9.9 8.25 11zm3.65 3.27a9 9 0 0 0 1.48-1.32c.43-.5.87-1.18.87-1.95h-1.5q.02.33-.5.97c-.36.4-.82.79-1.24 1.1zM15.75 11c0-1.1-.56-2-1.5-2.32-.9-.32-1.94-.02-2.77.77l1.04 1.09c.52-.5.99-.53 1.24-.45.23.08.49.33.49.91zm-5.15 3.27c.37.27.78.61 1.4.61v-1.5l-.1-.03a3 3 0 0 1-.41-.29zm1.91-1.2c-.22.16-.33.24-.42.28q-.07.04-.09.03v1.5c.62 0 1.03-.34 1.4-.6z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 18h14"
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
              d="M5.59 21.41C5.09 20.91 5 19.4 5 18h14c-.01 1.4-.08 2.91-.59 3.41-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 10a5 5 0 0 1 5.74-4.95 4.5 4.5 0 0 1 8.52 0Q16.62 5 17 5a5 5 0 0 1 2 9.58V18H5v-3.42A5 5 0 0 1 2 10"
              fill="currentColor"
            />
            <path
              d="M11.04 13.67C10.16 13.03 9 11.98 9 11c0-1.67 1.65-2.3 3-1 1.35-1.3 3-.67 3 1 0 .98-1.16 2.03-2.04 2.67-.42.3-.63.46-.96.46s-.54-.15-.96-.46"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 10a5 5 0 0 1 5.74-4.95 4.5 4.5 0 0 1 8.52 0Q16.62 5 17 5a5 5 0 0 1 2 9.58v2.67H5v-2.67A5 5 0 0 1 2 10m9.04 3.67C10.16 13.03 9 11.98 9 11c0-1.67 1.65-2.3 3-1 1.35-1.3 3-.67 3 1 0 .98-1.16 2.03-2.04 2.67-.42.3-.63.46-.96.46s-.54-.15-.96-.46"
              fill="currentColor"
            />
            <path
              d="M5.59 21.41c-.5-.5-.58-1.26-.59-2.66h14c-.01 1.4-.08 2.16-.59 2.66-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChefHatHeart;
