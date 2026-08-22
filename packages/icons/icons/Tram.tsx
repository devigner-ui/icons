import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTram = forwardRef<SVGSVGElement, IconProps>(function IconTram(
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
            d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v2c0 3.77 0 5.66-1.17 6.83S15.77 20 12 20s-5.66 0-6.83-1.17S4 15.77 4 12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M4 13h16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 16H17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 16h1.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m7 20-1 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m17 20 1 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 2v.5a2 2 0 1 0 4 0V2"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.38 19.57a3 3 0 0 1-1.2-.74c-.98-.98-1.15-2.44-1.17-5.08h15.98c-.02 2.64-.19 4.1-1.16 5.08q-.5.49-1.2.74l1.04 2.1a.75.75 0 0 1-1.34.67l-1.22-2.45C15.06 20 13.73 20 12 20s-3.06 0-4.1-.11l-1.23 2.45a.75.75 0 0 1-1.34-.67zM14.75 16c0-.41.34-.75.75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M7 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.17 3.17C4 4.34 4 6.23 4 10v3.75h16V10c0-3.77 0-5.66-1.17-6.83-.88-.88-2.16-1.1-4.34-1.15a.5.5 0 0 0-.49.48 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.48c-2.17.05-3.45.27-4.33 1.15"
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
            d="M6.38 19.57a3 3 0 0 1-1.2-.74c-.98-.98-1.15-2.44-1.17-5.08h15.98c-.02 2.64-.19 4.1-1.16 5.08q-.5.49-1.2.74l1.04 2.1a.75.75 0 0 1-1.34.67l-1.22-2.45C15.06 20 13.73 20 12 20s-3.06 0-4.1-.11l-1.23 2.45a.75.75 0 0 1-1.34-.67zM14.75 16c0-.41.34-.75.75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75M7 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5z"
            fill="currentColor"
          />
          <path
            d="M20 12.25V10c0-3.77 0-5.66-1.17-6.83-.88-.88-2.16-1.1-4.34-1.15a.5.5 0 0 0-.49.48 2 2 0 1 1-4 0 .5.5 0 0 0-.5-.48c-2.17.05-3.45.27-4.33 1.15C4 4.34 4 6.23 4 10v2.25z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTram;
