import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiSimcard = forwardRef<SVGSVGElement, IconProps>(function IconAiSimcard(
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
            d="M14.98 2.99a4 4 0 0 0-2.3-.97C12.52 2 12.35 2 12 2 7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54m0 0c1.06 1.05 2.59 1.35 5.13 1.43m2.4.03H12c4.7 0 7.07 0 8.54-1.46C22 19.07 22 16.7 22 12c0-.34 0-.51-.02-.69a4 4 0 0 0-.97-2.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12h-.5c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C8 13.39 8 14.09 8 15.5c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55c.5.34 1.2.34 2.61.34h.5m0-7h.5c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61M12 12v3.5m0 3.5h.5c1.4 0 2.1 0 2.61-.34a2 2 0 0 0 .55-.55c.34-.5.34-1.2.34-2.61M12 19v-3.5m0 0h4"
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
            d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12c0-.34 0-.51-.02-.69a4 4 0 0 0-.97-2.3M14.98 3a4 4 0 0 0-2.3-.97C12.52 2 12.35 2 12 2 7.29 2 4.93 2 3.46 3.46 2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 12h-.5c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C8 13.39 8 14.09 8 15.5c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55c.5.34 1.2.34 2.61.34h.5m0-7h.5c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.34.5.34 1.2.34 2.61M12 12v3.5m0 3.5h.5c1.4 0 2.1 0 2.61-.34a2 2 0 0 0 .55-.55c.34-.5.34-1.2.34-2.61M12 19v-3.5m0 0h4"
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
            d="M14.85 2.87c2.76 1.9 3.98 3.45 6.09 6.05l.3.37.26.4.21.43.16.45.1.47.04.47v1.35l-.01.8v.75l-.02.7-.02.66-.03.62-.05.57-.06.53-.08.49-.1.45-.11.43-.14.39-.17.36-.2.33-.22.31-.26.29-.28.26-.31.22-.34.2-.36.16-.4.15-.42.11-.45.1-.5.08-.53.06-.57.04-.61.03-.66.03h-.7l-.75.02h-3.32l-.75-.01-.7-.01-.66-.03-.62-.03-.57-.04-.53-.06-.49-.08-.45-.1-.43-.11-.39-.15-.36-.16-.33-.2-.31-.22-.29-.26-.26-.29-.22-.3-.2-.34-.16-.36-.15-.4-.11-.42-.1-.46-.08-.49-.06-.53-.04-.57-.03-.61-.03-.66v-.7L2 13.65v-3.3l.01-.76.01-.7.03-.66.03-.61.04-.57.06-.53.08-.5.1-.45.11-.43.15-.39.16-.36.2-.33.22-.31.26-.3.29-.25.3-.22.34-.2.36-.17.4-.14.42-.12.46-.1.49-.07.53-.06.57-.04.61-.04.66-.02.7-.01h.76l.8-.01h1.26l.28.02.4.05.38.09.37.13.35.16.34.2z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.89 18.66c.5.34 1.2.34 2.61.34v-7c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C8 13.39 8 14.09 8 15.5c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55"
            fill="currentColor"
          />
          <path
            d="M15.11 18.66c-.5.34-1.2.34-2.61.34v-3H16c0 1.08-.04 1.67-.34 2.11a2 2 0 0 1-.55.55"
            fill="currentColor"
          />
          <path
            d="M12.5 12c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.3.44.33 1.03.34 2.11h-3.5z"
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
            d="M14.85 2.87c2.76 1.9 3.98 3.45 6.09 6.05l.3.37.26.4.21.43.16.45.1.47.04.47v1.35l-.01.8v.75l-.02.7-.02.66-.03.62-.05.57-.06.53-.08.49-.1.45-.11.43-.14.39-.17.36-.2.33-.22.31-.26.29-.28.26-.31.22-.34.2-.36.16-.4.15-.42.11-.45.1-.5.08-.53.06-.57.04-.61.03-.66.03h-.7l-.75.02h-3.32l-.75-.01-.7-.01-.66-.03-.62-.03-.57-.04-.53-.06-.49-.08-.45-.1-.43-.11-.39-.15-.36-.16-.33-.2-.31-.22-.29-.26-.26-.29-.22-.3-.2-.34-.16-.36-.15-.4-.11-.42-.1-.46-.08-.49-.06-.53-.04-.57-.03-.61-.03-.66v-.7L2 13.65v-3.3l.01-.76.01-.7.03-.66.03-.61.04-.57.06-.53.08-.5.1-.45.11-.43.15-.39.16-.36.2-.33.22-.31.26-.3.29-.25.3-.22.34-.2.36-.17.4-.14.42-.12.46-.1.49-.07.53-.06.57-.04.61-.04.66-.02.7-.01h.76l.8-.01h1.26l.28.02.4.05.38.09.37.13.35.16.34.2zM8.89 18.66c.5.34 1.2.34 2.61.34v-7c-1.4 0-2.1 0-2.61.34a2 2 0 0 0-.55.55C8 13.39 8 14.09 8 15.5c0 1.4 0 2.1.34 2.61a2 2 0 0 0 .55.55m6.22 0c-.5.34-1.2.34-2.61.34v-3H16c0 1.08-.04 1.67-.34 2.11a2 2 0 0 1-.55.55M12.5 12c1.4 0 2.1 0 2.61.34a2 2 0 0 1 .55.55c.3.44.33 1.03.34 2.11h-3.5z"
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

export default IconAiSimcard;
