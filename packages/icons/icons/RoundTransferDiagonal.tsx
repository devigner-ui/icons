import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoundTransferDiagonal = forwardRef<SVGSVGElement, IconProps>(
  function IconRoundTransferDiagonal(
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
              d="m6.5 4 7.38 8V7.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.38 19.88 9.88 12v4.5"
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
              d="M2 12a10 10 0 0 0 15.08 8.62A10 10 0 0 0 22 12a10 10 0 0 0-20 0"
              fill="currentColor"
            />
            <path
              d="M13.13 7.5v2.59l-6.21-6.7q-.66.38-1.24.86l7.65 8.26a.75.75 0 0 0 1.3-.5V7.5a.75.75 0 1 0-1.5 0"
              fill="currentColor"
            />
            <path
              d="M10.42 11.48a.75.75 0 0 0-1.3.52v4.5a.75.75 0 0 0 1.5 0v-2.63l6.46 6.75q.65-.39 1.24-.87z"
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
              d="M12 22A10 10 0 0 1 5.68 4.25l7.65 8.26a.75.75 0 0 0 1.3-.51V7.5a.75.75 0 0 0-1.5 0v2.59l-6.21-6.7a10 10 0 0 1 11.4 16.36l-7.9-8.27a.75.75 0 0 0-1.3.52v4.5a.75.75 0 0 0 1.5 0v-2.63l6.46 6.75A10 10 0 0 1 12 22"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRoundTransferDiagonal;
