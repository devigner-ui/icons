import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconFolderMove = forwardRef<SVGSVGElement, IconProps>(
  function IconFolderMove(
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
              d="M2 12V6.95c0-.88 0-1.32.07-1.7a4 4 0 0 1 3.19-3.18C5.63 2 6.06 2 6.95 2c.39 0 .58 0 .77.02a4 4 0 0 1 2.18.9c.14.12.28.26.55.53L11 4a9 9 0 0 0 1.71 1.5 4 4 0 0 0 .85.35c.54.15 1.11.15 2.27.15h.37c2.63 0 3.95 0 4.8.77l.23.22c.77.86.77 2.18.77 4.8V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17-.65-.65-.94-1.53-1.07-2.83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="M2 15h11m0 0-4.12-3M13 15l-4.12 3"
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
              d="M22 14v-2.2c0-2.63 0-3.95-.77-4.8l-.22-.23C20.15 6 18.83 6 16.2 6h-.38c-1.16 0-1.73 0-2.27-.15a4 4 0 0 1-.85-.35c-.49-.28-.9-.68-1.71-1.5l-.55-.55a4 4 0 0 0-2.73-1.43C7.53 2 7.34 2 6.95 2c-.88 0-1.32 0-1.7.07a4 4 0 0 0-3.18 3.19C2 5.63 2 6.06 2 6.95v8.8c.03 2.64.2 4.1 1.17 5.08C4.34 22 6.23 22 10 22h4c3.77 0 5.66 0 6.83-1.17S22 17.77 22 14"
              fill="currentColor"
            />
            <path
              d="M9.32 11.4a.75.75 0 0 0-.89 1.2l2.26 1.65H2v1.5h8.7l-2.27 1.64a.75.75 0 0 0 .89 1.22l4.12-3a.75.75 0 0 0 0-1.22z"
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
              d="M22 11.8V14c0 3.77 0 5.66-1.17 6.83S17.77 22 14 22h-4c-3.77 0-5.66 0-6.83-1.17-.97-.98-1.14-2.44-1.16-5.08h8.68l-2.26 1.64a.75.75 0 0 0 .89 1.22l4.12-3a.75.75 0 0 0 0-1.22l-4.12-3a.75.75 0 0 0-.89 1.22l2.26 1.64H2v-7.3c0-.88 0-1.32.07-1.7a4 4 0 0 1 3.19-3.18C5.63 2 6.06 2 6.95 2c.39 0 .58 0 .77.02a4 4 0 0 1 2.18.9c.14.12.28.26.55.53L11 4a9 9 0 0 0 1.71 1.5 4 4 0 0 0 .85.35c.54.15 1.11.15 2.27.15h.37c2.63 0 3.95 0 4.8.77l.23.22c.77.86.77 2.18.77 4.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconFolderMove;
