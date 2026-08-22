import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlay = forwardRef<SVGSVGElement, IconProps>(function IconPlay(
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
            d="M16.16 6.84C19.4 9.03 21 10.13 21 12s-1.61 2.97-4.84 5.16a42 42 0 0 1-4.93 2.92C8 21.71 6.4 22.53 4.96 21.63c-1.45-.9-1.58-2.8-1.84-6.57A45 45 0 0 1 3 12c0-.94.05-1.99.12-3.06.26-3.77.4-5.66 1.84-6.57C6.4 1.47 8 2.3 11.23 3.92q1.27.63 2.35 1.27c.81.47 1.7 1.04 2.58 1.65"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 12c0-1.87-1.61-2.97-4.84-5.16a42 42 0 0 0-4.93-2.92C8 2.29 6.4 1.47 4.96 2.37c-1.45.9-1.58 2.8-1.84 6.57A45 45 0 0 0 3 12z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.58 18.81c.81-.47 1.7-1.04 2.58-1.65C19.4 14.97 21 13.87 21 12H3c0 .94.05 1.99.12 3.06.26 3.77.4 5.66 1.84 6.57 1.44.9 3.05.08 6.27-1.55q1.27-.64 2.35-1.27"
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
            d="M16.16 6.84C19.4 9.03 21 10.13 21 12s-1.61 2.97-4.84 5.16a42 42 0 0 1-4.93 2.92C8 21.71 6.4 22.53 4.96 21.63c-1.45-.9-1.58-2.8-1.84-6.57A45 45 0 0 1 3 12c0-.94.05-1.99.12-3.06.26-3.77.4-5.66 1.84-6.57C6.4 1.47 8 2.3 11.23 3.92q1.27.63 2.35 1.27c.81.47 1.7 1.04 2.58 1.65"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlay;
