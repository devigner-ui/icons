import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTruckRemove = forwardRef<SVGSVGElement, IconProps>(
  function IconTruckRemove(
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
              d="M15.67 2v10a2 2 0 0 1-2 2h-11V7.62A3.9 3.9 0 0 0 5.77 9a3.8 3.8 0 0 0 2.6-1.06q.46-.4.76-.95A4 4 0 0 0 8.31 2z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 14v3a3 3 0 0 1-3 3h-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-1a3 3 0 0 1-3-3v-3h11a2 2 0 0 0 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.96 9h-1.29a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.67 12v2h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.67 5A4 4 0 0 1 8.3 8a3.97 3.97 0 0 1-6.05-.94A3.97 3.97 0 0 1 5.67 1a4 4 0 0 1 4 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M6.74 6.04 4.63 3.93"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m6.71 3.96-2.1 2.11"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeMiterlimit="10"
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
              d="M5.67 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1.6 5.58a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.53.53.5-.5a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.5.5.53.53c.29.29.29.76 0 1.06"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.67 3v9a2 2 0 0 1-2 2h-11V7.62A3.9 3.9 0 0 0 5.76 9a3.8 3.8 0 0 0 2.6-1.06q.47-.4.77-.95A4 4 0 0 0 8.31 2h6.36a1 1 0 0 1 1 1"
              fill="currentColor"
            />
            <path
              d="M22.67 14v3a3 3 0 0 1-3 3h-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-1a3 3 0 0 1-3-3v-3h11a2 2 0 0 0 2-2V5h1.84c.72 0 1.38.39 1.74 1.01L20.96 9h-1.29a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.67 12.53V14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.29l1.45 2.54a2 2 0 0 1 .26.99"
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
              d="M22.17 15.5c.28 0 .5.22.5.5v1a3 3 0 0 1-3 3 3 3 0 0 0-3-3 3 3 0 0 0-3 3h-2a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1h9.5a2.5 2.5 0 0 0 2.5-2.5V6a1 1 0 0 1 1-1h.84c.72 0 1.38.39 1.74 1.01l.64 1.12a.25.25 0 0 1-.22.37 2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5z"
              fill="currentColor"
            />
            <path
              d="M8.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M16.67 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M22.67 12.53V14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3l1.44 2.54a2 2 0 0 1 .26.99"
              fill="currentColor"
            />
            <path
              d="M13.75 1.98H6.36a3.7 3.7 0 0 0-3.69 3.69v6.39a1 1 0 0 0 1 1h9.15c1.02 0 1.85-.83 1.85-1.85V2.9a.9.9 0 0 0-.92-.92M10.27 9.1a.77.77 0 0 1-1.06 0l-.53-.53-.55.55a.7.7 0 0 1-.53.22.7.7 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.55-.55-.53-.53a.75.75 0 0 1 0-1.06.77.77 0 0 1 1.07 0l.52.53.5-.51a.77.77 0 0 1 1.07 0c.3.3.3.77 0 1.07l-.5.5.52.52c.3.3.3.77 0 1.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTruckRemove;
