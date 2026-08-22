import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLink3 = forwardRef<SVGSVGElement, IconProps>(function IconLink3(
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
            d="M3.94 12a5.52 5.52 0 0 1 4.23-9h5c3.02 0 5.5 2.48 5.5 5.5S16.2 14 13.17 14h-2.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.4 12a5.52 5.52 0 0 1-4.23 9h-5a5.5 5.5 0 0 1-5.5-5.5c0-3.02 2.47-5.5 5.5-5.5h2.5"
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
            d="M13.17 14.75h-2.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.5a4.75 4.75 0 0 0 0-9.5h-5a4.75 4.75 0 0 0-3.66 7.77c.26.32.22.79-.1 1.06a.76.76 0 0 1-1.06-.1A6.24 6.24 0 0 1 8.16 2.25h5a6.25 6.25 0 0 1 .01 12.5"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.17 21.75h-5a6.25 6.25 0 0 1 0-12.5h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5a4.75 4.75 0 0 0 0 9.5h5a4.75 4.75 0 0 0 3.66-7.77.76.76 0 0 1 .1-1.06.75.75 0 0 1 1.06.1 6.24 6.24 0 0 1-4.82 10.23"
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
            d="M13.17 14.75h-2.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.5a4.75 4.75 0 0 0 0-9.5h-5a4.75 4.75 0 0 0-3.66 7.77c.26.32.22.79-.1 1.06a.76.76 0 0 1-1.06-.1A6.25 6.25 0 0 1 8.17 2.25h5a6.25 6.25 0 0 1 0 12.5"
            fill="currentColor"
          />
          <path
            d="M17.17 21.75h-5a6.25 6.25 0 0 1 0-12.5h2.5c.41 0 .75.34.75.75s-.34.75-.75.75h-2.5a4.75 4.75 0 0 0 0 9.5h5a4.75 4.75 0 0 0 3.66-7.77.76.76 0 0 1 .1-1.06.75.75 0 0 1 1.06.1 6.24 6.24 0 0 1-4.82 10.23"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLink3;
