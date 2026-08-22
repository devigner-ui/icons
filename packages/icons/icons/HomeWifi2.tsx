import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconHomeWifi2 = forwardRef<SVGSVGElement, IconProps>(
  function IconHomeWifi2(
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
              d="M10.74 2.82 3.81 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91L14.6 2.83a3.2 3.2 0 0 0-3.86-.01"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.55 14.38a2.93 2.93 0 0 1 4.24 0"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.91 12.26a7 7 0 0 0-1.76-1.24 5.7 5.7 0 0 0-4.97 0 7 7 0 0 0-1.76 1.24"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 16.5"
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
              d="M10.74 2.82 3.81 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91L14.6 2.83a3.2 3.2 0 0 0-3.86-.01"
              fill="currentColor"
            />
            <path
              d="M14.79 15.13a.8.8 0 0 1-.52-.21c-.97-.93-2.23-.93-3.21 0A.75.75 0 0 1 10 14.9a.75.75 0 0 1 .02-1.06 3.7 3.7 0 0 1 5.28 0c.3.29.31.76.02 1.06a.7.7 0 0 1-.53.23"
              fill="currentColor"
            />
            <path
              d="M16.91 13.01a.7.7 0 0 1-.52-.21 6 6 0 0 0-1.56-1.1 4.9 4.9 0 0 0-4.32 0q-.84.4-1.56 1.1a.75.75 0 0 1-1.06-.01.75.75 0 0 1 .01-1.06 7 7 0 0 1 1.96-1.38 6.4 6.4 0 0 1 5.61 0q1.07.51 1.96 1.38a.75.75 0 0 1-.52 1.28"
              fill="currentColor"
            />
            <path
              d="M12.67 17.5q-.4 0-.71-.29a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0 1 1 0 0 1-.71 1.7"
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
              d="M21.53 8.37 14.6 2.83a3.2 3.2 0 0 0-3.86-.01L3.81 8.37a3.4 3.4 0 0 0-1.11 2.91l1.33 7.96a3.2 3.2 0 0 0 3.04 2.57h11.2a3.2 3.2 0 0 0 3.04-2.57l1.33-7.96a3.4 3.4 0 0 0-1.11-2.91m-8.15 8.83a1 1 0 0 1-.71.3q-.4 0-.71-.29a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0 1 1 0 0 1 0 1.4m1.95-2.3a.75.75 0 0 1-1.06.02c-.97-.93-2.23-.93-3.21 0A.75.75 0 0 1 10 14.9a.75.75 0 0 1 .02-1.06 3.7 3.7 0 0 1 5.28 0c.31.28.32.76.03 1.06m2.12-2.12a.8.8 0 0 1-.54.23.7.7 0 0 1-.52-.21 6 6 0 0 0-1.56-1.1 4.9 4.9 0 0 0-4.32 0q-.84.4-1.56 1.1a.75.75 0 0 1-1.06-.01.75.75 0 0 1 .01-1.06 7 7 0 0 1 1.96-1.38 6.4 6.4 0 0 1 5.61 0q1.07.51 1.96 1.38c.3.28.31.76.02 1.05"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconHomeWifi2;
