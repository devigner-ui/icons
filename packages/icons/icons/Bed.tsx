import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBed = forwardRef<SVGSVGElement, IconProps>(function IconBed(
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
            d="M19 20v-1.5M5 20v-1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2 15c0-.93 0-1.4.15-1.77a2 2 0 0 1 1.08-1.08C3.6 12 4.07 12 5 12h14c.93 0 1.4 0 1.77.15a2 2 0 0 1 1.08 1.08c.15.37.15.84.15 1.77s0 1.4-.15 1.77a2 2 0 0 1-1.08 1.08c-.37.15-.84.15-1.77.15H5c-.93 0-1.4 0-1.77-.15a2 2 0 0 1-1.08-1.08C2 16.4 2 15.93 2 15Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M21 12c0-3.77 0-5.66-1.17-6.83S16.77 4 13 4h-2C7.23 4 5.34 4 4.17 5.17S3 8.23 3 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M18.5 12v-1.5c0-1.89 0-2.83-.59-3.41-.58-.59-1.52-.59-3.41-.59h-5c-1.89 0-2.83 0-3.41.59-.59.58-.59 1.52-.59 3.41V12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 7v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M2 6v12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 18v-2.36c0-2 0-2.99-.28-3.8a5 5 0 0 0-3.07-3.06c-.8-.28-1.8-.28-3.8-.28a5 5 0 0 0-1.51.11 2 2 0 0 0-1.23 1.23c-.11.32-.11.72-.11 1.52V16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 16h20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.5 11a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
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
            d="M2 5.25c.41 0 .75.34.75.75v9.25h19.89V18a.75.75 0 1 1-1.5 0v-1.25H2.75V18a.75.75 0 0 1-1.5 0V6c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.36 11.85a5 5 0 0 0-3.07-3.07c-.8-.28-1.8-.28-3.79-.28-.8 0-1.84 0-2.16.11a2 2 0 0 0-1.23 1.23c-.11.32-.11.72-.11 1.52v3.89h10.64c0-1.74-.02-2.65-.28-3.4"
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
            d="M2.75 6a.75.75 0 0 0-1.5 0v12a.75.75 0 0 0 1.5 0v-1.25h18.4V18a.75.75 0 0 0 1.5 0v-2.36c0-2 0-2.99-.29-3.8a5 5 0 0 0-3.07-3.06c-.8-.28-1.8-.28-3.79-.28-.8 0-1.84 0-2.16.11a2 2 0 0 0-1.23 1.23c-.11.32-.11.72-.11 1.52v3.89H2.75z"
            fill="currentColor"
          />
          <path
            d="M7 13.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBed;
