import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPresentionChart = forwardRef<SVGSVGElement, IconProps>(
  function IconPresentionChart(
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
              d="M6.57 17h12.19c1.9 0 2.9-1 2.9-2.9V2h-18v12.1C3.67 16 4.67 17 6.57 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.67 2h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m8.67 22 4-2m0 0v-3m0 3 4 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m8.17 11 3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L17.17 8"
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
              opacity={duotone ? "0.4" : "1"}
              d="M21.67 2v12.1c0 1.9-1 2.9-2.9 2.9H6.57c-1.9 0-2.9-1-2.9-2.9V2z"
              fill="currentColor"
            />
            <path
              d="M22.67 2.75h-20A.76.76 0 0 1 1.92 2c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.34 22.34a.75.75 0 0 1-1 .33l-3.67-1.83L9 22.67a.75.75 0 0 1-1-.33.74.74 0 0 1 .34-1.01l3.58-1.79V17h1.5v2.54L17 21.33c.38.18.53.63.34 1.01"
              fill="currentColor"
            />
            <path
              d="M8.17 11.75a.75.75 0 0 1-.48-1.33l3.15-2.63c.29-.24.66-.34 1.01-.28q.56.1.86.6l1.05 1.75 2.93-2.44a.75.75 0 0 1 1.06.1c.27.32.22.79-.1 1.06l-3.15 2.63c-.29.24-.66.34-1.01.28a1.2 1.2 0 0 1-.86-.6l-1.05-1.75-2.93 2.44a1 1 0 0 1-.48.17"
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
              d="M22.67 2.75h-20A.76.76 0 0 1 1.92 2c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.34 22.34a.75.75 0 0 1-1 .33l-3.67-1.83L9 22.67a.75.75 0 0 1-1-.33.74.74 0 0 1 .34-1.01l3.58-1.79V17h1.5v2.54L17 21.33c.38.18.53.63.34 1.01"
              fill="currentColor"
            />
            <path
              d="M3.67 2v12.1c0 1.9 1 2.9 2.9 2.9h12.2c1.9 0 2.9-1 2.9-2.9V2zm13.98 6.58-3.15 2.63c-.29.24-.66.34-1.01.28a1.2 1.2 0 0 1-.86-.6l-1.05-1.75-2.93 2.44a.76.76 0 0 1-1.06-.1.75.75 0 0 1 .1-1.06l3.15-2.63c.29-.24.66-.34 1.01-.28q.56.1.86.6l1.05 1.75 2.93-2.44a.75.75 0 0 1 1.06.1c.26.32.22.79-.1 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPresentionChart;
