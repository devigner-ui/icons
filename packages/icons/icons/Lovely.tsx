import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLovely = forwardRef<SVGSVGElement, IconProps>(function IconLovely(
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
            d="M20.53 8.09q0 .63-.08 1.22a3.7 3.7 0 0 0-4.46 1.18 3.72 3.72 0 0 0-6.69 2.25 8.2 8.2 0 0 0 3 6.12l-.15.06c-.3.11-.8.11-1.1 0-2.59-.89-8.38-4.57-8.38-10.83a4.97 4.97 0 0 1 8.93-3 4.96 4.96 0 0 1 8.93 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 12.74c0 4.68-4.33 7.44-6.27 8.1-.23.08-.6.08-.83 0-.83-.28-2.1-.95-3.27-1.98a8.2 8.2 0 0 1-3-6.12 3.72 3.72 0 0 1 6.69-2.25 3.7 3.7 0 0 1 6.68 2.25"
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
            d="m20.53 8.09-.01.44a4.5 4.5 0 0 0-4.53.86 4.48 4.48 0 0 0-7.44 3.35 8.7 8.7 0 0 0 2.78 6.24q-.16-.02-.28-.06c-2.59-.89-8.38-4.57-8.38-10.83a4.97 4.97 0 0 1 8.93-3 4.96 4.96 0 0 1 8.93 3"
            fill="currentColor"
          />
          <path
            d="M18.67 9.59c-1.07 0-2.04.52-2.64 1.32a3.3 3.3 0 0 0-5.94 2q0 1.06.31 1.96c.94 2.97 3.83 4.74 5.26 5.23.2.07.53.07.74 0 1.43-.49 4.32-2.26 5.26-5.23q.3-.91.31-1.96a3.3 3.3 0 0 0-3.3-3.32"
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
            d="M19.47 9.91c-1.13 0-2.14.55-2.77 1.39a3.47 3.47 0 0 0-6.23 2.09q.01 1.11.32 2.06c.98 3.11 4.02 4.98 5.52 5.49.21.07.56.07.77 0 1.5-.51 4.54-2.37 5.52-5.49q.32-.96.32-2.06a3.46 3.46 0 0 0-3.45-3.48"
            fill="currentColor"
          />
          <path
            d="M21.42 8.34c0 .23-.23.38-.45.32a4.8 4.8 0 0 0-3.95.74.6.6 0 0 1-.73 0 4.7 4.7 0 0 0-7.44 3.81 9 9 0 0 0 2.71 6.34c.07.07.01.19-.08.15-2.73-.93-8.81-4.79-8.81-11.36a5.22 5.22 0 0 1 9.38-3.15 5.22 5.22 0 0 1 9.37 3.15"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLovely;
