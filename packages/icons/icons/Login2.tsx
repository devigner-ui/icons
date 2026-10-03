import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLogin2 = forwardRef<SVGSVGElement, IconProps>(function IconLogin2(
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
            d="M2 12h14m-3.5 3 3.5-3-3.5-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 7c.01-2.18.11-3.35.88-4.12C10.76 2 12.18 2 15 2h1c2.83 0 4.24 0 5.12.88S22 5.18 22 8v8c0 2.83 0 4.24-.88 5.12-.77.77-1.94.87-4.12.88m-8-5c.01 2.18.11 3.35.88 4.12.64.64 1.57.82 3.12.86"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
            opacity={duotone ? "0.4" : "1"}
            d="M12 20a8 8 0 1 0 0-16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M4 12h10m0 0-3-3m3 3-3 3"
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
            d="M10.47 8.47c-.3.3-.3.77 0 1.06l1.72 1.72H4a.75.75 0 0 0 0 1.5h8.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3a.75.75 0 0 0-1.06 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 20a8 8 0 1 0 0-16z"
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
            d="M10.84 8.1a.75.75 0 0 0 0 1.06l1.72 1.72H4.38a.75.75 0 0 0 0 1.5h8.18l-1.72 1.71a.75.75 0 1 0 1.07 1.07l3-3a.77.77 0 0 0 0-1.07l-3-3a.75.75 0 0 0-1.07 0"
            fill="currentColor"
          />
          <path
            d="M12.38 5.88c0 .45.27.84.59 1.15l3 3c.87.88.87 2.3 0 3.19l-3 3c-.32.31-.6.7-.6 1.15v2.25a8 8 0 1 0 0-16z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLogin2;
