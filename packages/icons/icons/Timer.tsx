import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTimer = forwardRef<SVGSVGElement, IconProps>(function IconTimer(
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
            d="M21.42 13.25a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 8v5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M9.67 2h6"
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
            d="M12.67 22a8.67 8.67 0 1 0 0-17.34 8.67 8.67 0 0 0 0 17.34"
            fill="currentColor"
          />
          <path
            d="M12.67 13.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M15.56 3.45H9.78a.73.73 0 0 1 0-1.45h5.78a.73.73 0 0 1 0 1.45"
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
            d="M12.67 4.65a8.68 8.68 0 1 0 .02 17.36 8.68 8.68 0 0 0-.02-17.36m.75 8.35c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75z"
            fill="currentColor"
          />
          <path
            d="M15.56 3.45H9.78a.73.73 0 0 1 0-1.45h5.78a.73.73 0 0 1 0 1.45"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTimer;
