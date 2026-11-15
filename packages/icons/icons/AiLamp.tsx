import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiLamp = forwardRef<SVGSVGElement, IconProps>(function IconAiLamp(
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
            d="M9 22h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 22v-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.56 9.5c.5 2.08.65 3.27.06 4.17l-.25.32C18.47 15 16.82 15 13.53 15h-2.18m-2.4 0c-2.3-.03-3.57-.17-4.32-1l-.24-.33c-.75-1.12-.34-2.71.49-5.9l.08-.33c.61-2.34.91-3.51 1.7-4.29q.34-.34.76-.58C8.37 2 9.58 2 12 2c1.82 0 2.96 0 3.81.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 15v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M9 22h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22v-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19.56 9.5c.5 2.08.65 3.27.06 4.17l-.25.32C18.47 15 16.82 15 13.53 15h-3.06c-3.3 0-4.94 0-5.84-1l-.24-.33c-.75-1.12-.34-2.71.49-5.9l.08-.33c.61-2.34.91-3.51 1.7-4.29q.34-.33.76-.58C8.37 2 9.58 2 12 2c1.82 0 2.96 0 3.81.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.5 15v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M16.59 2.17c2.77 1.38 2.4 4.29 3.07 7.31l.1.45.09.41.07.4.05.36.03.34.01.31v.3l-.03.27-.06.26-.07.25-.1.22-.13.22-.25.32-.24.23-.27.2-.29.15-.31.12-.45.1-.43.07-.2.02-.16.03-.15.02-.11.01-.33.02-.34.01-.37.01-.4.01-.4.01H8.78l-.49-.02-.46-.01-.42-.02-.4-.03-.36-.05-.34-.05-.3-.06-.3-.09-.25-.1-.24-.1-.22-.14-.2-.16-.17-.17-.25-.33-.13-.22-.1-.23-.07-.24-.06-.26-.03-.27v-.3l.01-.32.04-.34.05-.36.07-.39.08-.41.1-.45.12-.48.13-.5.14-.55.15-.58.09-.33.1-.42.11-.4.1-.38.1-.35.1-.32.08-.31.19-.55.2-.48.2-.41.24-.36.28-.31.36-.31.39-.27.37-.19.4-.14.46-.1.5-.07.29-.02.3-.02.32-.01.34-.01h.76l.4-.01h2.06l.34.02.31.01.3.02.28.02.51.07.45.1.4.14z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.76 14.54v2.06a.75.75 0 1 0 1.5 0v-2.32a12 12 0 0 1-1.5.26"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.26 20.85V14.6h1.5v6.25z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.26 20.85H9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
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
            d="M16.58 2.17c2.75 1.41 2.4 4.29 3.07 7.31l.1.45.09.41.06.4.06.36.03.34.01.32v.3l-.03.27-.06.26-.07.24-.1.23-.13.22-.27.34-.32.28-.37.23-.4.15v2.32l-.02.15-.04.14-.07.13-.09.11-.11.1-.13.06-.14.04-.15.02-.15-.02-.14-.04-.13-.07-.11-.09-.1-.11-.06-.13-.04-.14-.02-.15v-2.06l-.33.02-.34.01-.37.01-.4.01h-.4l-.44.01h-1.72v6.25H15l.15.01.14.05.13.07.11.09.1.11.06.13.05.14.01.15-.01.15-.05.14-.07.13-.09.11-.11.1-.13.06-.14.04-.15.02H9l-.15-.02-.14-.04-.13-.07-.11-.09-.1-.11-.06-.13-.04-.14-.02-.15.02-.15.04-.14.07-.13.09-.11.11-.1.13-.06.14-.05.15-.01h2.26V14.6H8.79l-.49-.02-.46-.01-.42-.02-.4-.03-.36-.05-.34-.05-.3-.07-.3-.08-.25-.1-.24-.11-.22-.14-.2-.15-.17-.18-.25-.32-.13-.22-.1-.23-.07-.24-.06-.26-.03-.27v-.3l.01-.32.03-.34.06-.36.07-.39.08-.42.1-.44.11-.48.13-.5.14-.55.15-.58.09-.32.1-.43.11-.4.1-.37.1-.36.09-.32.1-.3.18-.56.19-.48.21-.41.24-.36.27-.31.36-.31.39-.27.37-.19.4-.14.46-.1.51-.07.28-.02.3-.02.32-.01.34-.01h.76l.4-.01h2.06l.34.02.32.01.3.02.28.02.5.07.46.1.4.14z"
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

export default IconAiLamp;
