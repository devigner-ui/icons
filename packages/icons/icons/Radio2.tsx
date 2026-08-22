import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRadio2 = forwardRef<SVGSVGElement, IconProps>(function IconRadio2(
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
            d="M17.67 5h-10c-3 0-5 2-5 5v7c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.67 2v3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.17 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.17 11h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.17 15h.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 15h.5"
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
            d="M22.67 10v7c0 3-2 5-5 5h-10c-3 0-5-2-5-5v-7c0-2.74 1.67-4.65 4.25-4.95Q7.28 5 7.67 5h10c3 0 5 2 5 5"
            fill="currentColor"
          />
          <path
            d="M8.42 2v3h-.75q-.39 0-.75.05V2c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M8.55 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            fill="currentColor"
          />
          <path
            d="M18.55 12.25h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M15.05 16.25h-.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M18.55 16.25h-.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M8.42 2v3h-.75q-.39 0-.75.05V2c0-.41.34-.75.75-.75s.75.34.75.75"
            fill="currentColor"
          />
          <path
            d="M17.67 5h-10q-.39 0-.75.05c-2.58.3-4.25 2.21-4.25 4.95v7c0 3 2 5 5 5h10c3 0 5-2 5-5v-7c0-3-2-5-5-5M8.55 16a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m6.5.25h-.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m3.5 0h-.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.5c.41 0 .75.34.75.75s-.34.75-.75.75m0-4h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRadio2;
