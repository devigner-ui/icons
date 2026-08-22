import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaximize2 = forwardRef<SVGSVGElement, IconProps>(
  function IconMaximize2(
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
              d="M2.67 9V6.5A4.5 4.5 0 0 1 7.17 2h2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.67 2h2.5a4.5 4.5 0 0 1 4.5 4.5V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 16v1.5a4.5 4.5 0 0 1-4.5 4.5h-1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.67 22h-2.5a4.5 4.5 0 0 1-4.5-4.5V15"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M3.42 9.97a.75.75 0 0 1-.75-.75V6.91C2.67 4.2 4.87 2 7.58 2h2.31a.75.75 0 1 1 0 1.5H7.58a3.4 3.4 0 0 0-3.41 3.41v2.31c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M21.92 9.97a.76.76 0 0 1-.75-.75V6.91a3.4 3.4 0 0 0-3.41-3.41h-2.31a.75.75 0 1 1 0-1.5h2.31c2.71 0 4.91 2.2 4.91 4.91v2.31c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.76 22h-1.39a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.39a3.4 3.4 0 0 0 3.41-3.41V15.7c0-.41.34-.75.75-.75s.75.34.75.75v1.39c0 2.71-2.2 4.91-4.91 4.91"
              fill="currentColor"
            />
            <path
              d="M9.89 22H7.58a4.9 4.9 0 0 1-4.91-4.91v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31a3.4 3.4 0 0 0 3.41 3.41h2.31a.75.75 0 1 1 0 1.5"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-5.97 19H8.58a4.9 4.9 0 0 1-4.91-4.91v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31a3.4 3.4 0 0 0 3.41 3.41h2.31a.75.75 0 1 1 0 1.5m0-16.5H8.58a3.4 3.4 0 0 0-3.41 3.41v2.31a.75.75 0 1 1-1.5 0V7.91C3.67 5.2 5.87 3 8.58 3h2.31a.75.75 0 1 1 0 1.5m10.78 11.59c0 2.71-2.2 4.91-4.91 4.91h-1.39a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.39a3.4 3.4 0 0 0 3.41-3.41V14.7c0-.41.34-.75.75-.75s.75.34.75.75zm0-5.87c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.91a3.4 3.4 0 0 0-3.41-3.41h-2.31a.75.75 0 1 1 0-1.5h2.31c2.71 0 4.91 2.2 4.91 4.91z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMaximize2;
