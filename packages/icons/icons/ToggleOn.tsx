import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconToggleOn = forwardRef<SVGSVGElement, IconProps>(function IconToggleOn(
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
            d="M13.97 16h2.4c2 0 2.8-.8 2.8-2.8v-2.4c0-2-.8-2.8-2.8-2.8h-2.4c-2 0-2.8.8-2.8 2.8v2.4c0 2 .8 2.8 2.8 2.8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.67 20h-10c-4 0-5-1-5-5V9c0-4 1-5 5-5h10c4 0 5 1 5 5v6c0 4-1 5-5 5"
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
            d="M8.02 3.86h9.3c4.1 0 5.35 1.25 5.35 5.35v5.58c0 4.1-1.25 5.35-5.35 5.35h-9.3c-4.1 0-5.35-1.25-5.35-5.35V9.21c0-4.1 1.25-5.35 5.35-5.35"
            fill="currentColor"
          />
          <path
            d="M13.88 7.58h2.23c2.25 0 3.3 1.05 3.3 3.3v2.23c0 2.25-1.05 3.3-3.3 3.3h-2.23c-2.25 0-3.3-1.05-3.3-3.3v-2.23c0-2.25 1.05-3.3 3.3-3.3"
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
            d="M17.32 3.86h-9.3c-4.1 0-5.35 1.25-5.35 5.35v5.58c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35V9.21c0-4.1-1.25-5.35-5.35-5.35m2.09 9.26c0 2.25-1.05 3.3-3.3 3.3h-2.23c-2.25 0-3.3-1.05-3.3-3.3v-2.23c0-2.25 1.05-3.3 3.3-3.3h2.23c2.25 0 3.3 1.05 3.3 3.3z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconToggleOn;
