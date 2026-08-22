import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudSun = forwardRef<SVGSVGElement, IconProps>(function IconCloudSun(
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
            d="M14.38 11.03a5.8 5.8 0 0 1 3.78-.01M7.12 13.6A4.26 4.26 0 0 0 2 17.77 4.26 4.26 0 0 0 6.29 22h10A5.7 5.7 0 0 0 22 16.35c0-2.47-1.6-4.57-3.84-5.34m-11.04 2.6A5.68 5.68 0 0 1 12.48 6a5.7 5.7 0 0 1 5.68 5M7.12 13.6q.85.16 1.55.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8 4.5a3.5 3.5 0 0 0-1.5 6.66M8 4.5q1.13.02 2 .63M8 4.5q-1.13.02-2 .63m2-.63c.95 0 1.82.38 2.45 1M8 4.5c-.95 0-1.82.38-2.45 1M8 4.5a3.5 3.5 0 0 1 3 1.7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 2v.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.5 7.5H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m11.39 3.61-.22.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m3.83 11.17-.22.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.83 3.83 3.6 3.6"
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
            d="M11.5 8a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 1.25c.41 0 .75.34.75.75v.5a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M3.08 3.08c.3-.3.77-.3 1.06 0l.22.22A.75.75 0 0 1 3.3 4.36l-.22-.22a.75.75 0 0 1 0-1.06m8.84 0c.3.3.3.77 0 1.06l-.22.22a.75.75 0 1 1-1.06-1.06l.22-.22c.3-.3.77-.3 1.06 0M1.25 7.5c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.1 3.14c.3.3.3.77 0 1.06l-.2.22a.75.75 0 0 1-1.07-1.06l.22-.22a.75.75 0 0 1 1.06 0"
              fill="currentColor"
            />
          </g>
          <path
            d="M16.29 22A5.7 5.7 0 0 0 22 16.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 6a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 17.77 4.26 4.26 0 0 0 6.29 22z"
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
            d="M7.5 1.25c.41 0 .75.34.75.75v.5a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M3.08 3.08c.3-.3.77-.3 1.06 0l.22.22A.75.75 0 0 1 3.3 4.36l-.22-.22a.75.75 0 0 1 0-1.06m8.84 0c.3.3.3.77 0 1.06l-.22.22a.75.75 0 1 1-1.06-1.06l.22-.22c.3-.3.77-.3 1.06 0M1.25 7.5c0-.41.34-.75.75-.75h.5a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m3.1 3.14c.3.3.3.77 0 1.06l-.2.22a.75.75 0 0 1-1.07-1.06l.22-.22a.75.75 0 0 1 1.06 0"
            fill="currentColor"
          />
          <path
            d="M16.29 22A5.7 5.7 0 0 0 22 16.35c0-2.47-1.6-4.57-3.84-5.34A5.7 5.7 0 0 0 12.48 6a5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 17.77 4.26 4.26 0 0 0 6.29 22z"
            fill="currentColor"
          />
          <path
            d="M9.81 5a3.5 3.5 0 0 0-4.43 5.32A7.2 7.2 0 0 1 9.81 5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCloudSun;
