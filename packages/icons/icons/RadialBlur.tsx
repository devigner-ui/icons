import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRadialBlur = forwardRef<SVGSVGElement, IconProps>(
  function IconRadialBlur(
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
              d="M3.34 17A10 10 0 1 0 20.66 7 10 10 0 0 0 3.34 17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              stroke="currentColor"
            />
            <path
              d="M15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              stroke="currentColor"
            />
            <path
              d="M11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              stroke="currentColor"
            />
            <path
              d="M11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              stroke="currentColor"
            />
            <path
              d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M18.25 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
              fill="currentColor"
            />
            <path
              d="M5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
              fill="currentColor"
            />
            <path
              d="M18.25 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
              fill="currentColor"
            />
            <path
              d="M5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
              fill="currentColor"
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="12"
              r="10"
              fill="currentColor"
            />
            <path
              d="M15.5 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              fill="currentColor"
            />
            <path
              d="M11 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              fill="currentColor"
            />
            <path
              d="M5.75 9a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
              fill="currentColor"
            />
            <path
              d="M10.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M15 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M19 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"
              fill="currentColor"
            />
            <path
              d="M19 14.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"
              fill="currentColor"
            />
            <path
              d="M15.5 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
              fill="currentColor"
            />
            <path
              d="M9.75 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
              fill="currentColor"
            />
            <path
              d="M5.75 13.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5"
              fill="currentColor"
            />
            <path
              d="M10.5 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
              fill="currentColor"
            />
            <path
              d="M14.25 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
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
              d="M17 20.66A10 10 0 1 1 7 3.34a10 10 0 0 1 10 17.32M14.25 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m0 4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M11 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M9.75 11a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M15 18.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.75 19a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m0-12.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m8.5 2.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5M6.5 9.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0m11.75 3.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m-11.75.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRadialBlur;
