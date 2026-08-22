import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMinimizeSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconMinimizeSquare(
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
              d="m20 4-6 6m0 0h3.75M14 10V6.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m4 20 6-6m0 0H6.25M10 14v3.75"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M19.95 2.99a4 4 0 0 1 1.06 1.06l-5.2 5.2h1.94a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 1.5 0v1.94z"
              fill="currentColor"
            />
            <path
              d="M4.05 21.01a4 4 0 0 1-1.06-1.06l5.2-5.2H6.25a.75.75 0 0 1 0-1.5H10c.41 0 .75.34.75.75v3.75a.75.75 0 0 1-1.5 0v-1.94z"
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2c4.13 0 6.46 0 7.95.99l-5.2 5.2V6.25a.75.75 0 0 0-1.5 0V10c0 .41.34.75.75.75h3.75a.75.75 0 0 0 0-1.5h-1.94l5.2-5.2C22 5.55 22 7.87 22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22c-4.13 0-6.46 0-7.95-.99l5.2-5.2v1.94a.75.75 0 0 0 1.5 0V14a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0 0 1.5h1.94l-5.2 5.2C2 18.45 2 16.13 2 12"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMinimizeSquare;
