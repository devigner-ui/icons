import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScanBarcode = forwardRef<SVGSVGElement, IconProps>(
  function IconScanBarcode(
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
              d="M2.67 9V6.5A4.5 4.5 0 0 1 7.17 2h2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.67 2h2.5a4.5 4.5 0 0 1 4.5 4.5V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 16v1.5a4.5 4.5 0 0 1-4.5 4.5h-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 22h-2.5a4.5 4.5 0 0 1-4.5-4.5V15"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.17 7v2q0 1.5-1.5 1.5h-2q-1.5 0-1.5-1.5V7q0-1.5 1.5-1.5h2q1.5 0 1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.17 7v2q0 1.5-1.5 1.5h-2q-1.5 0-1.5-1.5V7q0-1.5 1.5-1.5h2q1.5 0 1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.17 15v2q0 1.5-1.5 1.5h-2q-1.5 0-1.5-1.5v-2q0-1.5 1.5-1.5h2q1.5 0 1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.17 15v2q0 1.5-1.5 1.5h-2q-1.5 0-1.5-1.5v-2q0-1.5 1.5-1.5h2q1.5 0 1.5 1.5"
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
              d="M2.67 9.75A.76.76 0 0 1 1.92 9V6.5c0-2.9 2.36-5.25 5.25-5.25h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5A3.75 3.75 0 0 0 3.42 6.5V9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M22.67 9.75a.76.76 0 0 1-.75-.75V6.5a3.75 3.75 0 0 0-3.75-3.75h-2.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.5a5.26 5.26 0 0 1 5.25 5.25V9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.17 22.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.5a3.75 3.75 0 0 0 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.9-2.36 5.25-5.25 5.25"
              fill="currentColor"
            />
            <path
              d="M9.67 22.75h-2.5a5.26 5.26 0 0 1-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5a3.75 3.75 0 0 0 3.75 3.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9.67 5.25h-2c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2q1.73-.01 1.75-1.75V7q-.02-1.74-1.75-1.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 5.25h-2q-1.73.01-1.75 1.75v2q.02 1.74 1.75 1.75h2q1.73-.01 1.75-1.75V7q-.02-1.74-1.75-1.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 13.25h-2c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2q1.73-.01 1.75-1.75v-2q-.02-1.74-1.75-1.75"
              fill="currentColor"
            />
            <path
              d="M17.67 13.25h-2q-1.73.01-1.75 1.75v2q.02 1.74 1.75 1.75h2q1.73-.01 1.75-1.75v-2q-.02-1.74-1.75-1.75"
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
              d="M2.67 9.75A.76.76 0 0 1 1.92 9V6.5c0-2.9 2.36-5.25 5.25-5.25h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5A3.75 3.75 0 0 0 3.42 6.5V9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M22.67 9.75a.76.76 0 0 1-.75-.75V6.5a3.75 3.75 0 0 0-3.75-3.75h-2.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.5a5.26 5.26 0 0 1 5.25 5.25V9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M18.17 22.75h-1.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.5a3.75 3.75 0 0 0 3.75-3.75V16c0-.41.34-.75.75-.75s.75.34.75.75v1.5c0 2.9-2.36 5.25-5.25 5.25"
              fill="currentColor"
            />
            <path
              d="M9.67 22.75h-2.5a5.26 5.26 0 0 1-5.25-5.25V15c0-.41.34-.75.75-.75s.75.34.75.75v2.5a3.75 3.75 0 0 0 3.75 3.75h2.5c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M9.67 5.25h-2c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2q1.73-.01 1.75-1.75V7q-.02-1.74-1.75-1.75"
              fill="currentColor"
            />
            <path
              d="M17.67 5.25h-2q-1.73.01-1.75 1.75v2q.02 1.74 1.75 1.75h2q1.73-.01 1.75-1.75V7q-.02-1.74-1.75-1.75"
              fill="currentColor"
            />
            <path
              d="M9.67 13.25h-2c-1.14 0-1.75.6-1.75 1.75v2c0 1.15.61 1.75 1.75 1.75h2q1.73-.01 1.75-1.75v-2q-.02-1.74-1.75-1.75"
              fill="currentColor"
            />
            <path
              d="M17.67 13.25h-2q-1.73.01-1.75 1.75v2q.02 1.74 1.75 1.75h2q1.73-.01 1.75-1.75v-2q-.02-1.74-1.75-1.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconScanBarcode;
