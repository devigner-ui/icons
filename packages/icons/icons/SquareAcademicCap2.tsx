import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSquareAcademicCap2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSquareAcademicCap2(
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
              d="M3.1 6.64 9.77 3.5a5.2 5.2 0 0 1 4.44 0l6.69 3.14c1.45.68 1.45 3.04 0 3.72l-6.7 3.14a5.2 5.2 0 0 1-4.43 0L5 11.26"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.5 15v-2.86c0-1.28 0-1.92.33-2.42s.92-.75 2.1-1.26L6 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 11.5v5.13c0 1-.5 1.95-1.39 2.44C16.15 19.87 13.8 21 12 21s-4.15-1.12-5.61-1.93A2.8 2.8 0 0 1 5 16.63V11.5"
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
              d="M14.22 3.5a5.2 5.2 0 0 0-4.44 0l-4.3 2.01a2.25 2.25 0 0 1 .66 4.3l-1.08.47c-.53.23-.84.36-1.04.47v.05l5.76 2.7c1.42.67 3.02.67 4.44 0l6.69-3.14c1.45-.68 1.45-3.04 0-3.72z"
              fill="currentColor"
            />
            <path
              d="M5.55 8.44a.75.75 0 0 0-.6-1.38l-1.1.48q-.85.35-1.4.65c-.4.22-.74.48-1 .87q-.36.57-.4 1.25-.06.63-.05 1.54v2.9a.75.75 0 0 0 1.5 0V11.9c0-.66 0-1.09.04-1.42.03-.32.09-.47.17-.59q.08-.16.47-.39c.29-.16.69-.33 1.29-.59z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5 11.26 4.78 2.24c1.42.67 3.02.67 4.44 0L19 11.26v5.37c0 1-.5 1.95-1.39 2.44C16.15 19.87 13.8 21 12 21s-4.15-1.12-5.61-1.93A2.8 2.8 0 0 1 5 16.63z"
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
              d="M14.22 3.5a5.2 5.2 0 0 0-4.44 0l-4.3 2.01a2.25 2.25 0 0 1 .66 4.3l-1.08.47c-.53.23-.84.36-1.04.47v.05l5.76 2.7c1.42.67 3.02.67 4.44 0l6.69-3.14c1.45-.68 1.45-3.04 0-3.72z"
              fill="currentColor"
            />
            <path
              d="M5 12.92v3.7c0 1.01.5 1.96 1.39 2.45C7.85 19.87 10.2 21 12 21s4.15-1.12 5.61-1.93A2.8 2.8 0 0 0 19 16.63v-3.71l-4.15 1.94a6.7 6.7 0 0 1-5.7 0z"
              fill="currentColor"
            />
            <path
              d="M5.55 8.44a.75.75 0 0 0-.6-1.38l-1.1.48q-.85.35-1.4.65c-.4.22-.74.48-1 .87q-.36.57-.4 1.25-.06.63-.05 1.54v2.9a.75.75 0 0 0 1.5 0V11.9c0-.66 0-1.09.04-1.42.03-.32.09-.47.17-.59q.08-.16.47-.39c.29-.16.69-.33 1.29-.59z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSquareAcademicCap2;
