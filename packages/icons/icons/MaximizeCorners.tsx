import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaximizeCorners = forwardRef<SVGSVGElement, IconProps>(
  function IconMaximizeCorners(
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
            d="M2 9V6.5A4.5 4.5 0 0 1 6.5 2H9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M15 2h2.5A4.5 4.5 0 0 1 22 6.5V9"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 16v1.5a4.5 4.5 0 0 1-4.5 4.5H16"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M9 22H6.5A4.5 4.5 0 0 1 2 17.5V15"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
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
              d="M2 9V6.5A4.5 4.5 0 0 1 6.5 2H9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15 2h2.5A4.5 4.5 0 0 1 22 6.5V9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 16v1.5a4.5 4.5 0 0 1-4.5 4.5H16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9 22H6.5A4.5 4.5 0 0 1 2 17.5V15"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
              fill="currentColor"
            />
            <path
              d="M2.75 9.97A.75.75 0 0 1 2 9.22V6.91C2 4.2 4.2 2 6.91 2h2.31a.75.75 0 1 1 0 1.5H6.91A3.4 3.4 0 0 0 3.5 6.91v2.31c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M21.25 9.97a.76.76 0 0 1-.75-.75V6.91a3.4 3.4 0 0 0-3.41-3.41h-2.31a.75.75 0 1 1 0-1.5h2.31C19.8 2 22 4.2 22 6.91v2.31c0 .42-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M17.09 22H15.7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.39a3.4 3.4 0 0 0 3.41-3.41V15.7c0-.41.34-.75.75-.75s.75.34.75.75v1.39C22 19.8 19.8 22 17.09 22"
              fill="currentColor"
            />
            <path
              d="M9.22 22H6.91A4.9 4.9 0 0 1 2 17.09v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31a3.4 3.4 0 0 0 3.41 3.41h2.31a.75.75 0 1 1 0 1.5"
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
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-5.97 19H7.91A4.9 4.9 0 0 1 3 16.09v-2.31c0-.41.34-.75.75-.75s.75.34.75.75v2.31a3.4 3.4 0 0 0 3.41 3.41h2.31a.75.75 0 1 1 0 1.5m0-16.5H7.91A3.4 3.4 0 0 0 4.5 7.91v2.31a.75.75 0 1 1-1.5 0V7.91C3 5.2 5.2 3 7.91 3h2.31a.75.75 0 1 1 0 1.5M21 16.09C21 18.8 18.8 21 16.09 21H14.7a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h1.39a3.4 3.4 0 0 0 3.41-3.41V14.7c0-.41.34-.75.75-.75s.75.34.75.75zm0-5.87c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.91a3.4 3.4 0 0 0-3.41-3.41h-2.31a.75.75 0 1 1 0-1.5h2.31C18.8 3 21 5.2 21 7.91z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMaximizeCorners;
