import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTuning4 = forwardRef<SVGSVGElement, IconProps>(function IconTuning4(
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
            d="M12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M14 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M10 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 20h7m0-8h-5m5-8h-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 4H5m5 8H5m0 8h2.67"
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
          <path d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0" fill="currentColor" />
          <path d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" fill="currentColor" />
          <path d="M10 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4" fill="currentColor" />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M13.85 12.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5z"
              fill="currentColor"
            />
            <path
              d="M10.15 11.25a2 2 0 0 0 0 1.5H5a.75.75 0 0 1 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M11.85 19.25a2 2 0 0 1 0 1.5H19a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M8.15 19.25H5a.75.75 0 0 0 0 1.5h3.15a2 2 0 0 1 0-1.5"
              fill="currentColor"
            />
            <path
              d="M15.85 4.75a2 2 0 0 0 0-1.5H19a.75.75 0 0 1 0 1.5z"
              fill="currentColor"
            />
            <path
              d="M12.15 4.75a2 2 0 0 1 0-1.5H5a.75.75 0 0 0 0 1.5z"
              fill="currentColor"
            />
          </g>
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
          <path d="M12 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0" fill="currentColor" />
          <path d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4" fill="currentColor" />
          <path d="M10 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4" fill="currentColor" />
          <path
            d="M15.25 12c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M14 19.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M10.75 4a.75.75 0 0 0-.75-.75H5a.75.75 0 1 0 0 1.5h5c.41 0 .75-.34.75-.75"
            fill="currentColor"
          />
          <path
            d="M5 11.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M4.25 20c0-.41.34-.75.75-.75h1a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M19 3.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTuning4;
