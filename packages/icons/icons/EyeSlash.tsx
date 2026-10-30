import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEyeSlash = forwardRef<SVGSVGElement, IconProps>(function IconEyeSlash(
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
            d="m14.53 9.47-5.06 5.06a3.58 3.58 0 1 1 5.06-5.06Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M5.6 17.76q-1.5-1.3-2.71-3.17a5.3 5.3 0 0 1 0-5.19 13 13 0 0 1 4.23-4.27"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M17.82 5.77A9.6 9.6 0 0 0 12 3.73"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.42 19.53q1.72.73 3.58.74c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19q-.5-.78-1.06-1.47"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15.5 12.7a3.6 3.6 0 0 1-2.81 2.82"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9.47 14.53 2 22"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m22 2-7.47 7.47"
            strokeWidth={strokeWidth}
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
            d="m14.53 9.47-5.06 5.06a3.58 3.58 0 1 1 5.06-5.06"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.82 5.77A9.6 9.6 0 0 0 12 3.73c-3.53 0-6.82 2.08-9.11 5.68a5.3 5.3 0 0 0 0 5.19 14 14 0 0 0 2.71 3.17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.42 19.53q1.72.73 3.58.74c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19q-.5-.78-1.06-1.47"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M15.51 12.7a3.6 3.6 0 0 1-2.82 2.82"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.47 14.53 2 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m22 2-7.47 7.47"
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
            opacity={duotone ? "0.4" : "1"}
            d="M21.25 9.15a15 15 0 0 0-1.63-2.11l-3.77 3.77q.19.56.19 1.19a4.04 4.04 0 0 1-5.23 3.85l-3.46 3.46A9.5 9.5 0 0 0 12 20.56c1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69"
            fill="currentColor"
          />
          <path
            d="m14.02 9.98-4.04 4.04a2.87 2.87 0 0 1 4.04-4.04"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m18.25 5.75-3.39 3.39a4.04 4.04 0 1 0-5.72 5.72l-3.38 3.39h-.01a14 14 0 0 1-3-3.41c-1-1.57-1-4.12 0-5.69a13 13 0 0 1 4.16-4.23A10 10 0 0 1 12 3.43c2.23 0 4.39.82 6.25 2.32"
            fill="currentColor"
          />
          <path
            d="M14.86 12A2.87 2.87 0 0 1 12 14.86q-.09 0-.17-.02l3.01-3.01z"
            fill="currentColor"
          />
          <path
            d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
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
            d="M21.27 9.18q-.44-.69-.92-1.29a1 1 0 0 0-1.49-.09l-3 3q.35 1 .06 2.21a4 4 0 0 1-5.11 2.84l-2.46 2.46a1 1 0 0 0 .33 1.64q1.6.62 3.32.62c1.78 0 3.51-.52 5.09-1.49 1.61-1 3.06-2.47 4.23-4.34.95-1.51.9-4.05-.05-5.56"
            fill="currentColor"
          />
          <path
            d="m14.02 9.98-4.04 4.04a2.87 2.87 0 0 1 4.04-4.04"
            fill="currentColor"
          />
          <path
            d="m18.25 5.75-3.39 3.39a4.04 4.04 0 1 0-5.72 5.72l-3.38 3.39h-.01a14 14 0 0 1-3-3.41c-1-1.57-1-4.12 0-5.69a13 13 0 0 1 4.16-4.23A10 10 0 0 1 12 3.43c2.23 0 4.39.82 6.25 2.32"
            fill="currentColor"
          />
          <path
            d="M14.86 12A2.87 2.87 0 0 1 12 14.86q-.09 0-.17-.02l3.01-3.01z"
            fill="currentColor"
          />
          <path
            d="M21.77 2.23a.77.77 0 0 0-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L21.77 3.31a.74.74 0 0 0 0-1.08"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEyeSlash;
