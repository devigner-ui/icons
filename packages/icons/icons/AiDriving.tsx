import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiDriving = forwardRef<SVGSVGElement, IconProps>(function IconAiDriving(
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
            d="M15.51 2.43H8.49C6 2.43 5.45 3.67 5.13 5.19L4 10.6h16l-.23-1.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.57 13.33c.14-1.5.43-2.73 3.05-2.73h12.76c2.62 0 2.91 1.23 3.05 2.73l.56 6.09a2 2 0 0 1-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6c-.19.57-.34 1.03-1.42 1.03H4.04a2 2 0 0 1-2.03-2.18l.2-2.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 7.6H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.6v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 4.6h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 14.6h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 14.6h3"
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
            d="M15.51 2.43H8.49C6 2.43 5.45 3.67 5.13 5.19L4 10.6h16l-.23-1.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.99 19.42a2 2 0 0 1-2.03 2.18h-1.88c-1.08 0-1.23-.46-1.42-1.03l-.2-.6c-.28-.82-.46-1.37-1.9-1.37H9.44c-1.44 0-1.65.62-1.9 1.37l-.2.6c-.19.57-.34 1.03-1.42 1.03H4.04a2 2 0 0 1-2.03-2.18l.56-6.09c.14-1.5.43-2.73 3.05-2.73h12.76c2.62 0 2.91 1.23 3.05 2.73z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 7.6H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12 2.6v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 4.6h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 14.6h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 14.6h3"
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
            d="M22.18 13.26c-.15-1.65-.6-3.41-3.8-3.41H5.62c-3.21 0-3.64 1.76-3.8 3.41l-.56 6.09c-.07.76.18 1.52.7 2.09a2.8 2.8 0 0 0 2.08.91h1.88c1.62 0 1.93-.93 2.13-1.54l.2-.6c.23-.69.29-.86 1.19-.86h5.12c.9 0 .93.1 1.19.86l.2.6c.2.61.5 1.54 2.13 1.54h1.88c.79 0 1.55-.33 2.08-.91.52-.57.77-1.33.7-2.09z"
            fill="currentColor"
          />
          <path
            d="M16.96 1.85c2.91.68 2.8 3.93 3.41 6.86l.34 1.64-.2-.11-.24-.1-.26-.09-.28-.07-.3-.05-.33-.04-.35-.03-.37-.01H5.62l-.37.01-.35.03-.33.04-.3.06-.28.06-.26.09-.23.1-.21.11.42-2H3l-.15-.01-.14-.05-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15.02-.15.04-.14.07-.13.1-.1.1-.1.13-.07.14-.04.15-.02h1.02l.38-1.81.16-.65.1-.31.11-.3.14-.3.16-.27.18-.26.21-.25.25-.22.27-.2.32-.17.35-.15.39-.12.44-.09.48-.05.53-.02h7.02l.53.02.49.05z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9 15.35H6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18 15.35h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M16.96 1.85c2.51.57 3.74 6.5 1.16 6.5H3l-.15-.02-.14-.04-.13-.07-.1-.1-.1-.1-.07-.13-.04-.14-.02-.15.01-.15.05-.14.07-.13.09-.1.11-.1.13-.07.14-.04.15-.02h1.02l.38-1.81.16-.65.1-.31.11-.3.14-.3.16-.27.18-.26.21-.24.24-.23.28-.2.31-.17.35-.15.4-.12.43-.09.49-.05.53-.02h7.02l.53.02.48.05z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M22.18 13.26c-.15-1.65-.6-3.41-3.8-3.41H5.62c-3.21 0-3.64 1.76-3.8 3.41l-.56 6.09c-.07.76.18 1.52.7 2.09a2.8 2.8 0 0 0 2.08.91h1.88c1.62 0 1.93-.93 2.13-1.54l.2-.6c.23-.69.29-.86 1.19-.86h5.12c.9 0 .93.1 1.19.86l.2.6c.2.61.5 1.54 2.13 1.54h1.88c.79 0 1.55-.33 2.08-.91.52-.57.77-1.33.7-2.09zM9 15.35H6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.4 0 .75.34.75.75s-.34.75-.75.75m9 0h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.4 0 .75.34.75.75s-.34.75-.75.75"
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

export default IconAiDriving;
