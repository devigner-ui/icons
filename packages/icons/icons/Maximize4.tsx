import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMaximize4 = forwardRef<SVGSVGElement, IconProps>(
  function IconMaximize4(
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
              d="M3.67 15v6h6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M21.67 9V3h-6"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m21.67 3-7.5 7.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M11.17 13.5 3.67 21"
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
              d="M19.36 5.71a.8.8 0 0 0-.41-.41 1 1 0 0 0-.28-.05h-4a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.19l-3.72 3.72a.75.75 0 0 0 0 1.06q.23.22.53.22t.53-.22l3.72-3.72V10c0 .41.34.75.75.75s.75-.34.75-.75V6q0-.14-.06-.29"
              fill="currentColor"
            />
            <path
              d="M12.2 12.47a.75.75 0 0 0-1.06 0l-3.72 3.72V14a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v4q0 .15.06.29.12.28.41.41.12.05.28.05h4c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H8.48l3.72-3.72a.75.75 0 0 0 0-1.06"
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
              d="M16.86 2H8.48C4.84 2 2.67 4.17 2.67 7.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22.67 4.17 20.5 2 16.86 2M12.2 13.53l-3.72 3.72h2.19c.41 0 .75.34.75.75s-.34.75-.75.75h-4q-.15 0-.29-.06a.8.8 0 0 1-.41-.41 1 1 0 0 1-.05-.28v-4c0-.41.34-.75.75-.75s.75.34.75.75v2.19l3.72-3.72a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06M19.42 10c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V7.81l-3.72 3.72a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l3.72-3.72h-2.19a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h4q.15 0 .29.06.28.12.41.41.05.13.05.28z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMaximize4;
