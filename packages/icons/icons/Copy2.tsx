import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCopy2 = forwardRef<SVGSVGElement, IconProps>(function IconCopy2(
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
            d="M16.67 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9h-4.2c-3.5 0-4.9-1.4-4.9-4.9v-4.2c0-3.5 1.4-4.9 4.9-4.9h4.2c3.5 0 4.9 1.4 4.9 4.9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 6.9v4.2c0 3.5-1.4 4.9-4.9 4.9h-1.1v-3.1c0-3.5-1.4-4.9-4.9-4.9h-3.1V6.9c0-3.5 1.4-4.9 4.9-4.9h4.2c3.5 0 4.9 1.4 4.9 4.9"
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
            d="M16.67 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9h-4.2c-3.5 0-4.9-1.4-4.9-4.9v-4.2c0-3.5 1.4-4.9 4.9-4.9h4.2c3.5 0 4.9 1.4 4.9 4.9"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.77 2h-4.2c-3.45 0-4.85 1.37-4.89 4.75h3.09c4.2 0 6.15 1.95 6.15 6.15v3.09c3.38-.04 4.75-1.44 4.75-4.89V6.9c0-3.5-1.4-4.9-4.9-4.9"
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
            d="M16.67 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9h-4.2c-3.5 0-4.9-1.4-4.9-4.9v-4.2c0-3.5 1.4-4.9 4.9-4.9h4.2c3.5 0 4.9 1.4 4.9 4.9"
            fill="currentColor"
          />
          <path
            d="M17.77 2h-4.2c-3.08 0-4.53 1.1-4.83 3.74-.06.55.4 1.01.95 1.01h2.08c4.2 0 6.15 1.95 6.15 6.15v2.08c0 .55.46 1.01 1.01.95 2.65-.3 3.74-1.75 3.74-4.83V6.9c0-3.5-1.4-4.9-4.9-4.9"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCopy2;
