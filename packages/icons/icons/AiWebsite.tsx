import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiWebsite = forwardRef<SVGSVGElement, IconProps>(function IconAiWebsite(
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2q2.1-.01 3.64.04m6.22 4.76C22 8.1 22 9.79 22 12c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 13.97 22m-2.4 0H12c-4.7 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M10 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M2 8.75h20l.15.02.14.04.13.07.11.09.1.11.06.13.04.14.02.15-.02.15-.04.14-.07.13-.09.11-.11.1-.13.06-.14.05-.15.01H9.75V21l-.01.15-.05.14-.07.13-.09.11-.11.1-.13.06-.14.05-.15.01-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14-.01-.15V10.25H2l-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14-.01-.15.01-.15.05-.14.07-.13.09-.11.11-.1.13-.06.14-.04z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.5 1.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2q2.1-.01 3.64.04m6.22 4.76C22 8.1 22 9.79 22 12c0 4.7 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M10 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 8.75h20l.15.02.14.04.13.07.11.09.1.11.06.13.04.14.02.15-.02.15-.04.14-.07.13-.09.11-.11.1-.13.06-.14.05-.15.01H9.75V21l-.01.15-.05.14-.07.13-.09.11-.11.1-.13.06-.14.05-.15.01-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14-.01-.15V10.25H2l-.15-.01-.14-.05-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14-.01-.15.01-.15.05-.14.07-.13.09-.11.11-.1.13-.06.14-.04z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.5 1.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M18 1a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M15.11 2.02c3.27.05 6.43 1.7 6.76 4.95l.04.4.03.44.02.46.01.48.03.75H2.03v-.75l.02-.48.02-.46.03-.43.04-.42.04-.39.05-.36.07-.35.07-.33.09-.32.1-.3.1-.27.13-.26.15-.25.15-.24.18-.22.2-.2.28-.26.3-.23.34-.2.37-.16.39-.14.42-.12.46-.1.49-.08.53-.06.57-.04.62-.03.65-.02.7-.02h1.56L12 2h1.66l.75.01z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.3" : "1"}
            d="M2 12c0 4.71 0 7.07 1.46 8.54 1.01 1 2.45 1.32 4.79 1.42L9 22V9.5H2.03l-.03.75z"
            fill="currentColor"
          />
          <path
            d="M22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22H9V9.5h13z"
            fill="currentColor"
          />
          <path
            d="M19.9.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M18 1a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M15.11 2.02c3.35.05 6.28 2.27 6.51 5.62l.03.44.03.46.01.21H2.04v-.48l.03-.46.03-.43.04-.41.04-.4.05-.36.07-.35.07-.33.09-.31.1-.3.1-.28.13-.26.15-.25.15-.23.18-.23.2-.2.28-.27.3-.22.34-.2.36-.16.4-.15.42-.11.46-.1.49-.08.53-.06.57-.04.61-.03.66-.03.7-.01h.75l.8-.01h2.51l.76.01zM2 12v-1.75h6.25v11.71c-2.34-.1-3.78-.41-4.79-1.42C2 19.07 2 16.7 2 12m4-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22H9.75V10.24H22z"
            fill="currentColor"
          />
          <path
            d="M19.9.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiWebsite;
