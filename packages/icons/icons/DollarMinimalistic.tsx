import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconDollarMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconDollarMinimalistic(
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
              cy="12.0005"
              r="10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M12 17v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M12 6v1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M15 9.5C15 8.12 13.66 7 12 7S9 8.12 9 9.5s1.34 2.5 3 2.5 3 1.12 3 2.5-1.34 2.5-3 2.5-3-1.12-3-2.5"
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
              d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"
              fill="currentColor"
            />
            <path
              d="M12.75 6a.75.75 0 0 0-1.5 0v.32c-1.63.29-3 1.51-3 3.18 0 1.92 1.81 3.25 3.75 3.25 1.38 0 2.25.9 2.25 1.75 0 .84-.87 1.75-2.25 1.75s-2.25-.9-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.67 1.37 2.9 3 3.18V18a.75.75 0 0 0 1.5 0v-.32c1.63-.29 3-1.51 3-3.18 0-1.92-1.81-3.25-3.75-3.25-1.38 0-2.25-.9-2.25-1.75 0-.84.87-1.75 2.25-1.75s2.25.9 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.67-1.37-2.9-3-3.18z"
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
              d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20m.75-16a.75.75 0 0 0-1.5 0v.32c-1.63.29-3 1.51-3 3.18 0 1.92 1.81 3.25 3.75 3.25 1.38 0 2.25.9 2.25 1.75 0 .84-.87 1.75-2.25 1.75s-2.25-.9-2.25-1.75a.75.75 0 0 0-1.5 0c0 1.67 1.37 2.9 3 3.18V18a.75.75 0 0 0 1.5 0v-.32c1.63-.29 3-1.51 3-3.18 0-1.92-1.81-3.25-3.75-3.25-1.38 0-2.25-.9-2.25-1.75 0-.84.87-1.75 2.25-1.75s2.25.9 2.25 1.75a.75.75 0 0 0 1.5 0c0-1.67-1.37-2.9-3-3.18z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconDollarMinimalistic;
