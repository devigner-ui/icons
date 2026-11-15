import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFtp = forwardRef<SVGSVGElement, IconProps>(function IconAiFtp(
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
            d="M12 15.5v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M12 22.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M18 20.5h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M10 20.5H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M19 9.45V12c0 2.8-.7 3.5-3.5 3.5h-7C5.7 15.5 5 14.8 5 12v-1.32m0-2.4V5c0-2.8.7-3.5 3.5-3.5h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h1.1"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12 15.5v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M12 22.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 20.5h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 20.5H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="M19 9.45V12c0 2.8-.7 3.5-3.5 3.5h-7C5.7 15.5 5 14.8 5 12V5c0-2.8.7-3.5 3.5-3.5h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h1.1"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.75 20.5c0 .41-.34.75-.75.75h-4q-.07 0-.14-.03a2 2 0 0 1-3.72 0l-.14.03H6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4q.07 0 .14.03a2 2 0 0 1 1.14-1.14l-.03-.14v-3h1.5v3q0 .07-.03.14a2 2 0 0 1 1.14 1.14l.14-.03h4c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M15.1 4.29c2.34 0 3.9 2.21 3.9 4.55v3.66l-.04.45-.04.41-.07.37-.1.32-.12.29-.15.24-.18.22-.21.18-.25.15-.29.12-.32.1-.37.07-.4.04-.46.03-.5.01H8l-.45-.04-.41-.04-.37-.07-.32-.1-.29-.12-.24-.15-.22-.18-.18-.22-.15-.24-.12-.29-.1-.32-.07-.37-.04-.4L5 12.5v-8l.04-.46.04-.4.07-.37.1-.32.12-.29.15-.24.18-.22.22-.18.24-.15.29-.12.32-.1.37-.07.4-.04L8 1.5l.5-.01h1.05l.36.01.29.05.24.07.2.09.16.12.15.14.14.17.14.19 1.05 1.4.19.23.1.1.1.08.14.06.16.05.19.03.24.01z"
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
            d="M15.11 4.29c2.33 0 3.89 2.22 3.89 4.55v3.66l-.03.46-.05.4-.07.37-.1.32-.12.29-.15.25-.18.21-.21.18-.25.15-.28.12-.33.1-.36.07-.41.05-.46.02-.5.01h-2.75v3l-.03.14.2.09.17.1.17.12.15.14.14.15.12.17.1.18.09.19.14-.03h4l.15.02.14.04.13.07.1.1.1.1.07.13.04.14.02.15-.01.15-.05.14-.07.13-.09.1-.11.1-.13.07-.14.04-.15.02h-4l-.14-.03-.13.27-.17.25-.2.22-.23.18-.26.15-.27.1-.3.07-.3.02-.3-.02-.3-.07-.27-.1-.25-.15-.23-.18-.2-.22-.18-.25-.13-.27-.14.03H6l-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15.02-.15.05-.14.07-.13.09-.1.1-.1.13-.07.14-.04.15-.02h4l.14.03.09-.2.1-.17.13-.17.13-.15.16-.14.16-.12.18-.1.2-.09-.04-.14v-3H8l-.45-.04-.4-.04-.37-.07-.33-.1-.28-.12-.25-.15-.21-.18-.19-.22-.15-.24-.12-.29-.1-.32-.06-.37-.05-.4-.03-.46v-8l.03-.46.05-.4.07-.37.1-.32.11-.29.15-.24.19-.22.2-.18.26-.15.28-.12.33-.1.36-.07.4-.04L8 1.5l.5-.01h1.05l.36.01.3.05.23.07.2.09.16.12.15.14.14.17.14.19 1.05 1.4.2.23.1.1.1.08.13.06.16.05.2.03.23.01z"
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

export default IconAiFtp;
