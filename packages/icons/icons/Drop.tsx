import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDrop = forwardRef<SVGSVGElement, IconProps>(function IconDrop(
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
            d="M13.28 2.21a1 1 0 0 0-1.22 0c-1.9 1.45-7.51 6.18-7.48 11.69a8.11 8.11 0 0 0 16.2.01c.01-5.43-5.61-10.24-7.5-11.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M17.26 7.41 6.98 17.69c-.48.48-1.3.37-1.59-.24a8 8 0 0 1-.82-3.55c-.02-5.52 5.58-10.24 7.48-11.69a1 1 0 0 1 1.23 0c.87.66 2.5 2.03 4.03 3.83.34.4.32 1-.05 1.37"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.77 13.91a8.1 8.1 0 0 1-12.91 6.51 1 1 0 0 1-.1-1.51L17.83 8.84a1 1 0 0 1 1.58.21 10 10 0 0 1 1.36 4.86"
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
            d="M17.26 7.41 6.98 17.69c-.48.48-1.3.37-1.59-.24a8 8 0 0 1-.82-3.55c-.02-5.52 5.58-10.24 7.48-11.69a1 1 0 0 1 1.23 0c.87.66 2.5 2.03 4.03 3.83.34.4.32 1-.05 1.37"
            fill="currentColor"
          />
          <path
            d="M20.77 13.91a8.1 8.1 0 0 1-12.91 6.51 1 1 0 0 1-.1-1.51L17.83 8.84a1 1 0 0 1 1.58.21 10 10 0 0 1 1.36 4.86"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDrop;
