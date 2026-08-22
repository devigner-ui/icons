import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStation = forwardRef<SVGSVGElement, IconProps>(function IconStation(
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
            d="M19.14 2.08a9.97 9.97 0 0 1-.06 14.06M5 16.22A9.97 9.97 0 0 1 4.94 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.28 5.12A5.4 5.4 0 0 1 18 9.06c0 1.55-.67 2.96-1.75 3.97m-8.45.05A5.4 5.4 0 0 1 6 9.06c0-1.55.67-2.96 1.76-3.98"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="9.07849"
            r="2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12.5 11 16 22l-5.5-6.5m1-4.5L8 22l5.5-6.5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.83 10.62a2 2 0 1 1 2.34 0l3.54 11.15a.75.75 0 0 1-1.28.71L12 18.43l-3.43 4.05a.75.75 0 0 1-1.28-.7zm2.15 6.65 1.17 1.38-.64-2zm0-2.3-.05.05-.93 1.1-.93-1.1-.04-.05.97-3.07zm-2.49 1.68.53.62-1.17 1.38z"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M5.47 2.53A.75.75 0 1 0 4.4 1.47a10.7 10.7 0 0 0 .06 15.29.75.75 0 1 0 1.06-1.08 9.2 9.2 0 0 1-.06-13.15"
              fill="currentColor"
            />
            <path
              d="M19.68 1.55A.75.75 0 1 0 18.6 2.6a9.2 9.2 0 0 1-.06 13.01.75.75 0 0 0 1.06 1.06 10.7 10.7 0 0 0 .07-15.12"
              fill="currentColor"
            />
          </g>
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M8.27 5.63a.75.75 0 0 0-1.02-1.1 6.2 6.2 0 0 0-2 4.53c0 1.8.79 3.42 2.04 4.57a.75.75 0 0 0 1.02-1.1 4.7 4.7 0 0 1-1.56-3.47 4.7 4.7 0 0 1 1.52-3.43"
              fill="currentColor"
            />
            <path
              d="M16.8 4.58a.75.75 0 0 0-1.03 1.08 4.7 4.7 0 0 1 1.48 3.4c0 1.33-.57 2.54-1.52 3.43a.75.75 0 0 0 1.03 1.1 6.2 6.2 0 0 0 1.99-4.53c0-1.75-.75-3.33-1.95-4.48"
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
            d="M5.47 2.53A.75.75 0 1 0 4.4 1.47a10.7 10.7 0 0 0 .06 15.29.75.75 0 1 0 1.06-1.08 9.2 9.2 0 0 1-.06-13.15"
            fill="currentColor"
          />
          <path
            d="M19.68 1.55A.75.75 0 1 0 18.6 2.6a9.2 9.2 0 0 1-.06 13.01.75.75 0 0 0 1.06 1.06 10.7 10.7 0 0 0 .07-15.12"
            fill="currentColor"
          />
          <path
            d="M8.27 5.63a.75.75 0 0 0-1.02-1.1 6.2 6.2 0 0 0-2 4.53c0 1.8.79 3.42 2.04 4.57a.75.75 0 0 0 1.02-1.1 4.7 4.7 0 0 1-1.56-3.47 4.7 4.7 0 0 1 1.52-3.43"
            fill="currentColor"
          />
          <path
            d="M16.8 4.58a.75.75 0 0 0-1.03 1.08 4.7 4.7 0 0 1 1.48 3.4c0 1.33-.57 2.54-1.52 3.43a.75.75 0 0 0 1.03 1.1 6.2 6.2 0 0 0 1.99-4.53c0-1.75-.75-3.33-1.95-4.48"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.83 10.62a2 2 0 1 1 2.34 0l3.54 11.15a.75.75 0 0 1-1.28.71L12 18.43l-3.43 4.05a.75.75 0 0 1-1.28-.7zm2.15 6.65 1.17 1.38-.64-2zm0-2.3-.05.05-.93 1.1-.93-1.1-.04-.05.97-3.07zm-2.49 1.68.53.62-1.17 1.38z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconStation;
