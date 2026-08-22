import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconShield2 = forwardRef<SVGSVGElement, IconProps>(function IconShield2(
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
            d="M11.16 2.23 6.17 4.11a3.5 3.5 0 0 0-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21a4.55 4.55 0 0 0 5.14 0l4.3-3.21a5 5 0 0 0 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02L14.2 2.23a5 5 0 0 0-3.04 0"
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
            d="M21.08 6.96V9.8L8.07 19.34l-2.63-1.97a3.3 3.3 0 0 1-1.18-2.35V6.96c0-1.12.86-2.36 1.91-2.75l5.47-2.05a3.5 3.5 0 0 1 2.06 0l5.47 2.05a3.2 3.2 0 0 1 1.91 2.75"
            fill="currentColor"
          />
          <path
            d="M21.08 11.17v3.85c0 .81-.53 1.86-1.18 2.35l-5.47 4.09c-.48.36-1.12.54-1.76.54s-1.28-.18-1.76-.54l-1.92-1.43z"
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
            d="M21.08 6.96v1.83c0 .64-.3 1.24-.82 1.61l-11 8.06a2 2 0 0 1-2.38-.01l-1.44-1.08a3.3 3.3 0 0 1-1.18-2.36V6.96c0-1.12.86-2.36 1.91-2.75l5.47-2.05a3.5 3.5 0 0 1 2.06 0l5.47 2.05a3.2 3.2 0 0 1 1.91 2.75"
            fill="currentColor"
          />
          <path
            d="M19.49 12.34a1 1 0 0 1 1.59.81v1.88c0 .81-.53 1.86-1.18 2.35l-5.47 4.09c-.48.35-1.12.53-1.76.53s-1.28-.18-1.76-.54l-.83-.62a1 1 0 0 1 .01-1.61z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconShield2;
