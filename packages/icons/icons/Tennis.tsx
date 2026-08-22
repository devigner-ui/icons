import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTennis = forwardRef<SVGSVGElement, IconProps>(function IconTennis(
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
            d="M3.34 17A10 10 0 1 0 20.66 7 10 10 0 0 0 3.34 17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.2 2.07s-.24 3.6 2.26 7.93 5.74 5.93 5.74 5.93M2.8 8.07S6.04 9.67 8.54 14s2.26 7.93 2.26 7.93"
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
            d="M13.2 2.07A10 10 0 0 0 2.93 7.8a20.3 20.3 0 0 1 6.69 8.4l.24.64c1.07 2.93.95 5.05.94 5.1a9.95 9.95 0 0 0 10.4-6s-3.24-1.6-5.74-5.93-2.26-7.93-2.26-7.93"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m3.83 17.77.04.06a10 10 0 0 0 6.93 4.1 14 14 0 0 0-1.18-5.73A18 18 0 0 0 8.54 14a20 20 0 0 0-5.61-6.2 10 10 0 0 0 .9 9.98"
              fill="currentColor"
            />
            <path
              d="M20.66 7a10 10 0 0 0-7.46-4.93s-.24 3.6 2.26 7.93 5.74 5.93 5.74 5.93A10 10 0 0 0 20.66 7"
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
            d="m20.69 16.5-.44-.25a14 14 0 0 1-1.46-1.09 18 18 0 0 1-3.97-4.78 18 18 0 0 1-2.16-5.84 14 14 0 0 1-.22-2.31l.01-.22A10 10 0 0 0 3.13 7.4l.18.1.44.27q.57.35 1.47 1.08a18 18 0 0 1 3.97 4.79 18 18 0 0 1 2.16 5.83 14 14 0 0 1 .21 2.32V22a10 10 0 0 0 9.31-5.37z"
            fill="currentColor"
          />
          <path
            d="M10.06 21.81a9 9 0 0 0-.19-2.09 17 17 0 0 0-1.98-5.34 17 17 0 0 0-3.64-4.4 12 12 0 0 0-1.71-1.2 9.98 9.98 0 0 0 7.52 13.03"
            fill="currentColor"
          />
          <path
            d="M13.94 2.2a9 9 0 0 0 .2 2.08c.23 1.37.78 3.27 1.98 5.35s2.57 3.5 3.63 4.39a12 12 0 0 0 1.72 1.2A9.98 9.98 0 0 0 13.94 2.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTennis;
