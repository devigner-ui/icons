import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPills3 = forwardRef<SVGSVGElement, IconProps>(function IconPills3(
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
            d="M11 9.5a4.49 4.49 0 0 0-7.68-3.18A4.5 4.5 0 0 0 2 9.5m9 0a4.49 4.49 0 0 1-7.68 3.18A4.5 4.5 0 0 1 2 9.5m9 0H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.76 7.12A3 3 0 1 0 19 2.88a3 3 0 0 0-4.24 4.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20.9 17.38a3.74 3.74 0 0 0-5.28-5.28l-3.53 3.52a3.74 3.74 0 0 0 5.3 5.29z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14 14s.28 1.46 1.91 3.09A6.7 6.7 0 0 0 19 19"
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
            d="M14.76 7.12A3 3 0 1 0 19 2.88a3 3 0 0 0-4.24 4.24"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.9 17.38a3.74 3.74 0 0 0-5.28-5.28l-3.53 3.52a3.74 3.74 0 0 0 5.3 5.29z"
            fill="currentColor"
          />
          <path
            d="m19.88 18.4-.73-.14h-.03l-.15-.04a7 7 0 0 1-2.53-1.66 7 7 0 0 1-1.66-2.53l-.04-.18-.15-.73-1.26 1.27a5 5 0 0 0 .34.87c.3.64.83 1.48 1.71 2.36a9 9 0 0 0 3.14 2.03l.1.02z"
            fill="currentColor"
          />
          <path
            d="M9.73 12.68a4.6 4.6 0 0 1-6.46 0A4.5 4.5 0 0 1 2 10.25h9c-.15.9-.58 1.74-1.27 2.43"
            fill="currentColor"
          />
          <path
            d="M11 8.75H2a4.5 4.5 0 0 1 1.27-2.43 4.6 4.6 0 0 1 6.46 0c.7.69 1.12 1.54 1.27 2.43"
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
            d="M9.68 12.68a4.5 4.5 0 0 1-7.62-2.43h8.88c-.15.9-.57 1.74-1.26 2.43"
            fill="currentColor"
          />
          <path d="M10.94 8.75H2.06a4.5 4.5 0 0 1 8.87 0" fill="currentColor" />
          <path
            d="M14.76 7.12A3 3 0 1 0 19 2.88a3 3 0 0 0-4.24 4.24"
            fill="currentColor"
          />
          <path
            d="M20.9 12.1a3.74 3.74 0 0 1 0 5.28l-1.02 1.03-.73-.15h-.03l-.15-.04a7 7 0 0 1-2.53-1.66 7 7 0 0 1-1.66-2.53l-.04-.18-.15-.73 1.03-1.02a3.74 3.74 0 0 1 5.29 0"
            fill="currentColor"
          />
          <path
            d="m13.33 14.39.03.1q.09.29.3.77c.32.64.84 1.48 1.72 2.36a9 9 0 0 0 3.14 2.03l.1.02-1.24 1.24a3.74 3.74 0 1 1-5.29-5.3z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPills3;
