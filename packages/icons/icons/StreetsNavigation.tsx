import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStreetsNavigation = forwardRef<SVGSVGElement, IconProps>(
  function IconStreetsNavigation(
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
              d="M18 16.92c1.14-.1 1.92-.32 2.54-.83a4 4 0 0 0 .55-.55c.91-1.1.91-2.75.91-6.04s0-4.93-.9-6.04a4 4 0 0 0-.56-.55C19.44 2 17.79 2 14.5 2h-5c-3.29 0-4.93 0-6.04.9a4 4 0 0 0-.55.56C2 4.56 2 6.21 2 9.5s0 4.93.9 6.04a4 4 0 0 0 .56.55c.62.5 1.4.73 2.54.83"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.5 15.5-6.5-5M3.5 3 14 10.5m6.5-7-6.5 7"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m15.27 19.2-1.34-2.67C13.1 14.84 12.67 14 12 14s-1.09.84-1.93 2.53L8.73 19.2c-.5 1.02-.77 1.54-.73 1.86.06.46.41.84.87.93.32.06.85-.16 1.9-.6.4-.16.6-.24.8-.28q.43-.09.87 0c.2.04.4.12.78.28 1.06.44 1.59.66 1.9.6.47-.09.82-.47.88-.93.04-.32-.22-.84-.73-1.86"
              stroke="currentColor"
              strokeWidth={strokeWidth}
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
              d="m21.32 3.79-6.21 6.63 6.18 4.85c.71-1.1.71-2.74.71-5.77 0-2.98 0-4.61-.68-5.71"
              fill="currentColor"
            />
            <path
              d="m15.27 19.2-1.34-2.67C13.1 14.84 12.67 14 12 14s-1.09.84-1.93 2.53L8.73 19.2c-.5 1.02-.77 1.54-.73 1.86.06.46.41.84.87.93.32.06.85-.16 1.9-.6.4-.16.6-.24.8-.28q.43-.09.87 0c.2.04.4.12.78.28 1.06.44 1.59.66 1.9.6.47-.09.82-.47.88-.93.04-.32-.22-.84-.73-1.86"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2 9.5v.04c0 3.26 0 4.9.9 6a4 4 0 0 0 .56.55q.27.23.6.38C5.14 17 6.74 17 9.5 17h6.34q1.25 0 2.16-.08a5 5 0 0 0 2.2-.6l-6.65-5.22L2.96 3.4l-.05.06C2 4.56 2 6.21 2 9.5"
              fill="currentColor"
            />
            <path
              d="M14.5 2h-5c-2.62 0-4.2 0-5.28.46L13.9 9.5l6.36-6.79C19.17 2 17.53 2 14.5 2"
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
              d="M14.5 2h-5c-2.62 0-4.2 0-5.28.46L13.9 9.5l6.36-6.79C19.17 2 17.53 2 14.5 2"
              fill="currentColor"
            />
            <path
              d="m21.32 3.79-6.21 6.63 6.18 4.85c.71-1.1.71-2.74.71-5.77 0-2.98 0-4.61-.68-5.71"
              fill="currentColor"
            />
            <path
              d="M2 9.5c0 3.29 0 4.93.9 6.04a4 4 0 0 0 .56.55c.62.5 1.4.73 2.54.83q.9.07 2.16.08l.57-1.14.04-.1c.38-.76.74-1.47 1.1-1.99S10.9 12.5 12 12.5s1.76.75 2.13 1.27.72 1.23 1.1 2l.04.09.57 1.14q1.25 0 2.16-.08a5 5 0 0 0 2.2-.6l-6.65-5.22L2.96 3.4l-.05.06C2 4.56 2 6.21 2 9.5"
              fill="currentColor"
            />
            <path
              d="m15.27 19.2-1.34-2.67C13.1 14.84 12.67 14 12 14s-1.09.84-1.93 2.53L8.73 19.2c-.5 1.02-.77 1.54-.73 1.86.06.46.41.84.87.93.32.06.85-.16 1.9-.6.4-.16.6-.24.8-.28q.43-.09.87 0c.2.04.4.12.78.28 1.06.44 1.59.66 1.9.6.47-.09.82-.47.88-.93.04-.32-.22-.84-.73-1.86"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStreetsNavigation;
