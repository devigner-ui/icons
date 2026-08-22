import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRulerPen2 = forwardRef<SVGSVGElement, IconProps>(
  function IconRulerPen2(
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
              d="M22.14 19V5q0-3-3-3h-4q-3 0-3 3v14q0 3 3 3h4q3 0 3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.14 6h5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.14 18h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m12.14 13.95 5 .05"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.14 10h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M6.16 2A2.96 2.96 0 0 0 3.2 4.95v12.96c0 .45.19 1.13.42 1.52l.82 1.36c.94 1.57 2.49 1.57 3.43 0l.82-1.36c.23-.39.42-1.07.42-1.52V4.95A2.96 2.96 0 0 0 6.16 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.11 7H3.2"
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
              d="M22.14 5v14a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3"
              fill="currentColor"
            />
            <path
              d="M17.89 6c0 .41-.34.75-.75.75h-5v-1.5h5c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M16.79 18c0 .41-.33.75-.75.75h-3.9v-1.5h3.9c.42 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M17.89 14.01a.75.75 0 0 1-.75.74h-.01l-4.99-.05v-1.5l5 .05c.42 0 .75.34.75.76"
              fill="currentColor"
            />
            <path
              d="M15.7 10c0 .41-.34.75-.75.75h-2.81v-1.5h2.81c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.11 4.95v12.96a3.5 3.5 0 0 1-.42 1.52l-.82 1.36c-.94 1.58-2.48 1.58-3.43 0l-.81-1.36a3.4 3.4 0 0 1-.43-1.52V4.95a2.96 2.96 0 0 1 5.91 0"
              fill="currentColor"
            />
            <path d="M9.11 6.25H3.2v1.5h5.91z" fill="currentColor" />
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
              d="M19.14 2h-4c-1.5 0-2.73 1.29-2.96 2.75-.04.27.18.5.46.5h4.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5a.5.5 0 0 0-.5.5v1.5c0 .28.22.5.5.5h2.31c.41 0 .75.34.75.75s-.34.75-.75.75h-2.31a.5.5 0 0 0-.5.5v1.46c0 .27.22.5.5.5l4.5.04a.75.75 0 0 1 0 1.5h-.01l-4.49-.04a.5.5 0 0 0-.5.5v1.54c0 .28.22.5.5.5h3.4a.75.75 0 1 1 0 1.5h-3.4c-.28 0-.5.23-.46.5.23 1.46 1.47 2.75 2.96 2.75h4a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"
              fill="currentColor"
            />
            <path
              d="M9.11 4.95v.8a.5.5 0 0 1-.5.5H3.7a.5.5 0 0 1-.5-.5v-.8a2.96 2.96 0 0 1 5.91 0"
              fill="currentColor"
            />
            <path
              d="M3.2 17.91c0 .45.19 1.14.43 1.52l.81 1.36c.95 1.58 2.49 1.58 3.43 0l.82-1.36a3.5 3.5 0 0 0 .42-1.52V8.25a.5.5 0 0 0-.5-.5H3.7a.5.5 0 0 0-.5.5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRulerPen2;
