import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProjector = forwardRef<SVGSVGElement, IconProps>(
  function IconProjector(
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
              d="M18 6.02c1.55.04 2.48.22 3.12.86.88.88.88 2.3.88 5.12s0 4.24-.88 5.12-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88S2 14.82 2 12s0-4.24.88-5.12S5.18 6 8 6h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.33 20.34a.75.75 0 1 0 1.34-.68zm-1-2 1 2 1.34-.68-1-2z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 20.34a.75.75 0 1 1-1.34-.68zm1-2-1 2-1.34-.68 1-2z"
              fill="currentColor"
            />
            <circle
              cx="14"
              cy="9"
              r="5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 9a2 2 0 1 0 2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M5.5 9.5V11"
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
              d="M6.25 9.5a.75.75 0 1 0-1.5 0V11a.75.75 0 1 0 1.5 0z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 9A5 5 0 1 1 9 9a5 5 0 0 1 10 0m-5.75-2c0-.41.34-.75.75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14 14a5 5 0 0 0 4.01-7.98 9 9 0 0 1 1.87.2q.77.18 1.24.66c.88.88.88 2.3.88 5.12s0 4.24-.88 5.12c-.55.55-1.3.75-2.47.83l1 1.66a.75.75 0 1 1-1.3.78l-1.43-2.4L16 18H7.08l-1.44 2.39a.75.75 0 1 1-1.28-.78l1-1.66c-1.18-.08-1.93-.28-2.48-.83C2 16.24 2 14.82 2 12s0-4.24.88-5.12S5.18 6 8 6h2a5 5 0 0 0 4 8"
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
              d="M4.61 20.64c.36.22.82.1 1.03-.25l1.44-2.4L8 18h8.92l1.44 2.39a.75.75 0 1 0 1.28-.78l-1-1.66c1.18-.08 1.93-.28 2.48-.83.88-.88.88-2.3.88-5.12s0-4.24-.88-5.12a2.6 2.6 0 0 0-1.24-.66q.61 1.27.62 2.78A6.5 6.5 0 1 1 8.23 6H8c-2.83 0-4.24 0-5.12.88S2 9.18 2 12s0 4.24.88 5.12c.55.55 1.3.75 2.47.83l-1 1.66c-.2.36-.1.82.26 1.03M5.5 8.75c.41 0 .75.34.75.75V11a.75.75 0 0 1-1.5 0V9.5c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 14a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-.75-7c0-.41.34-.75.75-.75A2.75 2.75 0 1 1 11.25 9a.75.75 0 0 1 1.5 0A1.25 1.25 0 1 0 14 7.75a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconProjector;
