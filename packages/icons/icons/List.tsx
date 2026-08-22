import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconList = forwardRef<SVGSVGElement, IconProps>(function IconList(
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
            d="M4 17h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 12h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M4 7h7"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M17 4v16m0-16-3 4m3-4 3 4m-3 12 3-4m-3 4-3-4"
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 3.25q.38 0 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 0 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 0 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4q.23-.3.6-.3"
            fill="currentColor"
          />
          <g opacity={duotone ? "0.4" : "1"}>
            <path
              d="M3.25 7c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7"
              fill="currentColor"
            />
            <path
              d="M3.25 12c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M3.25 17c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
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
            d="M17 3.25q.38 0 .6.3l3 4a.75.75 0 1 1-1.2.9l-1.65-2.2v11.5l1.65-2.2a.75.75 0 0 1 1.2.9l-3 4a.75.75 0 0 1-1.2 0l-3-4a.75.75 0 0 1 1.2-.9l1.65 2.2V6.25l-1.65 2.2a.75.75 0 1 1-1.2-.9l3-4q.23-.3.6-.3M3.25 7c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H4A.75.75 0 0 1 3.25 7m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75m0 5c0-.41.34-.75.75-.75h7a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconList;
