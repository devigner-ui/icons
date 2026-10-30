import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScissors = forwardRef<SVGSVGElement, IconProps>(function IconScissors(
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
      {variant === "Broken" ? (
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
            d="M16.4 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5 21.25a.75.75 0 0 1 0 1.5zM8.75 19v.75h-1.5V19zm-.5 1.87a.75.75 0 0 1-1.3-.74zm9.1-19.24a.75.75 0 0 1 1.3.74zM2.75 19c0 1.24 1 2.25 2.25 2.25v1.5A3.75 3.75 0 0 1 1.25 19zm4.5 0c0-1.24-1-2.25-2.25-2.25v-1.5A3.75 3.75 0 0 1 8.75 19zM5 16.75c-1.24 0-2.25 1-2.25 2.25h-1.5A3.75 3.75 0 0 1 5 15.25zm1.94 3.38 10.4-18.5 1.31.74-10.4 18.5z"
            fill="currentColor"
          />
        </svg>
      ) : !fill ? (
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
            d="M16.4 20.5 6 2m16 17a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M7.6 20.5 18 2M2 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
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
            d="M6.65 1.63a.75.75 0 1 0-1.3.74L15.7 20.79a3.75 3.75 0 1 0-.13-3.3z"
            fill="currentColor"
          />
          <path
            d="M17.35 1.63a.75.75 0 1 1 1.3.74L8.3 20.79a3.75 3.75 0 1 1 .13-3.3z"
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
            d="M6.65 1.63a.75.75 0 0 0-1.3.74l5.79 10.3-2.7 4.82a3.75 3.75 0 1 0-.14 3.3L12 14.2l3.7 6.59a3.75 3.75 0 1 0-.13-3.3l-2.71-4.82 5.8-10.3a.75.75 0 0 0-1.31-.74L12 11.14z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScissors;
