import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiJavascript = forwardRef<SVGSVGElement, IconProps>(function IconAiJavascript(
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
            d="M14.98 21H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h1.26m2.4 0H16a5 5 0 0 1 5 5v6.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8.5v5a1.5 1.5 0 0 1-3 0m9.92-3.83c-.88-1.17-3.98-1.17-4.42.52-.35 1.17 4.42 1.43 4.42 3.12-.44 1.69-3.54 1.69-4.42.52"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.98 21H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v6.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 8.5v5a1.5 1.5 0 0 1-3 0m9.92-3.83c-.88-1.17-3.98-1.17-4.42.52-.35 1.17 4.42 1.43 4.42 3.12-.44 1.69-3.54 1.69-4.42.52"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 2.25h8c1.53.03 3.07.69 4.07 1.68 1 1 1.65 2.54 1.68 4.07v8A5.77 5.77 0 0 1 16 21.76H8a6 6 0 0 1-4.07-1.7c-1-1-1.65-2.52-1.68-4.06V8a6 6 0 0 1 1.68-4.06c1-1 2.53-1.66 4.07-1.69"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M10 7.75a.75.75 0 0 0-.75.75v4.56c0 .2.03.43-.03.64-.22.84-1.44.64-1.47-.2a.75.75 0 0 0-1.5 0q.02.84.56 1.48c.96 1.1 2.76.98 3.57-.24.43-.66.37-1.41.37-2.16V8.5a.75.75 0 0 0-.75-.75zm7.37 2.52c.33-.25.4-.72.15-1.05-1-1.2-2.96-1.42-4.34-.8-.64.3-1.3.89-1.42 1.63-.1.65.24 1.13.77 1.46.75.45 1.62.66 2.42 1 .34.13.7.28.98.5.07.06.18.13.22.23-.15.3-.46.47-.78.56-.68.2-1.78.17-2.27-.42a.75.75 0 0 0-1.2.9c1.4 1.7 4.96 1.54 5.72-.7a1 1 0 0 0 .03-.42c-.22-1.56-2.11-2.04-3.38-2.51-.33-.13-.69-.24-.98-.44l.1-.13q.23-.25.56-.35c.7-.24 1.86-.22 2.37.4.25.32.72.39 1.05.14z"
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
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <path d="M18 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M8 2.25h8c1.53.03 3.07.69 4.07 1.68 1 1 1.65 2.54 1.68 4.07v8A5.77 5.77 0 0 1 16 21.76H8a6 6 0 0 1-4.07-1.7c-1-1-1.65-2.52-1.68-4.06V8a6 6 0 0 1 1.68-4.06c1-1 2.53-1.66 4.07-1.69m2 5.5a.75.75 0 0 0-.75.75v4.56c0 .2.03.43-.03.64-.22.84-1.44.64-1.47-.2a.75.75 0 0 0-1.5 0q.02.84.56 1.48c.96 1.1 2.76.98 3.57-.24.43-.66.37-1.41.37-2.16V8.5a.75.75 0 0 0-.75-.75m7.37 2.52c.33-.25.4-.72.15-1.05-1-1.2-2.96-1.42-4.34-.8-.64.3-1.3.89-1.42 1.63-.1.65.24 1.13.77 1.46.75.45 1.62.66 2.42 1 .34.13.7.28.98.5.07.06.18.13.22.23-.15.3-.46.47-.78.56-.68.2-1.78.17-2.27-.42a.75.75 0 0 0-1.2.9c1.4 1.7 4.96 1.54 5.72-.7a1 1 0 0 0 .03-.42c-.22-1.56-2.11-2.04-3.38-2.51-.33-.13-.69-.24-.98-.44l.1-.13q.23-.25.56-.35c.7-.24 1.86-.22 2.37.4.25.32.72.39 1.05.14"
            mask={`url(#${cut})`}
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

export default IconAiJavascript;
