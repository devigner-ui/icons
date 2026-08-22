import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCursorSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconCursorSquare(
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
              d="m14.86 16.5-2.46-2.46-.75.75c-.77.77-1.16 1.15-1.57 1.06s-.6-.6-.98-1.62l-1.25-3.4c-.76-2.04-1.13-3.06-.6-3.59s1.54-.15 3.58.6l3.4 1.26c1.02.38 1.53.56 1.62.98s-.29.8-1.06 1.57l-.75.75 2.46 2.46c.25.25.38.38.44.52q.12.3 0 .6c-.06.14-.19.27-.44.52s-.38.38-.52.44a.8.8 0 0 1-.6 0 2 2 0 0 1-.52-.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12c0-4.71 0-7.07 1.46-8.54C4.93 2 7.3 2 12 2s7.07 0 8.54 1.46C22 4.93 22 7.3 22 12s0 7.07-1.46 8.54C19.07 22 16.7 22 12 22s-7.07 0-8.54-1.46C2 19.07 2 16.7 2 12"
              fill="currentColor"
            />
            <path
              d="m12.4 14.04 2.46 2.46c.25.25.38.38.52.44q.3.12.6 0c.14-.06.27-.19.52-.44s.38-.38.44-.52a.8.8 0 0 0 0-.6 2 2 0 0 0-.44-.52l-2.46-2.46.75-.75c.77-.77 1.15-1.16 1.06-1.57s-.6-.6-1.62-.98l-3.4-1.25c-2.04-.76-3.06-1.13-3.59-.6s-.15 1.54.6 3.58l1.26 3.4c.38 1.02.56 1.53.98 1.62s.8-.29 1.57-1.06z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.46 3.46C2 4.93 2 7.3 2 12s0 7.07 1.46 8.54C4.93 22 7.3 22 12 22s7.07 0 8.54-1.46C22 19.07 22 16.7 22 12s0-7.07-1.46-8.54C19.07 2 16.7 2 12 2S4.93 2 3.46 3.46m8.94 10.58 2.46 2.46c.25.25.38.38.52.44q.3.12.6 0c.14-.06.27-.19.52-.44s.38-.38.44-.52a.8.8 0 0 0 0-.6 2 2 0 0 0-.44-.52l-2.46-2.46.75-.75c.77-.77 1.15-1.16 1.06-1.57s-.6-.6-1.62-.98l-3.4-1.25c-2.04-.76-3.06-1.13-3.59-.6s-.15 1.54.6 3.58l1.26 3.4c.38 1.02.56 1.53.98 1.62s.8-.29 1.57-1.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCursorSquare;
