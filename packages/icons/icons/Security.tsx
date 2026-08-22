import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSecurity = forwardRef<SVGSVGElement, IconProps>(function IconSecurity(
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
            d="M21.58 11.12c0 4.89-3.55 9.47-8.4 10.81q-.51.13-1.02 0c-4.85-1.34-8.4-5.92-8.4-10.81V6.73c0-.82.62-1.75 1.39-2.06l5.57-2.28a5.2 5.2 0 0 1 3.91 0l5.57 2.28a2.4 2.4 0 0 1 1.39 2.06z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.71 2.39a5.2 5.2 0 0 1 3.91 0l5.57 2.28a2.4 2.4 0 0 1 1.39 2.06v4.39c0 4.89-3.55 9.47-8.4 10.81q-.51.13-1.02 0c-4.85-1.34-8.4-5.92-8.4-10.81"
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
            d="M19 5.67 7.26 17.41a1 1 0 0 1-1.54-.14 11 11 0 0 1-1.97-6.15V6.73c0-.82.62-1.75 1.38-2.06l5.57-2.28a5 5 0 0 1 3.92 0l4.04 1.65A1 1 0 0 1 19 5.67"
            fill="currentColor"
          />
          <path
            d="M19.94 7.04a1 1 0 0 1 1.64.77v3.31c0 4.89-3.55 9.47-8.4 10.81a2 2 0 0 1-1.03 0 11 11 0 0 1-3.87-1.95 1 1 0 0 1-.11-1.5c2.18-2.23 8.56-8.73 11.77-11.44"
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
            d="M19 5.67 7.26 17.41a1 1 0 0 1-1.54-.14 11 11 0 0 1-1.97-6.15V6.73c0-.82.62-1.75 1.38-2.06l5.57-2.28a5 5 0 0 1 3.92 0l4.05 1.65A1 1 0 0 1 19 5.67"
            fill="currentColor"
          />
          <path
            d="M19.94 7.04a1 1 0 0 1 1.64.77v3.31c0 4.89-3.55 9.47-8.4 10.81a2 2 0 0 1-1.03 0 11 11 0 0 1-3.87-1.95 1 1 0 0 1-.11-1.5c2.18-2.23 8.56-8.73 11.77-11.44"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconSecurity;
