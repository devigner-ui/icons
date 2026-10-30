import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAirpods = forwardRef<SVGSVGElement, IconProps>(function IconAirpods(
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
            d="M6.72 9.56h-.94A3.8 3.8 0 0 1 2 5.78C2 3.7 3.7 2 5.78 2h1.89a2.84 2.84 0 0 1 2.83 2.83V17.1a1.9 1.9 0 0 1-1.89 1.89 1.9 1.9 0 0 1-1.89-1.89z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.78 6.72a.94.94 0 1 1 0-1.88"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.28 13.52V9.56h.94c2.08 0 3.78-1.7 3.78-3.78S20.3 2 18.22 2h-1.89a2.84 2.84 0 0 0-2.83 2.83V17.1a1.9 1.9 0 0 0 1.89 1.89 1.9 1.9 0 0 0 1.89-1.89"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.22 6.72a.94.94 0 1 0 0-1.88"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.5 22v-3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 22v-3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M6.72 9.56h-.94A3.8 3.8 0 0 1 2 5.78C2 3.7 3.7 2 5.78 2h1.89a2.84 2.84 0 0 1 2.83 2.83V17.1a1.9 1.9 0 0 1-1.89 1.89 1.9 1.9 0 0 1-1.89-1.89z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.78 6.72a.94.94 0 1 1 0-1.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.28 9.56h.94c2.08 0 3.78-1.7 3.78-3.78S20.3 2 18.22 2h-1.89a2.84 2.84 0 0 0-2.83 2.83V17.1a1.9 1.9 0 0 0 1.89 1.89 1.9 1.9 0 0 0 1.89-1.89z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.22 6.72a.94.94 0 1 0 0-1.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.5 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M10.5 4.43v12.28c0 .82-.52 1.51-1.25 1.77q-.3.12-.64.12-.48 0-.86-.22a1.9 1.9 0 0 1-1.03-1.67V9.16h-.94a3.79 3.79 0 0 1-2.67-6.45A3.8 3.8 0 0 1 5.78 1.6h1.89a2.85 2.85 0 0 1 2.83 2.83"
            fill="currentColor"
          />
          <path
            d="M5.78 7.07a1.7 1.7 0 0 1 0-3.39c.41 0 .75.34.75.75s-.34.75-.75.75a.2.2 0 0 0-.19.19c0 .1.09.2.19.2.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 5.38c0 2.08-1.7 3.78-3.78 3.78h-.94v7.55c0 .73-.42 1.36-1.03 1.67a1.8 1.8 0 0 1-1.5.1 1.9 1.9 0 0 1-1.25-1.77V4.43a2.84 2.84 0 0 1 2.83-2.83h1.89c1.04 0 1.98.42 2.67 1.11A3.8 3.8 0 0 1 22 5.38"
            fill="currentColor"
          />
          <path
            d="M18.22 7.07a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75q.18-.02.19-.2a.2.2 0 0 0-.19-.19.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75a1.7 1.7 0 0 1 0 3.39"
            fill="currentColor"
          />
          <path
            d="M9.25 18.48v3.12c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.22a1.8 1.8 0 0 0 1.5.1"
            fill="currentColor"
          />
          <path
            d="M16.25 18.38v3.22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.12q.3.12.64.12.47 0 .86-.22"
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
            d="M7.67 1.6H5.78c-1.04 0-1.98.42-2.67 1.11a3.79 3.79 0 0 0 2.67 6.45h.94v7.55c0 .73.42 1.36 1.03 1.67a1.8 1.8 0 0 0 1.5.1 1.9 1.9 0 0 0 1.25-1.77V4.43A2.85 2.85 0 0 0 7.67 1.6M5.78 5.57c.41 0 .75.34.75.75s-.34.75-.75.75a1.7 1.7 0 0 1 0-3.39c.41 0 .75.34.75.75s-.34.75-.75.75a.2.2 0 0 0-.19.19c0 .1.08.2.19.2"
            fill="currentColor"
          />
          <path
            d="M20.89 2.71a3.8 3.8 0 0 0-2.67-1.11h-1.89a2.84 2.84 0 0 0-2.83 2.83v12.28c0 .82.52 1.51 1.25 1.77q.3.12.64.12.47 0 .86-.22a1.9 1.9 0 0 0 1.03-1.67V9.16h.94a3.79 3.79 0 0 0 2.67-6.45m-2.67 4.36a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75q.18-.02.19-.2a.2.2 0 0 0-.19-.19.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75a1.7 1.7 0 0 1 0 3.39"
            fill="currentColor"
          />
          <path
            d="M9.25 18.48v3.12c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.22a1.8 1.8 0 0 0 1.5.1"
            fill="currentColor"
          />
          <path
            d="M16.25 18.38v3.22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.12q.3.12.64.12.47 0 .86-.22"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAirpods;
