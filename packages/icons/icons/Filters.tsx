import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFilters = forwardRef<SVGSVGElement, IconProps>(function IconFilters(
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
            d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M6.5 10.19a6 6 0 1 0 7.1 3.67"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 20.47a6 6 0 1 0 5.5-10.28"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
          <path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0" fill="currentColor" />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M13.58 13.79a6 6 0 0 1-7.16-3.58 6 6 0 1 0 7.16 3.58"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.3" : "1"}
            d="M13.58 13.79A6 6 0 0 1 12 20.47a6 6 0 1 0 5.58-10.26 6 6 0 0 1-4 3.58"
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
          <path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0" fill="currentColor" />
          <path
            d="M5.03 10.78a6 6 0 1 0 8.92 4.46 7.5 7.5 0 0 1-8.92-4.46"
            fill="currentColor"
          />
          <path
            d="M15.39 14.7a7.6 7.6 0 0 1-2.13 6.64Q14.5 22 16 22a6 6 0 0 0 2.97-11.22 7.5 7.5 0 0 1-3.58 3.91"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFilters;
