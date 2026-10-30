import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBagRivets = forwardRef<SVGSVGElement, IconProps>(function IconBagRivets(
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
          <circle
            cx="15"
            cy="9"
            r="1"
            fill="currentColor"
          />
          <circle
            cx="9"
            cy="9"
            r="1"
            fill="currentColor"
          />
          <path
            d="M9 6V5a3 3 0 1 1 6 0v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20.22 12.53c-.58-3.13-.87-4.69-1.99-5.6C17.13 6 15.53 6 12.36 6h-.72c-3.18 0-4.76 0-5.87.92s-1.4 2.48-2 5.6c-.82 4.4-1.23 6.59-.03 8.03C4.94 22 7.17 22 11.64 22h.72c4.47 0 6.7 0 7.9-1.45.7-.83.85-1.92.7-3.55"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M3.8 12.53c.53-2.69.8-4.03 1.69-4.9a4 4 0 0 1 .53-.43c1.02-.7 2.38-.7 5.13-.7h1.7c2.74 0 4.11 0 5.13.7a4 4 0 0 1 .53.44c.89.86 1.16 2.2 1.7 4.89.77 3.86 1.15 5.78.27 7.15a4 4 0 0 1-.56.68c-1.17 1.14-3.14 1.14-7.07 1.14h-1.7c-3.93 0-5.9 0-7.07-1.14a4 4 0 0 1-.55-.68c-.9-1.37-.5-3.3.26-7.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="15"
            cy="9.5"
            r="1"
            fill="currentColor"
          />
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="9"
            cy="9.5"
            r="1"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 6.5v-1a3 3 0 1 1 6 0v1"
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
            d="M4.04 11.57c.46-2.3.69-3.46 1.52-4.14s2-.68 4.36-.68h4.16c2.36 0 3.53 0 4.36.68s1.06 1.83 1.52 4.14l.6 3c.67 3.32 1 4.98.1 6.08s-2.6 1.1-5.98 1.1H9.32c-3.39 0-5.08 0-5.98-1.1s-.57-2.76.1-6.08z"
            fill="currentColor"
          />
          <circle cx="15" cy="9.75049" r="1" fill="currentColor" />
          <circle cx="9" cy="9.75049" r="1" fill="currentColor" />
          <path
            d="M9.75 5.75a2.25 2.25 0 0 1 4.5 0v1h1.5v-1a3.75 3.75 0 1 0-7.5 0v1h1.5z"
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
            d="M8.25 7.01V6a3.75 3.75 0 1 1 7.5 0v1.01c1.3.04 2.09.17 2.7.67.82.68 1.05 1.83 1.51 4.14l.6 3c.67 3.32 1 4.98.1 6.08s-2.6 1.1-5.98 1.1H9.32c-3.39 0-5.08 0-5.98-1.1s-.57-2.76.1-6.08l.6-3c.46-2.3.69-3.46 1.52-4.14.6-.5 1.4-.63 2.69-.67M9.75 6a2.25 2.25 0 0 1 4.5 0v1h-4.5zM15 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBagRivets;
