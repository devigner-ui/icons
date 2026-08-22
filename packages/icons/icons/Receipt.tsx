import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReceipt = forwardRef<SVGSVGElement, IconProps>(function IconReceipt(
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
            d="M7.4 19.7a1.76 1.76 0 0 1 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.79-.15c1.78 1.9 3.23 1.27 3.23-1.39V7.04C21.17 3.01 20.23 2 16.45 2H8.89C5.11 2 4.17 3.01 4.17 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.67 7h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.67 11h6"
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
            d="M7.4 19.7a1.76 1.76 0 0 1 2.79.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.79-.15c1.78 1.9 3.23 1.27 3.23-1.39V7.04C21.17 3.01 20.23 2 16.45 2H8.89C5.11 2 4.17 3.01 4.17 7.04V18.3c0 2.67 1.46 3.29 3.23 1.4"
            fill="currentColor"
          />
          <path
            d="M16.67 7.75h-8A.76.76 0 0 1 7.92 7c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M15.67 11.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M16.45 2H8.9C5.11 2 4.17 3.01 4.17 7.04V18.3c0 2.66 1.46 3.29 3.23 1.39l.01-.01c.82-.87 2.07-.8 2.78.15l1.01 1.35c.81 1.07 2.12 1.07 2.93 0l1.01-1.35a1.76 1.76 0 0 1 2.8-.15c1.77 1.9 3.22 1.27 3.22-1.39V7.04c.01-4.03-.93-5.04-4.7-5.04m-.78 9.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75m1-4h-8A.76.76 0 0 1 7.92 7c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconReceipt;
