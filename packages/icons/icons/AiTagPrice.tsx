import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTagPrice = forwardRef<SVGSVGElement, IconProps>(function IconAiTagPrice(
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
            d="M20.57 9.27c.95 1.12 1.43 2 1.43 2.99 0 1.67-1.34 3.02-4.03 5.7-2.7 2.7-4.04 4.04-5.7 4.04-1.68 0-3.02-1.34-5.71-4.03l-.6-.6m-1.7-1.7c-1.24-1.25-1.88-1.96-2.13-2.85-.3-1-.05-2.07.44-4.2l.29-1.23c.4-1.8.62-2.69 1.23-3.3s1.5-.82 3.3-1.23l1.23-.29c2.13-.49 3.2-.73 4.2-.45a5 5 0 0 1 1.94 1.26"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.39 15.39c.59-.59.66-1.46.18-1.95-.5-.48-1.36-.4-1.95.18s-1.45.67-1.94.18c-.5-.49-.41-1.36.17-1.95m3.54 3.54.35.35m-.35-.35c-.4.4-.94.56-1.39.47m-2.5-4.36.35.35m0 0c.34-.33.76-.5 1.15-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.2 10.3a2 2 0 1 0 2.82-2.83 2 2 0 0 0-2.83 2.82z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M20.57 9.27c.95 1.12 1.43 2 1.43 2.99 0 1.67-1.34 3.02-4.03 5.7-2.7 2.7-4.04 4.04-5.7 4.04-1.68 0-3.02-1.34-5.71-4.03l-1.83-1.83c-1.55-1.55-2.32-2.32-2.6-3.32-.3-1-.05-2.07.44-4.2l.29-1.23c.4-1.8.62-2.69 1.23-3.3s1.5-.82 3.3-1.23l1.23-.29c2.13-.49 3.2-.73 4.2-.45a5 5 0 0 1 1.94 1.26"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.39 15.39c.59-.59.66-1.46.18-1.95-.5-.48-1.36-.4-1.95.18s-1.45.67-1.94.18c-.5-.49-.41-1.36.17-1.95m3.54 3.54.35.35m-.35-.35c-.4.4-.94.56-1.39.47m-2.5-4.36.35.35m0 0c.34-.33.76-.5 1.15-.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.2 10.3a2 2 0 1 0 2.82-2.83 2 2 0 0 0-2.83 2.82z"
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
            d="M14.67 3.3a40 40 0 0 1 6.06 6.16l.26.33.24.33.2.32.18.3.14.3.1.31.09.3.04.3.02.32-.02.3-.04.31-.08.3-.11.3-.15.3-.17.31-.2.32-.24.32-.27.34-.3.35-.33.37-.36.38-.4.41-.42.44-.46.46-.5.49-.48.49-.46.46-.43.42-.4.4-.4.36-.36.33-.35.3-.34.26-.32.24-.32.2-.31.18-.3.14-.3.1-.3.09-.31.04-.31.02-.31-.02-.3-.04-.3-.08-.31-.11-.3-.14-.31-.18-.32-.2-.32-.24-.34-.26-.35-.3-.36-.33-.4-.37-.4-.39-.43-.42-.46-.46-.5-.49-1.83-1.83-.28-.28-.26-.27-.25-.25-.23-.23-.4-.44-.35-.4-.29-.37-.23-.36-.18-.35-.13-.37-.08-.38-.04-.4v-.43l.05-.47.09-.52.11-.59.07-.32.08-.34.08-.36.09-.39.29-1.23.07-.33.07-.3.14-.56.13-.49.13-.42.14-.36.16-.32.18-.28.2-.24.25-.21.28-.18.32-.16.36-.14.42-.13.49-.13.55-.14.31-.07.33-.07 1.23-.3.39-.08.36-.08.34-.08.32-.07.59-.11.52-.09.47-.04h.43l.4.03.38.09.36.13.36.17.36.24.37.28z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M11.15 14.33c-.68-.67-.67-1.64-.27-2.4a.75.75 0 0 1 1.04-1.05q.52-.28 1.09-.27a.75.75 0 0 1-.02 1.5c-.17 0-.4.08-.6.27-.4.4-.3.78-.18.89.1.1.5.2.88-.18.79-.78 2.14-1.04 3-.18.68.68.67 1.64.27 2.4a.75.75 0 0 1-1.04 1.05 2.2 2.2 0 0 1-1.47.24.75.75 0 0 1 .3-1.47c.18.03.46-.03.7-.27.4-.39.3-.78.19-.88-.11-.11-.5-.22-.89.17-.78.79-2.14 1.05-3 .18"
            fill="currentColor"
          />
          <path
            d="M10.02 10.3A2 2 0 1 0 7.2 7.46a2 2 0 0 0 2.83 2.82"
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
            d="M14.67 3.3a37 37 0 0 1 6.06 6.16l.26.33.24.33.2.31.18.3.14.31.1.3.09.3.04.3.02.32-.02.3-.04.31-.08.3-.11.3-.14.31-.18.31-.2.32-.24.32-.26.34-.3.35-.33.37-.37.38-.39.41-.42.44-.46.45-.5.5-.48.48-.46.46-.44.43-.4.4-.4.35-.36.33-.35.3-.34.27-.32.24-.32.2-.3.18-.31.14-.3.1-.3.09-.3.04-.31.02-.31-.02-.3-.04-.31-.08-.3-.11-.3-.14-.32-.18-.31-.2-.33-.24-.33-.26-.35-.3-.37-.33-.39-.36-.4-.4-.44-.42-.46-.46-.5-.49-1.82-1.83-.28-.28-.27-.27-.24-.25-.23-.23-.41-.44-.35-.4-.28-.37-.23-.36-.18-.35-.13-.37-.09-.38-.04-.4v-.43l.05-.47.09-.52.11-.59.07-.32.08-.34.08-.36.09-.39.29-1.23.07-.33.07-.3.13-.56.13-.48.14-.43.14-.36.16-.32.18-.28.21-.24.24-.21.28-.18.32-.16.36-.14.43-.13.48-.13.56-.13.3-.08.33-.07 1.23-.29.39-.09.36-.08.34-.08.33-.07.58-.11.52-.08.47-.05h.43l.4.03.38.08.37.13.35.19.36.23.37.29zm-3.53 11.02c-.67-.67-.66-1.64-.26-2.4a.75.75 0 0 1 1.04-1.05q.52-.28 1.09-.27a.75.75 0 0 1-.02 1.5c-.17 0-.4.08-.6.27-.4.4-.3.78-.18.89.1.1.5.2.88-.18.79-.78 2.14-1.04 3-.18.68.68.67 1.64.27 2.4a.75.75 0 0 1-1.04 1.05 2.2 2.2 0 0 1-1.47.24.75.75 0 1 1 .3-1.47c.18.03.46-.03.7-.27.4-.39.3-.78.19-.88-.11-.11-.5-.22-.89.17-.78.79-2.14 1.05-3 .18m-1.12-4.04a2 2 0 1 0-2.83-2.8 2 2 0 0 0 2.83 2.81"
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

export default IconAiTagPrice;
