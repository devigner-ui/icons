import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconTruckTime = forwardRef<SVGSVGElement, IconProps>(
  function IconTruckTime(
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
            d="M15.47 2.5v10a2 2 0 0 1-2 2h-11V8.12a3.9 3.9 0 0 0 3.1 1.38c.97-.01 1.9-.39 2.6-1.06q.46-.4.76-.95a4 4 0 0 0-.82-4.99z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.09 20.02q-.71.47-1.62.48h-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-1a3 3 0 0 1-3-3v-1.26m1.76-1.74h9.24a2 2 0 0 0 2-2v-7h1.84c.72 0 1.38.39 1.74 1.01l1.71 2.99h-1.29a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3V17"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.47 22.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.47 22.5a2 2 0 0 0 2-2 2 2 0 0 0-2-2 2 2 0 0 0-2 2c0 1.1.9 2 2 2Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.47 12.5v2h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.47 5.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.72 4.25v1.5l-1.25.75"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
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
              opacity={duotone ? "0.4" : "1"}
              d="M15.47 2.5v10a2 2 0 0 1-2 2h-11V8.12a3.9 3.9 0 0 0 3.1 1.38 3.8 3.8 0 0 0 2.6-1.06q.46-.4.76-.95a4 4 0 0 0-.82-4.99z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.47 14.5v3a3 3 0 0 1-3 3h-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-1a3 3 0 0 1-3-3v-3h11a2 2 0 0 0 2-2v-7h1.84c.72 0 1.38.39 1.74 1.01l1.71 2.99h-1.29a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.47 22.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.47 22.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.47 12.5v2h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.47 5.5a4 4 0 0 1-4 4 4 4 0 1 1 4-4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5.72 4.25v1.5l-1.25.75"
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
              d="M5.5 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8m1 4.25c0 .26-.14.51-.36.64l-1.25.75a1 1 0 0 1-.38.11.75.75 0 0 1-.38-1.39l.89-.53V4.25c0-.41.34-.75.75-.75s.75.34.75.75v1.5z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.5 3.5v9a2 2 0 0 1-2 2h-11V8.12A3.9 3.9 0 0 0 5.59 9.5a3.8 3.8 0 0 0 2.6-1.06q.47-.4.77-.95a4 4 0 0 0-.82-4.99h6.36a1 1 0 0 1 1 1"
              fill="currentColor"
            />
            <path
              d="M22.5 14.5v3a3 3 0 0 1-3 3h-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2 2 2 0 0 0-2 2h-1a3 3 0 0 1-3-3v-3h11a2 2 0 0 0 2-2v-7h1.84c.72 0 1.38.39 1.74 1.01l1.71 2.99H19.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M8.5 22.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 22.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M22.5 13.03v1.47h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.29l1.45 2.54a2 2 0 0 1 .26.99"
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
              d="M21.5 15.5c.28 0 .5.22.5.5v1a3 3 0 0 1-3 3 3 3 0 0 0-3-3 3 3 0 0 0-3 3h-2a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1h9.5a2.5 2.5 0 0 0 2.5-2.5V6a1 1 0 0 1 1-1h.84c.72 0 1.38.39 1.74 1.01l.64 1.12a.25.25 0 0 1-.22.37 2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 0 2.5 2.5z"
              fill="currentColor"
            />
            <path
              d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              fill="currentColor"
            />
            <path
              d="M22 12.53V14h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1.3l1.44 2.54a2 2 0 0 1 .26.99"
              fill="currentColor"
            />
            <path
              d="M13.08 2H5.69A3.7 3.7 0 0 0 2 5.69v6.39a1 1 0 0 0 1 1h9.15c1.02 0 1.85-.83 1.85-1.85V2.92a.9.9 0 0 0-.92-.92m-3.7 5.91c0 .26-.14.51-.36.64l-1.25.75a.75.75 0 0 1-1.03-.25.75.75 0 0 1 .25-1.03l.9-.53V6.41c0-.41.33-.75.74-.75s.75.34.75.75z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconTruckTime;
