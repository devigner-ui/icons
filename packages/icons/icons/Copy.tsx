import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCopy = forwardRef<SVGSVGElement, IconProps>(function IconCopy(
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
            d="M6 11c0-2.83 0-4.24.88-5.12S9.18 5 12 5h3c2.83 0 4.24 0 5.12.88S21 8.18 21 11v5c0 2.83 0 4.24-.88 5.12S17.82 22 15 22h-3c-2.83 0-4.24 0-5.12-.88S6 18.82 6 16z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 19a3 3 0 0 1-3-3v-6c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h4a3 3 0 0 1 3 3"
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
            d="M6.6 11.4c0-2.73 0-4.1.84-4.94.85-.85 2.2-.85 4.92-.85h2.88c2.71 0 4.07 0 4.92.85S21 8.67 21 11.4v4.82c0 2.72 0 4.09-.84 4.93-.85.85-2.2.85-4.92.85h-2.88c-2.72 0-4.07 0-4.92-.85-.84-.84-.84-2.2-.84-4.93z"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4.17 3.17C3 4.34 3 6.23 3 10v2c0 3.77 0 5.66 1.17 6.83.62.62 1.44.9 2.62 1.05-.19-.84-.19-2-.19-3.66V11.4c0-2.73 0-4.1.84-4.94.85-.85 2.2-.85 4.92-.85h2.88c1.65 0 2.8 0 3.64.2-.14-1.2-.43-2.02-1.05-2.64C16.66 2 14.77 2 11 2S5.34 2 4.17 3.17"
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
            d="M15.24 2h-3.9c-1.76 0-3.16 0-4.25.15a4.5 4.5 0 0 0-2.75 1.2 4.6 4.6 0 0 0-1.2 2.76C3 7.2 3 8.6 3 10.38v5.84c0 1.5.92 2.8 2.23 3.34-.07-.91-.07-2.19-.07-3.25V11.3c0-1.28 0-2.38.12-3.27a4.3 4.3 0 0 1 1.15-2.6A4.3 4.3 0 0 1 9 4.3c.88-.12 1.98-.12 3.26-.12h3.07c1.27 0 2.37 0 3.25.12A3.6 3.6 0 0 0 15.24 2"
            fill="currentColor"
          />
          <path
            d="M6.6 11.4c0-2.73 0-4.1.84-4.94.85-.85 2.2-.85 4.92-.85h2.88c2.72 0 4.07 0 4.92.85S21 8.67 21 11.4v4.82c0 2.72 0 4.09-.84 4.93-.85.85-2.2.85-4.92.85h-2.88c-2.72 0-4.07 0-4.92-.85-.84-.84-.84-2.2-.84-4.93z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconCopy;
