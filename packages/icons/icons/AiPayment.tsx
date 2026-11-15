import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiPayment = forwardRef<SVGSVGElement, IconProps>(function IconAiPayment(
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
            d="M3.93 15.88 14.6 5.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m11.1 18.28 1.2-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="m13.79 15.59 2.4-2.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="m3.6 10.24 6.64-6.64c1.92-1.92 2.97-2.1 4.71-.57m6.02 6.01c1.54 1.74 1.36 2.8-.57 4.72l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-.86-.86m-1.7-1.7-2.34-2.35c-2.1-2.1-2.1-3.15.02-5.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 22h20"
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
            d="M3.93 15.88 14.6 5.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.1 18.28 1.2-1.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m13.79 15.59 2.4-2.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          />
          <path
            d="m3.6 10.24 6.64-6.64c1.92-1.92 2.97-2.1 4.71-.57m6.02 6.01c1.54 1.74 1.36 2.8-.57 4.72l-6.64 6.64c-2.12 2.12-3.18 2.13-5.28.03l-4.9-4.91c-2.1-2.1-2.1-3.15.02-5.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 22h20"
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
            d="M21.42 22H2.92a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.15 4.96c2.03-2.03 4.59 1.7 6.07 4.16l.18.3.15.33.12.33.09.34.05.36.02.35-.02.36-.06.35-.09.35-.12.33-.15.32-.18.3-.22.29-.23.27-7.23 7.23-.26.24-.29.22-.3.18-.32.15-.33.12-.35.1-.35.05-.36.02-.36-.02-.35-.05-.34-.09-.33-.12-.32-.15-.3-.18-.3-.22-.26-.24-4.6-4.6z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M14.98 2.82c.67.51.78 1.56.18 2.15L3.79 16.33l-.91-.91-.24-.27-.22-.28-.18-.3-.15-.33-.12-.33-.09-.34-.05-.35-.01-.36.01-.36.06-.35.09-.35.12-.33.15-.32.18-.3.22-.29.24-.26 7.23-7.23.27-.24.28-.22.3-.18.32-.15.34-.12.34-.1.35-.05.36-.02.36.02.35.05.34.09.34.12.32.15.3.18z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m13.06 17.6-1.35 1.35a.7.7 0 0 1-1.01 0 .7.7 0 0 1 0-1.01l1.35-1.35a.7.7 0 0 1 1.01 0c.28.28.28.73 0 1.01"
            fill="currentColor"
          />
          <path
            d="m17.44 13.22-2.69 2.69a.7.7 0 0 1-1.01 0 .7.7 0 0 1 0-1.01l2.69-2.69a.7.7 0 0 1 1.01 0c.27.28.27.73 0 1.01"
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
            d="M22 21.25c0 .41-.34.75-.75.75H2.75a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18.5c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M15.12 2.82c.62.45.54 1.43 0 1.97L4.65 15.26l-.16.14-.18.1-.2.05-.2.02-.2-.02-.19-.06-.18-.1-.16-.13-.24-.27-.21-.3-.18-.3-.15-.31-.11-.33-.08-.33-.05-.34-.01-.35.01-.34.05-.34.08-.33.11-.33.15-.31.18-.3.2-.3.25-.27 7.14-7.15.26-.24.28-.2.3-.19.32-.15.33-.12.34-.08.34-.05.36-.02.35.02.35.05.34.08.33.12.31.15.3.18z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.76 5.98c1.74-1.74 4.25.95 5.51 3.06l.18.3.15.31.12.33.09.34.05.35.02.36-.02.35-.06.35-.08.34-.12.33-.15.32-.19.3-.2.28-.25.26-7.14 7.15-.27.24-.3.21-.3.18-.32.15-.32.11-.34.08-.34.05-.34.02-.34-.02-.34-.05-.34-.08-.33-.11-.32-.15-.3-.18-.29-.2-.27-.25-3.05-3.06-.13-.16-.1-.19-.05-.19-.02-.2.02-.2.05-.19.1-.18.13-.16zm-3.01 11.54-1.2 1.22a.66.66 0 0 1-.93 0 .66.66 0 0 1 0-.92l1.22-1.22a.67.67 0 0 1 .91 0c.25.25.25.68 0 .92m3.97-3.97L14.29 16a.7.7 0 0 1-.92 0 .66.66 0 0 1 0-.92l2.45-2.45a.67.67 0 0 1 .91 0c.25.26.25.67 0 .92"
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

export default IconAiPayment;
