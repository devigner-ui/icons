import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCommandLoopsTone = forwardRef<SVGSVGElement, IconProps>(
  function IconCommandLoopsTone(
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
            d="M8 9.75V16h8V8H9.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 22a3 3 0 0 0 3-3v-3H5a3 3 0 1 0 0 6Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.07 4.33Q2.01 4.66 2 5a3 3 0 0 0 3 3h3V5a3 3 0 0 0-3.54-2.95"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 8h3a3 3 0 1 0-3-3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 22a3 3 0 1 0 0-6h-3v3a3 3 0 0 0 3 3Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              d="M16 8H8v8h8z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 22a3 3 0 0 0 3-3v-3H5a3 3 0 0 0-3 3 3 3 0 0 0 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 8h3V5a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 8h3a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 22a3 3 0 0 0 3-3 3 3 0 0 0-3-3h-3v3a3 3 0 0 0 3 3"
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
            <path d="M16 8H8v8h8z" fill="currentColor" />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 22a3 3 0 0 0 3-3v-3H5a3 3 0 0 0-3 3 3 3 0 0 0 3 3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 8h3V5a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 8h3a3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 22a3 3 0 0 0 3-3 3 3 0 0 0-3-3h-3v3a3 3 0 0 0 3 3"
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
            <path d="M16 8H8v8h8z" fill="currentColor" />
            <path
              d="M2 19a3 3 0 0 0 3 3 3 3 0 0 0 3-3v-3H5a3 3 0 0 0-3 3"
              fill="currentColor"
            />
            <path
              d="M5 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3h3V5a3 3 0 0 0-3-3"
              fill="currentColor"
            />
            <path
              d="M22 5a3 3 0 0 0-3-3 3 3 0 0 0-3 3v3h3a3 3 0 0 0 3-3"
              fill="currentColor"
            />
            <path
              d="M19 16h-3v3a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCommandLoopsTone;
