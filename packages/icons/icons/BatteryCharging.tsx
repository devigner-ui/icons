import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBatteryCharging = forwardRef<SVGSVGElement, IconProps>(
  function IconBatteryCharging(
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
              opacity={duotone ? "0.4" : "1"}
              d="m10.67 8-1.89 2.5a1 1 0 0 0 .86 1.5h2.3a1 1 0 0 1 .87 1.5L10.67 16"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.67 19c-4 0-5-1-5-5v-4c0-4 1-5 5-5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.67 5c4 0 5 1 5 5v4c0 4-1 5-5 5"
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
              d="M13.6 4.79H8.02c-4.1 0-5.35 1.25-5.35 5.35v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35"
              fill="currentColor"
            />
            <path
              d="m21.09 9-.52-.02a.7.7 0 0 0-.7.7v4.65c0 .39.31.7.7.7l.54-.02c1.56-.18 1.56-1.28 1.56-2.08v-1.86c0-.8 0-1.9-1.58-2.07"
              fill="currentColor"
            />
            <path
              d="M10.68 16.24a1 1 0 0 1-.49-.18.76.76 0 0 1-.08-1.06l1.8-2.11q.01-.04-.02-.09-.03-.06-.11-.06H9.79a1.61 1.61 0 0 1-1.41-2.43l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19q.03-.04.05.05.03.06.11.06h2.01a1.61 1.61 0 0 1 1.41 2.43l-.08.11-1.87 2.19a.8.8 0 0 1-.59.26"
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
              d="M13.6 4.79H8.02c-4.1 0-5.35 1.25-5.35 5.35v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35m-.4 8.89-.08.11-1.87 2.19a.76.76 0 0 1-1.06.08.76.76 0 0 1-.08-1.06l1.8-2.11q.01-.04-.02-.09-.03-.06-.11-.06H9.79a1.61 1.61 0 0 1-1.41-2.43l1.71-2.26a.75.75 0 0 1 1.2.9l-1.65 2.19q.03-.04.05.05.03.06.11.06h2.01c.59 0 1.11.3 1.41.81.27.51.27 1.11-.02 1.62"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBatteryCharging;
