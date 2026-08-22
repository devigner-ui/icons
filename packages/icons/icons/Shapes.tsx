import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShapes = forwardRef<SVGSVGElement, IconProps>(function IconShapes(
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
            d="M17.64 12.25v4.5c0 3.75-1.5 5.25-5.25 5.25h-4.5c-3.75 0-5.25-1.5-5.25-5.25v-4.5C2.64 8.5 4.14 7 7.89 7h4.5c3.75 0 5.25 1.5 5.25 5.25"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.64 7.5a5.5 5.5 0 0 1-5 5.47v-.72c0-3.75-1.5-5.25-5.25-5.25h-.72a5.49 5.49 0 0 1 10.97.5"
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
            d="M12.42 7H7.67a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5h5a5 5 0 0 0 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25"
            fill="currentColor"
          />
          <path
            d="M17.17 2a5.5 5.5 0 0 0-5.47 5h.72c2.9 0 5.25 2.35 5.25 5.25v.72A5.5 5.5 0 0 0 17.17 2"
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
            d="M12.42 7H7.67a5 5 0 0 0-5 5v5a5 5 0 0 0 5 5h5a5 5 0 0 0 5-5v-4.75c0-2.9-2.35-5.25-5.25-5.25"
            fill="currentColor"
          />
          <path
            d="M22.55 6.33a5.5 5.5 0 0 1-2.72 5.98c-.3.16-.66-.08-.66-.43v-.13a6.27 6.27 0 0 0-6.25-6.25h-.13c-.35 0-.6-.35-.43-.66a5.48 5.48 0 0 1 10.19 1.49"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShapes;
