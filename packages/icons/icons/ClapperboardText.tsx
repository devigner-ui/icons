import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClapperboardText = forwardRef<SVGSVGElement, IconProps>(
  function IconClapperboardText(
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.5 14h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6.5 17.5H12"
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
              d="M16.54 2.09C15.33 2 13.84 2 12 2h-.1L8.4 7.25h4.7z"
              fill="currentColor"
            />
            <path
              d="M10.1 2c-3.48.03-5.38.21-6.64 1.46-.85.86-1.2 2.03-1.36 3.79h4.5z"
              fill="currentColor"
            />
            <path
              d="M20.54 3.46c.85.86 1.2 2.03 1.36 3.79h-7l3.3-4.95c1 .21 1.74.57 2.34 1.16"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12q0-1.85.03-3.25h19.94q.04 1.4.03 3.25c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="M5.75 17.5c0-.41.34-.75.75-.75H12a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M6.5 13.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z"
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
              d="M16.54 2.09C15.33 2 13.84 2 12 2h-.1L8.4 7.25h4.7z"
              fill="currentColor"
            />
            <path
              d="M10.1 2c-3.48.03-5.38.21-6.64 1.46-.85.86-1.2 2.03-1.36 3.79h4.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.03 8.75Q1.99 10.15 2 12c0 4.71 0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12q0-1.85-.03-3.25zM5.75 14c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75m.75 2.75a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M20.54 3.46c.85.86 1.2 2.03 1.36 3.79h-7l3.3-4.95c1 .21 1.74.57 2.34 1.16"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClapperboardText;
