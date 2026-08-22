import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLink = forwardRef<SVGSVGElement, IconProps>(function IconLink(
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
            d="M10.05 14c-1.51-1.51-1.37-4.1.3-5.78l4.85-4.86c1.67-1.68 4.25-1.82 5.75-.3 1.51 1.5 1.37 4.09-.3 5.77l-2.42 2.43"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.95 10c1.51 1.51 1.37 4.1-.3 5.78l-2.42 2.43-2.43 2.44c-1.67 1.68-4.25 1.81-5.75.3-1.51-1.51-1.37-4.1.3-5.78l2.42-2.43"
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
            d="M15.73 3.88c1.43-1.44 3.53-1.47 4.7-.3 1.16 1.17 1.12 3.28-.31 4.72l-2.42 2.43a.75.75 0 1 0 1.06 1.06l2.42-2.43c1.91-1.92 2.15-4.98.3-6.84s-4.9-1.61-6.81.3L9.82 7.7c-1.91 1.92-2.15 4.98-.3 6.84a.75.75 0 1 0 1.06-1.06c-1.17-1.17-1.13-3.28.3-4.72z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.48 9.47a.75.75 0 0 0-1.06 1.06c1.17 1.17 1.13 3.28-.3 4.72l-4.85 4.87c-1.43 1.44-3.53 1.47-4.7.3-1.16-1.17-1.12-3.28.31-4.72l2.42-2.43a.75.75 0 1 0-1.06-1.06l-2.42 2.43c-1.91 1.92-2.15 4.98-.3 6.84s4.9 1.61 6.81-.3l4.85-4.87c1.91-1.92 2.15-4.98.3-6.84"
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
            d="M15.73 3.88c1.43-1.44 3.53-1.47 4.7-.3 1.16 1.17 1.12 3.28-.31 4.72l-2.42 2.43a.75.75 0 1 0 1.06 1.06l2.42-2.43c1.91-1.92 2.15-4.98.3-6.84s-4.9-1.61-6.81.3L9.82 7.7c-1.91 1.92-2.15 4.98-.3 6.84a.75.75 0 1 0 1.06-1.06c-1.17-1.17-1.13-3.28.3-4.72z"
            fill="currentColor"
          />
          <path
            d="M14.49 9.47a.75.75 0 0 0-1.07 1.06c1.17 1.17 1.13 3.28-.3 4.72l-4.85 4.87c-1.43 1.44-3.53 1.47-4.7.3-1.16-1.17-1.12-3.28.31-4.72l2.42-2.43a.75.75 0 0 0-1.06-1.06l-2.42 2.43c-1.91 1.92-2.15 4.98-.3 6.84s4.9 1.61 6.81-.3l4.85-4.87c1.91-1.92 2.15-4.98.3-6.84"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLink;
