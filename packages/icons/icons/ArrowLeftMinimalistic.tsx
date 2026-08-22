import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowLeftMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowLeftMinimalistic(
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
              d="M10.24 5.93 4.17 12l6.07 6.07"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.17 12H4.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M8.48 2h8.37c3.65 0 5.82 2.17 5.82 5.81v8.37c0 3.64-2.17 5.81-5.81 5.81H8.48c-3.64.01-5.81-2.16-5.81-5.8V7.81C2.67 4.17 4.84 2 8.48 2"
              fill="currentColor"
            />
            <path
              d="m6.14 11.47 4.29-4.29a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-3.01 3.01h10.19c.41 0 .75.34.75.75s-.34.75-.75.75H8.48l3.01 3.01c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-4.29-4.29a.75.75 0 0 1 0-1.06"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m1.81 10.75H8.48l3.01 3.01c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-4.29-4.29a.75.75 0 0 1 0-1.06l4.29-4.29a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-3.01 3.01h10.19c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowLeftMinimalistic;
