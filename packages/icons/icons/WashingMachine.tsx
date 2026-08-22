import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWashingMachine = forwardRef<SVGSVGElement, IconProps>(
  function IconWashingMachine(
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
              d="M6 22v-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18 22v-1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M3 10c0-3.77 0-5.66 1.17-6.83S7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17S21 6.23 21 10v3c0 3.77 0 5.66-1.17 6.83S16.77 21 13 21h-2c-3.77 0-5.66 0-6.83-1.17S3 16.77 3 13z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3 9h18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M6.5 5.5h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
            </g>
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M18.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
            </g>
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
              d="M9.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 9h18v4c0 3.77 0 5.66-1.17 6.83q-.45.45-1.08.7V22a.75.75 0 0 1-1.5 0v-1.13C16.18 21 14.81 21 13 21h-2c-1.8 0-3.18 0-4.25-.13V22a.75.75 0 0 1-1.5 0v-1.47a3 3 0 0 1-1.08-.7C3 18.66 3 16.77 3 13zm9 2.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M4.17 3.17c-.97.98-1.14 2.44-1.16 5.08V9H21v-.75c-.03-2.64-.2-4.1-1.17-5.08C18.66 2 16.77 2 13 2h-2C7.23 2 5.34 2 4.17 3.17"
              fill="currentColor"
            />
            <path
              d="M6.5 4.75a.75.75 0 0 0 0 1.5h3a.75.75 0 1 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M15.5 5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M17.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
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
              d="M21 8.25H3c.03-2.64.2-4.1 1.17-5.08C5.34 2 7.23 2 11 2h2c3.77 0 5.66 0 6.83 1.17.97.98 1.14 2.44 1.16 5.08M5.74 5.5c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m8.75 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M9.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 9.75h18V13c0 3.77 0 5.66-1.17 6.83q-.45.45-1.08.7V22a.75.75 0 0 1-1.5 0v-1.13C16.18 21 14.81 21 13 21h-2c-1.8 0-3.18 0-4.25-.13V22a.75.75 0 0 1-1.5 0v-1.47a3 3 0 0 1-1.08-.7C3 18.66 3 16.77 3 13zm9 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWashingMachine;
