import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowBigRightLine = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowBigRightLine(
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
            d="M13.66 4.6c-.74-.54-1.28-.73-1.77-.51C11 4.48 11 5.92 11 8.81V9h-1c-1.41 0-2.12 0-2.56.44S7 10.59 7 12s0 2.12.44 2.56S8.59 15 10 15h1v.19c0 2.89 0 4.33.89 4.72.89.4 1.97-.57 4.11-2.52l.77-.7m2.6-2.34C20.46 13.34 21 12.74 21 12c0-.88-.76-1.56-2.28-2.94l-2.41-2.18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 15V9"
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
              d="M18.72 9.06 16 6.61c-2.14-1.95-3.22-2.92-4.11-2.52S11 5.92 11 8.81V9h-1c-1.41 0-2.12 0-2.56.44S7 10.59 7 12s0 2.12.44 2.56S8.59 15 10 15h1v.19c0 2.89 0 4.33.89 4.72.89.4 1.97-.57 4.11-2.52l2.72-2.45C20.24 13.56 21 12.88 21 12s-.76-1.56-2.28-2.94Z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 15V9"
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
              d="M18.72 9.06 16 6.61c-2.14-1.95-3.22-2.92-4.11-2.52S11 5.92 11 8.81V9h-1c-1.41 0-2.12 0-2.56.44S7 10.59 7 12s0 2.12.44 2.56S8.59 15 10 15h1v.19c0 2.89 0 4.33.89 4.72.89.4 1.97-.57 4.11-2.52l2.72-2.45C20.24 13.56 21 12.88 21 12s-.76-1.56-2.28-2.94Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 15V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              d="M18.72 9.06 16 6.61c-2.14-1.95-3.22-2.92-4.11-2.52S11 5.92 11 8.81V9h-1c-1.41 0-2.12 0-2.56.44S7 10.59 7 12s0 2.12.44 2.56S8.59 15 10 15h1v.19c0 2.89 0 4.33.89 4.72.89.4 1.97-.57 4.11-2.52l2.72-2.45C20.24 13.56 21 12.88 21 12s-.76-1.56-2.28-2.94Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M3 15V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrowBigRightLine;
