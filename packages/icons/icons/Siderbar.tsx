import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSiderbar = forwardRef<SVGSVGElement, IconProps>(function IconSiderbar(
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
            d="M2 11c0-3.77 0-5.66 1.17-6.83S6.23 3 10 3h4c3.77 0 5.66 0 6.83 1.17S22 7.23 22 11v2c0 3.77 0 5.66-1.17 6.83S17.77 21 14 21h-4c-3.77 0-5.66 0-6.83-1.17S2 16.77 2 13z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5.5 10h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M6.5 14h4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15 21V3"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17 4.17C2 5.34 2 7.23 2 11v2c0 3.77 0 5.66 1.17 6.83S6.23 21 10 21h5V3h-5C6.23 3 4.34 3 3.17 4.17"
            fill="currentColor"
          />
          <path
            d="M5.5 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M6.5 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M22 13v-2c0-3.77 0-5.66-1.17-6.83-.98-.97-3.2-1.14-5.83-1.16v17.98c2.64-.02 4.85-.19 5.83-1.16C22 18.66 22 16.77 22 13"
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
            d="M22 11v2c0 3.77 0 5.66-1.17 6.83-.98.97-2.44 1.14-5.08 1.16V3.01c2.64.02 4.1.19 5.08 1.16C22 5.34 22 7.23 22 11"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 3h4.25v18H10c-3.77 0-5.66 0-6.83-1.17S2 16.77 2 13v-2c0-3.77 0-5.66 1.17-6.83S6.23 3 10 3m-5.25 7c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75m1 4c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSiderbar;
