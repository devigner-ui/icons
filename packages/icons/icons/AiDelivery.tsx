import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDelivery = forwardRef<SVGSVGElement, IconProps>(function IconAiDelivery(
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
            d="M7.81 2H15v10a2 2 0 0 1-2 2H2V7.81"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.36 9.24A1 1 0 0 0 18 10v3a1 1 0 0 0 1 1h3v3a3 3 0 0 1-3 3h-1a2 2 0 1 0-4 0h-4a2 2 0 1 0-4 0H5a3 3 0 0 1-3-3v-1.26M2.66 14H13a2 2 0 0 0 2-2V5h1.84c.72 0 1.38.39 1.74 1.01l1.9 3.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.48 9.31 22 12v2h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 .36-.76"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="M7.81 2H15v10a2 2 0 0 1-2 2H2V7.81m16.36 1.43A1 1 0 0 0 18 10v3a1 1 0 0 0 1 1h3v3a3 3 0 0 1-3 3h-1a2 2 0 1 0-4 0h-4a2 2 0 1 0-4 0H5a3 3 0 0 1-3-3v-3h11a2 2 0 0 0 2-2V5h1.84c.72 0 1.38.39 1.74 1.01l1.9 3.3M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4.48-12.69L22 12v2h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 .36-.76"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M6.52 2A4.53 4.53 0 0 0 2 6.52V14h11a2 2 0 0 0 2-2V3a1 1 0 0 0-1-1z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 14v3a3 3 0 0 1-3 3h-1a2 2 0 0 0-4 0h-4a2 2 0 0 0-4 0H5a3 3 0 0 1-3-3v-3h11a2 2 0 0 0 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.29 9H19a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            fill="currentColor"
          />
          <path
            d="M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            fill="currentColor"
          />
          <path
            d="M22 12.53V14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.29l1.45 2.54a2 2 0 0 1 .26.99"
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
            d="M6.52 2A4.53 4.53 0 0 0 2 6.52v5.56a1 1 0 0 0 1 1h9.15c1.02 0 1.85-.83 1.85-1.85V2.92a.9.9 0 0 0-.93-.92z"
            mask={`url(#${cut})`}
            fill="currentColor"
          />
          <path
            d="m21.5 15.5.1.01.1.03.16.1.1.16.03.1.01.1v1l-.01.3-.05.3-.07.3-.1.27-.13.26-.15.25-.17.23-.2.21-.21.2-.23.17-.25.15-.26.12-.28.1-.28.08-.3.04-.3.02-.02-.3-.05-.3-.07-.3-.1-.27-.13-.26-.15-.25-.17-.23-.2-.21-.21-.2-.23-.17-.25-.15-.26-.12-.28-.1-.28-.08-.3-.04L16 17l-.31.02-.3.04-.29.07-.28.1-.26.13-.24.15-.24.17-.2.2-.2.21-.18.23-.15.25-.12.26-.1.28-.08.28-.04.3-.02.3h-2l-.01-.3-.05-.3-.07-.28-.1-.28-.13-.26-.15-.25-.17-.23-.2-.21-.2-.2-.24-.17-.25-.15-.26-.12-.27-.1-.3-.08-.29-.04L8 17l-.31.02-.3.04-.29.07-.27.1-.27.13-.24.15-.23.17-.22.2-.2.21-.16.23-.15.25-.13.26-.1.28-.07.28-.05.3-.01.3h-.3l-.3-.05-.29-.08-.27-.1-.26-.12-.25-.15-.23-.18-.22-.19-.19-.21-.17-.23-.15-.25-.13-.26-.1-.28-.07-.29-.05-.3-.01-.3v-2l.02-.2.05-.19.1-.17.12-.15.15-.12.17-.1.18-.05L3 14h9.5l.26-.01.25-.04.24-.06.23-.09.22-.1.2-.13.2-.14.18-.16.16-.18.14-.2.13-.2.1-.22.08-.23.07-.24.03-.24.02-.26L15 6a1 1 0 0 1 1-1h.84c.72 0 1.38.39 1.74 1.01l.64 1.12c.15.26-.05.58-.35.58a2.4 2.4 0 0 0-2.37 2.37l.02 3.18.04.24.06.24.08.23.1.22.13.2.15.2.16.18.18.16.19.14.2.13.22.1.23.09.24.06.25.04.26.01z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            fill="currentColor"
          />
          <path
            d="M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            fill="currentColor"
          />
          <path
            d="M22 12.53V14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3l1.44 2.54a2 2 0 0 1 .26.99"
            fill="currentColor"
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

export default IconAiDelivery;
