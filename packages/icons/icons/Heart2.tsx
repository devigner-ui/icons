import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeart2 = forwardRef<SVGSVGElement, IconProps>(function IconHeart2(
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
            d="M13.29 20.81c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12A5.57 5.57 0 0 1 8.23 3.1c1.82 0 3.43.88 4.44 2.24a5.5 5.5 0 0 1 4.44-2.24c3.07 0 5.56 2.5 5.56 5.59 0 7-6.48 11.13-9.38 12.12"
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
            d="M22.67 8.69q-.01 1.78-.52 3.31H3.19a11 11 0 0 1-.52-3.31 5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M22.15 12c-1.58 5-6.45 7.99-8.86 8.81-.34.12-.9.12-1.24 0C9.64 19.99 4.77 17 3.19 12z"
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
            d="M17.11 3.1c-1.81 0-3.43.88-4.44 2.23a5.55 5.55 0 0 0-10 3.36q.01 1.78.52 3.31c1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81q.5-1.53.52-3.31a5.57 5.57 0 0 0-5.56-5.59"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconHeart2;
