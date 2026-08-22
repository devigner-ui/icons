import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBook3 = forwardRef<SVGSVGElement, IconProps>(function IconBook3(
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
            d="M4.17 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10l-.01.42"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.02 15h14.15v3.5a3.5 3.5 0 0 1-3.5 3.5h-10a3.5 3.5 0 0 1-3.5-3.5v-.65A2.86 2.86 0 0 1 7.02 15"
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
            d="M8.67 10.5h5"
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
            d="M21.17 7v8H7.02a2.86 2.86 0 0 0-2.85 2.85V7c0-4 1-5 5-5h7c4 0 5 1 5 5"
            fill="currentColor"
          />
          <path
            d="M21.17 15v3.5a3.5 3.5 0 0 1-3.5 3.5h-10a3.5 3.5 0 0 1-3.5-3.5v-.65A2.86 2.86 0 0 1 7.02 15z"
            fill="currentColor"
          />
          <path
            d="M16.67 7.75h-8A.76.76 0 0 1 7.92 7c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M13.67 11.25h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
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
            d="M21.17 16v2.5a3.5 3.5 0 0 1-3.5 3.5h-10a3.5 3.5 0 0 1-3.5-3.5v-.65A2.86 2.86 0 0 1 7.02 15h13.15a1 1 0 0 1 1 1"
            fill="currentColor"
          />
          <path
            d="M16.17 2h-7c-4 0-5 1-5 5v7.58a4.3 4.3 0 0 1 2.85-1.08h13.15a1 1 0 0 0 1-1V7c0-4-1-5-5-5m-2.5 8.75h-5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75m3-3.5h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBook3;
