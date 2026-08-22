import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGpsSlash = forwardRef<SVGSVGElement, IconProps>(function IconGpsSlash(
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
            d="M17.88 6.6A7.5 7.5 0 0 0 7.25 17.19"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.67 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.67 18.88q1.39.61 3 .62A7.5 7.5 0 0 0 19.55 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 20v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.67 12h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="m14.79 9.88-4.24 4.24a3 3 0 1 1 4.24-4.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m22.67 2-20 20"
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
            d="m19.6 8.06-3.82 3.83.01.11c0 1.72-1.4 3.12-3.12 3.12l-.11-.01-3.83 3.83A8 8 0 0 0 12.67 20c4.4 0 8-3.59 8-8 0-1.43-.38-2.78-1.06-3.94"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.32 6.35 14.87 9.8a3.12 3.12 0 0 0-4.4 4.4l-3.45 3.45A7.98 7.98 0 0 1 12.67 4c2.2 0 4.2.9 5.65 2.35"
            fill="currentColor"
          />
          <path
            d="m14.87 9.8-4.4 4.4a3.12 3.12 0 0 1 4.4-4.4"
            fill="currentColor"
          />
          <path
            d="M13.42 2v2.04h-.01a6 6 0 0 0-1.48 0h-.01V2c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M4.67 12q0 .38.04.75H2.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.04q-.04.37-.04.75"
            fill="currentColor"
          />
          <path
            d="M13.42 19.96V22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.04h.01a6 6 0 0 0 1.48 0z"
            fill="currentColor"
          />
          <path
            d="M23.42 12c0 .41-.34.75-.75.75h-2.04a6 6 0 0 0 0-1.5h2.04c.41 0 .75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
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
          <g clipPath="url(#clip0_12_64959)">
            <path
              d="M23.42 12c0 .41-.34.75-.75.75h-2.04a8 8 0 0 1-7.21 7.21V22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-2.04a8 8 0 0 1-1.78-.37 1 1 0 0 1-.4-1.67l2.81-2.81.11.01A3.1 3.1 0 0 0 15.78 12l-.01-.11 2.81-2.81a1 1 0 0 1 1.67.4q.29.85.37 1.78h2.05c.41-.01.75.33.75.74"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0l-3.61 3.61a8 8 0 0 0-4.33-1.79V2a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v2.04a8 8 0 0 0-7.21 7.21H2.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.04c.15 1.63.8 3.13 1.79 4.33l-3.61 3.61c-.3.3-.3.79 0 1.09q.25.21.55.22.3 0 .54-.23L22.44 3.31a.74.74 0 0 0 0-1.08M9.55 12c0-1.72 1.4-3.12 3.12-3.12q.88.01 1.58.45L10 13.58q-.43-.7-.45-1.58"
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

export default IconGpsSlash;
