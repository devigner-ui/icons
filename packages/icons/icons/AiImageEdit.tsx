import { forwardRef, useId } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAiImageEdit = forwardRef<SVGSVGElement, IconProps>(function IconAiImageEdit(
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

  /* The mountain starts on the frame's centre line and is clipped at the
     frame's inner edge, so it meets the frame flush, as in Bold, without its
     round cap showing over the frame. In TwoTone it is the dimmed shape. Only
     TwoTone clips: in one tone the cap hides inside the frame, and a clip
     there leaves a hairline seam. */
  const clip = useId();
  const mountain = (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={2.5 + Number(strokeWidth) / 2} y="0" width="24" height="24" />
        </clipPath>
      </defs>
      <path
        opacity={duotone ? "0.4" : "1"}
        clipPath={duotone ? `url(#${clip})` : undefined}
        d="m2.5 17.09 4.1-3.69c.8-.7 2-.7 2.8 0l2.6 2.5"
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
            d="M11 20.5H6c-1.9 0-3.5-1.6-3.5-3.5V7c0-1.9 1.6-3.5 3.5-3.5h1.23m2.4 0H18c1.9 0 3.5 1.6 3.5 3.5v3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {mountain}
          <path
            d="M19.3 13.2a1.6 1.6 0 0 1 2.3 2.3l-5.4 5.4-3 .6.6-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6.2c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
            d="M11 20.5H6c-1.9 0-3.5-1.6-3.5-3.5V7c0-1.9 1.6-3.5 3.5-3.5h12c1.9 0 3.5 1.6 3.5 3.5v3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {mountain}
          <path
            d="M19.3 13.2a1.6 1.6 0 0 1 2.3 2.3l-5.4 5.4-3 .6.6-3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6.2c.2 1.52.78 2.1 2.3 2.3-1.52.2-2.1.78-2.3 2.3-.2-1.52-.78-2.1-2.3-2.3 1.52-.2 2.1-.78 2.3-2.3Z"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 21.25H7.43c-.67 0-1.37.05-2.03-.04a4.3 4.3 0 0 1-3.63-3.82c-.1-1-.02-2.06-.02-3.07V8.33c0-.63-.05-1.28.04-1.9A4.3 4.3 0 0 1 5.43 2.8c.67-.1 1.36-.04 2.02-.04h8.75c.83 0 1.7-.08 2.53.06a4.3 4.3 0 0 1 3.48 3.64c.08.54.04 1.1.04 1.65v2.4a.75.75 0 0 1-1.5 0V7.98c0-1.09.01-2.08-.81-2.9-1.02-1.03-2.42-.83-3.74-.83H7.93c-1.28 0-2.69-.22-3.72.69a2.8 2.8 0 0 0-.94 1.7c-.07.51-.02 1.05-.02 1.57v7.2l2.04-1.84c.38-.34.75-.74 1.19-1.01a3 3 0 0 1 2.32-.32c.73.21 1.22.71 1.74 1.22l1.98 1.9a.75.75 0 1 1-1.04 1.08l-1.98-1.9c-.35-.34-.68-.76-1.19-.88-.8-.18-1.3.38-1.84.87L3.28 17.4v.03c.12.69.51 1.31 1.06 1.74.85.66 1.83.58 2.85.58H11a.75.75 0 0 1 0 1.5z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M18.77 12.67c.45-.4 1.13-.7 1.68-.7s1.25.27 1.68.7.7 1.13.7 1.68-.3 1.23-.7 1.68l-5.4 5.4q-.16.16-.38.2l-3 .6a.75.75 0 0 1-.89-.88l.6-3q.05-.23.22-.39z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            d="M15.4 5.8c.1.83.29 1.3.64 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66S13.13 9 12.3 8.9a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
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
          <path
            d="M11 21.25H7.43c-.67 0-1.37.05-2.03-.04a4.3 4.3 0 0 1-3.63-3.82c-.1-1-.02-2.06-.02-3.07V8.33c0-.63-.05-1.28.04-1.9A4.3 4.3 0 0 1 5.43 2.8c.67-.1 1.36-.04 2.02-.04h8.75c.83 0 1.7-.08 2.53.06a4.3 4.3 0 0 1 3.48 3.64c.08.54.04 1.1.04 1.65v2.4a.75.75 0 0 1-1.5 0V7.98c0-1.09.01-2.08-.81-2.9-1.02-1.03-2.42-.83-3.74-.83H7.93c-1.28 0-2.69-.22-3.72.69a2.8 2.8 0 0 0-.94 1.7c-.07.51-.02 1.05-.02 1.57v7.2l2.04-1.84c.38-.34.75-.74 1.19-1.01a3 3 0 0 1 2.32-.32c.73.21 1.22.71 1.74 1.22l1.98 1.9a.75.75 0 1 1-1.04 1.08l-1.98-1.9c-.35-.34-.68-.76-1.19-.88-.8-.18-1.3.38-1.84.87L3.28 17.4v.03c.12.69.51 1.31 1.06 1.74.85.66 1.83.58 2.85.58H11a.75.75 0 0 1 0 1.5zm7.77-8.58c.45-.4 1.13-.7 1.68-.7s1.25.27 1.68.7.7 1.13.7 1.68-.3 1.23-.7 1.68l-5.4 5.4q-.16.16-.38.2l-3 .6a.75.75 0 0 1-.89-.88l.6-3q.05-.23.22-.39zM15.4 5.8c.1.83.29 1.3.64 1.66s.83.54 1.66.64a.4.4 0 0 1 0 .8c-.83.1-1.3.29-1.66.64s-.54.83-.64 1.66a.4.4 0 0 1-.8 0c-.1-.83-.29-1.3-.64-1.66S13.13 9 12.3 8.9a.4.4 0 0 1 0-.8c.83-.1 1.3-.29 1.66-.64s.54-.83.64-1.66a.4.4 0 0 1 .8 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      )}
    </>
  );
});

export default IconAiImageEdit;
