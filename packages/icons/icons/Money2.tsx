import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMoney2 = forwardRef<SVGSVGElement, IconProps>(function IconMoney2(
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
            d="M17.67 20.5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 9h1c3 0 4-1 4-4V4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 9h-1c-3 0-4-1-4-4V4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 15h1c3 0 4 1 4 4v1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 15h-1c-3 0-4 1-4 4v1"
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
            d="M22.67 9v6h-1c-3 0-4 1-4 4v1.5h-10V19c0-3-1-4-4-4h-1V9h1c3 0 4-1 4-4V3.5h10V5c0 3 1 4 4 4z"
            fill="currentColor"
          />
          <path d="M12.67 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="currentColor" />
          <path
            d="M7.67 3.5V5c0 3-1 4-4 4h-1v-.5c0-3.5 2-5 5-5"
            fill="currentColor"
          />
          <path
            d="M22.67 8.5V9h-1c-3 0-4-1-4-4V3.5c3 0 5 1.5 5 5"
            fill="currentColor"
          />
          <path
            d="M7.67 19v1.5c-3 0-5-1.5-5-5V15h1c3 0 4 1 4 4"
            fill="currentColor"
          />
          <path
            d="M22.67 15v.5c0 3.5-2 5-5 5V19c0-3 1-4 4-4z"
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
          <path d="M12.67 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="currentColor" />
          <path
            d="M17.67 3.5h-10c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5M7.67 19c0-2.82-.9-3.86-3.5-3.98V8.98c2.6-.12 3.5-1.16 3.5-3.98h10c0 2.82.91 3.86 3.5 3.98v6.04c-2.59.12-3.5 1.16-3.5 3.98z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMoney2;
