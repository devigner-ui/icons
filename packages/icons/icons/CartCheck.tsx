import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCartCheck = forwardRef<SVGSVGElement, IconProps>(
  function IconCartCheck(
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
              d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="m2.26 3.1.25-.72zm-.01-.8a.75.75 0 0 0-.5 1.4zm2.34 2.02.62-.42zm1.3 10.27-.55.51zm14.77-4.7.73.14zm-.5 2.42.73.15zm.57-5.61-.59.45zm-1.6 8.35-.47-.58zM5.71 9.76V7.04H4.2v2.72zM2.5 2.38l-.26-.09-.5 1.42.26.09zm8.43 13.87h5.3v-1.5h-5.3zM5.7 7.04q.01-1.05-.05-1.78c-.06-.5-.17-.95-.45-1.36l-1.24.85c.09.13.16.31.2.67.04.38.04.88.04 1.62zM2 3.8c.67.23 1.1.39 1.43.55.3.15.44.27.53.4L5.2 3.9A3 3 0 0 0 4.1 3q-.65-.3-1.6-.62zm2.2 5.96c0 1.45.01 2.5.15 3.3.15.85.44 1.47.98 2.04l1.1-1.03c-.33-.34-.5-.67-.6-1.26-.11-.65-.13-1.56-.13-3.05zm6.73 5c-1.42 0-2.4-.01-3.14-.12-.72-.1-1.1-.28-1.37-.57L5.34 15.1c.6.63 1.35.9 2.25 1.03.87.12 1.98.12 3.35.12zm-5.97-7.9h12.13v-1.5H4.96zm14.96 2.86-.5 2.43 1.47.3.5-2.43zM17.1 6.87q1.3-.02 2.2.07.45.05.68.13c.16.06.18.1.17.08l1.19-.91c-.24-.3-.57-.48-.87-.58q-.46-.16-1-.21c-.7-.08-1.54-.08-2.37-.08zm4.3 3.16c.17-.85.32-1.56.35-2.13a2.4 2.4 0 0 0-.41-1.66l-1.19.91c.06.09.13.23.1.66a17 17 0 0 1-.32 1.93zm-5.15 6.22q1.14.01 1.92-.06a3 3 0 0 0 1.45-.56l-.95-1.16c-.13.1-.3.18-.69.23-.4.05-.93.05-1.73.05zm3.18-4.1c-.16.79-.27 1.31-.4 1.7-.12.36-.23.52-.36.62l.95 1.16c.42-.35.66-.8.84-1.3q.23-.75.44-1.87z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m11 10.8 1.14 1.2L15 9"
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
              d="M2.08 2.75c.14-.39.57-.6.96-.46l.3.1q.93.33 1.55.61c.44.22.82.48 1.1.9.29.41.4.87.46 1.36q.04.33.04.74h10.64c1.69 0 3.2 0 3.65.58.44.57.27 1.44-.08 3.18l-.5 2.43c-.32 1.53-.47 2.3-1.02 2.74-.56.45-1.34.45-2.9.45h-5.3c-2.79 0-4.18 0-5.05-.91-.87-.92-.93-1.89-.93-4.83v-2.6c0-.74 0-1.24-.04-1.62a1.4 1.4 0 0 0-.2-.67 1 1 0 0 0-.53-.4A15 15 0 0 0 2.8 3.8l-.26-.1a.75.75 0 0 1-.46-.95"
              fill="currentColor"
            />
            <path
              d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
            <path
              d="M16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
            <path
              d="M15.54 9.52a.75.75 0 1 0-1.08-1.04l-2.32 2.43-.6-.63a.75.75 0 0 0-1.08 1.04l1.14 1.2a.75.75 0 0 0 1.09 0z"
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
              d="M3.04 2.3a.75.75 0 0 0-.5 1.4l.26.1c.67.23 1.11.39 1.43.55.3.15.44.27.53.4s.16.31.2.67C5 5.8 5 6.3 5 7.04v2.6c0 2.94.06 3.91.93 4.83s2.26.91 5.05.91h5.3c1.56 0 2.34 0 2.9-.45.55-.45.7-1.21 1.02-2.74l.5-2.43c.35-1.74.52-2.6.08-3.18C20.33 6 18.82 6 17.13 6H6.5q0-.4-.04-.74c-.05-.5-.17-.95-.45-1.36A3 3 0 0 0 4.9 3q-.63-.29-1.56-.6zm12.48 6.16c.3.28.3.76.02 1.06l-2.85 3a.75.75 0 0 1-1.09 0l-1.14-1.2a.75.75 0 1 1 1.08-1.04l.6.63 2.32-2.43a.75.75 0 0 1 1.06-.02"
              fill="currentColor"
            />
            <path
              d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
            <path
              d="M16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCartCheck;
