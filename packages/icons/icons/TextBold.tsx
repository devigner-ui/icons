import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextBold = forwardRef<SVGSVGElement, IconProps>(function IconTextBold(
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
            d="M5 4.6A2.6 2.6 0 0 1 7.6 2H12a5 5 0 0 1 0 10H5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 12h9a5 5 0 0 1 0 10H7.06A2.06 2.06 0 0 1 5 19.94z"
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
            d="M4 4.6C4 2.63 5.62 1 7.6 1H12a6 6 0 0 1 0 12H4zM7.6 3C6.73 3 6 3.72 6 4.6V11h6a4 4 0 0 0 0-8z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 13v6.94A3.06 3.06 0 0 0 7.06 23H14a6 6 0 0 0 2.1-11.62A6 6 0 0 1 12 13h2a4 4 0 0 1 0 8H7.06C6.47 21 6 20.53 6 19.94V13z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.6 1A3.6 3.6 0 0 0 4 4.6v15.34A3.06 3.06 0 0 0 7.06 23H14a6 6 0 0 0 2.1-11.62A5.98 5.98 0 0 0 12 1zM12 11a4 4 0 0 0 0-8H7.6C6.73 3 6 3.72 6 4.6V11zm-6 2v6.94c0 .59.47 1.06 1.06 1.06H14a4 4 0 0 0 0-8z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTextBold;
