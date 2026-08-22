import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCloudConnection = forwardRef<SVGSVGElement, IconProps>(
  function IconCloudConnection(
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
              d="M7.04 9.51c-4.08.29-4.07 6.2 0 6.49h9.66c1.17.01 2.3-.43 3.17-1.22 2.86-2.5 1.33-7.5-2.44-7.98C16.08-1.34 4.29 1.75 7.08 9.51"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 16v3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.67 23a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 21h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.67 21h-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M19.87 14.78c-.86.79-2 1.23-3.17 1.22H7.04c-4.07-.29-4.08-6.2 0-6.49h.04c-2.79-7.76 9-10.85 10.35-2.71 3.77.48 5.3 5.49 2.44 7.98"
              fill="currentColor"
            />
            <path
              d="M19.42 21c0 .41-.34.75-.75.75h-4l-.14-.02A2 2 0 0 1 12.67 23a2 2 0 0 1-1.86-1.27l-.14.02h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4l.14.02c.2-.52.61-.93 1.13-1.13l-.02-.14v-3h1.5v3l-.02.14c.52.2.93.61 1.13 1.13l.14-.02h4c.41 0 .75.34.75.75"
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
              d="M19.87 14.78c-.86.79-2 1.23-3.17 1.22H7.04c-4.07-.29-4.08-6.2 0-6.49h.04c-2.79-7.76 9-10.85 10.35-2.71 3.77.48 5.3 5.49 2.44 7.98"
              fill="currentColor"
            />
            <path
              d="M19.42 21c0 .41-.34.75-.75.75h-4l-.14-.02A2 2 0 0 1 12.67 23a2 2 0 0 1-1.86-1.27l-.14.02h-4a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4l.14.02c.2-.52.61-.93 1.13-1.13l-.02-.14v-3h1.5v3l-.02.14c.52.2.93.61 1.13 1.13l.14-.02h4c.41 0 .75.34.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCloudConnection;
