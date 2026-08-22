import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeyMinimalistic2 = forwardRef<SVGSVGElement, IconProps>(
  function IconKeyMinimalistic2(
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
              cx="15"
              cy="9.00049"
              r="7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="15"
              cy="9.00049"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m3.5 20.5 6-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6 21-1.5-1.5m2-2L8 19"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 16a7 7 0 1 0 0-14 7 7 0 0 0 0 14m0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.6 14.45a7 7 0 0 1-1.05-1.06l-6.58 6.58a.75.75 0 1 0 1.06 1.06l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97z"
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
              d="M15 16a7 7 0 1 0-5.45-2.6l-5.58 5.57-1 1a.75.75 0 1 0 1.06 1.06l.47-.47.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97.94-.94.97.97a.75.75 0 0 0 1.06-1.06l-.97-.97 3.05-3.05A7 7 0 0 0 15 16m0-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeyMinimalistic2;
