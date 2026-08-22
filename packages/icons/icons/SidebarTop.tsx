import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSidebarTop = forwardRef<SVGSVGElement, IconProps>(
  function IconSidebarTop(
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
              d="M22.67 8.5h-20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.23 15.5-2.56-2.56-2.56 2.56"
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
              d="M8.48 22h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81l-.02-.59a6 6 0 0 0-1.03-3.09 4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.86 2H8.48C5.04 2 2.91 3.94 2.7 7.22q-.03.29-.03.59v8.38q0 2.24 1.05 3.68.44.64 1.08 1.08A6 6 0 0 0 8.48 22"
              fill="currentColor"
            />
            <path
              d="M2.67 8.72h20v-.91l-.02-.59H2.7q-.03.29-.03.59z"
              fill="currentColor"
            />
            <path
              d="M15.98 14.97a.7.7 0 0 0-.22-.53l-2.56-2.56a.75.75 0 0 0-1.06 0l-2.56 2.56a.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0l2.03-2.02 2.03 2.03a.75.75 0 0 0 1.28-.54"
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
              d="M21.62 4.13a4 4 0 0 0-1.08-1.08A6 6 0 0 0 16.86 2H8.48C5.04 2 2.91 3.94 2.7 7.22h19.95a6 6 0 0 0-1.03-3.09"
              fill="currentColor"
            />
            <path
              d="M2.67 16.19q0 2.24 1.05 3.68.44.64 1.08 1.08A6 6 0 0 0 8.48 22h8.38c3.64 0 5.81-2.17 5.81-5.81V8.72h-20zm6.91-1.75 2.56-2.56a.75.75 0 0 1 1.06 0l2.56 2.56q.22.23.22.53t-.22.53a.75.75 0 0 1-1.06 0l-2.03-2.02-2.03 2.02a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSidebarTop;
