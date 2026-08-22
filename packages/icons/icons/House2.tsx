import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHouse2 = forwardRef<SVGSVGElement, IconProps>(function IconHouse2(
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
            d="M2.67 22h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m3.62 22 .05-12.03c0-.61.29-1.19.77-1.57l7-5.45a2 2 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58V22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.17 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.67 16.25v1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.17 7.5h3"
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
            d="M23.42 22c0 .41-.34.75-.75.75h-20a.75.75 0 1 1 0-1.5h20c.41 0 .75.33.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.67 9.98v11.27H3.62l.05-11.28c0-.61.28-1.19.77-1.57l7-5.44a2 2 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58"
            fill="currentColor"
          />
          <path
            d="M14.17 8.25h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M16.17 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5m-4.75 6.75c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75z"
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
            d="M10.67 15.5a.76.76 0 0 0-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M22.67 21.25h-1V9.98c0-.62-.28-1.2-.77-1.58l-7-5.44a2 2 0 0 0-2.46 0l-7 5.44c-.49.38-.77.96-.77 1.57l-.05 11.28h-.95a.75.75 0 1 0 0 1.5h20a.75.75 0 1 0 0-1.5m-11.5-14.5h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75m6.5 14.5h-10V12.5c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHouse2;
