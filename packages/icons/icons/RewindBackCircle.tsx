import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRewindBackCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconRewindBackCircle(
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
              d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m11 8.07-3.22 2.3a2 2 0 0 0 0 3.26l3.22 2.3m5.5-.87V8.94a1 1 0 0 0-1.58-.81l-4.28 3.06a1 1 0 0 0 0 1.62l4.28 3.06a1 1 0 0 0 1.58-.81"
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
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20"
              fill="currentColor"
            />
            <path
              d="M10.56 7.46a.75.75 0 1 1 .88 1.22l-3.23 2.3c-.7.5-.7 1.54 0 2.04l3.23 2.3a.75.75 0 1 1-.88 1.22l-3.22-2.3a2.75 2.75 0 0 1 0-4.48z"
              fill="currentColor"
            />
            <path
              d="M16.5 15.13V8.87a1 1 0 0 0-1.56-.83l-4.7 3.13a1 1 0 0 0 0 1.66l4.7 3.13a1 1 0 0 0 1.56-.83"
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
              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20M10.56 7.46a.75.75 0 1 1 .88 1.22l-3.23 2.3c-.7.5-.7 1.54 0 2.04l3.23 2.3a.75.75 0 0 1-.88 1.22l-3.22-2.3a2.75 2.75 0 0 1 0-4.48zm5.94 7.67V8.87a1 1 0 0 0-1.55-.83l-4.7 3.13a1 1 0 0 0 0 1.66l4.7 3.13a1 1 0 0 0 1.55-.83"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRewindBackCircle;
