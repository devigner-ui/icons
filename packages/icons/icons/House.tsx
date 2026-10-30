import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHouse = forwardRef<SVGSVGElement, IconProps>(function IconHouse(
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
            d="M13 16.75h-2c-.83 0-1.5.67-1.5 1.5v3.5h5v-3.5c0-.83-.67-1.5-1.5-1.5Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.5 13.5h-2a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M16.5 13.5h-2a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m19 6.75-.03-3h-4.4"
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
            d="M13 16.75h-2c-.83 0-1.5.67-1.5 1.5v3.5h5v-3.5c0-.83-.67-1.5-1.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 13.5h-2a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 13.5h-2a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="m19 6.75-.03-3h-4.4"
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
            d="M22 22.08H2a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 9.31v12.02H2.95L3 9.3c0-.61.28-1.19.77-1.57l7-5.44a2 2 0 0 1 2.46 0l1.34 1.04L19 6.77l1.23.96c.49.38.77.96.77 1.58"
            fill="currentColor"
          />
          <path
            d="M13 16.33h-2c-.83 0-1.5.67-1.5 1.5v3.5h5v-3.5c0-.83-.67-1.5-1.5-1.5"
            fill="currentColor"
          />
          <path
            d="M9.5 13.08h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M16.5 13.08h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="m19 6.77-4.43-3.44h3.41a1 1 0 0 1 1 .99z"
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
            d="M22 20.58h-1V9.31c0-.62-.28-1.2-.77-1.58L19 6.77l-.02-2.45a1 1 0 0 0-1-.99h-3.41l-1.34-1.04a2 2 0 0 0-2.46 0l-7 5.44C3.28 8.11 3 8.69 3 9.3l-.05 11.28H2a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h20c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75m-15.5-8.5v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1m8 8.5h-5v-2.75c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5zm3-8.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHouse;
