import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSliderMinimalisticHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconSliderMinimalisticHorizontal(
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
              d="M8 18c-2.83 0-4.24 0-5.12-.88S2 14.82 2 12s0-4.24.88-5.12S5.18 6 8 6h8c2.83 0 4.24 0 5.12.88S22 9.18 22 12s0 4.24-.88 5.12-2.3.88-5.12.88z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.5 3h15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.5 21h15"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.25 2.77c0 .42-.34.77-.75.77h-15a.76.76 0 0 1-.75-.77c0-.43.34-.77.75-.77h15c.41 0 .75.34.75.77m0 18.46c0 .43-.34.77-.75.77h-15a.76.76 0 0 1-.75-.77c0-.42.34-.77.75-.77h15c.41 0 .75.35.75.77"
                fill="currentColor"
              />
            </g>
            <path
              d="M16 5.85c2.83 0 4.24 0 5.12.9S22 9.1 22 12s0 4.35-.88 5.25-2.3.9-5.12.9H8c-2.83 0-4.24 0-5.12-.9S2 14.9 2 12s0-4.35.88-5.25 2.3-.9 5.12-.9z"
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
              d="M16 5.85c2.83 0 4.24 0 5.12.9S22 9.1 22 12s0 4.35-.88 5.25-2.3.9-5.12.9H8c-2.83 0-4.24 0-5.12-.9S2 14.9 2 12s0-4.35.88-5.25 2.3-.9 5.12-.9z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.25 2.77c0 .42-.34.77-.75.77h-15a.76.76 0 0 1-.75-.77c0-.43.34-.77.75-.77h15c.41 0 .75.34.75.77m0 18.46c0 .43-.34.77-.75.77h-15a.76.76 0 0 1-.75-.77c0-.42.34-.77.75-.77h15c.41 0 .75.35.75.77"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSliderMinimalisticHorizontal;
