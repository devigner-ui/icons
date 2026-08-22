import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScissorsSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconScissorsSquare(
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
              d="M14.5 17.1 8 6m10 10.2c0 1-.84 1.8-1.87 1.8s-1.88-.8-1.88-1.8.84-1.8 1.88-1.8c1.03 0 1.87.8 1.87 1.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M9.5 17.1 16 6M6 16.2c0 1 .84 1.8 1.88 1.8 1.03 0 1.87-.8 1.87-1.8s-.84-1.8-1.87-1.8S6 15.2 6 16.2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M16.38 5.35a.75.75 0 0 0-1.03.27L12 11.35 8.65 5.62a.75.75 0 0 0-1.3.76l3.78 6.45-1.11 1.9a2.7 2.7 0 0 0-2.14-1.08 2.6 2.6 0 0 0-2.63 2.55c0 1.44 1.2 2.55 2.63 2.55.99 0 1.87-.54 2.32-1.36l1.8-3.08 1.8 3.08a2.6 2.6 0 0 0 2.33 1.36 2.6 2.6 0 0 0 2.62-2.55c0-1.44-1.2-2.55-2.62-2.55-.88 0-1.67.42-2.15 1.08l-1.11-1.9 3.78-6.45a.75.75 0 0 0-.27-1.03"
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
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m12.92 1.9a.75.75 0 0 0-1.03.26L12 11.35 8.65 5.62a.75.75 0 0 0-1.3.76l3.78 6.45-1.11 1.9a2.7 2.7 0 0 0-2.14-1.08 2.6 2.6 0 0 0-2.63 2.55c0 1.44 1.2 2.55 2.63 2.55.99 0 1.87-.54 2.32-1.36l1.8-3.08 1.8 3.08a2.6 2.6 0 0 0 2.33 1.36 2.6 2.6 0 0 0 2.62-2.55c0-1.44-1.2-2.55-2.62-2.55-.88 0-1.67.42-2.15 1.08l-1.11-1.9 3.78-6.45a.75.75 0 0 0-.27-1.03"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconScissorsSquare;
