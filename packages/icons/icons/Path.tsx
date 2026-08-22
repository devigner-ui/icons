import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPath = forwardRef<SVGSVGElement, IconProps>(function IconPath(
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
          <g clipPath="url(#clip0_12_78675)">
            <path
              d="m20.46 7.27-3.03-3.03c-1.15-1.15-2.72-1.09-3.49.14l-1.69 2.67 5.4 5.4 2.67-1.69c1.15-.73 1.22-2.41.14-3.49"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m12.25 7.05-3.93-.24c-2.19-.13-2.96.54-3.2 2.63l-.98 8.32c-.21 1.75 1.06 3.01 2.8 2.8l8.32-.98c2.09-.25 2.85-1.01 2.63-3.2l-.23-3.93"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5.28 19.42 3.03-3.04"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
            d="m20.69 10.7-2.8 1.77-5.66-5.66 1.76-2.8c.82-1.29 2.46-1.35 3.67-.15l3.18 3.18c1.13 1.13 1.06 2.89-.15 3.66"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m15.38 19.95-8.71 1.03q-.9.1-1.59-.24a2.4 2.4 0 0 1-1.11-1.11 3 3 0 0 1-.24-1.58l1.04-8.72c.25-2.18 1.06-2.89 3.36-2.76l4.12.25 5.66 5.66.24 4.12c.21 2.3-.58 3.1-2.77 3.35"
            fill="currentColor"
          />
          <path
            d="m8.65 17.15-3.58 3.58a2.4 2.4 0 0 1-1.11-1.11l3.59-3.59a.8.8 0 0 1 1.11 0c.31.32.31.81-.01 1.12"
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
            d="m20.69 10.7-2.12 1.34a1 1 0 0 1-1.24-.14L12.8 7.37a1 1 0 0 1-.14-1.24L14 4.01c.82-1.29 2.46-1.35 3.67-.15l3.18 3.18c1.12 1.13 1.05 2.89-.16 3.66"
            fill="currentColor"
          />
          <path
            d="m15.38 19.95-8.72 1.02-.23.02c-.69.04-.86-.77-.37-1.25l2.59-2.59a.76.76 0 0 0 0-1.11.8.8 0 0 0-1.11 0l-2.59 2.59c-.49.48-1.29.31-1.25-.37l.02-.22 1.03-8.72c.26-2.18 1.06-2.9 3.36-2.76l1.5.09q.76.06 1.3.59l6.55 6.55c.35.35.56.81.58 1.3l.09 1.5c.23 2.31-.56 3.11-2.75 3.36"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPath;
