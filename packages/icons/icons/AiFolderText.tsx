import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiFolderText = forwardRef<SVGSVGElement, IconProps>(function IconAiFolderText(
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
            d="M2.5 16.12v1.38C2.5 18.9 3.6 20 5 20h14c1.4 0 2.5-1.1 2.5-2.5v-7q0-.48-.16-.91m-4.96-1.74C15.7 7.92 15 8 14.29 8H12.9c-.6 0-1.2-.2-1.6-.7L10 5.7C9.6 5.3 9 5 8.4 5H5C3.6 5 2.5 6.1 2.5 7.5v6.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.8 16.8v-2.4a1.6 1.6 0 1 1 3.2 0v2.4m-3.2-1.68H13m1.68-2.32v4"
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
            d="M21.1 9.13q.39.6.4 1.37v7c0 1.4-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-1.1-2.5-2.5v-10C2.5 6.1 3.6 5 5 5h3.4c.6 0 1.2.3 1.6.7l1.3 1.6c.4.5 1 .7 1.6.7h1.39c.71 0 1.41-.08 2.09-.15m4.96 1.74q.16.43.16.91v7c0 1.4-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-1.1-2.5-2.5v-10C2.5 6.1 3.6 5 5 5h3.4c.6 0 1.2.3 1.6.7l1.3 1.6c.4.5 1 .7 1.6.7h1.39"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.8 16.8v-2.4a1.6 1.6 0 1 1 3.2 0v2.4m-3.2-1.68H13m1.68-2.32v4"
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
            d="M12.9 7.25c3.3-.14 6.1-1.42 8.41.94.54.55.9 1.46.94 2.31v7a3.6 3.6 0 0 1-.94 2.3 3.6 3.6 0 0 1-2.3.95H5a3.6 3.6 0 0 1-2.31-.94 3.6 3.6 0 0 1-.95-2.31l.01-10c.03-.85.4-1.76.95-2.3A3.6 3.6 0 0 1 5 4.25h3.4a3.7 3.7 0 0 1 2.18.98l1.3 1.6c.23.38.54.44 1.02.42"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.8 17.55c.41 0 .75-.34.75-.75v-.93h1.7v.93a.75.75 0 0 0 1.5 0V15c0-.56.02-1.1-.23-1.62a2.37 2.37 0 0 0-4.16-.15c-.32.55-.3 1.15-.3 1.77v1.8c0 .41.33.75.74.75zm2.45-3.18h-1.7a1 1 0 0 1 .08-.34c.33-.68 1.36-.6 1.58.12q.03.1.04.22zm1.68-1.57v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0z"
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
            d="M12.9 7.25c3.3-.14 6.1-1.42 8.41.94.54.55.9 1.46.94 2.31v7a3.6 3.6 0 0 1-.94 2.3 3.6 3.6 0 0 1-2.3.95H5a3.6 3.6 0 0 1-2.31-.94 3.6 3.6 0 0 1-.95-2.31l.01-10c.03-.85.4-1.76.95-2.3A3.6 3.6 0 0 1 5 4.25h3.4a3.7 3.7 0 0 1 2.18.98l1.3 1.6c.23.38.54.44 1.02.42m-3.1 10.3c.41 0 .75-.34.75-.75v-.93h1.7v.93a.75.75 0 0 0 1.5 0V15c0-.56.02-1.1-.23-1.62a2.37 2.37 0 0 0-4.16-.15c-.32.55-.3 1.15-.3 1.77v1.8c0 .41.33.75.74.75m2.45-3.18h-1.7a1 1 0 0 1 .08-.34c.33-.68 1.36-.6 1.58.12zm1.68-1.57v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0"
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

export default IconAiFolderText;
