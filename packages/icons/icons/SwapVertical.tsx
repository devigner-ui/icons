import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSwapVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconSwapVertical(
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
                d="M11.12 6.72 7.4 3 3.68 6.72"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.4 21V3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M14.22 17.28 17.94 21l3.72-3.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.94 3v18"
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
              d="M11.65 6.19 7.94 2.48a1 1 0 0 0-.26-.17l-.03-.01a.8.8 0 0 0-.79.17L3.14 6.19a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0L6.65 4.8V21c0 .41.34.75.75.75s.75-.34.75-.75V4.81l2.44 2.44q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.2 16.75a.75.75 0 0 0-1.06 0l-2.45 2.45V3a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v16.19l-2.44-2.44a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l3.71 3.71q.1.1.26.17l.03.01q.12.05.26.05.31 0 .53-.22l3.72-3.72a.75.75 0 0 0 0-1.06"
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
              d="M11.65 6.19 7.94 2.48a1 1 0 0 0-.26-.17l-.03-.01-.25-.05q-.31 0-.53.22L3.14 6.19a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0L6.65 4.8V21c0 .41.34.75.75.75s.75-.34.75-.75V4.81l2.44 2.44q.23.22.53.22t.53-.22a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
            <path
              d="M22.2 16.75a.75.75 0 0 0-1.06 0l-2.45 2.45V3a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v16.19l-2.44-2.44a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l3.71 3.71q.1.1.26.17l.03.01q.12.05.26.05.31 0 .53-.22l3.72-3.72a.75.75 0 0 0 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSwapVertical;
