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
            d="M1.5 8.5c0-5 2-7 7-7h6c5 0 7 2 7 7v6q0 .34-.02.67l-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36 4 4 0 0 0 .86 1.02l.16.14q-.32.02-.67.02h-6c-5 0-7-2-7-7v-1.97"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M2.02 6.61h18.96"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M8.02 1.61v4.86"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M14.98 1.61v4.41"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="M22.5 18a4.5 4.5 0 0 1-7.33 3.48h-.01q-.6-.48-1.01-1.16A4.5 4.5 0 1 1 22.5 18Z"
            strokeWidth={strokeWidth}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="currentColor"
          />
          <path
            d="m16.25 18 1.11 1.11 2.4-2.22"
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
              d="M21.47 8.5v6q0 .33-.02.65a4.46 4.46 0 0 0-6.29-.66 4.45 4.45 0 0 0-1.04 5.83q.4.68 1.01 1.16-.32.02-.66.02h-6c-5 0-7-2-7-7v-6c0-5 2-7 7-7h6c5 0 7 2 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M1.99 6.61h18.96"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.99 1.61v4.86"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.95 1.61v4.41"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M22.47 18a4.5 4.5 0 0 1-7.33 3.48h-.01q-.6-.48-1.01-1.16A4.5 4.5 0 1 1 22.47 18"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m16.22 18 1.11 1.11 2.4-2.22"
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
              d="M21.5 15.13a4.46 4.46 0 0 0-6.29-.66 4.45 4.45 0 0 0-1.04 5.83q.4.68 1.01 1.16h.01a4.4 4.4 0 0 0 5.79-.1q.53-.46.89-1.06a4.5 4.5 0 0 0-.37-5.17m-1.22 2.29-2.4 2.22a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-1.11-1.11a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.6.6 1.87-1.73a.76.76 0 0 1 1.06.04c.29.31.27.78-.04 1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M21.52 7.29v7.89l-.02-.03-.14-.17-.03-.04a4.5 4.5 0 0 0-7.16 5.36 4 4 0 0 0 .86 1.02l.16.14h.01l.03.02h-7.9c-3.64 0-5.81-2.17-5.81-5.81V7.29q0-.77.13-1.45c.51-2.75 2.54-4.35 5.64-4.36h8.46c3.1.01 5.13 1.61 5.64 4.36q.13.68.13 1.45"
              fill="currentColor"
            />
            <path
              d="M21.52 7.29v.05h-20v-.05q0-.77.13-1.45h5.64V1.48h1.5v4.36h5.46V1.48h1.5v4.36h5.64q.13.68.13 1.45"
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
              d="M21.5 15.13a4.46 4.46 0 0 0-6.29-.66 4.45 4.45 0 0 0-1.04 5.83q.4.68 1.01 1.16h.01a4.4 4.4 0 0 0 5.79-.1q.53-.46.89-1.06a4.5 4.5 0 0 0-.37-5.17m-1.22 2.29-2.4 2.22a.8.8 0 0 1-.51.2.7.7 0 0 1-.53-.22l-1.11-1.11a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.6.6 1.87-1.73a.76.76 0 0 1 1.06.04c.29.31.27.78-.04 1.06"
              fill="currentColor"
            />
            <path
              d="M14.25 5.34V1.98a.5.5 0 0 0-.5-.5H9.29a.5.5 0 0 0-.5.5v3.36c0 .28.22.5.5.5h4.46a.5.5 0 0 0 .5-.5"
              fill="currentColor"
            />
            <path
              d="M6.77 1.5c-2.56.16-4.31 1.48-4.96 3.68a.5.5 0 0 0 .48.66h4.5a.5.5 0 0 0 .5-.5V2a.5.5 0 0 0-.52-.5"
              fill="currentColor"
            />
            <path
              d="M16.27 1.49c2.56.16 4.31 1.48 4.96 3.68a.5.5 0 0 1-.48.66h-4.5a.5.5 0 0 1-.5-.5V1.99a.5.5 0 0 1 .52-.5"
              fill="currentColor"
            />
            <path
              d="M21.52 7.84v4.38a.5.5 0 0 1-.72.44 6 6 0 0 0-8.78 5.32c0 .81.32 1.85.72 2.72.16.35-.08.78-.47.78H7.33a5.8 5.8 0 0 1-5.81-5.81V7.84c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconVideoTick;
