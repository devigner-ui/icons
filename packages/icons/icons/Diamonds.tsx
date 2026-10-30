import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDiamonds = forwardRef<SVGSVGElement, IconProps>(function IconDiamonds(
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
      {variant === "Broken" ? (
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
            d="M21.21 13.23a3.4 3.4 0 0 0 .55-3.43L19.2 4.04c-.46-1.04-1.21-1.89-2.91-1.89H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8a3.5 3.5 0 0 0 .56 3.43l6.86 7.54a3.14 3.14 0 0 0 4.71 0l4.03-4.44"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M3.5 8h17"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
        </svg>
      ) : !fill ? (
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
            d="M16.29 2.15H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8a3.5 3.5 0 0 0 .56 3.43l6.86 7.54a3.14 3.14 0 0 0 4.71 0l6.85-7.55a3.4 3.4 0 0 0 .55-3.43L19.2 4.03c-.46-1.03-1.21-1.88-2.91-1.88"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M3.5 8h17"
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
            d="m21.21 13.24-6.85 7.54a3.13 3.13 0 0 1-4.72 0l-6.85-7.54a3.5 3.5 0 0 1-.56-3.44l.8-1.8h17.94l.8 1.8a3.5 3.5 0 0 1-.56 3.44"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M20.97 8H3.03l1.76-3.96C5.26 3 6 2.15 7.7 2.15h8.6c1.7 0 2.44.85 2.91 1.89z"
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
            d="m21.77 9.8-.8-1.8-1.76-3.96C18.74 3 18 2.15 16.3 2.15H7.7C6 2.15 5.26 3 4.79 4.04L3.03 8l-.8 1.8a3.5 3.5 0 0 0 .56 3.44l6.85 7.54a3.13 3.13 0 0 0 4.72 0l6.85-7.54a3.5 3.5 0 0 0 .56-3.44"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconDiamonds;
