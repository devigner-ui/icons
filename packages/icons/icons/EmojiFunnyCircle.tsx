import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEmojiFunnyCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconEmojiFunnyCircle(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8.91 15.93c1.26.32 2.69.32 4.13-.07a8 8 0 0 0 3.6-2"
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
              d="m13 16 .48.97a1.5 1.5 0 1 0 2.7-1.32l-.47-.93"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M8.19 15.75c.1-.4.5-.64.9-.54a7.5 7.5 0 0 0 3.75-.07 7.5 7.5 0 0 0 3.28-1.82.75.75 0 1 1 1.04 1.08 8 8 0 0 1-1.15.93l.16.32a1.5 1.5 0 1 1-2.7 1.32l-.19-.4-.05.02a9 9 0 0 1-4.5.07.75.75 0 0 1-.54-.9"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m-3.81-6.25c.1-.4.5-.65.9-.54a7.5 7.5 0 0 0 3.75-.07 7.5 7.5 0 0 0 3.28-1.82.75.75 0 0 1 1.04 1.08 8 8 0 0 1-1.15.93l.16.32a1.5 1.5 0 0 1-2.7 1.32l-.19-.4-.05.02a9 9 0 0 1-4.5.07.75.75 0 0 1-.54-.9m7.29-6.23c.21.8-.05 1.56-.58 1.7-.54.15-1.14-.39-1.36-1.19-.21-.8.05-1.56.58-1.7.53-.15 1.14.39 1.36 1.19M9.1 12.78c.54-.15.8-.91.58-1.71-.21-.8-.82-1.33-1.35-1.2-.54.15-.8.92-.58 1.72.21.8.82 1.33 1.35 1.19"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconEmojiFunnyCircle;
