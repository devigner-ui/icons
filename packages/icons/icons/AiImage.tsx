import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiImage = forwardRef<SVGSVGElement, IconProps>(function IconAiImage(
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

  /* The mountain ends on the frame's centre line and is clipped at the
     frame's inner edges, so it meets the frame flush, as in Bold, without its
     round cap showing over the frame. In TwoTone it is the dimmed shape. Only
     TwoTone clips: in one tone the cap hides inside the frame, and a clip
     there leaves a hairline seam. */
  const clip = useId();
  /* Bold and Bulk cut the body around the sparkle with the same rounded
     shape as AiClipboard, so the gap matches across the AI icons. */
  const cut = useId();
  const sw = Number(strokeWidth);
  const mountain = (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={2.5 + sw / 2} y="0" width={19 - sw} height="24" />
        </clipPath>
      </defs>
      <path
        opacity={duotone ? "0.4" : "1"}
        clipPath={duotone ? `url(#${clip})` : undefined}
        d="m2.5 16.5 5.1-4.9 4.7 4.2 3.3-3.2 5.9 4.2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );

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
            d="M2.5 12.59V17A3.5 3.5 0 0 0 6 20.5h12a3.5 3.5 0 0 0 3.5-3.5V9.47m-7.51-5.96-.65-.01H6A3.5 3.5 0 0 0 2.5 7v3.19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {mountain}
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
            d="M21.5 8.2V17a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5h7.34l.65.01m7.51 5.96V17a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 17V7A3.5 3.5 0 0 1 6 3.5h7.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {mountain}
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
            d="M6 2.75h10.33c2.96 0 5.92 1.77 5.92 4.73V17A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3V7A4.6 4.6 0 0 1 3 4a4.6 4.6 0 0 1 3-1.25"
            mask={`url(#${cut})`}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="m1.98 15.96 5.1-4.9a.7.7 0 0 1 .83-.14q.1.04.2.12l4.17 3.74 2.79-2.71a1 1 0 0 1 .47-.22 1 1 0 0 1 .5.15l5.9 4.19q.3.24.3.62V17A4.6 4.6 0 0 1 21 20a4.6 4.6 0 0 1-3 1.25H6A4.6 4.6 0 0 1 3 20a4.6 4.6 0 0 1-1.25-3v-.5q0-.32.23-.54z"
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
            d="M6 2.75h10.33c2.96 0 5.92 1.77 5.92 4.73v8.93L16.05 12a.7.7 0 0 0-.82-.05l-.16.12-2.79 2.7-4.17-3.72a.7.7 0 0 0-.52-.2.8.8 0 0 0-.51.21l-5.33 5.12V7a4.6 4.6 0 0 1 1.24-3A4.6 4.6 0 0 1 6 2.75m15 17.26a4.6 4.6 0 0 1-3 1.24H6A4.6 4.6 0 0 1 3 20a4.4 4.4 0 0 1-1.08-1.9l5.7-5.48 4.18 3.73q.08.09.2.13a.8.8 0 0 0 .83-.15l2.84-2.76 6.4 4.56A4.4 4.4 0 0 1 21 20z"
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

export default IconAiImage;
