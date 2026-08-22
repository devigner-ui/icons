import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBagCross = forwardRef<SVGSVGElement, IconProps>(function IconBagCross(
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
            d="M3.74 20.56C4.94 22 7.17 22 11.64 22h.72c4.47 0 6.7 0 7.9-1.45m-16.52 0c-1.2-1.44-.79-3.63.04-8.02.58-3.12.87-4.69 1.99-5.6m14.49 13.63c1.2-1.45.79-3.64-.04-8.03-.58-3.12-.87-4.69-1.99-5.6m0-.01C17.13 6 15.53 6 12.36 6h-.72c-3.18 0-4.76 0-5.87.92m0 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m14 12-4 4m0-4 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9 6V5a3 3 0 1 1 6 0v1"
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
            d="M4.08 10.9c.44-2.35.66-3.52 1.5-4.2C6.4 6 7.6 6 9.97 6h4.04c2.38 0 3.57 0 4.4.7.84.68 1.06 1.85 1.5 4.2l.75 4c.62 3.29.92 4.93.02 6.02S18.12 22 14.77 22H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03z"
            fill="currentColor"
          />
          <path
            d="M9.75 5a2.25 2.25 0 0 1 4.5 0v1q.85 0 1.5.02V5a3.75 3.75 0 1 0-7.5 0v1.02Q8.9 6 9.75 6z"
            fill="currentColor"
          />
          <path
            d="M9.53 10.47a.75.75 0 0 0-1.06 1.06L10.94 14l-2.47 2.47a.75.75 0 1 0 1.06 1.06L12 15.06l2.47 2.47a.75.75 0 0 0 1.06-1.06L13.06 14l2.47-2.47a.75.75 0 1 0-1.06-1.06L12 12.94z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 6.02V5a3.75 3.75 0 1 1 7.5 0v1.02c1.29.03 2.07.17 2.68.67.83.7 1.05 1.86 1.49 4.2l.75 4c.61 3.3.92 4.94.02 6.03S18.12 22 14.77 22H9.23c-3.35 0-5.02 0-5.92-1.08-.9-1.09-.6-2.73.02-6.03l.75-4c.44-2.34.66-3.5 1.5-4.2.6-.5 1.38-.64 2.67-.67M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zm-1.28 5.47c.3-.3.77-.3 1.06 0L12 12.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 14l2.47 2.47a.75.75 0 0 1-1.06 1.06L12 15.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 14l-2.47-2.47a.75.75 0 0 1 0-1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBagCross;
