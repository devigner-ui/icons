import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartAdd = forwardRef<SVGSVGElement, IconProps>(function IconHeartAdd(
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
            d="M17.87 22a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.66 17.26h-3.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.87 15.51v3.59"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 8.69c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-7.06 6.49q-.56.26-1.01.41c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12a5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
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
            fill="currentColor"
            d="M20.68 13.91a4.8 4.8 0 1 0 0 .01m-1.69 4.1h-1.04v1.09c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.09h-1.04a.74.74 0 0 1-.75-.75c0-.41.32-.74.74-.75h1.05v-1l.01-.06a.74.74 0 0 1 .74-.69c.4 0 .73.32.75.72v1.03h1.04c.42 0 .75.34.75.75 0 .42-.33.75-.75.75"
          />
          <path
            fill="currentColor"
            d="M22 8.69a11 11 0 0 1-1.32 5.21 4.8 4.8 0 0 0-7.05 6.5q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.97 19.99 4.1 17 2.52 12A11 11 0 0 1 2 8.69a5.55 5.55 0 0 1 10-3.36 5.6 5.6 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69"
            opacity={duotone ? "0.4" : "1"}
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
            fill="currentColor"
            d="M20.68 13.9a4.8 4.8 0 1 0 0 .01M18.99 18h-1.04v1.09c0 .4-.34.75-.75.75s-.75-.34-.75-.75V18h-1.04a.74.74 0 0 1-.75-.74c0-.41.32-.74.74-.75h1.05v-1l.01-.06a.74.74 0 0 1 .74-.7c.4 0 .73.33.75.73v1.03h1.04c.42 0 .75.34.75.75 0 .42-.33.75-.75.75"
          />
          <path
            fill="currentColor"
            d="M22 8.73q-.01 1.78-.52 3.31c-.06.21-.31.27-.49.14a6.4 6.4 0 0 0-3.79-1.24 6.3 6.3 0 0 0-5.49 9.38c.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81A11 11 0 0 1 2 8.73a5.55 5.55 0 0 1 10-3.36 5.6 5.6 0 0 1 4.44-2.23c3.07 0 5.56 2.5 5.56 5.59"
          />
        </svg>
      )}
    </>
  );
});

export default IconHeartAdd;
