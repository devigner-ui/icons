import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRadar3 = forwardRef<SVGSVGElement, IconProps>(function IconRadar3(
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
            d="M12.67 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.67 18a10 10 0 0 0 2-6c0-2.25-.74-4.33-2-6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.67 6a10 10 0 0 0-2 6c0 2.25.74 4.33 2 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.47 15.6a6 6 0 0 0 0-7.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.87 8.4a6 6 0 0 0 0 7.2"
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
            d="M12.67 14.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.67 18.75a.75.75 0 0 1-.6-1.2A9 9 0 0 0 21.92 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 0 1 1.2-.9A10.6 10.6 0 0 1 23.42 12c0 2.35-.74 4.58-2.15 6.45q-.24.3-.6.3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.67 18.75a.7.7 0 0 1-.6-.3A10.6 10.6 0 0 1 1.92 12c0-2.35.74-4.58 2.15-6.45a.75.75 0 0 1 1.2.9A9 9 0 0 0 3.42 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 0 1-.6 1.2"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.47 16.35a.75.75 0 0 1-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 0 1 1.2-.9 6.7 6.7 0 0 1 0 8.1q-.24.3-.6.3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.87 16.35a.7.7 0 0 1-.6-.3 6.7 6.7 0 0 1 0-8.1.75.75 0 0 1 1.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 0 1-.6 1.2"
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
            d="M12.67 14.38a2.38 2.38 0 1 0 0-4.76 2.38 2.38 0 0 0 0 4.76"
            fill="currentColor"
          />
          <path
            d="M20.67 18.75a.75.75 0 0 1-.6-1.2A9 9 0 0 0 21.92 12c0-2.02-.64-3.94-1.85-5.55a.75.75 0 0 1 1.2-.9A10.6 10.6 0 0 1 23.42 12c0 2.35-.74 4.58-2.15 6.45q-.24.3-.6.3"
            fill="currentColor"
          />
          <path
            d="M4.67 18.75a.7.7 0 0 1-.6-.3A10.6 10.6 0 0 1 1.92 12c0-2.35.74-4.58 2.15-6.45a.75.75 0 0 1 1.2.9A9 9 0 0 0 3.42 12c0 2.02.64 3.94 1.85 5.55a.75.75 0 0 1-.6 1.2"
            fill="currentColor"
          />
          <path
            d="M17.47 16.35a.75.75 0 0 1-.6-1.2c.69-.91 1.05-2 1.05-3.15s-.36-2.24-1.05-3.15a.75.75 0 0 1 1.2-.9 6.7 6.7 0 0 1 0 8.1q-.24.3-.6.3"
            fill="currentColor"
          />
          <path
            d="M7.87 16.35a.7.7 0 0 1-.6-.3 6.7 6.7 0 0 1 0-8.1.75.75 0 0 1 1.2.9c-.69.91-1.05 2-1.05 3.15s.36 2.24 1.05 3.15a.75.75 0 0 1-.6 1.2"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRadar3;
