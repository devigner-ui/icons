import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTuningHorizontal = forwardRef<SVGSVGElement, IconProps>(function IconTuningHorizontal(
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
      {variant === "Broken" ? (
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
            d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M11 7H6M3 7H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M13 17h5m3 0h1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 17h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 7h-4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 17h9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11 7-9-.04"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2 17h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 7h-4"
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
          <path d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6" fill="currentColor" />
          <path d="M14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" fill="currentColor" />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M17.42 7.7a3 3 0 0 0-.03-1.5H22a.75.75 0 0 1 0 1.5z"
              fill="currentColor"
            />
            <path
              d="M11.61 6.2a3 3 0 0 0-.03 1.5H2a.75.75 0 1 1 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M6.61 16.2H2a.75.75 0 0 0 0 1.5h4.58a3 3 0 0 1 .03-1.5"
              fill="currentColor"
            />
            <path
              d="M12.42 17.7H22a.75.75 0 0 0 0-1.5h-9.6a3 3 0 0 1 .02 1.5"
              fill="currentColor"
            />
          </g>
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
          <path d="M9.5 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6" fill="currentColor" />
          <path d="M14.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6" fill="currentColor" />
          <path
            d="M9 6.2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M15 16.2a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M1.25 16.96c0-.42.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M22 6.2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTuningHorizontal;
