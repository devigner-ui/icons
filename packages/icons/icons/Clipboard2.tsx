import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconClipboard2 = forwardRef<SVGSVGElement, IconProps>(
  function IconClipboard2(
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
              d="M19.3 7.15q.05.92-.13 2.07l-.73 4.69c-.62 3.91-2.43 5.23-6.34 4.62l-4.69-.74a7 7 0 0 1-3.15-1.11c-1.45-1.01-1.87-2.67-1.47-5.23l.74-4.69c.62-3.91 2.43-5.23 6.34-4.62l4.69.74c3.14.49 4.61 1.77 4.74 4.27"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m21.17 13.47-1.5 4.51c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5c-2.27-.75-3.53-1.79-3.89-3.31q1.13.8 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69q.19-1.15.13-2.07c2.39 1.27 2.91 3.19 1.87 6.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.91 8.98a1.74 1.74 0 1 0 0-3.48 1.74 1.74 0 0 0 0 3.48"
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
              d="m14.56 2.88-4.69-.74c-3.91-.61-5.72.71-6.34 4.62l-.74 4.69c-.4 2.56.02 4.22 1.47 5.23q1.13.8 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69q.19-1.15.13-2.07c-.13-2.5-1.6-3.78-4.74-4.27M8.91 9.35a2.12 2.12 0 1 1 0-4.23 2.12 2.12 0 0 1 0 4.23"
              fill="currentColor"
            />
            <path
              d="m21.17 13.47-1.5 4.51c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5c-2.27-.75-3.53-1.79-3.89-3.31q1.13.8 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69q.19-1.15.13-2.07c2.39 1.27 2.91 3.19 1.87 6.32"
              fill="currentColor"
            />
            <path
              d="M11.02 7.24a2.12 2.12 0 1 1-4.23-.01 2.12 2.12 0 0 1 4.23.01"
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
              d="m14.56 2.88-4.69-.74c-3.91-.61-5.72.71-6.34 4.62l-.74 4.69c-.4 2.56.02 4.22 1.47 5.23q1.13.8 3.15 1.11l4.69.74c3.91.61 5.72-.71 6.34-4.62l.73-4.69q.19-1.15.13-2.07c-.13-2.5-1.6-3.78-4.74-4.27M8.91 9.35a2.12 2.12 0 1 1 0-4.23 2.12 2.12 0 0 1 0 4.23"
              fill="currentColor"
            />
            <path
              d="m21.17 13.47-1.5 4.51c-1.25 3.76-3.25 4.76-7.01 3.51l-4.51-1.5a7 7 0 0 1-3.09-1.78q.95.38 2.19.57l4.7.74q.96.15 1.8.15c3.3 0 5.07-1.78 5.68-5.61l.73-4.69q.14-.86.14-1.56c1.52 1.25 1.74 3.03.87 5.66"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconClipboard2;
