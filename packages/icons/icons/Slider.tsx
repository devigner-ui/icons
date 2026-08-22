import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSlider = forwardRef<SVGSVGElement, IconProps>(function IconSlider(
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
            d="M15.67 22h-6c-2.5 0-4-1.8-4-4V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4v12c0 2.2-1.5 4-4 4"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M5.67 16.01h14"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M2.67 4v16"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.67 4v16"
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
            d="M19.67 16.01V18c0 2.2-1.5 4-4 4h-6c-2.5 0-4-1.8-4-4v-1.99z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M19.67 6v10.01h-14V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4"
            fill="currentColor"
          />
          <path
            d="M3.67 20.75a.76.76 0 0 1-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M21.67 20.75a.76.76 0 0 1-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
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
            d="M18.67 16.01a1 1 0 0 1 1 1V18c0 2.2-1.5 4-4 4h-6c-2.5 0-4-1.8-4-4v-.99a1 1 0 0 1 1-1z"
            fill="currentColor"
          />
          <path
            d="M19.67 6v7.5a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1V6c0-2.2 1.5-4 4-4h6c2.5 0 4 1.8 4 4"
            fill="currentColor"
          />
          <path
            d="M3.67 20.75a.76.76 0 0 1-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M21.67 20.75a.76.76 0 0 1-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v16c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSlider;
