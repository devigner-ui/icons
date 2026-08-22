import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconAward = forwardRef<SVGSVGElement, IconProps>(function IconAward(
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
            d="M4.93 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73a2.9 2.9 0 0 0-2.58 0L6.65 8.04C4.93 9.2 4.93 9.2 4.93 11.02"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M18.17 7.63V5q0-3-3-3h-5q-3 0-3 3v2.56"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m13.3 10.99.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81a1 1 0 0 0-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a1 1 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05a1 1 0 0 0-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26a1 1 0 0 0 .44-.32l.57-.89c.36-.54.92-.54 1.27 0"
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
            d="m18.62 7.71-.14-.08-1.39-.8-2.87-1.66a3.3 3.3 0 0 0-3.1 0L8.25 6.83l-1.39.81-.18.1c-1.79 1.2-1.91 1.42-1.91 3.35v4.61c0 1.93.12 2.15 1.95 3.38l4.4 2.54c.44.26.99.38 1.55.38a3 3 0 0 0 1.55-.38l4.44-2.57c1.79-1.2 1.91-1.42 1.91-3.35v-4.61c0-1.93-.12-2.15-1.95-3.38"
            fill="currentColor"
          />
          <path
            d="m6.86 7.64 1.39-.81 2.74-1.58.13-.08a3.3 3.3 0 0 1 3.1 0l.13.08 2.74 1.58 1.39.8V5.49c0-2.25-1.24-3.49-3.49-3.49h-4.65C8.09 2 6.86 3.24 6.86 5.49z"
            fill="currentColor"
          />
          <path
            d="m15.51 13.34-.62.76a1 1 0 0 0-.16.48l.06.98c.04.6-.39.91-.95.69l-.91-.36a1 1 0 0 0-.52 0l-.91.36c-.56.22-.99-.09-.95-.69l.06-.98a1 1 0 0 0-.16-.48l-.62-.76c-.39-.46-.22-.97.36-1.12l.95-.24a1 1 0 0 0 .41-.31l.53-.82c.33-.51.85-.51 1.18 0l.53.82a1 1 0 0 0 .41.31l.95.24c.58.15.75.66.36 1.12"
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
            d="M18.48 5.49v.74l-3.54-2.05a4.8 4.8 0 0 0-4.54 0L6.86 6.24v-.75C6.86 3.24 8.09 2 10.34 2H15c2.25 0 3.48 1.24 3.48 3.49"
            fill="currentColor"
          />
          <path
            d="m18.51 7.97-.14-.07-1.36-.78-2.82-1.63c-.86-.5-2.18-.5-3.04 0L8.33 7.11l-1.36.8-.18.09c-1.75 1.18-1.87 1.4-1.87 3.29v4.52c0 1.89.12 2.11 1.91 3.32l4.32 2.49c.43.26.97.37 1.52.37.54 0 1.09-.12 1.52-.37l4.36-2.52c1.76-1.18 1.87-1.39 1.87-3.29v-4.52c0-1.89-.12-2.11-1.91-3.32m-3.05 5.53-.61.75a.7.7 0 0 0-.16.47l.06.96c.04.59-.38.89-.93.68l-.89-.36a1 1 0 0 0-.51 0l-.89.35c-.55.22-.97-.09-.93-.68l.06-.96a.7.7 0 0 0-.16-.47l-.62-.74c-.38-.45-.21-.95.36-1.1l.93-.24a1 1 0 0 0 .4-.3l.52-.8c.32-.5.83-.5 1.16 0l.52.8a1 1 0 0 0 .4.3l.93.24c.57.15.74.65.36 1.1"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconAward;
