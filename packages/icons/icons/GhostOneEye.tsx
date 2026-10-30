import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGhostOneEye = forwardRef<SVGSVGElement, IconProps>(function IconGhostOneEye(
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
      {variant === "Broken" ? (
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
            d="M22 16.44v-4.26C22 6.58 17.5 2 12 2a10 10 0 0 0-5.65 1.79M3.88 6.25A10.3 10.3 0 0 0 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91a1 1 0 0 1 1.34 0l2 1.83a1 1 0 0 0 1.34 0l2-1.83a1 1 0 0 1 1.34 0l2 1.83a1 1 0 0 0 1.34 0l2-1.83a1 1 0 0 1 1.34 0l1 .91c.88.84 1.63.5 1.63-.76v-.13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14a6.7 6.7 0 0 0 8 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 11a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91a1 1 0 0 1 1.34 0l2 1.83a1 1 0 0 0 1.34 0l2-1.83a1 1 0 0 1 1.34 0l2 1.83a1 1 0 0 0 1.34 0l2-1.83a1 1 0 0 1 1.34 0l1 .91c.88.84 1.63.5 1.63-.76"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 14a6.7 6.7 0 0 0 8 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
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
            opacity={duotone ? "0.4" : "1"}
            d="M22 20.07v-7.89C22 6.58 17.5 2 12 2S2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91a1 1 0 0 1 1.34 0l2 1.83a1 1 0 0 0 1.34 0l2-1.83a1 1 0 0 1 1.34 0l2 1.83a1 1 0 0 0 1.34 0l2-1.83a1 1 0 0 1 1.34 0l1 .91c.88.84 1.63.5 1.63-.76"
            fill="currentColor"
          />
          <path
            d="M12 16.07a7.4 7.4 0 0 1-4.45-1.47.75.75 0 0 1 .9-1.2 5.9 5.9 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2A7.4 7.4 0 0 1 12 16.07"
            fill="currentColor"
          />
          <path
            d="M12 11.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
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
            d="M12 2C6.5 2 2 6.58 2 12.18v7.89c0 1.26.75 1.6 1.67.76l1-.91a1 1 0 0 1 1.34 0l2 1.83a1 1 0 0 0 1.34 0l2-1.83a1 1 0 0 1 1.34 0l2 1.83a1 1 0 0 0 1.34 0l2-1.83a1 1 0 0 1 1.34 0l1 .91c.92.84 1.67.5 1.67-.76v-7.89A10.2 10.2 0 0 0 12 2m0 4.62a2.39 2.39 0 0 1 0 4.76 2.39 2.39 0 0 1 0-4.76m4.45 7.98a7.4 7.4 0 0 1-8.9 0 .75.75 0 0 1 .9-1.2 5.9 5.9 0 0 0 7.1 0 .75.75 0 0 1 .9 1.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGhostOneEye;
