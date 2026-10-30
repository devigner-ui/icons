import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRulerStraight = forwardRef<SVGSVGElement, IconProps>(function IconRulerStraight(
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
            d="M22 10.62V10q0-3-3-3H5Q2.06 7 2 9.89m0 3.5V14q0 3 3 3h14q2.94 0 3-2.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 7v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 7v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.05 7 10 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 7v3"
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
          <g clipPath="url(#clip0_12_78719)">
            <path
              d="M5 17h14q3 0 3-3v-4q0-3-3-3H5q-3 0-3 3v4q0 3 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 7v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 7v4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.05 7 10 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 7v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
            d="M5 17h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3"
            fill="currentColor"
          />
          <path
            d="M18.75 7v5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7z"
            fill="currentColor"
          />
          <path
            d="M6.75 7v3.8c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7z"
            fill="currentColor"
          />
          <path
            d="m10.79 7-.04 5.01c0 .41-.34.74-.75.74h-.01a.75.75 0 0 1-.74-.76L9.29 7z"
            fill="currentColor"
          />
          <path
            d="M14.75 7v2.6c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7z"
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
            d="M19 7a.25.25 0 0 0-.25.25V12c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.25A.25.25 0 0 0 17 7h-2a.25.25 0 0 0-.25.25V9.6c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.25A.25.25 0 0 0 13 7h-1.96a.25.25 0 0 0-.25.25l-.04 4.76c0 .41-.34.74-.75.74h-.01a.75.75 0 0 1-.74-.76l.04-4.74A.25.25 0 0 0 9.04 7H7a.25.25 0 0 0-.25.25v3.55c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.25A.25.25 0 0 0 5 7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRulerStraight;
