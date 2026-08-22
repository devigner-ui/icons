import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartphone2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartphone2(
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
              d="M4 10c0-3.77 0-5.66 1.17-6.83S8.23 2 12 2s5.66 0 6.83 1.17S20 6.23 20 10v4c0 3.77 0 5.66-1.17 6.83S15.77 22 12 22s-5.66 0-6.83-1.17S4 17.77 4 14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 5H9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="17.0001"
              r="2"
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
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.17 3.17C4 4.34 4 6.23 4 10v4c0 3.77 0 5.66 1.17 6.83S8.23 22 12 22s5.66 0 6.83-1.17S20 17.77 20 14v-4c0-3.77 0-5.66-1.17-6.83S15.77 2 12 2 6.34 2 5.17 3.17"
              fill="currentColor"
            />
            <path
              d="M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path d="M12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4" fill="currentColor" />
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
              d="M5.17 3.17C4 4.34 4 6.23 4 10v4c0 3.77 0 5.66 1.17 6.83S8.23 22 12 22s5.66 0 6.83-1.17S20 17.77 20 14v-4c0-3.77 0-5.66-1.17-6.83S15.77 2 12 2 6.34 2 5.17 3.17M9 4.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zM12 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartphone2;
