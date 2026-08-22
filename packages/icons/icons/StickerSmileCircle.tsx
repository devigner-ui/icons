import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStickerSmileCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconStickerSmileCircle(
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
            />
            <path
              d="M8.91 15.93a8 8 0 0 0 3.36.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse
              cx="14.5094"
              cy="9.77454"
              rx="1"
              ry="1.5"
              transform="rotate(-15 14.5094 9.77454)"
              fill="currentColor"
            />
            <ellipse
              cx="8.71402"
              cy="11.3275"
              rx="1"
              ry="1.5"
              transform="rotate(-15 8.71402 11.3275)"
              fill="currentColor"
            />
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
              d="M16.8 13.34c.77-.27 1.74-.3 3.77-.31H22c-.01.1 0-.1 0 0q-.05.53-.43.9l-7.65 7.7c-.23.23-.56.37-.9.37-.09 0 .1-.01 0 0v-1.43c.01-2.03.05-3 .32-3.78a5.6 5.6 0 0 1 3.45-3.45"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.03 21.95q-.5.05-1.03.05a10 10 0 1 1 9.95-8.97h-1.38c-2.03 0-3 .04-3.78.31a5.6 5.6 0 0 0-3.45 3.45c-.27.78-.3 1.75-.31 3.78z"
              fill="currentColor"
            />
            <path
              d="M14.9 11.22c.53-.14.79-.9.58-1.7s-.83-1.34-1.36-1.2-.8.91-.58 1.71.82 1.34 1.36 1.2"
              fill="currentColor"
            />
            <path
              d="M9.1 12.78c.54-.15.8-.91.58-1.71-.21-.8-.82-1.33-1.35-1.2-.54.15-.8.92-.58 1.72.21.8.82 1.33 1.35 1.19"
              fill="currentColor"
            />
            <path
              d="M9.1 15.2a.75.75 0 1 0-.37 1.46 9 9 0 0 0 4.5-.07l.05-.02.08.17a5.6 5.6 0 0 1 3.72-3.49.75.75 0 0 0-.96.07 7.5 7.5 0 0 1-3.28 1.82 7.5 7.5 0 0 1-3.74.07"
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
              d="M16.94 13.1c.86-.3 1.94-.34 4.2-.35h1.58c0 .1.01-.1 0 0q-.05.59-.47 1.01l-8.5 8.55a1.4 1.4 0 0 1-1 .41c-.1.01.1 0 0 0v-1.58c0-2.26.05-3.34.35-4.2a6.3 6.3 0 0 1 3.84-3.84"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.55 16.88c-.27 1.06-.3 2.36-.3 4.34v1.5a10.75 10.75 0 1 1 11.47-11.47h-1.5c-2.26 0-3.63.03-4.78.43a7.8 7.8 0 0 0-4.24 3.6l-.06.01a7 7 0 0 1-3.05-.08.75.75 0 0 0-.36 1.45q1.34.33 2.82.22m3.35-5.66c.53-.14.79-.9.58-1.7s-.83-1.34-1.36-1.2-.8.91-.58 1.71.82 1.34 1.36 1.2m-5.8 1.56c.54-.15.8-.91.58-1.71-.21-.8-.82-1.33-1.35-1.2-.54.15-.8.92-.58 1.72.21.8.82 1.33 1.35 1.19"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStickerSmileCircle;
