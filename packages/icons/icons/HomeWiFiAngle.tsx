import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHomeWiFiAngle = forwardRef<SVGSVGElement, IconProps>(
  function IconHomeWiFiAngle(
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
              d="M2.36 12.96C1.98 10.32 1.8 9 2.34 7.88s1.69-1.82 3.99-3.19l1.38-.82C9.81 2.62 10.85 2 12 2s2.2.62 4.29 1.87l1.38.82c2.3 1.37 3.45 2.06 4 3.19.53 1.12.35 2.44-.03 5.08l-.28 1.94c-.49 3.38-.73 5.08-1.9 6.09C18.27 22 16.55 22 13.1 22h-2.22c-3.44 0-5.17 0-6.34-1.01-1.18-1.01-1.42-2.7-1.9-6.1z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M6 11.68a8.05 8.05 0 0 1 12 0M8 13.84a5.37 5.37 0 0 1 8 0M10 16c1.1-1.2 2.9-1.2 4 0"
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
              opacity={duotone ? "0.4" : "1"}
              d="M13.1 22h-2.2c-3.45 0-5.18 0-6.35-1.01-1.18-1.01-1.42-2.7-1.9-6.1l-.29-1.93C1.98 10.32 1.8 9 2.34 7.87s1.69-1.8 3.99-3.18l1.38-.82C9.81 2.62 10.85 2 12 2s2.2.62 4.29 1.87l1.38.82c2.3 1.37 3.45 2.06 4 3.18s.35 2.45-.03 5.09l-.28 1.94c-.49 3.38-.73 5.08-1.9 6.09C18.27 22 16.55 22 13.1 22"
              fill="currentColor"
            />
            <path
              d="M17.45 12.2a7.3 7.3 0 0 0-10.9 0 .75.75 0 1 1-1.1-1.03 8.8 8.8 0 0 1 13.1 0 .75.75 0 1 1-1.1 1.02"
              fill="currentColor"
            />
            <path
              d="M15.45 14.35a4.62 4.62 0 0 0-6.9 0 .75.75 0 1 1-1.1-1.02c2.5-2.7 6.6-2.7 9.1 0a.75.75 0 0 1-1.1 1.02"
              fill="currentColor"
            />
            <path
              d="M13.45 16.51c-.8-.87-2.1-.87-2.9 0a.75.75 0 1 1-1.1-1.02 3.43 3.43 0 0 1 5.1 0 .75.75 0 0 1-1.1 1.02"
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
              d="M2.34 7.87c-.55 1.13-.36 2.45.02 5.09l.28 1.94c.49 3.38.73 5.08 1.9 6.09C5.73 22 7.45 22 10.9 22h2.22c3.44 0 5.17 0 6.34-1.01 1.18-1.01 1.42-2.7 1.9-6.1l.29-1.93c.38-2.64.57-3.96.02-5.09s-1.69-1.8-3.99-3.18l-1.38-.82C14.19 2.62 13.15 2 12 2s-2.2.62-4.29 1.87l-1.38.82c-2.3 1.37-3.45 2.06-4 3.18m11.11 8.64c-.8-.87-2.1-.87-2.9 0a.75.75 0 1 1-1.1-1.02 3.43 3.43 0 0 1 5.1 0 .75.75 0 0 1-1.1 1.02m-4.9-2.16a4.62 4.62 0 0 1 6.9 0 .75.75 0 1 0 1.1-1.02 6.1 6.1 0 0 0-9.1 0 .75.75 0 1 0 1.1 1.02m8.9-2.16a7.3 7.3 0 0 0-10.9 0 .75.75 0 1 1-1.1-1.02 8.8 8.8 0 0 1 13.1 0 .75.75 0 1 1-1.1 1.02"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHomeWiFiAngle;
