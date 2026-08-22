import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCashOut = forwardRef<SVGSVGElement, IconProps>(function IconCashOut(
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
            d="M18.67 12A4 4 0 0 0 22 8.02 3.96 3.96 0 0 0 18.11 4H5.9A3.96 3.96 0 0 0 2 8.02c0 2.03 1.45 3.7 3.33 3.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 7v7m0 0 2-2.33M12 14l-2-2.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 11c0-1.89 0-2.83.59-3.41C6.17 7 7.1 7 9 7h6c1.89 0 2.83 0 3.41.59C19 8.17 19 9.1 19 11v6c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59C5 19.83 5 18.9 5 17z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 18h14"
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
            opacity={duotone ? "0.4" : "1"}
            d="M9 20h6c1.89 0 2.83 0 3.41-.59.48-.47.57-1.17.59-2.41H5c.02 1.24.11 1.94.59 2.41C6.17 20 7.1 20 9 20"
            fill="currentColor"
          />
          <path
            d="M11.25 6H9c-1.89 0-2.83 0-3.41.59C5 7.17 5 8.1 5 10v7h14v-7c0-1.89 0-2.83-.59-3.41C17.83 6 16.9 6 15 6h-2.25v4.97l.68-.8a.75.75 0 1 1 1.14.99l-2 2.33a.75.75 0 0 1-1.14 0l-2-2.33a.75.75 0 1 1 1.14-.98l.68.8z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.11 3H5.9A3.96 3.96 0 0 0 2 7.02a4 4 0 0 0 3 3.92V10c0-1.89 0-2.83.59-3.41C6.17 6 7.1 6 9 6h6c1.89 0 2.83 0 3.41.59C19 7.17 19 8.1 19 10v.94a4 4 0 0 0 3-3.92A3.96 3.96 0 0 0 18.11 3"
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
            d="M11.25 6H9c-1.89 0-2.83 0-3.41.59C5 7.17 5 8.1 5 10v6.25h14V10c0-1.89 0-2.83-.59-3.41C17.83 6 16.9 6 15 6h-2.25v4.97l.68-.8a.75.75 0 1 1 1.14.99l-2 2.33a.75.75 0 0 1-1.14 0l-2-2.33a.75.75 0 1 1 1.14-.98l.68.8z"
            fill="currentColor"
          />
          <path
            d="M5.03 17.75h13.94c-.05.8-.19 1.3-.56 1.66-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59-.37-.36-.5-.87-.56-1.66"
            fill="currentColor"
          />
          <path
            d="M5.89 3H18.1C20.26 3 22 4.8 22 7.02c0 1.29-.59 2.44-1.5 3.17v-.28c0-.86 0-1.66-.09-2.3a3.5 3.5 0 0 0-.94-2.08 3.5 3.5 0 0 0-2.08-.94c-.64-.09-1.43-.09-2.3-.09H8.9c-.87 0-1.66 0-2.3.09-.72.1-1.47.32-2.08.94a3.5 3.5 0 0 0-.94 2.08c-.09.64-.09 1.44-.09 2.3v.28A4 4 0 0 1 2 7.02 3.96 3.96 0 0 1 5.89 3"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCashOut;
