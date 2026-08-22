import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeyMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconKeyMinimalistic(
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
              d="m18.98 5.02.53-.53zm0 9.77.53.53zM7.15 12.67l-.53-.53zm-3.72 3.71.53.53zm4.19 4.19-.53-.53zm1.24-1.24-.53-.53zm2.47-2.48-.53-.53zm-8.32.74-.75.08zm.23 2.09-.74.08zm1.08 1.08-.08.74zm2.09.23.08-.74zm-2.89-.72.53-.53zm.21.2-.53.54zm3.67-8.84-.72.19zm4.97 4.97-.19.72zm6.08-11.05c2.4 2.4 2.4 6.3 0 8.71l1.06 1.06a7.66 7.66 0 0 0 0-10.83zM19.5 4.5a7.66 7.66 0 0 0-10.83 0l1.06 1.06c2.4-2.4 6.3-2.4 8.7 0zM6.6 12.14l-3.7 3.71 1.05 1.06 3.72-3.71zm1.54 8.96 1.24-1.24-1.06-1.06-1.24 1.24zm1.24-1.24 2.47-2.47-1.06-1.07-2.47 2.48zm-7.13-2.19.24 2.1 1.49-.17-.24-2.1zm1.98 3.83 2.09.24.16-1.5-2.09-.23zm-1.25-.7.21.2 1.06-1.05-.2-.21zM4.4 20a.2.2 0 0 1-.14-.06L3.2 21q.44.42 1.04.5zm-1.9-.25q.06.61.5 1.04l1.05-1.06A.2.2 0 0 1 4 19.6zm4.59.28a.7.7 0 0 1-.6.2l-.16 1.5c.67.07 1.34-.16 1.82-.64zM2.9 15.85a2.2 2.2 0 0 0-.64 1.82l1.5-.16a.7.7 0 0 1 .2-.6zm5.23-4.4a6.2 6.2 0 0 1 1.61-5.9L8.68 4.5a7.7 7.7 0 0 0-2 7.33zm10.32 2.81a6.2 6.2 0 0 1-5.9 1.61l-.37 1.45a7.7 7.7 0 0 0 7.33-2zm-6.59 3.13q.1-.1.32-.07l.38-1.45a1.8 1.8 0 0 0-1.76.45zm-4.18-4.2c.48-.47.6-1.16.45-1.74l-1.45.37q.04.23-.06.32z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.33 19.86a.75.75 0 1 0 1.06-1.07zm-.7-2.8a.75.75 0 0 0-1.05 1.07zM9.4 18.8l-1.75-1.73-1.06 1.07 1.75 1.73z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.12 10.88a1.25 1.25 0 0 1 0-1.76l-1.06-1.06a2.75 2.75 0 0 0 0 3.89zm1.76 0c-.48.5-1.28.5-1.76 0l-1.06 1.06a2.75 2.75 0 0 0 3.88 0zm0-1.76c.5.48.5 1.28 0 1.76l1.06 1.06a2.75 2.75 0 0 0 0-3.88zm1.06-1.06a2.75 2.75 0 0 0-3.88 0l1.06 1.06a1.25 1.25 0 0 1 1.76 0z"
              fill="currentColor"
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
              d="M18.98 14.8A6.9 6.9 0 1 0 7.4 11.62c.1.37.01.77-.25 1.04l-3.72 3.71a1.5 1.5 0 0 0-.42 1.21l.23 2.09q.05.34.28.59l.21.2q.25.24.6.29l2.08.23c.45.05.9-.1 1.21-.42l.71-.71 1.06-1.06 1.94-1.95a1.1 1.1 0 0 1 1.04-.25 6.9 6.9 0 0 0 6.6-1.8"
              fill="currentColor"
            />
            <path
              d="M15.41 8.59a2 2 0 1 0-2.82 2.82A2 2 0 0 0 15.4 8.6"
              fill="currentColor"
            />
            <path
              d="m6.58 18.13 1.75 1.73 1.06-1.06-1.75-1.74a.75.75 0 0 0-1.06 1.07"
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
              d="M18.98 14.8A6.9 6.9 0 1 0 7.4 11.62c.1.37.01.77-.25 1.04l-3.72 3.71a1.5 1.5 0 0 0-.42 1.21l.23 2.09q.05.34.28.59l.21.2q.25.24.6.29l2.08.23c.45.05.9-.1 1.21-.42l.71-.71-1.75-1.73a.75.75 0 1 1 1.06-1.07l1.75 1.74 1.94-1.95a1.1 1.1 0 0 1 1.04-.25 6.9 6.9 0 0 0 6.6-1.8m-6.4-6.21a2 2 0 1 1 2.83 2.82 2 2 0 0 1-2.8-2.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeyMinimalistic;
