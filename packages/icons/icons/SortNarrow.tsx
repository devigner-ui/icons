import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSortNarrow = forwardRef<SVGSVGElement, IconProps>(function IconSortNarrow(
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
            d="M3 7h5.45m3.5 0H21"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 12h12"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 17h4"
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
            d="M3 7h18"
            stroke="currentColor"
            strokeWidth={fill ? "2" : strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M6 12h12"
            stroke="currentColor"
            strokeWidth={fill ? "2" : strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M10 17h4"
            stroke="currentColor"
            strokeWidth={fill ? "2" : strokeWidth}
            strokeLinecap="round"
          />
        </svg>
      )}
    </>
  );
});

export default IconSortNarrow;
