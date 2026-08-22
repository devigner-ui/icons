import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconOfficeComplex = forwardRef<SVGSVGElement, IconProps>(
  function IconOfficeComplex(
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
              d="M13.67 22h-8q-3 0-3-3v-8q0-3 3-3h5v11q0 3 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.78 4q-.11.45-.11 1v3h-5V6c0-1.1.9-2 2-2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.67 8v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 8v5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.67 17h-2a1 1 0 0 0-1 1v4h4v-4a1 1 0 0 0-1-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.67 13v4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.67 19V5q0-3 3-3h6q3 0 3 3v14q0 3-3 3h-6q-3 0-3-3"
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
              d="M10.78 4q-.11.45-.11 1v3h-5V6c0-1.1.9-2 2-2z"
              fill="currentColor"
            />
            <path
              d="M10.67 19V8h-5q-3 0-3 3v8q0 3 3 3h8q-3 0-3-3m-3.25-2c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M14.67 22h-1q-3 0-3-3V5q0-3 3-3h6q3 0 3 3v14q0 3-3 3h-1"
              fill="currentColor"
            />
            <path
              d="M18.67 18v4h-4v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1"
              fill="currentColor"
            />
            <path
              d="M14.67 13.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M18.67 13.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
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
              d="M5.67 8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h1.5a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm1 9c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
            <path
              d="M19.67 2h-6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h.5a.5.5 0 0 0 .5-.5V18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3.5c0 .28.22.5.5.5h.5a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-4.25 11c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75zm4 0c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconOfficeComplex;
