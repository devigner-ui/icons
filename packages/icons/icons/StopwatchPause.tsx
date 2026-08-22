import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStopwatchPause = forwardRef<SVGSVGElement, IconProps>(
  function IconStopwatchPause(
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
            <circle
              opacity={duotone ? "0.4" : "1"}
              cx="12"
              cy="13.0005"
              r="9"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M8 10.5c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54C8.8 9 9.03 9 9.5 9s.7 0 .88.08q.38.17.54.54c.08.18.08.41.08.88v5c0 .47 0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08s-.7 0-.88-.08a1 1 0 0 1-.54-.54C8 16.2 8 15.97 8 15.5z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M13 10.5c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54c.18-.08.41-.08.88-.08s.7 0 .88.08q.38.17.54.54c.08.18.08.41.08.88v5c0 .47 0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08s-.7 0-.88-.08a1 1 0 0 1-.54-.54c-.08-.18-.08-.41-.08-.88z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M10 2h4"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.25 2.75c0-.41.34-.75.75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M12 23a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
              fill="currentColor"
            />
            <path
              d="M11 16.5v-5c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54C10.2 10 9.97 10 9.5 10s-.7 0-.88.08a1 1 0 0 0-.54.54c-.08.18-.08.41-.08.88v5c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08s.7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88"
              fill="currentColor"
            />
            <path
              d="M16 16.5v-5c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08s-.7 0-.88.08a1 1 0 0 0-.54.54c-.08.18-.08.41-.08.88v5c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08s.7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88"
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
              d="M21 13.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-10 2.5v-5c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08s-.7 0-.88.08a1 1 0 0 0-.54.54c-.08.18-.08.41-.08.88v5c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08s.7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88m5 0v-5c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08s-.7 0-.88.08a1 1 0 0 0-.54.54c-.08.18-.08.41-.08.88v5c0 .47 0 .7.08.88q.17.38.54.54c.18.08.41.08.88.08s.7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88"
              fill="currentColor"
            />
            <path
              d="M10 2a.75.75 0 1 0 0 1.5h4A.75.75 0 0 0 14 2z"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStopwatchPause;
