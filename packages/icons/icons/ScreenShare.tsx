import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconScreenShare = forwardRef<SVGSVGElement, IconProps>(
  function IconScreenShare(
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
              d="M8 8c0-2.83 0-4.24.88-5.12S11.18 2 14 2h1c2.83 0 4.24 0 5.12.88S21 5.18 21 8v8c0 2.83 0 4.24-.88 5.12S17.82 22 15 22h-1c-2.83 0-4.24 0-5.12-.88S8 18.82 8 16z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8 19.5c-2.36 0-3.54 0-4.27-.73S3 16.86 3 14.5v-5c0-2.36 0-3.54.73-4.27S5.64 4.5 8 4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M14.5 16V8m0 0 2.5 2.5M14.5 8 12 10.5"
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
              d="M8.14 4.5C8 5.34 8 6.46 8 8v8c0 1.54 0 2.66.14 3.5H8c-2.36 0-3.54 0-4.27-.73S3 16.86 3 14.5v-5c0-2.36 0-3.54.73-4.27S5.64 4.5 8 4.5z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.88 2.88C8 3.76 8 5.18 8 8v8c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1c2.83 0 4.24 0 5.12-.88S21 18.82 21 16V8c0-2.83 0-4.24-.88-5.12S17.82 2 15 2h-1c-2.83 0-4.24 0-5.12.88m6.15 4.59a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06z"
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
              d="M6.62 4.5c-1.47.03-2.31.16-2.89.73C3 5.96 3 7.14 3 9.5v5c0 2.36 0 3.54.73 4.27.58.57 1.42.7 2.9.72a28 28 0 0 1-.13-3.4V7.9c0-1.33 0-2.47.12-3.4"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.88 2.88C8 3.76 8 5.18 8 8v8c0 2.83 0 4.24.88 5.12s2.3.88 5.12.88h1c2.83 0 4.24 0 5.12-.88S21 18.82 21 16V8c0-2.83 0-4.24-.88-5.12S17.82 2 15 2h-1c-2.83 0-4.24 0-5.12.88m6.15 4.59a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22V16a.75.75 0 0 0 1.5 0V9.81l1.22 1.22a.75.75 0 1 0 1.06-1.06z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconScreenShare;
