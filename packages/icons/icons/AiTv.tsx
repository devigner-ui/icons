import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTv = forwardRef<SVGSVGElement, IconProps>(function IconAiTv(
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
            d="M2 16.25V12c0-2.83 0-4.24.88-5.12S5.17 6 8 6h8c2.83 0 4.24 0 5.12.88S22 9.17 22 12v2.31m0 2.38c0 2.38-.07 3.62-.88 4.43-.88.88-2.29.88-5.12.88H7.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9 2 3 3.5L15 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16 6.86V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
            fill="currentColor"
          />
          <path
            d="M20 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
            fill="currentColor"
          />
          <path
            d="M4.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            d="M2 16.25V12c0-2.83 0-4.24.88-5.12S5.17 6 8 6h8c2.83 0 4.24 0 5.12.88S22 9.17 22 12v4c0 2.83 0 4.24-.88 5.12S18.83 22 16 22H7.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9 2 3 3.5L15 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16 6.86V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
            fill="currentColor"
          />
          <path
            d="M4.5 17.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
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
            <path d="M3 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M8 6h8v16H6.5A4.5 4.5 0 0 1 2 17.5V12c0-2.83 0-4.24.88-5.12S5.17 6 8 6"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.12 6.88C22 7.76 22 9.17 22 12v4c0 2.83 0 4.24-.88 5.12S18.83 22 16 22V6c2.83 0 4.24 0 5.12.88"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.58 6 8.43 3.48l-.09-.12-.06-.14-.03-.14v-.15l.03-.14.05-.14.07-.12.11-.11.13-.09.13-.06.14-.03h.15l.14.02.13.06.13.07.11.11L12 5.35l2.43-2.85.11-.11.13-.07.13-.06.14-.02h.15l.14.03.13.06.13.09.11.11.07.12.05.14.03.14v.15l-.03.14-.06.14-.09.12L13.42 6z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M19 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            fill="currentColor"
          />
          <path
            d="M19 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            fill="currentColor"
          />
          <path
            d="M4.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
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
            <path d="M3 17a1.5 1.5 0 0 1 3 0c0 .6.4 1 1 1a1.5 1.5 0 0 1 0 3c-.6 0-1 .4-1 1a1.5 1.5 0 0 1-3 0c0-.6-.4-1-1-1a1.5 1.5 0 0 1 0-3c.6 0 1-.4 1-1z" fill="black" />
          </mask>
          <path
            d="M21.12 6.88C22 7.76 22 9.17 22 12v4c0 2.83 0 4.24-.88 5.12-.83.83-2.12.88-4.62.88V6c2.5 0 3.8.05 4.62.88M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M8 6h2.58L8.43 3.48l-.09-.12-.06-.14-.03-.14v-.15l.03-.14.05-.14.07-.12.11-.11.13-.09.13-.06.14-.03h.15l.14.02.13.06.13.07.11.11L12 5.35l2.43-2.85.11-.11.13-.07.13-.06.14-.02h.15l.14.03.13.06.13.09.11.11.07.12.05.14.03.14v.15l-.03.14-.06.14-.09.12L13.42 6H15v16H6.5A4.5 4.5 0 0 1 2 17.5V12c0-2.83 0-4.24.88-5.12S5.17 6 8 6"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M4.9 16.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiTv;
