import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLike2 = forwardRef<SVGSVGElement, IconProps>(function IconLike2(
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
            d="M18.67 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98a3 3 0 0 1 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.97"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M12.95 14.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45A2.5 2.5 0 0 1 12.67 8a2.5 2.5 0 0 1 4.5 1.51c-.01 3.15-2.92 5-4.22 5.45"
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
            d="M18.67 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69a3 3 0 0 0-2.12-.87h-.75c-1.66 0-3-1.33-3-2.97V4.98a3 3 0 0 1 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91a3 3 0 0 1-3 2.97"
            fill="currentColor"
          />
          <path
            d="M12.95 14.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45A2.5 2.5 0 0 1 12.67 8a2.5 2.5 0 0 1 4.5 1.51c-.01 3.15-2.92 5-4.22 5.45"
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
            d="M18.67 2h-12c-1.66 0-3 1.33-3 2.97v10.91a3 3 0 0 0 3 2.97h.76c.8 0 1.56.31 2.12.87l1.71 1.69c.78.77 2.05.77 2.83 0l1.71-1.69a3 3 0 0 1 2.12-.87h.75c1.66 0 3-1.33 3-2.97V4.97a3 3 0 0 0-3-2.97m-5.72 12.96c-.15.05-.4.05-.56 0-1.3-.45-4.22-2.3-4.22-5.45A2.5 2.5 0 0 1 12.67 8a2.5 2.5 0 0 1 4.5 1.51c-.01 3.15-2.92 5-4.22 5.45"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconLike2;
