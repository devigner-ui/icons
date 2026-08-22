import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTestTubeMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconTestTubeMinimalistic(
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
              d="M21 9.85 14.18 3m.68.69 5.38 5.4L13 16.34l-3.51 3.53a3.8 3.8 0 0 1-5.38 0 3.83 3.83 0 0 1 0-5.4z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m6.8 11.78 1.27.15a2.2 2.2 0 0 1 1.95 1.95c.09.79.59 1.47 1.32 1.79l1.66.68"
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
              d="M3.19 15.05a4.1 4.1 0 0 0 0 5.76 4.04 4.04 0 0 0 5.73 0l3.75-3.76-1.78-.74a2.4 2.4 0 0 1-1.4-1.9 2.35 2.35 0 0 0-2.08-2.09h-1.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.36 2.23a.8.8 0 0 1 1.13 0l7.28 7.31a.8.8 0 1 1-1.14 1.13l-7.27-7.3a.8.8 0 0 1 0-1.14"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.09 4.1 3.19 15.05a4.1 4.1 0 0 0 0 5.76 4.04 4.04 0 0 0 5.73 0l10.9-10.95z"
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
              d="M14.87 2.22a.76.76 0 1 0-1.08 1.08l.7.7-6.95 6.97.69.08a3 3 0 0 1 2.64 2.65c.06.53.4.98.88 1.2l1.96.81 6.22-6.25.77.78a.76.76 0 1 0 1.08-1.08z"
              fill="currentColor"
            />
            <path
              d="m4.13 14.4 2.04-2.05 1.89.21c.68.08 1.22.62 1.3 1.3a3 3 0 0 0 1.79 2.43l1.4.59-2.98 2.99a3.84 3.84 0 0 1-5.44 0 3.9 3.9 0 0 1 0-5.47"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTestTubeMinimalistic;
