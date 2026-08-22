import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconBugMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconBugMinimalistic(
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
              d="M5 10a7 7 0 1 1 14 0v5a7 7 0 1 1-14 0z"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M19 13h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M5 13H2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.5 7-1.8.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m3.5 7 1.8.72"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.5 3.5 17 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M9.5 3.5 7 2"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m20.5 19-2-.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="m3.5 19 2-.8"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.5 10.5h3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10.5 15.5h3"
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
              opacity={duotone ? "0.4" : "1"}
              d="M5 10a7 7 0 1 1 14 0v5a7 7 0 1 1-14 0z"
              fill="currentColor"
            />
            <path
              d="M9.75 15.5c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
            <path
              d="M10.5 9.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
              fill="currentColor"
            />
            <path
              d="M17.42 2.62a.75.75 0 1 0-.84-1.24L13.8 3.23q.9.25 1.67.7z"
              fill="currentColor"
            />
            <path
              d="M18.83 8.46a7 7 0 0 0-.48-1.4l.07-.04 1.8-.72a.75.75 0 1 1 .56 1.4l-1.8.72z"
              fill="currentColor"
            />
            <path d="M19 13.75h3a.75.75 0 0 0 0-1.5h-3z" fill="currentColor" />
            <path
              d="M17.94 18.7q.37-.58.62-1.25.11.01.22.05l2 .8a.75.75 0 0 1-.56 1.4l-2-.8a1 1 0 0 1-.28-.2"
              fill="currentColor"
            />
            <path
              d="M5.44 17.45q.25.66.62 1.25a1 1 0 0 1-.28.2l-2 .8a.75.75 0 0 1-.56-1.4l2-.8z"
              fill="currentColor"
            />
            <path d="M5 12.25H2a.75.75 0 0 0 0 1.5h3z" fill="currentColor" />
            <path
              d="M5.65 7.06q-.3.66-.48 1.4l-.15-.04-1.8-.72a.75.75 0 1 1 .56-1.4l1.8.72z"
              fill="currentColor"
            />
            <path
              d="m8.53 3.92-1.95-1.3a.75.75 0 0 1 .84-1.24l2.78 1.85q-.9.25-1.67.7"
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
              d="M10.42 3.18 7.4 1.36a.75.75 0 1 0-.78 1.28l2.03 1.22a7 7 0 0 0-3 3.2L3.79 6.3a.75.75 0 0 0-.56 1.4l1.95.77Q5 9.21 5 10v2.25H2a.75.75 0 1 0 0 1.5h3V15q0 1.29.43 2.42l-2.2.88a.75.75 0 1 0 .55 1.4l2.32-.93a7 7 0 0 0 11.8 0l2.32.93a.75.75 0 0 0 .56-1.4l-2.21-.88Q19 16.28 19 15v-1.25h3a.75.75 0 0 0 0-1.5h-3V10q0-.78-.17-1.53l1.95-.77a.75.75 0 1 0-.56-1.4l-1.87.75a7 7 0 0 0-2.99-3.2l2.03-1.2a.75.75 0 1 0-.78-1.3l-3.03 1.83a7 7 0 0 0-3.16 0m.08 6.57a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-.75 5.75c0-.41.34-.75.75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconBugMinimalistic;
