import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCamcorder = forwardRef<SVGSVGElement, IconProps>(function IconAiCamcorder(
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
            d="M9.45 4h.05c3.29 0 4.93 0 6.04.9q.3.26.55.56c.91 1.1.91 2.75.91 6.04v1c0 3.29 0 4.93-.9 6.04q-.26.3-.56.55c-.85.7-2.02.86-4 .9m-2.4.01c-3.05 0-4.61-.03-5.68-.9q-.3-.26-.55-.56C2 17.44 2 15.79 2 12.5v-1c0-1.53 0-2.7.09-3.62"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m17 9.5.66-.33c1.94-.97 2.92-1.46 3.63-1.02s.71 1.53.71 3.7v.3c0 2.17 0 3.26-.71 3.7s-1.69-.05-3.63-1.02L17 14.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M9.45 4h.05c3.29 0 4.93 0 6.04.9q.3.26.55.56c.91 1.1.91 2.75.91 6.04v1c0 3.29 0 4.93-.9 6.04q-.26.3-.56.55c-1.1.91-2.75.91-6.04.91s-4.93 0-6.04-.9q-.3-.26-.55-.56C2 17.44 2 15.79 2 12.5v-1c0-1.53 0-2.7.09-3.62"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17 9.5.66-.33c1.94-.97 2.92-1.46 3.63-1.02s.71 1.53.71 3.7v.3c0 2.17 0 3.26-.71 3.7s-1.69-.05-3.63-1.02L17 14.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M4.5 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.07 8.03C2.22 4.96 5.77 4 8.84 4h2.35l.49.01.46.02.43.02.4.02.37.04.35.05.32.06.3.07.28.09.27.1.24.12.23.14.21.16.3.26.25.3.16.21.14.23.13.24.1.26.09.28.07.3.06.33.05.35.04.37.03.4.02.43.01.46v.5l.01.52v3.84l-.01.5-.01.45-.02.43-.03.4-.04.38-.05.34-.06.33-.07.3-.09.28-.1.26-.12.25-.14.22-.16.22-.26.29-.3.26-.2.16-.24.14-.24.12-.26.1-.28.1-.3.07-.33.06-.34.05-.38.03-.4.03-.43.02-.46.02h-1.02l-.56.01H7.82l-.5-.01-.45-.02-.43-.02-.4-.03-.37-.03-.35-.05-.33-.06-.3-.07-.28-.09-.26-.1-.24-.12-.23-.14-.22-.16-.29-.27-.26-.29-.16-.21-.14-.23-.12-.24-.1-.27-.1-.28-.07-.3-.06-.32-.04-.35-.04-.37-.03-.4-.02-.43-.01-.46-.01-.5V12.5l-.01-1V9.82l.01-.5.02-.46.02-.43z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m17 9.5.66-.33c1.94-.97 2.92-1.46 3.63-1.02s.71 1.53.71 3.7v.3c0 2.17 0 3.26-.71 3.7s-1.69-.05-3.63-1.02L17 14.5z"
            fill="currentColor"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M3 2a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M2.08 8.03C2.31 4.97 5.77 4 8.84 4h2.35l.49.01.46.02.43.02.4.02.37.04.35.05.33.06.3.07.28.1.26.1.24.12.23.14.21.16.29.26.26.29.24.34.2.37.14.42.12.46.09.52.05.57.04.65.02.7.67-.32.36-.18.33-.16.3-.15.3-.14.27-.13.26-.1.24-.1.22-.08.2-.06.2-.05.19-.02.17-.01h.16l.15.04.15.05.13.07.13.09.1.1.1.13.08.14.07.16.06.17.05.2.03.21.03.24.03.25.01.28.01.3v.32l.01.35v2.49l-.02.3-.02.28-.02.25-.03.24-.03.21-.05.2-.06.17-.07.16-.08.14-.1.12-.1.11-.13.09-.13.07-.15.05-.15.03-.16.01h-.17l-.19-.03-.2-.05-.2-.06-.22-.08-.24-.1-.26-.1-.27-.13-.3-.14-.3-.15-.33-.16-.36-.18-.67-.33-.02.72-.04.64-.05.58-.09.51-.12.46-.15.42-.19.37-.24.34-.26.3-.29.26-.21.16-.23.14-.25.12-.26.1-.28.09-.3.07-.32.06-.35.05-.37.04-.4.02-.43.02-.46.02h-1.02l-.56.01H7.82l-.5-.01-.46-.02-.43-.02-.4-.02-.37-.04-.35-.05-.32-.06-.3-.07-.28-.1-.27-.1-.24-.12-.23-.14-.2-.16-.3-.26-.27-.29-.16-.21-.14-.23-.12-.25-.1-.26-.09-.28-.07-.3-.06-.32-.05-.35-.03-.37-.03-.4-.02-.43-.02-.46V11.5L2 10.9V9.81l.01-.49.02-.46.02-.43z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.9 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCamcorder;
