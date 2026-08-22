import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const Icon4K = forwardRef<SVGSVGElement, IconProps>(function Icon4K(
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5.5 8v2c0 1.1.9 2 2 2h3m0-4v4m0 0v4m3-8v5.2m0 0V16m0-2.8 1.92-2m0 0L18.5 8m-3.08 3.2L18.5 16"
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
            d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
            fill="currentColor"
          />
          <path
            d="M19.02 7.46c.3.29.3.76.02 1.06l-2.67 2.77 2.76 4.3a.75.75 0 1 1-1.26.81l-2.57-4-1.05 1.1V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0v3.34l3.7-3.86c.3-.3.77-.3 1.07-.02"
            fill="currentColor"
          />
          <path
            d="M5.5 7.25c.41 0 .75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2.25V8a.75.75 0 0 1 1.5 0v8a.75.75 0 0 1-1.5 0v-3.25H7.5A2.75 2.75 0 0 1 4.75 10V8c0-.41.34-.75.75-.75"
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
            d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12m4.25-4a.75.75 0 0 0-1.5 0v2a2.75 2.75 0 0 0 2.75 2.75h2.25V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H7.5c-.69 0-1.25-.56-1.25-1.25zm12.77-.54c.3.29.3.76.02 1.06l-2.67 2.77 2.76 4.3a.75.75 0 1 1-1.26.81l-2.57-4-1.05 1.1V16a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 1.5 0v3.34l3.7-3.86c.3-.3.77-.3 1.07-.02"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default Icon4K;
