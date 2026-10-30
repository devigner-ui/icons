import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaperclipVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconPaperclipVertical(
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
            d="M11.97 11.5V15a3.5 3.5 0 0 0 7 0v-1.81m0-3.5V9.5a7 7 0 1 0-14 0v6a6 6 0 0 0 6 6"
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
              d="M11.97 11.5V15a3.5 3.5 0 0 0 7 0V9.5a7 7 0 1 0-14 0v6a6 6 0 0 0 6 6"
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

export default IconPaperclipVertical;
