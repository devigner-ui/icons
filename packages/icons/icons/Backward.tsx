import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBackward = forwardRef<SVGSVGElement, IconProps>(function IconBackward(
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
            d="M22.67 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83q-.3-.18-.49-.41v-2.56q.2-.23.49-.41l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.91 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.82-3.17-1.83a1.95 1.95 0 0 1 0-3.38l3.17-1.83 3.17-1.82c1.3-.77 2.93.17 2.93 1.67"
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
            d="M22.67 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.83-3.17-1.83-.49-.28v-2.82l.49-.28 3.17-1.83 3.17-1.83c1.3-.75 2.93.19 2.93 1.69"
            fill="currentColor"
          />
          <path
            d="M12.91 8.34v7.32c0 1.5-1.63 2.44-2.92 1.69l-3.18-1.83-3.17-1.83a1.96 1.96 0 0 1 0-3.38l3.17-1.83 3.18-1.83a1.95 1.95 0 0 1 2.92 1.69"
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
            d="M22.67 8.34v7.32c0 1.5-1.63 2.44-2.93 1.69l-3.17-1.83-3.17-1.83-.49-.28v-2.82l.49-.28 3.17-1.83 3.17-1.83c1.3-.75 2.93.19 2.93 1.69"
            fill="currentColor"
          />
          <path
            d="M12.91 8.34v7.32c0 1.5-1.63 2.44-2.92 1.69l-3.18-1.83-3.17-1.83a1.96 1.96 0 0 1 0-3.38l3.17-1.83 3.18-1.83a1.95 1.95 0 0 1 2.92 1.69"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBackward;
