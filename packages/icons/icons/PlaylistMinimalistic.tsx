import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlaylistMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconPlaylistMinimalistic(
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
              d="M20 6H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 16H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 11H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M19.13 10.69c1.64.94 2.46 1.42 2.72 2.04a2 2 0 0 1 0 1.54c-.26.62-1.08 1.1-2.73 2.04-1.64.95-2.46 1.43-3.13 1.34a2 2 0 0 1-1.33-.77c-.41-.54-.41-1.48-.41-3.38s0-2.84.41-3.38A2 2 0 0 1 16 9.35c.67-.09 1.5.39 3.14 1.34"
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
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.25 6c0-.41.34-.75.75-.75h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
                fill="currentColor"
              />
            </g>
            <path
              d="M19.13 10.69c1.64.94 2.46 1.42 2.72 2.04a2 2 0 0 1 0 1.54c-.26.62-1.08 1.1-2.73 2.04-1.64.95-2.46 1.43-3.13 1.34a2 2 0 0 1-1.33-.77c-.41-.54-.41-1.48-.41-3.38s0-2.84.41-3.38A2 2 0 0 1 16 9.35c.67-.09 1.5.39 3.14 1.34"
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
              d="M2.25 6c0-.41.34-.75.75-.75h17a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M19.13 10.69c1.64.94 2.46 1.42 2.72 2.04a2 2 0 0 1 0 1.54c-.26.62-1.08 1.1-2.73 2.04-1.64.95-2.46 1.43-3.13 1.34a2 2 0 0 1-1.33-.77c-.41-.54-.41-1.48-.41-3.38s0-2.84.41-3.38A2 2 0 0 1 16 9.35c.67-.09 1.5.39 3.14 1.34"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlaylistMinimalistic;
