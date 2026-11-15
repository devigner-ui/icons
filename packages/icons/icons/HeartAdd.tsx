import { forwardRef, useId } from "react";
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

  /* Bold cuts the heart around the plus disc with an even gap. */
  const cut = useId();

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
            d="M7.56 2.43c1.81 0 3.43.88 4.44 2.23a5.55 5.55 0 0 1 10 3.36c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-7.06 6.49q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.48 19.15 2 15.02 2 8.02c0-1.55.62-2.95 1.63-3.96"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 16.53a4.8 4.8 0 1 1-9.6 0 4.8 4.8 0 0 1 9.6 0Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.99 16.59h-3.58"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.2 14.84v3.59"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
            d="M17.2 21.33a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.99 16.59h-3.58"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.2 14.84v3.59"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 8.02c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-7.06 6.49q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.48 19.15 2 15.02 2 8.02a5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
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
            d="M17.2 10.98a5.55 5.55 0 1 0 0 11.1 5.55 5.55 0 0 0 0-11.1zm-.75 3.76a.75.75 0 0 1 1.5 0v1.04h1.04a.75.75 0 0 1 0 1.5h-1.04v1.04a.75.75 0 0 1-1.5 0v-1.04h-1.04a.75.75 0 0 1 0-1.5h1.04z"
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
            d="M17.2 10.98a5.55 5.55 0 1 0 0 11.1 5.55 5.55 0 0 0 0-11.1zm-.75 3.76a.75.75 0 0 1 1.5 0v1.04h1.04a.75.75 0 0 1 0 1.5h-1.04v1.04a.75.75 0 0 1-1.5 0v-1.04h-1.04a.75.75 0 0 1 0-1.5h1.04z"
          />
          <mask id={cut} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="white" />
              <circle cx="17.2" cy="16.53" r="6.3" fill="black" />
            </mask>
          <path
            fill="currentColor"
            d="M22 8.69a11 11 0 0 1-1.32 5.21 4.8 4.8 0 0 0-7.05 6.5q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C8.97 19.99 4.1 17 2.52 12A11 11 0 0 1 2 8.69a5.55 5.55 0 0 1 10-3.36 5.6 5.6 0 0 1 4.44-2.23C19.51 3.1 22 5.6 22 8.69"
            mask={`url(#${cut})`}
          />
        </svg>
      )}
    </>
  );
});

export default IconHeartAdd;
