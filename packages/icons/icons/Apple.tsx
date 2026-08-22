import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconApple = forwardRef<SVGSVGElement, IconProps>(function IconApple(
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.26 19.36c.55-.84.75-1.26 1.17-2.2-3.08-1.17-3.58-5.56-.53-7.24a4.6 4.6 0 0 0-3.47-1.84c-.89 0-1.5.23-2.05.44-.46.18-.89.34-1.4.34-.56 0-1.05-.18-1.57-.36-.57-.2-1.16-.42-1.9-.42-1.39 0-2.86.85-3.8 2.29-1.31 2.04-1.09 5.87 1.04 9.14.76 1.17 1.78 2.48 3.11 2.49.55.01.92-.16 1.32-.34.46-.2.95-.43 1.81-.43.86-.01 1.35.22 1.8.43.39.18.75.34 1.29.34 1.34-.01 2.42-1.47 3.18-2.64"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.68 2.07a4 4 0 0 1-.88 2.95 3.6 3.6 0 0 1-2.79 1.42c-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49"
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
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.77 19.16c.59-.9.81-1.36 1.26-2.37-3.32-1.26-3.85-5.99-.57-7.8A5 5 0 0 0 16.72 7c-.96 0-1.62.25-2.21.48-.5.19-.95.36-1.51.36-.6 0-1.13-.19-1.69-.39A6 6 0 0 0 9.27 7c-1.49 0-3.08.91-4.09 2.47-1.42 2.2-1.17 6.32 1.12 9.84.82 1.26 1.92 2.67 3.35 2.69.6.01.99-.17 1.42-.36.49-.22 1.02-.46 1.95-.46.93-.01 1.45.24 1.94.46.42.19.8.37 1.39.36 1.44-.02 2.6-1.58 3.42-2.84"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.51 2a4 4 0 0 1-.88 2.95 3.6 3.6 0 0 1-2.79 1.42c-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.77 19.16c.59-.9.81-1.36 1.26-2.37-3.32-1.26-3.85-5.99-.57-7.8A5 5 0 0 0 16.72 7c-.96 0-1.62.25-2.21.48-.5.19-.95.36-1.51.36-.6 0-1.13-.19-1.69-.39A6 6 0 0 0 9.26 7c-1.49 0-3.08.91-4.09 2.47-1.42 2.2-1.17 6.32 1.12 9.84.82 1.26 1.92 2.67 3.35 2.69.6.01.99-.17 1.42-.36.49-.22 1.02-.46 1.95-.46.93-.01 1.45.24 1.94.46.42.19.8.37 1.39.36 1.45-.02 2.61-1.58 3.43-2.84"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.51 2a4 4 0 0 1-.88 2.95 3.6 3.6 0 0 1-2.79 1.42c-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconApple;
