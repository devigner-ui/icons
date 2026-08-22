import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolumeHigh = forwardRef<SVGSVGElement, IconProps>(
  function IconVolumeHigh(
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
              d="M2.67 10v4q0 3 3 3H7.1q.57 0 1.06.3l2.92 1.83c2.52 1.58 4.59.43 4.59-2.54V7.41c0-2.98-2.07-4.12-4.59-2.54L8.16 6.7q-.5.3-1.06.3H5.67q-3 0-3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 8a6.7 6.7 0 0 1 0 8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M20.5 5.5a10.8 10.8 0 0 1 0 13"
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
              d="M18.67 16.75a.75.75 0 0 1-.6-1.2 5.9 5.9 0 0 0 0-7.1.75.75 0 0 1 1.2-.9 7.5 7.5 0 0 1 0 8.9q-.24.3-.6.3"
              fill="currentColor"
            />
            <path
              d="M20.5 19.25a.75.75 0 0 1-.6-1.2 10.1 10.1 0 0 0 0-12.1.75.75 0 0 1 1.2-.9 11.6 11.6 0 0 1 0 13.9c-.14.2-.37.3-.6.3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.42 7.41v9.18c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37q-1.21 0-2.54-.82l-2.92-1.83a1.3 1.3 0 0 0-.66-.19h-.93V6.25h.93q.35 0 .66-.19l2.92-1.83c1.46-.91 2.89-1.07 4.01-.45s1.73 1.91 1.73 3.63"
              fill="currentColor"
            />
            <path
              d="M6.17 6.25v11.5h-.5c-2.42 0-3.75-1.33-3.75-3.75v-4c0-2.42 1.33-3.75 3.75-3.75z"
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
              d="M18.67 16.75a.75.75 0 0 1-.6-1.2 5.9 5.9 0 0 0 0-7.1.75.75 0 0 1 1.2-.9 7.5 7.5 0 0 1 0 8.9q-.24.3-.6.3"
              fill="currentColor"
            />
            <path
              d="M20.5 19.25a.75.75 0 0 1-.6-1.2 10.1 10.1 0 0 0 0-12.1.75.75 0 0 1 1.2-.9 11.6 11.6 0 0 1 0 13.9c-.14.2-.37.3-.6.3"
              fill="currentColor"
            />
            <path
              d="M14.69 3.78c-1.12-.62-2.55-.46-4.01.45L7.76 6.06q-.3.19-.66.19H5.67c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75H7.1q.35 0 .66.19l2.92 1.83q1.33.82 2.54.82a3 3 0 0 0 1.47-.37c1.11-.62 1.73-1.91 1.73-3.63V7.41c0-1.72-.62-3.01-1.73-3.63"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolumeHigh;
