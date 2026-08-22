import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSwimming = forwardRef<SVGSVGElement, IconProps>(function IconSwimming(
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
            d="M22 15.77a4.8 4.8 0 0 1-3.08-2.31c-.42-.64-1.35-.6-1.81.01A6 6 0 0 1 12 16c-2.5 0-4.08-1.43-5.13-2.78a1.02 1.02 0 0 0-1.67.05c-.7 1.1-1.52 2.1-3.2 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 20.77a4.8 4.8 0 0 1-3.08-2.31c-.42-.64-1.35-.6-1.81.01A6 6 0 0 1 12 21c-2.5 0-4.08-1.43-5.13-2.78a1.02 1.02 0 0 0-1.67.05c-.7 1.1-1.52 2.1-3.2 2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m4 11.5 3.48-2.09c.8-.47.97-1.55.36-2.26L6.86 6A1.42 1.42 0 0 1 9 4.13l6.5 7.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.57 17.87a1.76 1.76 0 0 1 2.89-.1c.99 1.26 2.37 2.48 4.54 2.48 2.2 0 3.57-.98 4.5-2.23.73-.96 2.3-1.12 3.05.02.62.95 1.3 1.7 2.62 2a.75.75 0 1 1-.34 1.46 5.6 5.6 0 0 1-3.54-2.63.3.3 0 0 0-.25-.13.4.4 0 0 0-.33.18A6.8 6.8 0 0 1 12 21.75c-2.84 0-4.61-1.64-5.72-3.06a.3.3 0 0 0-.25-.13.2.2 0 0 0-.2.11c-.74 1.16-1.7 2.37-3.66 2.83a.75.75 0 1 1-.34-1.46c1.4-.33 2.08-1.14 2.74-2.17"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.57 12.8a1.76 1.76 0 0 1 2.89-.1c.99 1.27 2.37 2.49 4.54 2.49 2.2 0 3.57-.98 4.5-2.23.73-.96 2.3-1.12 3.05.02.62.95 1.3 1.7 2.62 2a.75.75 0 0 1-.34 1.46 5.6 5.6 0 0 1-3.54-2.63.3.3 0 0 0-.25-.13.4.4 0 0 0-.33.18A6.8 6.8 0 0 1 12 16.69c-2.84 0-4.61-1.64-5.72-3.06a.3.3 0 0 0-.25-.13.2.2 0 0 0-.2.11c-.74 1.16-1.7 2.37-3.66 2.83a.75.75 0 1 1-.34-1.46c1.4-.33 2.08-1.14 2.74-2.17"
              fill="currentColor"
            />
          </g>
          <path
            d="M19.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            fill="currentColor"
          />
          <path
            d="m16.65 12.8-1.15-1.3L9 4.13A1.42 1.42 0 0 0 6.86 6l.98 1.15c.6.7-.36 2.26-.36 2.26l-2.36 2.85a1.8 1.8 0 0 1 2.34.44c.99 1.27 2.37 2.49 4.54 2.49a5.3 5.3 0 0 0 4.65-2.4"
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
            d="M4.57 17.87a1.76 1.76 0 0 1 2.89-.1c.99 1.26 2.37 2.48 4.54 2.48 2.2 0 3.57-.98 4.5-2.23.72-.96 2.3-1.12 3.05.02.62.95 1.3 1.7 2.62 2a.75.75 0 1 1-.34 1.46 5.6 5.6 0 0 1-3.54-2.63.3.3 0 0 0-.25-.13.4.4 0 0 0-.33.18A6.8 6.8 0 0 1 12 21.75c-2.84 0-4.61-1.64-5.72-3.06a.3.3 0 0 0-.25-.13.2.2 0 0 0-.2.11c-.74 1.16-1.7 2.37-3.66 2.83a.75.75 0 1 1-.34-1.46c1.4-.33 2.08-1.14 2.74-2.17"
            fill="currentColor"
          />
          <path
            d="M22.17 15.04c-1.32-.3-2-1.05-2.62-2-.7-1.06-2.1-1-2.88-.21L15.5 11.5 9 4.13A1.42 1.42 0 0 0 6.86 6l.98 1.15c.6.7-.36 2.26-.36 2.26L5 12.4q-.24.18-.43.47c-.66 1.03-1.34 1.84-2.74 2.17a.75.75 0 1 0 .34 1.46c1.97-.46 2.92-1.67 3.66-2.83a.2.2 0 0 1 .2-.1.3.3 0 0 1 .25.12c1.1 1.42 2.88 3.06 5.72 3.06a6.8 6.8 0 0 0 5.7-2.83.4.4 0 0 1 .34-.18q.17 0 .25.13a5.6 5.6 0 0 0 3.54 2.63.75.75 0 1 0 .34-1.46"
            fill="currentColor"
          />
          <path
            d="M17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSwimming;
