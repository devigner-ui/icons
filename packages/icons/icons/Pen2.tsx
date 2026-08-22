import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPen2 = forwardRef<SVGSVGElement, IconProps>(function IconPen2(
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
            d="M4 22h16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m14.63 2.92-.74.74-6.82 6.82c-.46.46-.7.7-.89.95q-.35.45-.6.97c-.14.29-.24.6-.45 1.22l-.87 2.62-.22.64a.85.85 0 0 0 1.08 1.08l.64-.22 2.62-.87c.62-.2.93-.31 1.22-.45q.52-.25.97-.6c.26-.2.49-.43.95-.9l6.82-6.8.74-.75a3.15 3.15 0 0 0-4.45-4.45"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.89 3.66s.1 1.58 1.48 2.97a5 5 0 0 0 2.97 1.48M5.76 17.74l-1.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.25 22c0-.41.34-.75.75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.08 7.37a3.15 3.15 0 0 0-4.45-4.45l-.7.71.02.1a7 7 0 0 0 4.42 4.35z"
            fill="currentColor"
          />
          <path
            d="m13.95 3.6-.03.03.03.09a7 7 0 0 0 4.42 4.36l-6.85 6.85c-.46.46-.7.7-.95.9q-.45.34-.97.6c-.29.13-.6.23-1.22.44l-3.27 1.09a.85.85 0 0 1-1.07-1.07l1.1-3.27c.2-.62.3-.93.44-1.22q.24-.52.6-.97c.2-.26.43-.49.89-.95z"
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
            d="M3.25 22c0-.41.34-.75.75-.75h16a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M11.52 14.93 17.44 9a8.2 8.2 0 0 1-4.45-4.45l-5.92 5.92c-.46.46-.7.7-.89.95q-.35.45-.6.97c-.14.29-.24.6-.45 1.22l-1.09 3.26a.85.85 0 0 0 1.08 1.08l3.26-1.1c.62-.2.93-.3 1.22-.44q.52-.25.97-.6c.26-.2.49-.43.95-.9"
            fill="currentColor"
          />
          <path
            d="M19.08 7.37a3.15 3.15 0 0 0-4.45-4.45l-.71.71.03.1a7 7 0 0 0 4.42 4.35z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPen2;
