import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClouds = forwardRef<SVGSVGElement, IconProps>(function IconClouds(
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
            d="M22 12.35c0-2.47-1.6-4.57-3.84-5.34M6.29 18A4.26 4.26 0 0 1 2 13.76a4.26 4.26 0 0 1 5.12-4.15m7.26-2.58A5.8 5.8 0 0 1 18.16 7M7.12 9.61A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5M7.12 9.61q.85.16 1.55.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17.05 15.14a4 4 0 0 1 2.45 0m-7.17 1.62a3 3 0 0 0-.54-.05A2.7 2.7 0 0 0 9 19.35 2.7 2.7 0 0 0 11.79 22h6.5A3.63 3.63 0 0 0 22 18.47a3.55 3.55 0 0 0-2.5-3.34m-7.17 1.63q-.23-.58-.23-1.23A3.63 3.63 0 0 1 15.8 12a3.65 3.65 0 0 1 3.7 3.13m-7.18 1.63q.54.1 1 .4"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.29 18A5.7 5.7 0 0 0 22 12.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 2a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 13.77 4.26 4.26 0 0 0 6.29 18z"
            fill="currentColor"
          />
          <path
            d="M18.29 22A3.63 3.63 0 0 0 22 18.47a3.55 3.55 0 0 0-2.5-3.34A3.65 3.65 0 0 0 15.81 12a3.63 3.63 0 0 0-3.71 3.53q0 .65.23 1.23a3 3 0 0 0-.54-.05A2.7 2.7 0 0 0 9 19.35 2.7 2.7 0 0 0 11.79 22z"
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
            d="M18.29 22A3.63 3.63 0 0 0 22 18.47a3.55 3.55 0 0 0-2.5-3.34A3.65 3.65 0 0 0 15.81 12a3.63 3.63 0 0 0-3.71 3.53q0 .65.23 1.23a3 3 0 0 0-.54-.05A2.7 2.7 0 0 0 9 19.35 2.7 2.7 0 0 0 11.79 22z"
            fill="currentColor"
          />
          <path
            d="M21.55 14.55a5 5 0 0 0-.75-.49 5.2 5.2 0 0 0-5-3.56 5.13 5.13 0 0 0-5.2 4.87A4.2 4.2 0 0 0 7.73 18H6.3A4.26 4.26 0 0 1 2 13.76a4.26 4.26 0 0 1 5.12-4.15A5.68 5.68 0 0 1 12.48 2a5.7 5.7 0 0 1 5.68 5 5.65 5.65 0 0 1 3.4 7.54"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconClouds;
