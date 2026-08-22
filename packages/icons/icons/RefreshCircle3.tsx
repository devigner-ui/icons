import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRefreshCircle3 = forwardRef<SVGSVGElement, IconProps>(
  function IconRefreshCircle3(
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M8.68 14.51q.27.45.65.83a4.73 4.73 0 0 0 8-2.67"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.01 11.33a4.73 4.73 0 0 1 8.65-1.84"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.49 17.18v-2.67h2.67"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.85 6.82v2.67h-2.67"
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
              d="M12.67 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20"
              fill="currentColor"
            />
            <path
              d="M17.43 11.93a.74.74 0 0 0-.85.64 4 4 0 0 1-1.11 2.25 4 4 0 0 1-5.07.45h.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75H8.48a.76.76 0 0 0-.75.75v2.67c0 .41.34.75.75.75s.75-.34.75-.75v-.94a5.46 5.46 0 0 0 7.3-.36 5.4 5.4 0 0 0 1.53-3.1.73.73 0 0 0-.63-.86"
              fill="currentColor"
            />
            <path
              d="M8.01 12.08c.37 0 .69-.27.74-.64.12-.87.51-1.65 1.11-2.25a4 4 0 0 1 5.07-.45h-.75a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h2.67c.41 0 .75-.34.75-.75V6.82a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v.94a5.41 5.41 0 0 0-8.82 3.46c-.06.41.23.79.64.85z"
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
              d="M12.67 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m-5.4 9.23c.17-1.19.7-2.26 1.53-3.1 2-1.99 5.15-2.1 7.29-.36v-.95c0-.41.34-.75.75-.75s.75.34.75.75v2.67c0 .41-.34.75-.75.75h-2.67a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h.75a3.96 3.96 0 0 0-6.18 2.7.74.74 0 0 1-.74.64l-.11-.01a.74.74 0 0 1-.62-.84m9.27 4.64a5.45 5.45 0 0 1-7.3.36v.94c0 .41-.34.75-.75.75a.76.76 0 0 1-.75-.75V14.5c0-.41.34-.75.75-.75h2.67c.41 0 .75.34.75.75s-.34.75-.75.75h-.75a3.96 3.96 0 0 0 6.18-2.7c.06-.41.43-.7.85-.64.41.06.69.44.64.85a5.5 5.5 0 0 1-1.54 3.11"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRefreshCircle3;
