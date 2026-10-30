import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPenClose = forwardRef<SVGSVGElement, IconProps>(function IconPenClose(
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
          <path
            d="M18.02 4.86c-1.2-1.2-2.85-1.14-3.66.15l-1.77 2.8 5.67 5.67 2.8-1.77c1.21-.76 1.28-2.53.14-3.66"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m11.3 21.48-4.28.5c-1.84.21-3.16-1.11-2.94-2.94l.98-8.28"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m18.25 13.47.24 4.12c.23 2.3-.57 3.1-2.75 3.36"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m12.58 7.81-1.75-.11"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m5.28 20.78 3.18-3.19"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11 6.5a4.4 4.4 0 0 1-.65 2.32q-.36.6-.89 1.06a4.4 4.4 0 0 1-4.4.88A4.5 4.5 0 0 1 2 6.5c0-1.42.65-2.69 1.69-3.51A4.5 4.5 0 0 1 11 6.5Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.7 7.68 5.32 5.3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.68 5.32 5.3 7.7"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m21.19 8.04-3.18-3.18c-1.2-1.2-2.85-1.14-3.66.15l-1.77 2.8 5.67 5.67 2.8-1.77c1.21-.77 1.28-2.54.14-3.67"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m18.25 13.47.24 4.12c.23 2.3-.57 3.1-2.75 3.36l-8.72 1.03c-1.84.21-3.16-1.11-2.94-2.94l.98-8.28"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.58 7.81-1.75-.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m5.28 20.78 3.18-3.19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M11 6.5a4.4 4.4 0 0 1-.65 2.32q-.36.6-.89 1.06a4.4 4.4 0 0 1-4.4.88A4.5 4.5 0 0 1 2 6.5c0-1.42.65-2.69 1.69-3.51A4.5 4.5 0 0 1 11 6.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.7 7.68 5.32 5.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.68 5.32 5.3 7.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M21.38 11.1 18.37 13l-6.08-6.08 1.89-3.01c.88-1.39 2.65-1.45 3.94-.16l3.41 3.41c1.22 1.23 1.14 3.12-.15 3.94"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.67 21.04-9.36 1.1a3 3 0 0 1-1.72-.26 2.6 2.6 0 0 1-1.19-1.19 3 3 0 0 1-.26-1.7l1.04-8.71q.26.14.55.23.67.24 1.44.24a4.4 4.4 0 0 0 3.85-2.18 5 5 0 0 0 .61-1.75l1.66.1 6.08 6.09.26 4.42c.25 2.48-.61 3.34-2.96 3.61"
            fill="currentColor"
          />
          <path
            d="M8.45 18.03 4.6 21.88a2.5 2.5 0 0 1-1.19-1.19l3.85-3.85a.84.84 0 0 1 1.19 0c.33.33.33.86 0 1.19"
            fill="currentColor"
          />
          <path
            d="M6.17 1.75c-1.06 0-2.04.37-2.81.99a4.45 4.45 0 0 0-1.04 5.83 4.5 4.5 0 0 0 3.85 2.18 4.4 4.4 0 0 0 3.85-2.18 4.5 4.5 0 0 0 .65-2.32 4.5 4.5 0 0 0-4.5-4.5M7.9 7.96a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.66-.66-.69.69a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.69-.69-.66-.66a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.66.66.63-.63a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.63.63.66.66c.3.29.3.76 0 1.06"
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
            d="m15.57 21.04-9.36 1.1a3 3 0 0 1-1.72-.26 2.6 2.6 0 0 1-1.19-1.19 3 3 0 0 1-.26-1.7l.85-7.15.24.08q.92.33 1.94.33a5.94 5.94 0 0 0 5.77-4.37 7 7 0 0 0 .17-.82l.01-.15.17.01 6.08 6.09.26 4.42c.25 2.48-.61 3.34-2.96 3.61"
            fill="currentColor"
          />
          <path
            d="M6.07 1.75c-1.06 0-2.04.37-2.81.99a4.45 4.45 0 0 0-1.04 5.83 4.5 4.5 0 0 0 3.85 2.18 4.4 4.4 0 0 0 3.85-2.18 4.5 4.5 0 0 0 .65-2.32 4.5 4.5 0 0 0-4.5-4.5M7.8 7.96a.8.8 0 0 1-.53.22.8.8 0 0 1-.53-.22l-.66-.66-.68.68a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.69-.69-.67-.65a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.66.66.63-.63a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.63.63.66.66c.3.29.3.76 0 1.06"
            fill="currentColor"
          />
          <path
            d="m21.57 10.03-2.07 1.31a1 1 0 0 1-1.21-.14l-4.43-4.43a1 1 0 0 1-.14-1.21l1.3-2.07c.8-1.26 2.4-1.32 3.6-.15l3.11 3.11c1.09 1.11 1.02 2.83-.16 3.58"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPenClose;
