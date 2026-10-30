import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRadarSweepLong = forwardRef<SVGSVGElement, IconProps>(function IconRadarSweepLong(
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
            d="M6 4a10 10 0 0 1 15.37 11.52m-1.78 2.99-.1.11A9.99 9.99 0 0 1 3.33 7.02L12 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.83 8.96a6 6 0 1 0 2.62-2.39"
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
            d="M6 4a10 10 0 1 1-2.67 3.02L12 12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6.83 8.96a6 6 0 1 0 2.62-2.39"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M12 4.25c-1.69 0-3.3.54-4.65 1.55a.75.75 0 0 0 .9 1.2 6.25 6.25 0 1 1-2.01 2.56l1.14.65a4.95 4.95 0 1 0 2.5-2.69.75.75 0 0 0-.36 1c.18.37.62.53 1 .36q.69-.33 1.47-.33a3.46 3.46 0 0 1 0 6.9A3.46 3.46 0 0 1 8.54 12q.01-.52.17-1.02l2.91 1.67c.36.21.82.08 1.02-.28a.74.74 0 0 0-.28-1.02L6.29 7.86a.74.74 0 0 0-1.02.28 7.76 7.76 0 0 0 6.72 11.61A7.75 7.75 0 0 0 12 4.25"
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
          <g clipPath="url(#clip0_12_64864)">
            <path
              d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m0 17.75A7.76 7.76 0 0 1 5.28 8.14a.75.75 0 0 1 1.02-.28l6.07 3.49c.36.21.48.66.28 1.02a.75.75 0 0 1-1.02.28l-2.91-1.67q-.16.5-.17 1.02a3.46 3.46 0 0 0 6.9 0 3.46 3.46 0 0 0-4.92-3.12.74.74 0 0 1-1-.36.75.75 0 0 1 .36-1 4.95 4.95 0 1 1-2.5 2.69l-1.15-.65q-.48 1.17-.49 2.44a6.25 6.25 0 1 0 2.5-5 .75.75 0 0 1-.9-1.2 7.76 7.76 0 0 1 12.4 6.2A7.76 7.76 0 0 1 12 19.75"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath>
              <rect
                width="24"
                height="24"
                fill="none"
                transform="translate(0.669922)"
              />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
});

export default IconRadarSweepLong;
