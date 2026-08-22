import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPIP2 = forwardRef<SVGSVGElement, IconProps>(function IconPIP2(
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
            d="M2 12c0-3.75 0-5.62.95-6.94a5 5 0 0 1 1.11-1.1C5.38 3 7.25 3 11 3h2c3.75 0 5.62 0 6.94.95a5 5 0 0 1 1.1 1.11C22 6.38 22 8.25 22 12s0 5.62-.95 6.94a5 5 0 0 1-1.11 1.1C18.62 21 16.75 21 13 21h-2c-3.75 0-5.62 0-6.94-.95a5 5 0 0 1-1.1-1.11C2 17.62 2 15.75 2 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M11 14c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C12.6 11 13.07 11 14 11h1c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08c.15.37.15.84.15 1.77s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15h-1c-.93 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C11 15.4 11 14.93 11 14"
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
            d="M2.95 5.06C2 6.38 2 8.25 2 12s0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C5.38 21 7.25 21 11 21h2c3.75 0 5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C22 17.62 22 15.75 22 12s0-5.62-.95-6.94a5 5 0 0 0-1.11-1.1C18.62 3 16.75 3 13 3h-2c-3.75 0-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11"
            fill="currentColor"
          />
          <path
            d="M11 14.5c0-1.09 0-1.63.17-2.06.24-.57.68-1.03 1.24-1.26.42-.18.95-.18 2.02-.18h1.14c1.07 0 1.6 0 2.02.18.56.23 1 .69 1.24 1.26.17.43.17.97.17 2.06s0 1.63-.17 2.06a2.3 2.3 0 0 1-1.24 1.26c-.42.18-.95.18-2.02.18h-1.14c-1.07 0-1.6 0-2.02-.18-.56-.23-1-.69-1.24-1.26-.17-.43-.17-.97-.17-2.06"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.95 5.06C2 6.38 2 8.25 2 12s0 5.62.95 6.94a5 5 0 0 0 1.11 1.1C5.38 21 7.25 21 11 21h2c3.75 0 5.62 0 6.94-.95a5 5 0 0 0 1.1-1.11C22 17.62 22 15.75 22 12s0-5.62-.95-6.94a5 5 0 0 0-1.11-1.1C18.62 3 16.75 3 13 3h-2c-3.75 0-5.62 0-6.94.95a5 5 0 0 0-1.1 1.11m8.22 7.38c-.17.43-.17.97-.17 2.06s0 1.63.17 2.06c.24.57.68 1.03 1.24 1.26.42.18.95.18 2.02.18h1.14c1.07 0 1.6 0 2.02-.18.56-.23 1-.69 1.24-1.26.17-.43.17-.97.17-2.06s0-1.63-.17-2.06a2.3 2.3 0 0 0-1.24-1.26c-.42-.18-.95-.18-2.02-.18h-1.14c-1.07 0-1.6 0-2.02.18-.56.23-1 .69-1.24 1.26"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPIP2;
