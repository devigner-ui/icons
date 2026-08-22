import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagniferZoomInMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconMagniferZoomInMinimalistic(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="11.5"
              cy="11.5005"
              r="9.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9 11.5h2.5m0 0H14m-2.5 0V14m0-2.5V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m20 20 2 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M11.16 20.31a9.16 9.16 0 1 0 0-18.31 9.16 9.16 0 0 0 0 18.31"
                fill="currentColor"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.16 8.02c.4 0 .72.33.72.73v1.68h1.69a.72.72 0 0 1 0 1.45h-1.7v1.69a.72.72 0 1 1-1.44 0v-1.69H8.75a.72.72 0 1 1 0-1.45h1.68V8.75c0-.4.33-.73.73-.73"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.84 18.84a.7.7 0 0 1 1.02 0l1.93 1.93a.72.72 0 0 1-1.02 1.02l-1.93-1.93a.7.7 0 0 1 0-1.02"
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
              d="M11.16 20.31a9.16 9.16 0 1 0 0-18.31 9.16 9.16 0 0 0 0 18.31m8.7-1.47a.72.72 0 0 0-1.02 1.02l1.93 1.93a.72.72 0 0 0 1.02-1.02zm-7.98-8.4v-1.7c0-.6-.48-.73-.72-.72-.4 0-.73.33-.73.73v1.68H8.75a.72.72 0 0 0 0 1.45h1.68v1.69a.72.72 0 1 0 1.45 0v-1.69h1.69a.72.72 0 0 0 0-1.45z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagniferZoomInMinimalistic;
