import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconColorSwatch = forwardRef<SVGSVGElement, IconProps>(
  function IconColorSwatch(
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
            d="M2 4.5C2 3 3 2 4.5 2h3C9 2 10 3 10 4.5V18a4 4 0 0 1-1.14 2.79l-.04.04-.28.25a3.5 3.5 0 0 1-1.32.73 4 4 0 0 1-2.02.11l-.39-.1a4 4 0 0 1-1.27-.66l-.01-.01q-.2-.15-.36-.32l-.33-.37a5 5 0 0 1-.49-.8v-.01l-.01-.02a6 6 0 0 1-.26-.83A4 4 0 0 1 2 18V8.57"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6a4 4 0 0 0 2.82-1.17l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M4.81 21.82a4 4 0 0 1-1.64-.99 4 4 0 0 0 1.64.99Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M18.37 11.29 15.66 14l-6.8 6.79A4 4 0 0 0 10 18V8.34l2.7-2.71c1.07-1.06 2.49-1.06 3.55 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54Z"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M7 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
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
              d="M10 4.5V18a4 4 0 0 1-1.14 2.79l-.04.04-.28.25a3.5 3.5 0 0 1-1.32.73 4 4 0 0 1-2.02.11l-.39-.1a4 4 0 0 1-1.27-.66l-.01-.01q-.2-.15-.36-.32l-.33-.37a5 5 0 0 1-.49-.8v-.01l-.01-.02-.16-.44-.1-.39A4 4 0 0 1 2 18V4.5C2 3 3 2 4.5 2h3C9 2 10 3 10 4.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6a4 4 0 0 0 2.82-1.17l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.81 21.82a4 4 0 0 1-1.64-.99 4 4 0 0 0 1.64.99"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.37 11.29 15.66 14l-6.8 6.79A4 4 0 0 0 10 18V8.34l2.71-2.71c1.06-1.06 2.48-1.06 3.54 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M6 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
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
              d="M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6a4 4 0 0 0 2.82-1.17l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.6" : "1"}
              d="M18.37 11.29 15.66 14l-6.8 6.79A4 4 0 0 0 10 18V8.34l2.71-2.71c1.06-1.06 2.48-1.06 3.54 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54"
              fill="currentColor"
            />
            <path
              d="M7.5 2h-3C3 2 2 3 2 4.5V18q0 .4.08.8l.1.39.17.46v.01q.2.42.49.8l.33.37q.16.17.36.32l.01.01a5 5 0 0 0 .81.49q.22.1.46.17l.39.1a4 4 0 0 0 2.02-.11 4.5 4.5 0 0 0 1.6-.98l.04-.04A4 4 0 0 0 10 18V4.5C10 3 9 2 7.5 2M6 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
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
              d="M22 16.5v3a2.5 2.5 0 0 1-2.5 2.5h-7.14a1 1 0 0 1-.71-1.7l5.87-6q.3-.3.71-.3h1.27a2.5 2.5 0 0 1 2.5 2.5"
              fill="currentColor"
            />
            <path
              d="M18.37 11.29 15.66 14l-2.46 2.45a1 1 0 0 1-1.71-.7V7.26q.01-.41.29-.71l.92-.92a2.5 2.5 0 0 1 3.54 0l2.12 2.12c.99.98.99 2.56.01 3.54"
              fill="currentColor"
            />
            <path
              d="M7.5 2h-3C3 2 2 3 2 4.5V18q0 .4.08.8l.1.39.17.46v.01a5 5 0 0 0 .82 1.17q.17.17.36.32l.01.01q.38.28.8.49h.01a4 4 0 0 0 .85.27 4 4 0 0 0 2.02-.11 4.5 4.5 0 0 0 1.6-.98l.04-.04A4 4 0 0 0 10 18V4.5C10 3 9 2 7.5 2M6 19.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconColorSwatch;
