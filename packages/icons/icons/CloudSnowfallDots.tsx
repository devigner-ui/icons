import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudSnowfallDots = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudSnowfallDots(
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
          <circle
            cx="12"
            cy="18"
            r="1"
            fill="currentColor"
          />
          <circle
            cx="12"
            cy="21"
            r="1"
            fill="currentColor"
          />
          <path
            d="M16 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M16 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M10 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M10 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            fill="currentColor"
          />
          <path
            d="M22 13.35a5.65 5.65 0 0 1-3.5 5.21M14.38 8.03A5.8 5.8 0 0 1 18.16 8m-9.5 3.23a4.3 4.3 0 0 0-2.37-.71A4.26 4.26 0 0 0 2 14.76c0 1.9 1.26 3.5 3 4.05m2.12-8.2A5.68 5.68 0 0 1 12.48 3a5.7 5.7 0 0 1 5.68 5m0 0q1.34.47 2.3 1.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            <circle cx="12" cy="18" r="1" fill="currentColor" />
            <circle cx="12" cy="21" r="1" fill="currentColor" />
            <path
              d="M16 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M16 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M10 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M10 16.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.29 19A4.26 4.26 0 0 1 2 14.76a4.26 4.26 0 0 1 5.12-4.15m7.26-2.58A5.8 5.8 0 0 1 18.16 8M7.12 10.6A5.68 5.68 0 0 1 12.48 3a5.7 5.7 0 0 1 5.68 5M7.12 10.6q.85.16 1.55.63M18.16 8A5.65 5.65 0 0 1 22 13.35a5.7 5.7 0 0 1-4.5 5.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
            <path d="M13 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M13 20.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M16 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M10 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path d="M12 18.5a1 1 0 0 0 1-1 1 1 0 1 0-1 1" fill="currentColor" />
            <path
              d="M15 17a1 1 0 0 1-1-1 1 1 0 1 1 1 1"
              fill="currentColor"
            />
            <path d="M9 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.29 18.5A5.7 5.7 0 0 0 22 12.85c0-2.47-1.6-4.57-3.84-5.34a5.7 5.7 0 0 0-5.68-5.01 5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 14.27a4.26 4.26 0 0 0 4.29 4.23z"
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
            <path d="M13 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path d="M13 20.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
            <path
              d="M16 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M10 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M10 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path d="M12 18.5a1 1 0 0 0 1-1 1 1 0 1 0-1 1" fill="currentColor" />
            <path
              d="M22 12.85a5.7 5.7 0 0 1-4.58 5.54 3 3 0 0 0-.42-.89q.48-.65.5-1.5a2.5 2.5 0 0 0-4.83-.9 2.5 2.5 0 0 0-1.34 0A2.5 2.5 0 1 0 7 17.5q-.33.45-.45 1h-.26A4.26 4.26 0 0 1 2 14.26a4.26 4.26 0 0 1 5.12-4.15 5.68 5.68 0 0 1 5.36-7.61 5.7 5.7 0 0 1 5.68 5A5.65 5.65 0 0 1 22 12.85"
              fill="currentColor"
            />
            <path
              d="M15 17a1 1 0 0 1-1-1 1 1 0 1 1 1 1"
              fill="currentColor"
            />
            <path d="M9 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudSnowfallDots;
