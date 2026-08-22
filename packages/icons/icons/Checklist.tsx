import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconChecklist = forwardRef<SVGSVGElement, IconProps>(
  function IconChecklist(
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
              d="M2 5.5 3.21 7 7.5 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 12.5 3.21 14l4.29-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 19.5 3.21 21l4.29-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 19H12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 12H12"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M22 5H12"
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
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.05 2.49c.28.3.26.78-.04 1.06l-4.28 4a.75.75 0 0 1-1.1-.08l-1.21-1.5a.75.75 0 0 1 1.16-.94l.71.87L7 2.45a.75.75 0 0 1 1.06.04M11.25 5c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m-3.2 11.49c.28.3.26.78-.04 1.06l-4.28 4a.75.75 0 0 1-1.1-.08l-1.21-1.5a.75.75 0 1 1 1.16-.94l.71.87L7 16.45a.75.75 0 0 1 1.06.04m3.2 2.51c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.05 9.49c.28.3.26.78-.04 1.06l-4.28 4a.75.75 0 0 1-1.1-.08l-1.21-1.5a.75.75 0 1 1 1.16-.94l.71.87L7 9.45a.75.75 0 0 1 1.06.04"
                fill="currentColor"
              />
              <path
                d="M11.25 12c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.05 2.49c.28.3.26.78-.04 1.06l-4.28 4a.75.75 0 0 1-1.1-.08l-1.21-1.5a.75.75 0 0 1 1.16-.94l.71.87L7 2.45a.75.75 0 0 1 1.06.04M11.25 5c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m-3.2 4.49c.28.3.26.78-.04 1.06l-4.28 4a.75.75 0 0 1-1.1-.08l-1.21-1.5a.75.75 0 1 1 1.16-.94l.71.87L7 9.45a.75.75 0 0 1 1.06.04m3.2 2.51c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75m-3.2 4.49c.28.3.26.78-.04 1.06l-4.28 4a.75.75 0 0 1-1.1-.08l-1.21-1.5a.75.75 0 1 1 1.16-.94l.71.87L7 16.45a.75.75 0 0 1 1.06.04m3.2 2.51c0-.41.34-.75.75-.75h10a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconChecklist;
