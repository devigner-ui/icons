import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRevote = forwardRef<SVGSVGElement, IconProps>(function IconRevote(
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
            d="M4.85 4.6a.75.75 0 0 0-1.07-1.06zM8.4 2.77l-.53-.53a.75.75 0 0 0 0 1.05zm1.22 2.3a.75.75 0 1 0 1.06-1.05zm1.06-3.55A.75.75 0 1 0 9.62.47zM12 20.25c-2.14 0-3.67 0-4.84-.16-1.14-.16-1.81-.45-2.3-.95l-1.08 1.05c.82.83 1.87 1.2 3.18 1.39 1.29.17 2.94.17 5.04.17zm-9.75-8.39c0 2.14 0 3.81.17 5.11a5.3 5.3 0 0 0 1.36 3.22l1.07-1.05c-.5-.51-.79-1.2-.94-2.36a42 42 0 0 1-.16-4.92zm18 0c0 2.18 0 3.73-.16 4.92-.15 1.16-.44 1.85-.94 2.36l1.07 1.05a5.3 5.3 0 0 0 1.36-3.22c.17-1.3.17-2.97.17-5.1zM12 21.75c2.1 0 3.75 0 5.04-.17a5.2 5.2 0 0 0 3.18-1.4l-1.07-1.04c-.5.5-1.17.8-2.31.95-1.17.16-2.7.16-4.84.16zm0-18.27c2.14 0 3.67 0 4.84.16 1.14.15 1.81.45 2.3.95l1.08-1.05a5.2 5.2 0 0 0-3.18-1.39c-1.29-.17-2.94-.17-5.04-.17zm9.75 8.38c0-2.13 0-3.8-.17-5.1a5.3 5.3 0 0 0-1.36-3.22l-1.07 1.05c.5.5.79 1.2.94 2.36.16 1.18.16 2.74.16 4.91zm-18 0c0-2.17 0-3.73.16-4.91.15-1.16.44-1.85.94-2.36L3.78 3.54a5.3 5.3 0 0 0-1.36 3.21c-.17 1.3-.17 2.98-.17 5.11zM12 1.98q-2.12-.01-3.64.05l.08 1.5q1.44-.06 3.56-.05zM7.87 3.3l1.75 1.78 1.06-1.05-1.75-1.78zm1.06 0 1.75-1.77L9.62.47 7.87 2.25z"
            fill="currentColor"
          />
          <path
            d="m8.5 12.5 2 2 5-5"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.43.3c.29.12.47.4.47.7v.98h1.16c2.07 0 3.7 0 4.98.17 1.31.18 2.36.55 3.18 1.39a5.3 5.3 0 0 1 1.36 3.21c.17 1.3.17 2.95.17 5.06v.11c0 2.1 0 3.76-.17 5.05a5.3 5.3 0 0 1-1.36 3.22 5.2 5.2 0 0 1-3.18 1.39c-1.28.17-2.91.17-4.98.17h-.12c-2.07 0-3.7 0-4.98-.17a5.2 5.2 0 0 1-3.18-1.4 5.3 5.3 0 0 1-1.36-3.2c-.17-1.3-.17-2.95-.17-5.06v-.11c0-2.1 0-3.76.17-5.06a5.3 5.3 0 0 1 1.36-3.21.75.75 0 1 1 1.07 1.05c-.5.5-.79 1.2-.94 2.36a42 42 0 0 0-.16 4.91c0 2.18 0 3.73.16 4.92.15 1.16.44 1.85.94 2.36s1.17.8 2.31.95c1.17.16 2.7.16 4.84.16s3.67 0 4.84-.16c1.14-.16 1.81-.45 2.3-.95.5-.51.8-1.2.95-2.36.16-1.19.16-2.74.16-4.92s0-3.73-.16-4.91c-.15-1.16-.44-1.85-.94-2.36s-1.17-.8-2.31-.95c-1.17-.16-2.7-.16-4.84-.16h-1.1v1.07a.75.75 0 0 1-1.28.53L7.87 3.3a.75.75 0 0 1 0-1.05L9.62.47a.8.8 0 0 1 .81-.16"
            fill="currentColor"
          />
          <path
            d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0z"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.43.3c.29.12.47.4.47.7v.98h1.16c2.07 0 3.7 0 4.98.17 1.31.18 2.36.56 3.18 1.39a5.3 5.3 0 0 1 1.36 3.21c.17 1.3.17 2.95.17 5.06v.11c0 2.1 0 3.76-.17 5.05a5.3 5.3 0 0 1-1.36 3.22 5.2 5.2 0 0 1-3.18 1.39c-1.28.17-2.91.17-4.98.17h-.12c-2.07 0-3.7 0-4.98-.17a5.2 5.2 0 0 1-3.18-1.4 5.3 5.3 0 0 1-1.36-3.2c-.17-1.3-.17-2.95-.17-5.06v-.11c0-2.1 0-3.76.17-5.06a5.3 5.3 0 0 1 1.36-3.21.75.75 0 1 1 1.07 1.05c-.5.5-.79 1.2-.94 2.36a42 42 0 0 0-.16 4.91c0 2.18 0 3.73.16 4.92.15 1.16.44 1.85.94 2.36s1.17.8 2.31.95c1.17.16 2.7.16 4.84.16s3.67 0 4.84-.16c1.14-.16 1.81-.45 2.3-.95.5-.51.8-1.2.95-2.36.16-1.19.16-2.74.16-4.92s0-3.73-.16-4.91c-.15-1.16-.44-1.85-.94-2.36s-1.17-.8-2.31-.95c-1.17-.16-2.7-.16-4.84-.16h-1.1v1.07a.75.75 0 0 1-1.28.53L7.87 3.3a.75.75 0 0 1 0-1.05L9.62.47a.8.8 0 0 1 .81-.16"
            fill="currentColor"
          />
          <path
            d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2c.3.3.77.3 1.06 0z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconRevote;
