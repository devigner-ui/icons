import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSound = forwardRef<SVGSVGElement, IconProps>(function IconSound(
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
            d="M3.67 8.25v7.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.17 5.75v12.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.67 3.25v17.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.17 5.75v12.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.67 8.25v7.5"
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
            d="M3.67 16.5a.76.76 0 0 1-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M8.17 19a.76.76 0 0 1-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.67 21.5a.76.76 0 0 1-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M17.17 19a.76.76 0 0 1-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M21.67 16.5a.76.76 0 0 1-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75"
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
            d="M3.67 16.5a.76.76 0 0 1-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M8.17 19a.76.76 0 0 1-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M12.67 21.5a.76.76 0 0 1-.75-.75V3.25c0-.41.34-.75.75-.75s.75.34.75.75v17.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M17.17 19a.76.76 0 0 1-.75-.75V5.75c0-.41.34-.75.75-.75s.75.34.75.75v12.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
          <path
            d="M21.67 16.5a.76.76 0 0 1-.75-.75v-7.5c0-.41.34-.75.75-.75s.75.34.75.75v7.5c0 .41-.34.75-.75.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSound;
