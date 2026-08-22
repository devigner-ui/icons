import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSliderVerticalMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconSliderVerticalMinimalistic(
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
              d="M6 8c0-2.83 0-4.24.88-5.12S9.18 2 12 2s4.24 0 5.12.88S18 5.18 18 8v8c0 2.83 0 4.24-.88 5.12S14.82 22 12 22s-4.24 0-5.12-.88S6 18.82 6 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 4.5v15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 4.5v15"
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
            <path
              d="M5.85 8c0-2.83 0-4.24.9-5.12S9.1 2 12 2s4.35 0 5.25.88.9 2.3.9 5.12v8c0 2.83 0 4.24-.9 5.12S14.9 22 12 22s-4.35 0-5.25-.88-.9-2.3-.9-5.12z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.77 3.75c.42 0 .77.34.77.75v15c0 .41-.35.75-.77.75A.76.76 0 0 1 2 19.5v-15c0-.41.34-.75.77-.75m18.46 0c.43 0 .77.34.77.75v15c0 .41-.34.75-.77.75a.76.76 0 0 1-.77-.75v-15c0-.41.35-.75.77-.75"
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
              d="M5.85 8c0-2.83 0-4.24.9-5.12S9.1 2 12 2s4.35 0 5.25.88.9 2.3.9 5.12v8c0 2.83 0 4.24-.9 5.12S14.9 22 12 22s-4.35 0-5.25-.88-.9-2.3-.9-5.12z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.77 3.75c.42 0 .77.34.77.75v15c0 .41-.35.75-.77.75A.76.76 0 0 1 2 19.5v-15c0-.41.34-.75.77-.75m18.46 0c.43 0 .77.34.77.75v15c0 .41-.34.75-.77.75a.76.76 0 0 1-.77-.75v-15c0-.41.35-.75.77-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSliderVerticalMinimalistic;
