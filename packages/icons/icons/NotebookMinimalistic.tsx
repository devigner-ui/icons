import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconNotebookMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconNotebookMinimalistic(
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
              d="M3 9c0-2.83 0-4.24.88-5.12S6.18 3 9 3h6c2.83 0 4.24 0 5.12.88S21 6.18 21 9v5c0 1.89 0 2.83-.59 3.41-.58.59-1.52.59-3.41.59H7c-1.89 0-2.83 0-3.41-.59C3 16.83 3 15.9 3 14z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 21H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 15H9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 20.24c0-.42.34-.76.77-.76h20.46c.43 0 .77.34.77.76s-.34.76-.77.76H1.77a.76.76 0 0 1-.77-.76"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M3.69 3.89c-.9.9-.9 2.32-.9 5.19v5.07c0 1.9 0 2.86.6 3.46.6.59 1.56.59 3.5.59h10.23c1.93 0 2.9 0 3.49-.6.6-.59.6-1.54.6-3.45V9.08c0-2.87 0-4.3-.9-5.19S17.96 3 15.07 3H8.93c-2.9 0-4.34 0-5.24.89"
              fill="currentColor"
            />
            <path
              d="M8.93 14.4a.76.76 0 0 0-.77.76c0 .42.35.76.77.76h6.14c.42 0 .77-.34.77-.76a.76.76 0 0 0-.77-.76z"
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
              d="M1 20.24c0-.42.34-.76.77-.76h20.46c.43 0 .77.34.77.76s-.34.76-.77.76H1.77a.76.76 0 0 1-.77-.76"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.69 3.89c-.9.9-.9 2.32-.9 5.19v5.07c0 1.9 0 2.86.6 3.46.6.59 1.56.59 3.5.59h10.23c1.93 0 2.89 0 3.49-.6.6-.59.6-1.54.6-3.45V9.08c0-2.87 0-4.3-.9-5.19S17.96 3 15.07 3H8.93c-2.9 0-4.34 0-5.24.89m4.47 11.27c0-.42.35-.76.77-.76h6.14c.42 0 .77.34.77.76s-.35.76-.77.76H8.93a.76.76 0 0 1-.77-.76"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconNotebookMinimalistic;
