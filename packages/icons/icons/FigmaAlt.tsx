import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFigmaAlt = forwardRef<SVGSVGElement, IconProps>(function IconFigmaAlt(
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
            d="M12.67 2H9.34a3.33 3.33 0 1 0 0 6.66h3.33z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M12.67 8.67H9.34a3.33 3.33 0 1 0 0 6.66h3.33z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M12.67 15.33H9.34a3.33 3.33 0 1 0 3.33 3.33z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.67 2H16a3.33 3.33 0 1 1 0 6.66h-3.33z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 8.67a3.33 3.33 0 1 1 0 6.66 3.33 3.33 0 0 1 0-6.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
          </g>
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="M12.67 2H9.34a3.33 3.33 0 1 0 0 6.66h3.33z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 8.67H9.34a3.33 3.33 0 1 0 0 6.66h3.33z"
            fill="currentColor"
          />
          <path
            d="M12.67 15.33H9.34a3.33 3.33 0 1 0 3.33 3.33z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 2H16a3.33 3.33 0 1 1 0 6.66h-3.33z"
            fill="currentColor"
          />
          <path
            d="M16 8.67a3.33 3.33 0 1 1 0 6.66 3.33 3.33 0 0 1 0-6.66"
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
            d="M12.67 2H9.34a3.33 3.33 0 1 0 0 6.66h3.33z"
            fill="currentColor"
          />
          <path
            d="M12.67 8.67H9.34a3.33 3.33 0 1 0 0 6.66h3.33z"
            fill="currentColor"
          />
          <path
            d="M12.67 15.33H9.34a3.33 3.33 0 1 0 3.33 3.33z"
            fill="currentColor"
          />
          <path
            d="M12.67 2H16a3.33 3.33 0 1 1 0 6.66h-3.33z"
            fill="currentColor"
          />
          <path
            d="M16 8.67a3.33 3.33 0 1 1 0 6.66 3.33 3.33 0 0 1 0-6.66"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFigmaAlt;
