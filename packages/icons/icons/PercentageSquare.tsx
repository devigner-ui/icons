import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPercentageSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconPercentageSquare(
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
              d="M9.68 2h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m9 15.27 6.54-6.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.41 10.37a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.95 16.09a1.23 1.23 0 1 0 0-2.46 1.23 1.23 0 0 0 0 2.46"
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
              d="M16.87 2H8.5C4.86 2 2.7 4.17 2.7 7.81v8.37c0 3.64 2.16 5.81 5.8 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.8-5.81"
              fill="currentColor"
            />
            <path
              d="M9.5 16.02a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.55-6.55a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06l-6.55 6.55a.7.7 0 0 1-.53.22"
              fill="currentColor"
            />
            <path
              d="M9.91 7.66a1.48 1.48 0 0 0 0 2.96 1.48 1.48 0 0 0 0-2.96"
              fill="currentColor"
            />
            <path
              d="M16.45 13.39a1.48 1.48 0 0 0 0 2.96 1.48 1.48 0 0 0 0-2.96"
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
              d="M16.87 2H8.5C4.85 2 2.7 4.17 2.7 7.81v8.37C2.7 19.83 4.86 22 8.5 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c0-3.64-2.17-5.81-5.81-5.81M8.43 9.14a1.48 1.48 0 0 1 2.96 0 1.48 1.48 0 0 1-2.96 0m1.07 6.88a.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l6.55-6.55a.75.75 0 0 1 1.06 0c.3.29.3.77 0 1.06l-6.55 6.55a.7.7 0 0 1-.53.22m6.95.32a1.48 1.48 0 0 1 0-2.96 1.48 1.48 0 0 1 0 2.96"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPercentageSquare;
