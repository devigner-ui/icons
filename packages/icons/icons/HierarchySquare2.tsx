import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHierarchySquare2 = forwardRef<SVGSVGElement, IconProps>(
  function IconHierarchySquare2(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.47 10.2v4.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.62 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.47 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.87 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.55 10.2a2.4 2.4 0 0 0 2.36 1.82l2.06-.01c1.57-.01 2.91 1 3.4 2.41"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M17.08 14.17a4.3 4.3 0 0 0-4.09-2.91h-.02l-2.06.01h-.01c-.76 0-1.42-.51-1.62-1.24a2.2 2.2 0 1 0-1.56-.09v4.34a2.05 2.05 0 1 0 1.5 0v-2.02q.75.48 1.68.49h.01l2.06-.01a2.8 2.8 0 0 1 2.65 1.82 2.05 2.05 0 1 0 3.29 1.62c.01-1.04-.8-1.9-1.83-2.01"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m.01 16.25a2.05 2.05 0 0 1-1.24-3.67 2.8 2.8 0 0 0-2.65-1.82l-2.06.01h-.01q-.93-.01-1.68-.49v2.02a2.05 2.05 0 1 1-1.5 0V9.95a2.2 2.2 0 0 1-1.3-2c0-1.21.99-2.2 2.2-2.2s2.2.99 2.2 2.2c0 .98-.65 1.8-1.54 2.09.2.73.86 1.24 1.62 1.24h.01l2.06-.01H13a4.3 4.3 0 0 1 4.09 2.91c1.03.11 1.84.97 1.84 2.03a2.07 2.07 0 0 1-2.06 2.04"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHierarchySquare2;
