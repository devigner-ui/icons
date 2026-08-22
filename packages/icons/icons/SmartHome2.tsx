import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSmartHome2 = forwardRef<SVGSVGElement, IconProps>(
  function IconSmartHome2(
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
              d="M12.07 21.81h6.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91L14.6 2.83a3.2 3.2 0 0 0-3.86-.01L3.81 8.37a3.4 3.4 0 0 0-1.11 2.91l.28 1.68"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 19a2.9 2.9 0 0 1 3 3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.67 22a7 7 0 0 0-.37-2.12 5.7 5.7 0 0 0-3.51-3.51A7 7 0 0 0 2.67 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.67 22"
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
              d="M10.74 3.01 3.81 8.56a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96A3.2 3.2 0 0 0 7.07 22h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91L14.6 3.02a3.2 3.2 0 0 0-3.86-.01"
              fill="currentColor"
            />
            <path
              d="M13.04 17.12a.75.75 0 0 1-.75-.73c-.03-1.35-.92-2.24-2.27-2.27a.75.75 0 0 1 .02-1.5h.02a3.67 3.67 0 0 1 3.73 3.73.76.76 0 0 1-.73.77z"
              fill="currentColor"
            />
            <path
              d="M16.04 17.12a.75.75 0 0 1-.75-.74 6 6 0 0 0-.32-1.88 5 5 0 0 0-3.06-3.06 6 6 0 0 0-1.88-.32.74.74 0 0 1-.74-.76c0-.41.34-.74.75-.74h.01q1.25.02 2.36.41A6.4 6.4 0 0 1 16.38 14q.4 1.12.41 2.36a.74.74 0 0 1-.75.76q.02 0 0 0"
              fill="currentColor"
            />
            <path
              d="M10.05 17.38a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
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
              d="M21.53 8.56 14.6 3.02a3.2 3.2 0 0 0-3.86-.01L3.81 8.56a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96A3.2 3.2 0 0 0 7.07 22h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91m-11.48 8.82a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m3.01-.26h-.02a.75.75 0 0 1-.75-.73c-.03-1.35-.92-2.24-2.27-2.27a.75.75 0 0 1 .02-1.5h.02a3.67 3.67 0 0 1 3.73 3.73.74.74 0 0 1-.73.77m2.99 0a.76.76 0 0 1-.76-.74 6 6 0 0 0-.32-1.88 5 5 0 0 0-3.06-3.06 6 6 0 0 0-1.88-.32.74.74 0 0 1-.74-.76c0-.41.34-.74.75-.74h.01q1.25.02 2.36.41A6.4 6.4 0 0 1 16.38 14q.4 1.12.41 2.36a.74.74 0 0 1-.74.76"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSmartHome2;
