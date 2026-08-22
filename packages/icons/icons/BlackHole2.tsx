import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBlackHole2 = forwardRef<SVGSVGElement, IconProps>(
  function IconBlackHole2(
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
              cx="12"
              cy="12"
              r="2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.14 10.36C13.7 6.82 21.91 15.61 16.52 21"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.86 13.64C10.3 17.18 2.09 8.39 7.48 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.36 13.86C6.82 10.3 15.61 2.09 21 7.48"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2 2"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.64 10.14C17.18 13.7 8.39 21.91 3 16.52"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="2 2"
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
              d="M6.17 3.38a.75.75 0 0 0 1.21.88q.27-.38.63-.73a.75.75 0 1 0-1.06-1.06q-.45.45-.78.91"
              fill="currentColor"
            />
            <path
              d="M5.83 8.64A.75.75 0 0 1 4.99 8q-.14-1.2.15-2.41a.75.75 0 0 1 1.45.36 5 5 0 0 0-.1 1.87.75.75 0 0 1-.66.83"
              fill="currentColor"
            />
            <path
              d="M6.84 12.27a.75.75 0 0 0 1.18-.92A8 8 0 0 1 7 9.67a.75.75 0 1 0-1.37.6q.49 1.09 1.2 2"
              fill="currentColor"
            />
            <path
              d="M11.3 14.92a.8.8 0 0 1-.64.11 7 7 0 0 1-2.16-1.1.75.75 0 0 1 .56-1.35 3 3 0 0 1 .34-2.08.8.8 0 0 1 .21-.67q.51-.5 1.13-.76.3-.13.6 0a3 3 0 0 1 1.36.01.8.8 0 0 1 .64-.11q1.14.33 2.16 1.1a.75.75 0 0 1-.56 1.35 3 3 0 0 1-.34 2.08.8.8 0 0 1-.21.67q-.51.5-1.13.76a.8.8 0 0 1-.6 0 3 3 0 0 1-1.36-.01"
              fill="currentColor"
            />
            <path
              d="M16.11 11.6c.33-.26.8-.2 1.05.13q.73.91 1.21 2a.75.75 0 0 1-1.37.6 8 8 0 0 0-1.02-1.68.75.75 0 0 1 .13-1.05"
              fill="currentColor"
            />
            <path
              d="M19 16.01a.75.75 0 1 0-1.48.18q.11.94-.11 1.87a.75.75 0 1 0 1.45.36q.3-1.21.15-2.4"
              fill="currentColor"
            />
            <path
              d="M17.66 19.57c.34.24.42.7.17 1.05a7 7 0 0 1-.78.91.75.75 0 1 1-1.06-1.06q.36-.36.63-.73a.75.75 0 0 1 1.04-.17"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M9.83 14.39a.75.75 0 1 0 1.06-1.06q-.3-.31-.44-.65a.75.75 0 1 0-1.38.58q.26.63.76 1.13"
                fill="currentColor"
              />
              <path
                d="M8.97 10.66a.75.75 0 0 0 1.44.4q.23-.81.87-1.65a.75.75 0 0 0-1.2-.9c-.5.66-.9 1.4-1.11 2.15"
                fill="currentColor"
              />
              <path
                d="M11.73 6.84a.75.75 0 0 0 .92 1.18A8 8 0 0 1 14.33 7a.75.75 0 0 0-.6-1.37 9 9 0 0 0-2 1.2"
                fill="currentColor"
              />
              <path
                d="M16.01 5a.75.75 0 1 0 .18 1.48 5 5 0 0 1 1.87.11.75.75 0 1 0 .36-1.45q-1.21-.3-2.4-.15"
                fill="currentColor"
              />
              <path
                d="M20.62 6.17a.75.75 0 1 0-.88 1.21q.38.27.73.63a.75.75 0 1 0 1.06-1.06q-.45-.45-.91-.78"
                fill="currentColor"
              />
              <path
                d="M14.17 9.61a.75.75 0 1 0-1.06 1.06q.3.31.44.65a.75.75 0 1 0 1.38-.58 4 4 0 0 0-.76-1.13"
                fill="currentColor"
              />
              <path
                d="M15.03 13.34a.75.75 0 1 0-1.44-.4q-.23.81-.87 1.65a.75.75 0 0 0 1.2.9c.5-.66.9-1.4 1.11-2.15"
                fill="currentColor"
              />
              <path
                d="M12.27 17.17a.75.75 0 0 0-.92-1.19A8 8 0 0 1 9.67 17a.75.75 0 1 0 .6 1.37q1.09-.49 2-1.2"
                fill="currentColor"
              />
              <path
                d="M7.99 19a.75.75 0 1 0-.18-1.48q-.94.11-1.87-.11a.75.75 0 1 0-.36 1.45q1.21.3 2.4.15"
                fill="currentColor"
              />
              <path
                d="M3.38 17.83a.75.75 0 1 0 .88-1.21 6 6 0 0 1-.73-.63.75.75 0 0 0-1.06 1.06q.45.45.91.78"
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
            <path
              d="M6.17 3.38a.75.75 0 0 0 1.21.88q.27-.38.63-.73a.75.75 0 0 0-1.06-1.06q-.45.45-.78.91"
              fill="currentColor"
            />
            <path
              d="M5.83 8.64A.75.75 0 0 1 4.99 8q-.14-1.2.15-2.41a.75.75 0 0 1 1.45.36 5 5 0 0 0-.1 1.87.75.75 0 0 1-.66.83"
              fill="currentColor"
            />
            <path
              d="M6.84 12.27a.75.75 0 0 0 1.18-.92A8 8 0 0 1 7 9.67a.75.75 0 1 0-1.37.6q.49 1.09 1.2 2"
              fill="currentColor"
            />
            <path
              d="M16.11 11.6c.33-.26.8-.2 1.05.13q.73.91 1.21 2a.75.75 0 1 1-1.37.6 8 8 0 0 0-1.02-1.68.75.75 0 0 1 .13-1.05"
              fill="currentColor"
            />
            <path
              d="M19 16.01a.75.75 0 0 0-1.48.18q.11.94-.11 1.87a.75.75 0 1 0 1.45.36q.3-1.21.15-2.4"
              fill="currentColor"
            />
            <path
              d="M17.66 19.57c.34.24.42.7.17 1.05q-.33.47-.78.91A.75.75 0 1 1 16 20.47q.36-.36.63-.73a.75.75 0 0 1 1.04-.17"
              fill="currentColor"
            />
            <path
              d="M11.6 7.89a.75.75 0 0 1 .13-1.05 9 9 0 0 1 2-1.21.75.75 0 0 1 .6 1.37 8 8 0 0 0-1.68 1.02c-.32.25-.8.2-1.05-.13"
              fill="currentColor"
            />
            <path
              d="M16.01 5a.75.75 0 0 0 .18 1.48 5 5 0 0 1 1.87.11.75.75 0 0 0 .36-1.45q-1.21-.3-2.4-.15"
              fill="currentColor"
            />
            <path
              d="M19.57 6.34a.75.75 0 0 1 1.05-.17q.47.33.91.78A.75.75 0 1 1 20.47 8a6 6 0 0 0-.73-.63.75.75 0 0 1-.17-1.04"
              fill="currentColor"
            />
            <path
              d="M12.4 16.11c.26.33.2.8-.13 1.05a9 9 0 0 1-2 1.21.75.75 0 1 1-.6-1.37 8 8 0 0 0 1.68-1.02c.32-.25.8-.2 1.05.13"
              fill="currentColor"
            />
            <path
              d="M7.99 19a.75.75 0 0 0-.18-1.48q-.94.11-1.87-.11a.75.75 0 1 0-.36 1.45q1.22.3 2.4.15"
              fill="currentColor"
            />
            <path
              d="M4.43 17.66a.75.75 0 0 1-1.05.17 7 7 0 0 1-.91-.78A.75.75 0 1 1 3.53 16q.36.36.73.63c.34.24.41.7.17 1.04"
              fill="currentColor"
            />
            <path
              d="M10.66 15.03q.35.09.64-.11a3 3 0 0 0 1.28.02.75.75 0 0 0 1.34.56c.5-.67.9-1.4 1.11-2.16a.8.8 0 0 0-.11-.64 3 3 0 0 0 .02-1.28.75.75 0 0 0 .56-1.34c-.67-.5-1.4-.9-2.16-1.11a.8.8 0 0 0-.64.11 3 3 0 0 0-1.28-.02.75.75 0 0 0-1.34-.56c-.5.67-.9 1.4-1.11 2.16a.8.8 0 0 0 .11.64 3 3 0 0 0-.02 1.28.75.75 0 0 0-.56 1.34c.67.5 1.4.9 2.16 1.11"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBlackHole2;
