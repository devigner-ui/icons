import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBucket = forwardRef<SVGSVGElement, IconProps>(function IconBucket(
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
            d="m7.68 18-4.01-4.01q-2.01-2 0-4.01l6.68-6.68 7.35 7.35c.37.37.37.97 0 1.34l-6.02 6.02q-1.98 1.98-4-.01"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9.02 1.95 1.34 1.34"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m2.74 11.92 15.12-.66"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.67 22h13"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.52 15s-1.85 2.01-1.85 3.24a1.85 1.85 0 0 0 3.7 0c0-1.23-1.85-3.24-1.85-3.24"
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
            d="M17.98 11.25a1 1 0 0 1-.27.73L11.69 18q-2 2-4.01 0l-4.01-4.01q-1.02-1.04-1-2.07h.07l15.12-.66z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17.71 10.64-7.35-7.35-.87-.87a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.87.87-5.63 5.63q-.96.96-1 1.94h.07l15.12-.66.12-.01a1 1 0 0 0-.27-.61"
            fill="currentColor"
          />
          <path
            d="M16.67 22.75h-13a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M20.02 14.78a.7.7 0 0 0-1 0c-.31.34-1.85 2.08-1.85 3.39a2.35 2.35 0 1 0 4.7 0c0-1.31-1.54-3.05-1.85-3.39"
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
            d="m17.71 10.64-7.35-7.35-.87-.87a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l.87.87-5.63 5.63q-.96.96-1 1.94-.02 1.04 1 2.07L7.68 18q2.01 2 4.01 0l6.02-6.02c.2-.2.29-.47.27-.73a1 1 0 0 0-.27-.61"
            fill="currentColor"
          />
          <path
            d="M16.67 22.75h-13a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M20.02 14.78a.7.7 0 0 0-1 0c-.31.34-1.85 2.07-1.85 3.39a2.35 2.35 0 1 0 4.7 0c0-1.31-1.54-3.05-1.85-3.39"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBucket;
