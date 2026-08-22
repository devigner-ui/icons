import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHierarchy = forwardRef<SVGSVGElement, IconProps>(
  function IconHierarchy(
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
              d="M5.92 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M5.67 9v7"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.8 9a4.06 4.06 0 0 0 3.94 3.04l3.43-.01a6 6 0 0 1 5.67 4.01"
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
              d="M5.92 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
              fill="currentColor"
            />
            <path
              d="M5.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              d="M19.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.84 15.98a6.9 6.9 0 0 0-6.54-4.65h-.03l-3.53.01a3.4 3.4 0 0 1-3.29-2.49V7a.76.76 0 0 0-.77-.76.75.75 0 0 0-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76V11.6a5 5 0 0 0 3.28 1.26h.02l3.53-.01h.02a5.4 5.4 0 0 1 5.09 3.62.76.76 0 0 0 .97.47.74.74 0 0 0 .48-.96"
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
              d="M5.92 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
              fill="currentColor"
            />
            <path
              d="M5.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              d="M19.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              d="M19.84 15.98a6.9 6.9 0 0 0-6.54-4.65h-.03l-3.53.01a3.4 3.4 0 0 1-3.29-2.49V7.01a.76.76 0 0 0-.77-.76.75.75 0 0 0-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76v-6.62a5 5 0 0 0 3.28 1.26h.02l3.53-.01h.02a5.4 5.4 0 0 1 5.09 3.62.8.8 0 0 0 .98.48c.4-.14.61-.58.47-.98"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHierarchy;
