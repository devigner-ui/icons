import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBarChartSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconBarChartSquare(
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
                d="M10.78 11.15H8.13c-.63 0-1.14.51-1.14 1.14v5.12h3.79z"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.43 6.6h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79V7.74c0-.63-.5-1.14-1.13-1.14"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.22 12.85h-2.65v4.55h3.79v-3.41a1.15 1.15 0 0 0-1.14-1.14"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M10.78 11.15H8.13c-.63 0-1.14.51-1.14 1.14v5.12h3.79z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.43 6.6h-1.52c-.63 0-1.14.51-1.14 1.14v9.66h3.79V7.74c0-.63-.5-1.14-1.13-1.14"
              fill="currentColor"
            />
            <path
              d="M17.22 12.85h-2.65v4.55h3.79v-3.41a1.15 1.15 0 0 0-1.14-1.14"
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
              d="M16.86 2H8.48c-3.64 0-5.8 2.17-5.8 5.81v8.37c0 3.65 2.16 5.82 5.8 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2M9.78 16.9a.5.5 0 0 1-.5.5H6.5a.5.5 0 0 1-.5-.5v-4.62c0-.63.51-1.14 1.14-1.14h2.15c.28 0 .5.22.5.5zm4.78 0a.5.5 0 0 1-.5.5h-2.79a.5.5 0 0 1-.5-.5V7.74c0-.63.51-1.14 1.14-1.14h1.52c.63 0 1.14.51 1.14 1.14zm4.8 0a.5.5 0 0 1-.5.5h-2.8a.5.5 0 0 1-.5-.5v-3.55c0-.28.22-.5.5-.5h2.15c.63 0 1.14.51 1.14 1.14z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBarChartSquare;
