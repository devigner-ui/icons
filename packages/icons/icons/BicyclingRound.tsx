import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBicyclingRound = forwardRef<SVGSVGElement, IconProps>(
  function IconBicyclingRound(
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
              cx="14"
              cy="4.00049"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="6"
              cy="18.0005"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="18"
              cy="18.0005"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18.5 10h-3.92q-.57 0-1.04-.36L11.4 7.92a2.64 2.64 0 1 0-2.7 4.48l3.09 1.35a1.9 1.9 0 0 1 .98 2.48L12 18"
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
            <path d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.92 8.5a1.89 1.89 0 1 0-1.93 3.21l3.09 1.35a2.64 2.64 0 0 1 1.37 3.46l-.76 1.78a.75.75 0 1 1-1.38-.6l.76-1.77a1.14 1.14 0 0 0-.6-1.5L8.4 13.1a3.39 3.39 0 1 1 3.46-5.76l2.16 1.72q.25.2.57.2h3.92a.75.75 0 0 1 0 1.5h-3.92c-.54 0-1.08-.18-1.5-.53z"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 14.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
                fill="currentColor"
              />
            </g>
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
            <path d="M16 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0" fill="currentColor" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.92 8.5a1.89 1.89 0 1 0-1.93 3.21l3.09 1.35a2.64 2.64 0 0 1 1.37 3.46l-.76 1.78a.75.75 0 1 1-1.38-.6l.76-1.77a1.14 1.14 0 0 0-.6-1.5L8.4 13.1a3.39 3.39 0 1 1 3.46-5.76l2.16 1.72q.25.2.57.2h3.92a.75.75 0 0 1 0 1.5h-3.92c-.54 0-1.07-.18-1.5-.53zM6 15.76a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M2.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0M18 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M14.25 18a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBicyclingRound;
