import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPieChart3 = forwardRef<SVGSVGElement, IconProps>(
  function IconPieChart3(
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
              d="M6.44 3.69a10 10 0 0 1 1.67-.9c1.4-.6 2.1-.89 3-.3S12 4.06 12 6v2c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h2c1.94 0 2.91 0 3.5.9.6.89.3 1.6-.29 3A10 10 0 1 1 6.44 3.68"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.5 2.31c3.51.9 6.28 3.68 7.18 7.19"
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
              d="M6.44 3.69a10 10 0 0 1 1.67-.9c1.4-.6 2.1-.89 3-.3S12 4.06 12 6v2c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h2c1.94 0 2.91 0 3.5.9.6.89.3 1.6-.29 3A10 10 0 1 1 6.44 3.68"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.77 2.13c.1-.4.52-.64.92-.54 3.78.97 6.75 3.94 7.72 7.72a.75.75 0 1 1-1.45.38 9.3 9.3 0 0 0-6.65-6.65.75.75 0 0 1-.54-.91"
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
              d="M6.44 3.69a10 10 0 0 1 1.67-.9c1.4-.6 2.1-.89 3-.3S12 4.06 12 6v2c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59h2c1.94 0 2.91 0 3.5.9.6.89.3 1.6-.29 3A10 10 0 1 1 6.44 3.68"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.77 2.13c.1-.4.52-.64.92-.54 3.78.97 6.75 3.94 7.72 7.72a.75.75 0 1 1-1.45.38 9.3 9.3 0 0 0-6.65-6.65.75.75 0 0 1-.54-.91"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPieChart3;
