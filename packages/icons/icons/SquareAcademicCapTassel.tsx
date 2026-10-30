import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSquareAcademicCapTassel = forwardRef<SVGSVGElement, IconProps>(
  function IconSquareAcademicCapTassel(
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
            d="M2.85 6.64 9.52 3.5a5.2 5.2 0 0 1 4.44 0l6.69 3.14c1.45.68 1.45 3.04 0 3.72l-6.7 3.14a5.2 5.2 0 0 1-4.43 0l-4.77-2.24"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M2.25 15v-2.86c0-1.28 0-1.92.33-2.42s.92-.76 2.1-1.26L5.75 8"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.75 21c-1.8 0-4.15-1.12-5.61-1.93a2.8 2.8 0 0 1-1.39-2.44V11.5m14 0v5.13c0 1-.5 1.95-1.39 2.44q-.81.45-1.86.93"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
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
              d="M2.85 6.64 9.52 3.5a5.2 5.2 0 0 1 4.44 0l6.69 3.14c1.45.68 1.45 3.04 0 3.72l-6.7 3.14a5.2 5.2 0 0 1-4.43 0l-4.77-2.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.25 15v-2.86c0-1.28 0-1.92.33-2.42s.92-.75 2.1-1.26L5.75 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.75 11.5v5.13c0 1-.5 1.95-1.39 2.44-1.46.8-3.81 1.93-5.61 1.93s-4.15-1.12-5.61-1.93a2.8 2.8 0 0 1-1.39-2.44V11.5"
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
              d="M14.72 3.5a5.2 5.2 0 0 0-4.44 0l-4.3 2.01a2.25 2.25 0 0 1 .66 4.3l-1.08.47c-.53.23-.84.36-1.04.47v.05l5.76 2.7c1.42.67 3.02.67 4.44 0l6.69-3.14c1.45-.68 1.45-3.04 0-3.72z"
              fill="currentColor"
            />
            <path
              d="M6.05 8.44a.75.75 0 0 0-.6-1.38l-1.1.48q-.85.35-1.4.65c-.4.22-.74.48-1 .87q-.36.57-.4 1.25-.06.63-.05 1.54v2.9a.75.75 0 0 0 1.5 0V11.9c0-.66 0-1.09.04-1.42.03-.32.09-.47.17-.59q.08-.16.47-.39c.29-.16.69-.33 1.29-.59z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m5.5 11.26 4.78 2.24c1.42.67 3.02.67 4.44 0l4.78-2.24v5.37c0 1-.5 1.95-1.39 2.44-1.46.8-3.81 1.93-5.61 1.93s-4.15-1.12-5.61-1.93a2.8 2.8 0 0 1-1.39-2.44z"
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
              d="M14.72 3.5a5.2 5.2 0 0 0-4.44 0l-4.3 2.01a2.25 2.25 0 0 1 .66 4.3l-1.08.47c-.53.23-.84.36-1.04.47v.05l5.76 2.7c1.42.67 3.02.67 4.44 0l6.69-3.14c1.45-.68 1.45-3.04 0-3.72z"
              fill="currentColor"
            />
            <path
              d="M5.5 12.92v3.7c0 1.01.5 1.96 1.39 2.45 1.46.8 3.81 1.93 5.61 1.93s4.15-1.12 5.61-1.93a2.8 2.8 0 0 0 1.39-2.44v-3.71l-4.15 1.94a6.7 6.7 0 0 1-5.7 0z"
              fill="currentColor"
            />
            <path
              d="M6.05 8.44a.75.75 0 0 0-.6-1.38l-1.1.48q-.85.35-1.4.65c-.4.22-.74.48-1 .87q-.36.57-.4 1.25-.06.63-.05 1.54v2.9a.75.75 0 0 0 1.5 0V11.9c0-.66 0-1.09.04-1.42.03-.32.09-.47.17-.59q.08-.16.47-.39c.29-.16.69-.33 1.29-.59z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSquareAcademicCapTassel;
