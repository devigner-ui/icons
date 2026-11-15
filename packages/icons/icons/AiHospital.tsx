import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiHospital = forwardRef<SVGSVGElement, IconProps>(function IconAiHospital(
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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 22V7.62m-1.16-5.4C15.24 2 14.38 2 13 2h-2c-1.89 0-2.83 0-3.41.59C7 3.17 7 4.1 7 6v9.75m0 2.4V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 22V9.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 22V8.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C4.39 5 5.09 5 6.5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 12h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.5 11H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.5 14H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 11h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 14h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5.5 8H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 15h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 9V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M22 22H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 22V7.62m-1.16-5.4C15.24 2 14.38 2 13 2h-2c-1.89 0-2.83 0-3.41.59C7 3.17 7 4.1 7 6v16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 22V9.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 22V8.5c0-1.4 0-2.1.34-2.61a2 2 0 0 1 .55-.55C4.39 5 5.09 5 6.5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 12h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.5 11H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.5 14H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 11h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17 14h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.5 8H7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 15h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 9V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M16.41 2.19c1.3 1.09.59 2.61.59 4.31v14.35h5l.15.02.14.04.13.07.11.1.1.1.06.13.04.14.02.15-.01.15-.05.14-.07.13-.09.11-.11.1-.13.06-.14.05-.15.01H2l-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.04-.14-.02-.15.02-.15.04-.14.07-.13.09-.1.11-.1.13-.07.14-.04.15-.02h5V4.35l.03-.5.04-.45.07-.37.1-.33.16-.27.19-.24.24-.2.27-.14.33-.1.37-.08.44-.04.51-.02h.91L11 1.6h3.25l.5.03.45.04.37.07.33.1.27.15zM12 3.85c.41 0 .75.34.75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V8.6a.75.75 0 0 1-1.5 0V7.35H10a.75.75 0 0 1 0-1.5h1.25V4.6c0-.41.34-.75.75-.75M9.25 11.6c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M12 17.85c.41 0 .75.34.75.75v2.25h-1.5V18.6c0-.41.34-.75.75-.75"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.13 8.35c1.39 0 3.37-2.57 3.37-1.18v13.68h.5l.15.02.14.04.13.07.11.09.1.11.06.13.05.14.01.15-.01.15-.05.14-.07.13-.09.11-.11.1-.13.06-.14.04-.15.02H2l-.15-.02-.14-.04-.13-.07-.1-.09-.1-.11-.07-.13-.04-.14-.02-.15.02-.15.04-.14.07-.13.1-.11.1-.1.13-.06.14-.04.15-.02h.5V7.17l.02-.38.03-.33.04-.29.06-.25.08-.23.11-.2.25-.3.3-.25.1-.05.14-.05.17-.04.19-.04.22-.03.24-.03.51-.04 1.1-.05h.5l.24-.01H7v2.25H4.5l-.15.01-.14.05-.13.07-.1.09-.1.11-.07.13-.04.14-.02.15.02.15.04.14.07.13.1.1.1.1.13.07.14.04.15.02H7v1.5H4.5l-.15.01-.14.05-.13.07-.1.09-.1.11-.07.13-.04.14-.02.15.02.15.04.14.07.13.1.1.1.1.13.07.14.04.15.02H7v1.5H4.5l-.15.01-.14.05-.13.07-.1.09-.1.11-.07.13-.04.14-.02.15.02.15.04.14.07.13.1.1.1.1.13.07.14.04.15.02H7v6.5h10v-6.5h2.5l.15-.02.14-.04.13-.07.11-.1.1-.1.06-.13.05-.14.01-.15-.01-.15-.05-.14-.07-.13-.09-.11-.1-.1-.14-.06-.14-.05-.15-.01H17v-1.5h2.5l.15-.02.14-.04.13-.07.11-.1.1-.1.06-.13.05-.14.01-.15-.01-.15-.05-.14-.07-.13-.09-.11-.1-.1-.14-.06-.14-.05-.15-.01H17v-1.5z"
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
            d="M16.41 2.2c1.28 1.11.59 2.61.59 4.3v14.35h1.5v-6.5h1l.15-.01.14-.05.13-.06.11-.1.1-.1.06-.13.05-.15.01-.15-.01-.15-.05-.14-.07-.13-.09-.1-.1-.1-.14-.07-.14-.04-.15-.02h-1v-1.5h1l.15-.01.14-.05.13-.06.11-.1.1-.1.06-.13.05-.15.01-.15-.01-.15-.05-.14-.07-.13-.09-.1-.1-.1-.14-.07-.14-.04-.15-.02h-1V8.64c0-1.19 3-1.72 3-.53v12.74h.5l.15.02.14.04.13.07.11.09.1.11.06.13.04.14.02.15-.02.15-.04.14-.07.13-.09.11-.11.1-.13.06-.14.04-.15.02H2l-.15-.02-.14-.04-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14-.01-.15.02-.15.04-.14.07-.13.09-.11.11-.1.13-.06.14-.04.15-.02h.5V7.17l.02-.38.02-.34.04-.29.06-.25.09-.22.11-.2.25-.3.3-.25.17-.1.2-.08.2-.06.25-.04.27-.02.3-.02h.72v2.23h-1l-.15.02-.14.04-.13.07-.1.1-.1.1-.07.13-.04.14-.02.15.02.15.04.14.07.13.1.11.1.1.13.06.14.05.15.01h1v1.5h-1l-.15.02-.14.04-.13.07-.1.1-.1.1-.07.13-.04.14-.02.15.02.15.04.14.07.13.1.11.1.1.13.06.14.05.15.01h1v1.5h-1l-.15.02-.14.04-.13.07-.1.1-.1.1-.07.13-.04.14-.02.15.02.15.04.14.07.13.1.11.1.1.13.06.14.05.15.01h1v6.5H7V4.63l.01-.28.02-.5.05-.45.07-.37.1-.33.15-.27.2-.24.23-.2.28-.14.32-.1.38-.07.44-.05.5-.02h4.51l.5.02.44.05.38.07.32.1.28.15zM12 3.85c.41 0 .75.34.75.75v1.25H14a.75.75 0 0 1 0 1.5h-1.25V8.6a.75.75 0 0 1-1.5 0V7.35H10a.75.75 0 0 1 0-1.5h1.25V4.6c0-.41.34-.75.75-.75M9.25 11.6c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M12 17.85c.41 0 .75.34.75.75v2.25h-1.5V18.6c0-.41.34-.75.75-.75"
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

export default IconAiHospital;
