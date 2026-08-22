import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconCameraMinimalistic = forwardRef<SVGSVGElement, IconProps>(
  function IconCameraMinimalistic(
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
              cx="12"
              cy="13"
              r="3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M10 20h4c2.8 0 4.21 0 5.22-.67a4 4 0 0 0 1.1-1.1C21 17.2 21 15.8 21 13s0-4.21-.67-5.22a4 4 0 0 0-1.1-1.1C18.2 6 16.8 6 14 6h-4c-2.8 0-4.21 0-5.22.67a4 4 0 0 0-1.1 1.1C3 8.8 3 10.2 3 13s0 4.21.67 5.22a4 4 0 0 0 1.1 1.1C5.8 20 7.2 20 10 20"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
            <path
              d="M18 10h-.5"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.5 3.5h-5"
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
              d="M9.78 21h4.44c3.12 0 4.68 0 5.8-.72q.73-.48 1.23-1.18c.75-1.1.75-2.6.75-5.6 0-3.01 0-4.51-.75-5.6a4 4 0 0 0-1.23-1.18C18.9 6 17.34 6 14.22 6H9.78c-3.12 0-4.68 0-5.8.72q-.73.48-1.23 1.18C2 9 2 10.5 2 13.5s0 4.51.75 5.6q.49.7 1.23 1.18c1.12.72 2.68.72 5.8.72"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4c0-.55.41-1 .92-1h6.16c.5 0 .92.45.92 1s-.41 1-.92 1H8.92C8.42 5 8 4.55 8 4"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.28 10.29c0-.45.37-.8.83-.8h.56a.8.8 0 0 1 .83.8c0 .44-.37.8-.83.8h-.56a.8.8 0 0 1-.83-.8"
              fill="none"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.83 13.5A4.1 4.1 0 0 1 12 9.48a4.1 4.1 0 0 1 4.17 4.02A4.1 4.1 0 0 1 12 17.52a4.1 4.1 0 0 1-4.17-4.02m1.67 0a2.46 2.46 0 0 1 2.5-2.41c1.38 0 2.5 1.08 2.5 2.41a2.46 2.46 0 0 1-2.5 2.41 2.46 2.46 0 0 1-2.5-2.41"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.11 9.48a.8.8 0 0 0-.83.8c0 .45.37.81.83.81h.56c.46 0 .83-.36.83-.8s-.37-.8-.83-.8z"
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
              d="M8 4c0-.55.41-1 .92-1h6.16c.5 0 .92.45.92 1s-.41 1-.92 1H8.92C8.42 5 8 4.55 8 4"
              fill="currentColor"
            />
            <path
              d="M9.5 13.5a2.46 2.46 0 0 1 2.5-2.41c1.38 0 2.5 1.08 2.5 2.41a2.46 2.46 0 0 1-2.5 2.41 2.46 2.46 0 0 1-2.5-2.41"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.22 21H9.78c-3.12 0-4.68 0-5.8-.72q-.73-.48-1.23-1.18C2 18 2 16.5 2 13.5c0-3.01 0-4.51.75-5.6q.49-.7 1.23-1.18C5.1 6 6.66 6 9.78 6h4.44c3.12 0 4.68 0 5.8.72q.73.48 1.23 1.18C22 9 22 10.5 22 13.5s0 4.51-.75 5.6q-.49.7-1.23 1.18c-1.12.72-2.68.72-5.8.72m-6.39-7.5A4.1 4.1 0 0 1 12 9.48a4.1 4.1 0 0 1 4.17 4.02A4.1 4.1 0 0 1 12 17.52a4.1 4.1 0 0 1-4.17-4.02m9.45-3.21c0-.45.37-.8.83-.8h.56a.8.8 0 0 1 .83.8c0 .44-.37.8-.83.8h-.56a.8.8 0 0 1-.83-.8"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconCameraMinimalistic;
