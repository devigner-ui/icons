import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTuning3 = forwardRef<SVGSVGElement, IconProps>(function IconTuning3(
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
          <circle
            cx="12"
            cy="12.0005"
            r="2"
            transform="rotate(180 12 12.0005)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="20"
            cy="14.0005"
            r="2"
            transform="rotate(180 20 14.0005)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <circle
            cx="2"
            cy="2"
            r="2"
            transform="matrix(-1 8.74228e-08 8.74228e-08 1 6 8.00049)"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 12V5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 12v7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 19v-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 19v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 10V5M4 5v2.67"
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
          <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4" fill="currentColor" />
          <path d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0" fill="currentColor" />
          <path d="M18 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0" fill="currentColor" />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M12.75 10.15a2 2 0 0 0-1.5 0V5a.75.75 0 0 1 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M11.25 13.86a2 2 0 0 0 1.5 0V19a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M19.25 12.15a2 2 0 0 1 1.5 0V5a.75.75 0 0 0-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M19.25 15.86V19a.75.75 0 0 0 1.5 0v-3.14a2 2 0 0 1-1.5 0"
              fill="currentColor"
            />
            <path
              d="M4.75 8.15a2 2 0 0 0-1.5 0V5a.75.75 0 1 1 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M4.75 11.86a2 2 0 0 1-1.5 0V19a.75.75 0 0 0 1.5 0z"
              fill="currentColor"
            />
          </g>
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
            d="M12 8.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v3c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4" fill="currentColor" />
          <path d="M10 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0" fill="currentColor" />
          <path d="M18 14a2 2 0 1 1 4 0 2 2 0 0 1-4 0" fill="currentColor" />
          <path
            d="M19.25 10a.75.75 0 0 0 1.5 0V5a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
          />
          <path
            d="M4 13.25a.75.75 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0v-5a.75.75 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M11.25 19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0z"
            fill="currentColor"
          />
          <path
            d="M20 19.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M3.25 5a.75.75 0 1 1 1.5 0v1a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTuning3;
