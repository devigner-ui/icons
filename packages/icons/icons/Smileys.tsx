import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmileys = forwardRef<SVGSVGElement, IconProps>(function IconSmileys(
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
            d="M14.67 6.2V10c-2.79.05-3.95 1.21-4 4h-3.8c-3 0-4.2-1.2-4.2-4.2V6.2c0-3 1.2-4.2 4.2-4.2h3.6c3 0 4.2 1.2 4.2 4.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.63 5.87a1.5 1.5 0 0 0-1.76.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.63 5.87a1.5 1.5 0 0 0-1.76.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.83 11.42H6.51a.54.54 0 0 1-.54-.54 2.7 2.7 0 0 1 4.39-2.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 14.2v3.6c0 3-1.2 4.2-4.2 4.2h-3.6c-3 0-4.2-1.2-4.2-4.2V14c.05-2.79 1.21-3.95 4-4h3.8c3 0 4.2 1.2 4.2 4.2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.63 13.62c-.53.36-1.23.36-1.76-.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.63 13.62c-.53.36-1.23.36-1.76-.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.51 16.18h4.32c.3 0 .54.24.54.54a2.7 2.7 0 0 1-5.4 0c0-.3.24-.54.54-.54"
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
            d="M14.67 5v5h-1a3 3 0 0 0-3 3v1h-5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3"
            fill="currentColor"
          />
          <path
            d="M5.87 6.63a.75.75 0 0 1-.43-1.37 2.3 2.3 0 0 1 2.62-.02c.34.23.43.7.2 1.04a.75.75 0 0 1-1.04.2.8.8 0 0 0-.9.01 1 1 0 0 1-.45.14"
            fill="currentColor"
          />
          <path
            d="M9.87 6.63a.75.75 0 0 1-.43-1.37 2.3 2.3 0 0 1 2.62-.02c.34.23.43.7.2 1.04a.75.75 0 0 1-1.04.2.8.8 0 0 0-.9.01 1 1 0 0 1-.45.14"
            fill="currentColor"
          />
          <path
            d="M8.83 12.17H6.51a1.3 1.3 0 0 1-1.29-1.29 3.46 3.46 0 0 1 5.61-2.69.75.75 0 0 1-.93 1.17 1.96 1.96 0 0 0-3.16 1.31h2.1c.41 0 .75.34.75.75s-.35.75-.76.75"
            fill="currentColor"
          />
          <path
            d="M18.89 16.68a.4.4 0 0 0-.28-.12h-3.88a.4.4 0 0 0-.28.12.4.4 0 0 0-.09.29 2.33 2.33 0 0 0 4.62 0 .4.4 0 0 0-.09-.29"
            fill="currentColor"
          />
          <path
            d="M19.67 10h-6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-6.41 3.17a.75.75 0 0 1 1.05-.18.8.8 0 0 0 .9.01.74.74 0 0 1 1.04.2c.23.34.15.81-.2 1.04q-.6.4-1.29.4-.72 0-1.32-.42a.76.76 0 0 1-.18-1.05m3.41 7a3.46 3.46 0 0 1-3.45-3.45c0-.71.58-1.29 1.29-1.29h4.32c.71 0 1.29.58 1.29 1.29 0 1.9-1.55 3.45-3.45 3.45m3.38-5.94q-.6.4-1.29.4-.72 0-1.32-.42a.75.75 0 1 1 .87-1.23.8.8 0 0 0 .9.01.74.74 0 0 1 1.04.2c.23.35.14.81-.2 1.04"
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
            d="M10.67 1h-6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4.5a4.5 4.5 0 0 1 4.5-4.5V4a3 3 0 0 0-3-3M4.44 4.27a2.3 2.3 0 0 1 2.61-.02c.34.23.43.7.2 1.04a.75.75 0 0 1-1.04.2.8.8 0 0 0-.91.01 1 1 0 0 1-.43.13.8.8 0 0 1-.61-.31.75.75 0 0 1 .18-1.05m5.5 3.97a.74.74 0 0 1-1.05.12 1.96 1.96 0 0 0-3.16 1.31h2.1c.41 0 .75.34.75.75s-.34.75-.75.75H5.51a1.3 1.3 0 0 1-1.29-1.29 3.46 3.46 0 0 1 5.61-2.69c.32.26.37.73.11 1.05m1.31-2.95a.75.75 0 0 1-1.04.2.8.8 0 0 0-.91.01 1 1 0 0 1-.43.13.8.8 0 0 1-.61-.31.75.75 0 0 1 .18-1.05 2.3 2.3 0 0 1 2.61-.02c.34.23.43.7.2 1.04"
            fill="currentColor"
          />
          <path
            d="M18.89 16.68a.4.4 0 0 0-.28-.12h-3.88a.4.4 0 0 0-.28.12.4.4 0 0 0-.09.29 2.33 2.33 0 0 0 4.62 0 .4.4 0 0 0-.09-.29"
            fill="currentColor"
          />
          <path
            d="M19.67 10h-6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3m-6.41 3.17a.75.75 0 0 1 1.05-.18.8.8 0 0 0 .9.01.74.74 0 0 1 1.04.2c.23.34.15.81-.2 1.04q-.6.4-1.29.4-.72 0-1.32-.42a.76.76 0 0 1-.18-1.05m3.41 7a3.46 3.46 0 0 1-3.45-3.45c0-.71.58-1.29 1.29-1.29h4.32c.71 0 1.29.58 1.29 1.29 0 1.9-1.55 3.45-3.45 3.45m3.38-5.94q-.6.4-1.29.4-.72 0-1.32-.42a.75.75 0 1 1 .87-1.23.8.8 0 0 0 .9.01.74.74 0 0 1 1.04.2c.23.35.14.81-.2 1.04"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSmileys;
