import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCallDroppedRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconCallDroppedRounded(
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
              d="M15 4v1c0 1.89 0 2.83.59 3.41C16.17 9 17.1 9 19 9h1.5m0 0L18 7m2.5 2L18 11"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10.04 5.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
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
              d="M15 4v1c0 1.89 0 2.83.59 3.41C16.17 9 17.1 9 19 9h1.5m0 0L18 7m2.5 2L18 11"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m10.04 5.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
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
              d="M15 4v1c0 1.89 0 2.83.59 3.41C16.17 9 17.1 9 19 9h1.5m0 0L18 7m2.5 2L18 11"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="currentColor"
            />
            <path
              d="m10.04 5.32.65 1.16a2.8 2.8 0 0 1-.58 3.35s-1.11 1.12.91 3.15 3.15.9 3.15.9a2.8 2.8 0 0 1 3.35-.57l1.16.65c1.59.89 1.78 3.1.38 4.5a4.6 4.6 0 0 1-3 1.53c-1.9.08-5.14-.4-8.4-3.66-3.24-3.25-3.73-6.49-3.65-8.4.04-1.13.7-2.16 1.53-3 1.4-1.39 3.61-1.2 4.5.39"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCallDroppedRounded;
