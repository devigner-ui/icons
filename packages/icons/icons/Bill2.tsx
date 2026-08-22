import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBill2 = forwardRef<SVGSVGElement, IconProps>(function IconBill2(
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
            d="M4.34 2.5v11.97c0 .98.46 1.91 1.25 2.5l5.21 3.9c1.11.83 2.64.83 3.75 0l5.21-3.9a3.1 3.1 0 0 0 1.25-2.5V2.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            d="M2.67 2.5h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 8h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 13h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M4.34 2.5v11.97c0 .98.46 1.91 1.25 2.5l5.21 3.9c1.11.83 2.64.83 3.75 0l5.21-3.9a3.1 3.1 0 0 0 1.25-2.5V2.5z"
            fill="currentColor"
          />
          <path
            d="M22.67 3.25h-20a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M16.67 8.75h-8A.76.76 0 0 1 7.92 8c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M16.67 13.75h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M22.67 3.25h-20a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M4.34 2.5v11.97c0 .98.46 1.91 1.25 2.5l5.21 3.9c1.11.83 2.64.83 3.75 0l5.21-3.9a3.1 3.1 0 0 0 1.25-2.5V2.5zm12.33 11.25h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m0-5h-8A.76.76 0 0 1 7.92 8c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBill2;
