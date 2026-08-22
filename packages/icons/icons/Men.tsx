import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMen = forwardRef<SVGSVGElement, IconProps>(function IconMen(
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
            cx="10"
            cy="14"
            r="8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22 2h.75a.75.75 0 0 0-.75-.75zm-.75 5a.75.75 0 0 0 1.5 0zM17 1.25a.75.75 0 0 0 0 1.5zm-.97 7.78 6.5-6.5-1.06-1.06-6.5 6.5zM21.25 2v5h1.5V2zM17 2.75h5v-1.5h-5z"
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
          <circle
            opacity={duotone ? "0.4" : "1"}
            cx="10"
            cy="14"
            r="8"
            fill="currentColor"
          />
          <path
            d="M17 1.25a.75.75 0 0 0 0 1.5h3.19L15.1 7.84q.58.48 1.06 1.06l5.09-5.09V7a.75.75 0 0 0 1.5 0V2.25a1 1 0 0 0-1-1z"
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
            d="M17 1.25a.75.75 0 1 0 0 1.5h3.19L15.1 7.84a8 8 0 1 0 1.06 1.06l5.09-5.09V7a.75.75 0 1 0 1.5 0V2a.75.75 0 0 0-.75-.75z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconMen;
