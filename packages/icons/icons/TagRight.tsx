import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTagRight = forwardRef<SVGSVGElement, IconProps>(function IconTagRight(
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
            d="M4.22 3.1a2.23 2.23 0 0 0-1.89 3.41l2.77 4.43a2.2 2.2 0 0 1 0 2.14l-2.77 4.43a2.23 2.23 0 0 0 1.89 3.41h10.45c.61 0 1.4-.4 1.78-.89l5.18-6.9c.46-.61.5-1.64.1-2.28l-4.18-6.68a2.5 2.5 0 0 0-1.9-1.05h-7"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M4.22 3.1h11.44c.68 0 1.53.47 1.89 1.05l4.18 6.68c.4.65.36 1.67-.1 2.28l-5.18 6.9c-.37.49-1.17.89-1.78.89H4.22a2.23 2.23 0 0 1-1.89-3.41l2.77-4.43a2.2 2.2 0 0 0 0-2.14L2.33 6.49A2.22 2.22 0 0 1 4.22 3.1"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
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
            d="M17.88 6.12 3.93 20.07a1 1 0 0 1-1.5-.1 2.2 2.2 0 0 1-.08-2.48l2.76-4.43a2.2 2.2 0 0 0 0-2.14L2.35 6.49a2.22 2.22 0 0 1 1.88-3.4h11.45c.68 0 1.52.47 1.88 1.04l.47.74c.23.41.18.92-.15 1.25"
            fill="currentColor"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="m21.63 13.11-5.18 6.9c-.36.49-1.16.89-1.78.89H7.51a1 1 0 0 1-.71-1.71L18.31 7.68a1 1 0 0 1 1.56.18l1.85 2.97c.41.64.37 1.67-.09 2.28"
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
            d="M17.88 6.12 3.92 20.08a1 1 0 0 1-1.5-.1 2.2 2.2 0 0 1-.08-2.48l2.76-4.43a2.2 2.2 0 0 0 0-2.14L2.34 6.5a2.22 2.22 0 0 1 1.88-3.4h11.45c.68 0 1.52.47 1.88 1.04l.47.74c.24.4.19.91-.14 1.24"
            fill="currentColor"
          />
          <path
            d="m21.63 13.11-5.18 6.9c-.36.49-1.16.89-1.78.89H7.51a1 1 0 0 1-.71-1.71L18.32 7.68a1 1 0 0 1 1.56.18l1.85 2.97c.4.64.36 1.67-.1 2.28"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconTagRight;
