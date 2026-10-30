import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconCardSearch(
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
            d="M14 3.75c3.77 0 5.66 0 6.83 1.17S22 7.98 22 11.75v1m-12-9c-3.77 0-5.66 0-6.83 1.17S2 7.98 2 11.75s0 5.66 1.17 6.83 3.06 1.17 6.83 1.17h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 15.75H6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <circle
            cx="18"
            cy="16.75"
            r="3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="m20.5 19.25 1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 9.75h5m15 0H11"
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
              d="M22 12.75v-1c0-3.77 0-5.66-1.17-6.83S17.77 3.75 14 3.75h-4c-3.77 0-5.66 0-6.83 1.17S2 7.98 2 11.75s0 5.66 1.17 6.83 3.06 1.17 6.83 1.17h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 15.75H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 9.75h20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="18"
              cy="16.75"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m20.5 19.25 1 1"
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
              d="M10 19.48h3.63A5.25 5.25 0 1 1 22 13.14V9.48H2v2c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17"
              fill="currentColor"
            />
            <path
              d="M5.25 15.48c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.75 13.98a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14 16.23a3.75 3.75 0 1 1 6.88 2.07l.9.9a.75.75 0 1 1-1.06 1.06l-.9-.9q-.9.61-2.07.62A3.75 3.75 0 0 1 14 16.23"
              fill="currentColor"
            />
            <path
              d="M10 3.48h4c3.79 0 5.68 0 6.85 1.12.85.8 1.08 1.96 1.15 3.88v1H2v-1c.07-1.92.3-3.08 1.15-3.88C4.32 3.48 6.2 3.48 9.99 3.48"
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
              d="M17.75 13.98a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14 16.23a3.75 3.75 0 1 1 6.88 2.07l.9.9a.75.75 0 1 1-1.06 1.06l-.9-.9q-.9.61-2.07.62A3.75 3.75 0 0 1 14 16.23"
              fill="currentColor"
            />
            <path
              d="M10 3.48h4c3.77 0 5.66 0 6.83 1.17.84.85 1.08 2.06 1.14 4.08H2.03c.06-2.02.3-3.23 1.14-4.08C4.34 3.48 6.23 3.48 10 3.48"
              fill="currentColor"
            />
            <path
              d="M10 19.48h3.63A5.25 5.25 0 1 1 22 13.14v-2.91H2v1.25c0 3.77 0 5.66 1.17 6.83s3.06 1.17 6.83 1.17"
              fill="currentColor"
            />
            <path
              d="M5.25 15.48c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCardSearch;
