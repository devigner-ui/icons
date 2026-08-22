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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.66 2.75a.75.75 0 0 1 0-1.5H22c.41 0 .75.34.75.75v5.34a.75.75 0 0 1-1.5 0V3.81l-7.44 7.44H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v2.19l7.44-7.44z"
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
            d="M15.9 2c0 .41.34.75.76.75h3.53l-7.44 7.44V8a.75.75 0 0 0-1.5 0v4c0 .41.34.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l7.44-7.44v3.53a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.34a.75.75 0 0 0-.75.75"
            fill="currentColor"
          />
          <path
            d="M19.75 7.43A2.25 2.25 0 0 0 22 9.59V12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2l2.4.01c.01 1.2.97 2.2 2.17 2.24l-2.62 2.62A2.25 2.25 0 0 0 9.75 8v4c0 1.24 1 2.25 2.25 2.25h4a2.25 2.25 0 0 0 1.13-4.2z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScale;
