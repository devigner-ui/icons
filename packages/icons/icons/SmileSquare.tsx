import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmileSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconSmileSquare(
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
              d="M9 16a5 5 0 0 0 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              d="M9.45 15.4a.75.75 0 1 0-.9 1.2 5.8 5.8 0 0 0 6.9 0 .75.75 0 1 0-.9-1.2 4.3 4.3 0 0 1-5.1 0"
              fill="currentColor"
            />
            <path
              d="M16 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
              fill="currentColor"
            />
            <path
              d="M10 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5S8.45 9 9 9s1 .67 1 1.5"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M15 12c.55 0 1-.67 1-1.5S15.55 9 15 9s-1 .67-1 1.5.45 1.5 1 1.5m-5-1.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5S8.45 9 9 9s1 .67 1 1.5m-1.6 5.05a.75.75 0 0 1 1.05-.15 4.3 4.3 0 0 0 5.1 0 .75.75 0 1 1 .9 1.2 5.8 5.8 0 0 1-6.9 0 .75.75 0 0 1-.15-1.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmileSquare;
