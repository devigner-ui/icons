import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBookSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconBookSquare(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19.05 15.27V7.58c0-.77-.62-1.33-1.38-1.27h-.04c-1.34.11-3.37.8-4.51 1.51l-.11.07a.7.7 0 0 1-.68 0l-.16-.1a12 12 0 0 0-4.5-1.49 1.26 1.26 0 0 0-1.38 1.27v7.7c0 .61.5 1.19 1.11 1.26l.18.03c1.38.18 3.52.89 4.74 1.56l.03.01c.17.1.45.1.61 0a16 16 0 0 1 4.76-1.57l.21-.03a1.3 1.3 0 0 0 1.12-1.26"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.67 8.1v9.56"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M12.17 8.09v9.16a.5.5 0 0 1-.69.46c-1.21-.52-2.79-1-3.89-1.14l-.19-.02a1.3 1.3 0 0 1-1.11-1.27v-7.7c0-.76.62-1.33 1.38-1.27 1.25.1 3.1.7 4.26 1.36.15.07.24.24.24.42"
              fill="currentColor"
            />
            <path
              d="M19.05 7.7v7.57c0 .62-.5 1.19-1.11 1.27l-.21.02a17 17 0 0 0-3.87 1.13.5.5 0 0 1-.69-.46V8.08a.5.5 0 0 1 .25-.44 12 12 0 0 1 4.2-1.34h.04a1.4 1.4 0 0 1 1.39 1.4"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-4.69 15.25a.5.5 0 0 1-.69.46c-1.21-.52-2.79-1-3.89-1.14l-.19-.02a1.3 1.3 0 0 1-1.11-1.27v-7.7c0-.77.62-1.34 1.38-1.28 1.25.1 3.1.7 4.26 1.36q.24.15.24.43zm6.88-1.98c0 .62-.5 1.19-1.11 1.27l-.21.02a17 17 0 0 0-3.87 1.13.5.5 0 0 1-.69-.46V8.08a.5.5 0 0 1 .25-.44 12 12 0 0 1 4.2-1.34h.04c.77 0 1.39.62 1.39 1.39z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBookSquare;
