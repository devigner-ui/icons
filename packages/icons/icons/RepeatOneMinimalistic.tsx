import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconRepeatOneMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconRepeatOneMinimalistic(
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
              d="M9.5 19.75a.75.75 0 0 0 0-1.5zM11 5v.75a.75.75 0 0 0 .53-1.28zM9.53 2.47a.75.75 0 0 0-1.06 1.06zM9.5 18.25H9v1.5h.5zM9 5.75h2v-1.5H9zm2.53-1.28-2-2-1.06 1.06 2 2zM1.25 12A7.75 7.75 0 0 0 9 19.75v-1.5A6.25 6.25 0 0 1 2.75 12zm1.5 0c0-3.45 2.8-6.25 6.25-6.25v-1.5A7.75 7.75 0 0 0 1.25 12z"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M13 19v-.75a.75.75 0 0 0-.53 1.28zm1.47 2.53a.75.75 0 1 0 1.06-1.06zm.03-17.28a.75.75 0 0 0 0 1.5zm.5 14h-2v1.5h2zm-2.53 1.28 2 2 1.06-1.06-2-2zM14.5 5.75h.5v-1.5h-.5zM21.25 12c0 3.45-2.8 6.25-6.25 6.25v1.5A7.75 7.75 0 0 0 22.75 12zm1.5 0A7.75 7.75 0 0 0 15 4.25v1.5c3.45 0 6.25 2.8 6.25 6.25z"
              fill="currentColor"
            />
            <path
              d="M16 12H8"
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
              d="M8.72 3.2a.7.7 0 0 1 .98 0l1.86 1.85c.2.2.26.5.15.75a.7.7 0 0 1-.64.43H9.21A5.8 5.8 0 0 0 3.4 12a5.8 5.8 0 0 0 5.81 5.77h.46c.39 0 .7.3.7.7a.7.7 0 0 1-.7.68h-.46A7.2 7.2 0 0 1 2 12a7.2 7.2 0 0 1 7.2-7.15h.19l-.67-.67a.7.7 0 0 1 0-.98"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.63 5.54c0-.38.31-.7.7-.7h.46A7.2 7.2 0 0 1 22 12a7.2 7.2 0 0 1-7.2 7.15h-.19l.67.67c.28.27.28.7 0 .98a.7.7 0 0 1-.98 0l-1.86-1.85a.7.7 0 0 1-.15-.75.7.7 0 0 1 .64-.43h1.86A5.8 5.8 0 0 0 20.6 12a5.8 5.8 0 0 0-5.8-5.77h-.47a.7.7 0 0 1-.7-.7"
              fill="currentColor"
            />
            <g opacity={duotone ? "0.4" : "1"}>
              <path
                d="M5.49 12A3.7 3.7 0 0 1 9.2 8.3h5.58A3.7 3.7 0 0 1 18.5 12a3.7 3.7 0 0 1-3.72 3.7H9.21A3.7 3.7 0 0 1 5.49 12"
                fill="currentColor"
              />
            </g>
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
              d="M8.72 3.2a.7.7 0 0 1 .98 0l1.86 1.85c.2.2.26.5.15.75a.7.7 0 0 1-.64.43H9.21A5.8 5.8 0 0 0 3.4 12a5.8 5.8 0 0 0 5.81 5.77h.46c.39 0 .7.3.7.7a.7.7 0 0 1-.7.68h-.46A7.2 7.2 0 0 1 2 12a7.2 7.2 0 0 1 7.2-7.15h.19l-.67-.67a.7.7 0 0 1 0-.98"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.63 5.54c0-.38.31-.7.7-.7h.46A7.2 7.2 0 0 1 22 12a7.2 7.2 0 0 1-7.2 7.15h-.19l.67.67c.28.27.28.7 0 .98a.7.7 0 0 1-.98 0l-1.86-1.85a.7.7 0 0 1-.15-.75.7.7 0 0 1 .64-.43h1.86A5.8 5.8 0 0 0 20.6 12a5.8 5.8 0 0 0-5.8-5.77h-.47a.7.7 0 0 1-.7-.7"
              fill="currentColor"
            />
            <path
              d="M5.49 12A3.7 3.7 0 0 1 9.2 8.3h5.58A3.7 3.7 0 0 1 18.5 12a3.7 3.7 0 0 1-3.72 3.7H9.21A3.7 3.7 0 0 1 5.49 12"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconRepeatOneMinimalistic;
