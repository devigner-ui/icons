import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEye2 = forwardRef<SVGSVGElement, IconProps>(function IconEye2(
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
            d="M16.25 12a3.58 3.58 0 1 1-7.15 0 3.58 3.58 0 0 1 7.15 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 20.27c3.53 0 6.82-2.08 9.11-5.68.9-1.41.9-3.78 0-5.19-2.29-3.6-5.58-5.68-9.11-5.68S5.85 5.8 3.56 9.4a5.3 5.3 0 0 0 0 5.19c2.29 3.6 5.58 5.68 9.11 5.68"
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
            d="M21.92 9.15c-2.31-3.63-5.69-5.72-9.25-5.72-1.78 0-3.51.52-5.09 1.49-1.58.98-3 2.41-4.16 4.23-1 1.57-1 4.12 0 5.69 2.31 3.64 5.69 5.72 9.25 5.72 1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69m-9.25 6.89a4.04 4.04 0 1 1-.01-8.07 4.04 4.04 0 0 1 .01 8.07"
            fill="currentColor"
          />
          <path
            d="M12.67 9.14a2.86 2.86 0 1 0 .01 5.71 2.86 2.86 0 0 0-.01-5.71"
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
            d="M21.92 9.15c-2.31-3.63-5.69-5.72-9.25-5.72-1.78 0-3.51.52-5.09 1.49-1.58.98-3 2.41-4.16 4.23-1 1.57-1 4.12 0 5.69 2.31 3.64 5.69 5.72 9.25 5.72 1.78 0 3.51-.52 5.09-1.49 1.58-.98 3-2.41 4.16-4.23 1-1.56 1-4.12 0-5.69m-9.25 6.89a4.04 4.04 0 1 1-.01-8.07 4.04 4.04 0 0 1 .01 8.07"
            fill="currentColor"
          />
          <path
            d="M12.67 9.14a2.86 2.86 0 1 0 .01 5.71 2.86 2.86 0 0 0-.01-5.71"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEye2;
