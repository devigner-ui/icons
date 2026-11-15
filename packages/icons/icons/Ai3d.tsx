import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAi3d = forwardRef<SVGSVGElement, IconProps>(function IconAi3d(
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
            d="M21 9.02V16a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-1.26m0-2.4V8a5 5 0 0 1 5-5h6.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.6 9.7c.3-.66 1-1.2 1.9-1.2 1 0 1.9.77 1.9 1.75S10.5 12 9.5 12c1 0 1.9.77 1.9 1.75s-.9 1.75-1.9 1.75c-.9 0-1.6-.55-1.9-1.2m5.6-5.8v7h1.6c2 0 3.4-1.6 3.4-3.5s-1.4-3.5-3.4-3.5z"
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
            d="M21 9.02V16a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h6.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.6 9.7c.3-.66 1-1.2 1.9-1.2 1 0 1.9.77 1.9 1.75S10.5 12 9.5 12c1 0 1.9.77 1.9 1.75s-.9 1.75-1.9 1.75c-.9 0-1.6-.55-1.9-1.2m5.6-5.8v7h1.6c2 0 3.4-1.6 3.4-3.5s-1.4-3.5-3.4-3.5z"
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
            d="M8 2.25h8A5.77 5.77 0 0 1 21.76 8v8a6 6 0 0 1-1.7 4.07c-1 1-2.52 1.65-4.06 1.68H8a6 6 0 0 1-4.06-1.68c-1-1-1.66-2.53-1.69-4.07V8a6 6 0 0 1 1.69-4.06c1-1 2.53-1.66 4.06-1.69"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.28 10.01a1.3 1.3 0 0 1 1.22-.76c.58 0 1.15.44 1.15 1s-.57 1-1.15 1a.75.75 0 0 0 0 1.5c.58 0 1.15.44 1.15 1s-.57 1-1.15 1c-.18 0-.89-.05-1.22-.76a.75.75 0 0 0-1.36.62 2.9 2.9 0 0 0 2.58 1.64c1.46 0 2.65-1.16 2.65-2.5 0-.67-.3-1.29-.77-1.75.47-.46.77-1.08.77-1.75 0-1.34-1.19-2.5-2.65-2.5-1.4 0-2.27.95-2.58 1.64a.75.75 0 0 0 1.36.62Zm4.92-2.26a.75.75 0 0 0-.75.75v7c0 .41.34.75.75.75h1.6a4.4 4.4 0 0 0 3-1.27A4.5 4.5 0 0 0 18.95 12c0-1.09-.46-2.24-1.15-2.98a4.4 4.4 0 0 0-3-1.27zm1.6 1.5c.84-.04 1.4.26 1.9.8.51.54.75 1.14.75 1.95s-.24 1.41-.75 1.95c-.5.54-1.06.84-1.9.8h-.85v-5.5z"
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
            d="M8 2.25h8A5.77 5.77 0 0 1 21.76 8v8a6 6 0 0 1-1.7 4.07c-1 1-2.52 1.65-4.06 1.68H8a6 6 0 0 1-4.06-1.68c-1-1-1.66-2.53-1.69-4.07V8a6 6 0 0 1 1.69-4.06c1-1 2.53-1.66 4.06-1.69m.28 7.76a1.3 1.3 0 0 1 1.22-.76c.58 0 1.15.44 1.15 1s-.57 1-1.15 1a.75.75 0 0 0 0 1.5c.58 0 1.15.44 1.15 1s-.57 1-1.15 1c-.18 0-.89-.05-1.22-.76a.75.75 0 0 0-1.36.62 2.9 2.9 0 0 0 2.58 1.64c1.46 0 2.65-1.16 2.65-2.5 0-.67-.3-1.29-.77-1.75.47-.46.77-1.08.77-1.75 0-1.34-1.19-2.5-2.65-2.5-1.4 0-2.27.95-2.58 1.64a.75.75 0 0 0 1.36.62Zm4.92-2.26a.75.75 0 0 0-.75.75v7c0 .41.34.75.75.75h1.6a4.4 4.4 0 0 0 3-1.27A4.5 4.5 0 0 0 18.95 12c0-1.09-.46-2.24-1.15-2.98a4.4 4.4 0 0 0-3-1.27zm1.6 1.5c.84-.04 1.4.26 1.9.8.51.54.75 1.14.75 1.95s-.24 1.41-.75 1.95c-.5.54-1.06.84-1.9.8h-.85v-5.5z"
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

export default IconAi3d;
