import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconListCross = forwardRef<SVGSVGElement, IconProps>(
  function IconListCross(
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
              d="m15 18.5 5-5m0 5-5-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.25 6c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M14.47 12.97c.3-.3.77-.3 1.06 0l1.97 1.97 1.97-1.97a.75.75 0 1 1 1.06 1.06L18.56 16l1.97 1.97a.75.75 0 0 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06L16.44 16l-1.97-1.97a.75.75 0 0 1 0-1.06"
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
              d="M2.25 6c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4c0-.41.34-.75.75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m12.22 2.97c.3-.3.77-.3 1.06 0l1.97 1.97 1.97-1.97a.75.75 0 1 1 1.06 1.06L18.56 16l1.97 1.97a.75.75 0 0 1-1.06 1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 1-1.06-1.06L16.44 16l-1.97-1.97a.75.75 0 0 1 0-1.06M2.25 14c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4c0-.41.34-.75.75-.75h8a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconListCross;
