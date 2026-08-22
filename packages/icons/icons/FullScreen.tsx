import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFullScreen = forwardRef<SVGSVGElement, IconProps>(
  function IconFullScreen(
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
              d="M22 14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M10 22c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 2C6.23 2 4.34 2 3.17 3.17S2 6.23 2 10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M14 2c3.77 0 5.66 0 6.83 1.17S22 6.23 22 10"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.29 2.89A36 36 0 0 0 14 2.75a.75.75 0 0 1 0-1.5h.06c1.83 0 3.29 0 4.43.15 1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43V10a.75.75 0 0 1-1.5 0c0-1.9 0-3.26-.14-4.29-.13-1-.39-1.58-.81-2-.43-.43-1-.68-2.01-.82M2 13.25c.41 0 .75.34.75.75 0 1.9 0 3.26.14 4.29.14 1 .39 1.58.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14a.75.75 0 0 1 0 1.5h-.06c-1.83 0-3.29 0-4.43-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43V14c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.94 1.25H10a.75.75 0 0 1 0 1.5 36 36 0 0 0-4.29.14c-1 .14-1.58.39-2 .81-.43.43-.68 1-.82 2.01A36 36 0 0 0 2.75 10a.75.75 0 0 1-1.5 0v-.06c0-1.83 0-3.29.15-4.43a4.7 4.7 0 0 1 1.24-2.87A4.7 4.7 0 0 1 5.51 1.4c1.14-.15 2.6-.15 4.43-.15"
                fill="currentColor"
              />
              <path
                d="M22 13.25c.41 0 .75.34.75.75v.06c0 1.83 0 3.29-.15 4.43a4.7 4.7 0 0 1-1.24 2.87 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H14a.75.75 0 0 1 0-1.5c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.43-.43.69-1 .82-2.01.14-1.03.14-2.38.14-4.29 0-.41.34-.75.75-.75"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.94 1.25H10a.75.75 0 0 1 0 1.5 36 36 0 0 0-4.29.14c-1 .14-1.58.39-2 .81-.43.43-.68 1-.82 2.01A36 36 0 0 0 2.75 10a.75.75 0 0 1-1.5 0v-.06c0-1.83 0-3.29.15-4.43a4.7 4.7 0 0 1 1.24-2.87A4.7 4.7 0 0 1 5.51 1.4c1.14-.15 2.6-.15 4.43-.15m8.35 1.64A36 36 0 0 0 14 2.75a.75.75 0 0 1 0-1.5h.06c1.83 0 3.29 0 4.43.15 1.17.16 2.12.5 2.87 1.24.75.75 1.08 1.7 1.24 2.87.15 1.14.15 2.6.15 4.43V10a.75.75 0 0 1-1.5 0c0-1.9 0-3.26-.14-4.29-.13-1-.39-1.58-.81-2-.43-.43-1-.68-2.01-.82M2 13.25c.41 0 .75.34.75.75 0 1.9 0 3.26.14 4.29.14 1 .39 1.58.81 2 .43.43 1 .69 2.01.82 1.03.14 2.38.14 4.29.14a.75.75 0 0 1 0 1.5h-.06c-1.83 0-3.29 0-4.43-.15a4.7 4.7 0 0 1-2.87-1.24 4.7 4.7 0 0 1-1.24-2.87c-.15-1.14-.15-2.6-.15-4.43V14c0-.41.34-.75.75-.75m20 0c.41 0 .75.34.75.75v.06c0 1.83 0 3.29-.15 4.43a4.7 4.7 0 0 1-1.24 2.87 4.7 4.7 0 0 1-2.87 1.24c-1.14.15-2.6.15-4.43.15H14a.75.75 0 0 1 0-1.5c1.9 0 3.26 0 4.29-.14 1-.13 1.58-.39 2-.81.43-.43.69-1 .82-2.01.14-1.03.14-2.38.14-4.29 0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFullScreen;
