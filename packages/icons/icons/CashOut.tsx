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
            d="M5.89 4.25a.75.75 0 0 0 0-1.5zM10 2.75a.75.75 0 0 0 0 1.5zm8.11 1.5a3.2 3.2 0 0 1 3.14 3.27h1.5a4.7 4.7 0 0 0-4.64-4.77zM5.9 2.75a4.7 4.7 0 0 0-4.64 4.77h1.5A3.2 3.2 0 0 1 5.9 4.25zm15.36 4.77a3.2 3.2 0 0 1-2.7 3.24l.23 1.48a4.7 4.7 0 0 0 3.97-4.72zm-15.8 3.24a3.2 3.2 0 0 1-2.7-3.24h-1.5c0 2.38 1.7 4.39 3.97 4.72zM10 4.25h8.11v-1.5H10z"
            fill="currentColor"
          />
          <path
            d="M12 9.5v5m-2-2.33 2 2.33 2-2.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 10.5c0-1.89 0-2.83.59-3.41C6.17 6.5 7.1 6.5 9 6.5h6c1.89 0 2.83 0 3.41.59.59.58.59 1.51.59 3.41v6c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59C5 19.33 5 18.4 5 16.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M5 17.5h8m6 0h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="M18.67 11.5A4 4 0 0 0 22 7.52a3.96 3.96 0 0 0-3.89-4.02H5.9A3.96 3.96 0 0 0 2 7.52c0 2.03 1.45 3.7 3.33 3.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 6.5v7m0 0 2-2.33m-2 2.33-2-2.33"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 10.5c0-1.89 0-2.83.59-3.41C6.17 6.5 7.1 6.5 9 6.5h6c1.89 0 2.83 0 3.41.59.59.58.59 1.51.59 3.41v6c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59C5 19.33 5 18.4 5 16.5z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5 17.5h14"
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
            d="M9 20.5h6c1.89 0 2.83 0 3.41-.59.48-.47.57-1.17.59-2.41H5c.02 1.24.11 1.94.59 2.41.58.59 1.51.59 3.41.59"
            fill="currentColor"
          />
          <path
            d="M11.25 6.5H9c-1.89 0-2.83 0-3.41.59C5 7.67 5 8.6 5 10.5v7h14v-7c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59h-2.25v4.97l.68-.8a.75.75 0 1 1 1.14.99l-2 2.33a.75.75 0 0 1-1.14 0l-2-2.33a.75.75 0 1 1 1.14-.98l.68.8z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.11 3.5H5.9A3.96 3.96 0 0 0 2 7.52a4 4 0 0 0 3 3.92v-.94c0-1.89 0-2.83.59-3.41C6.17 6.5 7.1 6.5 9 6.5h6c1.89 0 2.83 0 3.41.59.59.58.59 1.51.59 3.41v.94a4 4 0 0 0 3-3.92 3.96 3.96 0 0 0-3.89-4.02"
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
            d="M11.25 6.5H9c-1.89 0-2.83 0-3.41.59C5 7.67 5 8.6 5 10.5v6.25h14V10.5c0-1.89 0-2.83-.59-3.41-.58-.59-1.51-.59-3.41-.59h-2.25v4.97l.68-.8a.75.75 0 1 1 1.14.99l-2 2.33a.75.75 0 0 1-1.14 0l-2-2.33a.75.75 0 1 1 1.14-.98l.68.8z"
            fill="currentColor"
          />
          <path
            d="M5.03 18.25h13.94c-.05.8-.19 1.3-.56 1.66-.58.59-1.52.59-3.41.59H9c-1.89 0-2.83 0-3.41-.59-.37-.36-.5-.87-.56-1.66"
            fill="currentColor"
          />
          <path
            d="M5.89 3.5H18.1c2.16 0 3.9 1.8 3.9 4.02 0 1.29-.59 2.44-1.5 3.17v-.28c0-.86 0-1.66-.09-2.3a3.5 3.5 0 0 0-.94-2.08 3.5 3.5 0 0 0-2.08-.94C16.75 5 15.96 5 15.09 5H8.9c-.87 0-1.66 0-2.3.09-.72.1-1.47.32-2.08.94a3.5 3.5 0 0 0-.94 2.08c-.09.64-.09 1.44-.09 2.3v.28A4 4 0 0 1 2 7.52 3.96 3.96 0 0 1 5.89 3.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCashOut;
