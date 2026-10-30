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
            d="M6 9.96a9.6 9.6 0 0 1 12 0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.6 13.05a7.05 7.05 0 0 1 8.81 0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.8 16.14a3.5 3.5 0 0 1 4.4 0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 13.05V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
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
              opacity={duotone ? "0.4" : "1"}
              d="M6 9.96a9.6 9.6 0 0 1 12 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.6 13.05a7.05 7.05 0 0 1 8.8 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.8 16.14a3.5 3.5 0 0 1 4.4 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
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
              d="M16.19 2H7.82C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="M18 10.71a.7.7 0 0 1-.46-.16 8.84 8.84 0 0 0-11.08 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 10.3 10.3 0 0 1 12.92 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.6.29"
              fill="currentColor"
            />
            <path
              d="M16.4 13.8a.7.7 0 0 1-.46-.16 6.3 6.3 0 0 0-7.9 0A.76.76 0 0 1 7 13.51a.76.76 0 0 1 .13-1.05 7.76 7.76 0 0 1 9.72 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
              fill="currentColor"
            />
            <path
              d="M14.2 16.89a.7.7 0 0 1-.46-.16 2.8 2.8 0 0 0-3.5 0 .76.76 0 0 1-1.04-.13.76.76 0 0 1 .13-1.05 4.3 4.3 0 0 1 5.32 0c.33.25.39.72.13 1.05a.7.7 0 0 1-.58.29"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-1.4 14.6a.8.8 0 0 1-.59.29.7.7 0 0 1-.46-.16 2.8 2.8 0 0 0-3.49 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 4.3 4.3 0 0 1 5.32 0c.34.25.4.72.14 1.05M17 13.51a.8.8 0 0 1-.59.29.7.7 0 0 1-.46-.16 6.3 6.3 0 0 0-7.89 0 .75.75 0 1 1-.93-1.18 7.76 7.76 0 0 1 9.72 0c.34.25.4.72.15 1.05m1.59-3.09a.8.8 0 0 1-.59.29.7.7 0 0 1-.46-.16 8.84 8.84 0 0 0-11.08 0 .76.76 0 0 1-1.05-.13.76.76 0 0 1 .13-1.05 10.3 10.3 0 0 1 12.92 0c.33.25.39.72.13 1.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWifiSquare;
