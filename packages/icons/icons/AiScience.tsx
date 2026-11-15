import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiScience = forwardRef<SVGSVGElement, IconProps>(function IconAiScience(
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
            d="M15.76 6.73h-.48l4.22 9.67c1.35 3.08.47 5.6-3.67 5.6h-3.9m-2.4 0H8.16c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3A2.37 2.37 0 1 1 8.44 2h7.11q.3 0 .6.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.94 13.12S9 13 12 14s5.83-.89 5.83-.89"
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
            d="M15.76 6.73h-.48l4.22 9.67c1.35 3.08.47 5.6-3.67 5.6H8.16c-4.18 0-5.02-2.53-3.66-5.61l4.25-9.65h-.3A2.37 2.37 0 1 1 8.44 2h7.11q.3 0 .6.08"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.94 13.12S9 13 12 14s5.83-.89 5.83-.89"
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
            d="M15.83 22H8.17c-4.19 0-5.02-2.53-3.66-5.61l1.44-3.27s3.06-.12 6.06.88 5.83-.89 5.83-.89l.19-.12 1.49 3.41c1.34 3.08.46 5.6-3.67 5.6"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.03 2.05c1.81.23 1.64 4.58-.18 4.67l-.41.02h-.16l2.74 6.25-.19.12-.03.02-.1.06-.15.09-.2.11-.27.13-.3.14-.35.14-.4.13-.41.12-.46.1-.48.09-.5.04h-.53l-.54-.03-.55-.1L12 14l-.56-.17-.56-.15-.55-.13-.54-.11-.53-.09-.5-.07-.47-.05-.44-.05-.41-.03-.37-.02h-.33l-.27-.01h-.53l2.8-6.38h-.3l-.24-.01-.24-.04-.22-.06-.22-.08-.2-.1-.2-.12-.19-.13-.16-.15-.16-.17-.13-.18-.12-.2-.1-.2-.08-.22-.06-.23-.04-.24v-.48l.04-.23.06-.23.08-.22.1-.2.12-.2.13-.18.16-.17.16-.15.19-.14.2-.12.2-.1.22-.08.22-.06.24-.03.24-.02h7.11l.24.02z"
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
            d="M15.83 22H8.17c-4.19 0-5.02-2.53-3.66-5.61l1.44-3.27s3.06-.12 6.06.88 5.83-.89 5.83-.89l.19-.12 1.49 3.41c1.34 3.08.46 5.6-3.67 5.6"
            fill="currentColor"
          />
          <path
            d="M16.03 2.05c1.81.24 1.64 4.58-.18 4.67l-.41.02h-.16l2.13 4.86-.41.26-.03.02-.08.04-.12.07-.17.09-.2.1-.25.1-.27.12-.3.1-.34.1-.35.08-.38.06-.39.04h-.4l-.41-.02-.42-.07-.42-.11-.71-.21-.73-.2-.72-.15-.74-.13-.74-.11-.74-.08-.74-.05-.75-.02 2.14-4.89h-.3l-.24-.01-.24-.04-.22-.06-.22-.08-.2-.1-.2-.11-.18-.14-.17-.15-.16-.17-.13-.18-.12-.2-.1-.2-.08-.22-.06-.23-.03-.24-.02-.24.02-.24.03-.23.06-.23.08-.22.1-.2.12-.2.13-.18.16-.17.17-.15.18-.14.2-.12.2-.1.22-.08.22-.06.24-.03.24-.02h7.11l.25.02z"
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

export default IconAiScience;
