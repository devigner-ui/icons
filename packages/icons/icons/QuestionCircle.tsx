import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconQuestionCircle = forwardRef<SVGSVGElement, IconProps>(
  function IconQuestionCircle(
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
              d="M10.13 8.88a1.88 1.88 0 1 1 2.82 1.61c-.47.28-.95.7-.95 1.26V13"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle cx="12" cy="16" r="1" fill="currentColor" />
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              fill="currentColor"
            />
            <path
              d="M12 7.75c-.62 0-1.12.5-1.12 1.13a.75.75 0 0 1-1.5 0 2.63 2.63 0 1 1 4.5 1.82l-.26.27q-.32.31-.57.62-.32.41-.3.66V13a.75.75 0 0 1-1.5 0v-.75c0-.66.3-1.19.61-1.58a9 9 0 0 1 .95-1.01q.3-.31.31-.79c0-.62-.5-1.12-1.12-1.12"
              fill="currentColor"
            />
            <path d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0M12 7.75c-.62 0-1.12.5-1.12 1.13a.75.75 0 0 1-1.5 0 2.63 2.63 0 1 1 4.5 1.82l-.26.27q-.32.31-.57.62-.32.41-.3.66V13a.75.75 0 0 1-1.5 0v-.75c0-.66.3-1.19.61-1.58a9 9 0 0 1 .95-1.01q.3-.31.31-.79c0-.62-.5-1.12-1.12-1.12M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconQuestionCircle;
