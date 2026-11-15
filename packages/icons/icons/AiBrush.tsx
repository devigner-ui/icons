import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBrush = forwardRef<SVGSVGElement, IconProps>(function IconAiBrush(
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
            d="M6 2h10.39m.93 6.32H4V4c0-1.1.9-2 2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.32 8.32H4.12M4 10.6v1.28c0 1.08.58 2.08 1.53 2.61l2.96 1.67a2 2 0 0 1 1.02 1.74V20c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-2.1a2 2 0 0 1 1.02-1.74l2.96-1.67a3 3 0 0 0 1.53-2.61V9.45"
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
            d="M6 2h10.39m.93 6.32H4V4c0-1.1.9-2 2-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.32 8.32H4v3.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67a2 2 0 0 1 1.02 1.74V20c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-2.1a2 2 0 0 1 1.02-1.74l2.96-1.67a3 3 0 0 0 1.53-2.61V9.45"
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
            d="M17.5 2c2.48 0 3.07 6.32.59 6.32H4V4l.01-.2.03-.2.05-.2.07-.17.18-.34.25-.3.3-.25.33-.18.19-.07.19-.05.2-.03L6 2z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.1 8.33c.77 0 1.92-.26 1.92.51v3.04l-.03.4-.08.39-.13.37-.17.35-.22.33-.26.3-.3.25-.34.22-2.96 1.67-.22.15-.2.17-.18.2-.15.21-.11.24-.09.24-.05.26-.02.27V20l-.01.2-.03.2-.05.2-.07.18-.18.34-.24.3-.3.24-.34.18-.18.07-.2.05-.2.03h-1.4l-.2-.03-.2-.05-.18-.07-.34-.18-.3-.25-.24-.3-.18-.33-.07-.19-.05-.19-.03-.2v-2.3l-.03-.27-.05-.26-.09-.24-.11-.24-.15-.21-.17-.2-.2-.17-.23-.15-2.96-1.67-.34-.22-.3-.26-.26-.3-.22-.32-.17-.35-.13-.37-.08-.4-.03-.4V8.33z"
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
            d="M17.5 2c2.48 0 3.07 6.32.59 6.32H5l-.2-.02-.19-.06-.17-.09-.15-.12-.12-.15-.1-.17-.05-.19-.02-.2V4l.01-.2.03-.2.05-.2.07-.17.18-.34.25-.3.3-.25.33-.18.19-.07.19-.05.2-.03L6 2z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4 10.32v1.56c0 1.08.58 2.08 1.53 2.61l2.96 1.67a2 2 0 0 1 1.02 1.74V20c0 1.1.9 2 2 2h1a2 2 0 0 0 2-2v-2.1a2 2 0 0 1 1.02-1.74l2.96-1.67a3 3 0 0 0 1.53-2.61v-1.56a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1"
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

export default IconAiBrush;
