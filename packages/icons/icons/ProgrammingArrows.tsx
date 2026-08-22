import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconProgrammingArrows = forwardRef<SVGSVGElement, IconProps>(
  function IconProgrammingArrows(
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
              d="M19.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M19.67 16V6.5a2 2 0 0 0-2-2h-5.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m14.67 2-3 2.5 3 2.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.67 8v9.5c0 1.1.9 2 2 2h5.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m10.67 22 3-2.5-3-2.5"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M5.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
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
              d="M17.67 3.75h-3.93l1.41-1.17a.76.76 0 0 0 .1-1.06.76.76 0 0 0-1.06-.1l-3 2.5a.76.76 0 0 0 0 1.16l3 2.5q.22.18.48.17.34 0 .58-.27a.75.75 0 0 0-.1-1.06l-1.41-1.17h3.93c.69 0 1.25.56 1.25 1.25V16c0 .41.34.75.75.75s.75-.34.75-.75V6.5a2.75 2.75 0 0 0-2.75-2.75"
              fill="currentColor"
            />
            <path
              d="M19.67 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m14.15 18.92-3-2.5a.75.75 0 0 0-1.06.1.75.75 0 0 0 .1 1.06l1.41 1.17H7.67c-.69 0-1.25-.56-1.25-1.25V8a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v9.5a2.75 2.75 0 0 0 2.75 2.75h3.93l-1.41 1.17a.76.76 0 0 0-.1 1.06q.24.27.58.27.26 0 .48-.17l3-2.5a.76.76 0 0 0 0-1.16"
              fill="currentColor"
            />
            <path d="M5.67 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" fill="currentColor" />
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
              d="m20.4 16.1.02-.1V6.5a2.75 2.75 0 0 0-2.75-2.75h-3.93l1.41-1.17a.76.76 0 0 0 .1-1.06.76.76 0 0 0-1.06-.1l-3 2.5a.76.76 0 0 0 0 1.16l3 2.5q.22.17.48.17.34 0 .58-.27a.75.75 0 0 0-.1-1.06l-1.41-1.17h3.93c.69 0 1.25.56 1.25 1.25V16l.02.1a3 3 0 1 0 1.46 0"
              fill="currentColor"
            />
            <path
              d="m14.15 18.92-3-2.5a.75.75 0 0 0-1.06.1.75.75 0 0 0 .1 1.06l1.41 1.17H7.67c-.69 0-1.25-.56-1.25-1.25V8l-.02-.1a3 3 0 1 0-1.46 0l-.02.1v9.5a2.75 2.75 0 0 0 2.75 2.75h3.93l-1.41 1.17a.76.76 0 0 0-.1 1.06q.24.27.58.27.26 0 .48-.17l3-2.5a.76.76 0 0 0 0-1.16"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconProgrammingArrows;
