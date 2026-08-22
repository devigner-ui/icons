import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeyboard = forwardRef<SVGSVGElement, IconProps>(function IconKeyboard(
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
            d="M7 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
            fill="currentColor"
          />
          <path
            d="M2 11c0-2.83 0-4.24.88-5.12S5.18 5 8 5h8c2.83 0 4.24 0 5.12.88S22 8.18 22 11v2c0 2.83 0 4.24-.88 5.12S18.82 19 16 19H8c-2.83 0-4.24 0-5.12-.88S2 15.82 2 13z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M7 16h10"
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
            d="M16 5H8c-2.83 0-4.24 0-5.12.88S2 8.18 2 11v2c0 2.83 0 4.24.88 5.12S5.18 19 8 19h8c2.83 0 4.24 0 5.12-.88S22 15.82 22 13v-2c0-2.83 0-4.24-.88-5.12S18.82 5 16 5"
            fill="currentColor"
          />
          <path d="M6 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M6 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M18 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path d="M18 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
          <path
            d="M17.75 16c0 .41-.34.75-.75.75H7a.75.75 0 0 1 0-1.5h10c.41 0 .75.34.75.75"
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
            d="M8 5h8c2.83 0 4.24 0 5.12.88S22 8.18 22 11v2c0 2.83 0 4.24-.88 5.12S18.82 19 16 19H8c-2.83 0-4.24 0-5.12-.88S2 15.82 2 13v-2c0-2.83 0-4.24.88-5.12S5.18 5 8 5m-2 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-.25 3c0 .41-.34.75-.75.75H7a.75.75 0 0 1 0-1.5h10c.41 0 .75.34.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconKeyboard;
