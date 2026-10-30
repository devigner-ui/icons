import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDislike = forwardRef<SVGSVGElement, IconProps>(function IconDislike(
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
            d="M6.84 4.19c.05-.68.18-1.35.62-1.76q.32-.28.74-.39c.38-.09.81-.04 1.2-.04h2.24c1.52 0 2.99-.05 4.42.54a7.1 7.1 0 0 1 4.03 4.48c.25.82.35 1.68.49 2.52.13.75.45 1.92.41 2.64-.09 1.83-1.98 1.6-3.25 1.6h-2.47c-.51 0-1.29-.16-1.69.23-.5.48-.13 1.45-.03 2.04l.02.11m.48 3.46c0 .74-.12 1.4-.5 1.81-.55.6-1.57.82-2.2.22-.51-.48-.8-2.54-1.12-3.33a8 8 0 0 0-2.45-3.06c-.79-.69-1.67-1.17-1.65-2.34v-.01l.45-5.23"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 2.49v11.28l.97-11.24z"
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
            d="m6.13 12.91.64-7.48c.08-.92-.03-2.33.69-3q.32-.28.74-.39c.38-.09.81-.04 1.2-.04h2.24c1.52 0 2.99-.05 4.42.54a7.1 7.1 0 0 1 4.03 4.48c.25.82.35 1.68.49 2.52.13.75.45 1.92.41 2.64-.09 1.83-1.98 1.6-3.25 1.6h-2.47c-.51 0-1.29-.16-1.69.23-.5.48-.13 1.45-.03 2.04.22 1.36 1.01 4.28 0 5.38-.55.6-1.57.82-2.2.22-.51-.48-.8-2.54-1.12-3.33a8 8 0 0 0-2.45-3.06c-.79-.69-1.67-1.17-1.65-2.34z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3 2.49v11.28l.97-11.24z"
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
            d="m20.67 8.14.7 4.08a1.67 1.67 0 0 1-1.63 1.95h-5.19c-.51 0-.9.46-.82.96l.67 4.05q.15 1-.1 1.97a1.6 1.6 0 0 1-1.09 1.14l-.14.05q-.52.15-1-.07a1.3 1.3 0 0 1-.68-.82l-.47-1.83a8 8 0 0 0-.66-1.68 7 7 0 0 0-1.72-1.98L7.1 14.72c-.4-.35-.62-.87-.57-1.4l.8-9.4c.08-.86.8-1.52 1.67-1.52h4.65a7.05 7.05 0 0 1 7.02 5.74"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.37 14.92c.4.01.74-.29.78-.69l.97-11.24a1.24 1.24 0 1 0-2.47-.1v11.28c0 .4.32.73.72.75"
            fill="currentColor"
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
            d="m20.67 8.14.7 4.08a1.67 1.67 0 0 1-1.63 1.95h-5.19c-.51 0-.9.46-.82.96l.67 4.05q.15 1-.1 1.97a1.6 1.6 0 0 1-1.09 1.14l-.14.05q-.52.15-1-.07a1.3 1.3 0 0 1-.68-.82l-.47-1.83a8 8 0 0 0-.66-1.68 7 7 0 0 0-1.72-1.98L7.1 14.72c-.4-.35-.62-.87-.57-1.4l.8-9.4c.08-.86.8-1.52 1.67-1.52h4.65a7.05 7.05 0 0 1 7.02 5.74"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.37 14.92c.4.01.74-.29.78-.69l.97-11.24a1.24 1.24 0 1 0-2.47-.1v11.28c0 .4.32.73.72.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDislike;
