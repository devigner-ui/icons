import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartHome = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartHome(
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
              d="M14 22c3.77 0 5.66 0 6.83-1.21S22 17.63 22 13.73V12.2c0-2.28 0-3.43-.52-4.38s-1.47-1.53-3.36-2.71l-2-1.24C14.12 2.62 13.1 2 12 2s-2.11.62-4.12 1.87l-2 1.24c-1.9 1.18-2.84 1.76-3.36 2.71A5 5 0 0 0 2.03 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M11 22a9 9 0 0 0-9-9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 22a6 6 0 0 0-6-6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M5 22a3 3 0 0 0-3-3"
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
              d="M14 22h-4c-3.77 0-5.66 0-6.83-1.21S2 17.63 2 13.73V12.2c0-2.28 0-3.43.52-4.38S3.99 6.3 5.88 5.11l2-1.24C9.88 2.62 10.9 2 12 2s2.11.62 4.12 1.87l2 1.24c1.9 1.18 2.84 1.76 3.36 2.71s.52 2.1.52 4.38v1.53c0 3.9 0 5.85-1.17 7.06S17.77 22 14 22"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 12.25c0-.41.34-.75.75-.75a9.75 9.75 0 0 1 9.76 9.75.75.75 0 0 1-1.5 0A8.27 8.27 0 0 0 2.75 13a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 1 0 0 1.5C5.65 16 8 18.35 8 21.25a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-6.75-6.75M2 18.25c0-.41.34-.75.75-.75a3.75 3.75 0 0 1 3.75 3.75.75.75 0 0 1-1.5 0C5 20.01 4 19 2.75 19a.75.75 0 0 1-.75-.75"
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
              d="M2.48 12.25c0-.41.34-.75.76-.75a9.75 9.75 0 0 1 9.75 9.75.75.75 0 0 1-1.5 0c0-4.56-3.7-8.25-8.25-8.25a.75.75 0 0 1-.76-.75m.76 2.25a.75.75 0 1 0 0 1.5c2.9 0 5.25 2.35 5.25 5.25a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-6.75-6.75m-.76 3.75c0-.41.34-.75.76-.75a3.75 3.75 0 0 1 3.75 3.75.75.75 0 0 1-1.5 0A2.25 2.25 0 0 0 3.24 19a.75.75 0 0 1-.76-.75"
              fill="currentColor"
            />
            <path
              d="M2 10.37Q2.54 10 3.24 10c6.21 0 11.25 5.04 11.25 11.25q0 .4-.12.75c3.52 0 5.32-.04 6.46-1.21C22 19.58 22 17.63 22 13.73V12.2c0-2.28 0-3.43-.52-4.38s-1.47-1.53-3.37-2.71l-2-1.24C14.11 2.62 13.11 2 12 2c-1.1 0-2.11.62-4.12 1.87l-2 1.24C3.97 6.29 3.02 6.87 2.5 7.82c-.35.66-.47 1.4-.5 2.55"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartHome;
