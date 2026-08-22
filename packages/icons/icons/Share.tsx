import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShare = forwardRef<SVGSVGElement, IconProps>(function IconShare(
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
            d="M9 11.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.32 16.8 9 13.3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M14.42 6.84 9.1 10.35"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M19 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M19 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
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
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.8 5.33a3.34 3.34 0 1 1 .97 2.34l-4.64 3.16a3.3 3.3 0 0 1-.18 1.92l5.08 3.34a3.35 3.35 0 0 1 5.47 2.58 3.34 3.34 0 1 1-6.4-1.36L9.04 14a3.35 3.35 0 0 1-5.55-2.51 3.34 3.34 0 0 1 5.97-2.07l4.5-3.06q-.17-.5-.17-1.03"
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
            d="M13.8 5.33a3.34 3.34 0 1 1 .97 2.34l-4.64 3.16a3.3 3.3 0 0 1-.18 1.92l5.08 3.34a3.35 3.35 0 0 1 5.47 2.58 3.34 3.34 0 1 1-6.4-1.36L9.04 14a3.35 3.35 0 0 1-5.55-2.51 3.34 3.34 0 0 1 5.97-2.07l4.5-3.06q-.17-.5-.17-1.03"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShare;
