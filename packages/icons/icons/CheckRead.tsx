import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCheckRead = forwardRef<SVGSVGElement, IconProps>(
  function IconCheckRead(
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
            d="M4.56 12.4a.75.75 0 1 0-1.12 1zm2.58 4.1-.56.5a.75.75 0 0 0 1.13 0zM15.56 8a.75.75 0 1 0-1.12-1zm-5.05 3.5a.75.75 0 0 0 1.13 1zm-.84 3.24a.75.75 0 1 0-1.13-.98zM3.44 13.4 6.58 17l1.13-.98-3.15-3.6zM7.7 17l1.96-2.25-1.13-.98L6.58 16zm3.93-4.5 1.96-2.25-1.13-.98-1.96 2.25zm1.96-2.25L15.57 8l-1.13-.98-1.97 2.25z"
            fill="currentColor"
          />
          <path
            d="m20 7.56-4.29 4.5M11 16l.43.56 2.14-2.25"
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
              d="m4 12.9 3.14 3.6 7.86-9"
              stroke="currentColor"
              strokeWidth={fill ? "2" : strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m20 7.56-8.57 9L11 16"
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

export default IconCheckRead;
