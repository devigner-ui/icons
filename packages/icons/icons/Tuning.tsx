import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTuning = forwardRef<SVGSVGElement, IconProps>(function IconTuning(
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
            d="M10 9.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M20 14.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17 11 .04-9M7 2v4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 13v9m10 0v-4"
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
            d="M13.75 14.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
            fill="currentColor"
          />
          <path d="M3.75 9.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0" fill="currentColor" />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M7.46 6.58a3 3 0 0 0-1.5.03V2a.75.75 0 0 1 1.5 0z"
              fill="currentColor"
            />
            <path
              d="M5.96 12.4a3 3 0 0 0 1.5.02V22a.75.75 0 0 1-1.5 0z"
              fill="currentColor"
            />
            <path
              d="M15.96 17.4V22a.75.75 0 0 0 1.5 0v-4.58a3 3 0 0 1-1.5-.03"
              fill="currentColor"
            />
            <path
              d="M17.46 11.58V2a.75.75 0 0 0-1.5 0v9.6a3 3 0 0 1 1.5-.02"
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
          <path
            d="M16.96 9.75A.75.75 0 0 1 16.2 9V2a.75.75 0 0 1 1.5 0v7c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path d="M7 12.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6" fill="currentColor" />
          <path d="M17 11.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6" fill="currentColor" />
          <path
            d="M6.2 15a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
          <path
            d="M16.96 22.75a.75.75 0 0 1-.75-.75v-2a.75.75 0 0 1 1.5 0v2c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M6.2 2a.75.75 0 1 1 1.5 0v2a.75.75 0 0 1-1.5 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTuning;
