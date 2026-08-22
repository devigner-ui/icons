import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWifiSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconWifiSquare(
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
              d="M6.67 9.96a9.6 9.6 0 0 1 12 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.27 13.05a7.05 7.05 0 0 1 8.8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.47 16.14a3.5 3.5 0 0 1 4.4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.49C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M18.67 10.71a.7.7 0 0 1-.46-.16 8.84 8.84 0 0 0-11.08 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 10.3 10.3 0 0 1 12.92 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.6.29"
              fill="currentColor"
            />
            <path
              d="M17.07 13.8a.7.7 0 0 1-.46-.16 6.3 6.3 0 0 0-7.9 0 .76.76 0 0 1-1.04-.13.76.76 0 0 1 .13-1.05 7.76 7.76 0 0 1 9.72 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
              fill="currentColor"
            />
            <path
              d="M14.87 16.89a.7.7 0 0 1-.46-.16 2.8 2.8 0 0 0-3.5 0 .76.76 0 0 1-1.04-.13.76.76 0 0 1 .13-1.05 4.3 4.3 0 0 1 5.32 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-1.4 14.6a.8.8 0 0 1-.59.29.7.7 0 0 1-.46-.16 2.8 2.8 0 0 0-3.49 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 4.3 4.3 0 0 1 5.32 0c.34.25.4.72.14 1.05m2.21-3.09a.8.8 0 0 1-.59.29.7.7 0 0 1-.46-.16 6.3 6.3 0 0 0-7.89 0 .75.75 0 1 1-.93-1.18 7.76 7.76 0 0 1 9.72 0c.34.25.4.72.15 1.05m1.59-3.09a.8.8 0 0 1-.59.29.7.7 0 0 1-.46-.16 8.84 8.84 0 0 0-11.08 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 10.3 10.3 0 0 1 12.92 0c.33.25.39.72.13 1.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWifiSquare;
