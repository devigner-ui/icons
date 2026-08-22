import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPointOnMapPerspective = forwardRef<SVGSVGElement, IconProps>(
  function IconPointOnMapPerspective(
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
              d="M21 21 3 11m.5 10 8.5-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M21.12 21.12c.88-.88.88-2.3.88-5.12s0-4.24-.88-5.12m0 10.24c-.88.88-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88m18.24-10.24C20.24 10 18.82 10 16 10H8c-2.83 0-4.24 0-5.12.88m0 0C2 11.76 2 13.18 2 16s0 4.24.88 5.12m0 0"
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
              opacity={duotone ? "0.4" : "1"}
              d="M22 16c0-2.83 0-4.24-.88-5.12-.49-.5-1.14-.7-2.12-.8a164 164 0 0 0-4-.08H8c-2.04 0-3.35 0-4.25.33L21.7 20.2c.3-.9.3-2.2.3-4.2"
              fill="currentColor"
            />
            <path
              d="M10.76 15.9 2.5 11.36C2 12.26 2 13.64 2 16c0 2.67 0 4.08.74 4.96z"
              fill="currentColor"
            />
            <path
              d="M8 22h8c2.48 0 3.88 0 4.77-.6l-8.51-4.68-8.04 5.08c.87.2 2.06.2 3.78.2"
              fill="currentColor"
            />
            <path
              d="M17 2a3 3 0 0 0-.75 5.9V13a.75.75 0 1 0 1.5 0V7.9A3 3 0 0 0 17 2"
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
              d="M17 2a3 3 0 0 0-.75 5.9V13a.75.75 0 1 0 1.5 0V7.9A3 3 0 0 0 17 2"
              fill="currentColor"
            />
            <path
              d="M8 22h8c2.48 0 3.88 0 4.77-.6l-8.51-4.68-8.04 5.08c.87.2 2.06.2 3.78.2"
              fill="currentColor"
            />
            <path
              d="M10.76 15.9 2.5 11.36C2 12.26 2 13.64 2 16c0 2.67 0 4.08.74 4.96z"
              fill="currentColor"
            />
            <path
              d="M22 16c0-2.83 0-4.24-.88-5.12-.49-.5-1.14-.7-2.12-.8V13a2 2 0 1 1-4 0v-3H8c-2.04 0-3.35 0-4.25.33L21.7 20.2c.3-.9.3-2.2.3-4.2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPointOnMapPerspective;
