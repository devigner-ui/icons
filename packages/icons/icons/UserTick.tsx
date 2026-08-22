import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUserTick = forwardRef<SVGSVGElement, IconProps>(function IconUserTick(
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
            d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.08 22c0-3.87 3.85-7 8.59-7q1.45 0 2.76.37"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 18a4 4 0 0 1-1.37 3 3.97 3.97 0 0 1-6.05-.94A3.97 3.97 0 0 1 18.67 14a4 4 0 0 1 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m17.11 18 .99.99 2.13-1.97"
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
            d="M18.67 13a4 4 0 1 0 0 8 4 4 0 0 0 0-8m2.07 3.57-2.13 1.97a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-.99-.99a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.48.48 1.6-1.48a.76.76 0 0 1 1.06.04c.28.3.26.77-.04 1.06"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.76 21.5a.5.5 0 0 1-.5.5H4.08a.5.5 0 0 1-.5-.5c0-4.14 4.08-7.5 9.09-7.5q1.56 0 2.95.41a4 4 0 0 0-.37 4.65q.3.52.76.91a3.96 3.96 0 0 0 5.51-.17q.24.81.24 1.7"
            fill="currentColor"
          />
          <path
            d="M12.67 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
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
            d="M12.67 14c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18a.5.5 0 0 0 .5-.5c0-4.14-4.08-7.5-9.09-7.5"
            fill="currentColor"
          />
          <path
            d="M12.67 2c-1.18 0-2.26.41-3.12 1.1A4.96 4.96 0 0 0 8.4 9.57a4.95 4.95 0 0 0 7.56 1.18q.6-.5.99-1.18A5 5 0 0 0 12.67 2m2.59 4.46-2.67 2.46a1 1 0 0 1-.64.25 1 1 0 0 1-.66-.27l-1.23-1.24a.94.94 0 0 1 0-1.33.94.94 0 0 1 1.33 0l.59.59 2.01-1.85a.93.93 0 0 1 1.32.05c.35.39.33.99-.05 1.34"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUserTick;
