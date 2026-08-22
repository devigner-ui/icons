import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmileCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconSmileCircle(
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
              d="M9 16a5 5 0 0 0 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5"
              fill="currentColor"
            />
            <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
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
              d="M8.4 15.55a.75.75 0 0 1 1.05-.15 4.3 4.3 0 0 0 5.1 0 .75.75 0 1 1 .9 1.2 5.8 5.8 0 0 1-6.9 0 .75.75 0 0 1-.15-1.05"
              fill="currentColor"
            />
            <path
              d="M15 12c.55 0 1-.67 1-1.5S15.55 9 15 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
            <path
              d="M9 12c.55 0 1-.67 1-1.5S9.55 9 9 9s-1 .67-1 1.5.45 1.5 1 1.5"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m-3.6-6.45a.75.75 0 0 1 1.05-.15 4.3 4.3 0 0 0 5.1 0 .75.75 0 1 1 .9 1.2 5.8 5.8 0 0 1-6.9 0 .75.75 0 0 1-.15-1.05M16 10.5c0 .83-.45 1.5-1 1.5s-1-.67-1-1.5.45-1.5 1-1.5 1 .67 1 1.5M9 12c.55 0 1-.67 1-1.5S9.55 9 9 9s-1 .67-1 1.5.45 1.5 1 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmileCircle;
