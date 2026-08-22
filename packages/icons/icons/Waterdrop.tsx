import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconWaterdrop = forwardRef<SVGSVGElement, IconProps>(
  function IconWaterdrop(
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
              d="M3 13.2c0 4.86 3.86 8.8 8.61 8.8h.78A8.7 8.7 0 0 0 21 13.2v-.27c0-4.61-2.73-8.77-6.9-10.5a5.4 5.4 0 0 0-4.2 0A11.4 11.4 0 0 0 3 12.92z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M7.61 10.72c.64-2 2.02-3.63 3.78-4.44"
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
              d="M11.61 22h.78A8.7 8.7 0 0 0 21 13.2v-.27c0-4.61-2.73-8.77-6.9-10.5a5.4 5.4 0 0 0-4.2 0A11.4 11.4 0 0 0 3 12.92v.26A8.7 8.7 0 0 0 11.61 22"
              fill="currentColor"
            />
            <path
              d="M12.07 5.96c.17.38 0 .82-.37 1a6.5 6.5 0 0 0-3.37 3.99.75.75 0 1 1-1.43-.45c.7-2.19 2.2-4 4.17-4.9a.75.75 0 0 1 1 .36"
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
              d="M11.61 22A8.7 8.7 0 0 1 3 13.2v-.27c0-4.61 2.73-8.77 6.9-10.5a5.4 5.4 0 0 1 4.2 0 11.3 11.3 0 0 1 6.9 10.5v.26A8.7 8.7 0 0 1 12.39 22zm.46-16.04c.17.38 0 .82-.37 1a6.5 6.5 0 0 0-3.37 3.99.75.75 0 1 1-1.43-.45c.7-2.19 2.2-4 4.17-4.9a.75.75 0 0 1 1 .36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconWaterdrop;
