import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBlend = forwardRef<SVGSVGElement, IconProps>(function IconBlend(
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
            d="M22.64 12a6 6 0 0 1-10 4.46 5.95 5.95 0 0 0 0-8.92 6 6 0 0 1 10 4.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.64 12c0 1.77-.77 3.37-2 4.46a6 6 0 1 1 2-4.46"
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
            d="M22.64 12a6 6 0 0 1-10 4.46 5.95 5.95 0 0 0 0-8.92 6 6 0 0 1 10 4.46"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.64 12c0 1.77-.77 3.37-2 4.46a6 6 0 1 1 2-4.46"
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
            d="M22.64 12a6 6 0 0 1-8.12 5.61c-.32-.12-.38-.52-.16-.78a7.4 7.4 0 0 0 0-9.66c-.22-.25-.16-.66.16-.79A6 6 0 0 1 22.64 12"
            fill="currentColor"
          />
          <path
            d="M14.64 12c0 1.77-.77 3.37-2 4.46a6 6 0 1 1 2-4.46"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBlend;
