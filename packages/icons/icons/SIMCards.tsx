import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSIMCards = forwardRef<SVGSVGElement, IconProps>(function IconSIMCards(
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
            d="M3.17 20.83C4.34 22 6.23 22 10 22s5.66 0 6.83-1.17S18 17.77 18 14c0-1.03-.41-2-1.14-2.73l-4.13-4.13A4 4 0 0 0 10 6C6.23 6 4.34 6 3.17 7.17S2 10.23 2 14s0 5.66 1.17 6.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18 17.9c1.3-.13 2.18-.42 2.83-1.07C22 15.66 22 13.77 22 10c0-1.03-.41-2-1.14-2.73l-4.13-4.13A4 4 0 0 0 14 2c-3.77 0-5.66 0-6.83 1.17C6.52 3.82 6.23 4.7 6.1 6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 14H9c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v1c0 .94 0 1.41.3 1.7.29.3.76.3 1.7.3h1m0-5h1c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7v.5M10 14v2.5m0 2.5h1c.94 0 1.41 0 1.7-.3.3-.29.3-.76.3-1.7v-.5M10 19v-2.5m0 0h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.17 20.83C4.34 22 6.23 22 10 22s5.66 0 6.83-1.17S18 17.77 18 14c0-1.03-.41-2-1.14-2.73l-4.13-4.13A4 4 0 0 0 10 6C6.23 6 4.34 6 3.17 7.17S2 10.23 2 14s0 5.66 1.17 6.83M11 14c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7h-2.5v-2zm-1.5 5H9c-.94 0-1.41 0-1.7-.3-.3-.29-.3-.76-.3-1.7v-1c0-.94 0-1.41.3-1.7.29-.3.76-.3 1.7-.3h.5zm1.5 0h-.5v-2H13c0 .94 0 1.41-.3 1.7-.29.3-.76.3-1.7.3"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.1 6.1c.12-1.36.4-2.26 1.07-2.93C8.34 2 10.23 2 14 2c1.03 0 2 .41 2.73 1.14l4.13 4.13C21.6 7.99 22 8.97 22 10c0 3.77 0 5.66-1.17 6.83-.67.67-1.57.95-2.92 1.08.09-1.02.09-2.3.09-3.91 0-1.03-.41-2-1.14-2.73l-4.13-4.13A4 4 0 0 0 10 6c-1.62 0-2.9 0-3.9.1"
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
            d="M20.83 16.83C22 15.66 22 13.77 22 10c0-1.03-.41-2-1.14-2.73l-4.13-4.13A4 4 0 0 0 14 2c-3.77 0-5.66 0-6.83 1.17q-.56.56-.8 1.4 1.5-.09 3.53-.07h.1a5.4 5.4 0 0 1 3.8 1.57l4.13 4.14c1 1 1.57 2.36 1.57 3.79v.1q.02 2.02-.07 3.54a3 3 0 0 0 1.4-.81"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 22c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14s0-5.66 1.17-6.83S6.23 6 10 6c1.03 0 2 .41 2.73 1.14l4.13 4.13c.73.72 1.14 1.7 1.14 2.73 0 3.77 0 5.66-1.17 6.83S13.77 22 10 22m-2.7-3.3c.29.3.76.3 1.7.3h.5v-5H9c-.94 0-1.41 0-1.7.3-.3.29-.3.76-.3 1.7v1c0 .94 0 1.41.3 1.7m5.4 0c-.29.3-.76.3-1.7.3h-.5v-2H13c0 .94 0 1.41-.3 1.7M11 14c.94 0 1.41 0 1.7.3.3.29.3.76.3 1.7h-2.5v-2z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSIMCards;
