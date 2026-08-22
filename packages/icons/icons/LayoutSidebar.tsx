import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconLayoutSidebar = forwardRef<SVGSVGElement, IconProps>(
  function IconLayoutSidebar(
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
              d="M11.17 19.9V4.1c0-1.5-.64-2.1-2.23-2.1H4.9c-1.59 0-2.23.6-2.23 2.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 8.52V3.98c0-1.41-.64-1.98-2.23-1.98H16.4c-1.59 0-2.23.57-2.23 1.98v4.53c0 1.42.64 1.98 2.23 1.98h4.04c1.59.01 2.23-.56 2.23-1.97"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 19.77v-4.04c0-1.59-.64-2.23-2.23-2.23H16.4c-1.59 0-2.23.64-2.23 2.23v4.04c0 1.59.64 2.23 2.23 2.23h4.04c1.59 0 2.23-.64 2.23-2.23"
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
              d="M11.67 19.9V4.1c0-1.5-.64-2.1-2.23-2.1H5.4c-1.59 0-2.23.6-2.23 2.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.17 19.64v-4.28c0-1.3-1-2.36-2.23-2.36H15.9c-1.23 0-2.23 1.06-2.23 2.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.17 8.64V4.36c0-1.3-1-2.36-2.23-2.36H15.9c-1.23 0-2.23 1.06-2.23 2.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36"
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
              d="M11.67 19.9V4.1c0-1.5-.64-2.1-2.23-2.1H5.4c-1.59 0-2.23.6-2.23 2.1v15.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1"
              fill="currentColor"
            />
            <path
              d="M22.17 19.64v-4.28c0-1.3-1-2.36-2.23-2.36H15.9c-1.23 0-2.23 1.06-2.23 2.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36"
              fill="currentColor"
            />
            <path
              d="M22.17 8.64V4.36c0-1.3-1-2.36-2.23-2.36H15.9c-1.23 0-2.23 1.06-2.23 2.36v4.28c0 1.3 1 2.36 2.23 2.36h4.04c1.23 0 2.23-1.06 2.23-2.36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconLayoutSidebar;
