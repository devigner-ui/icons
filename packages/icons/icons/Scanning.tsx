import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScanning = forwardRef<SVGSVGElement, IconProps>(function IconScanning(
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
            d="M2 9V6.5A4.5 4.5 0 0 1 6.5 2H9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 2h2.5A4.5 4.5 0 0 1 22 6.5V9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 16v1.5a4.5 4.5 0 0 1-4.5 4.5H16"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 22H6.5A4.5 4.5 0 0 1 2 17.5V15"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M11 8.5A2.5 2.5 0 1 1 8.5 6"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M13 15.5a2.5 2.5 0 1 1 2.5 2.5"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M2 9V6.5A4.5 4.5 0 0 1 6.5 2H9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 2h2.5A4.5 4.5 0 0 1 22 6.5V9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 16v1.5a4.5 4.5 0 0 1-4.5 4.5H16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22H6.5A4.5 4.5 0 0 1 2 17.5V15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
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
            d="M2 9.75A.76.76 0 0 1 1.25 9V6.5c0-2.9 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5A3.75 3.75 0 0 0 2.75 6.5V9c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M22 9.75a.76.76 0 0 1-.75-.75V6.5a3.75 3.75 0 0 0-3.75-3.75H15a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.5a5.26 5.26 0 0 1 5.25 5.25V9c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.5 22.75H16a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.5a3.75 3.75 0 0 0 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.9-2.36 5.25-5.25 5.25"
            fill="currentColor"
          />
          <path
            d="M9 22.75H6.5a5.26 5.26 0 0 1-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5a3.75 3.75 0 0 0 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M8.5 11.38a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 18.38a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 9.38a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76"
            fill="currentColor"
          />
          <path
            d="M15.5 18.38a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76"
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
            d="M2 9.75A.76.76 0 0 1 1.25 9V6.5c0-2.9 2.36-5.25 5.25-5.25H9c.41 0 .75.34.75.75s-.34.75-.75.75H6.5A3.75 3.75 0 0 0 2.75 6.5V9c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M22 9.75a.76.76 0 0 1-.75-.75V6.5a3.75 3.75 0 0 0-3.75-3.75H15a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.5a5.26 5.26 0 0 1 5.25 5.25V9c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17.5 22.75H16a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.5a3.75 3.75 0 0 0 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.9-2.36 5.25-5.25 5.25"
            fill="currentColor"
          />
          <path
            d="M9 22.75H6.5a5.26 5.26 0 0 1-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5a3.75 3.75 0 0 0 3.75 3.75H9c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M8.5 11.38a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76"
            fill="currentColor"
          />
          <path
            d="M7.5 18.38a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76"
            fill="currentColor"
          />
          <path
            d="M16.5 9.38a1.88 1.88 0 1 0 0-3.76 1.88 1.88 0 0 0 0 3.76"
            fill="currentColor"
          />
          <path
            d="M15.5 18.38a2.88 2.88 0 1 0 0-5.76 2.88 2.88 0 0 0 0 5.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconScanning;
