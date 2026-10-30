import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDiamondDivided = forwardRef<SVGSVGElement, IconProps>(
  function IconDiamondDivided(
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
            d="m19.54 15.96-4.98 4.98a3.63 3.63 0 0 1-5.11 0l-6.39-6.39a3.63 3.63 0 0 1 0-5.11l5.01-5.01m2.68-2.21a3.6 3.6 0 0 1 3.81.83l6.39 6.39a3.63 3.63 0 0 1 0 5.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m6.25 6.25 11.5 11.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m17.75 6.25-11.5 11.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="m20.95 14.55-6.39 6.39a3.63 3.63 0 0 1-5.11 0l-6.39-6.39a3.63 3.63 0 0 1 0-5.11l6.39-6.39c1.4-1.4 3.7-1.4 5.11 0l6.39 6.39a3.63 3.63 0 0 1 0 5.11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m6.25 6.25 11.5 11.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m17.75 6.25-11.5 11.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="m20.95 14.55-2.67 2.67-1.06 1.06-2.67 2.67a3.6 3.6 0 0 1-5.1 0l-2.67-2.67-1.06-1.06-2.67-2.67a3.6 3.6 0 0 1 0-5.1l2.67-2.67 1.06-1.06 2.67-2.67c1.4-1.4 3.7-1.4 5.1 0l2.67 2.67 1.06 1.06 2.67 2.67c1.4 1.4 1.4 3.7 0 5.1"
              fill="currentColor"
            />
            <path
              d="m13.06 12 5.22 5.22-1.06 1.06L12 13.06l-5.22 5.22-1.06-1.06L10.94 12 5.72 6.78l1.06-1.06L12 10.94l5.22-5.22 1.06 1.06z"
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
              d="m16.51 5.01-1.96-1.96a3.6 3.6 0 0 0-5.1 0L7.49 5.01a1 1 0 0 0 0 1.42l3.81 3.81a1 1 0 0 0 1.41 0l3.81-3.81c.38-.39.38-1.03-.01-1.42"
              fill="currentColor"
            />
            <path
              d="M5.01 7.49 3.05 9.45a3.6 3.6 0 0 0 0 5.1l1.96 1.96a1 1 0 0 0 1.41 0l3.81-3.81a1 1 0 0 0 0-1.41l-3.8-3.8a1 1 0 0 0-1.42 0"
              fill="currentColor"
            />
            <path
              d="m20.95 9.45-1.96-1.96a1 1 0 0 0-1.41 0l-3.81 3.81a1 1 0 0 0 0 1.41l3.81 3.81a1 1 0 0 0 1.41 0l1.96-1.96a3.63 3.63 0 0 0 0-5.11"
              fill="currentColor"
            />
            <path
              d="m7.49 18.99 1.96 1.96c1.4 1.4 3.7 1.4 5.1 0l1.96-1.96a1 1 0 0 0 0-1.41l-3.81-3.81a1 1 0 0 0-1.41 0l-3.81 3.81a1 1 0 0 0 .01 1.41"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDiamondDivided;
