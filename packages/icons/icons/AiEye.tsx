import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiEye = forwardRef<SVGSVGElement, IconProps>(function IconAiEye(
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
            d="M3.27 15.3C2.42 14.2 2 13.64 2 12s.42-2.2 1.27-3.3C4.97 6.5 7.82 4 12 4q1.35 0 2.5.32m6.48 4.72A4 4 0 0 1 22 12c0 1.64-.43 2.2-1.27 3.3-1.7 2.2-4.55 4.7-8.73 4.7a10 10 0 0 1-3.96-.82m-2.07-1.2a14 14 0 0 1-2.7-2.68"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
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
            opacity={duotone ? "0.4" : "1"}
            d="M3.27 15.3C2.42 14.2 2 13.64 2 12s.42-2.2 1.27-3.3C4.97 6.5 7.82 4 12 4q1.35 0 2.5.32m6.48 4.72A4 4 0 0 1 22 12c0 1.64-.43 2.2-1.27 3.3-1.7 2.2-4.55 4.7-8.73 4.7s-7.03-2.5-8.73-4.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
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
            opacity={duotone ? "0.4" : "1"}
            d="M14.21 4.25c3.2.64 4.92 2.19 6.82 4.85l.25.35.22.35.18.35.14.38.1.42.04.23.02.26.02.27v.59l-.02.27-.02.25-.04.24-.1.42-.14.38-.18.35-.22.34-.25.36-.3.4-.33.4-.36.43-.39.41-.41.41-.44.4-.48.4-.5.37-.52.35-.56.32-.59.3-.61.25-.65.23-.68.18-.7.13-.74.08L12 20l-.77-.03-.73-.08-.71-.13-.68-.18-.64-.23-.62-.26-.59-.29-.55-.32-.53-.35-.5-.37-.47-.4-.44-.4-.42-.4-.39-.42-.36-.42-.33-.42-.3-.39-.25-.36-.22-.34-.18-.35-.14-.38-.1-.42-.03-.24-.03-.25-.01-.27V12L2 11.7l.02-.27.03-.25.03-.23.1-.43.14-.37.18-.36.21-.34.26-.36.3-.39.33-.42.36-.41.39-.42.41-.41.45-.4.47-.4.5-.36.53-.35.55-.33.59-.3.62-.25.64-.22.68-.18.7-.14.74-.08L12 4l.77.03.74.08z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
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
            d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            fill="currentColor"
          />
          <path
            d="M14.21 4.25c3.2.64 4.92 2.19 6.82 4.85l.25.35.22.35.18.35.14.38.1.42.04.23.02.26.02.27v.59l-.02.27-.02.25-.04.24-.1.42-.14.38-.18.35-.22.34-.25.36-.3.4-.33.4-.36.43-.39.41-.41.41-.44.4-.48.4-.5.37-.52.35-.56.32-.59.3-.61.25-.65.23-.68.18-.7.13-.74.08L12 20l-.77-.03-.73-.08-.71-.13-.68-.18-.64-.23-.62-.26-.59-.29-.55-.32-.53-.35-.5-.37-.47-.4-.44-.4-.42-.4-.39-.42-.36-.42-.33-.42-.3-.39-.25-.36-.22-.34-.18-.35-.14-.38-.1-.42-.03-.24-.03-.25-.01-.27V12L2 11.7l.02-.27.03-.25.03-.23.1-.43.14-.37.18-.36.21-.34.26-.36.3-.39.33-.42.36-.41.39-.42.41-.41.45-.4.47-.4.5-.36.53-.35.55-.33.59-.3.62-.25.64-.22.68-.18.7-.14.74-.08L12 4l.77.03.74.08zm-2.21 4a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
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

export default IconAiEye;
