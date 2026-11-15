import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiArt = forwardRef<SVGSVGElement, IconProps>(function IconAiArt(
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
            d="M3.35 15.93A9.5 9.5 0 0 0 12 21.5c2.4 0 3.9-2.9 3.3-4.8l-.4-1.2c-.4-1.2.5-2.5 1.8-2.5H19c1.4 0 2.6-1 2.4-2.4q-.07-.46-.19-.93m-6.88-6.89A9.5 9.5 0 0 0 2.65 13.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.4 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0zm2-4.5a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0z"
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
            d="M21.09 9.22q.2.67.31 1.38c.2 1.4-1 2.4-2.4 2.4h-2.3c-1.3 0-2.2 1.3-1.8 2.5l.4 1.2c.6 1.9-.9 4.8-3.3 4.8a9.5 9.5 0 1 1 2.33-18.72m6.88 6.89q.12.46.19.93c.2 1.4-1 2.4-2.4 2.4h-2.3c-1.3 0-2.2 1.3-1.8 2.5l.4 1.2c.6 1.9-.9 4.8-3.3 4.8a9.5 9.5 0 1 1 2.78-18.59"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.4 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0zm2-4.5a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0z"
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
            d="M16.34 2.72a9 9 0 0 1 4.93 4.95q.63 1.33.87 2.82c.08.9-.26 1.85-.82 2.38s-1.48.86-2.32.88h-2.3c-.46-.05-.68.13-.92.48-.25.35-.35.63-.17 1.03l.4 1.21a5 5 0 0 1-.6 3.74 4.5 4.5 0 0 1-3.4 2.04H12a10.6 10.6 0 0 1-7.06-2.83 10.4 10.4 0 0 1-3.17-6.92c-.13-2.67.85-5.31 2.47-7.2A10.4 10.4 0 0 1 11 1.8a10.4 10.4 0 0 1 5.34.92"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M6.2 10.7c-.3.29-.55.84-.55 1.3s.25 1.01.54 1.3.85.55 1.31.55 1.01-.25 1.3-.54.55-.85.55-1.31-.25-1.01-.54-1.3-.85-.55-1.31-.55-1.01.25-1.3.54zm2-4.5c-.3.29-.55.84-.55 1.3s.25 1.01.54 1.3.85.55 1.31.55 1.01-.25 1.3-.54.55-.85.55-1.31-.25-1.01-.54-1.3-.85-.55-1.31-.55-1.01.25-1.3.54z"
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
            d="M16.34 2.72a9 9 0 0 1 4.93 4.95q.63 1.33.87 2.82c.08.9-.26 1.85-.82 2.38s-1.48.86-2.32.88h-2.3c-.46-.05-.68.13-.92.48-.25.35-.35.63-.17 1.03l.4 1.21a5 5 0 0 1-.6 3.74 4.5 4.5 0 0 1-3.4 2.04H12a10.6 10.6 0 0 1-7.06-2.83 10.4 10.4 0 0 1-3.17-6.92c-.13-2.67.85-5.31 2.47-7.2A10.4 10.4 0 0 1 11 1.8a10.4 10.4 0 0 1 5.34.92M6.2 10.69c-.3.3-.55.85-.55 1.31s.25 1.01.54 1.3.85.55 1.31.55 1.01-.25 1.3-.54.55-.85.55-1.31-.25-1.01-.54-1.3a2 2 0 0 0-1.31-.55c-.46 0-1.01.25-1.3.54m2-4.5c-.3.3-.55.85-.55 1.31s.25 1.01.54 1.3.85.55 1.31.55 1.01-.25 1.3-.54.55-.85.55-1.31-.25-1.01-.54-1.3a2 2 0 0 0-1.31-.55c-.46 0-1.01.25-1.3.54"
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

export default IconAiArt;
