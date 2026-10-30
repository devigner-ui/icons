import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHouseDoor = forwardRef<SVGSVGElement, IconProps>(function IconHouseDoor(
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
            d="M2 21.75h20"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M3 9.72c0-.61.29-1.19.77-1.57l7-5.45a2 2 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58v12.03"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m2.95 21.75.03-7.97"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 10.75h-7c-.83 0-1.5.67-1.5 1.5v9.5h10v-9.5c0-.83-.67-1.5-1.5-1.5Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10 16v1.5"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.5 7.25h3"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M2 21.75h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.95 21.75 3 9.72c0-.61.29-1.19.77-1.57l7-5.45a2 2 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58v12.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.5 10.75h-7c-.83 0-1.5.67-1.5 1.5v9.5h10v-9.5c0-.83-.67-1.5-1.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 16v1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.5 7.25h3"
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
            d="M22.75 21.33c0 .41-.34.75-.75.75H2a.75.75 0 1 1 0-1.5h20c.41 0 .75.33.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 9.31v11.27H2.95L3 9.3c0-.61.28-1.19.77-1.57l7-5.44a2 2 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58"
            fill="currentColor"
          />
          <path
            d="M13.5 7.58h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M15.5 10.33h-7c-.83 0-1.5.67-1.5 1.5v9.5h10v-9.5c0-.83-.67-1.5-1.5-1.5m-4.75 6.75c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75z"
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
            d="M10 14.83a.76.76 0 0 0-.75.75v1.5c0 .41.34.75.75.75s.75-.34.75-.75v-1.5a.76.76 0 0 0-.75-.75"
            fill="currentColor"
          />
          <path
            d="M22 20.58h-1V9.31c0-.62-.28-1.2-.77-1.58l-7-5.44a2 2 0 0 0-2.46 0l-7 5.44C3.28 8.11 3 8.69 3 9.3l-.05 11.28H2a.75.75 0 1 0 0 1.5h20a.75.75 0 1 0 0-1.5M10.5 6.08h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75m6.5 14.5H7v-8.75c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHouseDoor;
