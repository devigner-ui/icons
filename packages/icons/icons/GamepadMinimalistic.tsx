import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconGamepadMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconGamepadMinimalistic(
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
              d="M8.5 11v3M7 12.5h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              d="m21.92 17.38-1.09-4.52c-.6-2.55-.91-3.83-1.78-4.67q-.33-.31-.73-.56C17.28 7 15.94 7 13.24 7h-2.48c-2.7 0-4.04 0-5.08.63q-.39.24-.73.56c-.87.84-1.17 2.12-1.78 4.67l-1.09 4.52a2.95 2.95 0 0 0 2.26 3.54c1.38.31 2.8-.34 3.42-1.57l.12-.26a3.4 3.4 0 0 1 3.06-1.85h2.12c1.3 0 2.48.72 3.06 1.85l.12.26a3.06 3.06 0 0 0 3.42 1.57 2.95 2.95 0 0 0 2.26-3.54"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 7V6a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1V3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M16 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
              />
              <path
                d="M18 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                fill="currentColor"
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
              d="M13.17 8c2.54 0 3.81 0 4.79.61a4 4 0 0 1 .68.55c.82.8 1.1 2.04 1.69 4.52l1.02 4.37a2.86 2.86 0 0 1-5.35 1.9l-.12-.24a3.2 3.2 0 0 0-2.88-1.8h-2a3.2 3.2 0 0 0-2.88 1.8l-.12.25a2.86 2.86 0 0 1-5.35-1.91l1.02-4.37c.58-2.48.87-3.71 1.69-4.52a4 4 0 0 1 .68-.55C7.02 8 8.3 8 10.83 8z"
              fill="currentColor"
            />
            <path
              d="M9.25 12a.75.75 0 0 0-1.5 0v.75H7a.75.75 0 0 0 0 1.5h.75V15a.75.75 0 0 0 1.5 0v-.75H10a.75.75 0 0 0 0-1.5h-.75z"
              fill="currentColor"
            />
            <path d="M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2" fill="currentColor" />
            <path
              d="M18 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
              fill="currentColor"
            />
            <path
              d="M15.75 4a.75.75 0 0 0-1.5 0v1c0 .14-.11.25-.25.25h-1c-.97 0-1.75.78-1.75 1.75v1h1.5V7c0-.14.11-.25.25-.25h1c.97 0 1.75-.78 1.75-1.75z"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 3.25c.41 0 .75.34.75.75v1c0 .97-.78 1.75-1.75 1.75h-1a.25.25 0 0 0-.25.25v1h.42c2.54 0 3.81 0 4.79.61a4 4 0 0 1 .68.55c.82.8 1.1 2.04 1.69 4.52l1.02 4.37a2.86 2.86 0 0 1-5.35 1.9l-.12-.24a3.2 3.2 0 0 0-2.88-1.8h-2a3.2 3.2 0 0 0-2.88 1.8l-.12.25a2.86 2.86 0 0 1-5.35-1.91l1.02-4.37c.58-2.48.87-3.71 1.69-4.52a4 4 0 0 1 .68-.55C7.02 8 8.3 8 10.83 8h.42V7c0-.97.78-1.75 1.75-1.75h1c.14 0 .25-.11.25-.25V4c0-.41.34-.75.75-.75M16 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-7.5-.75c.41 0 .75.34.75.75v.75H10a.75.75 0 0 1 0 1.5h-.75V15a.75.75 0 0 1-1.5 0v-.75H7a.75.75 0 0 1 0-1.5h.75V12c0-.41.34-.75.75-.75M17 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconGamepadMinimalistic;
