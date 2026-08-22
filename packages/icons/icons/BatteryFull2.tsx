import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBatteryFull2 = forwardRef<SVGSVGElement, IconProps>(
  function IconBatteryFull2(
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
              d="M7.05 10a8 8 0 0 1 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.55 10a8 8 0 0 1 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.05 10a8 8 0 0 1 0 4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.67 19h-6c-4 0-5-1-5-5v-4c0-4 1-5 5-5h6c4 0 5 1 5 5v4c0 4-1 5-5 5"
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
              d="m7.05 14.75-.18-.02a.76.76 0 0 1-.55-.91c.3-1.19.3-2.45 0-3.64a.75.75 0 1 1 1.45-.36 9 9 0 0 1 0 4.36.75.75 0 0 1-.72.57"
              fill="currentColor"
            />
            <path
              d="m10.55 14.75-.18-.02a.76.76 0 0 1-.55-.91c.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55a9 9 0 0 1 0 4.36.8.8 0 0 1-.73.57"
              fill="currentColor"
            />
            <path
              d="m14.05 14.75-.18-.02a.76.76 0 0 1-.55-.91c.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55a9 9 0 0 1 0 4.36.8.8 0 0 1-.73.57"
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
              d="M13.6 4.79H8.02c-4.1 0-5.35 1.25-5.35 5.35v3.72c0 4.1 1.25 5.35 5.35 5.35h5.58c4.1 0 5.35-1.25 5.35-5.35v-3.72c0-4.1-1.25-5.35-5.35-5.35m-5.83 9.39a.75.75 0 0 1-.73.57l-.18-.02a.76.76 0 0 1-.55-.91c.3-1.19.3-2.45 0-3.64a.75.75 0 1 1 1.46-.36 9 9 0 0 1 0 4.36m3.5 0a.75.75 0 0 1-.73.57l-.18-.02a.76.76 0 0 1-.55-.91c.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55a9 9 0 0 1 0 4.36m3.5 0a.75.75 0 0 1-.73.57l-.18-.02a.76.76 0 0 1-.55-.91c.3-1.19.3-2.45 0-3.64-.1-.4.14-.81.55-.91.4-.1.81.14.91.55a9 9 0 0 1 0 4.36"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBatteryFull2;
