import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSortHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconSortHorizontal(
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
              d="M18 8H6m0 0 4.13-4M6 8l4.13 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 16h12m0 0-4.12-4M18 16l-4.12 4"
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
              d="M10.88 4a.75.75 0 0 0-1.28-.54l-4.12 4a.75.75 0 0 0 0 1.08l4.12 4a.75.75 0 0 0 1.28-.54V8.75H18a.75.75 0 0 0 0-1.5h-7.12z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.13 12a.75.75 0 0 1 1.27-.54l4.12 4a.75.75 0 0 1 0 1.08l-4.12 4a.75.75 0 0 1-1.28-.54v-3.25H6a.75.75 0 0 1 0-1.5h7.13z"
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
              d="M13.13 12a.75.75 0 0 1 1.27-.54l4.12 4a.75.75 0 0 1 0 1.08l-4.12 4a.75.75 0 0 1-1.28-.54v-3.25H6a.75.75 0 0 1 0-1.5h7.13z"
              fill="currentColor"
            />
            <path
              d="M10.88 4a.75.75 0 0 0-1.28-.54l-4.12 4a.75.75 0 0 0 0 1.08l4.12 4a.75.75 0 0 0 1.28-.54V8.75H18a.75.75 0 0 0 0-1.5h-7.12z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSortHorizontal;
