import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFeed = forwardRef<SVGSVGElement, IconProps>(function IconFeed(
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
            d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 12c0-1.41 0-2.12.44-2.56S7.59 9 9 9h6c1.41 0 2.12 0 2.56.44S18 10.59 18 12v4c0 1.41 0 2.12-.44 2.56S16.41 19 15 19H9c-1.41 0-2.12 0-2.56-.44S6 17.41 6 16z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 6h5"
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
            d="M4.17 3.17C3 4.34 3 6.23 3 10v4c0 3.77 0 5.66 1.17 6.83S7.23 22 11 22h2c3.77 0 5.66 0 6.83-1.17S21 17.77 21 14v-4c0-3.77 0-5.66-1.17-6.83S16.77 2 13 2h-2C7.23 2 5.34 2 4.17 3.17"
            fill="currentColor"
          />
          <path
            d="M6 12c0-1.41 0-2.12.44-2.56S7.59 9 9 9h6c1.41 0 2.12 0 2.56.44S18 10.59 18 12v4c0 1.41 0 2.12-.44 2.56S16.41 19 15 19H9c-1.41 0-2.12 0-2.56-.44S6 17.41 6 16z"
            fill="currentColor"
          />
          <path
            d="M7 5.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
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
            d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v4c0 3.77 0 5.66-1.17 6.83S16.77 22 13 22h-2c-3.77 0-5.66 0-6.83-1.17S3 17.77 3 14zm3 2c0-1.41 0-2.12.44-2.56S7.59 9 9 9h6c1.41 0 2.12 0 2.56.44S18 10.59 18 12v4c0 1.41 0 2.12-.44 2.56S16.41 19 15 19H9c-1.41 0-2.12 0-2.56-.44S6 17.41 6 16zm1-6.75a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFeed;
