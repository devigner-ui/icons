import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmsTracking = forwardRef<SVGSVGElement, IconProps>(
  function IconSmsTracking(
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
              d="M2.67 8.5c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5h-10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.67 9-3.13 2.5a3.2 3.2 0 0 1-3.75 0L7.67 9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 16.5h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 12.5h3"
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
              d="M6.67 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-2.04 2.96h2.04c.38 0 .68.31.68.68s-.31.68-.68.68H4.63a.68.68 0 0 1 0-1.36m4.08 4.08H4.62a.7.7 0 0 1-.68-.68c0-.37.31-.68.68-.68h4.09a.68.68 0 0 1 0 1.36"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 3h-10c-3 0-5 1.5-5 5v3.14a1 1 0 0 0 1.42.9 6.5 6.5 0 0 1 9.02 6.86 1 1 0 0 0 .99 1.11h3.57c3 0 5-1.5 5-5v-7c0-3.51-2-5.01-5-5.01"
              fill="currentColor"
            />
            <path
              d="M12.67 11.87c-.84 0-1.69-.26-2.34-.79L7.2 8.58a.75.75 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5a.74.74 0 0 1 1.05.12c.26.32.21.8-.12 1.05L15 11.08c-.64.53-1.49.79-2.33.79"
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
              d="M6.67 13a5 5 0 1 0 0 10 5 5 0 0 0 0-10m-2.04 2.96h2.04a.68.68 0 0 1 0 1.36H4.63a.68.68 0 0 1 0-1.36m4.08 4.08H4.63a.7.7 0 0 1-.68-.68c0-.37.31-.68.68-.68h4.09c.38 0 .68.31.68.68s-.31.68-.69.68"
              fill="currentColor"
            />
            <path
              d="M17.67 3h-10c-3 0-5 1.5-5 5v3.14a1 1 0 0 0 1.42.9 6.5 6.5 0 0 1 9.02 6.86 1 1 0 0 0 .99 1.11h3.57c3 0 5-1.5 5-5V8c0-3.5-2-5-5-5m.47 5.59-3.13 2.5c-.66.53-1.5.79-2.34.79s-1.69-.26-2.34-.79L7.2 8.59a.77.77 0 0 1-.12-1.06.75.75 0 0 1 1.05-.12l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5a.74.74 0 0 1 1.05.12c.26.32.21.8-.11 1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmsTracking;
