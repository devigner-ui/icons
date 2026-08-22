import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRecord2 = forwardRef<SVGSVGElement, IconProps>(function IconRecord2(
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
            d="M21 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M10 11.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.5 15h11"
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
          <path d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" fill="currentColor" />
          <path d="M10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 16h12a4 4 0 0 1-2.65-1h-6.7A4 4 0 0 1 6 16"
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
            d="M5.89 16A3.95 3.95 0 0 1 2 12c0-2.2 1.74-4 3.89-4s3.89 1.8 3.89 4c0 .85-.26 1.64-.7 2.29h5.84a4 4 0 0 1-.7-2.29c0-2.2 1.74-4 3.9-4C20.25 8 22 9.8 22 12s-1.74 4-3.89 4z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRecord2;
