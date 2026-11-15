import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWaterCycle = forwardRef<SVGSVGElement, IconProps>(function IconAiWaterCycle(
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
            d="M15.06 2.89a11 11 0 0 0-.96-.46 5.4 5.4 0 0 0-4.2 0A11.4 11.4 0 0 0 3 12.92v.28c0 2.2.79 4.2 2.1 5.75m1.77 1.6A8.4 8.4 0 0 0 11.61 22h.78A8.7 8.7 0 0 0 21 13.2v-.27q0-1.88-.57-3.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.61 10.72c.64-2 2.02-3.63 3.78-4.44"
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
            d="M15.06 2.89a11 11 0 0 0-.96-.46 5.4 5.4 0 0 0-4.2 0A11.4 11.4 0 0 0 3 12.92v.28c0 4.86 3.86 8.8 8.61 8.8h.78A8.7 8.7 0 0 0 21 13.2v-.27q0-1.88-.57-3.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.61 10.72c.64-2 2.02-3.63 3.78-4.44"
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
            d="M14.87 2.78c3.14 1.43 4.77 3.47 5.64 6.81l.21.81.16.83.1.84.02.86v.71l-.03.42-.05.43-.07.42-.09.42-.1.41-.13.4-.15.4-.17.4-.19.38-.2.37-.23.36-.24.35-.26.34-.27.33-.3.32-.3.3-.33.28-.34.27-.34.25-.36.23-.37.22-.38.19-.38.18-.4.15-.4.14-.4.12-.42.1-.42.08-.43.05-.43.04-.43.01h-.78l-.43-.01-.43-.04-.43-.06-.42-.08-.41-.1-.41-.11-.4-.14-.4-.16-.39-.18-.37-.19-.37-.21-.36-.24-.35-.25-.33-.26-.33-.29-.3-.3-.3-.32-.28-.33-.26-.34-.24-.35-.22-.37-.2-.37-.2-.38-.16-.4-.15-.4-.12-.4-.11-.41-.1-.42-.06-.42-.05-.43-.02-.43v-.69l.02-.85.1-.84.15-.82.2-.8.28-.78.32-.76.37-.73.43-.7.47-.67.53-.63.56-.6.61-.55.66-.51.7-.47.72-.41.77-.37.51-.18.53-.14.53-.08.53-.02.54.02.53.08.52.14.51.18z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M12.07 5.96c.17.38 0 .82-.37 1a6.5 6.5 0 0 0-3.37 3.99.75.75 0 1 1-1.43-.45c.7-2.19 2.2-4 4.17-4.9a.75.75 0 0 1 1 .36"
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
            d="M14.87 2.79a9.3 9.3 0 0 1 5.66 6.82l.2.8.16.83.08.84.03.85v.69l-.03.43-.05.43-.07.42-.09.42-.1.41-.14.4-.14.4-.17.4-.19.38-.2.37-.23.36-.24.36-.26.34-.28.33-.29.31-.3.3-.33.29-.34.27-.34.25-.36.23-.37.21-.38.2-.39.17-.39.16-.4.14-.41.12-.42.1-.42.07-.42.06-.43.04-.43.01h-.78l-.43-.01-.43-.04-.43-.06-.42-.08-.41-.1-.4-.11-.41-.14-.4-.16-.38-.17-.38-.2-.37-.21-.36-.23-.34-.25-.34-.27-.32-.28-.31-.3-.3-.32-.27-.33-.26-.34-.24-.35-.23-.36-.2-.38-.19-.38-.17-.39-.15-.4-.13-.4-.1-.41-.1-.42-.06-.42-.05-.43-.03-.43v-.7l.03-.86.1-.84.15-.83.2-.81.28-.79.32-.76.38-.74.42-.7.48-.67.52-.63.57-.6.61-.55.65-.5.7-.46.72-.4.77-.36.51-.19.52-.13.53-.08L12 2l.53.03.53.08.53.13.5.19zm-2.8 3.17c.17.38 0 .82-.37 1a6.5 6.5 0 0 0-3.37 3.99.75.75 0 1 1-1.43-.45c.7-2.19 2.2-4 4.17-4.9a.75.75 0 0 1 1 .36"
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

export default IconAiWaterCycle;
