import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiAntenna = forwardRef<SVGSVGElement, IconProps>(function IconAiAntenna(
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
            d="m5.9 17.4.81-3.54m.59 3.44 3.45-2.05m-.62-10.02h5.47M17.36 7v4.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.9 4.22.13-.15 9.56 9.57a6 6 0 0 1-4.48 1.68 6.6 6.6 0 0 1-4.79-1.98 7 7 0 0 1-.8-.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.28 20.1H4.54a.3.3 0 0 1-.3-.3v-1.6c0-.17.13-.3.3-.3h14.92c.17 0 .3.13.3.3v1.6a.3.3 0 0 1-.3.3h-5.78"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.32 5.23a1.04 1.04 0 1 0 2.08 0 1.04 1.04 0 0 0-2.08 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66 5.8c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="m5.9 17.4.81-3.54m.59 3.44 3.45-2.05m-.62-10.02h5.47M17.36 7v4.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m8.9 4.22.13-.15 9.56 9.57a6 6 0 0 1-4.48 1.68 6.6 6.6 0 0 1-4.79-1.98 7 7 0 0 1-.8-.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.54 17.9h14.92c.17 0 .3.13.3.3v1.6a.3.3 0 0 1-.3.3H4.54a.3.3 0 0 1-.3-.3v-1.6c0-.17.13-.3.3-.3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.32 5.23a1.04 1.04 0 1 0 2.08 0 1.04 1.04 0 0 0-2.08 0z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.66 5.8c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M5.16 5.7a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.73 18.13a.75.75 0 0 1-.56-.9l1.09-4.82c.13-.57 1.59-.24 1.46.33l-.9 3.98.1-.06 3.45-2.05a.75.75 0 1 1 .76 1.29l-3.45 2.05a.75.75 0 0 1-1.03-.27l-.03-.07c-.11.38-.5.6-.89.52m4.12-12.9c0-.41.34-.75.75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m7.51 1.02c.41 0 .75.34.75.75v4.3a.75.75 0 0 1-1.5 0V7c0-.41.34-.75.75-.75"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8.48 3.56a.75.75 0 0 1 1.08-.02l9.56 9.57a.75.75 0 0 1-.02 1.08 7 7 0 0 1-4.99 1.88 7.5 7.5 0 0 1-6.76-4.22 1.7 1.7 0 0 0 1-1.32c.04-.51.03-.45.11-.53.08-.07.02-.07.53-.11a1.7 1.7 0 0 0 0-3.37c-.51-.05-.45-.04-.53-.12s-.07-.02-.12-.53a1.7 1.7 0 0 0-.72-1.17q.38-.6.86-1.13zM4.54 17.15h14.92c.24.03.6.16.74.3.15.16.28.51.31.75v1.6c-.03.24-.16.6-.3.74-.16.15-.51.28-.75.31H4.54c-.24-.03-.6-.16-.74-.3a1.6 1.6 0 0 1-.31-.75v-1.6c.03-.24.16-.6.3-.74.16-.15.51-.28.75-.31zM17.36 3.44c.44 0 .98.24 1.27.52a2 2 0 0 1 .52 1.27c0 .44-.24.98-.52 1.27a2 2 0 0 1-1.27.52c-.44 0-.98-.24-1.27-.52a2 2 0 0 1-.52-1.27c0-.44.24-.98.52-1.27a2 2 0 0 1 1.27-.52z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.06 5.4c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M5.16 5.7a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M6.26 12.41c.67-2.98-.27-5.13 1.36-7.71q.38-.6.86-1.14a.75.75 0 0 1 1.08-.02l.95.95h5.24q.14-.32.34-.53a2 2 0 0 1 1.27-.52c.44 0 .98.24 1.27.52a2 2 0 0 1 .52 1.27c0 .44-.24.98-.52 1.27a2 2 0 0 1-.54.35l.02.15v4.3a.8.8 0 0 1-.24.55l1.25 1.26a.75.75 0 0 1-.02 1.08 7 7 0 0 1-4.99 1.88 7 7 0 0 1-2.69-.5 1 1 0 0 1-.29.33l-2.1 1.25h10.43c.24.03.6.16.74.3.15.16.28.51.31.75v1.6c-.03.24-.16.6-.3.74-.16.15-.51.28-.75.31H4.54c-.24-.03-.6-.16-.74-.3a1.6 1.6 0 0 1-.31-.75v-1.6c.03-.24.16-.6.3-.74.16-.15.51-.28.75-.3h.65zm1.48.15-.02.18-.9 3.98.1-.06 3.06-1.82a8 8 0 0 1-2.24-2.28m7.86-6.58H12l4.61 4.62V7l.02-.15a2 2 0 0 1-.54-.35 2 2 0 0 1-.35-.53z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M7.06 5.4c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiAntenna;
