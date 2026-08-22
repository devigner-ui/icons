import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBubble = forwardRef<SVGSVGElement, IconProps>(function IconBubble(
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
            d="M16.26 12.26a5.13 5.13 0 1 0 0-10.26 5.13 5.13 0 0 0 0 10.26"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.03 19.44a3.08 3.08 0 1 0 0-6.16 3.08 3.08 0 0 0 0 6.16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.29 22a2.56 2.56 0 1 0 0-5.12 2.56 2.56 0 0 0 0 5.12"
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
            d="M16.26 1.75a5.38 5.38 0 1 0 0 10.76 5.38 5.38 0 0 0 0-10.76"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.03 13.03a3.34 3.34 0 1 0 .01 6.67 3.34 3.34 0 0 0-.01-6.67"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.29 16.62a2.81 2.81 0 1 0 0 5.62 2.81 2.81 0 0 0 0-5.62"
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
            d="M16.26 1.75a5.38 5.38 0 1 0 0 10.76 5.38 5.38 0 0 0 0-10.76"
            fill="currentColor"
          />
          <path
            d="M7.03 13.03a3.34 3.34 0 1 0 .01 6.67 3.34 3.34 0 0 0-.01-6.67"
            fill="currentColor"
          />
          <path
            d="M17.29 16.62a2.81 2.81 0 1 0 0 5.62 2.81 2.81 0 0 0 0-5.62"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconBubble;
