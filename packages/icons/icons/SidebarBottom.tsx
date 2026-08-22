import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSidebarBottom = forwardRef<SVGSVGElement, IconProps>(
  function IconSidebarBottom(
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
              d="M22.64 15V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7h6c5 0 7-2 7-7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 15.5h-20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.23 8.5-2.56 2.56-2.56-2.56"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38l.02.59a6 6 0 0 0 1.03 3.09q.44.64 1.08 1.08A6 6 0 0 0 8.48 22h8.38c3.44 0 5.57-1.94 5.78-5.22q.03-.29.03-.59V7.81q0-2.25-1.05-3.68a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.86 2"
              fill="currentColor"
            />
            <path
              d="M22.67 15.28h-20v.91l.02.59h19.95q.03-.29.03-.59z"
              fill="currentColor"
            />
            <path
              d="M9.36 9.03q0 .3.22.53l2.56 2.56c.29.29.77.29 1.06 0l2.56-2.56a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0l-2.03 2.02-2.03-2.02a.74.74 0 0 0-1.06 0 .7.7 0 0 0-.22.53"
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
              d="M3.72 19.87q.44.64 1.08 1.08A6 6 0 0 0 8.48 22h8.38c3.44 0 5.57-1.94 5.78-5.22H2.69a6 6 0 0 0 1.03 3.09"
              fill="currentColor"
            />
            <path
              d="M21.62 4.13a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v7.47h20V7.81q0-2.24-1.05-3.68m-5.86 5.43-2.56 2.56a.75.75 0 0 1-1.06 0L9.58 9.56a.7.7 0 0 1-.22-.53q0-.3.22-.53c.29-.3.77-.3 1.06 0l2.03 2.02 2.03-2.03a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSidebarBottom;
