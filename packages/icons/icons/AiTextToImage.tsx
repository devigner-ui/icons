import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiTextToImage = forwardRef<SVGSVGElement, IconProps>(function IconAiTextToImage(
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

  const clip = useId();

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
            d="M21.5 16.25c0 2.47 0 3.71-.77 4.48s-2.01.77-4.48.77-3.71 0-4.48-.77-.77-2.01-.77-4.48 0-3.71.77-4.48 2.01-.77 4.48-.77 3.71 0 4.48.77c.51.51.68 1.23.73 2.38"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 2.5h5.6m-2.8 0v7m5.7 7.01.92-.8a1.2 1.2 0 0 1 1.65.05l2.26 2.26a1.05 1.05 0 0 0 1.34.11l.16-.11a1.6 1.6 0 0 1 1.96.12l1.69 1.52M5.3 12.5V15c0 1.4 1.1 2.5 2.5 2.5H9m-.99-1.34L9.5 17.5l-1.49 1.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.25 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="18.35"
            cy="14.15"
            r="1.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
          {/* TwoTone dims the mountain instead of the frame and keeps it inside
              the frame's centerline, so its ends sit under the solid stroke. */}
          <clipPath id={clip}>
            <path d="M11 16.25c0-2.47 0-3.71.77-4.48s2.01-.77 4.48-.77 3.71 0 4.48.77.77 2.01.77 4.48 0 3.71-.77 4.48-2.01.77-4.48.77-3.71 0-4.48-.77-.77-2.01-.77-4.48Z" />
          </clipPath>
          <path
            d="M11 16.25c0-2.47 0-3.71.77-4.48s2.01-.77 4.48-.77 3.71 0 4.48.77.77 2.01.77 4.48 0 3.71-.77 4.48-2.01.77-4.48.77-3.71 0-4.48-.77-.77-2.01-.77-4.48Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            clipPath={duotone ? `url(#${clip})` : undefined}
            d="m11 16.51.92-.8a1.2 1.2 0 0 1 1.65.05l2.26 2.26a1.05 1.05 0 0 0 1.34.11l.16-.11a1.6 1.6 0 0 1 1.96.12l1.69 1.52"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 2.5h5.6m-2.8 0v7m0 3V15c0 1.4 1.1 2.5 2.5 2.5H9m-.99-1.34L9.5 17.5l-1.49 1.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.25 2.1c.22 1.58.82 2.18 2.4 2.4-1.58.22-2.18.82-2.4 2.4-.22-1.58-.82-2.18-2.4-2.4 1.58-.22 2.18-.82 2.4-2.4Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="18.35"
            cy="14.15"
            r="1.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.25 16.25c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88 4.24 0 5.12.88.88 2.3.88 5.12 0 4.24-.88 5.12-2.3.88-5.12.88-4.24 0-5.12-.88-.88-2.3-.88-5.12Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m11 16.51.92-.8a1.2 1.2 0 0 1 1.65.05l2.26 2.26a1.05 1.05 0 0 0 1.34.11l.16-.11a1.6 1.6 0 0 1 1.96.12l1.69 1.52"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.74 2.5c0-.41.34-.75.75-.75h5.6a.75.75 0 0 1 0 1.5H6.05V9.5a.75.75 0 0 1-1.5 0V3.25H2.5a.75.75 0 0 1-.75-.75zm4.3 10v1.43c0 .97-.1 2.04.87 2.6a2 2 0 0 0 .6.2h0a.75.75 0 1 1 1-1.12l1.47 1.33.04.03a.75.75 0 0 1 .14.85l-.14.21-.04.04L8.5 19.4a.75.75 0 1 1-1-1.12l.04-.04a4 4 0 0 1-1.37-.41 3 3 0 0 1-.62-.47c-1.33-1.25-1.01-3.2-1.01-4.86a.75.75 0 0 1 1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.65 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <circle cx="18.35" cy="14.15" r="2" fill="currentColor" />
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
          <mask id={`${clip}m`} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="white" />
            <circle cx="18.35" cy="14.15" r="2" fill="black" />
            <path d="m11 16.51.92-.8a1.2 1.2 0 0 1 1.65.05l2.26 2.26a1.05 1.05 0 0 0 1.34.11l.16-.11a1.6 1.6 0 0 1 1.96.12l1.69 1.52" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </mask>
          <path
            d="M10.25 16.25c0-2.83 0-4.24.88-5.12s2.3-.88 5.12-.88 4.24 0 5.12.88.88 2.3.88 5.12 0 4.24-.88 5.12-2.3.88-5.12.88-4.24 0-5.12-.88-.88-2.3-.88-5.12Z"
            mask={`url(#${clip}m)`}
            fill="currentColor"
          />
          <path
            d="M1.74 2.5c0-.41.34-.75.75-.75h5.6a.75.75 0 0 1 0 1.5H6.05V9.5a.75.75 0 0 1-1.5 0V3.25H2.5a.75.75 0 0 1-.75-.75zm4.3 10v1.43c0 .97-.1 2.04.87 2.6a2 2 0 0 0 .6.2h0a.75.75 0 1 1 1-1.12l1.47 1.33.04.03a.75.75 0 0 1 .14.85l-.14.21-.04.04L8.5 19.4a.75.75 0 1 1-1-1.12l.04-.04a4 4 0 0 1-1.37-.41 3 3 0 0 1-.62-.47c-1.33-1.25-1.01-3.2-1.01-4.86a.75.75 0 0 1 1.5 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M16.65 1.7c.1.86.3 1.36.67 1.73s.87.56 1.73.67a.4.4 0 0 1 0 .8c-.86.1-1.36.3-1.73.67s-.56.87-.67 1.73a.4.4 0 0 1-.8 0c-.1-.86-.3-1.36-.67-1.73s-.87-.56-1.73-.67a.4.4 0 0 1 0-.8c.86-.1 1.36-.3 1.73-.67s.56-.87.67-1.73a.4.4 0 0 1 .8 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiTextToImage;
