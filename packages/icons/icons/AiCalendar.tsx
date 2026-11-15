import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCalendar = forwardRef<SVGSVGElement, IconProps>(function IconAiCalendar(
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
            d="M7.2 3.52v2.4m6.4-2.4v2.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M3.6 9.2h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.2 14.08v1.44c0 2.4 1.2 4 4 4h6.4c2.8 0 4-1.6 4-4v-.21M15.59 5.08a5 5 0 0 0-1.99-.36H7.2c-2.8 0-4 1.6-4 4v2.96"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.44 15.28h.02m-.02-2.8h.02m2.78 0h.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 7.27c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M7.2 3.52v2.4m6.4-2.4v2.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.6 9.2h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.6 14.09v1.43c0 2.4-1.2 4-4 4H7.2c-2.8 0-4-1.6-4-4v-6.8c0-2.4 1.2-4 4-4h6.4q1.17 0 1.99.36m2.01 10.23v.21c0 2.4-1.2 4-4 4H7.2c-2.8 0-4-1.6-4-4v-6.8c0-2.4 1.2-4 4-4h6.4c1.3 0 2.27.35 2.92.96"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.44 15.28h.02m-.02-2.8h.02m2.78 0h.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 7.27c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M16.5 7.17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="m14.19 5.08.4.05.37.07.34.1.31.12.29.15.27.16.24.2.22.2.2.23.17.25.15.27.13.29.1.3.08.32.07.34.04.35-.03.16-.08.13-.13.1-.16.03H3.63l-.16-.03-.13-.1-.08-.13-.03-.16.04-.35.07-.34.08-.32.1-.3.13-.29.15-.27.17-.25.2-.23.22-.2.24-.2.27-.16.29-.15.31-.12.34-.1.37-.07.4-.05V3.72l.04-.11.06-.1.07-.1.09-.07.1-.05.11-.04.12-.01.12.01.11.04.1.05.1.08.06.08.06.1.04.12v1.32H13v-1.2l.02-.12.04-.11.05-.1.08-.1.09-.07.1-.05.1-.04.13-.01.12.01.11.04.1.05.09.08.07.08.06.1.03.12.02.12v1.25z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.6 15.84-.01.44-.05.42-.07.4-.1.38-.13.35-.17.33-.2.3-.22.28-.26.25-.3.22-.32.18-.36.16-.4.13-.43.09-.47.05-.5.02H7.2l-.51-.02-.47-.05-.44-.1-.4-.12-.36-.16-.32-.18-.3-.22-.26-.25-.23-.28-.19-.3-.16-.33-.14-.35-.1-.38-.07-.4-.04-.42-.02-.44v-4.93l.02-.16.05-.15.07-.13.1-.12.12-.1.13-.07.15-.05.16-.02h12.82l.16.02.15.05.13.07.12.1.1.12.07.13.05.15.02.16z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.6 14.24a1 1 0 0 1-.3-.06 1 1 0 0 1-.27-.17 1 1 0 0 1-.17-.27 1 1 0 0 1-.06-.3q0-.15.06-.3t.17-.27q.12-.1.27-.17a.8.8 0 0 1 .87.17q.1.12.17.27.06.15.06.3t-.06.3-.17.27q-.12.1-.27.17a1 1 0 0 1-.3.06"
            fill="currentColor"
          />
          <path
            d="M10.4 14.24a1 1 0 0 1-.3-.06 1 1 0 0 1-.27-.17.8.8 0 0 1-.23-.57q0-.32.23-.57.12-.1.27-.17a.8.8 0 0 1 .87.17q.22.24.23.57 0 .31-.23.57-.12.1-.27.17a1 1 0 0 1-.3.06"
            fill="currentColor"
          />
          <path
            d="M7.6 17.04a1 1 0 0 1-.3-.06 1 1 0 0 1-.27-.17.8.8 0 0 1-.23-.57q0-.32.23-.57a.8.8 0 0 1 .87-.17q.15.06.27.17.22.24.23.57 0 .31-.23.57a1 1 0 0 1-.27.17 1 1 0 0 1-.3.06"
            fill="currentColor"
          />
          <path
            d="M18.4 6.87c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M16.5 7.17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="m14.19 5.08.4.05.37.07.34.1.31.12.29.15.27.16.24.2.22.2.2.23.17.25.15.27.13.29.1.3.08.32.07.34.04.35-.03.16-.08.13-.13.1-.16.03H3.63l-.16-.03-.13-.1-.08-.13-.03-.16.04-.35.07-.34.08-.32.1-.3.13-.29.15-.27.17-.25.2-.23.22-.2.24-.2.27-.16.29-.15.31-.12.34-.1.37-.07.4-.05V3.72l.04-.11.06-.1.07-.1.09-.07.1-.05.11-.04.12-.01.12.01.11.04.1.05.1.08.06.08.06.1.04.12v1.32H13v-1.2l.02-.12.04-.11.05-.1.08-.1.09-.07.1-.05.1-.04.13-.01.12.01.11.04.1.05.09.08.07.08.06.1.03.12.02.12v1.25z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m17.6 15.84-.01.44-.05.42-.07.4-.1.38-.13.35-.17.33-.2.3-.22.28-.26.25-.3.22-.32.18-.36.16-.4.13-.43.09-.47.05-.5.02H7.2l-.51-.02-.47-.05-.44-.1-.4-.12-.36-.16-.32-.18-.3-.22-.26-.25-.23-.28-.19-.3-.16-.33-.14-.35-.1-.38-.07-.4-.04-.42-.02-.44v-4.93l.02-.16.05-.15.07-.13.1-.12.12-.1.13-.07.15-.05.16-.02h12.82l.16.02.15.05.13.07.12.1.1.12.07.13.05.15.02.16zm-9.43.97a1 1 0 0 1-.27.17 1 1 0 0 1-.3.06 1 1 0 0 1-.3-.06 1 1 0 0 1-.27-.17.8.8 0 0 1-.23-.57q0-.32.23-.57a1 1 0 0 1 .27-.17.8.8 0 0 1 .6 0q.15.07.27.17.22.24.23.57 0 .31-.23.57m.17-3.07q-.06.15-.17.27-.12.1-.27.17a1 1 0 0 1-.3.06 1 1 0 0 1-.3-.06 1 1 0 0 1-.27-.17 1 1 0 0 1-.17-.27 1 1 0 0 1-.06-.3q0-.15.06-.3t.17-.27q.12-.1.27-.17a.8.8 0 0 1 .6 0q.15.06.27.17.1.12.17.27.06.15.06.3t-.06.3m2.63.27q-.12.1-.27.17a1 1 0 0 1-.3.06 1 1 0 0 1-.3-.06 1 1 0 0 1-.27-.17.8.8 0 0 1-.23-.57q0-.31.23-.57.12-.1.27-.17a.8.8 0 0 1 .6 0q.15.06.27.17.22.24.23.57 0 .32-.23.57"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.4 6.87c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiCalendar;
