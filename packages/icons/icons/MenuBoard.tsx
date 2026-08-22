import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconMenuBoard = forwardRef<SVGSVGElement, IconProps>(
  function IconMenuBoard(
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
              d="m22.6 6.76-3.37 13.53A2.2 2.2 0 0 1 17.05 22H3.91a2.26 2.26 0 0 1-2.14-2.93L5.98 5.55a2.25 2.25 0 0 1 2.14-1.59h12.3c.95 0 1.74.58 2.07 1.38q.29.66.11 1.42"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 22h4.78c1.29 0 2.3-1.09 2.21-2.38L22.67 6"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m10.35 6.38 1.04-4.32"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m17.05 6.39.94-4.34"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.37 12h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.37 16h8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
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
              d="M22.66 6.02q.03.36-.06.74l-3.37 13.53A2.2 2.2 0 0 1 17.05 22H3.91a2.26 2.26 0 0 1-2.14-2.93L5.98 5.54a2.2 2.2 0 0 1 2.14-1.58h12.3a2.2 2.2 0 0 1 2.24 2.06"
              fill="currentColor"
            />
            <path
              d="M23.66 19.62A2.2 2.2 0 0 1 21.45 22h-4.4c1.04 0 1.94-.7 2.18-1.71L22.6 6.76q.09-.38.06-.74l.01-.02z"
              fill="currentColor"
            />
            <path
              d="m10.35 7.13-.18-.02a.75.75 0 0 1-.55-.91l1.04-4.32a.75.75 0 1 1 1.46.36l-1.04 4.32a.75.75 0 0 1-.73.57"
              fill="currentColor"
            />
            <path
              d="m17.05 7.14-.16-.02a.77.77 0 0 1-.58-.89l.94-4.34a.76.76 0 0 1 .89-.58c.4.09.66.49.58.89l-.94 4.34a.74.74 0 0 1-.73.6"
              fill="currentColor"
            />
            <path
              d="M16.37 12.75h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M15.37 16.75h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
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
              d="m21.57 9.85.59 9.89a.7.7 0 0 1-.18.53.7.7 0 0 1-.53.23h-2.73l2.16-10.65zM22.67 6l-.01.02q.03.36-.06.74l-7.37 13.53A2.2 2.2 0 0 1 13.05 22h8.4a2.2 2.2 0 0 0 2.21-2.38z"
              fill="currentColor"
            />
            <path
              d="M12.12 2.24a.76.76 0 0 0-.55-.91.76.76 0 0 0-.91.55l-.5 2.07h1.54z"
              fill="currentColor"
            />
            <path
              d="M18.72 2.21a.74.74 0 0 0-.58-.89.75.75 0 0 0-.89.58l-.45 2.07h1.54z"
              fill="currentColor"
            />
            <path
              d="M22.49 5.33a2.2 2.2 0 0 0-2.07-1.37h-2.08l-.56 2.59a.76.76 0 0 1-.73.59l-.16-.02a.77.77 0 0 1-.58-.89l.49-2.28h-5.1l-.63 2.6a.75.75 0 0 1-.73.57l-.18-.02a.75.75 0 0 1-.55-.91l.54-2.25H8.12c-.98 0-1.85.64-2.14 1.58L1.77 19.07A2.26 2.26 0 0 0 3.91 22h13.14c1.04 0 1.94-.7 2.18-1.71L22.6 6.76a2.3 2.3 0 0 0-.11-1.43m-7.12 11.42h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75m1-4h-8a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h8c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconMenuBoard;
