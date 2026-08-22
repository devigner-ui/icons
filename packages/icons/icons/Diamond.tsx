import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDiamond = forwardRef<SVGSVGElement, IconProps>(function IconDiamond(
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
            d="m21.62 14.55-6.39 6.39a3.63 3.63 0 0 1-5.11 0l-6.39-6.39a3.63 3.63 0 0 1 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39a3.63 3.63 0 0 1 0 5.11"
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
            d="m21.62 14.55-6.39 6.39a3.63 3.63 0 0 1-5.11 0l-6.39-6.39a3.63 3.63 0 0 1 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39a3.63 3.63 0 0 1 0 5.11"
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
            d="m21.62 14.55-6.39 6.39a3.63 3.63 0 0 1-5.11 0l-6.39-6.39a3.63 3.63 0 0 1 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39a3.63 3.63 0 0 1 0 5.11"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDiamond;
