import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudSunny = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudSunny(
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
            d="M7.26 5.43c2.48-2.01 6.5-2.11 8.74.6v.01c.7.86 1.23 2 1.47 3.45a5 5 0 0 1 3.18 1.74c1.75 2.07 1.9 5.45-.38 7.45a5.3 5.3 0 0 1-3.64 1.4H5.53c-4.66-.34-4.67-7.14 0-7.48h.06a7.3 7.3 0 0 1-.41-3.64"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7.26 13.01a4 4 0 0 0-1.67-.41"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.85 9.92q.79-.4 1.67-.41"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M21.97 8.5c0 1.1-.51 2.09-1.32 2.73a5 5 0 0 0-3.18-1.74A7 7 0 0 0 16 6.04v-.01a3.5 3.5 0 0 1 5.97 2.47Z"
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
              d="M20.27 18.68a5.3 5.3 0 0 1-3.64 1.4H5.54c-4.67-.34-4.68-7.14 0-7.48h.05C2.89 5.06 12.12 1.34 16 6.03v.01c.7.86 1.23 2 1.47 3.45a5 5 0 0 1 3.18 1.74c1.75 2.07 1.9 5.45-.38 7.45"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.26 13.01a4 4 0 0 0-1.67-.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.85 9.92q.79-.4 1.67-.41"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.97 8.5c0 1.1-.51 2.09-1.32 2.73a5 5 0 0 0-3.18-1.74A7 7 0 0 0 16 6.04v-.01a3.5 3.5 0 0 1 5.97 2.47"
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
              opacity={duotone ? "0.4" : "1"}
              d="M20.61 10.83a5.2 5.2 0 0 0-2.91-1.78 7 7 0 0 0-1.37-2.99l-.06-.08c-2.2-2.66-5.8-2.65-8.23-1.27a6.2 6.2 0 0 0-2.92 7.28 4.1 4.1 0 0 0-3.11 4.06 4.1 4.1 0 0 0 3.97 4.19h10.38c1.42 0 2.78-.53 3.83-1.49 2.51-2.22 2.18-5.84.42-7.92"
              fill="currentColor"
            />
            <path
              d="M21.76 8.74c0 .9-.32 1.76-.9 2.42l-.25-.33a5.2 5.2 0 0 0-2.91-1.78 7 7 0 0 0-1.43-3.06l-.31-.34a3.73 3.73 0 0 1 5.8 3.09"
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
              d="M20.61 10.83a5.2 5.2 0 0 0-2.91-1.78 7 7 0 0 0-1.37-2.99l-.06-.08c-2.2-2.66-5.8-2.65-8.23-1.27a6.2 6.2 0 0 0-2.92 7.28 4.1 4.1 0 0 0-3.11 4.06 4.1 4.1 0 0 0 3.97 4.19h10.38c1.42 0 2.78-.53 3.83-1.49 2.51-2.22 2.18-5.84.42-7.92"
              fill="currentColor"
            />
            <path
              d="M21.76 8.74q0 .51-.14.99a6.6 6.6 0 0 0-2.69-1.87 9 9 0 0 0-1.48-2.8q.29-.05.58-.05a3.73 3.73 0 0 1 3.73 3.73"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudSunny;
