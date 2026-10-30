import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlaylistPlayCompact = forwardRef<SVGSVGElement, IconProps>(
  function IconPlaylistPlayCompact(
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
        {variant === "Broken" ? (
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
            d="M19.5 6.2h-17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 16.2h-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 11.2h-7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.77 11.91c.04-.77.14-1.26.39-1.59.33-.43.81-.7 1.34-.77.67-.09 1.5.39 3.14 1.34 1.63.94 2.45 1.42 2.71 2.04.21.49.21 1.05 0 1.54-.26.62-1.08 1.1-2.73 2.04-1.64.95-2.46 1.43-3.13 1.34a2 2 0 0 1-1.33-.77c-.26-.34-.36-.85-.39-1.67"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>
        ) : !fill ? (
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
              d="M19.5 6.2h-17"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.5 16.2h-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.5 11.2h-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M18.63 10.89c1.64.94 2.46 1.42 2.72 2.04a2 2 0 0 1 0 1.54c-.26.62-1.08 1.1-2.73 2.04-1.64.95-2.46 1.43-3.13 1.34a2 2 0 0 1-1.33-.77c-.41-.54-.41-1.48-.41-3.38s0-2.84.41-3.38a2 2 0 0 1 1.34-.77c.67-.09 1.5.39 3.14 1.34"
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
                d="M2.25 6.55c0-.41.34-.75.75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
                fill="currentColor"
              />
            </g>
            <path
              d="M19.13 11.24c1.64.94 2.46 1.42 2.72 2.04a2 2 0 0 1 0 1.54c-.26.62-1.08 1.1-2.73 2.04-1.64.95-2.46 1.43-3.13 1.34a2 2 0 0 1-1.33-.77c-.41-.54-.41-1.48-.41-3.38s0-2.84.41-3.38A2 2 0 0 1 16 9.9c.67-.09 1.5.39 3.14 1.34"
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
              d="M2.25 6.55c0-.41.34-.75.75-.75h17a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M19.13 11.24c1.64.94 2.46 1.42 2.72 2.04a2 2 0 0 1 0 1.54c-.26.62-1.08 1.1-2.73 2.04-1.64.95-2.46 1.43-3.13 1.34a2 2 0 0 1-1.33-.77c-.41-.54-.41-1.48-.41-3.38s0-2.84.41-3.38A2 2 0 0 1 16 9.9c.67-.09 1.5.39 3.14 1.34"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlaylistPlayCompact;
