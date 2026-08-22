import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFireSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconFireSquare(
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
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M17 12.67c0 4.26-3.56 5.33-5.33 5.33C10.1 18 7 16.93 7 12.67a4.3 4.3 0 0 1 1.96-3.63c.4-.27.91-.1.94.4.06 1.06.88 1.92 1.52 1.06a4.7 4.7 0 0 0 .87-2.5c0-.95.96-1.55 1.71-.97 1.46 1.13 3 3.03 3 5.64"
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
              opacity={duotone ? "0.4" : "1"}
              d="M3.46 20.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54"
              fill="currentColor"
            />
            <path
              d="M17 12.67c0 4.26-3.56 5.33-5.33 5.33C10.1 18 7 16.93 7 12.67a4.3 4.3 0 0 1 1.96-3.63c.4-.27.91-.1.94.4.06 1.06.88 1.92 1.52 1.06a4.7 4.7 0 0 0 .87-2.5c0-.95.96-1.55 1.71-.97 1.46 1.13 3 3.03 3 5.64"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46M17 12.66c0 4.27-3.56 5.34-5.33 5.34C10.1 18 7 16.93 7 12.67a4.3 4.3 0 0 1 1.96-3.63c.4-.27.91-.1.94.4.06 1.06.88 1.92 1.52 1.06a4.7 4.7 0 0 0 .87-2.5c0-.95.96-1.55 1.71-.97 1.46 1.13 3 3.03 3 5.64"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFireSquare;
