import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTaskSquare = forwardRef<SVGSVGElement, IconProps>(
  function IconTaskSquare(
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
              opacity={duotone ? "0.4" : "1"}
              d="M13.04 8.88h5.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.05 8.88.75.75 2.25-2.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.04 15.88h5.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m7.05 15.88.75.75 2.25-2.25"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38c0 3.64 2.17 5.81 5.81 5.81h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M18.98 8.87c0 .41-.33.75-.75.75h-5.25a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.25c.42 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="m10.64 7.9-2.25 2.25a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.75-.75a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.22.22 1.72-1.72a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06"
              fill="currentColor"
            />
            <path
              d="M18.98 15.87c0 .41-.33.75-.75.75h-5.25a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.25c.42 0 .75.34.75.75"
              fill="currentColor"
            />
            <path
              d="m10.64 14.9-2.25 2.25a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.75-.75a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.22.22 1.72-1.72a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.38c0 3.64 2.17 5.81 5.81 5.81h8.38c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m-6.22 12.9-2.25 2.25a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.75-.75a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.22.22 1.72-1.72a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06m0-7-2.25 2.25a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.75-.75a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.22.22 1.72-1.72a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06m7.59 8.72h-5.25a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.25a.75.75 0 1 1 0 1.5m0-7h-5.25a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h5.25a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTaskSquare;
