import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCommand = forwardRef<SVGSVGElement, IconProps>(function IconCommand(
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
            d="M8 8h8v8H8z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16 16h3a3 3 0 1 1-3 3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M8 16H5a3 3 0 1 0 3 3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M16 8h3a3 3 0 1 0-3-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M8 8H5a3 3 0 1 1 3-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
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
          <path d="M16 16h3a3 3 0 1 1-3 3z" fill="currentColor" />
          <path d="M5 16h3v3a3 3 0 1 1-3-3" fill="currentColor" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 8h-3V5a3 3 0 1 1 3 3M8 8V5a3 3 0 1 0-3 3z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 8H8v8h8z"
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
            d="M16 8h3a3 3 0 1 0-3-3zH8V5a3 3 0 1 0-3 3h3v8h8z"
            fill="currentColor"
          />
          <path d="M16 16h3a3 3 0 1 1-3 3z" fill="currentColor" />
          <path d="M5 16h3v3a3 3 0 1 1-3-3" fill="currentColor" />
        </svg>
      )}
    </>
  );
});

export default IconCommand;
