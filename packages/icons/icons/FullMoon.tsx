import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFullMoon = forwardRef<SVGSVGElement, IconProps>(function IconFullMoon(
  { className, variant = "Outline", strokeWidth = "1.5", ...rest },
  ref,
) {
  const fill = variant === "Bold" || variant === "Bulk";
  const duotone = variant === "TwoTone" || variant === "Bulk";

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
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.09 13.31a6 6 0 0 1 7.3 8.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21.82 13.88a6 6 0 0 1-3.5-9.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M13 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12 2a10 10 0 0 0-9.91 11.31 6 6 0 0 1 7.3 8.34 10 10 0 0 0 12.43-7.77 6 6 0 0 1-3.5-9.63A10 10 0 0 0 12 2"
            fill="currentColor"
          />
          <path
            d="M2.08 13.31c.53 4.03 3.46 7.3 7.3 8.34Q10 20.44 10 19a6 6 0 0 0-7.92-5.69"
            fill="currentColor"
          />
          <path
            d="M21.82 13.88a10 10 0 0 0-3.5-9.63 6 6 0 0 0 3.5 9.64"
            fill="currentColor"
          />
          <path d="M16 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="currentColor" />
          <path
            d="M13 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
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
            d="M2 12a10 10 0 0 1 15.72-8.2 6.75 6.75 0 0 0 3.94 10.82 10 10 0 0 1-11.53 7.2q.61-1.29.62-2.82a6.75 6.75 0 0 0-8.74-6.45zm14 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-5.5-5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
            fill="currentColor"
          />
          <path
            d="M17.75 8c0-1.23.42-2.36 1.13-3.26a10 10 0 0 1 3.06 8.4A5.25 5.25 0 0 1 17.75 8"
            fill="currentColor"
          />
          <path
            d="M8.66 21.43a10 10 0 0 1-6.45-7.37l.11-.04a5.24 5.24 0 0 1 6.39 7.3z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFullMoon;
