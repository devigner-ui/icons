import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClose = forwardRef<SVGSVGElement, IconProps>(function IconClose(
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
            d="m7.76 7.76 8.48 8.48"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m7.76 16.24 8.48-8.48"
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
            d="M15.71 16.77 7.23 8.3a.76.76 0 0 1 0-1.06.76.76 0 0 1 1.06 0l8.48 8.48c.3.3.3.77 0 1.06a.76.76 0 0 1-1.06 0"
            fill="currentColor"
          />
          <path
            d="M7.23 16.77a.76.76 0 0 1 0-1.06l8.48-8.48a.76.76 0 0 1 1.06 0c.3.29.3.77 0 1.06L8.3 16.77a.76.76 0 0 1-1.06 0"
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
            d="M15.71 16.77 7.23 8.3a.76.76 0 0 1 0-1.06.76.76 0 0 1 1.06 0l8.48 8.48c.3.3.3.77 0 1.06a.76.76 0 0 1-1.06 0"
            fill="currentColor"
          />
          <path
            d="M7.23 16.77a.76.76 0 0 1 0-1.06l8.48-8.48a.76.76 0 0 1 1.06 0c.3.29.3.77 0 1.06L8.3 16.77a.76.76 0 0 1-1.06 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconClose;
