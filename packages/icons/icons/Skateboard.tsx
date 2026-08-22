import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSkateboard = forwardRef<SVGSVGElement, IconProps>(
  function IconSkateboard(
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
              d="m2 7 .81 1.22A4 4 0 0 0 6.14 10h11.72a4 4 0 0 0 3.33-1.78L22 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="7"
              cy="15.0005"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              cx="17"
              cy="15.0005"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
            <path d="M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path d="M19 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.58 6.38a.75.75 0 0 1 1.04.2l.82 1.22c.6.9 1.61 1.45 2.7 1.45h11.72c1.09 0 2.1-.54 2.7-1.45l.82-1.22a.75.75 0 0 1 1.24.84l-.8 1.22a4.8 4.8 0 0 1-3.96 2.11H6.14c-1.59 0-3.07-.8-3.95-2.11l-.81-1.22a.75.75 0 0 1 .2-1.04"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.58 6.38a.75.75 0 0 1 1.04.2l.82 1.22c.6.9 1.61 1.45 2.7 1.45h11.72c1.09 0 2.1-.54 2.7-1.45l.82-1.22a.75.75 0 0 1 1.24.84l-.8 1.22a4.8 4.8 0 0 1-3.96 2.11H6.14c-1.59 0-3.07-.8-3.95-2.11l-.81-1.22a.75.75 0 0 1 .2-1.04"
              fill="currentColor"
            />
            <path d="M9 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path d="M19 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
          </svg>
        )}
      </>
    );
  },
);

export default IconSkateboard;
