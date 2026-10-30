import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconColorTuning = forwardRef<SVGSVGElement, IconProps>(
  function IconColorTuning(
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
            d="M2 12h7.5M22 12h-7.5"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M20 15.68C20 19 17.73 22 16 22c-1.26 0-2.33-.97-3.03-3M4.14 8.32C4.14 5 6.41 2 8.14 2c2.27 0 3.93 3.16 3.93 10q0 1.65.13 3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M2 12h7.5M22 12h-7.5"
              stroke="currentColor"
              strokeWidth={fill ? "2" : strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M20 15.68C20 19 17.73 22 16 22c-2.27 0-3.93-3.16-3.93-10S10.41 2 8.14 2c-1.73 0-4 3-4 6.32"
              stroke="currentColor"
              strokeWidth={fill ? "2" : strokeWidth}
              strokeLinecap="round"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconColorTuning;
