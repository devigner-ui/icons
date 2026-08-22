import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCardRecive = forwardRef<SVGSVGElement, IconProps>(
  function IconCardRecive(
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
              d="M19 14v6m0 0 2-2m-2 2-2-2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12c0-3.77 0-5.66-1.17-6.83S17.77 4 14 4h-4C6.23 4 4.34 4 3.17 5.17S2 8.23 2 12s0 5.66 1.17 6.83S6.23 20 10 20h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 16H6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 16h-.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 10h20"
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
              d="M10 20h5.81l-.4-.4a2.25 2.25 0 0 1 1.34-3.84V14a2.25 2.25 0 1 1 4.5 0v1.76q.33.04.65.18c.1-1.02.1-2.3.1-3.94v-2H2v2c0 3.77 0 5.66 1.17 6.83S6.23 20 10 20"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.47 20.53c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V14a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06z"
              fill="currentColor"
            />
            <path
              d="M12.5 15.25a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M6 15.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M10 4h4c3.79 0 5.68 0 6.85 1.12.85.8 1.08 1.96 1.15 3.88v1H2V9c.07-1.92.3-3.08 1.15-3.88C4.32 4 6.2 4 9.99 4"
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
              d="M18.47 20.53c.3.3.77.3 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V14a.75.75 0 0 0-1.5 0v4.19l-.72-.72a.75.75 0 1 0-1.06 1.06z"
              fill="currentColor"
            />
            <path
              d="M10 4h4c3.77 0 5.66 0 6.83 1.17.84.85 1.08 2.06 1.14 4.08H2.03c.06-2.02.3-3.23 1.14-4.08C4.34 4 6.23 4 10 4"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20h5.81l-.4-.4a2.25 2.25 0 0 1 1.34-3.84V14a2.25 2.25 0 1 1 4.5 0v1.76q.33.04.65.18c.1-1.02.1-2.3.1-3.94v-1.25H2V12c0 3.77 0 5.66 1.17 6.83S6.23 20 10 20m-4-4.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zm6.5 0a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCardRecive;
