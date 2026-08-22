import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolder3 = forwardRef<SVGSVGElement, IconProps>(function IconFolder3(
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
            d="M22.67 11v6c0 4-1 5-5 5h-10c-4 0-5-1-5-5V7c0-4 1-5 5-5h1.5c1.5 0 1.83.44 2.4 1.2l1.5 2c.38.5.6.8 1.6.8h3c4 0 5 1 5 5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M22.67 11.07v5.58c0 2.95-2.4 5.35-5.35 5.35h-9.3a5.36 5.36 0 0 1-5.35-5.35V9.44h19.74q.22.67.25 1.4z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.41 9.44H2.67V6.42A4.4 4.4 0 0 1 7.09 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79a5.3 5.3 0 0 1 5.08 3.71"
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
            d="M21.69 8c.4.56-.08 1.25-.77 1.25H3.67a1 1 0 0 1-1-1V6.42A4.4 4.4 0 0 1 7.09 2h2.32c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.46.93.46h2.79c1.8 0 3.4.9 4.37 2.27"
            fill="currentColor"
          />
          <path
            d="M21.65 10.75a1 1 0 0 1 1 1l.02 4.9c0 2.95-2.4 5.35-5.35 5.35h-9.3a5.36 5.36 0 0 1-5.35-5.35v-4.9a1 1 0 0 1 1-1z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFolder3;
