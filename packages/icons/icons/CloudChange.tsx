import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudChange = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudChange(
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
            d="M15.29 9.98c-.93-5.64-9.08-3.5-7.15 1.87"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.1 11.85c-2.81.2-2.8 4.3 0 4.5h6.68c.8.01 1.59-.3 2.19-.84a3 3 0 0 0 1.02-2.5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2 15a7 7 0 0 0 7 7l-1.05-1.75"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 9a7 7 0 0 0-7-7l1.05 1.75"
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
              d="M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84 1.98-1.73.92-5.2-1.68-5.53-.93-5.64-9.08-3.5-7.15 1.87"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M2 15a7 7 0 0 0 7 7l-1.05-1.75"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 9a7 7 0 0 0-7-7l1.05 1.75"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84 1.98-1.73.92-5.2-1.68-5.53-.93-5.64-9.08-3.5-7.15 1.87"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 22.75A7.76 7.76 0 0 1 1.25 15c0-.41.34-.75.75-.75s.75.34.75.75a6.26 6.26 0 0 0 4.83 6.09l-.27-.45a.75.75 0 1 1 1.29-.77l1.05 1.75c.14.23.14.52.01.75a.8.8 0 0 1-.66.38"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 9.75a.76.76 0 0 1-.75-.75 6.26 6.26 0 0 0-4.83-6.09l.27.45a.75.75 0 1 1-1.29.77l-1.05-1.75a.75.75 0 0 1 .64-1.13A7.76 7.76 0 0 1 22.74 9a.74.74 0 0 1-.74.75"
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
              d="M8.11 11.85c-2.82.2-2.81 4.3 0 4.5h6.67c.81.01 1.59-.3 2.19-.84 1.98-1.73.92-5.2-1.68-5.53-.93-5.64-9.08-3.5-7.15 1.87"
              fill="currentColor"
            />
            <path
              d="M9 22.75A7.76 7.76 0 0 1 1.25 15c0-.41.34-.75.75-.75s.75.34.75.75a6.26 6.26 0 0 0 4.83 6.09l-.27-.45a.75.75 0 1 1 1.29-.77l1.05 1.75c.14.23.14.52.01.75a.8.8 0 0 1-.66.38"
              fill="currentColor"
            />
            <path
              d="M22 9.75a.76.76 0 0 1-.75-.75 6.26 6.26 0 0 0-4.83-6.09l.27.45a.75.75 0 1 1-1.29.77l-1.05-1.75a.8.8 0 0 1-.01-.75.8.8 0 0 1 .66-.38A7.76 7.76 0 0 1 22.75 9c0 .41-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudChange;
