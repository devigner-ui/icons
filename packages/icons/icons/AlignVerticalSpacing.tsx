import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAlignVerticalSpacing = forwardRef<SVGSVGElement, IconProps>(
  function IconAlignVerticalSpacing(
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
              d="M22 3H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 21H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M20 12c0-1.89 0-2.83-.59-3.41C18.83 8 17.9 8 16 8H8c-1.89 0-2.83 0-3.41.59C4 9.17 4 10.1 4 12s0 2.83.59 3.41C5.17 16 6.1 16 8 16h8c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.25 21c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0-18c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3"
                fill="currentColor"
              />
            </g>
            <path
              d="M4 12c0 1.89 0 2.83.59 3.41C5.17 16 6.1 16 8 16h8c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41s0-2.83-.59-3.41C18.83 8 17.9 8 16 8H8c-1.89 0-2.83 0-3.41.59C4 9.17 4 10.1 4 12"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.25 21c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m0-18c0-.41.34-.75.75-.75h20a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 3"
              fill="currentColor"
            />
            <path
              d="M4 12c0 1.89 0 2.83.59 3.41C5.17 16 6.1 16 8 16h8c1.89 0 2.83 0 3.41-.59.59-.58.59-1.52.59-3.41s0-2.83-.59-3.41C18.83 8 17.9 8 16 8H8c-1.89 0-2.83 0-3.41.59C4 9.17 4 10.1 4 12"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconAlignVerticalSpacing;
