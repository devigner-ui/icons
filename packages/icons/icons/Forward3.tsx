import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconForward3 = forwardRef<SVGSVGElement, IconProps>(function IconForward3(
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
            d="M2.67 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83q.3-.18.49-.41v-2.56a2 2 0 0 0-.49-.41L8.77 8.49 5.6 6.67a1.94 1.94 0 0 0-2.93 1.67"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.43 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83a1.95 1.95 0 0 0 0-3.38l-3.17-1.83-3.17-1.82a1.94 1.94 0 0 0-2.93 1.67"
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
            d="M2.67 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28-3.17-1.83L5.6 6.65a1.95 1.95 0 0 0-2.93 1.69"
            fill="currentColor"
          />
          <path
            d="M12.43 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83a1.96 1.96 0 0 0 0-3.38l-3.17-1.83-3.18-1.83a1.95 1.95 0 0 0-2.92 1.69"
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
            d="M2.67 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.83 3.17-1.83.49-.28v-2.82l-.49-.28-3.17-1.83L5.6 6.65a1.95 1.95 0 0 0-2.93 1.69"
            fill="currentColor"
          />
          <path
            d="M12.43 8.34v7.32c0 1.5 1.63 2.44 2.92 1.69l3.18-1.83 3.17-1.83a1.96 1.96 0 0 0 0-3.38l-3.17-1.83-3.18-1.83a1.95 1.95 0 0 0-2.92 1.69"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconForward3;
