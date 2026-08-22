import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const Icon3square = forwardRef<SVGSVGElement, IconProps>(function Icon3square(
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
            d="M12.67 17v2.38c0 1.87-.75 2.62-2.63 2.62H5.29c-1.87 0-2.62-.75-2.62-2.62v-4.75c0-1.88.75-2.63 2.62-2.63h2.38v2.37c0 1.88.75 2.63 2.62 2.63z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.67 12v2.37c0 1.88-.75 2.63-2.63 2.63h-4.75c-1.87 0-2.62-.75-2.62-2.63V9.62c0-1.87.75-2.62 2.62-2.62h2.38v2.37c0 1.88.75 2.63 2.62 2.63z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75c-1.87 0-2.62-.75-2.62-2.63V4.62c0-1.87.75-2.62 2.62-2.62h4.75c1.88 0 2.63.75 2.63 2.62"
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
            d="M12.67 17v2.38c0 1.87-.75 2.62-2.63 2.62H5.29c-1.87 0-2.62-.75-2.62-2.62v-4.75c0-1.88.75-2.63 2.62-2.63h2.38v2.37c0 1.88.75 2.63 2.62 2.63z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M17.67 12v2.37c0 1.88-.75 2.63-2.63 2.63h-4.75c-1.87 0-2.62-.75-2.62-2.63V9.62c0-1.87.75-2.62 2.62-2.62h2.38v2.37c0 1.88.75 2.63 2.62 2.63z"
            fill="currentColor"
          />
          <path
            d="M22.67 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75c-1.87 0-2.62-.75-2.62-2.63V4.62c0-1.87.75-2.62 2.62-2.62h4.75c1.88 0 2.63.75 2.63 2.62"
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
            d="M12.67 18.5v.88c0 1.87-.75 2.62-2.63 2.62H5.29a2.6 2.6 0 0 1-2.62-2.62v-4.75c0-1.88.75-2.63 2.62-2.63h.88v3.5a3 3 0 0 0 3 3z"
            fill="currentColor"
          />
          <path
            d="M17.67 13.5v.87A2.63 2.63 0 0 1 15.04 17h-4.75c-1.87 0-2.62-.75-2.62-2.63V9.62A2.6 2.6 0 0 1 10.29 7h.88v3.5a3 3 0 0 0 3 3z"
            fill="currentColor"
          />
          <path
            d="M22.67 4.62v4.75c0 1.88-.75 2.63-2.63 2.63h-4.75c-1.87 0-2.62-.75-2.62-2.63V4.62c0-1.87.75-2.62 2.62-2.62h4.75c1.88 0 2.63.75 2.63 2.62"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default Icon3square;
