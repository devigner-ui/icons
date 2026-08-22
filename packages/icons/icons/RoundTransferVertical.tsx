import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRoundTransferVertical = forwardRef<SVGSVGElement, IconProps>(
  function IconRoundTransferVertical(
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
              d="M10 7v10l-3-3.44"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 17V7l3 3.44"
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
              d="M22 12a10 10 0 1 0-20 0 10 10 0 0 0 20 0"
              fill="currentColor"
            />
            <path
              d="M7.57 13.07a.75.75 0 1 0-1.14.99l3 3.43a.75.75 0 0 0 1.32-.49V7a.75.75 0 0 0-1.5 0v8z"
              fill="currentColor"
            />
            <path
              d="M14.75 17V9l1.68 1.93a.75.75 0 0 0 1.14-.99l-3-3.43a.75.75 0 0 0-1.32.49v10a.75.75 0 0 0 1.5 0"
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
              d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2.75 15V9l1.68 1.93a.75.75 0 0 0 1.14-.99l-3-3.43a.75.75 0 0 0-1.32.49v10a.75.75 0 0 0 1.5 0m-8.24-4a.75.75 0 0 1 1.06.07L9.25 15V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.32.5l-3-3.44A.75.75 0 0 1 6.51 13"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRoundTransferVertical;
