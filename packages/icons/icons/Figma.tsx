import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFigma = forwardRef<SVGSVGElement, IconProps>(function IconFigma(
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
            d="M12 2H8.67a3.33 3.33 0 1 0 0 6.67H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 8.67H8.67a3.33 3.33 0 1 0 0 6.66H12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 12A3.33 3.33 0 1 1 12 12a3.33 3.33 0 0 1 6.67 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 15.33H12v3.34a3.33 3.33 0 1 1-3.33-3.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 2h3.33a3.33 3.33 0 1 1 0 6.67H12z"
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
            opacity={duotone ? "0.6" : "1"}
            d="M11.67 2H8.33a3.33 3.33 0 1 0 0 6.67h3.34z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.5" : "1"}
            d="M11.67 8.67H8.33a3.33 3.33 0 0 0 0 6.66h3.34z"
            fill="currentColor"
          />
          <path
            d="M18.33 12a3.33 3.33 0 1 1-6.66 0 3.33 3.33 0 0 1 6.66 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.3" : "1"}
            d="M8.33 15.33h3.34v3.34a3.33 3.33 0 1 1-3.34-3.34"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.7" : "1"}
            d="M11.67 2H15a3.33 3.33 0 1 1 0 6.67h-3.33z"
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
            d="M8.67 9.42a2.58 2.58 0 1 0 0 5.16h2.58V9.42zm2.58-1.5H8.67a2.58 2.58 0 0 1 0-5.17h2.58zm1.5-5.17v5.17h2.58a2.58 2.58 0 0 0 0-5.17zm2.58 6.67a2.6 2.6 0 0 0-2.58 2.54v.08a2.58 2.58 0 1 0 2.58-2.62m-6.66 6.66a2.58 2.58 0 1 0 2.58 2.59v-2.59z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFigma;
