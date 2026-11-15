import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCellphone = forwardRef<SVGSVGElement, IconProps>(function IconAiCellphone(
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
     shape as AiClipboard: a 1.5 circle round each tip, joined by small
     curves, so the gap matches across the AI icons. */
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
            d="M20 9.45V14c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17c-.98-.98-1.14-2.46-1.17-5.11m0-2.4V10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2c1.71 0 3.03 0 4.08.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.55 5H9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M20 9.45V14c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14v-4c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2c1.71 0 3.03 0 4.08.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.55 5H9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M15.97 2.1C19.02 2.37 20 5.78 20 8.84v7.09l-.02.57-.02.52-.02.5-.04.45-.05.42-.06.4-.07.36-.1.34-.11.31-.14.29-.15.27-.18.24-.2.23-.24.2-.24.19-.27.15-.29.14-.31.11-.34.1-.37.07-.39.06-.42.05-.46.04-.49.02-.53.02-.56.01h-.6l-.64.01h-2.62l-.56-.02-.53-.02-.49-.02-.45-.04-.43-.05-.4-.06-.36-.07-.33-.1-.32-.11-.29-.14-.26-.15-.25-.18-.23-.2-.2-.24-.18-.24-.16-.27-.13-.29-.12-.31-.1-.34-.07-.37-.06-.39-.05-.42-.04-.46-.02-.49-.02-.52-.01-.57V8.07l.01-.56.02-.53.02-.49.04-.45.05-.43.06-.4.08-.36.1-.33.1-.32.14-.29.16-.26.18-.25.2-.23.23-.21.24-.18.27-.15.3-.14.3-.1.34-.1.37-.08.4-.06.41-.05.46-.04.5-.02.52-.02.56-.01h3.86l.56.01.53.02.49.02z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m15 4.25.11.01-.01.24q0 .62.34 1.1l-.02.02-.13.07-.14.04-.15.02H9l-.15-.02-.14-.04-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14L8.25 5l.01-.15.05-.14.07-.13.09-.11.11-.1.13-.06.14-.04.15-.02z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
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
            d="M15.97 2.1C19.02 2.37 20 5.78 20 8.84v7.09l-.02.57-.02.52-.02.5-.04.45-.05.42-.06.4-.07.36-.1.34-.11.31-.14.29-.15.27-.18.24-.2.23-.24.2-.24.19-.27.15-.29.14-.31.11-.34.1-.37.07-.39.06-.42.05-.46.04-.49.02-.53.02-.56.01h-.6l-.64.01h-2.62l-.56-.02-.53-.02-.49-.02-.45-.04-.43-.05-.4-.06-.36-.07-.33-.1-.32-.11-.29-.14-.26-.15-.25-.18-.23-.2-.2-.24-.18-.24-.16-.27-.13-.29-.12-.31-.1-.34-.07-.37-.06-.39-.05-.42-.04-.46-.02-.49-.02-.52-.01-.57V8.07l.01-.56.02-.53.02-.49.04-.45.05-.43.06-.4.08-.36.1-.33.1-.32.14-.29.16-.26.18-.25.2-.23.23-.21.24-.18.27-.15.3-.14.3-.1.34-.1.37-.08.4-.06.41-.05.46-.04.5-.02.52-.02.56-.01h3.86l.56.01.53.02.49.02zM15 4.25l.11.01-.01.24q0 .62.34 1.1l-.02.02-.13.07-.14.04-.15.02H9l-.15-.02-.14-.04-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14L8.25 5l.01-.15.05-.14.07-.13.09-.11.11-.1.13-.06.14-.04.15-.02zM12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
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

export default IconAiCellphone;
