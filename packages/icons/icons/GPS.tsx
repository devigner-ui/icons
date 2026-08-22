import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGPS = forwardRef<SVGSVGElement, IconProps>(function IconGPS(
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
            d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 12h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 12h2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 4V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22v-2"
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
            d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
            fill="currentColor"
          />
          <path
            d="M12 8.51a3.49 3.49 0 1 0 0 6.98 3.49 3.49 0 0 0 0-6.98"
            fill="currentColor"
          />
          <path
            d="M12.75 2a.75.75 0 0 0-1.5 0v2.03a8 8 0 0 1 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M19.97 12.75a8 8 0 0 0 0-1.5H22a.75.75 0 0 1 0 1.5z"
            fill="currentColor"
          />
          <path
            d="M11.25 19.97a8 8 0 0 0 1.5 0V22a.75.75 0 1 1-1.5 0z"
            fill="currentColor"
          />
          <path
            d="M4.03 11.25a8 8 0 0 0 0 1.5H2a.75.75 0 1 1 0-1.5z"
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
            d="M2 12c0 .39.31.7.7.7h1.89a7.44 7.44 0 0 0 6.71 6.71v1.9a.7.7 0 0 0 1.4 0v-1.9a7.44 7.44 0 0 0 6.71-6.71h1.9a.7.7 0 1 0 0-1.4h-1.9a7.44 7.44 0 0 0-6.71-6.7V2.7a.7.7 0 0 0-1.4 0v1.9a7.44 7.44 0 0 0-6.71 6.7h-1.9A.7.7 0 0 0 2 12m6.51 0a3.49 3.49 0 1 1 6.98 0 3.49 3.49 0 0 1-6.98 0"
            fill="currentColor"
          />
          <path
            d="M9.9 12a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGPS;
