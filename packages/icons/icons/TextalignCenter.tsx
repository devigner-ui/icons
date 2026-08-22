import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTextalignCenter = forwardRef<SVGSVGElement, IconProps>(
  function IconTextalignCenter(
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
              d="M3.67 4.5h18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.93 9.5h9.48"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.67 14.5h18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.93 19.5h9.48"
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
              d="M21.67 5.25h-18a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.41 10.25H7.93a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75"
              fill="currentColor"
            />
            <path
              d="M21.67 15.25h-18a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.41 20.25H7.93a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75"
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
              d="M21.67 5.25h-18a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.41 10.25H7.93a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75"
              fill="currentColor"
            />
            <path
              d="M21.67 15.25h-18a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.41 20.25H7.93a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTextalignCenter;
