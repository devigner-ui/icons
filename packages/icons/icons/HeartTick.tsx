import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartTick = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartTick(
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
              d="M22.67 17.2q-.01 1.37-.7 2.47a4.77 4.77 0 0 1-8.2 0 4.8 4.8 0 1 1 8.9-2.47"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m16 17.2 1.18 1.18 2.56-2.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 8.69c0 1.97-.51 3.71-1.31 5.22a4.8 4.8 0 0 0-7.06 6.49q-.56.26-1.01.41c-.34.12-.9.12-1.24 0-2.9-.99-9.38-5.12-9.38-12.12a5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M17.87 12.4a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6m2.38 4.17-2.56 2.36a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-1.18-1.18a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.67.67 2.03-1.88a.76.76 0 0 1 1.06.04c.28.31.26.79-.04 1.07"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 8.69a11 11 0 0 1-1.32 5.21 4.8 4.8 0 0 0-7.05 6.5q-.56.26-1.01.41c-.34.12-.9.12-1.24 0C9.64 19.99 4.77 17 3.19 12a11 11 0 0 1-.52-3.31 5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
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
              d="M17.87 12.4a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6m2.38 4.17-2.56 2.36a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-1.18-1.18a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.67.67 2.03-1.88a.76.76 0 0 1 1.06.04c.28.31.26.79-.04 1.07"
              fill="currentColor"
            />
            <path
              d="M22.67 8.73q-.01 1.78-.52 3.31c-.06.21-.31.27-.49.14a6.35 6.35 0 0 0-10.09 5.06c0 1.08.28 2.14.81 3.08.16.28-.03.64-.33.53-2.41-.82-7.28-3.81-8.86-8.81a11 11 0 0 1-.52-3.31 5.55 5.55 0 0 1 10-3.36 5.55 5.55 0 0 1 10 3.36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartTick;
