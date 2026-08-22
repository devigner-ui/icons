import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBandages = forwardRef<SVGSVGElement, IconProps>(function IconBandages(
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
            d="M3.21 9.07a4.14 4.14 0 0 1 5.86-5.86L20.8 14.93a4.14 4.14 0 1 1-5.86 5.86z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m12 17.86-2.93 2.93a4.14 4.14 0 0 1-5.86-5.86L6.14 12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m12 6.14 2.93-2.93a4.14 4.14 0 0 1 5.86 5.86L17.86 12z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
          </g>
          <path
            d="M15.84 12.87A.79.79 0 1 1 14.73 14a.79.79 0 0 1 1.11-1.12"
            fill="currentColor"
          />
          <path
            d="M12.13 9.16a.79.79 0 1 0-1.11 1.11.79.79 0 0 0 1.1-1.11"
            fill="currentColor"
          />
          <path
            d="M13.99 14.73a.79.79 0 1 1-1.12 1.11.79.79 0 0 1 1.12-1.11"
            fill="currentColor"
          />
          <path
            d="M10.27 11.02a.79.79 0 1 0-1.11 1.1.79.79 0 0 0 1.11-1.1"
            fill="currentColor"
          />
          <path
            d="M16.77 15.66a.79.79 0 1 1-1.11 1.11.79.79 0 0 1 1.11-1.11"
            fill="currentColor"
          />
          <path
            d="M9.34 8.23a.79.79 0 1 0-1.1 1.11.79.79 0 0 0 1.1-1.1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.06 11.94a.79.79 0 1 1-1.12 1.12.79.79 0 0 1 1.12-1.12"
            fill="currentColor"
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
            d="M3.21 3.21a4.14 4.14 0 0 0 0 5.86L14.93 20.8a4.14 4.14 0 0 0 5.86-5.86L9.07 3.2a4.14 4.14 0 0 0-5.86 0m6.13 5.02a.79.79 0 1 0-1.1 1.11.79.79 0 0 0 1.1-1.1m2.79.93a.79.79 0 1 0-1.11 1.11.79.79 0 0 0 1.1-1.11m3.71 3.71a.79.79 0 1 1-1.1 1.13.79.79 0 0 1 1.11-1.12m.93 3.9a.79.79 0 1 0-1.11-1.11.79.79 0 0 0 1.11 1.11m-3.71-3.71a.79.79 0 1 0-1.12-1.12.79.79 0 0 0 1.12 1.12m.93 1.67a.79.79 0 1 1-1.12 1.11.79.79 0 0 1 1.12-1.11m-4.83-3.71a.79.79 0 1 1 1.11 1.1.79.79 0 0 1-1.11-1.1"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M20.79 9.07a4.14 4.14 0 1 0-5.86-5.86L12 6.14 17.86 12z"
              fill="currentColor"
            />
            <path
              d="M12 17.86 6.14 12l-2.93 2.93a4.14 4.14 0 1 0 5.86 5.86z"
              fill="currentColor"
            />
          </g>
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
            d="M3.21 3.21a4.14 4.14 0 0 0 0 5.86L14.93 20.8a4.14 4.14 0 0 0 5.86-5.86L9.07 3.2a4.14 4.14 0 0 0-5.86 0m6.13 5.02a.79.79 0 1 0-1.1 1.11.79.79 0 0 0 1.1-1.1m2.79.93a.79.79 0 1 0-1.11 1.11.79.79 0 0 0 1.1-1.11m3.71 3.71a.79.79 0 1 1-1.1 1.13.79.79 0 0 1 1.11-1.12m.93 3.9a.79.79 0 1 0-1.11-1.11.79.79 0 0 0 1.11 1.11m-3.71-3.71a.79.79 0 1 0-1.12-1.12.79.79 0 0 0 1.12 1.12m.93 1.67a.79.79 0 1 1-1.12 1.11.79.79 0 0 1 1.12-1.11m-4.83-3.71a.79.79 0 1 1 1.11 1.1.79.79 0 0 1-1.11-1.1"
            fill="currentColor"
          />
          <path
            d="m5.08 13.06-1.87 1.87a4.14 4.14 0 1 0 5.86 5.86l1.87-1.87z"
            fill="currentColor"
          />
          <path
            d="m18.92 10.94 1.87-1.87a4.14 4.14 0 1 0-5.86-5.86l-1.87 1.87z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBandages;
