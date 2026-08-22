import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartphoneVibration = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartphoneVibration(
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
              d="M5 8c0-2.83 0-4.24.88-5.12S8.18 2 11 2h2c2.83 0 4.24 0 5.12.88S19 5.18 19 8v8c0 2.83 0 4.24-.88 5.12S15.82 22 13 22h-2c-2.83 0-4.24 0-5.12-.88S5 18.82 5 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.5 19h-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m22 6-.78 1.55a1 1 0 0 0 0 .9l.56 1.1a1 1 0 0 1 0 .9l-.56 1.1a1 1 0 0 0 0 .9l.56 1.1a1 1 0 0 1 0 .9l-.56 1.1a1 1 0 0 0 0 .9L22 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m2 6 .78 1.55a1 1 0 0 1 0 .9l-.56 1.1a1 1 0 0 0 0 .9l.56 1.1a1 1 0 0 1 0 .9l-.56 1.1a1 1 0 0 0 0 .9l.56 1.1a1 1 0 0 1 0 .9L2 18"
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
              opacity={duotone ? "0.4" : "1"}
              d="M5.88 2.88C5 3.76 5 5.18 5 8v8c0 2.83 0 4.24.88 5.12S8.18 22 11 22h2c2.83 0 4.24 0 5.12-.88S19 18.82 19 16V8c0-2.83 0-4.24-.88-5.12S15.82 2 13 2h-2c-2.83 0-4.24 0-5.12.88"
              fill="currentColor"
            />
            <path
              d="M9.5 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.66 5.33a.75.75 0 0 1 1.01.33l.78 1.56c.24.49.24 1.07 0 1.56l-.56 1.1a.3.3 0 0 0 0 .23l.56 1.1c.24.5.24 1.08 0 1.57l-.56 1.1a.3.3 0 0 0 0 .23l.56 1.1c.24.5.24 1.08 0 1.57l-.78 1.56a.75.75 0 0 1-1.34-.68l.78-1.55a.3.3 0 0 0 0-.22l-.56-1.1a1.8 1.8 0 0 1 0-1.57l.56-1.1a.3.3 0 0 0 0-.23l-.56-1.1a1.8 1.8 0 0 1 0-1.57l.56-1.1a.3.3 0 0 0 0-.23l-.78-1.55a.75.75 0 0 1 .33-1.01m20.68 0c.37.18.52.64.33 1L21.9 7.9a.3.3 0 0 0 0 .22l.56 1.1c.24.5.24 1.08 0 1.57l-.56 1.1a.3.3 0 0 0 0 .23l.56 1.1c.24.5.24 1.08 0 1.57l-.56 1.1a.3.3 0 0 0 0 .23l.78 1.55a.75.75 0 1 1-1.34.68l-.78-1.56a1.8 1.8 0 0 1 0-1.56l.56-1.1a.3.3 0 0 0 0-.23l-.56-1.1a1.8 1.8 0 0 1 0-1.57l.56-1.1a.3.3 0 0 0 0-.23l-.56-1.1a1.8 1.8 0 0 1 0-1.57l.78-1.56a.75.75 0 0 1 1-.33"
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
              d="M5.88 2.88C5 3.76 5 5.18 5 8v8c0 2.83 0 4.24.88 5.12S8.18 22 11 22h2c2.83 0 4.24 0 5.12-.88S19 18.82 19 16V8c0-2.83 0-4.24-.88-5.12S15.82 2 13 2h-2c-2.83 0-4.24 0-5.12.88M9.5 18.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.66 5.33a.75.75 0 0 1 1.01.33l.78 1.56c.24.49.24 1.07 0 1.56l-.56 1.1a.3.3 0 0 0 0 .23l.56 1.1c.24.5.24 1.08 0 1.57l-.56 1.1a.3.3 0 0 0 0 .23l.56 1.1c.24.5.24 1.08 0 1.57l-.78 1.56a.75.75 0 1 1-1.34-.68l.78-1.55a.3.3 0 0 0 0-.22l-.56-1.1a1.8 1.8 0 0 1 0-1.57l.56-1.1a.3.3 0 0 0 0-.23l-.56-1.1a1.8 1.8 0 0 1 0-1.57l.56-1.1a.3.3 0 0 0 0-.23l-.78-1.55a.75.75 0 0 1 .33-1.01m20.68 0c.37.18.52.64.33 1L21.9 7.9a.3.3 0 0 0 0 .22l.56 1.1c.24.5.24 1.08 0 1.57l-.56 1.1a.3.3 0 0 0 0 .23l.56 1.1c.24.5.24 1.08 0 1.57l-.56 1.1a.3.3 0 0 0 0 .23l.78 1.55a.75.75 0 1 1-1.34.68l-.78-1.56a1.8 1.8 0 0 1 0-1.56l.56-1.1a.3.3 0 0 0 0-.23l-.56-1.1a1.8 1.8 0 0 1 0-1.57l.56-1.1a.3.3 0 0 0 0-.23l-.56-1.1a1.8 1.8 0 0 1 0-1.57l.78-1.56a.75.75 0 0 1 1-.33"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartphoneVibration;
