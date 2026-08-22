import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStretchingRound = forwardRef<SVGSVGElement, IconProps>(
  function IconStretchingRound(
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
              cx="14.5"
              cy="4.50049"
              r="2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.95 13.44-.03-.03c-1.04-1-.23-2.62.67-3.27.91-.64 4.76-1.64 4.76 3.3A8.44 8.44 0 0 1 5 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M19 22v-3.95a2.9 2.9 0 0 0-3.37-2.84"
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
              d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5 14.46a3.65 3.65 0 0 1 4.25 3.59V22a.75.75 0 0 1-1.5 0v-3.95c0-1.3-1.18-2.32-2.5-2.1a.75.75 0 0 1-.24-1.49"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.36 10.35q.73 1.1.74 3.09A9.2 9.2 0 0 1 5 22.75a.75.75 0 0 1 0-1.5c4.25 0 7.6-3.5 7.6-7.81 0-1.15-.23-1.86-.5-2.29s-.61-.63-.98-.73q-.61-.13-1.24 0c-.42.1-.73.25-.85.34-.32.22-.65.65-.78 1.1q-.2.63.2 1.01l.02.03a.75.75 0 1 1-1.04 1.07l-.03-.02a2.4 2.4 0 0 1-.6-2.53c.24-.77.77-1.47 1.36-1.89.33-.23.84-.45 1.4-.57a4 4 0 0 1 1.94.01c.7.19 1.38.61 1.86 1.38"
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
              d="M17 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.36 10.35q.73 1.1.74 3.08A9.2 9.2 0 0 1 5 22.75a.75.75 0 0 1 0-1.5c4.25 0 7.6-3.5 7.6-7.82 0-1.14-.23-1.85-.5-2.28s-.61-.63-.98-.73q-.61-.13-1.24 0c-.42.1-.73.25-.85.33-.32.23-.65.66-.78 1.1q-.2.64.2 1.02l.02.03a.75.75 0 1 1-1.04 1.07l-.03-.02a2.4 2.4 0 0 1-.6-2.53c.24-.77.77-1.47 1.36-1.89.33-.23.84-.45 1.4-.57a4 4 0 0 1 1.94.01c.7.19 1.38.61 1.86 1.38m2.15 4.11a3.65 3.65 0 0 1 4.24 3.59V22a.75.75 0 0 1-1.5 0v-3.95c0-1.3-1.18-2.32-2.5-2.1a.75.75 0 0 1-.24-1.49"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStretchingRound;
