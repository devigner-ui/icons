import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWaterdrops = forwardRef<SVGSVGElement, IconProps>(
  function IconWaterdrops(
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
              d="M10 17.83C10 20.13 8.2 22 6 22s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C8.43 14.48 10 16.4 10 17.84"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 17.83c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0 1.17 1.24 2.74 3.16 2.74 4.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 7.83c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C14.43 4.47 16 6.4 16 7.83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="M10 17.83C10 20.13 8.2 22 6 22s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C8.43 14.48 10 16.4 10 17.84"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M22 17.83c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0 1.17 1.24 2.74 3.16 2.74 4.6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 7.83c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C14.43 4.47 16 6.4 16 7.83"
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
              d="M10 17.83C10 20.13 8.2 22 6 22s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C8.43 14.48 10 16.4 10 17.84"
              fill="currentColor"
            />
            <path
              d="M22 17.83c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0 1.17 1.24 2.74 3.16 2.74 4.6"
              fill="currentColor"
            />
            <path
              d="M16 7.83c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C14.43 4.47 16 6.4 16 7.83"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWaterdrops;
