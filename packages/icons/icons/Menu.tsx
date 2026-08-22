import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMenu = forwardRef<SVGSVGElement, IconProps>(function IconMenu(
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
            d="M18.21 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.13 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.21 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.13 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92"
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
            d="M18.21 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92"
            fill="currentColor"
          />
          <path
            d="M7.13 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92"
            fill="currentColor"
          />
          <path
            d="M18.21 21.11a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.13 21.11a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92"
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
            d="M18.21 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92"
            fill="currentColor"
          />
          <path
            d="M7.13 8.81a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92"
            fill="currentColor"
          />
          <path
            d="M18.21 21.11a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92"
            fill="currentColor"
          />
          <path
            d="M7.13 21.11a2.96 2.96 0 1 0 0-5.92 2.96 2.96 0 0 0 0 5.92"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMenu;
