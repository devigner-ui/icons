import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShip = forwardRef<SVGSVGElement, IconProps>(function IconShip(
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
            d="M21.09 12.37a2.1 2.1 0 0 1 1.21 2.29l-.41 1.86A6.74 6.74 0 0 1 15.05 22h-4.76a6.74 6.74 0 0 1-6.84-5.48l-.41-1.86c-.2-.91.34-1.94 1.21-2.29l1.42-.57 5.51-2.21a4 4 0 0 1 2.98 0l5.51 2.21z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 22V10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M19.67 8v3.8l-5.51-2.21a4 4 0 0 0-2.98 0L5.67 11.8V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.17 5h-5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
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
            d="m22.3 14.66-.41 1.86A6.74 6.74 0 0 1 15.05 22h-4.76a6.74 6.74 0 0 1-6.84-5.48l-.41-1.86c-.2-.91.34-1.94 1.21-2.29l1.42-.57 5.51-2.21a4 4 0 0 1 2.98 0l5.51 2.21 1.42.57a2.1 2.1 0 0 1 1.21 2.29"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.67 8v3.8l-5.51-2.21a4 4 0 0 0-2.98 0L5.67 11.8V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3"
            fill="currentColor"
          />
          <path
            d="M15.17 5h-5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z"
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
            d="m22.3 14.66-.41 1.86A6.74 6.74 0 0 1 15.05 22h-4.76a6.74 6.74 0 0 1-6.84-5.48l-.41-1.86c-.2-.91.34-1.94 1.21-2.29l1.42-.57 5.51-2.21a4 4 0 0 1 2.98 0l5.51 2.21 1.42.57a2.1 2.1 0 0 1 1.21 2.29"
            fill="currentColor"
          />
          <path
            d="M19.67 8v1.44a.5.5 0 0 1-.69.46l-4.27-1.71a5.6 5.6 0 0 0-4.09.01L6.36 9.91a.5.5 0 0 1-.69-.46V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3"
            fill="currentColor"
          />
          <path
            d="M15.17 5h-5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShip;
