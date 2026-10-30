import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkOpen = forwardRef<SVGSVGElement, IconProps>(function IconLinkOpen(
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
            d="M13.06 10.94a5.74 5.74 0 1 1-8.13 0"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.97 3.17a6.01 6.01 0 0 1 4.1 10.25"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M10.6 13.41a6 6 0 0 1 0-8.49"
            strokeWidth={strokeWidth}
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
            d="M13.06 10.94a5.74 5.74 0 1 1-8.13 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.59 13.41a6.01 6.01 0 1 1 8.5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
            d="M19.07 14.24a.7.7 0 0 1-1.03 0 .7.7 0 0 1 0-1.03 5.12 5.12 0 1 0-7.24 0c.3.29.3.75 0 1.03a.7.7 0 0 1-1.03 0 6.58 6.58 0 1 1 9.3 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.07 4.93a6.58 6.58 0 0 1-3.09 11.05 6.56 6.56 0 0 0-7.95-7.96 6.58 6.58 0 0 1 11.05-3.09"
            fill="currentColor"
          />
          <path
            d="M4.93 9.76a.7.7 0 0 1 1.03 0c.3.29.3.75 0 1.03a5.12 5.12 0 1 0 7.24 0 .7.7 0 0 1 0-1.03.7.7 0 0 1 1.03 0 6.58 6.58 0 1 1-9.3 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.6" : "1"}
            d="M14.24 9.76a6.56 6.56 0 0 1 0 9.31 6.58 6.58 0 1 1 0-9.31"
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
            d="M19.07 14.24a.7.7 0 0 1-1.03 0 .7.7 0 0 1 0-1.03 5.12 5.12 0 1 0-7.24 0c.3.29.3.75 0 1.03a.7.7 0 0 1-1.03 0 6.58 6.58 0 1 1 9.3 0"
            fill="currentColor"
          />
          <path
            d="M4.93 9.76a.7.7 0 0 1 1.03 0c.3.29.3.75 0 1.03a5.12 5.12 0 1 0 7.24 0 .7.7 0 0 1 0-1.03.7.7 0 0 1 1.03 0 6.58 6.58 0 1 1-9.3 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLinkOpen;
