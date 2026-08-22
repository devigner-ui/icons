import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconVideoTick = forwardRef<SVGSVGElement, IconProps>(
  function IconVideoTick(
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
              d="M22.67 9v6q0 .33-.02.65a4.46 4.46 0 0 0-6.29-.66 4.45 4.45 0 0 0-1.04 5.83q.4.68 1.01 1.16-.32.02-.66.02h-6c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M3.19 7.11h18.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.19 2.11v4.86"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.15 2.11v4.41"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M23.67 18.5a4.5 4.5 0 0 1-7.33 3.48h-.01q-.6-.48-1.01-1.16a4.5 4.5 0 1 1 8.35-2.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m17.42 18.5 1.11 1.11 2.4-2.22"
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
              d="M22.65 15.65a4.46 4.46 0 0 0-6.29-.66 4.45 4.45 0 0 0-1.04 5.83q.4.68 1.01 1.16h.01a4.4 4.4 0 0 0 5.79-.1q.53-.46.89-1.06a4.5 4.5 0 0 0-.37-5.17m-1.22 2.29-2.4 2.22a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-1.11-1.11a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.6.6 1.87-1.73a.76.76 0 0 1 1.06.04c.29.31.27.78-.04 1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 7.81v7.89l-.02-.03-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36 4 4 0 0 0 .86 1.02l.16.14h.01l.03.02h-7.9c-3.64 0-5.81-2.17-5.81-5.81V7.81q0-.77.13-1.45C3.31 3.61 5.34 2.01 8.44 2h8.46c3.1.01 5.13 1.61 5.64 4.36q.13.68.13 1.45"
              fill="currentColor"
            />
            <path
              d="M22.67 7.81v.05h-20v-.05q0-.77.13-1.45h5.64V2h1.5v4.36h5.46V2h1.5v4.36h5.64q.13.68.13 1.45"
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
              d="M22.65 15.65a4.46 4.46 0 0 0-6.29-.66 4.45 4.45 0 0 0-1.04 5.83q.4.68 1.01 1.16h.01a4.4 4.4 0 0 0 5.79-.1q.53-.46.89-1.06a4.5 4.5 0 0 0-.37-5.17m-1.22 2.29-2.4 2.22a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-1.11-1.11a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.6.6 1.87-1.73a.76.76 0 0 1 1.06.04c.29.31.27.78-.04 1.06"
              fill="currentColor"
            />
            <path
              d="M15.4 5.86V2.5a.5.5 0 0 0-.5-.5h-4.46a.5.5 0 0 0-.5.5v3.36c0 .28.22.5.5.5h4.46a.5.5 0 0 0 .5-.5"
              fill="currentColor"
            />
            <path
              d="M7.92 2.02C5.36 2.18 3.61 3.5 2.96 5.7a.5.5 0 0 0 .48.66h4.5a.5.5 0 0 0 .5-.5V2.52a.5.5 0 0 0-.52-.5"
              fill="currentColor"
            />
            <path
              d="M17.42 2.01c2.56.16 4.31 1.48 4.96 3.68a.5.5 0 0 1-.48.66h-4.5a.5.5 0 0 1-.5-.5V2.51a.5.5 0 0 1 .52-.5"
              fill="currentColor"
            />
            <path
              d="M22.67 8.36v4.38a.5.5 0 0 1-.72.44 6 6 0 0 0-8.78 5.32c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H8.48a5.8 5.8 0 0 1-5.81-5.81V8.36c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoTick;
