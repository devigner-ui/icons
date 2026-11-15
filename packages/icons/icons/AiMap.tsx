import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiMap = forwardRef<SVGSVGElement, IconProps>(function IconAiMap(
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
            d="M21 9.02v6.27c0 1.47 0 2.21-.4 2.64q-.2.22-.49.36c-.53.24-1.23 0-2.63-.46-1.07-.36-1.6-.54-2.14-.52q-.3 0-.59.08c-.52.12-.99.44-1.93 1.06l-1.38.92c-1.2.8-1.8 1.2-2.49 1.3-.68.09-1.37-.14-2.73-.6l-1.17-.39c-.99-.33-1.48-.5-1.77-.88C3 18.4 3 17.88 3 16.84v-.8m0-2.4V8.71c0-1.47 0-2.21.4-2.64q.2-.23.49-.36c.53-.24 1.23 0 2.63.46a7 7 0 0 0 2.14.52q.3 0 .59-.08c.52-.12.99-.44 1.93-1.06l1.38-.92a9 9 0 0 1 2.19-1.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 6.64V20.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 6.03V17"
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
            d="M21 9.02v6.27c0 1.47 0 2.21-.4 2.64q-.2.22-.49.36c-.53.24-1.23 0-2.63-.46-1.07-.36-1.6-.54-2.14-.52q-.3 0-.59.08c-.52.12-.99.44-1.93 1.06l-1.38.92c-1.2.8-1.8 1.2-2.49 1.3-.68.09-1.37-.14-2.73-.6l-1.17-.39c-.99-.33-1.48-.5-1.77-.88C3 18.4 3 17.88 3 16.84V8.71c0-1.47 0-2.21.4-2.64q.2-.22.49-.36c.53-.24 1.23 0 2.63.46a7 7 0 0 0 2.14.52q.3 0 .59-.08c.52-.12.99-.44 1.93-1.06l1.38-.92a9 9 0 0 1 2.19-1.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 6.64V20.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 6.03V17"
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
            d="M3 8.71v8.13c0 1.04 0 1.56.28 1.96s.78.55 1.77.88l1.17.4c1.36.45 2.05.68 2.73.58H9v-14l-.34.03c-.54.02-1.07-.16-2.14-.52-1.4-.46-2.1-.7-2.63-.46q-.29.12-.5.36C3 6.5 3 7.24 3 8.71"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 3.33c0-3.02 6 1.87 6 4.89v8.03l-.02.4-.03.34-.04.3-.07.24-.1.21-.13.18-.23.21-.27.15-.2.07-.24.02h-.25l-.3-.06-.33-.08-.38-.11-.44-.14-.49-.16-.38-.13-.33-.1-.3-.1-.26-.07-.24-.06-.22-.04-.2-.02h-.21l-.34.03z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.25 6.61 9 6.66v14c.67-.1 1.27-.5 2.44-1.29l1.38-.92c.94-.62 1.4-.94 1.93-1.06l.25-.05v-14c-.67.1-1.27.5-2.44 1.29l-1.38.92c-.94.62-1.4.94-1.93 1.06"
            fill="currentColor"
          />
          <path
            d="m17.48 17.83.25.08z"
            fill="currentColor"
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
            d="M2.44 5.15C2 5.65 2 6.49 2 8.2v9.4c0 1.2 0 1.8.31 2.25.32.46.87.65 1.97 1.03l1.3.45c.7.24 1.23.43 1.69.55.3.08.56-.15.56-.46V6.27a.55.55 0 0 0-.42-.52c-.4-.1-.86-.26-1.5-.48-1.55-.54-2.33-.81-2.92-.54q-.32.15-.55.42"
            fill="currentColor"
          />
          <path
            d="m12.62 3.48-1.54 1.07q-.8.56-1.3.86a.5.5 0 0 0-.28.46v15.05c0 .37.38.6.7.4l1.18-.8 1.54-1.07q.8-.56 1.3-.86.27-.16.28-.46V3.08c0-.37-.38-.6-.7-.4z"
            fill="currentColor"
          />
          <path
            d="M16.17 6.27c0-2.28 5.83-2.05 5.83.23v10.43l-.02.46-.04.39-.05.34-.07.28-.11.25-.15.2-.25.24-.3.18-.23.08-.26.02-.28-.01-.33-.06-.37-.09-.42-.13-.48-.16-.55-.19-.45-.15-.39-.13-.35-.11-.3-.09-.18-.07-.13-.12-.09-.15-.03-.18z"
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

export default IconAiMap;
