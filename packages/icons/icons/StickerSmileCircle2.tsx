import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStickerSmileCircle2 = forwardRef<SVGSVGElement, IconProps>(
  function IconStickerSmileCircle2(
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
        {!fill ? (
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
              d="M2 12a10 10 0 0 0 10 10c.65 0 1.25-.3 1.7-.76l7.54-7.53c.46-.46.76-1.06.76-1.71a10 10 0 0 0-20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
            />
            <path
              d="M12 17a5 5 0 0 1-3-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <path
              d="M12 22c0-2.8 0-4.19.4-5.31a7 7 0 0 1 4.29-4.3C17.8 12 19.2 12 22 12"
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
              d="m21.24 13.7-7.53 7.54-.37.31q-.6.43-1.34.45v-1.5c.02-1.83.08-2.91.4-3.81a7 7 0 0 1 4.29-4.3c.9-.31 1.98-.37 3.81-.39H22a2.3 2.3 0 0 1-.57 1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 2a10 10 0 0 1 10 10h-1.5c-1.83.02-2.91.08-3.81.4a7 7 0 0 0-4.3 4.29c-.31.9-.37 1.98-.39 3.81V22a10 10 0 0 1 0-20"
              fill="currentColor"
            />
            <path
              d="M10 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5S8.45 9 9 9s1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="M15 12c.55 0 1-.67 1-1.5S15.55 9 15 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
            <path
              d="M8.4 15.55a.75.75 0 0 1 1.05-.15 4.3 4.3 0 0 0 3.13.81l-.19.48q-.16.47-.25 1.06a5.6 5.6 0 0 1-3.59-1.15.75.75 0 0 1-.15-1.05"
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
              d="m21.24 13.7-7.53 7.54-.37.31q-.6.43-1.34.45v-1.5c.02-1.83.08-2.91.4-3.81a7 7 0 0 1 4.29-4.3c.9-.31 1.98-.37 3.81-.39H22a2.3 2.3 0 0 1-.57 1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2a10 10 0 0 0-2.37 19.72c.45.1.87-.25.87-.72 0-1.7 0-2.32.15-3.41a6 6 0 0 1-2.1-.99.75.75 0 1 1 .9-1.2q.7.52 1.55.73a8.5 8.5 0 0 1 3.5-4.34c-.3-.26-.5-.74-.5-1.29 0-.83.45-1.5 1-1.5s1 .67 1 1.5q0 .3-.08.58l.27-.1c1.37-.48 2.32-.48 4.81-.48.47 0 .83-.42.72-.87A10 10 0 0 0 12 2M9 12c.55 0 1-.67 1-1.5S9.55 9 9 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStickerSmileCircle2;
