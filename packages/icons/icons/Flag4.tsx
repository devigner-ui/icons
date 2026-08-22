import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFlag4 = forwardRef<SVGSVGElement, IconProps>(function IconFlag4(
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
            d="M7.12 2v20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7.62 4 8.1 3.5c3.3 1.4 3.3 3.8.2 5.4L7.62 17"
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
            d="M7.12 22a.76.76 0 0 1-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.87 7.16-8.1-3.5a.4.4 0 0 0-.36.03.4.4 0 0 0-.16.31v13q0 .2.18.32.1.06.2.06.08 0 .17-.04l8.3-4.1h.01c1.66-.86 2.55-1.97 2.5-3.14-.06-1.18-1.03-2.22-2.74-2.94"
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
            d="m15.87 7.16-8-3.46v-.95A.76.76 0 0 0 7.12 2a.76.76 0 0 0-.75.75v18.5c0 .41.34.75.75.75s.75-.34.75-.75v-3.96l8.22-4.06h.01c1.66-.86 2.55-1.97 2.5-3.14s-1.02-2.21-2.73-2.93"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFlag4;
