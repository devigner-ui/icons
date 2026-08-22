import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBell = forwardRef<SVGSVGElement, IconProps>(function IconBell(
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
            d="M19 9.7V9A7 7 0 1 0 5 9v.7c0 .85-.25 1.68-.72 2.38L3.13 13.8a2.77 2.77 0 0 0 1.58 4.21 27.7 27.7 0 0 0 14.58 0 2.77 2.77 0 0 0 1.58-4.2l-1.15-1.73A4.3 4.3 0 0 1 19 9.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 19c.66 1.75 2.42 3 4.5 3a4.8 4.8 0 0 0 4.5-3"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.75 9v.7c0 .85.24 1.68.7 2.38l1.1 1.72a2.8 2.8 0 0 1-1.52 4.21 26 26 0 0 1-14.06 0 2.8 2.8 0 0 1-1.52-4.2l1.1-1.73c.46-.7.7-1.53.7-2.38V9c0-3.87 3.02-7 6.75-7a6.9 6.9 0 0 1 6.75 7"
            fill="currentColor"
          />
          <path
            d="M7.24 18.55a5 5 0 0 0 9.52 0c-3.15.59-6.37.59-9.52 0"
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
            d="M8.35 20.24A4.6 4.6 0 0 0 12 22c1.49 0 2.8-.69 3.65-1.76q-3.65.5-7.3 0"
            fill="currentColor"
          />
          <path
            d="M18.75 9v.7c0 .85.24 1.68.7 2.38l1.1 1.72a2.8 2.8 0 0 1-1.52 4.21 26 26 0 0 1-14.06 0 2.8 2.8 0 0 1-1.52-4.2l1.1-1.73c.46-.7.7-1.53.7-2.38V9c0-3.87 3.02-7 6.75-7a6.9 6.9 0 0 1 6.75 7"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBell;
