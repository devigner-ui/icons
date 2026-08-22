import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconEuro = forwardRef<SVGSVGElement, IconProps>(function IconEuro(
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
            opacity={duotone ? "0.4" : "1"}
            cx="12"
            cy="12.0005"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M15 6.8a6 6 0 1 0 0 10.4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5 10.5h5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M5 13.5h5"
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
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
            fill="currentColor"
          />
          <path
            d="M6.75 12q0-.38.05-.75H10a.75.75 0 0 0 0-1.5H7.26a5.25 5.25 0 0 1 7.36-2.3.75.75 0 1 0 .76-1.3 6.75 6.75 0 0 0-9.74 3.6H5a.75.75 0 0 0 0 1.5h.3a7 7 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.63a6.75 6.75 0 0 0 9.75 3.6.75.75 0 1 0-.76-1.3 5.2 5.2 0 0 1-7.36-2.3H10a.75.75 0 0 0 0-1.5H6.8a5 5 0 0 1-.05-.75"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M6.75 12q0-.38.05-.75H10a.75.75 0 0 0 0-1.5H7.26a5.25 5.25 0 0 1 7.36-2.3.75.75 0 1 0 .76-1.3 6.75 6.75 0 0 0-9.74 3.6H5a.75.75 0 0 0 0 1.5h.3a7 7 0 0 0 0 1.5H5a.75.75 0 0 0 0 1.5h.63a6.75 6.75 0 0 0 9.75 3.6.75.75 0 1 0-.76-1.3 5.2 5.2 0 0 1-7.36-2.3H10a.75.75 0 0 0 0-1.5H6.8a5 5 0 0 1-.05-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconEuro;
