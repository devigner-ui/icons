import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconReel = forwardRef<SVGSVGElement, IconProps>(function IconReel(
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
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12 22h10"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
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
            opacity={duotone ? "0.4" : "1"}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 12a10 10 0 0 0 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A10 10 0 1 0 2 12"
            fill="currentColor"
          />
          <path
            d="M16.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
            fill="currentColor"
          />
          <path
            d="M9 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
            fill="currentColor"
          />
          <path
            d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
            fill="currentColor"
          />
          <path
            d="M13.5 16.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
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
            d="M2 12a10 10 0 0 0 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A10 10 0 1 0 2 12m10-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-4.5-7.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconReel;
