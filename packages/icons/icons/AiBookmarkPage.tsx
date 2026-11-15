import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiBookmarkPage = forwardRef<SVGSVGElement, IconProps>(function IconAiBookmarkPage(
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

  /* TwoTone masks the dimmed inner lines with the stroked outline, and Bulk
     keeps the white lines inside the book, so the spine stops at the outline
     instead of sitting over it. One tone skips it: there the overlap is
     invisible, and a mask would leave a hairline seam. */
  const cut = useId();
  /* Bold and Bulk cut the body around the sparkle with the same rounded
     shape as AiClipboard, so the gap matches across the AI icons. */
  const gap = useId();

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
            d="M20.5 14.7V4.5C17 4.3 14 5 12 6.5c-2-1.5-5-2.2-8.5-2v2.69m0 2.4v7.91c3.5-.2 6.5.5 8.5 2a9 9 0 0 1 2.93-1.43"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 6.5v13M6 9l3.5.6M6 12.5l3.5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M20.5 14.7V4.5C17 4.3 14 5 12 6.5c-2-1.5-5-2.2-8.5-2v13c3.5-.2 6.5.5 8.5 2a9 9 0 0 1 2.93-1.43" stroke="black" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
          </mask>
          <path
            d="M20.5 14.7V4.5C17 4.3 14 5 12 6.5c-2-1.5-5-2.2-8.5-2v13c3.5-.2 6.5.5 8.5 2a9 9 0 0 1 2.93-1.43"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            mask={duotone ? `url(#${cut})` : undefined}
            d="M12 6.5v13M6 9l3.5.6M6 12.5l3.5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
          <mask id={gap} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <path d="M21.25 4.5v11.63c0 2.55-3.53 1.94-5.99 2.59a8 8 0 0 0-2.81 1.38c-.27.2-.63.2-.9 0-1.86-1.43-4.61-2.06-8-1.85a.75.75 0 0 1-.8-.75v-13c0-.4.31-.73.7-.75 3.61-.19 6.42.48 8.55 1.84 2.13-1.35 4.94-2.03 8.54-1.84.4.02.71.35.71.75" fill="white" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.25 4.5v11.63c0 2.55-3.53 1.94-5.99 2.59a8 8 0 0 0-2.81 1.38c-.27.2-.63.2-.9 0-1.86-1.43-4.61-2.06-8-1.85a.75.75 0 0 1-.8-.75v-13c0-.4.31-.73.7-.75 3.61-.19 6.42.48 8.55 1.84 2.13-1.35 4.94-2.03 8.54-1.84.4.02.71.35.71.75"
            mask={`url(#${gap})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            mask={`url(#${cut})`}
            d="M11.25 6.5v13a.75.75 0 0 0 1.5 0v-13a.75.75 0 0 0-1.5 0zM5.87 9.74l3.5.6a.75.75 0 0 0 .26-1.48l-3.5-.6a.75.75 0 0 0-.26 1.48zm.02 3.5 3.5.5a.75.75 0 0 0 .22-1.48l-3.5-.5a.75.75 0 0 0-.22 1.48z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
          <mask id={gap} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M21.25 4.5v11.63c0 2.55-3.55 1.87-5.99 2.59q-1.43.42-2.51 1.16V5.16c2.03-1.07 4.6-1.58 7.8-1.4.39.01.7.34.7.74M3.55 18.25a.75.75 0 0 1-.8-.75v-13c0-.4.31-.73.7-.75 3.2-.17 5.77.34 7.8 1.4v14.73c-1.85-1.28-4.5-1.83-7.7-1.63m2.32-8.51 3.5.6a.75.75 0 0 0 .26-1.48l-3.5-.6a.75.75 0 0 0-.26 1.48m.02 3.5 3.5.5a.75.75 0 0 0 .22-1.48l-3.5-.5a.75.75 0 0 0-.22 1.48"
            mask={`url(#${gap})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiBookmarkPage;
