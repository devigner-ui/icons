import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudFlipped = forwardRef<SVGSVGElement, IconProps>(function IconCloudFlipped(
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
            d="M7.27 13.01a4 4 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h7.43m3.5 0h.16a5.3 5.3 0 0 0 3.64-1.4c3.29-2.87 1.53-8.64-2.8-9.19C15.92.11 2.39 3.67 5.6 12.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.85 9.92q.79-.4 1.67-.41"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
            d="M7.27 13.01a4 4 0 0 0-1.72-.41c-4.68.33-4.68 7.14 0 7.47h11.09a5.3 5.3 0 0 0 3.64-1.4c3.29-2.87 1.53-8.64-2.8-9.19C15.92.11 2.39 3.67 5.6 12.6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.85 9.92q.79-.4 1.67-.41"
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
            d="M20.48 10.69 2.01 15.72a4.05 4.05 0 0 1 3.1-3.75 6.3 6.3 0 0 1 1.43-6.11 6.9 6.9 0 0 1 6.87-1.79c2.19.67 3.73 2.47 4.28 4.97 1.09.25 2.06.82 2.79 1.65"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.17 18.74a5.7 5.7 0 0 1-3.82 1.48H5.97A4.1 4.1 0 0 1 2 16.03l.01-.31 18.47-5.03q.86.92 1.26 2.22a5.5 5.5 0 0 1-1.57 5.83"
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
            d="M21.74 12.91a5.6 5.6 0 0 0-4.05-3.87c-.55-2.5-2.09-4.3-4.28-4.97a6.9 6.9 0 0 0-6.87 1.79 6.3 6.3 0 0 0-1.43 6.11 4.05 4.05 0 0 0-3.1 3.75l-.01.31a4.1 4.1 0 0 0 3.97 4.19h10.38c1.42 0 2.78-.53 3.82-1.48a5.5 5.5 0 0 0 1.57-5.83"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCloudFlipped;
