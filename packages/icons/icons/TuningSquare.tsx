import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTuningSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconTuningSquare(
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
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="8"
              cy="10.0005"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="2"
              cy="2"
              r="2"
              transform="matrix(1 0 0 -1 14 16.0005)"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 14v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 10V5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 5v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 19v-1"
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
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22"
              fill="currentColor"
            />
            <path
              d="M16 10.75a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v5c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M7.25 14a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M16 19.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M7.25 5a.75.75 0 1 1 1.5 0v1a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 16.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5m0-1.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.75 10a2.75 2.75 0 1 0-5.5 0 2.75 2.75 0 0 0 5.5 0m-1.5 0a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
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
              d="M16 15.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M9.25 10a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 22c-4.71 0-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22m6.75-8a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0M8 7.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5m8 3.5a.75.75 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v5c0 .41-.34.75-.75.75M7.25 14a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-1.5 0zM16 19.75a.75.75 0 0 1-.75-.75v-1a.75.75 0 0 1 1.5 0v1c0 .41-.34.75-.75.75M7.25 5a.75.75 0 1 1 1.5 0v1a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTuningSquare;
