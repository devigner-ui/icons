import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPaletteRound = forwardRef<SVGSVGElement, IconProps>(
  function IconPaletteRound(
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
              d="M2 6a4 4 0 1 1 8 0v12a4 4 0 0 1-8 0z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m10 8.24 3.31-3.31a4 4 0 1 1 5.66 5.66l-9.66 9.66"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 22h12a4 4 0 0 0 0-8h-2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
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
            <path fill="currentColor" d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            <path
              fill="currentColor"
              d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0"
              opacity={duotone ? "0.4" : "1"}
            />
            <path
              fill="currentColor"
              d="m9.25 20.34 3.97-3.98 5.84-6.09a4.04 4.04 0 0 0-5.78-5.65L10 7.9V18c0 .87-.28 1.68-.75 2.34"
              opacity={duotone ? "0.6" : "1"}
            />
            <path
              fill="currentColor"
              d="m13.22 16.36-3.97 3.98A4 4 0 0 1 6 22h11.9a4 4 0 1 0 0-8h-2.41z"
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
              d="M17.9 22a4 4 0 1 0 0-8h-.22l-5.8 5.8q-.37.36-.38.88c0 .71.58 1.32 1.29 1.32z"
              fill="currentColor"
            />
            <path
              d="M13.28 4.96 12.23 6a2.5 2.5 0 0 0-.73 1.76V16c0 1.06 0 1.58.31 1.71.32.13.68-.25 1.41-1.02l5.84-6.09a4.04 4.04 0 0 0-5.78-5.65"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 6v12a4 4 0 0 1-8 0V6a4 4 0 1 1 8 0M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPaletteRound;
