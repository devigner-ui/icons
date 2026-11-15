import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHomepage = forwardRef<SVGSVGElement, IconProps>(function IconAiHomepage(
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
            d="M21.79 8.14c.4 1.07.2 2.39-.15 4.82l-.28 1.94c-.49 3.38-.73 5.08-1.9 6.09C18.27 22 16.55 22 13.1 22h-2.22c-3.44 0-5.17 0-6.34-1.01-.96-.82-1.3-2.1-1.65-4.39m-.35-2.37-.18-1.27C1.98 10.32 1.8 9 2.34 7.87s1.69-1.8 3.99-3.18l1.38-.82C9.81 2.62 10.85 2 12 2c.87 0 1.68.35 2.93 1.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15v3"
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
            opacity={duotone ? "0.4" : "1"}
            d="M21.79 8.14c.4 1.07.2 2.39-.15 4.82l-.28 1.94c-.49 3.38-.73 5.08-1.9 6.09C18.27 22 16.55 22 13.1 22h-2.22c-3.44 0-5.17 0-6.34-1.01-1.18-1.01-1.42-2.7-1.9-6.1l-.28-1.93C1.98 10.32 1.8 9 2.34 7.87s1.69-1.8 3.99-3.18l1.38-.82C9.81 2.62 10.85 2 12 2c.87 0 1.68.35 2.93 1.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15v3"
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
            opacity={duotone ? "0.4" : "1"}
            d="M14.9 3.05C17.85 4.72 21.07 5 21.84 8.3l.11.47.05.5v.58l-.01.3-.03.33-.03.35-.05.38-.05.4-.06.42-.06.45-.07.48-.28 1.94-.09.61-.08.58-.09.54-.08.5-.08.47-.09.44-.09.41-.1.38-.1.35-.11.33-.13.3-.14.28-.15.25-.17.23-.2.22-.2.2-.23.18-.24.15-.26.14-.28.11-.3.1-.32.08-.34.07-.36.05-.4.05-.42.03-.45.02-.48.01-.52.01h-.55l-.58.01h-4.6l-.51-.02-.49-.01-.45-.02-.42-.03-.39-.05-.37-.05-.34-.07-.31-.08-.3-.1-.28-.11-.25-.14-.24-.15-.23-.18-.21-.2-.2-.21-.16-.24-.16-.25-.14-.28-.12-.3-.12-.32-.1-.36-.1-.37-.1-.41-.08-.44-.08-.48-.08-.5-.08-.54-.08-.58-.1-.62-.28-1.93-.07-.48-.06-.45-.06-.43-.05-.4-.04-.37-.04-.35-.02-.32L2 9.85v-.57l.06-.51.1-.47.18-.43.23-.4.3-.38.36-.36.21-.18.23-.18.26-.18L4.2 6l.3-.19.31-.2.34-.21.37-.23.4-.23.41-.25 1.38-.82.38-.23.36-.21.34-.2.31-.18.3-.17.29-.15.52-.27.48-.2.45-.15.43-.08L12 2l.43.03.43.08.45.15.48.2.53.27.28.15z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12 18.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3c0 .41-.34.75-.75.75"
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
            d="M14.9 3.05C17.85 4.72 21.07 5 21.84 8.3l.11.47.05.51.01.28v.29l-.02.3-.02.34-.04.35-.04.37-.05.4-.06.42-.06.45-.07.48-.3 1.93-.08.62-.08.58-.08.54-.09.5-.08.48-.08.44-.1.4-.09.39-.1.35-.12.32-.13.3-.14.28-.15.25-.17.24-.2.21-.2.2-.23.18-.24.16-.26.13-.27.12-.3.1-.32.08-.34.06-.36.06-.4.04-.41.03-.45.02-.49.02h-.51l-.55.01h-5.2l-.52-.01-.48-.02-.45-.02-.42-.03-.4-.04-.36-.06-.34-.06-.32-.09-.3-.1-.27-.11-.26-.13-.24-.16-.23-.18-.21-.2-.2-.21-.16-.24-.16-.25-.14-.28-.12-.3-.12-.32-.1-.35-.1-.38-.09-.41-.08-.44-.09-.47-.08-.5-.08-.55-.09-.57-.09-.62-.28-1.94-.06-.48-.07-.45-.06-.42-.05-.4-.04-.37-.04-.35-.02-.33-.02-.31v-.57l.06-.5.11-.47.17-.44.24-.4.3-.38.36-.36.21-.18.23-.18.26-.18L4.2 6l.3-.2.31-.2.34-.2.37-.23.4-.23.4-.25 1.39-.82.38-.23.36-.2.33-.2.32-.19.3-.17.28-.15.53-.26.48-.2.45-.15.43-.1L12 2l.43.03.43.09.45.14.48.2.52.27.29.15zM12 18.75a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v3c0 .41-.34.75-.75.75"
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

export default IconAiHomepage;
