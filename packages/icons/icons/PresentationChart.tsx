import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPresentationChart = forwardRef<SVGSVGElement, IconProps>(
  function IconPresentationChart(
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
            d="M21 10V2H3v12.1q0 1.07.42 1.76.7 1.14 2.49 1.15H18.1c1.9 0 2.9-1 2.9-2.9"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 2h20"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m8 22 4-2v-3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16 22-4-2"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m7.5 11 3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L16.5 8"
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
            <path
              d="M5.9 17h12.19c1.9 0 2.9-1 2.9-2.9V2h-18v12.1C3 16 4 17 5.9 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 2h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m8 22 4-2m0 0v-3m0 3 4 2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.5 11 3.15-2.63c.25-.21.58-.15.75.13l1.2 2c.17.28.5.33.75.13L16.5 8"
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
              d="M21 2v12.1c0 1.9-1 2.9-2.9 2.9H5.9C4 17 3 16 3 14.1V2z"
              fill="currentColor"
            />
            <path
              d="M22 2.75H2A.76.76 0 0 1 1.25 2c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M16.67 22.34a.75.75 0 0 1-1 .33L12 20.84l-3.67 1.83a.75.75 0 0 1-1-.33.74.74 0 0 1 .34-1.01l3.58-1.79V17h1.5v2.54l3.58 1.79c.38.18.53.63.34 1.01"
              fill="currentColor"
            />
            <path
              d="M7.5 11.75a.75.75 0 0 1-.48-1.33l3.15-2.63c.29-.24.66-.34 1.01-.28q.56.1.86.6l1.05 1.75 2.93-2.44a.75.75 0 0 1 1.06.1c.27.32.22.79-.1 1.06l-3.15 2.63c-.29.24-.66.34-1.01.28a1.2 1.2 0 0 1-.86-.6l-1.05-1.75-2.93 2.44a1 1 0 0 1-.48.17"
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
              d="M22 2.75H2A.76.76 0 0 1 1.25 2c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M16.67 22.34a.75.75 0 0 1-1 .33L12 20.84l-3.67 1.83a.75.75 0 0 1-1-.33.74.74 0 0 1 .34-1.01l3.58-1.79V17h1.5v2.54l3.58 1.79c.38.18.53.63.34 1.01"
              fill="currentColor"
            />
            <path
              d="M3 2v12.1C3 16 4 17 5.9 17h12.2c1.9 0 2.9-1 2.9-2.9V2zm13.98 6.58-3.15 2.63c-.29.24-.66.34-1.01.28a1.2 1.2 0 0 1-.86-.6l-1.05-1.75-2.93 2.44a.76.76 0 0 1-1.06-.1.75.75 0 0 1 .1-1.06l3.15-2.63c.29-.24.66-.34 1.01-.28q.56.1.86.6l1.05 1.75 2.93-2.44a.75.75 0 0 1 1.06.1c.26.32.22.79-.1 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPresentationChart;
