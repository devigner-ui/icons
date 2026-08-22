import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHeartUnlock = forwardRef<SVGSVGElement, IconProps>(
  function IconHeartUnlock(
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
              d="M7 7c0-3.31 1.94-5 4.87-5 1.85 0 3.3.67 4.13 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 12v2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m9.27 20.62.45-.6zM12 8.93l-.53.53a.75.75 0 0 0 1.06 0zm2.73 11.69.46.6zm-5-.6c-1.38-1.05-2.86-2.06-4.04-3.34a6.6 6.6 0 0 1-1.94-4.58h-1.5a8 8 0 0 0 2.34 5.6c1.3 1.4 2.94 2.54 4.22 3.51zM3.74 12.1a4.4 4.4 0 0 1 2.53-4.02c1.43-.63 3.36-.46 5.19 1.38l1.06-1.06c-2.22-2.23-4.8-2.6-6.85-1.69a5.9 5.9 0 0 0-3.43 5.39zm5.06 9.11c.46.35.96.73 1.47 1.02.5.29 1.09.52 1.72.52v-1.5q-.4 0-.98-.33a12 12 0 0 1-1.3-.9zm6.38 0c1.28-.97 2.93-2.1 4.22-3.51a8 8 0 0 0 2.34-5.6h-1.5a6.6 6.6 0 0 1-1.94 4.58c-1.18 1.28-2.66 2.3-4.03 3.34zm6.56-9.11c0-2.41-1.41-4.5-3.43-5.39-2.06-.9-4.63-.54-6.85 1.7l1.06 1.05c1.83-1.84 3.76-2 5.19-1.38a4.4 4.4 0 0 1 2.53 4.02zm-7.47 7.92a12 12 0 0 1-1.3.9q-.59.34-.98.33v1.5c.63 0 1.22-.23 1.72-.52.51-.29 1-.67 1.47-1.02z"
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
              d="M7.5 7.01a4 4 0 0 1 1.1-2.26 4.6 4.6 0 0 1 3.3-1.15c1.83 0 3.11.66 3.81 1.8.23.35.67.44.99.19s.4-.75.17-1.11C15.82 2.78 14.01 2 11.9 2c-1.68 0-3.16.48-4.23 1.54a6 6 0 0 0-1.64 3.84q.7-.3 1.47-.37"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 20.04C5.97 18.15 3 15.94 3 12.1c0-4.24 4.95-7.24 9-3.17 4.05-4.07 9-1.07 9 3.17 0 3.84-2.97 6.05-5.5 7.94l-.77.58C13.8 21.32 12.9 22 12 22s-1.8-.67-2.73-1.38z"
              fill="currentColor"
            />
            <path
              d="M12 11.25c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0V12c0-.41.34-.75.75-.75"
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
              d="M7.75 7c0-1.51.44-2.55 1.11-3.2a4.2 4.2 0 0 1 3.01-1.05c1.67 0 2.84.6 3.5 1.64a.75.75 0 1 0 1.27-.78c-1-1.61-2.73-2.36-4.77-2.36-1.6 0-3.03.46-4.06 1.47S6.25 5.2 6.25 7v.29A5.1 5.1 0 0 0 3 12.1c0 3.84 2.97 6.05 5.5 7.94l.77.58C10.2 21.32 11.1 22 12 22s1.8-.67 2.73-1.38l.77-.58c2.53-1.89 5.5-4.1 5.5-7.94 0-4.24-4.95-7.24-9-3.17A5.8 5.8 0 0 0 7.75 7M12 11.25c.41 0 .75.34.75.75v2.5a.75.75 0 0 1-1.5 0V12c0-.41.34-.75.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHeartUnlock;
