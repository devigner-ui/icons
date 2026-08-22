import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconArrangeHorizontalCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconArrangeHorizontalCircle(
    { className, variant = "Outline", strokeWidth = "1.5", ...rest },
    ref,
  ) {
    const fill = variant === "Bold" || variant === "Bulk";
    const duotone = variant === "TwoTone" || variant === "Bulk";

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
                d="m17.82 13.82-3.04 3.04"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.52 13.82h10.3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m7.52 10.18 3.04-3.04"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.82 10.18H7.52"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M18.52 13.53a.8.8 0 0 0-.7-.47H7.51a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h8.5l-1.76 1.76a.75.75 0 0 0 0 1.06q.24.22.53.22t.53-.22l3.04-3.04a.8.8 0 0 0 .17-.81"
              fill="currentColor"
            />
            <path
              d="M17.82 9.43h-8.5l1.76-1.76a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L6.98 9.65a1 1 0 0 0-.16.24.7.7 0 0 0 0 .57.8.8 0 0 0 .7.47h10.31c.41 0 .75-.34.75-.75a.76.76 0 0 0-.76-.75"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m5.85 12.1a1 1 0 0 1-.16.24l-3.04 3.04a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.76-1.76h-8.5a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10.31q.15 0 .29.06.28.12.41.41.1.28-.01.57m-.7-3.17H7.52q-.15 0-.29-.06a.8.8 0 0 1-.41-.41.7.7 0 0 1 0-.57 1 1 0 0 1 .16-.24l3.04-3.04a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06L9.33 9.43h8.5c.41 0 .75.34.75.75s-.34.75-.76.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconArrangeHorizontalCircle;
