import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMusic = forwardRef<SVGSVGElement, IconProps>(function IconMusic(
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
            d="M9.4 18.88a3.12 3.12 0 1 1-6.24 0 3.12 3.12 0 0 1 6.24 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.84 7.96V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7A2.5 2.5 0 0 0 9.4 6.3v12.57"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.84 16.8V12"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M20.84 16.8a3.12 3.12 0 1 1-6.24 0 3.12 3.12 0 0 1 6.24 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.4 9.52 20.84 6.4"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M6.28 22a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.72 19.92a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M20.84 16.8V4.6c0-2.6-1.63-2.96-3.28-2.51l-6.24 1.7A2.5 2.5 0 0 0 9.4 6.3v12.57"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.4 9.52 20.84 6.4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="M10.29 10.34v8.07a3.6 3.6 0 1 1-3.59-3.58c.83 0 1.58.29 2.19.76v-4.85z"
            fill="currentColor"
          />
          <path
            d="M20.89 7.32v9.16a3.6 3.6 0 0 1-7.18 0 3.6 3.6 0 0 1 3.59-3.58c.84 0 1.59.29 2.2.77V7.72z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.89 5.18v2.14l-12 3.42V6.75a3 3 0 0 1 2.3-2.99l5.78-1.58c1.17-.32 2.16-.21 2.86.33q1.06.8 1.06 2.67"
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
            d="M20.89 5.18v11.3a3.6 3.6 0 0 1-7.18 0 3.6 3.6 0 0 1 3.59-3.58c.84 0 1.59.29 2.2.77V7.72l-9.21 2.62v8.07a3.6 3.6 0 1 1-3.59-3.58c.83 0 1.58.29 2.19.76V6.75a3 3 0 0 1 2.3-2.99l5.78-1.58c1.17-.32 2.16-.21 2.86.33q1.06.8 1.06 2.67"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMusic;
