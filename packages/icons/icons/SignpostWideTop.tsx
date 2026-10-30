import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconSignpostWideTop = forwardRef<SVGSVGElement, IconProps>(
  function IconSignpostWideTop(
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
        {variant === "Broken" ? (
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
            d="M5.49 4.31c-.67.73-.61 1.91.2 2.55l2.19 1.75c.3.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.96-.78-1.74-1.75-1.74H8.96q-.38 0-.72.15"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.05 13.86v-.12c0-.96.78-1.74 1.75-1.74h8.26q.61.01 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75q-.48.38-1.09.38H6.8c-.93 0-1.69-.72-1.75-1.63"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 12V9"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22v-3"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22h6"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          </svg>
        ) : !fill ? (
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
              d="M17.22 2H8.96q-.61.01-1.1.38L5.69 4.13c-.88.7-.88 2.03 0 2.73l2.19 1.75c.3.25.7.38 1.09.38h8.26c.97 0 1.75-.78 1.75-1.75v-3.5c0-.96-.78-1.74-1.75-1.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.8 12h8.26q.61.01 1.09.38l2.19 1.75c.88.7.88 2.03 0 2.73l-2.19 1.75q-.48.38-1.09.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.96.78-1.74 1.75-1.74"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 12V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M12 22v-3"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity={duotone ? "0.4" : "1"}
                d="M9 22h6"
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
              d="M18.97 3.35v3.5c0 .97-.78 1.75-1.75 1.75H8.96a2 2 0 0 1-1.09-.38L5.68 6.47a1.76 1.76 0 0 1 0-2.74l2.19-1.75q.48-.37 1.09-.38h8.26c.97 0 1.75.78 1.75 1.75"
              fill="currentColor"
            />
            <path
              d="m18.34 16.47-2.18 1.75q-.48.37-1.1.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.97.78-1.75 1.75-1.75h8.26q.62.01 1.1.38l2.18 1.75c.88.7.88 2.04 0 2.74"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12.75 8.6h-1.5v3h1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.75 21.6c0 .41-.34.75-.75.75H9a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h2.25V18.6h1.5v2.25H15c.41 0 .75.34.75.75"
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
              d="m18.34 13.73-2.18-1.75q-.48-.37-1.1-.38h-2.31v-3h4.47c.97 0 1.75-.78 1.75-1.75v-3.5c0-.97-.78-1.75-1.75-1.75H8.96q-.6.01-1.09.38L5.68 3.73c-.87.7-.87 2.04 0 2.74l2.19 1.75q.48.37 1.09.38h2.29v3H6.8c-.97 0-1.75.78-1.75 1.75v3.5c0 .97.78 1.75 1.75 1.75h4.45v2.25H9a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-2.25V18.6h2.31q.62-.01 1.1-.38l2.18-1.75c.88-.7.88-2.04 0-2.74"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconSignpostWideTop;
