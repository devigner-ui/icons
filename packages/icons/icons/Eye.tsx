import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEye = forwardRef<SVGSVGElement, IconProps>(function IconEye(
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
            d="M3.27 15.3C2.42 14.2 2 13.64 2 12s.42-2.2 1.27-3.3C4.97 6.5 7.82 4 12 4s7.03 2.5 8.73 4.7C21.57 9.8 22 10.36 22 12s-.43 2.2-1.27 3.3C19.03 17.5 16.18 20 12 20s-7.03-2.5-8.73-4.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
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
            d="M2 12c0 1.64.42 2.2 1.27 3.3C4.97 17.5 7.82 20 12 20s7.03-2.5 8.73-4.7C21.57 14.2 22 13.64 22 12s-.43-2.2-1.27-3.3C19.03 6.5 16.18 4 12 4S4.97 6.5 3.27 8.7C2.42 9.8 2 10.36 2 12"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
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
            d="M9.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12c0 1.64.42 2.2 1.27 3.3C4.97 17.5 7.82 20 12 20s7.03-2.5 8.73-4.7C21.57 14.2 22 13.64 22 12s-.43-2.2-1.27-3.3C19.03 6.5 16.18 4 12 4S4.97 6.5 3.27 8.7C2.42 9.8 2 10.36 2 12m10-3.75a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEye;
