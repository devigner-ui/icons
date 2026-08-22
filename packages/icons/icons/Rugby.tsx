import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRugby = forwardRef<SVGSVGElement, IconProps>(function IconRugby(
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
            d="M13.46 2.11c-2.89.28-5.95 1.14-8.08 3.27s-3 5.2-3.27 8.08M13.46 2.1c1.67-.16 3.28-.12 4.6-.02a4.14 4.14 0 0 1 3.85 3.84c.1 1.33.14 2.94-.02 4.61M13.46 2.1l8.43 8.43m0 0c-.28 2.89-1.14 5.95-3.27 8.08s-5.2 3-8.08 3.27m0 0c-1.67.16-3.28.13-4.6.02a4.14 4.14 0 0 1-3.85-3.84c-.1-1.33-.14-2.94.02-4.61m8.43 8.43-8.43-8.43"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.31 8.7-6.62 6.6m0-2.84 2.84 2.84m-.95-4.73 2.84 2.84m-.95-4.73 2.84 2.84"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            d="M13.46 2.11c-2.89.28-5.95 1.14-8.08 3.27s-3 5.2-3.27 8.08l8.43 8.43c2.89-.28 5.95-1.14 8.08-3.27s3-5.2 3.27-8.08z"
            fill="currentColor"
          />
          <path
            d="M18.07 2.09c-1.33-.1-2.94-.14-4.61.02l8.43 8.43c.16-1.67.12-3.28.02-4.6a4.14 4.14 0 0 0-3.84-3.85"
            fill="currentColor"
          />
          <path
            d="M5.93 21.91c1.33.1 2.94.14 4.61-.02l-8.43-8.43a27 27 0 0 0-.02 4.6 4.14 4.14 0 0 0 3.84 3.85"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.94 8.16c.3-.3.77-.3 1.06 0l.9.89.88-.89a.75.75 0 1 1 1.06 1.06l-.89.89.89.89a.75.75 0 1 1-1.06 1.06l-.89-.89-.83.83.89.89a.75.75 0 0 1-1.06 1.06l-.89-.89-.83.83.89.89A.75.75 0 0 1 11 15.84l-.9-.89-.88.9a.75.75 0 1 1-1.06-1.07l.89-.89-.89-.89a.75.75 0 1 1 1.06-1.06l.89.9.83-.84-.89-.89a.75.75 0 0 1 1.06-1.06l.89.89.83-.83-.89-.89a.75.75 0 0 1 0-1.06"
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
            d="M21.91 5.93a4.14 4.14 0 0 0-3.84-3.84 28 28 0 0 0-3.63-.05l7.52 7.52c.07-1.32.03-2.56-.05-3.63"
            fill="currentColor"
          />
          <path
            d="M2.09 18.07a4.14 4.14 0 0 0 3.84 3.84c1.07.08 2.31.12 3.63.05l-7.52-7.52c-.07 1.32-.03 2.56.05 3.63"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.22 12.5c.37-2.58 1.26-5.22 3.16-7.12s4.54-2.79 7.13-3.16l9.27 9.27c-.37 2.6-1.26 5.23-3.16 7.13s-4.54 2.79-7.13 3.16zm9.72-4.34c.3-.3.77-.3 1.06 0l.9.89.88-.89a.75.75 0 1 1 1.06 1.06l-.89.89.89.89a.75.75 0 1 1-1.06 1.06l-.89-.89-.83.83.89.89a.75.75 0 0 1-1.06 1.06l-.89-.89-.83.83.89.89A.75.75 0 0 1 11 15.84l-.9-.89-.88.9a.75.75 0 1 1-1.06-1.07l.89-.89-.89-.89a.75.75 0 1 1 1.06-1.06l.89.9.83-.84-.89-.89a.75.75 0 0 1 1.06-1.06l.89.89.83-.83-.89-.89a.75.75 0 0 1 0-1.06"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRugby;
