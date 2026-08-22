import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSignpost3 = forwardRef<SVGSVGElement, IconProps>(
  function IconSignpost3(
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
              d="M17.89 2H9.63q-.61.01-1.1.38L6.36 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.3.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.96-.78-1.74-1.75-1.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.47 12h8.26q.61.01 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75q-.48.38-1.09.38H7.47c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.67 12V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12.67 22v-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M9.67 22h6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
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
              d="M19.64 3.75v3.5c0 .97-.78 1.75-1.75 1.75H9.63a2 2 0 0 1-1.09-.38L6.35 6.87a1.76 1.76 0 0 1 0-2.74l2.19-1.75q.48-.37 1.09-.38h8.26c.97 0 1.75.78 1.75 1.75"
              fill="currentColor"
            />
            <path
              d="m19.01 16.87-2.18 1.75q-.48.37-1.1.38H7.47c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.97.78-1.75 1.75-1.75h8.26q.62.01 1.1.38l2.18 1.75c.88.7.88 2.04 0 2.74"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.42 9h-1.5v3h1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.42 22c0 .41-.34.75-.75.75h-6a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.25V19h1.5v2.25h2.25c.41 0 .75.34.75.75"
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
              d="m19.01 14.13-2.18-1.75q-.48-.37-1.1-.38h-2.31V9h4.47c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75H9.63q-.6.01-1.09.38L6.35 4.13c-.87.7-.87 2.04 0 2.74l2.19 1.75q.48.37 1.09.38h2.29v3H7.47c-.97 0-1.75.78-1.75 1.75v3.5c0 .97.78 1.75 1.75 1.75h4.45v2.25H9.67a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.25V19h2.31q.62-.01 1.1-.38l2.18-1.75c.88-.7.88-2.04 0-2.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSignpost3;
