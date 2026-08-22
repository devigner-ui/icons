import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLetterUnread = forwardRef<SVGSVGElement, IconProps>(
  function IconLetterUnread(
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
              d="M22 10c.02.73 0 1.05 0 2 0 3.77 0 5.66-1.17 6.83S17.77 20 14 20h-4c-3.77 0-5.66 0-6.83-1.17S2 15.77 2 12s0-5.66 1.17-6.83S6.23 4 10 4h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m6 8 2.16 1.8C10 11.33 10.9 12.1 12 12.1s2-.77 3.84-2.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="19"
              cy="5.00024"
              r="3"
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
            <path d="M24 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path
              d="M17.23 7.46 15.7 8.74a27 27 0 0 1-2.34 1.84c-.59.37-.98.5-1.36.5s-.77-.13-1.36-.5A28 28 0 0 1 8.3 8.74L5.93 6.77a.83.83 0 0 0-1.06 1.26l2.42 2.02c.97.8 1.76 1.47 2.46 1.92.73.46 1.44.76 2.25.76s1.52-.3 2.25-.76c.7-.45 1.49-1.11 2.46-1.92l1.67-1.4a5 5 0 0 1-1.15-1.19"
              fill="currentColor"
            />
            <path
              d="M18.45 6.59a.82.82 0 0 1 .96.96 3 3 0 0 1-.96-.96"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.96 3.02Q15.76 3 14.2 3H9.8C5.65 3 3.58 3 2.29 4.32S1 7.76 1 12s0 6.36 1.29 7.68S5.65 21 9.8 21h4.4c4.15 0 6.22 0 7.51-1.32S23 16.24 23 12q0-1.6-.02-2.82-.9.46-1.98.47a4.55 4.55 0 0 1-4.5-4.6q0-1.1.46-2.03"
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
            <path d="M22 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 5h-4C6.23 5 4.34 5 3.17 6.17S2 9.23 2 13s0 5.66 1.17 6.83S6.23 21 10 21h4c3.77 0 5.66 0 6.83-1.17S22 16.77 22 13q.02-2.16-.07-3.59a4.5 4.5 0 0 1-4.3.88l-1.35 1.12c-.88.74-1.6 1.33-2.24 1.74-.66.43-1.3.7-2.04.7a3.7 3.7 0 0 1-2.04-.7c-.64-.4-1.36-1-2.24-1.74l-2.2-1.83a.75.75 0 1 1 .96-1.16l2.16 1.8c.93.78 1.58 1.32 2.13 1.67.53.34.88.46 1.23.46s.7-.12 1.23-.46c.55-.35 1.2-.89 2.13-1.67l.84-.7A4.5 4.5 0 0 1 14.61 5z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLetterUnread;
