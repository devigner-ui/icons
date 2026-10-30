import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrowBigLeftLine = forwardRef<SVGSVGElement, IconProps>(
  function IconArrowBigLeftLine(
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
            d="M10.34 19.4c.74.54 1.28.73 1.77.51.89-.39.89-1.83.89-4.72V15h1c1.41 0 2.12 0 2.56-.44S17 13.41 17 12s0-2.12-.44-2.56S15.41 9 14 9h-1v-.19c0-2.89 0-4.33-.89-4.72-.89-.4-1.97.57-4.11 2.52l-.77.7m-2.6 2.34C3.54 10.66 3 11.26 3 12c0 .88.76 1.56 2.28 2.94l2.41 2.18"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 9v6"
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
              d="M5.28 14.94 8 17.39c2.14 1.95 3.22 2.92 4.11 2.52s.89-1.83.89-4.72V15h1c1.41 0 2.12 0 2.56-.44S17 13.41 17 12s0-2.12-.44-2.56S15.41 9 14 9h-1v-.19c0-2.89 0-4.33-.89-4.72-.89-.4-1.97.57-4.11 2.52L5.28 9.06C3.76 10.44 3 11.12 3 12s.76 1.56 2.28 2.94Z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 9v6"
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
              d="M5.28 14.94 8 17.39c2.14 1.95 3.22 2.92 4.11 2.52s.89-1.83.89-4.72V15h1c1.41 0 2.12 0 2.56-.44S17 13.41 17 12s0-2.12-.44-2.56S15.41 9 14 9h-1v-.19c0-2.89 0-4.33-.89-4.72-.89-.4-1.97.57-4.11 2.52L5.28 9.06C3.76 10.44 3 11.12 3 12s.76 1.56 2.28 2.94Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21 9v6"
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
              d="M5.28 14.94 8 17.39c2.14 1.95 3.22 2.92 4.11 2.52s.89-1.83.89-4.72V15h1c1.41 0 2.12 0 2.56-.44S17 13.41 17 12s0-2.12-.44-2.56S15.41 9 14 9h-1v-.19c0-2.89 0-4.33-.89-4.72-.89-.4-1.97.57-4.11 2.52L5.28 9.06C3.76 10.44 3 11.12 3 12s.76 1.56 2.28 2.94Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M21 9v6"
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

export default IconArrowBigLeftLine;
