import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconPlaybackSpeed = forwardRef<SVGSVGElement, IconProps>(
  function IconPlaybackSpeed(
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
              d="M12 22a10 10 0 0 0 0-20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 22A10 10 0 0 1 2 12C2 6.48 6.98 2 12.5 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray="4 3"
            />
            <path
              d="M13.89 9.93c1.07.88 1.61 1.32 1.61 2.07s-.54 1.19-1.61 2.07a15 15 0 0 1-1.65 1.16c-1.07.66-1.6.98-2.09.62s-.52-1.12-.61-2.63a22 22 0 0 1 0-2.44c.09-1.51.13-2.27.61-2.63s1.02-.04 2.1.62a15 15 0 0 1 1.64 1.16"
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
              opacity={duotone ? "0.4" : "1"}
              d="M9.6 1.52q1.17-.27 2.4-.27a10.75 10.75 0 1 1-2.4 21.23.75.75 0 1 1 .34-1.46q1 .23 2.06.23A9.25 9.25 0 1 0 9.94 2.98a.75.75 0 1 1-.33-1.46"
              fill="currentColor"
            />
            <path
              d="M7.31 3.13c.22.35.12.82-.23 1.04a9 9 0 0 0-2.91 2.9.75.75 0 0 1-1.27-.8A11 11 0 0 1 6.28 2.9a.75.75 0 0 1 1.03.23"
              fill="currentColor"
            />
            <path
              d="M3.13 16.69a.75.75 0 0 1 1.04.23 9 9 0 0 0 2.9 2.91.75.75 0 1 1-.8 1.27 11 11 0 0 1-3.37-3.38.75.75 0 0 1 .23-1.03"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.98 9.94a.75.75 0 1 0-1.46-.33 11 11 0 0 0 0 4.78.75.75 0 0 0 1.46-.33 9 9 0 0 1 0-4.12"
              fill="currentColor"
            />
            <path
              d="M15.5 12c0-.75-.54-1.19-1.61-2.07a15 15 0 0 0-1.65-1.16c-1.07-.66-1.6-.98-2.09-.62s-.52 1.12-.61 2.63a22 22 0 0 0 0 2.44c.09 1.51.13 2.27.61 2.63s1.02.04 2.1-.62a15 15 0 0 0 1.64-1.16c1.07-.88 1.61-1.32 1.61-2.07"
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
              d="M9.6 1.52q1.17-.27 2.4-.27a10.75 10.75 0 1 1-2.4 21.23.75.75 0 1 1 .34-1.46q1 .23 2.06.23A9.25 9.25 0 1 0 9.94 2.98a.75.75 0 1 1-.33-1.46"
              fill="currentColor"
            />
            <path
              d="M7.31 3.13c.22.35.12.82-.23 1.04a9 9 0 0 0-2.91 2.9.75.75 0 0 1-1.27-.8A11 11 0 0 1 6.28 2.9a.75.75 0 0 1 1.03.23"
              fill="currentColor"
            />
            <path
              d="M2.98 9.94a.75.75 0 1 0-1.46-.33 11 11 0 0 0 0 4.78.75.75 0 0 0 1.46-.33 9 9 0 0 1 0-4.12"
              fill="currentColor"
            />
            <path
              d="M3.13 16.69a.75.75 0 0 1 1.04.23 9 9 0 0 0 2.9 2.91.75.75 0 0 1-.8 1.27 11 11 0 0 1-3.37-3.38.75.75 0 0 1 .23-1.03"
              fill="currentColor"
            />
            <path
              d="M15.5 12c0-.75-.54-1.19-1.61-2.07a15 15 0 0 0-1.65-1.16c-1.07-.66-1.6-.98-2.09-.62s-.52 1.12-.61 2.63a22 22 0 0 0 0 2.44c.09 1.51.13 2.27.61 2.63s1.02.04 2.1-.62a15 15 0 0 0 1.64-1.16c1.07-.88 1.61-1.32 1.61-2.07"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconPlaybackSpeed;
