import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLinkedin = forwardRef<SVGSVGElement, IconProps>(function IconLinkedin(
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
            stroke="currentColor"
            d="M22.98 16.24v6.15c0 .36-.29.65-.65.65h-3.25a.65.65 0 0 1-.65-.65v-5.96c0-.89.26-3.9-2.32-3.9-2.01 0-2.41 2.06-2.49 2.98v6.88c0 .36-.29.65-.65.65H9.82a.65.65 0 0 1-.65-.65V9.57c0-.36.29-.65.65-.65h3.15c.36 0 .65.29.65.65v1.11c.74-1.12 1.85-1.98 4.2-1.98 5.21 0 5.18 4.87 5.18 7.54Z"
            strokeLinecap="round"
          />
          <path
            stroke="currentColor"
            d="M7.78 4.83a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.76 0"
            strokeLinecap="round"
          />
          <rect
            stroke="currentColor"
            strokeLinecap="round"
            x="2.68"
            y="8.91"
            width="4.46"
            height="14.13"
            rx=".71"
            ry=".71"
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
            fill="currentColor"
            d="M22.98 16.24v6.15c0 .36-.29.65-.65.65h-3.25a.65.65 0 0 1-.65-.65v-5.96c0-.89.26-3.9-2.32-3.9-2.01 0-2.41 2.06-2.49 2.98v6.88c0 .36-.29.65-.65.65H9.82a.65.65 0 0 1-.65-.65V9.57c0-.36.29-.65.65-.65h3.15c.36 0 .65.29.65.65v1.11c.74-1.12 1.85-1.98 4.2-1.98 5.21 0 5.18 4.87 5.18 7.54Z"
          />
          <path
            fill="currentColor"
            d="M7.78 4.83a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.76 0"
          />
          <rect
            fill="currentColor"
            x="2.68"
            y="8.91"
            width="4.46"
            height="14.13"
            rx=".71"
            ry=".71"
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
            fill="currentColor"
            d="M22.98 16.24v6.15c0 .36-.29.65-.65.65h-3.25a.65.65 0 0 1-.65-.65v-5.96c0-.89.26-3.9-2.32-3.9-2.01 0-2.41 2.06-2.49 2.98v6.88c0 .36-.29.65-.65.65H9.82a.65.65 0 0 1-.65-.65V9.57c0-.36.29-.65.65-.65h3.15c.36 0 .65.29.65.65v1.11c.74-1.12 1.85-1.98 4.2-1.98 5.21 0 5.18 4.87 5.18 7.54Z"
          />
          <path
            fill="currentColor"
            d="M7.78 4.83a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.76 0"
          />
          <rect
            fill="currentColor"
            x="2.68"
            y="8.91"
            width="4.46"
            height="14.13"
            rx=".71"
            ry=".71"
          />
        </svg>
      )}
    </>
  );
});

export default IconLinkedin;
