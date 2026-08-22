import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSwapHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconSwapHorizontal(
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
                d="m17.95 10.45 3.72-3.72-3.72-3.72"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.67 6.73h18"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="m7.39 13.55-3.72 3.72 3.72 3.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.67 17.27h-18"
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
              d="M22.42 6.73q0-.31-.22-.53l-3.72-3.72a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l2.45 2.45H3.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h16.19l-2.44 2.44a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l3.71-3.71a1 1 0 0 0 .17-.26l.01-.03z"
              fill="currentColor"
            />
            <path
              d="M21.67 16.52H5.48l2.44-2.44a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-3.71 3.71a1 1 0 0 0-.17.26l-.01.03a.8.8 0 0 0 .17.79l3.72 3.72q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-2.45-2.45h16.2c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
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
              d="M22.42 6.73q0-.31-.22-.53l-3.72-3.72a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l2.45 2.45H3.67a.76.76 0 0 0-.75.75c0 .41.34.74.75.74h16.19l-2.44 2.44a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l3.71-3.71a1 1 0 0 0 .17-.26l.01-.03z"
              fill="currentColor"
            />
            <path
              d="M21.67 16.52H5.48l2.44-2.44a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-3.71 3.71a1 1 0 0 0-.17.26l-.01.03a.8.8 0 0 0 .17.79l3.72 3.72q.24.22.53.22t.53-.22a.75.75 0 0 0 0-1.06l-2.45-2.45h16.2c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSwapHorizontal;
