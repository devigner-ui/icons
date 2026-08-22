import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSun2 = forwardRef<SVGSVGElement, IconProps>(function IconSun2(
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
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 2v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M12 20v2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 12H2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M22 12h-2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.78 4.22-2.22 2.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m4.22 4.22 2.22 2.03"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m6.44 17.56-2.22 2.22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m19.78 19.78-2.22-2.22"
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
          <path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75M12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M3.67 3.72a.75.75 0 0 1 1.06-.05L6.95 5.7a.75.75 0 0 1-1.01 1.1L3.72 4.79a.75.75 0 0 1-.05-1.06"
              fill="currentColor"
            />
            <path
              d="M20.33 3.72c.28.3.26.78-.05 1.06L18.06 6.8a.75.75 0 0 1-1.01-1.11l2.22-2.03a.75.75 0 0 1 1.06.05"
              fill="currentColor"
            />
            <path
              d="M17.03 17.02a.75.75 0 0 1 1.06 0l2.22 2.23a.75.75 0 1 1-1.06 1.06l-2.22-2.22a.75.75 0 0 1 0-1.07"
              fill="currentColor"
            />
            <path
              d="M6.97 17.02c.3.3.3.77 0 1.07L4.75 20.3a.75.75 0 0 1-1.06-1.06l2.22-2.23a.75.75 0 0 1 1.06 0"
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
          <path d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75M3.67 3.72a.75.75 0 0 1 1.06-.05L6.95 5.7a.75.75 0 1 1-1.01 1.1L3.72 4.79a.75.75 0 0 1-.05-1.06m16.66 0c.28.3.26.78-.05 1.06L18.06 6.8a.75.75 0 0 1-1.01-1.11l2.22-2.03a.75.75 0 0 1 1.06.05M1.25 12c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0c0-.41.34-.75.75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m-2.22 5.03c.29-.3.76-.3 1.06 0l2.22 2.22a.75.75 0 0 1-1.06 1.06l-2.22-2.22a.75.75 0 0 1 0-1.06m-10.06 0c.3.29.3.76 0 1.06L4.75 20.3a.75.75 0 0 1-1.06-1.06l2.22-2.22c.3-.3.77-.3 1.06 0M12 19.25c.41 0 .75.34.75.75v2a.75.75 0 0 1-1.5 0v-2c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSun2;
