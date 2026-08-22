import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScissors = forwardRef<SVGSVGElement, IconProps>(function IconScissors(
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
            d="M16.4 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.6 20.5 18 2M2 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
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
            opacity={duotone ? "0.4" : "1"}
            d="M6.65 1.63a.75.75 0 1 0-1.3.74L15.7 20.79a3.75 3.75 0 1 0-.13-3.3z"
            fill="currentColor"
          />
          <path
            d="M17.35 1.63a.75.75 0 1 1 1.3.74L8.3 20.79a3.75 3.75 0 1 1 .13-3.3z"
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
            d="M6.65 1.63a.75.75 0 0 0-1.3.74l5.79 10.3-2.7 4.82a3.75 3.75 0 1 0-.14 3.3L12 14.2l3.7 6.59a3.75 3.75 0 1 0-.13-3.3l-2.71-4.82 5.8-10.3a.75.75 0 0 0-1.31-.74L12 11.14z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScissors;
