import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTV = forwardRef<SVGSVGElement, IconProps>(function IconTV(
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
            d="M22 16c0 2.83 0 4.24-.88 5.12S18.82 22 16 22H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16v-4c0-2.83 0-4.24.88-5.12S5.18 6 8 6h8c2.83 0 4.24 0 5.12.88S22 9.18 22 12z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m9 2 3 3.5L15 2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M16 6v16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
            fill="currentColor"
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
            d="M16 6H8c-2.83 0-4.24 0-5.12.88S2 9.18 2 12v4c0 2.83 0 4.24.88 5.12S5.18 22 8 22h8z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 12v4c0 2.83 0 4.24-.88 5.12-.82.83-2.12.88-4.62.88H16V6h.5c2.5 0 3.8.05 4.62.88.88.88.88 2.3.88 5.12"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m13.42 6 2.15-2.51a.75.75 0 0 0-1.14-.98L12 5.35 9.57 2.5a.75.75 0 0 0-1.14.98L10.58 6z"
            fill="currentColor"
          />
          <path d="M19 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2" fill="currentColor" />
          <path d="M19 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2" fill="currentColor" />
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
            d="M22 16v-4c0-2.83 0-4.24-.88-5.12C20.3 6.05 19 6 16.5 6v16c2.5 0 3.8-.05 4.62-.88.88-.88.88-2.3.88-5.12m-3-5a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
            fill="currentColor"
          />
          <path
            d="M15.57 3.49 13.42 6H15v16H8c-2.83 0-4.24 0-5.12-.88S2 18.82 2 16v-4c0-2.83 0-4.24.88-5.12S5.18 6 8 6h2.58L8.43 3.49a.75.75 0 0 1 1.14-.98L12 5.35l2.43-2.84a.75.75 0 0 1 1.14.98"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTV;
