import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBatteryDisable = forwardRef<SVGSVGElement, IconProps>(
  function IconBatteryDisable(
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
              d="M21.17 9.5c1.5 0 1.5.5 1.5 1.5v2c0 1 0 1.5-1.5 1.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="m4.67 21.5 12-19"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.67 5c-4 0-5 1-5 5v4c0 3.4.72 4.63 3.39 4.92"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13.67 19c4 0 5-1 5-5v-4c0-3.39-.72-4.63-3.37-4.92"
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
              d="m21.09 9-.52-.02a.7.7 0 0 0-.7.7v4.65c0 .39.31.7.7.7l.54-.02c1.56-.18 1.56-1.28 1.56-2.08v-1.86c0-.8 0-1.9-1.58-2.07"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M15.17 4.87 6.19 19.09c-2.65-.38-3.52-1.82-3.52-5.23v-3.72c0-4.1 1.25-5.35 5.35-5.35h5.58q.87 0 1.57.08"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.95 10.14v3.72c0 2.95-2.4 5.35-5.35 5.35H8.12l8.78-13.9c1.52.69 2.05 2.15 2.05 4.83"
              fill="currentColor"
            />
            <path
              d="M4.67 22.25a1 1 0 0 1-.4-.12.74.74 0 0 1-.23-1.03l12-19a.75.75 0 0 1 1.03-.23c.35.22.46.68.23 1.03l-12 19a.7.7 0 0 1-.63.35"
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
              d="m21.09 9-.52-.02a.7.7 0 0 0-.7.7v4.65c0 .39.31.7.7.7l.54-.02c1.56-.18 1.56-1.28 1.56-2.08v-1.86c0-.8 0-1.9-1.58-2.07"
              fill="currentColor"
            />
            <path
              d="M18.95 10.14v3.72c0 2.95-2.4 5.35-5.35 5.35H9.93a1 1 0 0 1-.85-1.53L16.34 6.2a1 1 0 0 1 1.62-.11c.72.83.99 2.12.99 4.05"
              fill="currentColor"
            />
            <path
              d="M17.07 1.87a.74.74 0 0 0-1.03.23l-1.71 2.71-.73-.02H8.02c-4.1 0-5.35 1.25-5.35 5.35v3.72c0 3.05.7 4.51 2.74 5.06L4.04 21.1a.74.74 0 0 0 .23 1.03q.18.12.4.12c.25 0 .49-.12.63-.35l12-19a.74.74 0 0 0-.23-1.03"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBatteryDisable;
