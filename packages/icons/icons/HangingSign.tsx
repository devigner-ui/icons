import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHangingSign = forwardRef<SVGSVGElement, IconProps>(function IconHangingSign(
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
            d="M22 12.5c0 3.77 0 5.66-1.17 6.83S17.77 20.5 14 20.5h-4c-3.77 0-5.66 0-6.83-1.17S2 16.27 2 12.5s0-5.66 1.17-6.83C4.23 4.61 5.9 4.51 9 4.5m6 0c3.11.01 4.77.1 5.83 1.17.65.65.94 1.53 1.07 2.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 5.5v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 11h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 14.5h5.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M15 4.5c3.11.01 4.77.1 5.83 1.17C22 6.84 22 8.73 22 12.5s0 5.66-1.17 6.83S17.77 20.5 14 20.5h-4c-3.77 0-5.66 0-6.83-1.17S2 16.27 2 12.5s0-5.66 1.17-6.83C4.23 4.61 5.9 4.51 9 4.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 5.5v-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 11h8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 14.5h5.5"
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
            d="M1 12.4c0-3.75 0-5.62.95-6.94a5 5 0 0 1 1.11-1.1C4.38 3.4 6.25 3.4 10 3.4h4c3.75 0 5.62 0 6.94.95a5 5 0 0 1 1.1 1.11C23 6.78 23 8.65 23 12.4s0 5.62-.95 6.94a5 5 0 0 1-1.11 1.1c-1.32.96-3.19.96-6.94.96h-4c-3.75 0-5.62 0-6.94-.95a5 5 0 0 1-1.1-1.11C1 18.02 1 16.15 1 12.4"
            fill="currentColor"
          />
          <path
            d="M12.75 3.4a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            d="M8 10.15a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M8 13.65a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"
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
            d="M12.75 3.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.75 12.56c0 1.83 0 3.29-.15 4.43a4.7 4.7 0 0 1-1.24 2.87 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H9.94c-1.83 0-3.29 0-4.43-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43v-2.03q.02-1.45.15-2.52a4.7 4.7 0 0 1 1.24-2.87A4.7 4.7 0 0 1 5.51 3.9a22 22 0 0 1 3.24-.15 1 1 0 0 1 1 1v.75a2.25 2.25 0 0 0 4.5 0v-.75a1 1 0 0 1 1-1q1.93-.02 3.24.15c1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43zM8 10.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 3.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHangingSign;
