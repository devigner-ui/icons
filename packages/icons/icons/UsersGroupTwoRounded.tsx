import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUsersGroupTwoRounded = forwardRef<SVGSVGElement, IconProps>(
  function IconUsersGroupTwoRounded(
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
              cx="12"
              cy="6.00049"
              r="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 9c1.66 0 3-1.12 3-2.5S19.66 4 18 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 9C4.34 9 3 7.88 3 6.5S4.34 4 6 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse
              cx="12"
              cy="17.0005"
              rx="6"
              ry="4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20 19c1.75-.38 3-1.36 3-2.5s-1.25-2.11-3-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4 19c-1.75-.38-3-1.36-3-2.5s1.25-2.11 3-2.5"
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
              d="M15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.5 7.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0"
              fill="currentColor"
            />
            <path
              d="M18 16.5c0 1.93-2.69 3.5-6 3.5s-6-1.57-6-3.5S8.69 13 12 13s6 1.57 6 3.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 16.5c0 1.38-1.8 2.5-4 2.5s-4-1.12-4-2.5 1.8-2.5 4-2.5 4 1.12 4 2.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 16.5C2 17.88 3.8 19 6 19s4-1.12 4-2.5S8.2 14 6 14s-4 1.12-4 2.5"
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
              d="M15.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
              fill="currentColor"
            />
            <path
              d="M18 16.5c0 1.93-2.69 3.5-6 3.5s-6-1.57-6-3.5S8.69 13 12 13s6 1.57 6 3.5"
              fill="currentColor"
            />
            <path
              d="M7.12 5q.27 0 .52.05a5 5 0 0 0-.03 4.85q-.24.04-.49.04a2.5 2.5 0 0 1-2.56-2.47A2.5 2.5 0 0 1 7.12 5"
              fill="currentColor"
            />
            <path
              d="M5.45 18.99a3.8 3.8 0 0 1-.95-2.49c0-.94.36-1.76.9-2.42-1.9.14-3.4 1.19-3.4 2.45s1.52 2.32 3.45 2.46"
              fill="currentColor"
            />
            <path
              d="M17 7.5q-.01 1.32-.61 2.4.24.04.49.04c1.41 0 2.56-1.1 2.56-2.47a2.52 2.52 0 0 0-3.08-2.42c.4.72.64 1.56.64 2.45"
              fill="currentColor"
            />
            <path
              d="M18.55 18.99c1.93-.14 3.45-1.19 3.45-2.46 0-1.26-1.5-2.3-3.4-2.45.54.66.9 1.48.9 2.42 0 .97-.38 1.8-.95 2.49"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconUsersGroupTwoRounded;
