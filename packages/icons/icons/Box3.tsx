import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBox3 = forwardRef<SVGSVGElement, IconProps>(function IconBox3(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m3.84 7.44 8.83 5.11 8.77-5.08"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 21.61v-9.07"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M10.6 2.48 5.26 5.44a4.7 4.7 0 0 0-2.2 3.73v5.65c0 1.38 1 3.06 2.2 3.73l5.34 2.97a4.8 4.8 0 0 0 4.15 0l5.34-2.97a4.7 4.7 0 0 0 2.2-3.73V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.97a4.8 4.8 0 0 0-4.15.01"
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
            d="m21.71 7.19-9.04 5.23-9.04-5.23a4.4 4.4 0 0 1 1.63-1.75l5.34-2.96a4.7 4.7 0 0 1 4.14 0l5.34 2.96a4.4 4.4 0 0 1 1.63 1.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M12.67 12.42V22c-.75 0-1.5-.16-2.07-.48l-5.34-2.96a4.7 4.7 0 0 1-2.2-3.73V9.17c0-.64.22-1.34.57-1.98z"
            fill="currentColor"
          />
          <path
            d="M22.28 9.17v5.66c0 1.38-.99 3.06-2.2 3.73l-5.34 2.96c-.57.32-1.32.48-2.07.48v-9.58l9.04-5.23c.35.64.57 1.34.57 1.98"
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
            d="m20.88 7.82-7.7 4.46c-.3.18-.7.18-1.02 0l-7.7-4.46a1 1 0 0 1-.27-1.54q.45-.5.97-.79l5.42-3a4.8 4.8 0 0 1 4.2 0l5.42 3q.53.3.97.79c.4.47.26 1.22-.29 1.54"
            fill="currentColor"
          />
          <path
            d="M12.1 14.14v6.82c0 .76-.77 1.26-1.45.93-2.06-1.01-5.53-2.9-5.53-2.9a4.9 4.9 0 0 1-2.22-3.86V9.97c0-.79.83-1.29 1.51-.9l7.2 4.17c.3.19.5.53.5.9"
            fill="currentColor"
          />
          <path
            d="M13.24 14.14v6.82c0 .76.77 1.26 1.45.93 2.06-1.01 5.53-2.9 5.53-2.9a4.9 4.9 0 0 0 2.22-3.86V9.97c0-.79-.83-1.29-1.5-.9l-7.2 4.17c-.3.19-.5.53-.5.9"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBox3;
