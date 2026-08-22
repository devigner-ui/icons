import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSliderVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconSliderVertical(
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
              d="M6 8c0-2.83 0-4.24.88-5.12S9.18 2 12 2s4.24 0 5.12.88S18 5.18 18 8v8c0 2.83 0 4.24-.88 5.12S14.82 22 12 22s-4.24 0-5.12-.88S6 18.82 6 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 19.5c1.4 0 2.1 0 2.64-.27a2.5 2.5 0 0 0 1.09-1.1c.27-.53.27-1.23.27-2.63v-7c0-1.4 0-2.1-.27-2.63a2.5 2.5 0 0 0-1.1-1.1C20.1 4.5 19.4 4.5 18 4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 19.5c-1.4 0-2.1 0-2.63-.27a2.5 2.5 0 0 1-1.1-1.1C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.27-2.63a2.5 2.5 0 0 1 1.1-1.1C3.9 4.5 4.6 4.5 6 4.5"
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
              d="M6 8c0-2.83 0-4.24.88-5.12S9.18 2 12 2s4.24 0 5.12.88S18 5.18 18 8v8c0 2.83 0 4.24-.88 5.12S14.82 22 12 22s-4.24 0-5.12-.88S6 18.82 6 16z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.14 4.5C6 5.34 6 6.46 6 8v8c0 1.54 0 2.66.14 3.5H6c-1.4 0-2.1 0-2.63-.27a2.5 2.5 0 0 1-1.1-1.1C2 17.6 2 16.9 2 15.5v-7c0-1.4 0-2.1.27-2.63a2.5 2.5 0 0 1 1.1-1.1C3.9 4.5 4.6 4.5 6 4.5z"
                fill="currentColor"
              />
              <path
                d="M17.86 4.5C18 5.34 18 6.46 18 8v8c0 1.54 0 2.66-.14 3.5H18c1.4 0 2.1 0 2.64-.27a2.5 2.5 0 0 0 1.09-1.1c.27-.53.27-1.23.27-2.63v-7c0-1.4 0-2.1-.27-2.63a2.5 2.5 0 0 0-1.1-1.1C20.1 4.5 19.4 4.5 18 4.5z"
                fill="currentColor"
              />
            </g>
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
              d="M6.42 8c0-2.83 0-4.24.82-5.12S9.37 2 12 2s3.95 0 4.76.88c.82.88.82 2.3.82 5.12v8c0 2.83 0 4.24-.82 5.12S14.63 22 12 22s-3.95 0-4.76-.88c-.82-.88-.82-2.3-.82-5.12z"
              fill="currentColor"
            />
            <path
              d="M5.02 7.9v8.2q-.01 1.47.05 2.63a12 12 0 0 0 .11 1.08c.04.22-.13.42-.35.4a3 3 0 0 1-1.18-.31 3.2 3.2 0 0 1-1.62-2.7Q2 16.54 2 15.53V8.47q0-1 .03-1.67a3.2 3.2 0 0 1 1.62-2.7q.54-.28 1.18-.31c.22-.02.39.18.35.4a8 8 0 0 0-.11 1.08Q5 6.43 5.02 7.9"
              fill="currentColor"
            />
            <path
              d="M18.98 16.1V7.9q.01-1.47-.05-2.63a12 12 0 0 0-.11-1.08c-.04-.22.13-.42.35-.4q.64.04 1.18.31a3.2 3.2 0 0 1 1.62 2.7q.04.66.03 1.67v7.06q0 1-.03 1.67a3.2 3.2 0 0 1-1.62 2.7q-.54.28-1.18.31c-.22.02-.39-.18-.35-.4a8 8 0 0 0 .11-1.08q.06-1.16.05-2.63"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSliderVertical;
