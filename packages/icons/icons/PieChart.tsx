import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPieChart = forwardRef<SVGSVGElement, IconProps>(function IconPieChart(
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
            d="M20 15.55A9.21 9.21 0 1 1 8.45 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M21.91 9.95a11.4 11.4 0 0 0-7.86-7.86C12.41 1.63 11 3.05 11 4.76v6.7c0 .85.7 1.54 1.54 1.54h6.7c1.7 0 3.13-1.4 2.67-3.05"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.16 3.78c.13.39-.1.81-.49.94a8.46 8.46 0 1 0 10.61 10.6.75.75 0 0 1 1.44.46 9.96 9.96 0 1 1-12.5-12.5c.4-.12.82.1.94.5"
            fill="currentColor"
          />
          <path
            d="M21.91 9.95a11.4 11.4 0 0 0-7.86-7.86C12.41 1.63 11 3.05 11 4.76v6.7c0 .85.7 1.54 1.54 1.54h6.7c1.7 0 3.13-1.4 2.67-3.05"
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
            d="M9.16 3.78c.13.39-.1.81-.49.94a8.46 8.46 0 1 0 10.61 10.6.75.75 0 0 1 1.44.46 9.96 9.96 0 1 1-12.5-12.5c.4-.12.82.1.94.5"
            fill="currentColor"
          />
          <path
            d="M21.91 9.95a11.4 11.4 0 0 0-7.86-7.86C12.41 1.63 11 3.05 11 4.76v6.7c0 .85.7 1.54 1.54 1.54h6.7c1.7 0 3.13-1.4 2.67-3.05"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPieChart;
