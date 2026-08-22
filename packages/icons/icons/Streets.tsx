import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStreets = forwardRef<SVGSVGElement, IconProps>(function IconStreets(
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
            d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.5 20.5 12 12m8.5-8.5L12 12m8.5 8.5L12 12"
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
            d="M21.01 4.05 13.06 12l7.95 7.95c.99-1.5.99-3.82.99-7.95s0-6.46-.99-7.95"
            fill="currentColor"
          />
          <path
            d="m12 13.06-7.95 7.95C5.55 22 7.87 22 12 22s6.46 0 7.95-.99z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.46 3.46C2 4.93 2 7.3 2 12c0 4.13 0 6.46.99 7.95L19.95 3c-1.5-1-3.82-1-7.95-1-4.71 0-7.07 0-8.54 1.46"
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
            d="M3.46 3.46C2 4.93 2 7.3 2 12c0 4.13 0 6.46.99 7.95L19.95 3c-1.5-1-3.82-1-7.95-1-4.71 0-7.07 0-8.54 1.46"
            fill="currentColor"
          />
          <path
            d="M21.01 4.05 13.06 12l7.95 7.95c.99-1.5.99-3.82.99-7.95s0-6.46-.99-7.95"
            fill="currentColor"
          />
          <path
            d="m12 13.06-7.95 7.95C5.55 22 7.87 22 12 22s6.46 0 7.95-.99z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStreets;
