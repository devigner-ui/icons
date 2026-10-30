import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudWaterdrop = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudWaterdrop(
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
            d="M15 18.58a2.96 2.96 0 0 1-3 2.92c-1.66 0-3-1.3-3-2.92 0-.9.96-2.1 1.8-2.96a1.67 1.67 0 0 1 2.4 0c.84.86 1.8 2.05 1.8 2.96Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M22 12.85a5.65 5.65 0 0 1-3.5 5.21M14.38 7.53a5.8 5.8 0 0 1 3.78-.03m-9.5 3.23a4.3 4.3 0 0 0-2.37-.71A4.26 4.26 0 0 0 2 14.26c0 1.9 1.26 3.5 3 4.05m2.12-8.2a5.68 5.68 0 0 1 5.36-7.61 5.7 5.7 0 0 1 5.68 5m0 0q1.34.47 2.3 1.49"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M6.29 18.5A4.26 4.26 0 0 1 2 14.26a4.26 4.26 0 0 1 5.12-4.15m7.26-2.58a5.8 5.8 0 0 1 3.78-.03M7.12 10.1a5.68 5.68 0 0 1 5.36-7.6 5.7 5.7 0 0 1 5.68 5M7.12 10.1q.85.16 1.55.63m9.49-3.23A5.65 5.65 0 0 1 22 12.85a5.7 5.7 0 0 1-4.5 5.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 18.58a2.96 2.96 0 0 1-3 2.92c-1.66 0-3-1.3-3-2.92 0-.9.96-2.1 1.8-2.96a1.67 1.67 0 0 1 2.4 0c.84.86 1.8 2.05 1.8 2.96"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M16.29 18.5A5.7 5.7 0 0 0 22 12.85c0-2.47-1.6-4.57-3.84-5.34a5.7 5.7 0 0 0-5.68-5.01 5.68 5.68 0 0 0-5.36 7.6A4.26 4.26 0 0 0 2 14.27a4.26 4.26 0 0 0 4.29 4.23z"
              fill="currentColor"
            />
            <path
              d="M15 18.58a2.96 2.96 0 0 1-3 2.92c-1.66 0-3-1.3-3-2.92 0-.9.96-2.1 1.8-2.96a1.67 1.67 0 0 1 2.4 0c.84.86 1.8 2.05 1.8 2.96"
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
              d="M15 18.58a2.96 2.96 0 0 1-3 2.92c-1.66 0-3-1.3-3-2.92 0-.9.96-2.1 1.8-2.96a1.67 1.67 0 0 1 2.4 0c.84.86 1.8 2.05 1.8 2.96"
              fill="currentColor"
            />
            <path
              d="M9.72 14.58a12 12 0 0 0-1.38 1.67 4.4 4.4 0 0 0-.84 2.25H6.3A4.26 4.26 0 0 1 2 14.26a4.26 4.26 0 0 1 5.12-4.15 5.68 5.68 0 0 1 5.36-7.61 5.7 5.7 0 0 1 5.68 5A5.65 5.65 0 0 1 22 12.85a5.7 5.7 0 0 1-5.5 5.65 4.5 4.5 0 0 0-.84-2.25c-.41-.62-.93-1.2-1.38-1.67a3.17 3.17 0 0 0-4.56 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudWaterdrop;
