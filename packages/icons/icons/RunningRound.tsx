import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRunningRound = forwardRef<SVGSVGElement, IconProps>(
  function IconRunningRound(
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
            <circle
              cx="18.5"
              cy="4.50049"
              r="2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14.4 22v-.96a7 7 0 0 0-2.91-5.61 2 2 0 0 1-.07-3.09l1.04-.94a2.96 2.96 0 0 0-3.18-4.9l-.53.23a13 13 0 0 0-3.31 1.89L4 9.63"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m9 17-.26.31A7.5 7.5 0 0 1 3 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16 12a8 8 0 0 0 4 0"
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
              d="M21 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.97 5.81a3.71 3.71 0 0 1 4 6.14l-1.04.95-.06.05a1.25 1.25 0 0 0 .15 1.94l.13.1a7.8 7.8 0 0 1 3 6.04V22a.75.75 0 0 1-1.5 0v-.95a6.3 6.3 0 0 0-2.54-4.96l-.09-.07a2.75 2.75 0 0 1-.1-4.23l1.04-.95a2.21 2.21 0 0 0-2.38-3.66l-.52.23a12 12 0 0 0-3.18 1.81l-1.44 1.03a.75.75 0 1 1-.87-1.22l1.45-1.04L6 7.3q.64-.42 1.35-.77l1.08-.5z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M15.27 11.82c.1-.4.51-.65.91-.55q1.82.45 3.64 0a.75.75 0 1 1 .36 1.46 9 9 0 0 1-4.36 0 .75.75 0 0 1-.55-.91"
                fill="currentColor"
              />
              <path
                d="M9.48 16.42c.32.27.36.74.1 1.06l-.26.31A8.2 8.2 0 0 1 3 20.75a.75.75 0 0 1 0-1.5c2 0 3.89-.89 5.16-2.42l.26-.3a.75.75 0 0 1 1.06-.1"
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
              d="M21 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.97 5.81a3.71 3.71 0 0 1 4 6.14l-1.04.95-.06.05a1.25 1.25 0 0 0 .15 1.94l.12.1a7.8 7.8 0 0 1 3.01 6.2V22a.75.75 0 0 1-1.5 0v-.95a6.3 6.3 0 0 0-2.54-4.96l-.09-.07a2.75 2.75 0 0 1-.1-4.23l1.04-.95a2.21 2.21 0 0 0-2.38-3.66l-.52.23a12 12 0 0 0-3.18 1.81l-1.44 1.03a.75.75 0 1 1-.88-1.22l1.46-1.04L6 7.3q.65-.42 1.35-.77l1.08-.5zm6.3 6c.1-.4.51-.64.91-.54q1.82.45 3.64 0a.75.75 0 1 1 .36 1.46 9 9 0 0 1-4.36 0 .75.75 0 0 1-.55-.91m-5.79 4.61c.32.27.36.74.1 1.06l-.26.31A8.2 8.2 0 0 1 3 20.75a.75.75 0 0 1 0-1.5c2 0 3.89-.89 5.16-2.42l.26-.31a.75.75 0 0 1 1.06-.1"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRunningRound;
