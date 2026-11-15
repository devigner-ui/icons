import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiUserCircle = forwardRef<SVGSVGElement, IconProps>(function IconAiUserCircle(
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
            d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15.35 2.58A10 10 0 0 0 3.14 16.63m1.35 1.97a10 10 0 0 0 16.93-9.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.97 20c-.16-2.9-1.05-5-5.97-5s-5.81 2.1-5.97 5"
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
            d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15.35 2.58a10 10 0 1 0 6.07 6.07"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.97 20c-.16-2.9-1.05-5-5.97-5s-5.81 2.1-5.97 5"
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
            d="M15.44 2.61a8.7 8.7 0 0 1 5.95 5.95l.16.47.14.47.1.49.1.49.06.5.04.5.01.52-.01.52-.04.5-.07.5-.08.5-.12.48-.13.47-.16.47-.18.45-.2.45-.22.43-.24.42-.26.4-.28.4-.3.37-.3.37-.34.34-.35.33-.36.32-.38.3-.39.27-.4.26-.43.24-.43.23-.44.2-.45.17-.47.16-.47.14-.49.1-.49.1-.5.06-.5.04L12 22l-.52-.01-.5-.04-.5-.06-.5-.1-.48-.1-.48-.14-.46-.16-.46-.17-.44-.2-.43-.23-.42-.24-.4-.26-.4-.28-.37-.3-.37-.3-.34-.34-.34-.34-.3-.37-.3-.38-.29-.39-.26-.4-.24-.42-.22-.43-.2-.45-.18-.45-.15-.47-.14-.47-.11-.48-.09-.5-.06-.5-.04-.5L2 12v-.51l.05-.51.06-.5.09-.5.11-.48.14-.47.15-.47.18-.45.2-.45.22-.43.24-.42.26-.4.28-.4.3-.37.31-.36.34-.35.34-.33.37-.32.37-.3.4-.27.4-.26.42-.24.43-.22.44-.2.46-.18.46-.16.48-.14.48-.1.5-.1.5-.06.5-.04L12 2l.51.01.51.04.5.06.5.1.48.1.47.14z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.8 19.01a8.5 8.5 0 0 1-9.6 0c-.61-.41-.87-1.2-.52-1.85C7.41 15.83 8.91 15 12 15s4.59.83 5.32 2.16c.35.65.1 1.44-.51 1.85"
            fill="currentColor"
          />
          <path
            d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
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
            d="M15.44 2.61a8.7 8.7 0 0 1 5.95 5.95l.16.47.14.47.1.49.1.49.06.5.04.5.01.52-.01.52-.04.5-.07.5-.08.5-.12.48-.13.47-.16.47-.18.45-.2.45-.22.43-.24.42-.26.4-.28.4-.3.37-.3.37-.34.34-.35.33-.36.32-.38.3-.39.27-.4.26-.43.24-.43.23-.44.2-.45.17-.47.16-.47.14-.49.1-.49.1-.5.06-.5.04L12 22l-.52-.01-.5-.04-.5-.06-.5-.1-.48-.1-.48-.14-.46-.16-.46-.17-.44-.2-.43-.23-.42-.24-.4-.26-.4-.28-.37-.3-.37-.3-.34-.34-.34-.34-.3-.37-.3-.38-.29-.39-.26-.4-.24-.42-.22-.43-.2-.45-.18-.45-.15-.47-.14-.47-.11-.48-.09-.5-.06-.5-.04-.5L2 12v-.51l.05-.51.06-.5.09-.5.11-.48.14-.47.15-.47.18-.45.2-.45.22-.43.24-.42.26-.4.28-.4.3-.37.31-.36.34-.35.34-.33.37-.32.37-.3.4-.27.4-.26.42-.24.43-.22.44-.2.46-.18.46-.16.48-.14.48-.1.5-.1.5-.06.5-.04L12 2l.51.01.51.04.5.06.5.1.48.1.47.14zM15 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 11.5c1.78 0 3.44-.55 4.8-1.49.61-.41.87-1.2.52-1.85C16.59 15.83 15.09 15 12 15s-4.59.83-5.32 2.16c-.35.65-.1 1.44.51 1.85A8.5 8.5 0 0 0 12 20.5"
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

export default IconAiUserCircle;
