import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconUser = forwardRef<SVGSVGElement, IconProps>(function IconUser(
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
          <circle
            cx="12"
            cy="6.00049"
            r="4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 17.5c0 2.49 0 4.5-8 4.5s-8-2.01-8-4.5c0-2.48 3.58-4.5 8-4.5s8 2.02 8 4.5"
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
          <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 17.5c0 2.49 0 4.5-8 4.5s-8-2.01-8-4.5c0-2.48 3.58-4.5 8-4.5s8 2.02 8 4.5"
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
          <circle cx="12" cy="6.00049" r="4" fill="currentColor" />
          <path
            d="M20 17.5c0 2.49 0 4.5-8 4.5s-8-2.01-8-4.5c0-2.48 3.58-4.5 8-4.5s8 2.02 8 4.5"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconUser;
