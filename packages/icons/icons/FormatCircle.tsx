import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFormatCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconFormatCircle(
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
              d="M22.17 5.35a2.85 2.85 0 1 1-5.09-1.76h.01a2.84 2.84 0 0 1 5.08 1.76"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.87 5.35a2.84 2.84 0 0 1-4.61 2.24 2.85 2.85 0 1 1 4.61-2.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.17 18.65a2.84 2.84 0 0 1-5.08 1.76h-.01a2.84 2.84 0 0 1 4-4v.01a2.8 2.8 0 0 1 1.09 2.23"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.87 18.65a2.84 2.84 0 1 1-4.61-2.23v-.01a2.84 2.84 0 0 1 4.61 2.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.17 12q-.02 2.41-1.09 4.41a2.84 2.84 0 0 0-4 4 9.4 9.4 0 0 1-8.82 0q.59-.74.61-1.76a2.84 2.84 0 0 0-4.61-2.24 9.4 9.4 0 0 1 0-8.82 2.84 2.84 0 0 0 4-4 9.4 9.4 0 0 1 8.82 0 2.84 2.84 0 0 0 4 4A9.4 9.4 0 0 1 22.17 12"
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
              d="m9.7 5.17-.04-.26-.04-.22-.12-.37a3.4 3.4 0 0 0-.96-1.42 3.53 3.53 0 1 0-3.18 6.05l.22.04.26.04.36.02a3.53 3.53 0 0 0 3.52-3.52z"
              fill="currentColor"
            />
            <path
              d="M21.77 16.14q-.15-.2-.37-.37l-.08-.07a4 4 0 0 0-.97-.53l-.33-.11-.52-.09-.36-.02a3.53 3.53 0 0 0-3.41 4.4l.11.33.03.09q.18.47.5.88l.07.08q.17.21.37.37a3.53 3.53 0 0 0 4.96-4.96"
              fill="currentColor"
            />
            <path
              d="m6.2 14.95-.36.02q-.26.03-.52.09l-.33.11-.09.03a4 4 0 0 0-.88.5l-.08.07q-.21.17-.37.37a3.53 3.53 0 1 0 2.63-1.19"
              fill="currentColor"
            />
            <path
              d="M19.14 2a3.5 3.5 0 0 0-2.7 1.27l-.07.08a4 4 0 0 0-.53.97l-.11.33a5 5 0 0 0-.11.88 3.53 3.53 0 0 0 3.52 3.52l.36-.02q.26-.03.52-.09l.33-.11.09-.03a3.5 3.5 0 0 0 2.23-3.27A3.53 3.53 0 0 0 19.14 2"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.44 20.73-.07-.08a4 4 0 0 1-.5-.88l.03.09a8.6 8.6 0 0 1-6.46 0l.03-.09a3.5 3.5 0 0 1-.93 1.33 10 10 0 0 0 8.27 0q-.2-.16-.37-.37M4.17 12c0-1.11.22-2.22.64-3.23l.04.01a4 4 0 0 1-.83-.48 3 3 0 0 1-.45-.43 10 10 0 0 0 0 8.27q.15-.2.37-.37l.08-.07a4 4 0 0 1 .79-.47A8 8 0 0 1 4.17 12m17.6-4.13q-.2.24-.45.43a4 4 0 0 1-.88.5l.09-.03a8.5 8.5 0 0 1 0 6.46l-.09-.03q.47.18.88.5l.08.07q.21.17.37.37.9-1.94.9-4.14a10 10 0 0 0-.9-4.13M12.67 2a10 10 0 0 0-4.13.9 3 3 0 0 1 .74.92l.17.36-.01-.04a8.6 8.6 0 0 1 6.46 0l-.03.09a3.5 3.5 0 0 1 .94-1.33 10 10 0 0 0-4.14-.9"
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
              d="M21.77 7.87a3.53 3.53 0 0 0-4.96-4.97 10 10 0 0 0-8.27 0 3.53 3.53 0 0 0-4.97 4.97 10 10 0 0 0 0 8.27 3.53 3.53 0 0 0 4.97 4.96 10 10 0 0 0 8.27 0 3.53 3.53 0 0 0 4.96-4.96q.9-1.94.9-4.14a10 10 0 0 0-.9-4.13m-1.42 7.3-.33-.11-.52-.09-.36-.02a3.53 3.53 0 0 0-3.27 4.82l.03.09a8.6 8.6 0 0 1-6.46 0l.03-.09.03-.09.11-.33a5 5 0 0 0 .11-.88 3.53 3.53 0 0 0-3.52-3.52l-.36.02q-.26.03-.52.09l-.33.11-.09.03-.09.03a8.5 8.5 0 0 1 0-6.46l.04.01.51.17.22.04.26.04.36.02a3.53 3.53 0 0 0 3.52-3.52l-.02-.36-.04-.26-.04-.22-.12-.37-.05-.14-.01-.04a8.6 8.6 0 0 1 6.46 0l-.03.09-.03.09-.11.33a5 5 0 0 0-.11.88 3.53 3.53 0 0 0 3.52 3.52l.36-.02q.26-.03.52-.09l.33-.11.09-.03.09-.03a8.5 8.5 0 0 1 0 6.46l-.09-.03z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFormatCircle;
