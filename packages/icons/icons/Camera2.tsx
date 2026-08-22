import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCamera2 = forwardRef<SVGSVGElement, IconProps>(function IconCamera2(
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
            d="M7.43 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.75 3.75 0 0 0 18.67 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.82 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45c-.28.54-.84.89-1.45.89a3.75 3.75 0 0 0-3.75 3.99l.52 8.26C3.56 20.31 4.67 22 7.43 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11.17 8h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.67 18a3.26 3.26 0 0 0 0-6.5 3.26 3.26 0 0 0 0 6.5"
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
            d="M7.43 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.75 3.75 0 0 0 18.67 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.82 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45c-.28.54-.84.89-1.45.89a3.75 3.75 0 0 0-3.75 3.99l.52 8.26C3.56 20.31 4.67 22 7.43 22"
            fill="currentColor"
          />
          <path
            d="M14.17 8.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.67 18.13a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76"
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
            d="M18.67 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.82 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45c-.28.54-.84.89-1.45.89a3.75 3.75 0 0 0-3.75 3.99l.52 8.26C3.56 20.31 4.67 22 7.43 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.75 3.75 0 0 0 18.67 6m-7.5 1.25h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75m1.5 10.87a3.38 3.38 0 1 1 0-6.76 3.38 3.38 0 0 1 0 6.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCamera2;
