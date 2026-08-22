import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextBoldSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconTextBoldSquare(
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
              d="M2 12c0-4.7 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 7.52C8 6.68 8.68 6 9.52 6H12a3 3 0 1 1 0 6H8z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 12h5a3 3 0 1 1 0 6H9.18C8.53 18 8 17.47 8 16.82z"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.52 5.25a2.27 2.27 0 0 0-2.27 2.27v9.3c0 1.07.86 1.93 1.93 1.93H13a3.75 3.75 0 0 0 1.66-7.11A3.74 3.74 0 0 0 12 5.25zM14.25 9c0 1.24-1 2.25-2.25 2.25H8.75V7.52c0-.42.35-.77.77-.77H12c1.24 0 2.25 1 2.25 2.25m-5.5 7.82v-4.07H13a2.25 2.25 0 1 1 0 4.5H9.18a.43.43 0 0 1-.43-.43"
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
              d="M14.25 9c0 1.24-1 2.25-2.25 2.25H8.75V7.52c0-.42.35-.77.77-.77H12c1.24 0 2.25 1 2.25 2.25"
              fill="currentColor"
            />
            <path
              d="M8.75 16.82v-4.07H13a2.25 2.25 0 1 1 0 4.5H9.18a.43.43 0 0 1-.43-.43"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m3.79 4.06a2.27 2.27 0 0 1 2.27-2.27H12a3.75 3.75 0 0 1 2.66 6.39A3.75 3.75 0 0 1 13 18.75H9.18a1.93 1.93 0 0 1-1.93-1.93z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextBoldSquare;
