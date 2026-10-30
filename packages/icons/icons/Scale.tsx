import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScale = forwardRef<SVGSVGElement, IconProps>(function IconScale(
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
            d="M2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.35-1.36 1.45-3.49 1.46-7.54M11 2c-4.05 0-6.18.1-7.54 1.46C2.65 4.28 2.3 5.37 2.13 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m13 11 9-9m0 5.34V2h-5.34M21 3l-9 9m0-4v4h4"
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
            opacity={duotone ? "0.4" : "1"}
            d="M11 2c-4.05 0-6.18.1-7.54 1.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46c1.35-1.36 1.45-3.49 1.46-7.54"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m13 11 9-9m0 0h-5.34M22 2v5.34M21 3l-9 9m0 0h4m-4 0V8"
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
            d="M1.6 12.4c0-4.71 0-7.07 1.46-8.54C4.53 2.4 6.9 2.4 11.6 2.4s7.07 0 8.54 1.46C21.6 5.33 21.6 7.7 21.6 12.4s0 7.07-1.46 8.54c-1.47 1.46-3.84 1.46-8.54 1.46s-7.07 0-8.54-1.46C1.6 19.47 1.6 17.1 1.6 12.4"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.26 3.15a.75.75 0 0 1 0-1.5h5.34c.41 0 .75.34.75.75v5.34a.75.75 0 0 1-1.5 0V4.21l-7.44 7.44h2.19a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v2.19l7.44-7.44z"
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
            d="M15.5 2.4c0 .41.34.75.76.75h3.53l-7.44 7.44V8.4a.75.75 0 0 0-1.5 0v4c0 .41.34.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l7.44-7.44v3.53a.75.75 0 0 0 1.5 0V2.4a.75.75 0 0 0-.75-.75h-5.34a.75.75 0 0 0-.75.75"
            fill="currentColor"
          />
          <path
            d="M19.35 7.83a2.25 2.25 0 0 0 2.25 2.16v2.41c0 4.71 0 7.07-1.46 8.54-1.47 1.46-3.84 1.46-8.54 1.46s-7.07 0-8.54-1.46C1.6 19.47 1.6 17.1 1.6 12.4s0-7.07 1.46-8.54C4.53 2.4 6.9 2.4 11.6 2.4l2.4.01c.01 1.2.97 2.2 2.17 2.24l-2.62 2.62a2.25 2.25 0 0 0-4.2 1.13v4c0 1.24 1 2.25 2.25 2.25h4a2.25 2.25 0 0 0 1.13-4.2z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScale;
