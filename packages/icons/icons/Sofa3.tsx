import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSofa3 = forwardRef<SVGSVGElement, IconProps>(function IconSofa3(
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
            d="M4 18h16a2 2 0 1 0 0-4H4a2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.5 14-.07-.3c-1.1-4.35-1.63-6.52-.56-8.02l.21-.28C5.28 4 7.52 4 12 4s6.72 0 7.92 1.4l.21.28c1.07 1.5.53 3.67-.56 8.02l-.07.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 20v-2M4 20v-2"
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
            d="M4.75 17.75v2a.75.75 0 0 1-1.5 0V17.6A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.85v2.15a.75.75 0 0 1-1.5 0v-2z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.75 12.75c.97-3.88 1.4-5.9.38-7.32l-.21-.28c-1.2-1.4-3.44-1.4-7.92-1.4s-6.72 0-7.92 1.4l-.21.28c-1.02 1.42-.59 3.44.38 7.32l.2 1h15.1z"
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
            d="M19.75 12.75c.97-3.88 1.4-5.9.38-7.32l-.21-.28c-1.2-1.4-3.44-1.4-7.92-1.4s-6.72 0-7.92 1.4l-.21.28c-1.02 1.42-.59 3.44.38 7.32z"
            fill="currentColor"
          />
          <path
            d="M4.75 17.75v2a.75.75 0 0 1-1.5 0V17.6A2 2 0 0 1 4 13.75h16a2 2 0 0 1 .75 3.85v2.15a.75.75 0 0 1-1.5 0v-2z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSofa3;
