import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBootstrap = forwardRef<SVGSVGElement, IconProps>(
  function IconBootstrap(
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
              d="M17.67 3h-10a3 3 0 0 0-3 3v.84Q4.67 8 4.3 9.1A2.8 2.8 0 0 1 1.67 11v2c1.19 0 2.25.76 2.63 1.9q.37 1.1.37 2.26V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.84q0-1.16.37-2.26a2.8 2.8 0 0 1 2.63-1.9v-2a2.8 2.8 0 0 1-2.63-1.9 7 7 0 0 1-.37-2.26V6a3 3 0 0 0-3-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.42 12h2.92a2.08 2.08 0 1 1 0 4.16h-2.92V7.83h2.92a2.08 2.08 0 1 1 0 4.16z"
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
              d="M24.67 0h-24v24h24z"
              fill="none"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M17.67 3h-10a3 3 0 0 0-3 3v.84Q4.67 8 4.3 9.1A2.8 2.8 0 0 1 1.67 11v2c1.19 0 2.25.76 2.63 1.9q.37 1.1.37 2.26V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.84q0-1.16.37-2.26a2.8 2.8 0 0 1 2.63-1.9v-2a2.8 2.8 0 0 1-2.63-1.9 7 7 0 0 1-.37-2.26V6a3 3 0 0 0-3-3"
              fill="currentColor"
            />
            <path
              d="M13.34 16.92h-2.92a.76.76 0 0 1-.75-.75V7.84c0-.41.34-.75.75-.75h2.92A2.83 2.83 0 0 1 15.25 12a2.84 2.84 0 0 1-1.91 4.92m-2.17-1.5h2.17a1.33 1.33 0 1 0 0-2.66h-2.17zm0-4.17h2.17a1.33 1.33 0 1 0 0-2.66h-2.17z"
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
              d="M13.34 12.75h-2.17v2.67h2.17c.74 0 1.33-.6 1.33-1.33s-.6-1.34-1.33-1.34"
              fill="currentColor"
            />
            <path
              d="M13.34 8.58h-2.17v2.67h2.17c.74 0 1.33-.6 1.33-1.33s-.6-1.34-1.33-1.34"
              fill="currentColor"
            />
            <path
              d="M23.67 11a2.8 2.8 0 0 1-2.63-1.9 7 7 0 0 1-.37-2.27V6a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3v.84q0 1.16-.37 2.27a2.8 2.8 0 0 1-2.63 1.9v2c1.19 0 2.25.76 2.63 1.9q.37 1.1.37 2.26V18a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-.84q0-1.16.37-2.26a2.8 2.8 0 0 1 2.63-1.9zm-7.5 3.08a2.83 2.83 0 0 1-2.83 2.83h-2.92a.76.76 0 0 1-.75-.75V7.83c0-.41.34-.75.75-.75h2.92a2.83 2.83 0 0 1 1.91 4.91c.57.53.92 1.27.92 2.09"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBootstrap;
