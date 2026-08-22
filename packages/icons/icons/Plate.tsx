import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlate = forwardRef<SVGSVGElement, IconProps>(function IconPlate(
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
            d="M15 4c3.11.01 4.77.1 5.83 1.17C22 6.34 22 8.23 22 12s0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12s0-5.66 1.17-6.83C4.23 4.11 5.9 4.01 9 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 5V3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 10.5h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 14h5.5"
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
            d="M1 12c0-3.75 0-5.62.95-6.94a5 5 0 0 1 1.11-1.1C4.38 3 6.25 3 10 3h4c3.75 0 5.62 0 6.94.95a5 5 0 0 1 1.1 1.11C23 6.38 23 8.25 23 12s0 5.62-.95 6.94a5 5 0 0 1-1.11 1.1C19.62 21 17.75 21 14 21h-4c-3.75 0-5.62 0-6.94-.95a5 5 0 0 1-1.1-1.11C1 17.62 1 15.75 1 12"
            fill="currentColor"
          />
          <path
            d="M12.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M8 9.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M8 13.25a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"
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
            d="M12.75 3a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.75 12.06c0 1.83 0 3.29-.15 4.43a4.7 4.7 0 0 1-1.24 2.87 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H9.94c-1.83 0-3.29 0-4.43-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43v-2.03q.02-1.45.15-2.52a4.7 4.7 0 0 1 1.24-2.87A4.7 4.7 0 0 1 5.51 3.4a22 22 0 0 1 3.24-.15 1 1 0 0 1 1 1V5a2.25 2.25 0 0 0 4.5 0v-.75a1 1 0 0 1 1-1q1.93-.02 3.24.15c1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43zM8 9.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlate;
