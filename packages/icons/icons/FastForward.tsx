import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFastForward = forwardRef<SVGSVGElement, IconProps>(function IconFastForward(
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
            d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83q.3-.18.49-.41v-2.56a2 2 0 0 0-.49-.41L8.1 8.49 4.93 6.67A1.94 1.94 0 0 0 2 8.34Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.68 6.65a1.95 1.95 0 0 0-2.93 1.69v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83a1.95 1.95 0 0 0 0-3.38l-2.18-1.26"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83q.3-.18.49-.41v-2.56a2 2 0 0 0-.49-.41L8.1 8.49 4.93 6.67A1.94 1.94 0 0 0 2 8.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.76 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83a1.95 1.95 0 0 0 0-3.38l-3.17-1.83-3.17-1.82a1.94 1.94 0 0 0-2.93 1.67"
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
            d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65A1.95 1.95 0 0 0 2 8.34"
            fill="currentColor"
          />
          <path
            d="M11.76 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83a1.96 1.96 0 0 0 0-3.38l-3.17-1.83-3.18-1.83a1.95 1.95 0 0 0-2.92 1.69"
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
            d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28L8.1 8.48 4.93 6.65A1.95 1.95 0 0 0 2 8.34"
            fill="currentColor"
          />
          <path
            d="M11.76 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83a1.96 1.96 0 0 0 0-3.38l-3.17-1.83-3.18-1.83a1.95 1.95 0 0 0-2.92 1.69"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFastForward;
