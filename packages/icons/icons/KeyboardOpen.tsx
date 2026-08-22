import { forwardRef } from "react";
import type { SVGProps } from "react";
import type { IconProps } from "./types";

const IconKeyboardOpen = forwardRef<SVGSVGElement, IconProps>(
  function IconKeyboardOpen(
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
              d="M7.93 2h9.47q.97 0 1.75.09c2.77.31 3.52 1.61 3.52 5.17v6.32c0 3.56-.75 4.86-3.52 5.17q-.77.1-1.75.09H7.93q-.97 0-1.75-.09c-2.77-.31-3.52-1.61-3.52-5.17V7.26c0-3.56.75-4.86 3.52-5.17q.78-.1 1.75-.09"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M14.25 8.32h3.68"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.41 14.11h10.53"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.67 22h10"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M7.86 8.3"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M11.16 8.3"
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
              d="M17.67 22.75h-10a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              opacity={duotone ? "0.4" : "1"}
              d="M18.67 19h-12a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4"
              fill="currentColor"
            />
            <path
              d="M17.93 9.07h-3.68a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.68a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
            <path
              d="M10.67 9.32a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1"
              fill="currentColor"
            />
            <path
              d="M7.52 9.32a1 1 0 0 1-1-1 1 1 0 0 1 1-1h.01a1 1 0 0 1 1 1c0 .55-.46 1-1.01 1"
              fill="currentColor"
            />
            <path
              d="M17.93 14.86H7.42a.76.76 0 0 1-.76-.75c0-.41.33-.75.74-.75h10.53a.75.75 0 1 1 0 1.5"
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
              d="M17.67 22.75h-10a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
              fill="currentColor"
            />
            <path
              d="M18.67 2h-12a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m-8.01 5.32a1 1 0 0 1 1.01 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 .99-1m-3.15 0a1 1 0 0 1 1.01 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1c0-.55.43-1 .99-1m10.42 7.54H7.43a.76.76 0 0 1-.76-.75c0-.41.33-.75.74-.75h10.53c.41 0 .75.34.75.75s-.34.75-.76.75m0-5.79h-3.68a.76.76 0 0 1-.75-.75c0-.41.34-.75.75-.75h3.68a.75.75 0 1 1 0 1.5"
              fill="currentColor"
            />
          </svg>
        )}
      </>
    );
  },
);

export default IconKeyboardOpen;
