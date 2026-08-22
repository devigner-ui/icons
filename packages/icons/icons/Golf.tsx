import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGolf = forwardRef<SVGSVGElement, IconProps>(function IconGolf(
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
          <ellipse
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="18.5005"
            rx="10"
            ry="3.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M12 18V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="m12 3.5 5.42 2.71C18.98 7 19.76 7.38 19.76 8s-.78 1-2.34 1.79L12 12.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
          <ellipse
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="18.5005"
            rx="10"
            ry="3.5"
            fill="currentColor"
          />
          <path
            d="M12 1.25c.41 0 .75.34.75.75v1.04l5 2.5.06.03q1.12.54 1.8.98c.44.31.9.76.9 1.45 0 .7-.46 1.14-.9 1.45q-.68.45-1.8.98l-5.06 2.53V18a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
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
            d="M12 1.25c.41 0 .75.34.75.75v1.04l5 2.5.06.03q1.13.54 1.8.98c.44.31.9.76.9 1.45 0 .7-.46 1.14-.9 1.45q-.68.45-1.8.98l-5.06 2.53V18a.75.75 0 0 1-1.5 0V2c0-.41.34-.75.75-.75"
            fill="currentColor"
          />
          <path
            d="M12 22c5.52 0 10-1.57 10-3.5 0-1.66-3.31-3.05-7.75-3.41V18a2.25 2.25 0 0 1-4.5 0v-2.91C5.31 15.45 2 16.84 2 18.5 2 20.43 6.48 22 12 22"
            fill="currentColor"
          />
          <path
            d="M12 1.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 1.5 0v-5.04l5.06-2.53q1.13-.54 1.8-.98c.44-.3.9-.76.9-1.45 0-.7-.46-1.14-.9-1.45q-.68-.44-1.8-.98l-5.06-2.53V2a.75.75 0 0 0-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconGolf;
