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
            d="M7.39 9.56h-.94a3.8 3.8 0 0 1-3.78-3.78C2.67 3.7 4.37 2 6.45 2h1.89a2.84 2.84 0 0 1 2.83 2.83V17.1a1.9 1.9 0 0 1-1.89 1.89 1.9 1.9 0 0 1-1.89-1.89z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.45 6.72a.94.94 0 1 1 0-1.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.95 9.56h.94c2.08 0 3.78-1.7 3.78-3.78S20.97 2 18.89 2H17a2.84 2.84 0 0 0-2.83 2.83V17.1a1.9 1.9 0 0 0 1.89 1.89 1.9 1.9 0 0 0 1.89-1.89z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.89 6.72a.94.94 0 1 0 0-1.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.17 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.17 22v-3"
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
            d="M11.17 4.83v12.28c0 .82-.52 1.51-1.25 1.77q-.3.12-.64.12-.48 0-.86-.22a1.9 1.9 0 0 1-1.03-1.67V9.56h-.94a3.79 3.79 0 0 1-2.67-6.45A3.8 3.8 0 0 1 6.45 2h1.89a2.85 2.85 0 0 1 2.83 2.83"
            fill="currentColor"
          />
          <path
            d="M6.45 7.47a1.7 1.7 0 0 1 0-3.39c.41 0 .75.34.75.75s-.34.75-.75.75a.2.2 0 0 0-.19.19c0 .1.09.2.19.2.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 5.78c0 2.08-1.7 3.78-3.78 3.78h-.94v7.55c0 .73-.42 1.36-1.03 1.67a1.8 1.8 0 0 1-1.5.1 1.9 1.9 0 0 1-1.25-1.77V4.83A2.84 2.84 0 0 1 17 2h1.89c1.04 0 1.98.42 2.67 1.11a3.8 3.8 0 0 1 1.11 2.67"
            fill="currentColor"
          />
          <path
            d="M18.89 7.47a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75q.18-.02.19-.2a.2.2 0 0 0-.19-.19.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75a1.7 1.7 0 0 1 0 3.39"
            fill="currentColor"
          />
          <path
            d="M9.92 18.88V22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.22a1.8 1.8 0 0 0 1.5.1"
            fill="currentColor"
          />
          <path
            d="M16.92 18.78V22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.12q.3.12.64.12.47 0 .86-.22"
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
            d="M8.34 2H6.45c-1.04 0-1.98.42-2.67 1.11a3.79 3.79 0 0 0 2.67 6.45h.94v7.55c0 .73.42 1.36 1.03 1.67a1.8 1.8 0 0 0 1.5.1 1.9 1.9 0 0 0 1.25-1.77V4.83A2.85 2.85 0 0 0 8.34 2M6.45 5.97c.41 0 .75.34.75.75s-.34.75-.75.75a1.7 1.7 0 0 1 0-3.39c.41 0 .75.34.75.75s-.34.75-.75.75a.2.2 0 0 0-.19.19c0 .1.08.2.19.2"
            fill="currentColor"
          />
          <path
            d="M21.56 3.11A3.8 3.8 0 0 0 18.89 2H17a2.84 2.84 0 0 0-2.83 2.83v12.28c0 .82.52 1.51 1.25 1.77q.3.12.64.12.47 0 .86-.22a1.9 1.9 0 0 0 1.03-1.67V9.56h.94a3.79 3.79 0 0 0 2.67-6.45m-2.67 4.36a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75q.18-.02.19-.2a.2.2 0 0 0-.19-.19.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75a1.7 1.7 0 0 1 0 3.39"
            fill="currentColor"
          />
          <path
            d="M9.92 18.88V22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.22a1.8 1.8 0 0 0 1.5.1"
            fill="currentColor"
          />
          <path
            d="M16.92 18.78V22c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-3.12q.3.12.64.12.47 0 .86-.22"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAirpods;
