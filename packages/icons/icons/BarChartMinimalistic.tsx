import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBarChartMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconBarChartMinimalistic(
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
              d="M2.67 22h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.42 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.67 10v12h4V10c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2"
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
              d="M22.67 22h-20a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M10.42 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.67 10v12h4V10c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2"
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
              d="M22.67 22h-20a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M10.42 4v18h4.5V4c0-1.1-.45-2-1.8-2h-.9c-1.35 0-1.8.9-1.8 2"
              fill="currentColor"
            />
            <path
              d="M3.67 10v12h4V10c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2"
              fill="currentColor"
            />
            <path
              d="M17.67 15v7h4v-7c0-1.1-.4-2-1.6-2h-.8c-1.2 0-1.6.9-1.6 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBarChartMinimalistic;
