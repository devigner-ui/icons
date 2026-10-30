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
            d="M10 17.48c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0 1.17 1.24 2.74 3.17 2.74 4.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M22 17.48c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0 1.17 1.24 2.74 3.16 2.74 4.6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
          <path
            d="M13.26 2.88a1.7 1.7 0 0 0-2.52 0C9.57 4.12 8 6.05 8 7.48c0 2.3 1.8 4.17 4 4.17s4-1.87 4-4.17q0-.4-.15-.83"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M10 17.48c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C8.43 14.13 10 16.05 10 17.49"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M22 17.48c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0 1.17 1.24 2.74 3.16 2.74 4.6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 7.48c0 2.3-1.8 4.17-4 4.17S8 9.78 8 7.48c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C14.43 4.12 16 6.05 16 7.48"
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
              d="M10 17.48c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C8.43 14.13 10 16.05 10 17.49"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M22 17.48c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0 1.17 1.24 2.74 3.16 2.74 4.6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 7.48c0 2.3-1.8 4.17-4 4.17S8 9.78 8 7.48c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C14.43 4.12 16 6.05 16 7.48"
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
              d="M10 17.53c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C8.43 14.18 10 16.1 10 17.54"
              fill="currentColor"
            />
            <path
              d="M22 17.53c0 2.3-1.8 4.17-4 4.17s-4-1.87-4-4.17c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0 1.17 1.24 2.74 3.16 2.74 4.6"
              fill="currentColor"
            />
            <path
              d="M16 7.53c0 2.3-1.8 4.17-4 4.17S8 9.83 8 7.53c0-1.44 1.57-3.36 2.74-4.6.7-.73 1.83-.73 2.52 0C14.43 4.17 16 6.1 16 7.53"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWaterdrops;
