import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCameraTall = forwardRef<SVGSVGElement, IconProps>(function IconCameraTall(
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
      {variant === "Broken" ? (
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
            d="m21.41 15.4.34-5.41A3.74 3.74 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.15 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45q-.18.36-.52.59M3.67 6.8q-.21.17-.41.38a3.7 3.7 0 0 0-1.01 2.81l.52 8.26C2.89 20.31 4 22 6.76 22h10.48c2.47 0 3.61-1.35 3.92-3.11"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 8h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 18a3.25 3.25 0 0 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : !fill ? (
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
            d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.75 3.75 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.15 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6a3.75 3.75 0 0 0-3.75 3.99l.52 8.26C2.89 20.31 4 22 6.76 22"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10.5 8h3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 18a3.26 3.26 0 0 0 0-6.5 3.26 3.26 0 0 0 0 6.5"
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
            d="M6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.75 3.75 0 0 0 18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.15 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6a3.75 3.75 0 0 0-3.75 3.99l.52 8.26C2.89 20.31 4 22 6.76 22"
            fill="currentColor"
          />
          <path
            d="M13.5 8.75h-3A.76.76 0 0 1 9.75 8c0-.41.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12 18.13a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76"
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
            d="M18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45A3.3 3.3 0 0 0 13.15 2h-2.29a3.3 3.3 0 0 0-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6a3.75 3.75 0 0 0-3.75 3.99l.52 8.26C2.89 20.31 4 22 6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.75 3.75 0 0 0 18 6m-7.5 1.25h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3A.76.76 0 0 1 9.75 8c0-.41.34-.75.75-.75M12 18.12a3.38 3.38 0 1 1 0-6.76 3.38 3.38 0 0 1 0 6.76"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCameraTall;
