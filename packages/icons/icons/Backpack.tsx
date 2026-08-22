import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBackpack = forwardRef<SVGSVGElement, IconProps>(function IconBackpack(
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
            d="M3 10.91v-.18a6 6 0 0 1 4.62-5.75l.17-.04.17-.04a19 19 0 0 1 8.08 0l.17.04.17.04A6 6 0 0 1 21 10.9v5.47a4.5 4.5 0 0 1-3.54 4.4c-3.6.8-7.32.8-10.92 0A4.5 4.5 0 0 1 3 16.39z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.5 15.5V17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.96 4.5A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.96 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M3 14a22.2 22.2 0 0 0 18 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 13h4"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.3 4.79A6 6 0 0 0 3 10.42v2.5q.15 0 .3.06a21.5 21.5 0 0 0 17.4 0q.15-.06.3-.06v-2.5a6 6 0 0 0-4.3-5.63 19 19 0 0 0-9.42 0m2.7 7.14a.75.75 0 0 0-.75.74c0 .41.34.75.75.75h4a.75.75 0 1 0 0-1.49z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.87 4A2.25 2.25 0 0 1 11 2.49h2c.98 0 1.82.63 2.13 1.5q.06.19.07.47c.39.07 1.23.24 1.5.33v-.06c0-.34 0-.79-.16-1.23A3.75 3.75 0 0 0 13 1h-2a3.75 3.75 0 0 0-3.54 2.5c-.16.44-.17.89-.17 1.23v.06c.23-.08 1.1-.25 1.5-.33q.03-.28.08-.47"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 14.48q-1.35.57-2.75.96v1.2c0 .42-.34.75-.75.75a.75.75 0 0 1-.75-.75v-.83c-4.58.97-9.38.52-13.75-1.33v1.54a4.5 4.5 0 0 0 3.54 4.38c3.6.8 7.32.8 10.92 0A4.5 4.5 0 0 0 21 16.02z"
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
            d="M7.3 4.79v-.06c0-.34 0-.79.16-1.23C7.96 2.05 9.36 1 11 1h2a3.75 3.75 0 0 1 3.54 2.5c.16.44.17.89.17 1.23v.06A6 6 0 0 1 21 10.42v2.5q-.15 0-.3.06a21.5 21.5 0 0 1-17.4 0 1 1 0 0 0-.3-.06v-2.5a6 6 0 0 1 4.3-5.63m1.57-.8c.3-.87 1.15-1.5 2.13-1.5h2c.98 0 1.82.63 2.13 1.5q.06.19.07.47a19 19 0 0 0-6.4 0q0-.28.07-.47m.38 8.68c0-.41.34-.74.75-.74h4c.41 0 .75.33.75.74s-.34.75-.75.75h-4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M21 14.48q-1.35.57-2.75.96v1.2c0 .42-.34.75-.75.75a.75.75 0 0 1-.75-.75v-.83c-4.58.97-9.38.52-13.75-1.33v1.54a4.5 4.5 0 0 0 3.54 4.39c3.6.79 7.32.79 10.92 0A4.5 4.5 0 0 0 21 16.02z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBackpack;
