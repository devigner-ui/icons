import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPrevious = forwardRef<SVGSVGElement, IconProps>(function IconPrevious(
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
            d="M20.91 7.22v9.57A2.56 2.56 0 0 1 17.08 19l-4.15-2.39-4.15-2.4a2.54 2.54 0 0 1 0-4.41l4.15-2.4 4.15-2.39c1.7-.98 3.83.24 3.83 2.21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.43 18.18V5.82"
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
            d="M20.91 7.22v9.57A2.56 2.56 0 0 1 17.08 19l-4.15-2.39-4.15-2.4a2.54 2.54 0 0 1 0-4.41l4.15-2.4 4.15-2.39c1.7-.98 3.83.24 3.83 2.21"
            fill="currentColor"
          />
          <path
            d="M4.43 18.93a.76.76 0 0 1-.75-.75V5.82c0-.41.34-.75.75-.75s.75.34.75.75v12.36c0 .41-.34.75-.75.75"
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
            d="M20.91 7.22v9.57A2.56 2.56 0 0 1 17.08 19l-4.15-2.39-4.15-2.4a2.54 2.54 0 0 1 0-4.41l4.15-2.4 4.15-2.39c1.7-.98 3.83.24 3.83 2.21"
            fill="currentColor"
          />
          <path
            d="M4.43 18.93a.76.76 0 0 1-.75-.75V5.82c0-.41.34-.75.75-.75s.75.34.75.75v12.36c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPrevious;
