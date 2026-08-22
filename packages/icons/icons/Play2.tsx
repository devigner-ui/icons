import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlay2 = forwardRef<SVGSVGElement, IconProps>(function IconPlay2(
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
            d="M4.67 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78c-3.83 2.21-6.96.4-6.96-4.02z"
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
            d="M19.37 8.98 4.81 17.71a4 4 0 0 1-.14-1.04V7.33a4 4 0 0 1 6-3.46l4.04 2.33 4.05 2.34q.33.19.61.44"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.76 15.46-4.05 2.34-4.04 2.33a4 4 0 0 1-5.28-1.17l.42-.25 14.44-8.66a4 4 0 0 1-1.49 5.41"
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
            d="M18.16 9.6 6.27 16.77c-.7.42-1.6-.08-1.6-.9v-8a4.54 4.54 0 0 1 6.8-3.93l4.59 2.64 2.09 1.2c.69.41.7 1.41.01 1.82"
            fill="currentColor"
          />
          <path
            d="m18.76 15.46-4.05 2.34-4.04 2.33a4 4 0 0 1-4.28-.18c-.58-.4-.51-1.29.1-1.65l12.71-7.62c.6-.36 1.39-.02 1.5.67a4 4 0 0 1-1.94 4.11"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlay2;
