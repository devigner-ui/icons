import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMagniferZoomOutMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconMagniferZoomOutMinimalistic(
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
              d="M9 11.5h5"
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
              d="M8.02 11.16c0-.4.33-.73.73-.73h4.82a.72.72 0 1 1 0 1.45H8.75a.7.7 0 0 1-.73-.72"
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
              fill="currentColor"
              d="M21.3 22a.7.7 0 0 1-.49-.2l-1.86-1.86a.7.7 0 0 1 0-1 .7.7 0 0 1 .99 0l1.86 1.87a.7.7 0 0 1 0 .99.7.7 0 0 1-.5.2M11.5 2a9.5 9.5 0 1 0 .02 19.02A9.5 9.5 0 0 0 11.5 2M14 12.45H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMagniferZoomOutMinimalistic;
