import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDevices2 = forwardRef<SVGSVGElement, IconProps>(function IconDevices2(
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
            d="M17.68 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.67 6v1.79a7 7 0 0 0-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v5.11H6.67c-3.2 0-4-.8-4-4V6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 11.9h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M9.67 15.7V20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.62 20h6.05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M17.68 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.67 10.59v8.56c0 2.14-.71 2.85-2.85 2.85h-4.28c-2.14 0-2.85-.71-2.85-2.85v-8.56c0-2.14.71-2.85 2.85-2.85h4.28q.47 0 .85.05c1.48.19 2 .97 2 2.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.82 17.01a2.14 2.14 0 1 1-4.28 0 2.14 2.14 0 0 1 4.28 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.68 12.73a1.07 1.07 0 1 0 0-2.14 1.07 1.07 0 0 0 0 2.14"
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
            d="M16.67 2h-10c-3.2 0-4 .8-4 4v5.9c.03 3.03.87 3.8 4 3.8h2.25v3.55h-3.3a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h7.3a4 4 0 0 1-.23-1.5h-2.27V15.7h2.27v-5.11c0-2.14.71-2.85 2.85-2.85h4.28q.47 0 .85.05V6c0-3.2-.8-4-4-4"
            fill="currentColor"
          />
          <path
            d="M20.67 7.79a7 7 0 0 0-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66q.01.92.23 1.5c.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8m-2.99 2.3a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 1 1 0-3.14m0 9.06a2.14 2.14 0 1 1 0-4.29 2.14 2.14 0 0 1 0 4.29"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.82 17.01a2.14 2.14 0 1 1-4.28 0 2.14 2.14 0 0 1 4.28 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.68 13.23a1.57 1.57 0 1 0 0-3.14 1.57 1.57 0 0 0 0 3.14"
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
            d="M20.67 6v.24h-5.13c-2.97 0-4.35 1.38-4.35 4.35v5.11h-.77v3.55h.77v1.5H5.62a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.3V15.7H6.67c-3.13 0-3.97-.77-4-3.8V6c0-3.2.8-4 4-4h10c3.2 0 4 .8 4 4"
            fill="currentColor"
          />
          <path
            d="M20.67 7.79a7 7 0 0 0-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66q.01.92.23 1.5c.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8m-2.99 2.3a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 1 1 0-3.14m0 9.06a2.14 2.14 0 1 1 0-4.28 2.14 2.14 0 0 1 0 4.28"
            fill="currentColor"
          />
          <path
            d="M20.67 7.79a7 7 0 0 0-.85-.05h-4.28c-2.14 0-2.85.71-2.85 2.85v8.66q.01.92.23 1.5c.35.91 1.14 1.25 2.62 1.25h4.28c2.14 0 2.85-.71 2.85-2.85v-8.56c0-1.83-.52-2.61-2-2.8m-2.99 2.3a1.57 1.57 0 1 1 0 3.14 1.57 1.57 0 1 1 0-3.14m0 9.06a2.14 2.14 0 1 1 0-4.28 2.14 2.14 0 0 1 0 4.28"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDevices2;
