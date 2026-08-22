import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVolumeSlash = forwardRef<SVGSVGElement, IconProps>(
  function IconVolumeSlash(
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
              d="M15.67 8.37v-.96c0-2.98-2.07-4.12-4.59-2.54L8.16 6.7q-.5.3-1.06.3H5.67q-3 0-3 3v4q0 3 3 3h2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.08 19.13c2.52 1.58 4.59.43 4.59-2.54v-3.64"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19.48 9.42c.9 2.15.63 4.66-.81 6.58"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.82 7.8a10.8 10.8 0 0 1-1.32 10.7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m22.67 2-20 20"
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
              d="M18.67 16.75a.75.75 0 0 1-.6-1.2 5.9 5.9 0 0 0 .72-5.84.75.75 0 0 1 1.38-.58 7.5 7.5 0 0 1-.9 7.33.8.8 0 0 1-.6.29"
              fill="currentColor"
            />
            <path
              d="M20.5 19.25a.75.75 0 0 1-.6-1.2 10.1 10.1 0 0 0 1.23-9.96.75.75 0 0 1 1.38-.58 11.6 11.6 0 0 1-1.41 11.44c-.14.2-.37.3-.6.3"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.71 12.96a1 1 0 0 1 1.71.71v2.93c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37q-1.21 0-2.54-.82l-.64-.4a1 1 0 0 1-.18-1.55z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.69 3.78c-1.12-.62-2.55-.46-4.01.45L7.76 6.06q-.3.19-.66.19H5.67c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75h1.25l9.5-9.5v-.84c0-1.72-.62-3.01-1.73-3.63"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L2.9 20.69c-.3.3-.3.79 0 1.09a.76.76 0 0 0 1.08-.01L22.44 3.31a.74.74 0 0 0 0-1.08"
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
              d="M18.67 16.75a.75.75 0 0 1-.6-1.2 5.9 5.9 0 0 0 .72-5.84.75.75 0 0 1 1.38-.58 7.5 7.5 0 0 1-.9 7.33.8.8 0 0 1-.6.29"
              fill="currentColor"
            />
            <path
              d="M20.5 19.25a.75.75 0 0 1-.6-1.2 10.1 10.1 0 0 0 1.23-9.96.75.75 0 0 1 1.38-.58 11.6 11.6 0 0 1-1.41 11.44c-.14.2-.37.3-.6.3"
              fill="currentColor"
            />
            <path
              d="M14.71 12.96a1 1 0 0 1 1.71.71v2.93c0 1.72-.62 3.01-1.73 3.63a3 3 0 0 1-1.47.37q-1.21 0-2.54-.82l-.64-.4a1 1 0 0 1-.18-1.55z"
              fill="currentColor"
            />
            <path
              d="M22.44 2.23a.77.77 0 0 0-1.09 0L16.4 7.18c-.06-1.6-.66-2.8-1.72-3.39-1.12-.62-2.55-.46-4.01.45L7.76 6.06q-.3.19-.66.19H5.67c-2.42 0-3.75 1.33-3.75 3.75v4c0 2.42 1.33 3.75 3.75 3.75h.16l-2.94 2.94c-.3.3-.3.79 0 1.09q.25.21.55.22.3 0 .54-.23L22.44 3.31a.74.74 0 0 0 0-1.08"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVolumeSlash;
