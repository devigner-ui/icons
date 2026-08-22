import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconStarFallMinimalistic2 = forwardRef<SVGSVGElement, IconProps>(
  function IconStarFallMinimalistic2(
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
              d="M11.81 6.73C12.82 4.9 13.33 4 14.1 4s1.26.9 2.28 2.73l.26.47c.29.51.43.77.65.94s.5.24 1.07.36l.5.12c1.97.44 2.96.67 3.2 1.42.23.75-.44 1.54-1.79 3.1l-.34.41c-.38.45-.57.67-.66.94-.09.28-.06.58 0 1.17l.05.54c.2 2.1.3 3.14-.3 3.6-.62.47-1.54.05-3.38-.8l-.48-.22c-.52-.24-.78-.36-1.06-.36s-.54.12-1.06.36l-.48.22c-1.84.85-2.76 1.27-3.38.8-.61-.46-.5-1.5-.3-3.6l.05-.54c.05-.6.08-.89 0-1.17s-.28-.5-.66-.94l-.35-.4c-1.34-1.57-2-2.36-1.78-3.11.24-.75 1.22-.98 3.19-1.42l.51-.12c.56-.12.84-.19 1.06-.36s.37-.43.66-.94z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.09 16a4.7 4.7 0 0 1 4-.87"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M2.09 10.5c1-.5 1.29-.44 2-.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m2 5.6.2-.11a8.5 8.5 0 0 1 6.75-1l.21.05"
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
              d="M11.81 6.73C12.82 4.9 13.33 4 14.1 4s1.26.9 2.28 2.73l.26.47c.29.51.43.77.65.94s.5.24 1.07.36l.5.12c1.97.44 2.96.67 3.2 1.42.23.75-.44 1.54-1.79 3.1l-.34.41c-.38.45-.57.67-.66.94-.09.28-.06.58 0 1.17l.05.54c.2 2.1.3 3.14-.3 3.6-.62.47-1.54.05-3.38-.8l-.48-.22c-.52-.24-.78-.36-1.06-.36s-.54.12-1.06.36l-.48.22c-1.84.85-2.76 1.27-3.38.8-.61-.46-.5-1.5-.3-3.6l.05-.54c.05-.6.08-.89 0-1.17s-.28-.5-.66-.94l-.35-.4c-1.34-1.57-2-2.36-1.78-3.11.24-.75 1.22-.98 3.19-1.42l.51-.12c.56-.12.84-.19 1.06-.36s.37-.43.66-.94z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.75 5.2a7.7 7.7 0 0 0-6.16.93l-.21.13a.75.75 0 0 1-.76-1.3l.2-.12a9.2 9.2 0 0 1 7.34-1.08l.2.06a.75.75 0 0 1-.4 1.44zM4.84 9.94a.75.75 0 0 1-.69.8l-.37.03-.44.05c-.2.04-.45.12-.92.35a.75.75 0 1 1-.67-1.34c.54-.27.93-.4 1.3-.48q.38-.07.74-.08l.24-.02c.4-.03.77.27.8.69m1.08 5.92a4 4 0 0 0-3.37.73.75.75 0 1 1-.93-1.18 5.5 5.5 0 0 1 4.64-1.01.75.75 0 0 1-.34 1.46"
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
              d="M11.81 6.73C12.82 4.9 13.33 4 14.1 4s1.26.9 2.28 2.73l.26.47c.29.51.43.77.65.94s.5.24 1.07.36l.5.12c1.97.44 2.96.67 3.2 1.42.23.75-.44 1.54-1.79 3.1l-.34.41c-.38.45-.57.67-.66.94-.09.28-.06.58 0 1.17l.05.54c.2 2.1.3 3.14-.3 3.6-.62.47-1.54.05-3.38-.8l-.48-.22c-.52-.24-.78-.36-1.06-.36s-.54.12-1.06.36l-.48.22c-1.84.85-2.76 1.27-3.38.8-.61-.46-.5-1.5-.3-3.6l.05-.54c.05-.6.08-.89 0-1.17s-.28-.5-.66-.94l-.35-.4c-1.34-1.57-2-2.36-1.78-3.11.24-.75 1.22-.98 3.19-1.42l.51-.12c.56-.12.84-.19 1.06-.36s.37-.43.66-.94z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.75 5.2a7.7 7.7 0 0 0-6.16.93l-.21.13a.75.75 0 0 1-.76-1.3l.2-.12a9.2 9.2 0 0 1 7.34-1.08l.2.06a.75.75 0 0 1-.4 1.44zM4.84 9.94a.75.75 0 0 1-.69.8l-.37.03-.44.05c-.2.04-.45.12-.92.35a.75.75 0 1 1-.67-1.34c.54-.27.93-.4 1.3-.48q.38-.07.74-.08l.24-.02c.4-.03.77.27.8.69m1.08 5.92a4 4 0 0 0-3.37.73.75.75 0 1 1-.93-1.18 5.5 5.5 0 0 1 4.64-1.01.75.75 0 0 1-.34 1.46"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconStarFallMinimalistic2;
