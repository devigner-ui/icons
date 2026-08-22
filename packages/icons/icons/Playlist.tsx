import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlaylist = forwardRef<SVGSVGElement, IconProps>(function IconPlaylist(
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
            d="M21 6H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M21 10H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 14H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            opacity={duotone ? "0.4" : "1"}
            d="M11 18H3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d="M18.88 14.12c1.65.95 2.48 1.43 2.6 2.12q.05.26 0 .52c-.12.69-.95 1.17-2.6 2.12s-2.49 1.43-3.14 1.2a2 2 0 0 1-.45-.27c-.54-.45-.54-1.4-.54-3.31 0-1.9 0-2.86.54-3.31q.2-.17.45-.26c.65-.24 1.48.23 3.14 1.19"
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
              d="M2.25 6c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </g>
          <path
            d="M18.88 14.12c1.65.95 2.48 1.43 2.6 2.12q.05.26 0 .52c-.12.69-.95 1.17-2.6 2.12s-2.49 1.43-3.14 1.2a2 2 0 0 1-.45-.27c-.54-.45-.54-1.4-.54-3.31 0-1.9 0-2.86.54-3.31q.2-.18.45-.26c.65-.24 1.48.23 3.14 1.19"
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
            d="M2.25 6c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
            fill="currentColor"
          />
          <path
            d="M18.88 14.12c1.65.95 2.48 1.43 2.6 2.12q.05.26 0 .52c-.12.69-.95 1.17-2.6 2.12s-2.49 1.43-3.14 1.2a2 2 0 0 1-.45-.27c-.54-.45-.54-1.4-.54-3.31 0-1.9 0-2.86.54-3.31q.2-.17.45-.26c.65-.24 1.48.23 3.14 1.19"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
});

export default IconPlaylist;
