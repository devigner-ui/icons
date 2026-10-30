import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRotateRight = forwardRef<SVGSVGElement, IconProps>(
  function IconRotateRight(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    /* One stroked glyph in all four core styles. Bold and Bulk fix the weight
       at 2, the Text icons' Bold; Bulk keeps TwoTone's half-tone parts. They
       used to cut the glyph out of a filled square the outline never had. */
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
            d="M14.89 4.93c-.87-.26-1.83-.43-2.89-.43a8.66 8.66 0 0 0-8.57 10.03m1.23 3.25a8.68 8.68 0 1 0 14.55-9.42"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m16.13 5.17-2.89-3.32"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m16.13 5.17-3.37 2.46"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M14.89 5.08c-.87-.26-1.83-.43-2.89-.43a8.67 8.67 0 1 0 7.21 3.86"
              stroke="currentColor"
              strokeWidth={fill ? "2" : strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.13 5.32 13.24 2"
              stroke="currentColor"
              strokeWidth={fill ? "2" : strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m16.13 5.32-3.37 2.46"
              stroke="currentColor"
              strokeWidth={fill ? "2" : strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRotateRight;
