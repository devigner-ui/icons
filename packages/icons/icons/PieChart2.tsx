import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPieChart2 = forwardRef<SVGSVGElement, IconProps>(
  function IconPieChart2(
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
              d="M6.22 4.6q.67-.44 1.4-.77c1.37-.61 2.05-.92 2.97-.33.91.6.91 1.56.91 3.5v1.5c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59H17c1.94 0 2.9 0 3.5.91.6.92.28 1.6-.33 2.97A9.5 9.5 0 1 1 6.22 4.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M21.45 7.07a8 8 0 0 0-4.52-4.52C15.4 1.95 14 3.35 14 5v4a1 1 0 0 0 1 1h4c1.66 0 3.05-1.39 2.45-2.93"
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
              d="M6.22 4.6q.67-.44 1.4-.77c1.37-.61 2.05-.92 2.97-.33.91.6.91 1.56.91 3.5v1.5c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59H17c1.94 0 2.9 0 3.5.91.6.92.28 1.6-.33 2.97A9.5 9.5 0 1 1 6.22 4.6"
              fill="currentColor"
            />
            <path
              d="M21.45 7.07a8 8 0 0 0-4.52-4.52C15.4 1.95 14 3.35 14 5v4a1 1 0 0 0 1 1h4c1.66 0 3.05-1.39 2.45-2.93"
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
              d="M6.22 4.6q.67-.44 1.4-.77c1.37-.61 2.05-.92 2.97-.33.91.6.91 1.56.91 3.5v1.5c0 1.89 0 2.83.59 3.41.58.59 1.52.59 3.41.59H17c1.94 0 2.9 0 3.5.91.6.92.28 1.6-.33 2.97A9.5 9.5 0 1 1 6.22 4.6"
              fill="currentColor"
            />
            <path
              d="M21.45 7.07a8 8 0 0 0-4.52-4.52C15.4 1.95 14 3.35 14 5v4a1 1 0 0 0 1 1h4c1.66 0 3.05-1.39 2.45-2.93"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPieChart2;
