import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHierarchySquare = forwardRef<SVGSVGElement, IconProps>(
  function IconHierarchySquare(
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
                d="M17.12 14.4V8.5a1 1 0 0 0-1-1h-2.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m14.72 6-1.8 1.5 1.8 1.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.22 10.2v4.2"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.37 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.22 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.12 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.49C4.85 2 2.68 4.17 2.68 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M9.22 14.55v-4.29a2.2 2.2 0 0 0 1.45-2.06A2.2 2.2 0 0 0 8.47 6a2.2 2.2 0 0 0-2.2 2.2c0 .95.61 1.75 1.45 2.06v4.29a2.05 2.05 0 1 0 1.5 0"
              fill="currentColor"
            />
            <path
              d="M18.17 14.55v-5.8c0-.96-.79-1.75-1.75-1.75h-1.13l.21-.17a.76.76 0 0 0 .1-1.06.76.76 0 0 0-1.06-.1l-1.8 1.5a.76.76 0 0 0 0 1.16l1.8 1.5q.22.17.48.17.33 0 .58-.27a.75.75 0 0 0-.1-1.06l-.21-.17h1.13q.23.02.25.25v5.8a2.05 2.05 0 1 0 1.5 0"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-6.34 14.45a2.05 2.05 0 0 1-4.1 0c0-.87.54-1.6 1.3-1.9v-4.29A2.2 2.2 0 0 1 6.27 8.2c0-1.21.99-2.2 2.2-2.2s2.2.99 2.2 2.2a2.2 2.2 0 0 1-1.45 2.06v4.29c.76.3 1.3 1.04 1.3 1.9m6.9 2.05a2.05 2.05 0 0 1-2.05-2.05c0-.87.54-1.6 1.3-1.9v-5.8a.25.25 0 0 0-.25-.25h-1.13l.21.17c.32.27.36.74.1 1.06a.76.76 0 0 1-1.06.1l-1.8-1.5a.8.8 0 0 1-.27-.58q0-.34.27-.58l1.8-1.5a.76.76 0 0 1 1.06.1c.27.32.22.79-.1 1.06l-.21.17h1.13c.96 0 1.75.79 1.75 1.75v5.8a2.05 2.05 0 0 1-.75 3.95"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHierarchySquare;
