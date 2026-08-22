import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMap2 = forwardRef<SVGSVGElement, IconProps>(function IconMap2(
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
            d="M2.96 7.78v9.73c0 1.9 1.35 2.68 2.99 1.74l2.35-1.34a2.2 2.2 0 0 1 1.89-.05l5.25 2.63c.53.26 1.38.24 1.89-.05l4.33-2.48a2.2 2.2 0 0 0 1.01-1.74V6.49c0-1.9-1.35-2.68-2.99-1.74l-2.35 1.34c-.51.29-1.36.32-1.89.05l-5.25-2.62a2.3 2.3 0 0 0-1.89.05L3.97 6.05a2.2 2.2 0 0 0-1.01 1.73"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.23 4v13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.4 6.62V20"
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
            d="M9.23 3.34v14.33c-.34.01-.68.09-.93.24l-2.35 1.34c-1.64.94-2.99.16-2.99-1.74V7.78c0-.63.45-1.41 1.01-1.73L8.3 3.57c.25-.14.59-.22.93-.23"
            fill="currentColor"
          />
          <path
            d="M16.4 6.33v14.33q-.54.02-.96-.18l-5.25-2.63a2 2 0 0 0-.96-.18V3.34q.54-.01.96.18l5.25 2.63q.41.2.96.18"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 6.49v9.73c0 .63-.45 1.41-1.01 1.73l-4.33 2.48a2 2 0 0 1-.93.23V6.33c.34-.01.68-.09.93-.24l2.35-1.34c1.64-.94 2.99-.16 2.99 1.74"
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
          <g clipPath="url(#clip0_12_64965)">
            <path
              d="M8.3 3.57c.18-.1.37.05.37.26v13.55a.6.6 0 0 1-.35.52l-.02.01-2.35 1.34c-1.64.94-2.99.16-2.99-1.74V7.78c0-.63.45-1.41 1.01-1.73z"
              fill="currentColor"
            />
            <path
              d="M15.4 6.1a.5.5 0 0 1 .27.45V19.7a.5.5 0 0 1-.72.45l-4.25-2.04a.5.5 0 0 1-.28-.45V4.45a.5.5 0 0 1 .72-.45z"
              fill="currentColor"
            />
            <path
              d="M22.67 6.49v9.73c0 .63-.45 1.41-1.01 1.73l-3.5 2a.5.5 0 0 1-.74-.43V6.33q.01-.28.25-.43l2.01-1.15c1.64-.94 2.99-.16 2.99 1.74"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
});

export default IconMap2;
