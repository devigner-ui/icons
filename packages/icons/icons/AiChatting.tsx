import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiChatting = forwardRef<SVGSVGElement, IconProps>(function IconAiChatting(
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
            d="M17.71 8.79q.27.86.27 2m0 0v4q0 .39-.04.75-.35 4.05-4.75 4.04h-.4a.8.8 0 0 0-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a1 1 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4q0-4.4 4.04-4.75Q6.4 6 6.79 6h1.37m2.4 0h2.63q1.14 0 2 .27"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.98 7.68v3.11q0 4.4-4.04 4.75.04-.36.04-.75v-4q0-1.14-.27-2M15.2 6.27A7 7 0 0 0 13.19 6h-6.4q-.39 0-.75.04Q6.39 2 10.79 2h5.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.5 13.25h.02m3.47 0h.02m3.48 0h.02"
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
            d="M17.98 10.79v4q0 .39-.04.75-.35 4.05-4.75 4.04h-.4a.8.8 0 0 0-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a1 1 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4q0-4.4 4.04-4.75Q6.4 6 6.79 6h6.4q4.79 0 4.79 4.79"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.98 7.68v3.11q0 4.4-4.04 4.75.04-.36.04-.75v-4q0-1.14-.27-2M15.2 6.27A7 7 0 0 0 13.19 6h-6.4q-.39 0-.75.04Q6.39 2 10.79 2h5.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.5 13.25h.02m3.47 0h.02m3.48 0h.02"
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
            d="M17.98 10.79v4q0 .39-.04.75-.35 4.05-4.75 4.04h-.4a.8.8 0 0 0-.64.32l-1.2 1.6c-.53.71-1.39.71-1.92 0l-1.2-1.6a1 1 0 0 0-.64-.32h-.4C3.6 19.58 2 18.79 2 14.79v-4q0-4.4 4.04-4.75Q6.4 6 6.79 6h6.4q4.79 0 4.79 4.79"
            fill="currentColor"
          />
          <path
            d="M9.99 14a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M13.49 14a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M6.5 14a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M21.98 6.79v4q0 4.4-4.04 4.75.04-.36.04-.75v-4Q17.98 6 13.19 6h-6.4q-.39 0-.75.04Q6.39 2 10.79 2h6.4q4.79 0 4.79 4.79"
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
            d="M13.19 6h-6.4q-.39 0-.75.04Q2 6.39 2 10.79v4c0 4 1.6 4.79 4.79 4.79h.4c.22 0 .51.15.64.32l1.2 1.6c.53.71 1.39.71 1.92 0l1.2-1.6a.8.8 0 0 1 .64-.32h.4q4.4 0 4.75-4.04.04-.36.04-.75v-4Q17.98 6 13.19 6M6.5 14a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m3.49 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m3.5 0a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M21.98 6.79v4q0 3-1.86 4.11c-.3.18-.65-.06-.65-.41l.01-3.7c0-4-2.29-6.29-6.29-6.29l-6.09.01c-.35 0-.59-.35-.41-.65Q7.81 2 10.79 2h6.4q4.79 0 4.79 4.79"
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

export default IconAiChatting;
