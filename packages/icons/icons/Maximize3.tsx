import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaximize3 = forwardRef<SVGSVGElement, IconProps>(
  function IconMaximize3(
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
              d="M9.67 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="m18.67 6-12 12"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.67 10V6h-4"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.67 14v4h4"
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
              opacity={duotone ? "0.4" : "1"}
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2"
              fill="currentColor"
            />
            <path
              d="M19.36 5.71a.8.8 0 0 0-.41-.41 1 1 0 0 0-.28-.05h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.19l-9.44 9.44V14a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v4q0 .15.06.29.12.28.41.41.12.05.28.05h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H8.48l9.44-9.44V10c0 .41.34.75.75.75s.75-.34.75-.75V6q0-.14-.06-.29"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2m2.56 8c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.81l-9.44 9.44h2.19c.41 0 .75.34.75.75s-.34.75-.75.75h-4q-.15 0-.29-.06a.8.8 0 0 1-.41-.41 1 1 0 0 1-.05-.28v-4c0-.41.34-.75.75-.75s.75.34.75.75v2.19l9.44-9.44h-2.19a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4q.15 0 .29.06.28.12.41.41.05.13.05.28z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMaximize3;
