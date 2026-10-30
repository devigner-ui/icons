import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCropCorners = forwardRef<SVGSVGElement, IconProps>(
  function IconCropCorners(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    /* One stroked glyph in all four core styles. Bold and Bulk fix the weight
       at the sibling icon's Bold; Bulk keeps TwoTone's half-tone parts. They
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
            d="M22 19h-9c-3.77 0-5.66 0-6.83-1.17-.65-.65-.94-1.53-1.07-2.83M5 11V2"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M8 5h3c3.77 0 5.66 0 6.83 1.17.65.65.94 1.53 1.07 2.83M2 5h3m14 14v3m0-9v3"
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
              d="M22 19h-9c-3.77 0-5.66 0-6.83-1.17S5 14.77 5 11V2"
              stroke="currentColor"
              strokeWidth={fill ? "1.5" : strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 5h3c3.77 0 5.66 0 6.83 1.17S19 9.23 19 13v3M2 5h3m14 14v3"
              stroke="currentColor"
              strokeWidth={fill ? "1.5" : strokeWidth}
              strokeLinecap="round"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCropCorners;
