import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiCropFrame = forwardRef<SVGSVGElement, IconProps>(function IconAiCropFrame(
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
            d="M22 19h-8.2m-2.4 0c-2.73-.03-4.24-.18-5.23-1.17C5 16.66 5 14.77 5 11V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 5h3c1.44 0 2.6 0 3.56.07m4.37 4.37q.09 1.41.07 3.56v3M2 5h3m14 14v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 11.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44h1c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v1c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44h-1c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56z"
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
            d="M22 19h-9c-3.77 0-5.66 0-6.83-1.17S5 14.77 5 11V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 5h3c1.44 0 2.6 0 3.56.07m4.37 4.37q.09 1.41.07 3.56v3M2 5h3m14 14v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 11.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44h1c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v1c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44h-1c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56z"
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
            d="M5 1.25c.41 0 .75.34.75.75v9c0 1.9 0 3.26.14 4.29.14 1 .39 1.58.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14h9a.75.75 0 0 1 0 1.5h-9.05c-1.84 0-3.3 0-4.44-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43V2c0-.41.34-.75.75-.75"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 5.75h2.25v-1.5H2a.75.75 0 0 0 0 1.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.75 22v-2.25h-1.5V22a.75.75 0 0 0 1.5 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.58 4.31c.68.03 1.38 1.63.71 1.58l-1.07-.08-1.07-.05-1.08-.02-1.07.01H8l-.15-.02-.14-.04-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14V5l.02-.15.04-.14.07-.13.09-.11.11-.1.13-.06.14-.04.15-.02h4.96l.57.02.54.02zm3.58 4.8c-.04-.61 1.51-.29 1.53.32l.02.5.02.54.01.56v.6l.01.64V16l-.01.15-.05.14-.07.13-.09.1-.11.1-.13.07-.14.04-.15.02-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15v-4.93l-.02-.54-.01-.51-.03-.47z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.5 11.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44h1c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v1c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44h-1c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56z"
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
            d="M5 1.25c.41 0 .75.34.75.75v9c0 1.9 0 3.26.14 4.29.14 1 .39 1.58.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14h9a.75.75 0 0 1 0 1.5h-2.25V22a.75.75 0 0 1-1.5 0v-2.25h-5.3c-1.84 0-3.3 0-4.44-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43V5.75H2a.75.75 0 0 1 0-1.5h2.25V2c0-.41.34-.75.75-.75m9.58 3.06c.68.03 1.38 1.63.71 1.58l-1.07-.08-1.07-.05-1.08-.02-1.07.01H8l-.15-.02-.14-.04-.13-.07-.11-.09-.1-.11-.06-.13-.05-.14V5l.02-.15.04-.14.07-.13.09-.11.11-.1.13-.06.14-.04.15-.02h4.96l.57.02.54.02zm3.58 4.8c-.04-.61 1.51-.29 1.53.32l.02.5.02.54.01.56v.6l.01.64V16l-.01.15-.05.14-.07.13-.09.1-.11.1-.13.07-.14.04-.15.02-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15v-4.93l-.02-.54-.01-.51-.03-.47z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.5 11.5c0-1.41 0-2.12.44-2.56s1.15-.44 2.56-.44h1c1.41 0 2.12 0 2.56.44s.44 1.15.44 2.56v1c0 1.41 0 2.12-.44 2.56s-1.15.44-2.56.44h-1c-1.41 0-2.12 0-2.56-.44s-.44-1.15-.44-2.56z"
            fill="currentColor"
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

export default IconAiCropFrame;
