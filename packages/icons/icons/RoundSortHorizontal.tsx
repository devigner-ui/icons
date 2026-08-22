import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoundSortHorizontal = forwardRef<SVGSVGElement, IconProps>(
  function IconRoundSortHorizontal(
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
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M16 9.5H8m0 0L10.75 7M8 9.5l2.75 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 14.5h8m0 0L13.25 12M16 14.5 13.25 17"
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
              opacity={duotone ? "0.4" : "1"}
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M13.75 11.45a.75.75 0 1 0-1 1.1l1.31 1.2H8a.75.75 0 0 0 0 1.5h6.06l-1.31 1.2a.75.75 0 1 0 1 1.1l2.75-2.5a.75.75 0 0 0 0-1.1z"
              fill="currentColor"
            />
            <path
              d="M11.25 7.55a.75.75 0 1 0-1-1.1L7.5 8.95a.75.75 0 0 0 0 1.1l2.75 2.5a.75.75 0 0 0 1-1.1l-1.31-1.2H16a.75.75 0 0 0 0-1.5H9.94z"
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0m-8.25-.55a.75.75 0 0 0-1 1.1l1.31 1.2H8a.75.75 0 0 0 0 1.5h6.06l-1.31 1.2a.75.75 0 0 0 1 1.1l2.75-2.5a.75.75 0 0 0 0-1.1zM11.3 6.5c.28.3.26.78-.05 1.05l-1.31 1.2H16a.75.75 0 0 1 0 1.5H9.94l1.31 1.2a.75.75 0 0 1-1 1.1l-2.75-2.5a.75.75 0 0 1 0-1.1l2.75-2.5a.75.75 0 0 1 1.05.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRoundSortHorizontal;
