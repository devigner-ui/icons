import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAi3dBox = forwardRef<SVGSVGElement, IconProps>(function IconAi3dBox(
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
            d="m12.92 2.26 1.89 1.02m2.83 5.44-4.72 2.55c-.58.31-1.26.31-1.84 0L4.57 7.76c-.76-.41-.76-1.58 0-1.99l6.51-3.51a2 2 0 0 1 1.84 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.61 10.13 6.05 3.03a2.2 2.2 0 0 1 1.23 1.99v5.72a1.1 1.1 0 0 1-1.61.99l-2.66-1.33m-2.14-1.08-1.25-.62A2.2 2.2 0 0 1 2 16.84v-5.72c0-.83.87-1.36 1.61-.99"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m20.39 10.13-6.05 3.03a2.2 2.2 0 0 0-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03A2.2 2.2 0 0 0 22 16.84v-5.72a1.1 1.1 0 0 0-1.61-.99"
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
            d="m12.92 2.26 1.89 1.02m2.83 5.44-4.72 2.55c-.58.31-1.26.31-1.84 0L4.57 7.76c-.76-.41-.76-1.58 0-1.99l6.51-3.51a2 2 0 0 1 1.84 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.61 10.13 6.05 3.03a2.2 2.2 0 0 1 1.23 1.99v5.72a1.1 1.1 0 0 1-1.61.99l-6.05-3.03A2.2 2.2 0 0 1 2 16.84v-5.72c0-.83.87-1.36 1.61-.99"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m20.39 10.13-6.05 3.03a2.2 2.2 0 0 0-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03A2.2 2.2 0 0 0 22 16.84v-5.72a1.1 1.1 0 0 0-1.61-.99"
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
            d="M15.35 3.52c2.08 1.12 5.27 4.01 3.2 5.13l-5.49 2.97-.25.12-.27.08-.27.05-.27.02-.27-.02-.27-.05-.27-.08-.25-.12-6.27-3.38-.16-.1L4.36 8l-.13-.14-.1-.16-.09-.17-.06-.19-.04-.2-.01-.2.01-.2.04-.19.06-.18.09-.17.1-.16.13-.14.15-.13.16-.1 6.27-3.38.25-.12.27-.09.27-.05.27-.01.27.01.27.05.27.09.25.12z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.91 12.79 4.07 9.87A1.43 1.43 0 0 0 2 11.15v5.51c0 .95.53 1.81 1.38 2.24l5.83 2.92a1.43 1.43 0 0 0 2.07-1.28v-5.51a2.5 2.5 0 0 0-1.37-2.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.32 9.93a1.4 1.4 0 0 0-1.39-.06l-5.83 2.92a2.5 2.5 0 0 0-1.38 2.24v5.51a1.4 1.4 0 0 0 1.43 1.43q.33 0 .64-.15l5.83-2.92A2.5 2.5 0 0 0 22 16.66v-5.51c0-.5-.25-.95-.68-1.22"
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
            d="M15.35 3.52c2.08 1.12 5.27 4.01 3.2 5.13l-5.49 2.97-.25.12-.27.08-.27.05-.27.02-.27-.02-.27-.05-.27-.08-.25-.12-6.27-3.38-.16-.1L4.36 8l-.13-.14-.1-.16-.09-.17-.06-.19-.04-.2-.01-.2.01-.2.04-.19.06-.18.09-.17.1-.16.13-.14.15-.13.16-.1 6.27-3.38.25-.12.27-.09.27-.05.27-.01.27.01.27.05.27.09.25.12z"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M9.91 12.79 4.07 9.87A1.43 1.43 0 0 0 2 11.15v5.51c0 .95.53 1.81 1.38 2.24l5.83 2.92a1.43 1.43 0 0 0 2.07-1.28v-5.51a2.5 2.5 0 0 0-1.37-2.24"
            fill="currentColor"
          />
          <path
            d="M21.32 9.93a1.4 1.4 0 0 0-1.39-.06l-5.83 2.92a2.5 2.5 0 0 0-1.38 2.24v5.51a1.4 1.4 0 0 0 1.43 1.43q.33 0 .64-.15l5.83-2.92A2.5 2.5 0 0 0 22 16.66v-5.51c0-.5-.25-.95-.68-1.22"
            fill="currentColor"
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

export default IconAi3dBox;
