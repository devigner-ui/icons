import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWifi = forwardRef<SVGSVGElement, IconProps>(function IconWifi(
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
            d="M5.58 11.84a11.35 11.35 0 0 1 14.19 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.67 8.36a16 16 0 0 1 20 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.46 15.49a8.3 8.3 0 0 1 10.41 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.07 19.15a4.2 4.2 0 0 1 5.21 0"
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
            d="M19.76 12.59a.7.7 0 0 1-.46-.16 10.6 10.6 0 0 0-13.27 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 12.04 12.04 0 0 1 15.1 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
            fill="currentColor"
          />
          <path
            d="M22.67 9.11a.7.7 0 0 1-.46-.16 15.2 15.2 0 0 0-19.08 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 16.7 16.7 0 0 1 20.92 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.6.29"
            fill="currentColor"
          />
          <path
            d="M17.88 16.24a.7.7 0 0 1-.46-.16 7.6 7.6 0 0 0-9.5 0 .76.76 0 0 1-1.05-.13A.76.76 0 0 1 7 14.9a9.04 9.04 0 0 1 11.33 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.27 19.9a.7.7 0 0 1-.46-.16 3.4 3.4 0 0 0-4.29 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 4.9 4.9 0 0 1 6.12 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
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
            d="M19.76 12.59a.7.7 0 0 1-.46-.16 10.6 10.6 0 0 0-13.27 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 12.04 12.04 0 0 1 15.1 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
            fill="currentColor"
          />
          <path
            d="M22.67 9.11a.7.7 0 0 1-.46-.16 15.2 15.2 0 0 0-19.08 0 .76.76 0 0 1-1.05-.13.74.74 0 0 1 .13-1.05 16.7 16.7 0 0 1 20.92 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.59.29"
            fill="currentColor"
          />
          <path
            d="M17.88 16.24a.7.7 0 0 1-.46-.16 7.6 7.6 0 0 0-9.5 0 .76.76 0 0 1-1.05-.13A.76.76 0 0 1 7 14.9a9.04 9.04 0 0 1 11.33 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
            fill="currentColor"
          />
          <path
            d="M15.27 19.9a.7.7 0 0 1-.46-.16 3.4 3.4 0 0 0-4.29 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 4.9 4.9 0 0 1 6.12 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWifi;
