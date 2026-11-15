import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiVoiceComment = forwardRef<SVGSVGElement, IconProps>(function IconAiVoiceComment(
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
            d="M13.9 3.67A9 7.75 0 0 0 12 3.5c-5 0-9 3.4-9 7.75 0 2.2 1 4.2 2.7 5.6L5 20.5l.77-.36m2.18-1.02 1.15-.54c.9.25 1.9.4 2.9.4 5 0 9-3.4 9-7.75a9 7.75 0 0 0-.18-1.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 10.25v2m2-3.5v5m2-6v7m2-6v5m2-3.5v2"
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
            d="M13.9 3.67A9 7.75 0 0 0 12 3.5c-5 0-9 3.4-9 7.75 0 2.2 1 4.2 2.7 5.6L5 20.5l4.1-1.9c.9.25 1.9.4 2.9.4 5 0 9-3.4 9-7.75a9 7.75 0 0 0-.18-1.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 10.25v2m2-3.5v5m2-6v7m2-6v5m2-3.5v2"
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
            d="M21.75 11.25a8.2 8.2 0 0 1-2.89 6.08A10.7 10.7 0 0 1 12 19.75a11 11 0 0 1-2.83-.36l-3.86 1.8a.75.75 0 0 1-1.05-.83l.62-3.23a8 8 0 0 1-2.63-5.88 8.2 8.2 0 0 1 2.89-6.08A10.7 10.7 0 0 1 12 2.75q1.92.01 3.64.61c2.57.9 4.13 2.07 5.31 4.52.5 1.04.8 2.2.8 3.37"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.25 10.25v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0zm2-1.5v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0zm2-1v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0zm2 1v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0zm2 1.5v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0z"
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
            d="M21.75 11.25a8.2 8.2 0 0 1-2.89 6.08A10.7 10.7 0 0 1 12 19.75a11 11 0 0 1-2.83-.36l-3.86 1.8a.75.75 0 0 1-1.05-.83l.62-3.23a8 8 0 0 1-2.63-5.88 8.2 8.2 0 0 1 2.89-6.08A10.7 10.7 0 0 1 12 2.75q1.92.01 3.64.61c2.57.9 4.13 2.07 5.31 4.52.5 1.04.8 2.2.8 3.37m-14.5-1v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0m2-1.5v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m2-1v7a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0m2 1v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-1.5 0m2 1.5v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0"
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

export default IconAiVoiceComment;
