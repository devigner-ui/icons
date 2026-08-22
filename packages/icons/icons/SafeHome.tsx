import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSafeHome = forwardRef<SVGSVGElement, IconProps>(function IconSafeHome(
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
            d="M23.67 15.37v2.19a5.8 5.8 0 0 1-4.2 5.41 1 1 0 0 1-.51 0A5.7 5.7 0 0 1 16.01 21a5.5 5.5 0 0 1-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14a2.7 2.7 0 0 1 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21.62 11.01-.43 2.59-1-.41a2.7 2.7 0 0 0-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19A5.5 5.5 0 0 0 16.01 21H6.85a3 3 0 0 1-2.89-2.44L2.7 11.01a3.2 3.2 0 0 1 1.05-2.77l6.58-5.26a3.05 3.05 0 0 1 3.66.01l6.58 5.25a3.3 3.3 0 0 1 1.05 2.77"
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
            d="M23.67 15.37v2.19a5.8 5.8 0 0 1-4.2 5.41 1 1 0 0 1-.51 0A5.7 5.7 0 0 1 16.01 21a5.5 5.5 0 0 1-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14a2.7 2.7 0 0 1 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21.62 11.01-.43 2.59-1-.41a2.7 2.7 0 0 0-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19A5.5 5.5 0 0 0 16.01 21H6.85a3 3 0 0 1-2.89-2.44L2.7 11.01a3.2 3.2 0 0 1 1.05-2.77l6.58-5.26a3.05 3.05 0 0 1 3.66.01l6.58 5.25a3.3 3.3 0 0 1 1.05 2.77"
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
            d="M23.67 15.37v2.19a5.8 5.8 0 0 1-4.2 5.41 1 1 0 0 1-.51 0A5.7 5.7 0 0 1 16.01 21a5.5 5.5 0 0 1-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14a2.7 2.7 0 0 1 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04"
            fill="currentColor"
          />
          <path
            d="m21.62 11.01-.18 1.07-.7-.28a4 4 0 0 0-3.08 0l-2.79 1.15a2.7 2.7 0 0 0-1.61 2.42v2.19c0 1.19.33 2.38.94 3.44H6.85a3 3 0 0 1-2.89-2.44L2.7 11.01a3.2 3.2 0 0 1 1.05-2.77l6.58-5.26a3.05 3.05 0 0 1 3.66.01l6.58 5.25a3.3 3.3 0 0 1 1.05 2.77"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSafeHome;
