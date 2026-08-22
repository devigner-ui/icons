import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBoxSearch = forwardRef<SVGSVGElement, IconProps>(
  function IconBoxSearch(
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
              d="m3.84 7.44 8.83 5.11 8.77-5.08"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 21.61v-9.07"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.28 12.83V9.17c0-1.38-.99-3.06-2.2-3.73l-5.34-2.96a4.7 4.7 0 0 0-4.14 0L5.26 5.44a4.7 4.7 0 0 0-2.2 3.73v5.66c0 1.38 1 3.06 2.2 3.73l5.34 2.96c.57.32 1.32.48 2.07.48s1.5-.16 2.07-.48"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19.87 21.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m23.67 22-1-1"
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
              d="M20.77 6.94c0 .54-.29 1.03-.75 1.28l-1.74.94-1.48.79-3.07 1.66a2.2 2.2 0 0 1-2.12 0L5.32 8.22a1.5 1.5 0 0 1-.75-1.28c0-.54.29-1.03.75-1.28L7.29 4.6l1.57-.85 2.75-1.48a2.2 2.2 0 0 1 2.12 0l6.29 3.39c.46.25.75.74.75 1.28"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.57 12.79 4.72 9.86a1.43 1.43 0 0 0-2.08 1.28v5.53c0 .96.53 1.82 1.39 2.25l5.85 2.92a1.43 1.43 0 0 0 2.07-1.29v-5.53c.01-.94-.52-1.8-1.38-2.23"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.7 11.15v5.53a2.5 2.5 0 0 1-1.39 2.24l-5.85 2.93a1.4 1.4 0 0 1-1.4-.07 1.4 1.4 0 0 1-.68-1.22v-5.52c0-.96.53-1.82 1.39-2.25l2.15-1.07 1.5-.75 2.2-1.1a1.44 1.44 0 0 1 2.08 1.28"
              fill="currentColor"
            />
            <path
              d="m23.27 21.64-.76-.76q.61-.92.63-2.09a3.82 3.82 0 1 0-1.73 3.19l.76.76q.24.23.55.23a.78.78 0 0 0 .55-1.33"
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
              d="m18.27 5.31-5.65-3.04a2 2 0 0 0-1.9 0L5.06 5.31c-.4.23-.67.67-.67 1.15 0 .49.25.93.67 1.15l5.65 3.04a2 2 0 0 0 1.9 0l5.65-3.04a1.32 1.32 0 0 0 0-2.3"
              fill="currentColor"
            />
            <path
              d="M9.8 11.71 4.53 9.09a1.3 1.3 0 0 0-1.87 1.15v4.96c0 .86.48 1.63 1.25 2.02l5.25 2.62a1.3 1.3 0 0 0 1.26-.05c.38-.24.61-.65.61-1.1v-4.96a2.3 2.3 0 0 0-1.25-2.02"
              fill="currentColor"
            />
            <path
              d="M20.67 10.24v2.46q-.73-.2-1.5-.2a6 6 0 0 0-5.8 7.45q-.23-.03-.45-.17a1.3 1.3 0 0 1-.6-1.09v-4.96c0-.86.47-1.63 1.23-2.02l5.25-2.62a1.3 1.3 0 0 1 1.87 1.15"
              fill="currentColor"
            />
            <path
              d="m23.25 21.5-.84-.84a4.22 4.22 0 1 0-1.21 1.21l.84.84q.26.25.6.25t.6-.25a.85.85 0 0 0 .01-1.21"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBoxSearch;
