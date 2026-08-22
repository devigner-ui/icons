import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBodyShapeMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconBodyShapeMinimalistic(
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
              d="M20 2s-2 4.69-2 8.57a6.7 6.7 0 0 0 1 3.32c.66 1.2 1.52 2.38 2.15 3.86.5 1.18.85 2.55.85 4.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 2s2 4.69 2 8.57a6.7 6.7 0 0 1-1 3.32c-.66 1.2-1.52 2.38-2.15 3.86A11 11 0 0 0 2 22"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 13h12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 22c.5-1.5 3-4.5 9-4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 22c-.5-1.5-3-4.5-9-4.5"
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
              d="M3.7 1.31c.39-.16.83.02.99.4v.01l.03.05.3.76c.19.51.44 1.24.7 2.08a22 22 0 0 1 1.03 5.96q-.01.9-.23 1.68h10.96a6 6 0 0 1-.23-1.68c0-2.05.52-4.27 1.03-5.96a34 34 0 0 1 1-2.84l.02-.05V1.7h.01a.75.75 0 0 1 1.38.58v.01l-.02.04-.28.72q-.29.75-.67 1.99c-.5 1.63-.97 3.69-.97 5.52 0 1.06.36 1.97.9 2.96l.65 1.09c.51.84 1.1 1.8 1.54 2.84.53 1.26.91 2.72.91 4.54a.75.75 0 0 1-1.5 0c0-1.49-.29-2.7-.7-3.74-5.4.14-7.47 2.87-7.84 3.98a.75.75 0 0 1-1.42 0c-.37-1.11-2.44-3.84-7.83-3.98A10 10 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.82.38-3.28.91-4.54.45-1.04 1.03-2 1.54-2.84q.36-.58.64-1.1c.55-.98.91-1.89.91-2.95 0-1.83-.48-3.89-.97-5.52a32 32 0 0 0-.95-2.7l-.02-.05a.75.75 0 0 1 .4-.99"
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
              d="M3.7 1.31c.39-.16.83.02.99.4v.01l.03.05.3.76c.19.51.44 1.24.7 2.08a22 22 0 0 1 1.03 5.96q-.01.9-.23 1.68h10.96a6 6 0 0 1-.23-1.68c0-2.05.52-4.27 1.03-5.96a34 34 0 0 1 1-2.84l.02-.05V1.7h.01a.75.75 0 0 1 1.38.58v.01l-.02.04-.28.72q-.29.75-.67 1.99c-.5 1.63-.97 3.69-.97 5.52 0 1.06.36 1.97.9 2.96l.65 1.09c.51.84 1.1 1.8 1.54 2.84.53 1.26.91 2.72.91 4.54a.75.75 0 0 1-1.5 0c0-1.49-.29-2.7-.7-3.74-5.4.14-7.47 2.87-7.84 3.98a.75.75 0 0 1-1.42 0c-.37-1.11-2.44-3.84-7.83-3.98A10 10 0 0 0 2.75 22a.75.75 0 0 1-1.5 0c0-1.82.38-3.28.91-4.54.45-1.04 1.03-2 1.54-2.84q.36-.58.64-1.1c.55-.98.91-1.89.91-2.95 0-1.83-.48-3.89-.97-5.52a32 32 0 0 0-.95-2.7l-.02-.05a.75.75 0 0 1 .4-.99"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBodyShapeMinimalistic;
