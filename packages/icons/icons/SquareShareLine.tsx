import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSquareShareLine = forwardRef<SVGSVGElement, IconProps>(
  function IconSquareShareLine(
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
              d="M22 14c-.03 3.41-.22 5.3-1.46 6.54C19.08 22 16.72 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12c0-4.72 0-7.08 1.46-8.54C4.71 2.22 6.6 2.03 10 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M22 7h-8a4.6 4.6 0 0 0-3.5 1.5l-.2.18C9.9 9.08 9 10.18 9 12v3m13-8-5-5m5 5-5 5"
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
              d="M3.46 3.46C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.47 1.47c.3-.3.77-.3 1.06 0l5 5c.3.3.3.77 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14a4 4 0 0 0-2.79 1.08l-.19.2-.2.18A4 4 0 0 0 9.76 12v3a.75.75 0 1 1-1.5 0v-3a5.4 5.4 0 0 1 1.52-3.85l.19-.19.19-.19c.5-.5 1.77-1.52 3.85-1.52h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06"
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
              d="M3.46 3.46C4.93 2 7.3 2 12 2q1.53 0 2.75.02c0 .57.22 1.14.66 1.57l1.16 1.16H14a7 7 0 0 0-4.91 1.96l-.19.19-.19.19A7 7 0 0 0 6.75 12v3a2.25 2.25 0 1 0 4.5 0v-3c0-1.02.49-1.58.64-1.72l.19-.2.2-.2c.14-.14.7-.63 1.72-.63h2.57l-1.16 1.16a2.25 2.25 0 1 0 3.18 3.18l3.4-3.4L22 12c0 4.71 0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12s0-7.07 1.46-8.54"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.47 1.47c.3-.3.77-.3 1.06 0l5 5c.3.3.3.77 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H14a4 4 0 0 0-2.79 1.08l-.19.2-.2.18A4 4 0 0 0 9.76 12v3a.75.75 0 1 1-1.5 0v-3a5.4 5.4 0 0 1 1.52-3.85l.19-.19.19-.19c.5-.5 1.77-1.52 3.85-1.52h6.19l-3.72-3.72a.75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSquareShareLine;
