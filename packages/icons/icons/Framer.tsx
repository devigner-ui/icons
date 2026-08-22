import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFramer = forwardRef<SVGSVGElement, IconProps>(function IconFramer(
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
            d="m5.67 2 14 14h-14V9h14V2z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 16v6l-7-6z"
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
            opacity={duotone ? "0.4" : "1"}
            d="M24.67 0h-24v24h24z"
            fill="none"
          />
          <path
            d="M5.17 10.49v5.94c0 .31.14.61.37.81l5.36 4.59c.7.6 1.77.1 1.77-.81v-4.1h4.91c.95 0 1.43-1.15.76-1.83l-5.67-5.67H6.24a1.06 1.06 0 0 0-1.07 1.07"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.1 1.91H7.76A1.07 1.07 0 0 0 7 3.74l5.67 5.67h6.43c.59 0 1.07-.48 1.07-1.07V2.98c0-.59-.48-1.07-1.07-1.07"
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
            d="M5.17 10.49v5.94c0 .31.14.61.37.81l5.36 4.59c.7.6 1.77.1 1.77-.81v-4.1h4.91c.95 0 1.43-1.15.76-1.83l-5.67-5.67H6.24a1.06 1.06 0 0 0-1.07 1.07"
            fill="currentColor"
          />
          <path
            d="M19.1 1.91H7.76A1.07 1.07 0 0 0 7 3.74l5.67 5.67h6.43c.59 0 1.07-.48 1.07-1.07V2.98c0-.59-.48-1.07-1.07-1.07"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconFramer;
