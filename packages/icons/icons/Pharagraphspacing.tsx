import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPharagraphspacing = forwardRef<SVGSVGElement, IconProps>(
  function IconPharagraphspacing(
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
              d="M3.67 22h18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.67 2h18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M12.67 6v12"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.5 7.72-2.83-2.83-2.83 2.83"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m15.5 15.89-2.83 2.83-2.83-2.83"
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
              d="M21.67 22.75h-18a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.67 2.75h-18A.76.76 0 0 1 2.92 2c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="m14.97 15.36-1.55 1.55V6.7l1.55 1.55q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06L13.2 4.36a.77.77 0 0 0-1.06 0L9.31 7.19a.75.75 0 0 0 0 1.06c.3.29.77.29 1.06 0l1.55-1.55v10.21l-1.55-1.55a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l2.83 2.83a.75.75 0 0 0 1.06 0l2.83-2.83a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0"
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
              d="M21.67 22.75h-18a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M21.67 2.75h-18A.76.76 0 0 1 2.92 2c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="m14.97 15.36-1.55 1.55V6.7l1.55 1.55q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06L13.2 4.36a.77.77 0 0 0-1.06 0L9.31 7.19a.75.75 0 0 0 0 1.06c.3.29.77.29 1.06 0l1.55-1.55v10.21l-1.55-1.55a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l2.83 2.83a.75.75 0 0 0 1.06 0l2.83-2.83a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPharagraphspacing;
