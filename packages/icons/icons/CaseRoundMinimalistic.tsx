import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCaseRoundMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconCaseRoundMinimalistic(
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
              d="M2 14c0-3.77 0-5.66 1.17-6.83S6.23 6 10 6h4c3.77 0 5.66 0 6.83 1.17S22 10.23 22 14s0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.66 8.72c-3 1.96-4.51 2.93-6.1 3.43a12 12 0 0 1-7.12 0c-1.59-.5-3.1-1.47-6.1-3.43"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M8 11v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M16 11v2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.17 4a3 3 0 0 1 5.66 0"
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
              d="M9.88 4.25a2.25 2.25 0 0 1 4.24 0 .75.75 0 1 0 1.42-.5 3.75 3.75 0 0 0-7.08 0 .75.75 0 1 0 1.42.5M2.75 8.09l-.17-.08q.22-.48.6-.84C4.33 6 6.22 6 10 6h4c3.77 0 5.66 0 6.83 1.17q.36.37.59.84l-.17.08a52 52 0 0 1-4.51 2.77.75.75 0 0 0-1.49.14v.46c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.49-.14c-1.1-.55-2.41-1.4-4.51-2.77"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 14c0-1.95 0-3.4.16-4.5 2.28 1.48 3.74 2.42 5.09 3v.5a.75.75 0 0 0 1.5.02c2.13.56 4.37.56 6.5 0a.75.75 0 0 0 1.5-.02v-.5c1.35-.58 2.81-1.52 5.09-3 .16 1.1.16 2.55.16 4.5 0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
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
              d="M9.88 4.25a2.25 2.25 0 0 1 4.24 0 .75.75 0 1 0 1.42-.5 3.75 3.75 0 0 0-7.08 0 .75.75 0 0 0 1.42.5M2.75 8.09l-.17-.08q.23-.48.6-.84C4.33 6 6.22 6 10 6h4c3.77 0 5.66 0 6.83 1.17q.36.37.59.84l-.17.08a52 52 0 0 1-4.51 2.77.75.75 0 0 0-1.49.14v.46c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.49-.14c-1.1-.55-2.41-1.4-4.51-2.77M2 14c0-1.95 0-3.4.16-4.5 2.28 1.48 3.74 2.42 5.09 3v.5a.75.75 0 0 0 1.5.02c2.13.56 4.37.56 6.5 0a.75.75 0 0 0 1.5-.02v-.5c1.35-.58 2.81-1.52 5.09-3 .16 1.1.16 2.55.16 4.5 0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17S2 17.77 2 14"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCaseRoundMinimalistic;
