import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTicket3 = forwardRef<SVGSVGElement, IconProps>(function IconTicket3(
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
            d="M20.17 12.5a2.5 2.5 0 0 1 2.5-2.5V9c0-4-1-5-5-5h-10c-4 0-5 1-5 5v.5a2.5 2.5 0 0 1 0 5v.5c0 4 1 5 5 5h10c4 0 5-1 5-5a2.5 2.5 0 0 1-2.5-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.67 4v16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 5"
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
            d="M10.67 9.08V6.25a.76.76 0 0 1-.75-.75V3.25H7.67C3.26 3.25 1.92 4.59 1.92 9v.5c0 .41.34.75.75.75.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75a.76.76 0 0 0-.75.75v.5c0 4.41 1.34 5.75 5.75 5.75h2.25V18.5c0-.41.34-.75.75-.75v-2.83a.76.76 0 0 1-.75-.75V9.83c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.92 12.5c0 .96.79 1.75 1.75 1.75.41 0 .75.34.75.75 0 4.41-1.34 5.75-5.75 5.75h-6.25V18.5a.76.76 0 0 0-.75-.75v-2.83c.41 0 .75-.34.75-.75V9.83a.76.76 0 0 0-.75-.75V6.25c.41 0 .75-.34.75-.75V3.25h6.25c4.41 0 5.75 1.34 5.75 5.75v1c0 .41-.34.75-.75.75-.96 0-1.75.79-1.75 1.75"
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
            d="M22.67 10.75c.41 0 .75-.34.75-.75V9c0-4.41-1.34-5.75-5.75-5.75h-6.25V5.5c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V3.25H7.67c-4.4 0-5.75 1.34-5.75 5.75v.5c0 .41.34.75.75.75.96 0 1.75.79 1.75 1.75s-.79 1.75-1.75 1.75a.76.76 0 0 0-.75.75v.5c0 4.41 1.34 5.75 5.75 5.75h2.25V18.5c0-.41.34-.75.75-.75s.75.34.75.75v2.25h6.25c4.41 0 5.75-1.34 5.75-5.75a.76.76 0 0 0-.75-.75c-.96 0-1.75-.79-1.75-1.75s.8-1.75 1.75-1.75m-11.25 3.42c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V9.83c0-.41.34-.75.75-.75s.75.34.75.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTicket3;
