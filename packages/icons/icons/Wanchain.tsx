import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWanchain = forwardRef<SVGSVGElement, IconProps>(function IconWanchain(
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
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="m17.17 8.85-4.5-2.7-4.5 2.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.17 9v6.15l4.5-2.7 4.5 2.7V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14.92 16.2-2.25 1.5-2.25-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M17.17 9.16v3.83a1 1 0 0 1-1.51.86l-2.47-1.48a1 1 0 0 0-1.03 0l-2.47 1.48a1 1 0 0 1-1.51-.86V9.16a1 1 0 0 1 .46-.84l3.5-2.22a1 1 0 0 1 1.07 0l3.5 2.22a1 1 0 0 1 .46.84"
            fill="currentColor"
          />
          <path
            d="M12.67 18.06a1 1 0 0 1-.42-.13L10 16.43a.76.76 0 0 1-.21-1.04.75.75 0 0 1 1.04-.21l1.83 1.22 1.83-1.22a.75.75 0 0 1 1.04.21c.23.34.14.81-.21 1.04l-2.25 1.5a.6.6 0 0 1-.4.13"
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
            d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m2.67 14.43-2.25 1.5a1 1 0 0 1-.42.13 1 1 0 0 1-.42-.13L10 16.43a.76.76 0 0 1-.21-1.04.75.75 0 0 1 1.04-.21l1.83 1.22 1.83-1.22a.75.75 0 0 1 1.04.21c.24.35.15.81-.19 1.04m1.83-3.44a1 1 0 0 1-1.51.86l-2.47-1.48a1 1 0 0 0-1.03 0l-2.47 1.48a1 1 0 0 1-1.51-.86V9.16a1 1 0 0 1 .46-.84l3.5-2.22a1 1 0 0 1 1.07 0l3.5 2.22c.29.18.46.5.46.84z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconWanchain;
