import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWeight = forwardRef<SVGSVGElement, IconProps>(function IconWeight(
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
            d="M10.67 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4c-5 0-7 2-7 7v6c0 5 2 7 7 7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.92 8.29a7.9 7.9 0 0 0-10.5 0l2.18 3.5a4.6 4.6 0 0 1 6.14 0z"
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
            d="M8.67 22h8c3 0 5-2 5-5V7c0-3-2-5-5-5h-8c-3 0-5 2-5 5v10c0 3 2 5 5 5"
            fill="currentColor"
          />
          <path
            d="M18.17 8a8.27 8.27 0 0 0-11 0 .4.4 0 0 0-.07.48l2.18 3.5q.1.14.26.17.17.02.3-.09a4.24 4.24 0 0 1 5.64 0q.11.09.25.09h.05a.4.4 0 0 0 .26-.17l2.18-3.5c.12-.15.09-.35-.05-.48"
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
            d="M16.67 2h-8c-3 0-5 2-5 5v10c0 3 2 5 5 5h8c3 0 5-2 5-5V7c0-3-2-5-5-5m1.57 6.48-2.18 3.5a.4.4 0 0 1-.26.17h-.05a.4.4 0 0 1-.25-.09 4.24 4.24 0 0 0-5.64 0 .37.37 0 0 1-.56-.08l-2.18-3.5c-.12-.15-.09-.35.05-.48a8.27 8.27 0 0 1 11 0c.14.13.17.33.07.48"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWeight;
