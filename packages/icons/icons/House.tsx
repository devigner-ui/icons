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
            d="M13.67 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.17 13.75h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.17 13.75h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="m19.67 7-.03-3h-4.4"
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
            d="M22.67 22.75h-20a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.67 9.98V22H3.62l.05-12.03c0-.61.28-1.19.77-1.57l7-5.44a2 2 0 0 1 2.46 0L15.24 4l4.43 3.44 1.23.96c.49.38.77.96.77 1.58"
            fill="currentColor"
          />
          <path
            d="M13.67 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5"
            fill="currentColor"
          />
          <path
            d="M10.17 13.75h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M17.17 13.75h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1"
            fill="currentColor"
          />
          <path
            d="M19.67 7.44 15.24 4h3.41a1 1 0 0 1 1 .99z"
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
            d="M22.67 21.25h-1V9.98c0-.62-.28-1.2-.77-1.58l-1.23-.96-.02-2.45a1 1 0 0 0-1-.99h-3.41L13.9 2.96a2 2 0 0 0-2.46 0l-7 5.44c-.49.38-.77.96-.77 1.57l-.05 11.28h-.95a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h20c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75m-15.5-8.5v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1m8 8.5h-5V18.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5zm3-8.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHouse;
