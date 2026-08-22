import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlaylistMinimalistic2 = forwardRef<SVGSVGElement, IconProps>(
  function IconPlaylistMinimalistic2(
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
              d="M15 6H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 10H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 14H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 18H3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M17 16.5V8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              cx="14.5"
              cy="16.5002"
              r="2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M21 12a4 4 0 0 1-4-4"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.75 6c0 .41-.34.75-.75.75H3a.75.75 0 1 1 0-1.5h12c.41 0 .75.34.75.75"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.75 10c0 .41-.34.75-.75.75H3a.75.75 0 1 1 0-1.5h10c.41 0 .75.34.75.75"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.75 14c0 .41-.34.75-.75.75H3a.75.75 0 1 1 0-1.5h6c.41 0 .75.34.75.75"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.75 18c0 .41-.34.75-.75.75H3a.75.75 0 1 1 0-1.5h5c.41 0 .75.34.75.75"
                fill="currentColor"
              />
            </g>
            <path
              d="M17 7.25c.41 0 .75.34.75.75 0 1.8 1.46 3.25 3.25 3.25a.75.75 0 0 1 0 1.5c-1.26 0-2.4-.49-3.25-1.29v5.04a3.25 3.25 0 1 1-1.5-2.74V8c0-.41.34-.75.75-.75"
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
              d="M15.75 6c0 .41-.34.75-.75.75H3a.75.75 0 1 1 0-1.5h12c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.75 10c0 .41-.34.75-.75.75H3a.75.75 0 1 1 0-1.5h10c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.75 14c0 .41-.34.75-.75.75H3a.75.75 0 1 1 0-1.5h6c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.75 18c0 .41-.34.75-.75.75H3a.75.75 0 1 1 0-1.5h5c.41 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="M17 7.25c.41 0 .75.34.75.75 0 1.8 1.46 3.25 3.25 3.25a.75.75 0 0 1 0 1.5c-1.26 0-2.4-.49-3.25-1.29v5.04a3.25 3.25 0 1 1-1.5-2.74V8c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlaylistMinimalistic2;
