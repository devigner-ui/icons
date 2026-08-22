import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRewindForwardCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconRewindForwardCircle(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m13 8.07 3.22 2.3a2 2 0 0 1 0 3.26L13 15.93m-5.5-.87V8.94a1 1 0 0 1 1.58-.81l4.28 3.06a1 1 0 0 1 0 1.62l-4.28 3.06a1 1 0 0 1-1.58-.81"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M13.44 7.46a.75.75 0 0 0-.88 1.22l3.23 2.3c.7.5.7 1.54 0 2.04l-3.23 2.3a.75.75 0 0 0 .88 1.22l3.22-2.3a2.75 2.75 0 0 0 0-4.48z"
              fill="currentColor"
            />
            <path
              d="M7.5 15.13V8.87a1 1 0 0 1 1.56-.83l4.7 3.13a1 1 0 0 1 0 1.66l-4.7 3.13a1 1 0 0 1-1.56-.83"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m1.44-14.54a.75.75 0 1 0-.88 1.22l3.23 2.3c.7.5.7 1.54 0 2.04l-3.23 2.3a.75.75 0 0 0 .88 1.22l3.22-2.3a2.75 2.75 0 0 0 0-4.48zM7.5 15.13V8.87a1 1 0 0 1 1.55-.83l4.7 3.13a1 1 0 0 1 0 1.66l-4.7 3.13a1 1 0 0 1-1.55-.83"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRewindForwardCircle;
