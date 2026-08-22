import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHomeWiFi = forwardRef<SVGSVGElement, IconProps>(function IconHomeWiFi(
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
            d="M2 12.2c0-2.28 0-3.43.52-4.38S3.99 6.3 5.88 5.11l2-1.24C9.88 2.62 10.9 2 12 2s2.11.62 4.12 1.87l2 1.24c1.9 1.18 2.84 1.76 3.36 2.71s.52 2.1.52 4.38v1.53c0 3.9 0 5.85-1.17 7.06S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.21S2 17.63 2 13.73z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M6 11.68a8.05 8.05 0 0 1 12 0M8 13.84a5.37 5.37 0 0 1 8 0M10 16c1.1-1.2 2.9-1.2 4 0"
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
            d="M14 22h-4c-3.77 0-5.66 0-6.83-1.21S2 17.63 2 13.73V12.2c0-2.28 0-3.43.52-4.38S3.99 6.3 5.88 5.11l2-1.24C9.88 2.62 10.9 2 12 2s2.11.62 4.12 1.87l2 1.24c1.9 1.18 2.84 1.76 3.36 2.71s.52 2.1.52 4.38v1.53c0 3.9 0 5.85-1.17 7.06S17.77 22 14 22"
            fill="currentColor"
          />
          <path
            d="M17.45 12.2a7.3 7.3 0 0 0-10.9 0 .75.75 0 1 1-1.1-1.03 8.8 8.8 0 0 1 13.1 0 .75.75 0 1 1-1.1 1.02"
            fill="currentColor"
          />
          <path
            d="M15.45 14.35a4.62 4.62 0 0 0-6.9 0 .75.75 0 1 1-1.1-1.02c2.5-2.7 6.6-2.7 9.1 0a.75.75 0 0 1-1.1 1.02"
            fill="currentColor"
          />
          <path
            d="M13.45 16.51c-.8-.87-2.1-.87-2.9 0a.75.75 0 1 1-1.1-1.02 3.43 3.43 0 0 1 5.1 0 .75.75 0 0 1-1.1 1.02"
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
            d="M14 22h-4c-3.77 0-5.66 0-6.83-1.21S2 17.63 2 13.73V12.2c0-2.28 0-3.43.52-4.38S3.99 6.3 5.88 5.11l2-1.24C9.88 2.62 10.9 2 12 2s2.11.62 4.12 1.87l2 1.24c1.9 1.18 2.84 1.76 3.36 2.71s.52 2.1.52 4.38v1.53c0 3.9 0 5.85-1.17 7.06S17.77 22 14 22m3.45-9.8a7.3 7.3 0 0 0-10.9 0 .75.75 0 1 1-1.1-1.03 8.8 8.8 0 0 1 13.1 0 .75.75 0 1 1-1.1 1.02m-2 2.15a4.62 4.62 0 0 0-6.9 0 .75.75 0 1 1-1.1-1.02c2.5-2.7 6.6-2.7 9.1 0a.75.75 0 1 1-1.1 1.02m-2 2.16c-.8-.87-2.1-.87-2.9 0a.75.75 0 1 1-1.1-1.02 3.43 3.43 0 0 1 5.1 0 .75.75 0 0 1-1.1 1.02"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHomeWiFi;
