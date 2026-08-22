import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClapperboard = forwardRef<SVGSVGElement, IconProps>(
  function IconClapperboard(
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
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.5 8h-19M7 8l3.5-5.5m3 5.5L17 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              d="M10.1 2c-3.48.03-5.38.21-6.64 1.46-.85.86-1.2 2.03-1.36 3.79h4.5z"
              fill="currentColor"
            />
            <path
              d="M21.9 7.25c-.15-1.76-.5-2.93-1.36-3.79-.6-.6-1.35-.95-2.34-1.16l-3.3 4.95z"
              fill="currentColor"
            />
            <path
              d="M16.54 2.09C15.33 2 13.84 2 12 2h-.1L8.4 7.25h4.7z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.03 8.75Q1.99 10.15 2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12q0-1.85-.03-3.25z"
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
              d="M10.1 2c-3.48.03-5.38.21-6.64 1.46-.85.86-1.2 2.03-1.36 3.79h4.5z"
              fill="currentColor"
            />
            <path
              d="M2.03 8.75Q1.99 10.15 2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12q0-1.85-.03-3.25z"
              fill="currentColor"
            />
            <path
              d="M21.9 7.25c-.15-1.76-.5-2.93-1.36-3.79-.6-.6-1.35-.95-2.34-1.16l-3.3 4.95z"
              fill="currentColor"
            />
            <path
              d="M16.54 2.09C15.33 2 13.84 2 12 2h-.1L8.4 7.25h4.7z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClapperboard;
