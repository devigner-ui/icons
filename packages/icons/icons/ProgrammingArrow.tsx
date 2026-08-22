import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProgrammingArrow = forwardRef<SVGSVGElement, IconProps>(
  function IconProgrammingArrow(
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19.67 16V6.5a2 2 0 0 0-2-2h-4.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.67 2-3 2.5 3 2.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.67 9v7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.92 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
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
              d="M6.42 16.11V7.9a3 3 0 0 0-.75-5.89 3 3 0 0 0-.75 5.89v8.21A3 3 0 0 0 5.67 22a3 3 0 0 0 .75-5.89"
              fill="currentColor"
            />
            <path
              d="M20.42 16.11V6.5a2.75 2.75 0 0 0-2.75-2.75h-2.93l1.41-1.17a.76.76 0 0 0 .1-1.06.76.76 0 0 0-1.06-.1l-3 2.5a.76.76 0 0 0 0 1.16l3 2.5q.22.17.48.17.34 0 .58-.27a.75.75 0 0 0-.1-1.06l-1.41-1.17h2.93c.69 0 1.25.56 1.25 1.25v9.61a3 3 0 0 0 .75 5.89 3 3 0 0 0 .75-5.89"
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
              d="M6.42 16.11V7.89a3 3 0 1 0-1.5 0v8.21a3 3 0 1 0 1.5.01"
              fill="currentColor"
            />
            <path
              d="M20.42 16.11V6.5a2.75 2.75 0 0 0-2.75-2.75h-2.93l1.41-1.17a.76.76 0 0 0 .1-1.06.76.76 0 0 0-1.06-.1l-3 2.5a.76.76 0 0 0 0 1.16l3 2.5q.22.17.48.17.34 0 .58-.27a.75.75 0 0 0-.1-1.06l-1.41-1.17h2.93c.69 0 1.25.56 1.25 1.25v9.61a3 3 0 1 0 1.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconProgrammingArrow;
