import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMapPointRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconMapPointRemove(
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
              d="M4 10.14C4 5.64 7.58 2 12 2s8 3.65 8 8.14c0 4.47-2.55 9.67-6.54 11.53-.93.44-2 .44-2.92 0C6.55 19.81 4 14.61 4 10.14"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M9 10h6"
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
              d="M10.54 21.67c.93.44 2 .44 2.92 0C17.45 19.81 20 14.61 20 10.14 20 5.64 16.42 2 12 2s-8 3.65-8 8.14c0 4.47 2.55 9.67 6.54 11.53"
              fill="currentColor"
            />
            <path
              d="M9 9.25a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5z"
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
              d="M12 2c-4.42 0-8 3.65-8 8.14 0 4.47 2.55 9.67 6.54 11.53.93.44 2 .44 2.92 0C17.45 19.81 20 14.61 20 10.14 20 5.64 16.42 2 12 2m-3.75 8c0-.41.34-.75.75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMapPointRemove;
