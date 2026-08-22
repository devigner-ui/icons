import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSliderHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconSliderHorizontal(
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
              d="M19.5 6c0-1.4 0-2.1-.27-2.63a2.5 2.5 0 0 0-1.1-1.1C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.63.27a2.5 2.5 0 0 0-1.1 1.1C4.5 3.9 4.5 4.6 4.5 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.5 18c0 1.4 0 2.1-.27 2.64a2.5 2.5 0 0 1-1.1 1.09c-.53.27-1.23.27-2.63.27h-7c-1.4 0-2.1 0-2.63-.27a2.5 2.5 0 0 1-1.1-1.1C4.5 20.1 4.5 19.4 4.5 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M8 18c-2.83 0-4.24 0-5.12-.88S2 14.82 2 12s0-4.24.88-5.12S5.18 6 8 6h8c2.83 0 4.24 0 5.12.88S22 9.18 22 12s0 4.24-.88 5.12-2.3.88-5.12.88z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M4.5 17.86C5.34 18 6.46 18 8 18h8c1.54 0 2.66 0 3.5-.14V18c0 1.4 0 2.1-.27 2.64a2.5 2.5 0 0 1-1.1 1.09c-.53.27-1.23.27-2.63.27h-7c-1.4 0-2.1 0-2.63-.27a2.5 2.5 0 0 1-1.1-1.1C4.5 20.1 4.5 19.4 4.5 18z"
                fill="currentColor"
              />
              <path
                d="M4.5 6.14C5.34 6 6.46 6 8 6h8c1.54 0 2.66 0 3.5.14V6c0-1.4 0-2.1-.27-2.63a2.5 2.5 0 0 0-1.1-1.1C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.63.27a2.5 2.5 0 0 0-1.1 1.1C4.5 3.9 4.5 4.6 4.5 6z"
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
              d="M16 6.42c2.83 0 4.24 0 5.12.82S22 9.37 22 12s0 3.95-.88 4.76c-.88.82-2.3.82-5.12.82H8c-2.83 0-4.24 0-5.12-.82S2 14.63 2 12s0-3.95.88-4.76c.88-.82 2.3-.82 5.12-.82z"
              fill="currentColor"
            />
            <path
              d="M16.1 5.02H7.9q-1.47-.01-2.63.05a12 12 0 0 0-1.08.11c-.22.04-.42-.13-.4-.35q.04-.64.31-1.18a3.2 3.2 0 0 1 2.7-1.62Q7.46 2 8.47 2h7.06q1 0 1.67.03a3.2 3.2 0 0 1 2.7 1.62q.28.54.31 1.18c.02.22-.18.39-.4.35a8 8 0 0 0-1.08-.11Q17.57 5 16.1 5.02"
              fill="currentColor"
            />
            <path
              d="M7.9 18.98h8.2q1.47.01 2.63-.05a12 12 0 0 0 1.08-.11c.22-.04.42.13.4.35q-.04.64-.31 1.18a3.2 3.2 0 0 1-2.7 1.62q-.66.04-1.67.03H8.47q-1 0-1.67-.03a3.2 3.2 0 0 1-2.7-1.62q-.28-.54-.31-1.18c-.02-.22.18-.39.4-.35a8 8 0 0 0 1.08.11q1.16.06 2.63.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSliderHorizontal;
